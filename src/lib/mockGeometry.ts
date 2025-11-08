// Mock 3D geometry data for structural elements

// Model 1: Tower Crane Foundation - Complex multi-level tower
export const towerCraneGeometry = [
  // Corner Columns - Level 1
  {
    id: 123,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-3, 2.5, -3] as [number, number, number],
      scale: [1.2, 5, 1.2] as [number, number, number],
    },
  },
  {
    id: 234,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [3, 2.5, -3] as [number, number, number],
      scale: [1.2, 5, 1.2] as [number, number, number],
    },
  },
  {
    id: 345,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-3, 2.5, 3] as [number, number, number],
      scale: [1.2, 5, 1.2] as [number, number, number],
    },
  },
  {
    id: 456,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [3, 2.5, 3] as [number, number, number],
      scale: [1.2, 5, 1.2] as [number, number, number],
    },
  },

  // Corner Columns - Level 2
  {
    id: 124,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-3, 7.5, -3] as [number, number, number],
      scale: [1.1, 5, 1.1] as [number, number, number],
    },
  },
  {
    id: 235,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [3, 7.5, -3] as [number, number, number],
      scale: [1.1, 5, 1.1] as [number, number, number],
    },
  },
  {
    id: 346,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-3, 7.5, 3] as [number, number, number],
      scale: [1.1, 5, 1.1] as [number, number, number],
    },
  },
  {
    id: 457,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [3, 7.5, 3] as [number, number, number],
      scale: [1.1, 5, 1.1] as [number, number, number],
    },
  },

  // Corner Columns - Level 3
  {
    id: 125,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-2.5, 12.5, -2.5] as [number, number, number],
      scale: [1, 5, 1] as [number, number, number],
    },
  },
  {
    id: 236,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [2.5, 12.5, -2.5] as [number, number, number],
      scale: [1, 5, 1] as [number, number, number],
    },
  },
  {
    id: 347,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-2.5, 12.5, 2.5] as [number, number, number],
      scale: [1, 5, 1] as [number, number, number],
    },
  },
  {
    id: 458,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [2.5, 12.5, 2.5] as [number, number, number],
      scale: [1, 5, 1] as [number, number, number],
    },
  },

  // Base Beams - Level 1
  {
    id: 451,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 5, -3] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1.2] as [number, number, number],
    },
  },
  {
    id: 567,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 5, 3] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1.2] as [number, number, number],
    },
  },
  {
    id: 678,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-3, 5, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1.2] as [number, number, number],
    },
  },
  {
    id: 789,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [3, 5, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1.2] as [number, number, number],
    },
  },

  // Level 2 Beams
  {
    id: 452,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 10, -3] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.9, 0.9, 1.1] as [number, number, number],
    },
  },
  {
    id: 568,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 10, 3] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.9, 0.9, 1.1] as [number, number, number],
    },
  },
  {
    id: 679,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-3, 10, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [0.9, 0.9, 1.1] as [number, number, number],
    },
  },
  {
    id: 790,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [3, 10, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [0.9, 0.9, 1.1] as [number, number, number],
    },
  },

  // Level 3 Beams
  {
    id: 453,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 15, -2.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 1] as [number, number, number],
    },
  },
  {
    id: 569,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 15, 2.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 1] as [number, number, number],
    },
  },
  {
    id: 680,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-2.5, 15, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 1] as [number, number, number],
    },
  },
  {
    id: 791,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [2.5, 15, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 1] as [number, number, number],
    },
  },

  // Diagonal Bracing - Level 1
  {
    id: 782,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 3, -3] as [number, number, number],
      rotation: [0, 0, Math.PI / 4] as [number, number, number],
      scale: [0.6, 0.6, 1.4] as [number, number, number],
    },
  },
  {
    id: 890,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 3, -3] as [number, number, number],
      rotation: [0, 0, -Math.PI / 4] as [number, number, number],
      scale: [0.6, 0.6, 1.4] as [number, number, number],
    },
  },
  {
    id: 891,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 3, 3] as [number, number, number],
      rotation: [0, 0, Math.PI / 4] as [number, number, number],
      scale: [0.6, 0.6, 1.4] as [number, number, number],
    },
  },
  {
    id: 892,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 3, 3] as [number, number, number],
      rotation: [0, 0, -Math.PI / 4] as [number, number, number],
      scale: [0.6, 0.6, 1.4] as [number, number, number],
    },
  },
  {
    id: 893,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-3, 3, 0] as [number, number, number],
      rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number],
      scale: [0.6, 0.6, 1.4] as [number, number, number],
    },
  },
  {
    id: 894,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-3, 3, 0] as [number, number, number],
      rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number],
      scale: [0.6, 0.6, 1.4] as [number, number, number],
    },
  },
  {
    id: 895,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [3, 3, 0] as [number, number, number],
      rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number],
      scale: [0.6, 0.6, 1.4] as [number, number, number],
    },
  },
  {
    id: 896,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [3, 3, 0] as [number, number, number],
      rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number],
      scale: [0.6, 0.6, 1.4] as [number, number, number],
    },
  },

  // Diagonal Bracing - Level 2
  {
    id: 783,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 8, -3] as [number, number, number],
      rotation: [0, 0, Math.PI / 4] as [number, number, number],
      scale: [0.55, 0.55, 1.3] as [number, number, number],
    },
  },
  {
    id: 897,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 8, -3] as [number, number, number],
      rotation: [0, 0, -Math.PI / 4] as [number, number, number],
      scale: [0.55, 0.55, 1.3] as [number, number, number],
    },
  },
  {
    id: 898,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 8, 3] as [number, number, number],
      rotation: [0, 0, Math.PI / 4] as [number, number, number],
      scale: [0.55, 0.55, 1.3] as [number, number, number],
    },
  },
  {
    id: 899,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 8, 3] as [number, number, number],
      rotation: [0, 0, -Math.PI / 4] as [number, number, number],
      scale: [0.55, 0.55, 1.3] as [number, number, number],
    },
  },

  // Diagonal Bracing - Level 3
  {
    id: 784,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 13, -2.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 4] as [number, number, number],
      scale: [0.5, 0.5, 1.2] as [number, number, number],
    },
  },
  {
    id: 900,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 13, -2.5] as [number, number, number],
      rotation: [0, 0, -Math.PI / 4] as [number, number, number],
      scale: [0.5, 0.5, 1.2] as [number, number, number],
    },
  },
];

// Model 2: Main Building Frame - Complex 4-story structure
export const buildingFrameGeometry = [
  // Ground Floor Columns (4x4 grid)
  {
    id: 101,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 1.5, -6] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 102,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-2, 1.5, -6] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 103,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [2, 1.5, -6] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 104,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 1.5, -6] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 105,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 1.5, -2] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 106,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-2, 1.5, -2] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 107,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [2, 1.5, -2] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 108,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 1.5, -2] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 109,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 1.5, 2] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 110,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-2, 1.5, 2] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 111,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [2, 1.5, 2] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 112,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 1.5, 2] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 113,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 1.5, 6] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 114,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-2, 1.5, 6] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 115,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [2, 1.5, 6] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 116,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 1.5, 6] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },

  // Second Floor Columns
  {
    id: 201,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 4.5, -6] as [number, number, number],
      scale: [0.95, 3, 0.95] as [number, number, number],
    },
  },
  {
    id: 202,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-2, 4.5, -6] as [number, number, number],
      scale: [0.95, 3, 0.95] as [number, number, number],
    },
  },
  {
    id: 203,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [2, 4.5, -6] as [number, number, number],
      scale: [0.95, 3, 0.95] as [number, number, number],
    },
  },
  {
    id: 204,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 4.5, -6] as [number, number, number],
      scale: [0.95, 3, 0.95] as [number, number, number],
    },
  },
  {
    id: 205,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 4.5, 2] as [number, number, number],
      scale: [0.95, 3, 0.95] as [number, number, number],
    },
  },
  {
    id: 206,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 4.5, 2] as [number, number, number],
      scale: [0.95, 3, 0.95] as [number, number, number],
    },
  },

  // Third Floor Columns
  {
    id: 301,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 7.5, -6] as [number, number, number],
      scale: [0.9, 3, 0.9] as [number, number, number],
    },
  },
  {
    id: 302,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [2, 7.5, -6] as [number, number, number],
      scale: [0.9, 3, 0.9] as [number, number, number],
    },
  },
  {
    id: 303,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 7.5, -6] as [number, number, number],
      scale: [0.9, 3, 0.9] as [number, number, number],
    },
  },

  // Fourth Floor Columns
  {
    id: 351,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 10.5, -6] as [number, number, number],
      scale: [0.85, 3, 0.85] as [number, number, number],
    },
  },
  {
    id: 352,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 10.5, -6] as [number, number, number],
      scale: [0.85, 3, 0.85] as [number, number, number],
    },
  },

  // Floor Beams - Level 1 (X-direction)
  {
    id: 401,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-4, 3, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 0.8] as [number, number, number],
    },
  },
  {
    id: 402,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 3, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 0.8] as [number, number, number],
    },
  },
  {
    id: 403,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [4, 3, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 0.8] as [number, number, number],
    },
  },
  {
    id: 404,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-4, 3, -2] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 0.8] as [number, number, number],
    },
  },
  {
    id: 405,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 3, -2] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 0.8] as [number, number, number],
    },
  },
  {
    id: 406,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [4, 3, -2] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 0.8] as [number, number, number],
    },
  },

  // Floor Beams - Level 1 (Y-direction)
  {
    id: 411,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-6, 3, -4] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 0.8] as [number, number, number],
    },
  },
  {
    id: 412,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-6, 3, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 0.8] as [number, number, number],
    },
  },
  {
    id: 413,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-6, 3, 4] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 0.8] as [number, number, number],
    },
  },
  {
    id: 414,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [6, 3, -4] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 0.8] as [number, number, number],
    },
  },

  // Floor Beams - Level 2
  {
    id: 501,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-4, 6, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.95, 0.95, 0.8] as [number, number, number],
    },
  },
  {
    id: 502,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 6, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.95, 0.95, 0.8] as [number, number, number],
    },
  },
  {
    id: 503,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [4, 6, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.95, 0.95, 0.8] as [number, number, number],
    },
  },
  {
    id: 504,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-6, 6, -2] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [0.95, 0.95, 0.8] as [number, number, number],
    },
  },

  // Floor Beams - Level 3
  {
    id: 601,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-2, 9, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.9, 0.9, 0.8] as [number, number, number],
    },
  },
  {
    id: 602,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [4, 9, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.9, 0.9, 0.8] as [number, number, number],
    },
  },

  // Floor Beams - Level 4
  {
    id: 701,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 12, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.85, 0.85, 0.8] as [number, number, number],
    },
  },

  // Diagonal Bracing - Level 1
  {
    id: 801,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-4, 2, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 802,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 2, -6] as [number, number, number],
      rotation: [0, 0, -Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 803,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [4, 2, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 804,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-6, 2, -4] as [number, number, number],
      rotation: [Math.PI / 6, Math.PI / 2, 0] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 805,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-6, 2, 0] as [number, number, number],
      rotation: [-Math.PI / 6, Math.PI / 2, 0] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },

  // Diagonal Bracing - Level 2
  {
    id: 811,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-4, 5, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.48, 0.48, 0.75] as [number, number, number],
    },
  },
  {
    id: 812,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 5, -6] as [number, number, number],
      rotation: [0, 0, -Math.PI / 6] as [number, number, number],
      scale: [0.48, 0.48, 0.75] as [number, number, number],
    },
  },
  {
    id: 813,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [4, 5, -6] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.48, 0.48, 0.75] as [number, number, number],
    },
  },
];

// Model 3: Bridge Deck - Complex cable-stayed bridge
export const bridgeDeckGeometry = [
  // Support Piers
  {
    id: 501,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-10, 2, 0] as [number, number, number],
      scale: [1.5, 4, 1.5] as [number, number, number],
    },
  },
  {
    id: 502,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 2, 0] as [number, number, number],
      scale: [1.5, 4, 1.5] as [number, number, number],
    },
  },
  {
    id: 503,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-2, 2, 0] as [number, number, number],
      scale: [1.5, 4, 1.5] as [number, number, number],
    },
  },
  {
    id: 504,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [2, 2, 0] as [number, number, number],
      scale: [1.5, 4, 1.5] as [number, number, number],
    },
  },
  {
    id: 505,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 2, 0] as [number, number, number],
      scale: [1.5, 4, 1.5] as [number, number, number],
    },
  },
  {
    id: 506,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [10, 2, 0] as [number, number, number],
      scale: [1.5, 4, 1.5] as [number, number, number],
    },
  },

  // Main Towers (tall piers at center)
  {
    id: 507,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-2, 7, 0] as [number, number, number],
      scale: [1.2, 10, 1.2] as [number, number, number],
    },
  },
  {
    id: 508,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [2, 7, 0] as [number, number, number],
      scale: [1.2, 10, 1.2] as [number, number, number],
    },
  },

  // Main Deck Beams - Lower level
  {
    id: 601,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-8, 4, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1.2, 1.2, 0.8] as [number, number, number],
    },
  },
  {
    id: 602,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-4, 4, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1.2, 1.2, 0.8] as [number, number, number],
    },
  },
  {
    id: 603,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 4, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1.2, 1.2, 0.8] as [number, number, number],
    },
  },
  {
    id: 604,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [4, 4, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1.2, 1.2, 0.8] as [number, number, number],
    },
  },
  {
    id: 605,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [8, 4, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1.2, 1.2, 0.8] as [number, number, number],
    },
  },

  // Secondary Deck Beams - Parallel
  {
    id: 606,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-8, 4.5, 1.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 0.8] as [number, number, number],
    },
  },
  {
    id: 607,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-4, 4.5, 1.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 0.8] as [number, number, number],
    },
  },
  {
    id: 608,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 4.5, 1.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 0.8] as [number, number, number],
    },
  },
  {
    id: 609,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [4, 4.5, 1.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 0.8] as [number, number, number],
    },
  },
  {
    id: 610,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [8, 4.5, 1.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 0.8] as [number, number, number],
    },
  },

  // Secondary Deck Beams - Opposite side
  {
    id: 611,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-8, 4.5, -1.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 0.8] as [number, number, number],
    },
  },
  {
    id: 612,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-4, 4.5, -1.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 0.8] as [number, number, number],
    },
  },
  {
    id: 613,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 4.5, -1.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 0.8] as [number, number, number],
    },
  },
  {
    id: 614,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [4, 4.5, -1.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 0.8] as [number, number, number],
    },
  },
  {
    id: 615,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [8, 4.5, -1.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.8, 0.8, 0.8] as [number, number, number],
    },
  },

  // Cross Bracing - Bottom truss
  {
    id: 701,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-8, 3, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 702,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-4, 3, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 703,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 3, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 704,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [4, 3, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 705,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [8, 3, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 706,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-8, 3, 0] as [number, number, number],
      rotation: [0, 0, -Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 707,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-4, 3, 0] as [number, number, number],
      rotation: [0, 0, -Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 708,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 3, 0] as [number, number, number],
      rotation: [0, 0, -Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 709,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [4, 3, 0] as [number, number, number],
      rotation: [0, 0, -Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 710,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [8, 3, 0] as [number, number, number],
      rotation: [0, 0, -Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },

  // Cable Stays from left tower
  {
    id: 711,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-5, 8, 0] as [number, number, number],
      rotation: [0, 0, -Math.PI / 3] as [number, number, number],
      scale: [0.3, 0.3, 1.5] as [number, number, number],
    },
  },
  {
    id: 712,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-3.5, 8, 0] as [number, number, number],
      rotation: [0, 0, -Math.PI / 4] as [number, number, number],
      scale: [0.3, 0.3, 1.2] as [number, number, number],
    },
  },
  {
    id: 713,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-1, 9, 0] as [number, number, number],
      rotation: [0, 0, -Math.PI / 6] as [number, number, number],
      scale: [0.3, 0.3, 1] as [number, number, number],
    },
  },

  // Cable Stays from right tower
  {
    id: 714,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [5, 8, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 3] as [number, number, number],
      scale: [0.3, 0.3, 1.5] as [number, number, number],
    },
  },
  {
    id: 715,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [3.5, 8, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 4] as [number, number, number],
      scale: [0.3, 0.3, 1.2] as [number, number, number],
    },
  },
  {
    id: 716,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [1, 9, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.3, 0.3, 1] as [number, number, number],
    },
  },

  // Lateral Bracing (perpendicular to deck)
  {
    id: 720,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-8, 4.2, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [0.4, 0.4, 0.6] as [number, number, number],
    },
  },
  {
    id: 721,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-4, 4.2, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [0.4, 0.4, 0.6] as [number, number, number],
    },
  },
  {
    id: 722,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 4.2, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [0.4, 0.4, 0.6] as [number, number, number],
    },
  },
  {
    id: 723,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [4, 4.2, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [0.4, 0.4, 0.6] as [number, number, number],
    },
  },
  {
    id: 724,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [8, 4.2, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [0.4, 0.4, 0.6] as [number, number, number],
    },
  },
];

// Export mapping for easy lookup
export const modelGeometryMap: Record<string, typeof towerCraneGeometry> = {
  'model-1': towerCraneGeometry,
  'model-2': buildingFrameGeometry,
  'model-3': bridgeDeckGeometry,
};

// Default export for backward compatibility
export const mock3DElements = towerCraneGeometry;
