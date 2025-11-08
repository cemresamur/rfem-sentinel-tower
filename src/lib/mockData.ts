import { Model, Element, AnalysisResult } from '@/types/rfem';

export const mockModels: Model[] = [
  { id: 'model-1', name: 'Tower Crane Foundation', updated_at: '2025-01-15T10:30:00Z' },
  { id: 'model-2', name: 'Main Building Frame', updated_at: '2025-01-14T15:45:00Z' },
  { id: 'model-3', name: 'Bridge Deck Analysis', updated_at: '2025-01-13T09:20:00Z' },
];

// Model-specific elements
export const mockElementsByModel: Record<string, Element[]> = {
  'model-1': [
    { id: 123, label: 'Column NW-1', type: 'COLUMN' },
    { id: 234, label: 'Column NE-2', type: 'COLUMN' },
    { id: 345, label: 'Column SW-3', type: 'COLUMN' },
    { id: 456, label: 'Column SE-4', type: 'COLUMN' },
    { id: 451, label: 'Beam North', type: 'BEAM' },
    { id: 567, label: 'Beam South', type: 'BEAM' },
    { id: 678, label: 'Beam West', type: 'BEAM' },
    { id: 789, label: 'Beam East', type: 'BEAM' },
    { id: 782, label: 'Brace X-1', type: 'TRUSS' },
    { id: 890, label: 'Brace X-2', type: 'TRUSS' },
  ],
  'model-2': [
    { id: 101, label: 'Ground Col A1', type: 'COLUMN' },
    { id: 102, label: 'Ground Col B1', type: 'COLUMN' },
    { id: 103, label: 'Ground Col C1', type: 'COLUMN' },
    { id: 104, label: 'Ground Col A2', type: 'COLUMN' },
    { id: 105, label: 'Ground Col B2', type: 'COLUMN' },
    { id: 106, label: 'Ground Col C2', type: 'COLUMN' },
    { id: 201, label: 'Floor 2 Col A1', type: 'COLUMN' },
    { id: 202, label: 'Floor 2 Col B1', type: 'COLUMN' },
    { id: 203, label: 'Floor 2 Col C1', type: 'COLUMN' },
    { id: 301, label: 'Beam 1-AB', type: 'BEAM' },
    { id: 302, label: 'Beam 1-BC', type: 'BEAM' },
    { id: 303, label: 'Beam 1-A12', type: 'BEAM' },
    { id: 304, label: 'Beam 1-B12', type: 'BEAM' },
    { id: 401, label: 'Beam 2-AB', type: 'BEAM' },
    { id: 402, label: 'Beam 2-BC', type: 'BEAM' },
  ],
  'model-3': [
    { id: 501, label: 'Pier P-1', type: 'COLUMN' },
    { id: 502, label: 'Pier P-2', type: 'COLUMN' },
    { id: 503, label: 'Pier P-3', type: 'COLUMN' },
    { id: 504, label: 'Pier P-4', type: 'COLUMN' },
    { id: 505, label: 'Pier P-5', type: 'COLUMN' },
    { id: 601, label: 'Span 1-2', type: 'BEAM' },
    { id: 602, label: 'Span 2-3', type: 'BEAM' },
    { id: 603, label: 'Span 3-4', type: 'BEAM' },
    { id: 604, label: 'Span 4-5', type: 'BEAM' },
    { id: 701, label: 'Truss T1-X', type: 'TRUSS' },
    { id: 702, label: 'Truss T2-X', type: 'TRUSS' },
    { id: 703, label: 'Truss T3-X', type: 'TRUSS' },
    { id: 704, label: 'Truss T4-X', type: 'TRUSS' },
    { id: 705, label: 'Truss T1-Y', type: 'TRUSS' },
    { id: 706, label: 'Truss T2-Y', type: 'TRUSS' },
  ],
};

export const mockElements = mockElementsByModel['model-1'];

// Model-specific analysis results
export const mockAnalysisResultsByModel: Record<string, AnalysisResult> = {
  'model-1': {
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
        location: 'Northwest Corner',
        recommendation: 'Stop lift; add temporary shore',
      },
      {
        element_id: 451,
        type: 'deflection_mm',
        value: 24,
        limit: 20,
        location: 'North Beam',
        recommendation: 'Reduce load by 10%',
      },
    ],
    heatmap: [
      { element_id: 123, util: 1.03 },
      { element_id: 234, util: 0.65 },
      { element_id: 345, util: 0.58 },
      { element_id: 456, util: 0.62 },
      { element_id: 451, util: 0.88 },
      { element_id: 567, util: 0.91 },
      { element_id: 678, util: 0.45 },
      { element_id: 789, util: 0.52 },
      { element_id: 782, util: 0.72 },
      { element_id: 890, util: 0.68 },
    ],
    report_url: 'https://rfem-backend.example.com/reports/tower-crane.pdf',
  },
  'model-2': {
    status: 'succeeded',
    summary: {
      max_util: 0.94,
      max_defl_mm: 18,
      exceed_count: 0,
    },
    exceedances: [],
    heatmap: [
      { element_id: 101, util: 0.82 },
      { element_id: 102, util: 0.89 },
      { element_id: 103, util: 0.76 },
      { element_id: 104, util: 0.78 },
      { element_id: 105, util: 0.94 },
      { element_id: 106, util: 0.71 },
      { element_id: 201, util: 0.68 },
      { element_id: 202, util: 0.75 },
      { element_id: 203, util: 0.64 },
      { element_id: 301, util: 0.85 },
      { element_id: 302, util: 0.88 },
      { element_id: 303, util: 0.72 },
      { element_id: 304, util: 0.79 },
      { element_id: 401, util: 0.58 },
      { element_id: 402, util: 0.62 },
    ],
    report_url: 'https://rfem-backend.example.com/reports/building-frame.pdf',
  },
  'model-3': {
    status: 'succeeded',
    summary: {
      max_util: 0.98,
      max_defl_mm: 32,
      exceed_count: 3,
    },
    exceedances: [
      {
        element_id: 602,
        type: 'deflection_mm',
        value: 32,
        limit: 20,
        location: 'Span 2-3 Midpoint',
        recommendation: 'Install additional support at midspan',
      },
      {
        element_id: 603,
        type: 'utilization',
        value: 0.98,
        limit: 0.95,
        location: 'Span 3-4',
        recommendation: 'Reduce live load or upgrade section',
      },
      {
        element_id: 503,
        type: 'utilization',
        value: 0.96,
        limit: 0.95,
        location: 'Center Pier',
        recommendation: 'Monitor closely during peak loads',
      },
    ],
    heatmap: [
      { element_id: 501, util: 0.74 },
      { element_id: 502, util: 0.88 },
      { element_id: 503, util: 0.96 },
      { element_id: 504, util: 0.85 },
      { element_id: 505, util: 0.72 },
      { element_id: 601, util: 0.81 },
      { element_id: 602, util: 0.93 },
      { element_id: 603, util: 0.98 },
      { element_id: 604, util: 0.79 },
      { element_id: 701, util: 0.65 },
      { element_id: 702, util: 0.71 },
      { element_id: 703, util: 0.68 },
      { element_id: 704, util: 0.62 },
      { element_id: 705, util: 0.58 },
      { element_id: 706, util: 0.64 },
    ],
    report_url: 'https://rfem-backend.example.com/reports/bridge-deck.pdf',
  },
};

export const mockAnalysisResult = mockAnalysisResultsByModel['model-1'];

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
