export const API_CONFIG = {
  BASE_URL: 'https://rfem-backend.example.com',
  ENDPOINTS: {
    MODELS: '/api/models',
    MODELS_UPLOAD: '/api/models/upload',
    MODEL_ELEMENTS: (id: string) => `/api/models/${id}/elements`,
    ANALYSES: '/api/analyses',
    ANALYSIS_STATUS: (jobId: string) => `/api/analyses/${jobId}`,
    ANALYSIS_STREAM: (jobId: string) => `/api/analyses/${jobId}/stream`,
  },
  POLLING_INTERVAL: 2000,
};

export const DEFAULT_CONFIG = {
  loadCase: 'LIVE_LIFT',
  thresholds: {
    utilization: 0.95,
    deflection_mm: 20,
    von_mises_mpa: 250,
  },
};
