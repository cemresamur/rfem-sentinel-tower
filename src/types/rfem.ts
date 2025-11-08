export interface Model {
  id: string;
  name: string;
  updated_at: string;
}

export interface Element {
  id: number;
  label: string;
  type: string;
}

export interface MemberLoad {
  member_id: number | null;
  fy: number | null;
}

export interface Thresholds {
  utilization: number;
  deflection_mm: number;
  von_mises_mpa: number;
}

export interface AnalysisRequest {
  model_id: string;
  load_case: string;
  updates: {
    member_loads: MemberLoad[];
  };
  thresholds: Thresholds;
}

export interface Exceedance {
  element_id: number;
  type: string;
  value: number;
  limit: number;
  location: string;
  recommendation: string;
}

export interface HeatmapData {
  element_id: number;
  util: number;
}

export interface AnalysisSummary {
  max_util: number;
  max_defl_mm: number;
  exceed_count: number;
}

export interface AnalysisResult {
  status: 'running' | 'succeeded' | 'failed';
  summary?: AnalysisSummary;
  exceedances?: Exceedance[];
  heatmap?: HeatmapData[];
  report_url?: string;
  error?: string;
}

export interface ProgressEvent {
  progress: number;
  message: string;
}

export interface SiteTask {
  model_id: string;
  element_id: number;
  issue_type: string;
  recommendation: string;
}

export interface ElementWithMetrics extends Element {
  utilization?: number;
  deflection_mm?: number;
  von_mises_mpa?: number;
  location?: string;
  recommendation?: string;
}
