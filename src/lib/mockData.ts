import { Model, Element, AnalysisResult } from '@/types/rfem';

export const mockModels: Model[] = [
  { id: 'model-1', name: 'Tower Crane Foundation', updated_at: '2025-01-15T10:30:00Z' },
  { id: 'model-2', name: 'Main Building Frame', updated_at: '2025-01-14T15:45:00Z' },
  { id: 'model-3', name: 'Bridge Deck Analysis', updated_at: '2025-01-13T09:20:00Z' },
];

export const mockElements: Element[] = [
  { id: 123, label: 'Column C-12', type: 'COLUMN' },
  { id: 451, label: 'Beam B-3', type: 'BEAM' },
  { id: 782, label: 'Truss T-5', type: 'TRUSS' },
  { id: 234, label: 'Column C-15', type: 'COLUMN' },
  { id: 567, label: 'Beam B-7', type: 'BEAM' },
];

export const mockAnalysisResult: AnalysisResult = {
  status: 'succeeded',
  summary: {
    max_util: 1.03,
    max_defl_mm: 24,
    exceed_count: 2,
  },
  exceedances: [
    {
      element_id: 123,
      type: 'utilization',
      value: 1.03,
      limit: 0.95,
      location: 'Grid D-6',
      recommendation: 'Stop lift; add temporary shore',
    },
    {
      element_id: 451,
      type: 'deflection_mm',
      value: 24,
      limit: 20,
      location: 'Span B3',
      recommendation: 'Reduce load by 10%',
    },
  ],
  heatmap: [
    { element_id: 123, util: 1.03 },
    { element_id: 451, util: 0.88 },
    { element_id: 782, util: 0.72 },
    { element_id: 234, util: 0.65 },
    { element_id: 567, util: 0.91 },
  ],
  report_url: 'https://rfem-backend.example.com/reports/abc.pdf',
};

export const generateMockProgress = () => {
  const steps = [
    { progress: 0.1, message: 'Initializing analysis...' },
    { progress: 0.25, message: 'Assembling model...' },
    { progress: 0.5, message: 'Applying loads...' },
    { progress: 0.75, message: 'Running calculations...' },
    { progress: 0.9, message: 'Generating results...' },
    { progress: 1.0, message: 'Analysis complete' },
  ];
  return steps;
};
