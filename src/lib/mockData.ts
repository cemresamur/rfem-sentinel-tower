import { Model, Element, AnalysisResult } from '@/types/rfem';

export const mockModels: Model[] = [
  { id: 'model-1', name: 'Tower Crane Foundation', updated_at: '2025-01-15T10:30:00Z' },
  { id: 'model-2', name: 'Main Building Frame', updated_at: '2025-01-14T15:45:00Z' },
  { id: 'model-3', name: 'Bridge Deck Analysis', updated_at: '2025-01-13T09:20:00Z' },
  { id: 'model-4', name: 'Torre Communication Tower', updated_at: '2025-01-16T14:20:00Z' },
  { id: 'model-5', name: 'Combined Cycle Power Plant', updated_at: '2025-01-17T11:30:00Z' },
];

// Model-specific elements
export const mockElementsByModel: Record<string, Element[]> = {
  'model-1': [
    { id: 123, label: 'Column L1-NW', type: 'COLUMN' },
    { id: 234, label: 'Column L1-NE', type: 'COLUMN' },
    { id: 345, label: 'Column L1-SW', type: 'COLUMN' },
    { id: 456, label: 'Column L1-SE', type: 'COLUMN' },
    { id: 124, label: 'Column L2-NW', type: 'COLUMN' },
    { id: 235, label: 'Column L2-NE', type: 'COLUMN' },
    { id: 346, label: 'Column L2-SW', type: 'COLUMN' },
    { id: 457, label: 'Column L2-SE', type: 'COLUMN' },
    { id: 125, label: 'Column L3-NW', type: 'COLUMN' },
    { id: 236, label: 'Column L3-NE', type: 'COLUMN' },
    { id: 347, label: 'Column L3-SW', type: 'COLUMN' },
    { id: 458, label: 'Column L3-SE', type: 'COLUMN' },
    { id: 451, label: 'Beam L1-North', type: 'BEAM' },
    { id: 567, label: 'Beam L1-South', type: 'BEAM' },
    { id: 678, label: 'Beam L1-West', type: 'BEAM' },
    { id: 789, label: 'Beam L1-East', type: 'BEAM' },
    { id: 452, label: 'Beam L2-North', type: 'BEAM' },
    { id: 568, label: 'Beam L2-South', type: 'BEAM' },
    { id: 679, label: 'Beam L2-West', type: 'BEAM' },
    { id: 790, label: 'Beam L2-East', type: 'BEAM' },
    { id: 453, label: 'Beam L3-North', type: 'BEAM' },
    { id: 569, label: 'Beam L3-South', type: 'BEAM' },
    { id: 680, label: 'Beam L3-West', type: 'BEAM' },
    { id: 791, label: 'Beam L3-East', type: 'BEAM' },
    { id: 782, label: 'Brace L1-N-X1', type: 'TRUSS' },
    { id: 890, label: 'Brace L1-N-X2', type: 'TRUSS' },
    { id: 891, label: 'Brace L1-S-X1', type: 'TRUSS' },
    { id: 892, label: 'Brace L1-S-X2', type: 'TRUSS' },
    { id: 893, label: 'Brace L1-W-Y1', type: 'TRUSS' },
    { id: 894, label: 'Brace L1-W-Y2', type: 'TRUSS' },
    { id: 895, label: 'Brace L1-E-Y1', type: 'TRUSS' },
    { id: 896, label: 'Brace L1-E-Y2', type: 'TRUSS' },
    { id: 783, label: 'Brace L2-N-X1', type: 'TRUSS' },
    { id: 897, label: 'Brace L2-N-X2', type: 'TRUSS' },
    { id: 898, label: 'Brace L2-S-X1', type: 'TRUSS' },
    { id: 899, label: 'Brace L2-S-X2', type: 'TRUSS' },
    { id: 784, label: 'Brace L3-N-X1', type: 'TRUSS' },
    { id: 900, label: 'Brace L3-N-X2', type: 'TRUSS' },
  ],
  'model-2': [
    { id: 101, label: 'Ground A1', type: 'COLUMN' },
    { id: 102, label: 'Ground A2', type: 'COLUMN' },
    { id: 103, label: 'Ground A3', type: 'COLUMN' },
    { id: 104, label: 'Ground A4', type: 'COLUMN' },
    { id: 105, label: 'Ground B1', type: 'COLUMN' },
    { id: 106, label: 'Ground B2', type: 'COLUMN' },
    { id: 107, label: 'Ground B3', type: 'COLUMN' },
    { id: 108, label: 'Ground B4', type: 'COLUMN' },
    { id: 109, label: 'Ground C1', type: 'COLUMN' },
    { id: 110, label: 'Ground C2', type: 'COLUMN' },
    { id: 111, label: 'Ground C3', type: 'COLUMN' },
    { id: 112, label: 'Ground C4', type: 'COLUMN' },
    { id: 113, label: 'Ground D1', type: 'COLUMN' },
    { id: 114, label: 'Ground D2', type: 'COLUMN' },
    { id: 115, label: 'Ground D3', type: 'COLUMN' },
    { id: 116, label: 'Ground D4', type: 'COLUMN' },
    { id: 201, label: 'Floor2 A1', type: 'COLUMN' },
    { id: 202, label: 'Floor2 A2', type: 'COLUMN' },
    { id: 203, label: 'Floor2 A3', type: 'COLUMN' },
    { id: 204, label: 'Floor2 A4', type: 'COLUMN' },
    { id: 205, label: 'Floor2 C1', type: 'COLUMN' },
    { id: 206, label: 'Floor2 C4', type: 'COLUMN' },
    { id: 301, label: 'Floor3 A1', type: 'COLUMN' },
    { id: 302, label: 'Floor3 A3', type: 'COLUMN' },
    { id: 303, label: 'Floor3 A4', type: 'COLUMN' },
    { id: 351, label: 'Floor4 A1', type: 'COLUMN' },
    { id: 352, label: 'Floor4 A4', type: 'COLUMN' },
    { id: 401, label: 'Beam 1-A12', type: 'BEAM' },
    { id: 402, label: 'Beam 1-A23', type: 'BEAM' },
    { id: 403, label: 'Beam 1-A34', type: 'BEAM' },
    { id: 404, label: 'Beam 1-B12', type: 'BEAM' },
    { id: 405, label: 'Beam 1-B23', type: 'BEAM' },
    { id: 406, label: 'Beam 1-B34', type: 'BEAM' },
    { id: 411, label: 'Beam 1-1AB', type: 'BEAM' },
    { id: 412, label: 'Beam 1-1BC', type: 'BEAM' },
    { id: 413, label: 'Beam 1-1CD', type: 'BEAM' },
    { id: 414, label: 'Beam 1-4AB', type: 'BEAM' },
    { id: 501, label: 'Beam 2-A12', type: 'BEAM' },
    { id: 502, label: 'Beam 2-A23', type: 'BEAM' },
    { id: 503, label: 'Beam 2-A34', type: 'BEAM' },
    { id: 504, label: 'Beam 2-1C', type: 'BEAM' },
    { id: 601, label: 'Beam 3-A13', type: 'BEAM' },
    { id: 602, label: 'Beam 3-A34', type: 'BEAM' },
    { id: 701, label: 'Beam 4-A14', type: 'BEAM' },
    { id: 801, label: 'Brace 1-A1', type: 'TRUSS' },
    { id: 802, label: 'Brace 1-A2', type: 'TRUSS' },
    { id: 803, label: 'Brace 1-A3', type: 'TRUSS' },
    { id: 804, label: 'Brace 1-1A', type: 'TRUSS' },
    { id: 805, label: 'Brace 1-1B', type: 'TRUSS' },
    { id: 811, label: 'Brace 2-A1', type: 'TRUSS' },
    { id: 812, label: 'Brace 2-A2', type: 'TRUSS' },
    { id: 813, label: 'Brace 2-A3', type: 'TRUSS' },
  ],
  'model-3': [
    { id: 501, label: 'Pier P-1', type: 'COLUMN' },
    { id: 502, label: 'Pier P-2', type: 'COLUMN' },
    { id: 503, label: 'Pier P-3', type: 'COLUMN' },
    { id: 504, label: 'Pier P-4', type: 'COLUMN' },
    { id: 505, label: 'Pier P-5', type: 'COLUMN' },
    { id: 506, label: 'Pier P-6', type: 'COLUMN' },
    { id: 507, label: 'Tower South', type: 'COLUMN' },
    { id: 508, label: 'Tower North', type: 'COLUMN' },
    { id: 601, label: 'Main Span 1-2', type: 'BEAM' },
    { id: 602, label: 'Main Span 2-3', type: 'BEAM' },
    { id: 603, label: 'Main Span 3-4', type: 'BEAM' },
    { id: 604, label: 'Main Span 4-5', type: 'BEAM' },
    { id: 605, label: 'Main Span 5-6', type: 'BEAM' },
    { id: 606, label: 'Side Beam 1-2R', type: 'BEAM' },
    { id: 607, label: 'Side Beam 2-3R', type: 'BEAM' },
    { id: 608, label: 'Side Beam 3-4R', type: 'BEAM' },
    { id: 609, label: 'Side Beam 4-5R', type: 'BEAM' },
    { id: 610, label: 'Side Beam 5-6R', type: 'BEAM' },
    { id: 611, label: 'Side Beam 1-2L', type: 'BEAM' },
    { id: 612, label: 'Side Beam 2-3L', type: 'BEAM' },
    { id: 613, label: 'Side Beam 3-4L', type: 'BEAM' },
    { id: 614, label: 'Side Beam 4-5L', type: 'BEAM' },
    { id: 615, label: 'Side Beam 5-6L', type: 'BEAM' },
    { id: 701, label: 'Truss T1-A', type: 'TRUSS' },
    { id: 702, label: 'Truss T2-A', type: 'TRUSS' },
    { id: 703, label: 'Truss T3-A', type: 'TRUSS' },
    { id: 704, label: 'Truss T4-A', type: 'TRUSS' },
    { id: 705, label: 'Truss T5-A', type: 'TRUSS' },
    { id: 706, label: 'Truss T1-B', type: 'TRUSS' },
    { id: 707, label: 'Truss T2-B', type: 'TRUSS' },
    { id: 708, label: 'Truss T3-B', type: 'TRUSS' },
    { id: 709, label: 'Truss T4-B', type: 'TRUSS' },
    { id: 710, label: 'Truss T5-B', type: 'TRUSS' },
    { id: 711, label: 'Cable Stay S1', type: 'TRUSS' },
    { id: 712, label: 'Cable Stay S2', type: 'TRUSS' },
    { id: 713, label: 'Cable Stay S3', type: 'TRUSS' },
    { id: 714, label: 'Cable Stay N1', type: 'TRUSS' },
    { id: 715, label: 'Cable Stay N2', type: 'TRUSS' },
    { id: 716, label: 'Cable Stay N3', type: 'TRUSS' },
    { id: 720, label: 'Lateral Brace 1', type: 'TRUSS' },
    { id: 721, label: 'Lateral Brace 2', type: 'TRUSS' },
    { id: 722, label: 'Lateral Brace 3', type: 'TRUSS' },
    { id: 723, label: 'Lateral Brace 4', type: 'TRUSS' },
    { id: 724, label: 'Lateral Brace 5', type: 'TRUSS' },
  ],
  'model-4': [
    { id: 4001, label: 'Base Leg NE', type: 'COLUMN' },
    { id: 4002, label: 'Base Leg NW', type: 'COLUMN' },
    { id: 4003, label: 'Base Leg SE', type: 'COLUMN' },
    { id: 4004, label: 'Base Leg SW', type: 'COLUMN' },
    { id: 4011, label: 'Leg L1-NE', type: 'COLUMN' },
    { id: 4012, label: 'Leg L1-NW', type: 'COLUMN' },
    { id: 4013, label: 'Leg L1-SE', type: 'COLUMN' },
    { id: 4014, label: 'Leg L1-SW', type: 'COLUMN' },
    { id: 4021, label: 'Leg L2-NE', type: 'COLUMN' },
    { id: 4022, label: 'Leg L2-NW', type: 'COLUMN' },
    { id: 4023, label: 'Leg L2-SE', type: 'COLUMN' },
    { id: 4024, label: 'Leg L2-SW', type: 'COLUMN' },
    { id: 4031, label: 'Leg L3-NE', type: 'COLUMN' },
    { id: 4032, label: 'Leg L3-NW', type: 'COLUMN' },
    { id: 4033, label: 'Leg L3-SE', type: 'COLUMN' },
    { id: 4034, label: 'Leg L3-SW', type: 'COLUMN' },
    { id: 4101, label: 'Horiz Beam L1-N', type: 'BEAM' },
    { id: 4102, label: 'Horiz Beam L1-S', type: 'BEAM' },
    { id: 4103, label: 'Horiz Beam L1-E', type: 'BEAM' },
    { id: 4104, label: 'Horiz Beam L1-W', type: 'BEAM' },
    { id: 4111, label: 'Horiz Beam L2-N', type: 'BEAM' },
    { id: 4112, label: 'Horiz Beam L2-S', type: 'BEAM' },
    { id: 4113, label: 'Horiz Beam L2-E', type: 'BEAM' },
    { id: 4114, label: 'Horiz Beam L2-W', type: 'BEAM' },
    { id: 4201, label: 'Diag Brace L1-N1', type: 'TRUSS' },
    { id: 4202, label: 'Diag Brace L1-N2', type: 'TRUSS' },
    { id: 4203, label: 'Diag Brace L1-S1', type: 'TRUSS' },
    { id: 4204, label: 'Diag Brace L1-S2', type: 'TRUSS' },
    { id: 4205, label: 'Diag Brace L1-E1', type: 'TRUSS' },
    { id: 4206, label: 'Diag Brace L1-E2', type: 'TRUSS' },
    { id: 4207, label: 'Diag Brace L1-W1', type: 'TRUSS' },
    { id: 4208, label: 'Diag Brace L1-W2', type: 'TRUSS' },
    { id: 4211, label: 'Diag Brace L2-N1', type: 'TRUSS' },
    { id: 4212, label: 'Diag Brace L2-N2', type: 'TRUSS' },
    { id: 4213, label: 'Diag Brace L2-S1', type: 'TRUSS' },
    { id: 4214, label: 'Diag Brace L2-S2', type: 'TRUSS' },
    { id: 4301, label: 'Antenna Mount 1', type: 'BEAM' },
    { id: 4302, label: 'Antenna Mount 2', type: 'BEAM' },
    { id: 4303, label: 'Antenna Mount 3', type: 'BEAM' },
  ],
  'model-5': [
    // Foundation
    { id: 5001, label: 'Foundation A1', type: 'COLUMN' },
    { id: 5002, label: 'Foundation A2', type: 'COLUMN' },
    { id: 5003, label: 'Foundation A3', type: 'COLUMN' },
    { id: 5004, label: 'Foundation A4', type: 'COLUMN' },
    { id: 5005, label: 'Foundation A5', type: 'COLUMN' },
    { id: 5006, label: 'Foundation A6', type: 'COLUMN' },
    // Turbine hall
    { id: 5101, label: 'Turbine Hall Col 1A', type: 'COLUMN' },
    { id: 5102, label: 'Turbine Hall Col 1B', type: 'COLUMN' },
    { id: 5103, label: 'Turbine Hall Col 1C', type: 'COLUMN' },
    { id: 5104, label: 'Turbine Hall Col 1D', type: 'COLUMN' },
    { id: 5105, label: 'Turbine Hall Col 1E', type: 'COLUMN' },
    { id: 5106, label: 'Turbine Hall Col 1F', type: 'COLUMN' },
    { id: 5113, label: 'Turbine Hall Col 2A', type: 'COLUMN' },
    { id: 5114, label: 'Turbine Hall Col 2B', type: 'COLUMN' },
    { id: 5115, label: 'Turbine Hall Col 2C', type: 'COLUMN' },
    { id: 5116, label: 'Turbine Hall Col 2D', type: 'COLUMN' },
    // Boiler structure
    { id: 5201, label: 'Boiler Support 1A', type: 'COLUMN' },
    { id: 5202, label: 'Boiler Support 1B', type: 'COLUMN' },
    { id: 5203, label: 'Boiler Support 1C', type: 'COLUMN' },
    { id: 5204, label: 'Boiler Support 2A', type: 'COLUMN' },
    { id: 5205, label: 'Boiler Support 2B', type: 'COLUMN' },
    { id: 5206, label: 'Boiler Support 2C', type: 'COLUMN' },
    { id: 5207, label: 'Boiler Support 3A', type: 'COLUMN' },
    { id: 5208, label: 'Boiler Support 3B', type: 'COLUMN' },
    { id: 5209, label: 'Boiler Support 3C', type: 'COLUMN' },
    // Cooling tower
    { id: 5301, label: 'Cooling Tower Leg 1', type: 'COLUMN' },
    { id: 5302, label: 'Cooling Tower Leg 2', type: 'COLUMN' },
    { id: 5303, label: 'Cooling Tower Leg 3', type: 'COLUMN' },
    { id: 5304, label: 'Cooling Tower Leg 4', type: 'COLUMN' },
    // Chimney
    { id: 5401, label: 'Chimney Stack L1', type: 'COLUMN' },
    { id: 5402, label: 'Chimney Stack L2', type: 'COLUMN' },
    { id: 5403, label: 'Chimney Stack L3', type: 'COLUMN' },
    { id: 5404, label: 'Chimney Stack L4', type: 'COLUMN' },
    { id: 5405, label: 'Chimney Stack L5', type: 'COLUMN' },
    // Main beams
    { id: 5501, label: 'Roof Beam TB-1', type: 'BEAM' },
    { id: 5502, label: 'Roof Beam TB-2', type: 'BEAM' },
    { id: 5503, label: 'Roof Beam TB-3', type: 'BEAM' },
    { id: 5504, label: 'Roof Beam TB-4', type: 'BEAM' },
    { id: 5505, label: 'Roof Beam TB-5', type: 'BEAM' },
    { id: 5506, label: 'Roof Beam TL-1', type: 'BEAM' },
    { id: 5507, label: 'Roof Beam TL-2', type: 'BEAM' },
    { id: 5508, label: 'Roof Beam TL-3', type: 'BEAM' },
    // Floor beams
    { id: 5601, label: 'Floor Beam FB-1', type: 'BEAM' },
    { id: 5602, label: 'Floor Beam FB-2', type: 'BEAM' },
    { id: 5603, label: 'Floor Beam FB-3', type: 'BEAM' },
    { id: 5604, label: 'Floor Beam FB-4', type: 'BEAM' },
    { id: 5605, label: 'Floor Beam FB-5', type: 'BEAM' },
    // Pipe racks
    { id: 5701, label: 'Pipe Rack PR-1', type: 'BEAM' },
    { id: 5702, label: 'Pipe Rack PR-2', type: 'BEAM' },
    { id: 5703, label: 'Pipe Rack PR-3', type: 'BEAM' },
    { id: 5704, label: 'Pipe Rack PR-4', type: 'BEAM' },
    { id: 5705, label: 'Pipe Rack PR-5', type: 'BEAM' },
    // Equipment platforms
    { id: 5801, label: 'Platform Beam EP-1', type: 'BEAM' },
    { id: 5802, label: 'Platform Beam EP-2', type: 'BEAM' },
    { id: 5803, label: 'Platform Beam EP-3', type: 'BEAM' },
    { id: 5804, label: 'Platform Beam EP-4', type: 'BEAM' },
    // Equipment supports
    { id: 5901, label: 'Turbine Support TS-1', type: 'BEAM' },
    { id: 5902, label: 'Turbine Support TS-2', type: 'BEAM' },
    { id: 5903, label: 'Generator Support GS-1', type: 'BEAM' },
    { id: 5904, label: 'Generator Support GS-2', type: 'BEAM' },
    { id: 5905, label: 'Condenser Support CS-1', type: 'BEAM' },
    // Bracing
    { id: 6001, label: 'Diagonal Brace DB-1', type: 'TRUSS' },
    { id: 6002, label: 'Diagonal Brace DB-2', type: 'TRUSS' },
    { id: 6003, label: 'Diagonal Brace DB-3', type: 'TRUSS' },
    { id: 6004, label: 'Diagonal Brace DB-4', type: 'TRUSS' },
    { id: 6005, label: 'Diagonal Brace DB-5', type: 'TRUSS' },
    { id: 6101, label: 'Boiler Brace BB-1', type: 'TRUSS' },
    { id: 6102, label: 'Boiler Brace BB-2', type: 'TRUSS' },
    { id: 6103, label: 'Boiler Brace BB-3', type: 'TRUSS' },
    { id: 6104, label: 'Boiler Brace BB-4', type: 'TRUSS' },
    { id: 6201, label: 'Lateral Brace LB-1', type: 'TRUSS' },
    { id: 6202, label: 'Lateral Brace LB-2', type: 'TRUSS' },
    { id: 6203, label: 'Lateral Brace LB-3', type: 'TRUSS' },
    { id: 6204, label: 'Lateral Brace LB-4', type: 'TRUSS' },
    { id: 6301, label: 'Cross Brace CB-1', type: 'TRUSS' },
    { id: 6302, label: 'Cross Brace CB-2', type: 'TRUSS' },
    { id: 6303, label: 'Cross Brace CB-3', type: 'TRUSS' },
    { id: 6304, label: 'Cross Brace CB-4', type: 'TRUSS' },
    { id: 6401, label: 'Chimney Ring CR-1', type: 'TRUSS' },
    { id: 6402, label: 'Chimney Ring CR-2', type: 'TRUSS' },
    { id: 6403, label: 'Chimney Ring CR-3', type: 'TRUSS' },
    { id: 6404, label: 'Chimney Ring CR-4', type: 'TRUSS' },
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
      // Foundation piers (1001-1004)
      { element_id: 1001, util: 0.92 }, { element_id: 1002, util: 0.89 }, { element_id: 1003, util: 0.91 }, { element_id: 1004, util: 0.90 },
      
      // Main tower legs - all levels (123-130, 234-241, 345-352, 456-463)
      { element_id: 123, util: 1.03 }, { element_id: 234, util: 0.65 }, { element_id: 345, util: 0.58 }, { element_id: 456, util: 0.62 },
      { element_id: 124, util: 0.78 }, { element_id: 235, util: 0.54 }, { element_id: 346, util: 0.51 }, { element_id: 457, util: 0.59 },
      { element_id: 125, util: 0.48 }, { element_id: 236, util: 0.43 }, { element_id: 347, util: 0.39 }, { element_id: 458, util: 0.44 },
      { element_id: 126, util: 0.56 }, { element_id: 237, util: 0.52 }, { element_id: 348, util: 0.49 }, { element_id: 459, util: 0.53 },
      { element_id: 127, util: 0.47 }, { element_id: 238, util: 0.44 }, { element_id: 349, util: 0.41 }, { element_id: 460, util: 0.45 },
      { element_id: 128, util: 0.42 }, { element_id: 239, util: 0.39 }, { element_id: 350, util: 0.37 }, { element_id: 461, util: 0.40 },
      { element_id: 129, util: 0.38 }, { element_id: 240, util: 0.35 }, { element_id: 351, util: 0.33 }, { element_id: 462, util: 0.36 },
      { element_id: 130, util: 0.34 }, { element_id: 241, util: 0.31 }, { element_id: 352, util: 0.29 }, { element_id: 463, util: 0.32 },
      
      // Horizontal beams - all levels (451-457, 567-573, 678-684, 789-795)
      { element_id: 451, util: 0.88 }, { element_id: 567, util: 0.91 }, { element_id: 678, util: 0.45 }, { element_id: 789, util: 0.52 },
      { element_id: 452, util: 0.76 }, { element_id: 568, util: 0.82 }, { element_id: 679, util: 0.41 }, { element_id: 790, util: 0.47 },
      { element_id: 453, util: 0.68 }, { element_id: 569, util: 0.74 }, { element_id: 680, util: 0.38 }, { element_id: 791, util: 0.43 },
      { element_id: 454, util: 0.62 }, { element_id: 570, util: 0.69 }, { element_id: 681, util: 0.35 }, { element_id: 792, util: 0.40 },
      { element_id: 455, util: 0.58 }, { element_id: 571, util: 0.64 }, { element_id: 682, util: 0.32 }, { element_id: 793, util: 0.37 },
      { element_id: 456, util: 0.54 }, { element_id: 572, util: 0.60 }, { element_id: 683, util: 0.29 }, { element_id: 794, util: 0.34 },
      { element_id: 457, util: 0.50 }, { element_id: 573, util: 0.56 }, { element_id: 684, util: 0.27 }, { element_id: 795, util: 0.31 },
      
      // Diagonal cross-bracing (782-784, 890-908, 897-900, etc.)
      { element_id: 782, util: 0.72 }, { element_id: 890, util: 0.68 }, { element_id: 891, util: 0.64 }, { element_id: 892, util: 0.61 },
      { element_id: 893, util: 0.55 }, { element_id: 894, util: 0.58 }, { element_id: 895, util: 0.52 }, { element_id: 896, util: 0.56 },
      { element_id: 901, util: 0.67 }, { element_id: 902, util: 0.63 }, { element_id: 903, util: 0.59 }, { element_id: 904, util: 0.61 },
      { element_id: 905, util: 0.65 }, { element_id: 906, util: 0.62 }, { element_id: 907, util: 0.58 }, { element_id: 908, util: 0.60 },
      { element_id: 783, util: 0.66 }, { element_id: 897, util: 0.63 }, { element_id: 898, util: 0.59 }, { element_id: 899, util: 0.61 },
      { element_id: 909, util: 0.64 }, { element_id: 910, util: 0.60 }, { element_id: 911, util: 0.57 }, { element_id: 912, util: 0.59 },
      { element_id: 913, util: 0.62 }, { element_id: 914, util: 0.58 }, { element_id: 915, util: 0.55 }, { element_id: 916, util: 0.57 },
      { element_id: 784, util: 0.61 }, { element_id: 900, util: 0.58 }, { element_id: 917, util: 0.55 }, { element_id: 918, util: 0.57 },
      { element_id: 919, util: 0.60 }, { element_id: 920, util: 0.56 }, { element_id: 921, util: 0.53 }, { element_id: 922, util: 0.55 },
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
      // Foundation columns (101-136)
      { element_id: 101, util: 0.82 }, { element_id: 102, util: 0.89 }, { element_id: 103, util: 0.76 }, { element_id: 104, util: 0.78 },
      { element_id: 105, util: 0.94 }, { element_id: 106, util: 0.71 }, { element_id: 107, util: 0.73 }, { element_id: 108, util: 0.85 },
      { element_id: 109, util: 0.68 }, { element_id: 110, util: 0.77 }, { element_id: 111, util: 0.81 }, { element_id: 112, util: 0.74 },
      { element_id: 113, util: 0.79 }, { element_id: 114, util: 0.86 }, { element_id: 115, util: 0.72 }, { element_id: 116, util: 0.75 },
      { element_id: 117, util: 0.81 }, { element_id: 118, util: 0.78 }, { element_id: 119, util: 0.76 }, { element_id: 120, util: 0.83 },
      { element_id: 121, util: 0.69 }, { element_id: 122, util: 0.74 }, { element_id: 123, util: 0.80 }, { element_id: 124, util: 0.77 },
      { element_id: 125, util: 0.84 }, { element_id: 126, util: 0.71 }, { element_id: 127, util: 0.76 }, { element_id: 128, util: 0.82 },
      { element_id: 129, util: 0.73 }, { element_id: 130, util: 0.78 }, { element_id: 131, util: 0.75 }, { element_id: 132, util: 0.81 },
      { element_id: 133, util: 0.68 }, { element_id: 134, util: 0.72 }, { element_id: 135, util: 0.79 }, { element_id: 136, util: 0.74 },
      
      // Perimeter columns floors 2-4 (201-220)
      { element_id: 201, util: 0.68 }, { element_id: 202, util: 0.75 }, { element_id: 203, util: 0.64 }, { element_id: 204, util: 0.71 },
      { element_id: 205, util: 0.69 }, { element_id: 206, util: 0.66 }, { element_id: 207, util: 0.72 }, { element_id: 208, util: 0.67 },
      { element_id: 209, util: 0.73 }, { element_id: 210, util: 0.70 }, { element_id: 211, util: 0.68 }, { element_id: 212, util: 0.74 },
      { element_id: 213, util: 0.65 }, { element_id: 214, util: 0.71 }, { element_id: 215, util: 0.67 }, { element_id: 216, util: 0.69 },
      { element_id: 217, util: 0.72 }, { element_id: 218, util: 0.68 }, { element_id: 219, util: 0.66 }, { element_id: 220, util: 0.70 },
      
      // Core columns (221-240)
      { element_id: 221, util: 0.78 }, { element_id: 222, util: 0.81 }, { element_id: 223, util: 0.76 }, { element_id: 224, util: 0.79 },
      { element_id: 225, util: 0.74 }, { element_id: 226, util: 0.77 }, { element_id: 227, util: 0.73 }, { element_id: 228, util: 0.75 },
      { element_id: 229, util: 0.71 }, { element_id: 230, util: 0.74 }, { element_id: 231, util: 0.69 }, { element_id: 232, util: 0.72 },
      { element_id: 233, util: 0.68 }, { element_id: 234, util: 0.70 }, { element_id: 235, util: 0.66 }, { element_id: 236, util: 0.69 },
      { element_id: 237, util: 0.64 }, { element_id: 238, util: 0.67 }, { element_id: 239, util: 0.63 }, { element_id: 240, util: 0.65 },
      
      // Perimeter columns floors 5-8 (301-312)
      { element_id: 301, util: 0.58 }, { element_id: 302, util: 0.61 }, { element_id: 303, util: 0.55 }, { element_id: 304, util: 0.59 },
      { element_id: 305, util: 0.57 }, { element_id: 306, util: 0.60 }, { element_id: 307, util: 0.56 }, { element_id: 308, util: 0.58 },
      { element_id: 309, util: 0.54 }, { element_id: 310, util: 0.57 }, { element_id: 311, util: 0.59 }, { element_id: 312, util: 0.56 },
      
      // Perimeter columns floors 5-8 continued (351-356)
      { element_id: 351, util: 0.52 }, { element_id: 352, util: 0.55 }, { element_id: 353, util: 0.51 }, { element_id: 354, util: 0.54 },
      { element_id: 355, util: 0.53 }, { element_id: 356, util: 0.56 },
      
      // Perimeter columns floors 9-12 (361-374)
      { element_id: 361, util: 0.48 }, { element_id: 362, util: 0.51 }, { element_id: 363, util: 0.47 }, { element_id: 364, util: 0.50 },
      { element_id: 365, util: 0.49 }, { element_id: 366, util: 0.52 }, { element_id: 367, util: 0.48 }, { element_id: 368, util: 0.51 },
      { element_id: 371, util: 0.46 }, { element_id: 372, util: 0.49 }, { element_id: 373, util: 0.45 }, { element_id: 374, util: 0.48 },
      
      // Perimeter columns floors 13-15 (381-394)
      { element_id: 381, util: 0.42 }, { element_id: 382, util: 0.45 }, { element_id: 383, util: 0.41 }, { element_id: 384, util: 0.44 },
      { element_id: 385, util: 0.43 }, { element_id: 386, util: 0.46 }, { element_id: 387, util: 0.42 }, { element_id: 388, util: 0.45 },
      { element_id: 391, util: 0.39 }, { element_id: 392, util: 0.42 }, { element_id: 393, util: 0.38 }, { element_id: 394, util: 0.41 },
      
      // Floor beams level 1 (401-418)
      { element_id: 401, util: 0.85 }, { element_id: 402, util: 0.88 }, { element_id: 403, util: 0.79 }, { element_id: 404, util: 0.81 },
      { element_id: 405, util: 0.76 }, { element_id: 406, util: 0.83 }, { element_id: 407, util: 0.84 }, { element_id: 408, util: 0.80 },
      { element_id: 409, util: 0.82 }, { element_id: 410, util: 0.77 }, { element_id: 411, util: 0.86 }, { element_id: 412, util: 0.81 },
      { element_id: 413, util: 0.78 }, { element_id: 414, util: 0.83 }, { element_id: 415, util: 0.79 }, { element_id: 416, util: 0.85 },
      { element_id: 417, util: 0.80 }, { element_id: 418, util: 0.82 },
      
      // Floor beams level 2 (501-511)
      { element_id: 501, util: 0.72 }, { element_id: 502, util: 0.68 }, { element_id: 503, util: 0.74 }, { element_id: 504, util: 0.70 },
      { element_id: 505, util: 0.73 }, { element_id: 506, util: 0.69 }, { element_id: 507, util: 0.71 }, { element_id: 508, util: 0.67 },
      { element_id: 509, util: 0.72 }, { element_id: 510, util: 0.68 }, { element_id: 511, util: 0.70 },
      
      // Floor beams level 3 (601-607)
      { element_id: 601, util: 0.58 }, { element_id: 602, util: 0.62 }, { element_id: 603, util: 0.60 }, { element_id: 604, util: 0.56 },
      { element_id: 605, util: 0.59 }, { element_id: 606, util: 0.61 }, { element_id: 607, util: 0.57 },
      
      // Floor beams level 4 (701-707)
      { element_id: 701, util: 0.54 }, { element_id: 702, util: 0.58 }, { element_id: 703, util: 0.56 }, { element_id: 704, util: 0.52 },
      { element_id: 705, util: 0.55 }, { element_id: 706, util: 0.53 }, { element_id: 707, util: 0.57 },
      
      // Floor beams levels 5-7 (711-717)
      { element_id: 711, util: 0.51 }, { element_id: 712, util: 0.54 }, { element_id: 713, util: 0.50 }, { element_id: 714, util: 0.52 },
      { element_id: 715, util: 0.53 }, { element_id: 716, util: 0.49 }, { element_id: 717, util: 0.51 },
      
      // Floor beams levels 8-10 (721-727)
      { element_id: 721, util: 0.47 }, { element_id: 722, util: 0.50 }, { element_id: 723, util: 0.48 }, { element_id: 724, util: 0.46 },
      { element_id: 725, util: 0.49 }, { element_id: 726, util: 0.47 }, { element_id: 727, util: 0.48 },
      
      // Floor beams levels 11-13 (731-734)
      { element_id: 731, util: 0.43 }, { element_id: 732, util: 0.46 }, { element_id: 733, util: 0.44 }, { element_id: 734, util: 0.45 },
      
      // Outrigger beams (741-744)
      { element_id: 741, util: 0.88 }, { element_id: 742, util: 0.86 }, { element_id: 743, util: 0.89 }, { element_id: 744, util: 0.87 },
      
      // Transfer girders (751-754)
      { element_id: 751, util: 0.92 }, { element_id: 752, util: 0.90 }, { element_id: 753, util: 0.93 }, { element_id: 754, util: 0.91 },
      
      // Diagonal bracing floors 2-4 (801-813)
      { element_id: 801, util: 0.54 }, { element_id: 802, util: 0.51 }, { element_id: 803, util: 0.56 }, { element_id: 804, util: 0.52 },
      { element_id: 805, util: 0.55 }, { element_id: 806, util: 0.53 }, { element_id: 807, util: 0.50 }, { element_id: 808, util: 0.54 },
      { element_id: 809, util: 0.51 }, { element_id: 810, util: 0.52 }, { element_id: 811, util: 0.48 }, { element_id: 812, util: 0.45 },
      { element_id: 813, util: 0.49 },
      
      // Diagonal bracing floors 5-7 (814-824)
      { element_id: 814, util: 0.47 }, { element_id: 815, util: 0.50 }, { element_id: 816, util: 0.48 }, { element_id: 817, util: 0.46 },
      { element_id: 818, util: 0.49 }, { element_id: 823, util: 0.47 }, { element_id: 824, util: 0.48 },
      
      // Diagonal bracing floors 8-10 (819-826)
      { element_id: 819, util: 0.44 }, { element_id: 820, util: 0.47 }, { element_id: 821, util: 0.45 }, { element_id: 822, util: 0.43 },
      { element_id: 825, util: 0.46 }, { element_id: 826, util: 0.44 },
      
      // Diagonal bracing floors 11-13 (827-830)
      { element_id: 827, util: 0.41 }, { element_id: 828, util: 0.44 }, { element_id: 829, util: 0.42 }, { element_id: 830, util: 0.40 },
      
      // Diagonal bracing floors 14-16 (831-834)
      { element_id: 831, util: 0.38 }, { element_id: 832, util: 0.41 }, { element_id: 833, util: 0.39 }, { element_id: 834, util: 0.37 },
      
      // X-bracing core (841-848)
      { element_id: 841, util: 0.65 }, { element_id: 842, util: 0.68 }, { element_id: 843, util: 0.66 }, { element_id: 844, util: 0.67 },
      { element_id: 845, util: 0.63 }, { element_id: 846, util: 0.66 }, { element_id: 847, util: 0.64 }, { element_id: 848, util: 0.65 },
      
      // Secondary beams (851-858)
      { element_id: 851, util: 0.58 }, { element_id: 852, util: 0.61 }, { element_id: 853, util: 0.59 }, { element_id: 854, util: 0.57 },
      { element_id: 855, util: 0.60 }, { element_id: 856, util: 0.58 }, { element_id: 857, util: 0.56 }, { element_id: 858, util: 0.59 },
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
      // Foundation piers (501-506)
      { element_id: 501, util: 0.74 }, { element_id: 502, util: 0.88 }, { element_id: 503, util: 0.96 },
      { element_id: 504, util: 0.85 }, { element_id: 505, util: 0.72 }, { element_id: 506, util: 0.69 },
      
      // Main cable towers (507-508)
      { element_id: 507, util: 0.91 }, { element_id: 508, util: 0.89 },
      
      // Tower legs (511-514, 515-518, 519-522, 523-526, 527-530)
      { element_id: 511, util: 0.87 }, { element_id: 512, util: 0.85 }, { element_id: 513, util: 0.83 }, { element_id: 514, util: 0.86 },
      { element_id: 515, util: 0.82 }, { element_id: 516, util: 0.80 }, { element_id: 517, util: 0.78 }, { element_id: 518, util: 0.81 },
      { element_id: 519, util: 0.76 }, { element_id: 520, util: 0.74 }, { element_id: 521, util: 0.72 }, { element_id: 522, util: 0.75 },
      { element_id: 523, util: 0.70 }, { element_id: 524, util: 0.68 }, { element_id: 525, util: 0.66 }, { element_id: 526, util: 0.69 },
      { element_id: 527, util: 0.64 }, { element_id: 528, util: 0.62 }, { element_id: 529, util: 0.60 }, { element_id: 530, util: 0.63 },
      
      // Main deck beams (601-610)
      { element_id: 601, util: 0.81 }, { element_id: 602, util: 0.93 }, { element_id: 603, util: 0.98 }, { element_id: 604, util: 0.79 },
      { element_id: 605, util: 0.76 }, { element_id: 606, util: 0.73 }, { element_id: 607, util: 0.84 }, { element_id: 608, util: 0.87 },
      { element_id: 609, util: 0.71 }, { element_id: 610, util: 0.68 },
      
      // Side deck beams (611-625)
      { element_id: 611, util: 0.75 }, { element_id: 612, util: 0.82 }, { element_id: 613, util: 0.85 }, { element_id: 614, util: 0.69 },
      { element_id: 615, util: 0.66 }, { element_id: 616, util: 0.77 }, { element_id: 617, util: 0.80 }, { element_id: 618, util: 0.83 },
      { element_id: 619, util: 0.67 }, { element_id: 620, util: 0.64 }, { element_id: 621, util: 0.74 }, { element_id: 622, util: 0.78 },
      { element_id: 623, util: 0.81 }, { element_id: 624, util: 0.65 }, { element_id: 625, util: 0.62 },
      
      // Transverse deck beams (631-640)
      { element_id: 631, util: 0.70 }, { element_id: 632, util: 0.73 }, { element_id: 633, util: 0.76 }, { element_id: 634, util: 0.68 },
      { element_id: 635, util: 0.71 }, { element_id: 636, util: 0.69 }, { element_id: 637, util: 0.72 }, { element_id: 638, util: 0.74 },
      { element_id: 639, util: 0.67 }, { element_id: 640, util: 0.65 },
      
      // Lower deck truss (701-720)
      { element_id: 701, util: 0.65 }, { element_id: 702, util: 0.71 }, { element_id: 703, util: 0.68 }, { element_id: 704, util: 0.62 },
      { element_id: 705, util: 0.58 }, { element_id: 706, util: 0.64 }, { element_id: 707, util: 0.61 }, { element_id: 708, util: 0.57 },
      { element_id: 709, util: 0.59 }, { element_id: 710, util: 0.55 }, { element_id: 711, util: 0.63 }, { element_id: 712, util: 0.60 },
      { element_id: 713, util: 0.56 }, { element_id: 714, util: 0.58 }, { element_id: 715, util: 0.54 }, { element_id: 716, util: 0.61 },
      { element_id: 717, util: 0.57 }, { element_id: 718, util: 0.53 }, { element_id: 719, util: 0.55 }, { element_id: 720, util: 0.52 },
      
      // Cable stays (731-760)
      { element_id: 731, util: 0.82 }, { element_id: 732, util: 0.85 }, { element_id: 733, util: 0.88 }, { element_id: 734, util: 0.79 },
      { element_id: 735, util: 0.76 }, { element_id: 736, util: 0.83 }, { element_id: 737, util: 0.86 }, { element_id: 738, util: 0.81 },
      { element_id: 739, util: 0.78 }, { element_id: 740, util: 0.75 }, { element_id: 741, util: 0.84 }, { element_id: 742, util: 0.87 },
      { element_id: 743, util: 0.80 }, { element_id: 744, util: 0.77 }, { element_id: 745, util: 0.74 }, { element_id: 746, util: 0.82 },
      { element_id: 747, util: 0.79 }, { element_id: 748, util: 0.76 }, { element_id: 749, util: 0.73 }, { element_id: 750, util: 0.81 },
      { element_id: 751, util: 0.78 }, { element_id: 752, util: 0.75 }, { element_id: 753, util: 0.72 }, { element_id: 754, util: 0.80 },
      { element_id: 755, util: 0.77 }, { element_id: 756, util: 0.74 }, { element_id: 757, util: 0.71 }, { element_id: 758, util: 0.79 },
      { element_id: 759, util: 0.76 }, { element_id: 760, util: 0.73 },
      
      // Tower cross-bracing (771-790)
      { element_id: 771, util: 0.68 }, { element_id: 772, util: 0.71 }, { element_id: 773, util: 0.69 }, { element_id: 774, util: 0.67 },
      { element_id: 775, util: 0.70 }, { element_id: 776, util: 0.66 }, { element_id: 777, util: 0.69 }, { element_id: 778, util: 0.72 },
      { element_id: 779, util: 0.65 }, { element_id: 780, util: 0.68 }, { element_id: 781, util: 0.67 }, { element_id: 782, util: 0.70 },
      { element_id: 783, util: 0.66 }, { element_id: 784, util: 0.69 }, { element_id: 785, util: 0.64 }, { element_id: 786, util: 0.67 },
      { element_id: 787, util: 0.65 }, { element_id: 788, util: 0.68 }, { element_id: 789, util: 0.63 }, { element_id: 790, util: 0.66 },
      
      // Lateral wind bracing (801-820)
      { element_id: 801, util: 0.56 }, { element_id: 802, util: 0.59 }, { element_id: 803, util: 0.57 }, { element_id: 804, util: 0.55 },
      { element_id: 805, util: 0.58 }, { element_id: 806, util: 0.54 }, { element_id: 807, util: 0.57 }, { element_id: 808, util: 0.60 },
      { element_id: 809, util: 0.53 }, { element_id: 810, util: 0.56 }, { element_id: 811, util: 0.55 }, { element_id: 812, util: 0.58 },
      { element_id: 813, util: 0.54 }, { element_id: 814, util: 0.57 }, { element_id: 815, util: 0.52 }, { element_id: 816, util: 0.55 },
      { element_id: 817, util: 0.53 }, { element_id: 818, util: 0.56 }, { element_id: 819, util: 0.51 }, { element_id: 820, util: 0.54 },
    ],
    report_url: 'https://rfem-backend.example.com/reports/bridge-deck.pdf',
  },
  'model-4': {
    status: 'succeeded',
    summary: {
      max_util: 0.87,
      max_defl_mm: 15,
      exceed_count: 0,
    },
    exceedances: [],
    heatmap: [
      { element_id: 4001, util: 0.82 },
      { element_id: 4002, util: 0.85 },
      { element_id: 4003, util: 0.79 },
      { element_id: 4004, util: 0.83 },
      { element_id: 4011, util: 0.76 },
      { element_id: 4012, util: 0.78 },
      { element_id: 4013, util: 0.74 },
      { element_id: 4014, util: 0.77 },
      { element_id: 4021, util: 0.68 },
      { element_id: 4022, util: 0.71 },
      { element_id: 4023, util: 0.66 },
      { element_id: 4024, util: 0.69 },
      { element_id: 4031, util: 0.58 },
      { element_id: 4032, util: 0.61 },
      { element_id: 4033, util: 0.56 },
      { element_id: 4034, util: 0.59 },
      { element_id: 4101, util: 0.72 },
      { element_id: 4102, util: 0.74 },
      { element_id: 4103, util: 0.69 },
      { element_id: 4104, util: 0.71 },
      { element_id: 4111, util: 0.64 },
      { element_id: 4112, util: 0.66 },
      { element_id: 4113, util: 0.62 },
      { element_id: 4114, util: 0.63 },
      { element_id: 4201, util: 0.81 },
      { element_id: 4202, util: 0.79 },
      { element_id: 4203, util: 0.83 },
      { element_id: 4204, util: 0.80 },
      { element_id: 4205, util: 0.87 },
      { element_id: 4206, util: 0.84 },
      { element_id: 4207, util: 0.78 },
      { element_id: 4208, util: 0.76 },
      { element_id: 4211, util: 0.73 },
      { element_id: 4212, util: 0.71 },
      { element_id: 4213, util: 0.75 },
      { element_id: 4214, util: 0.72 },
      { element_id: 4301, util: 0.54 },
      { element_id: 4302, util: 0.52 },
      { element_id: 4303, util: 0.56 },
    ],
    report_url: 'https://rfem-backend.example.com/reports/torre-tower.pdf',
  },
  'model-5': {
    status: 'succeeded',
    summary: {
      max_util: 0.97,
      max_defl_mm: 28,
      exceed_count: 4,
    },
    exceedances: [
      {
        element_id: 5401,
        type: 'utilization',
        value: 0.97,
        limit: 0.95,
        location: 'Chimney Base Section',
        recommendation: 'Inspect foundation settlement and reinforce base if needed',
      },
      {
        element_id: 5901,
        type: 'deflection_mm',
        value: 28,
        limit: 20,
        location: 'Main Turbine Support',
        recommendation: 'Add intermediate support beam to reduce span deflection',
      },
      {
        element_id: 5201,
        type: 'utilization',
        value: 0.96,
        limit: 0.95,
        location: 'Boiler Base Column',
        recommendation: 'Monitor thermal expansion effects during operation',
      },
      {
        element_id: 5501,
        type: 'utilization',
        value: 0.96,
        limit: 0.95,
        location: 'Main Roof Truss',
        recommendation: 'Verify crane loads are within design limits',
      },
    ],
    heatmap: [
      // Foundation piers (5001-5036)
      { element_id: 5001, util: 0.88 }, { element_id: 5002, util: 0.91 }, { element_id: 5003, util: 0.86 }, { element_id: 5004, util: 0.89 },
      { element_id: 5005, util: 0.93 }, { element_id: 5006, util: 0.87 }, { element_id: 5007, util: 0.90 }, { element_id: 5008, util: 0.85 },
      { element_id: 5009, util: 0.88 }, { element_id: 5010, util: 0.92 }, { element_id: 5011, util: 0.86 }, { element_id: 5012, util: 0.89 },
      { element_id: 5013, util: 0.84 }, { element_id: 5014, util: 0.87 }, { element_id: 5015, util: 0.91 }, { element_id: 5016, util: 0.85 },
      { element_id: 5017, util: 0.88 }, { element_id: 5018, util: 0.90 }, { element_id: 5019, util: 0.83 }, { element_id: 5020, util: 0.86 },
      { element_id: 5021, util: 0.89 }, { element_id: 5022, util: 0.84 }, { element_id: 5023, util: 0.87 }, { element_id: 5024, util: 0.91 },
      { element_id: 5025, util: 0.82 }, { element_id: 5026, util: 0.85 }, { element_id: 5027, util: 0.88 }, { element_id: 5028, util: 0.83 },
      { element_id: 5029, util: 0.86 }, { element_id: 5030, util: 0.89 }, { element_id: 5031, util: 0.81 }, { element_id: 5032, util: 0.84 },
      { element_id: 5033, util: 0.87 }, { element_id: 5034, util: 0.82 }, { element_id: 5035, util: 0.85 }, { element_id: 5036, util: 0.88 },
      
      // Turbine hall columns level 1 (5101-5112)
      { element_id: 5101, util: 0.82 }, { element_id: 5102, util: 0.85 }, { element_id: 5103, util: 0.79 }, { element_id: 5104, util: 0.83 },
      { element_id: 5105, util: 0.87 }, { element_id: 5106, util: 0.81 }, { element_id: 5107, util: 0.84 }, { element_id: 5108, util: 0.78 },
      { element_id: 5109, util: 0.82 }, { element_id: 5110, util: 0.86 }, { element_id: 5111, util: 0.80 }, { element_id: 5112, util: 0.83 },
      
      // Turbine hall columns level 2 (5113-5124)
      { element_id: 5113, util: 0.76 }, { element_id: 5114, util: 0.79 }, { element_id: 5115, util: 0.73 }, { element_id: 5116, util: 0.77 },
      { element_id: 5117, util: 0.81 }, { element_id: 5118, util: 0.75 }, { element_id: 5119, util: 0.78 }, { element_id: 5120, util: 0.72 },
      { element_id: 5121, util: 0.76 }, { element_id: 5122, util: 0.80 }, { element_id: 5123, util: 0.74 }, { element_id: 5124, util: 0.77 },
      
      // Boiler structure columns (5201-5212)
      { element_id: 5201, util: 0.96 }, { element_id: 5202, util: 0.93 }, { element_id: 5203, util: 0.91 }, { element_id: 5204, util: 0.94 },
      { element_id: 5205, util: 0.92 }, { element_id: 5206, util: 0.90 }, { element_id: 5207, util: 0.88 }, { element_id: 5208, util: 0.85 },
      { element_id: 5209, util: 0.87 }, { element_id: 5210, util: 0.89 }, { element_id: 5211, util: 0.84 }, { element_id: 5212, util: 0.86 },
      
      // Cooling tower support (5301-5308)
      { element_id: 5301, util: 0.74 }, { element_id: 5302, util: 0.77 }, { element_id: 5303, util: 0.71 }, { element_id: 5304, util: 0.75 },
      { element_id: 5305, util: 0.68 }, { element_id: 5306, util: 0.71 }, { element_id: 5307, util: 0.65 }, { element_id: 5308, util: 0.69 },
      
      // Chimney stack (5401-5407)
      { element_id: 5401, util: 0.97 }, { element_id: 5402, util: 0.91 }, { element_id: 5403, util: 0.85 }, { element_id: 5404, util: 0.79 },
      { element_id: 5405, util: 0.73 }, { element_id: 5406, util: 0.67 }, { element_id: 5407, util: 0.61 },
      
      // Main turbine hall roof beams (5501-5511)
      { element_id: 5501, util: 0.96 }, { element_id: 5502, util: 0.93 }, { element_id: 5503, util: 0.90 }, { element_id: 5504, util: 0.94 },
      { element_id: 5505, util: 0.91 }, { element_id: 5506, util: 0.88 }, { element_id: 5507, util: 0.92 }, { element_id: 5508, util: 0.89 },
      { element_id: 5509, util: 0.87 }, { element_id: 5510, util: 0.90 }, { element_id: 5511, util: 0.86 },
      
      // Floor level beams (5601-5608)
      { element_id: 5601, util: 0.84 }, { element_id: 5602, util: 0.87 }, { element_id: 5603, util: 0.81 }, { element_id: 5604, util: 0.85 },
      { element_id: 5605, util: 0.89 }, { element_id: 5606, util: 0.83 }, { element_id: 5607, util: 0.86 }, { element_id: 5608, util: 0.82 },
      
      // Pipe rack beams (5701-5706)
      { element_id: 5701, util: 0.72 }, { element_id: 5702, util: 0.75 }, { element_id: 5703, util: 0.69 }, { element_id: 5704, util: 0.73 },
      { element_id: 5705, util: 0.71 }, { element_id: 5706, util: 0.68 },
      
      // Equipment platform supports (5801-5807)
      { element_id: 5801, util: 0.78 }, { element_id: 5802, util: 0.81 }, { element_id: 5803, util: 0.75 }, { element_id: 5804, util: 0.79 },
      { element_id: 5805, util: 0.77 }, { element_id: 5806, util: 0.74 }, { element_id: 5807, util: 0.76 },
      
      // Heavy equipment support beams (5901-5905)
      { element_id: 5901, util: 0.95 }, { element_id: 5902, util: 0.92 }, { element_id: 5903, util: 0.94 }, { element_id: 5904, util: 0.91 },
      { element_id: 5905, util: 0.93 },
      
      // Diagonal bracing - turbine hall (6001-6009)
      { element_id: 6001, util: 0.67 }, { element_id: 6002, util: 0.70 }, { element_id: 6003, util: 0.64 }, { element_id: 6004, util: 0.68 },
      { element_id: 6005, util: 0.72 }, { element_id: 6006, util: 0.66 }, { element_id: 6007, util: 0.69 }, { element_id: 6008, util: 0.65 },
      { element_id: 6009, util: 0.71 },
      
      // Diagonal bracing - boiler (6101-6106)
      { element_id: 6101, util: 0.80 }, { element_id: 6102, util: 0.83 }, { element_id: 6103, util: 0.77 }, { element_id: 6104, util: 0.81 },
      { element_id: 6105, util: 0.79 }, { element_id: 6106, util: 0.78 },
      
      // Lateral wind bracing (6201-6205)
      { element_id: 6201, util: 0.58 }, { element_id: 6202, util: 0.61 }, { element_id: 6203, util: 0.55 }, { element_id: 6204, util: 0.59 },
      { element_id: 6205, util: 0.63 },
      
      // Cross bracing - equipment platforms (6301-6307)
      { element_id: 6301, util: 0.62 }, { element_id: 6302, util: 0.65 }, { element_id: 6303, util: 0.59 }, { element_id: 6304, util: 0.63 },
      { element_id: 6305, util: 0.61 }, { element_id: 6306, util: 0.58 }, { element_id: 6307, util: 0.64 },
      
      // Chimney support rings (6401-6408)
      { element_id: 6401, util: 0.85 }, { element_id: 6402, util: 0.88 }, { element_id: 6403, util: 0.79 }, { element_id: 6404, util: 0.82 },
      { element_id: 6405, util: 0.73 }, { element_id: 6406, util: 0.76 }, { element_id: 6407, util: 0.67 }, { element_id: 6408, util: 0.70 },
    ],
    report_url: 'https://rfem-backend.example.com/reports/power-plant.pdf',
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
