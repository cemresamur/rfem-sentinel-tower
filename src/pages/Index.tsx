import { useState } from 'react';
import { Play, Settings, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { ModelsSidebar } from '@/components/rfem/ModelsSidebar';
import { ConfigurationBar } from '@/components/rfem/ConfigurationBar';
import { KPICards } from '@/components/rfem/overview/KPICards';
import { RiskHeatmap } from '@/components/rfem/overview/RiskHeatmap';
import { AnalysisTimeline } from '@/components/rfem/overview/AnalysisTimeline';
import { ElementsTable } from '@/components/rfem/ElementsTable';
import { ReportsTab } from '@/components/rfem/ReportsTab';
import { CreateTaskDialog } from '@/components/rfem/CreateTaskDialog';
import { UploadCADDialog } from '@/components/rfem/UploadCADDialog';
import { Scene3D } from '@/components/rfem/viewer/Scene3D';
import { ViewerControls } from '@/components/rfem/viewer/ViewerControls';
import { Model, MemberLoad, Thresholds, AnalysisResult, ElementWithMetrics } from '@/types/rfem';
import { DEFAULT_CONFIG } from '@/config/api';
import { mockModels, mockElementsByModel, mockAnalysisResultsByModel, generateMockProgress } from '@/lib/mockData';
import { modelGeometryMap } from '@/lib/mockGeometry';

const Index = () => {
  const { toast } = useToast();
  const [demoMode, setDemoMode] = useState(true);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [loadCase, setLoadCase] = useState(DEFAULT_CONFIG.loadCase);
  const [thresholds, setThresholds] = useState<Thresholds>(DEFAULT_CONFIG.thresholds);
  const [memberLoads, setMemberLoads] = useState<MemberLoad[]>([
    { member_id: null, fy: null },
  ]);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [taskDialogOpen, setTaskDialogOpen] = useState(false);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState<ElementWithMetrics | null>(null);
  const [selectedTab, setSelectedTab] = useState('overview');

  const models = demoMode ? mockModels : [];
  
  // Get model-specific data
  const currentElements = selectedModel?.id && mockElementsByModel[selectedModel.id] 
    ? mockElementsByModel[selectedModel.id] 
    : mockElementsByModel['model-1'];
  
  const current3DGeometry = selectedModel?.id && modelGeometryMap[selectedModel.id]
    ? modelGeometryMap[selectedModel.id]
    : modelGeometryMap['model-1'];

  const runAnalysis = async () => {
    if (!selectedModel) {
      toast({
        title: 'No Model Selected',
        description: 'Please select a model before running analysis',
        variant: 'destructive',
      });
      return;
    }

    setIsRunning(true);
    setProgress(0);
    setCurrentStep(0);
    setAnalysisResult(null);

    // Simulate analysis with progress
    if (demoMode) {
      const steps = generateMockProgress();
      for (let i = 0; i < steps.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setProgress(steps[i].progress * 100);
        setCurrentStep(i);
      }
      
      // Get model-specific result
      const modelResult = selectedModel?.id && mockAnalysisResultsByModel[selectedModel.id]
        ? mockAnalysisResultsByModel[selectedModel.id]
        : mockAnalysisResultsByModel['model-1'];
      
      setAnalysisResult(modelResult);
      toast({
        title: 'Analysis Complete',
        description: `Found ${modelResult.summary?.exceed_count} exceedances`,
      });
    }

    setIsRunning(false);
  };

  const handleElementClick = (elementId: number) => {
    setSelectedTab('elements');
    toast({
      title: 'Element Selected',
      description: `Viewing details for element #${elementId}`,
    });
  };

  const handleCreateTask = (element: ElementWithMetrics) => {
    setSelectedElement(element);
    setTaskDialogOpen(true);
  };

  const handleTaskSubmit = (task: any) => {
    toast({
      title: 'Task Created',
      description: `Site task created for element #${task.element_id}`,
    });
  };

  const handleCADUpload = (file: File) => {
    // In production, this would parse the CAD file and extract geometry
    toast({
      title: 'Processing CAD File',
      description: `Parsing ${file.name} and extracting structural elements...`,
    });

    // Simulate processing
    setTimeout(() => {
      toast({
        title: 'CAD File Loaded',
        description: '3D model ready for analysis. View in 3D Viewer tab.',
      });
      setSelectedTab('3d-viewer');
    }, 2000);
  };

  const enrichedElements: ElementWithMetrics[] = currentElements.map((element) => {
    const exceedance = analysisResult?.exceedances?.find((exc) => exc.element_id === element.id);
    const heatmapData = analysisResult?.heatmap?.find((h) => h.element_id === element.id);

    const workerTasks = element.id === 123 ? [
      { id: 'task-1', description: 'Install temporary shoring at NW corner', priority: 'high' as const, estimatedHours: 4 },
      { id: 'task-2', description: 'Reduce crane load by 15%', priority: 'high' as const, estimatedHours: 2 },
      { id: 'task-3', description: 'Verify foundation bolt tension', priority: 'medium' as const, estimatedHours: 1 },
    ] : element.id === 451 ? [
      { id: 'task-4', description: 'Reduce applied load on north beam', priority: 'high' as const, estimatedHours: 3 },
      { id: 'task-5', description: 'Install additional support brackets', priority: 'medium' as const, estimatedHours: 6 },
    ] : exceedance ? [
      { id: `task-${element.id}`, description: `Address ${exceedance.type} issue at ${exceedance.location}`, priority: 'medium' as const, estimatedHours: 4 },
    ] : undefined;

    return {
      ...element,
      utilization: heatmapData?.util,
      deflection_mm: exceedance?.type === 'deflection_mm' ? exceedance.value : undefined,
      location: exceedance?.location,
      recommendation: exceedance?.recommendation,
      workerTasks,
    };
  });

  return (
    <div className="flex h-screen w-full bg-background">
      {/* Sidebar */}
      <ModelsSidebar
        models={models}
        selectedModel={selectedModel}
        onSelectModel={setSelectedModel}
        onUpload={() => setUploadDialogOpen(true)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 tech-panel status-bar hud-corners">
          <div className="flex h-16 items-center px-6 justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-glow-primary shadow-[0_0_10px_hsl(var(--glow-primary))] animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-glow-primary shadow-[0_0_10px_hsl(var(--glow-primary))] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 rounded-full bg-glow-primary shadow-[0_0_10px_hsl(var(--glow-primary))] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
              <h1 className="text-xl font-bold hologram-text tracking-[0.2em]">◢ RFEM ANALYSIS PLATFORM ◣</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded cut-corner border border-glow-primary/30 bg-navy/30">
                <span className="text-xs text-glow-primary uppercase tracking-wider">System:</span>
                <span className="text-xs font-bold text-white">ONLINE</span>
                <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_10px_hsl(var(--success))]"></div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded cut-corner border border-glow-primary/30 bg-navy/30">
                <Switch
                  id="demo-mode"
                  checked={demoMode}
                  onCheckedChange={setDemoMode}
                  className="data-[state=checked]:bg-glow-primary"
                />
                <Label htmlFor="demo-mode" className="text-xs text-glow-primary uppercase tracking-wider">
                  Demo Mode
                </Label>
              </div>
            </div>
          </div>
        </header>

        {/* Configuration Bar */}
        <ConfigurationBar
          loadCase={loadCase}
          thresholds={thresholds}
          memberLoads={memberLoads}
          onLoadCaseChange={setLoadCase}
          onThresholdsChange={setThresholds}
          onMemberLoadsChange={setMemberLoads}
        />

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto p-6">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <div className="flex items-center justify-between mb-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="3d-viewer">3D Viewer</TabsTrigger>
                <TabsTrigger value="elements">Elements</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm" onClick={() => setUploadDialogOpen(true)}>
                <Upload className="h-4 w-4 mr-2" />
                Upload CAD
              </Button>
            </div>

            <TabsContent value="overview" className="space-y-6">
              {/* Run Analysis Button */}
              <div className="flex items-center gap-4">
                <Button
                  onClick={runAnalysis}
                  disabled={isRunning || !selectedModel}
                  size="lg"
                  className="min-w-40"
                >
                  {isRunning ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Run Analysis
                    </>
                  )}
                </Button>
                {isRunning && (
                  <div className="flex-1 max-w-md">
                    <Progress value={progress} className="h-2" />
                    <p className="text-sm text-muted-foreground mt-1">
                      {progress.toFixed(0)}% complete
                    </p>
                  </div>
                )}
              </div>

              {analysisResult && analysisResult.summary && (
                <>
                  <KPICards summary={analysisResult.summary} />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {analysisResult.heatmap && (
                      <RiskHeatmap
                        heatmap={analysisResult.heatmap}
                        onElementClick={handleElementClick}
                      />
                    )}
                    <AnalysisTimeline
                      status={isRunning ? 'running' : analysisResult.status}
                      currentStep={currentStep}
                    />
                  </div>
                </>
              )}

              {!analysisResult && !isRunning && (
                <div className="text-center py-16 text-muted-foreground">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Ready to analyze</p>
                  <p className="text-sm mt-1">
                    {selectedModel
                      ? 'Click "Run Analysis" to begin structural checks'
                      : 'Select a model from the sidebar to get started'}
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="3d-viewer">
              <ViewerControls />
              {analysisResult && analysisResult.heatmap ? (
                <Scene3D heatmap={analysisResult.heatmap} elements={current3DGeometry} />
              ) : (
                <div className="text-center py-16 text-muted-foreground">
                  <Upload className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No 3D Model Loaded</p>
                  <p className="text-sm mt-1 mb-4">
                    Upload a CAD file or run an analysis to view the 3D heatmap
                  </p>
                  <Button onClick={() => setUploadDialogOpen(true)} variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload CAD File
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="elements">
              <ElementsTable elements={enrichedElements} onCreateTask={handleCreateTask} />
            </TabsContent>

            <TabsContent value="reports">
              <ReportsTab
                reportUrl={analysisResult?.report_url}
                exceedances={analysisResult?.exceedances}
                analysisResult={analysisResult}
                modelName={mockModels.find(m => m.id === selectedModel?.id)?.name}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <footer className="border-t bg-card px-6 py-3 text-sm text-muted-foreground">
          <div className="flex items-center justify-between">
            <div>
              {memberLoads.filter((l) => l.member_id && l.fy).length} member load(s) configured
            </div>
            {analysisResult && (
              <div>Last analysis: {new Date().toLocaleTimeString()}</div>
            )}
          </div>
        </footer>
      </div>

      {/* Task Creation Dialog */}
      <CreateTaskDialog
        element={selectedElement}
        modelId={selectedModel?.id || ''}
        open={taskDialogOpen}
        onOpenChange={setTaskDialogOpen}
        onSubmit={handleTaskSubmit}
      />

      {/* CAD Upload Dialog */}
      <UploadCADDialog
        open={uploadDialogOpen}
        onOpenChange={setUploadDialogOpen}
        onUpload={handleCADUpload}
      />
    </div>
  );
};

export default Index;
