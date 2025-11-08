import { useState } from 'react';
import { Play, Settings } from 'lucide-react';
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
import { Model, MemberLoad, Thresholds, AnalysisResult, ElementWithMetrics } from '@/types/rfem';
import { DEFAULT_CONFIG } from '@/config/api';
import { mockModels, mockElements, mockAnalysisResult, generateMockProgress } from '@/lib/mockData';

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
  const [selectedElement, setSelectedElement] = useState<ElementWithMetrics | null>(null);
  const [selectedTab, setSelectedTab] = useState('overview');

  const models = demoMode ? mockModels : [];

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
      setAnalysisResult(mockAnalysisResult);
      toast({
        title: 'Analysis Complete',
        description: `Found ${mockAnalysisResult.summary?.exceed_count} exceedances`,
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

  const enrichedElements: ElementWithMetrics[] = mockElements.map((element) => {
    const exceedance = analysisResult?.exceedances?.find((exc) => exc.element_id === element.id);
    const heatmapData = analysisResult?.heatmap?.find((h) => h.element_id === element.id);

    return {
      ...element,
      utilization: heatmapData?.util,
      deflection_mm: exceedance?.type === 'deflection_mm' ? exceedance.value : undefined,
      location: exceedance?.location,
      recommendation: exceedance?.recommendation,
    };
  });

  return (
    <div className="flex h-screen w-full bg-background">
      {/* Sidebar */}
      <ModelsSidebar
        models={models}
        selectedModel={selectedModel}
        onSelectModel={setSelectedModel}
        onUpload={() =>
          toast({
            title: 'Upload Feature',
            description: 'Model upload functionality would be implemented here',
          })
        }
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">RFEM Risk Control Tower</h1>
              <p className="text-sm text-muted-foreground">
                {selectedModel ? selectedModel.name : 'Select a model to begin'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Switch
                  id="demo-mode"
                  checked={demoMode}
                  onCheckedChange={setDemoMode}
                />
                <Label htmlFor="demo-mode" className="text-sm">
                  Demo Mode
                </Label>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
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
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="elements">Elements</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

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

            <TabsContent value="elements">
              <ElementsTable elements={enrichedElements} onCreateTask={handleCreateTask} />
            </TabsContent>

            <TabsContent value="reports">
              <ReportsTab
                reportUrl={analysisResult?.report_url}
                exceedances={analysisResult?.exceedances}
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
    </div>
  );
};

export default Index;
