// Mock 3D geometry data for structural elements

// Model 1: Tower Crane Foundation - Simple 4-post foundation
export const towerCraneGeometry = [
  // Corner Columns
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

  // Base Beams
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

  // Diagonal Bracing
  {
    id: 782,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 3, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 4] as [number, number, number],
      scale: [0.6, 0.6, 1.4] as [number, number, number],
    },
  },
  {
    id: 890,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [0, 3, 0] as [number, number, number],
      rotation: [0, 0, -Math.PI / 4] as [number, number, number],
      scale: [0.6, 0.6, 1.4] as [number, number, number],
    },
  },
];

// Model 2: Main Building Frame - Multi-story structure
export const buildingFrameGeometry = [
  // Ground Floor Columns
  {
    id: 101,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 1.5, -4] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 102,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [0, 1.5, -4] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 103,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 1.5, -4] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 104,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 1.5, 4] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 105,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [0, 1.5, 4] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 106,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 1.5, 4] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },

  // Second Floor Columns
  {
    id: 201,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-6, 4.5, -4] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 202,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [0, 4.5, -4] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },
  {
    id: 203,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [6, 4.5, -4] as [number, number, number],
      scale: [1, 3, 1] as [number, number, number],
    },
  },

  // Floor Beams - Level 1
  {
    id: 301,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-3, 3, -4] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1.2] as [number, number, number],
    },
  },
  {
    id: 302,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [3, 3, -4] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1.2] as [number, number, number],
    },
  },
  {
    id: 303,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-6, 3, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1.6] as [number, number, number],
    },
  },
  {
    id: 304,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 3, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1.6] as [number, number, number],
    },
  },

  // Floor Beams - Level 2
  {
    id: 401,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-3, 6, -4] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1.2] as [number, number, number],
    },
  },
  {
    id: 402,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [3, 6, -4] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1.2] as [number, number, number],
    },
  },
];

// Model 3: Bridge Deck - Linear span structure
export const bridgeDeckGeometry = [
  // Support Piers
  {
    id: 501,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-8, 2, 0] as [number, number, number],
      scale: [1.5, 4, 1.5] as [number, number, number],
    },
  },
  {
    id: 502,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [-4, 2, 0] as [number, number, number],
      scale: [1.5, 4, 1.5] as [number, number, number],
    },
  },
  {
    id: 503,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [0, 2, 0] as [number, number, number],
      scale: [1.5, 4, 1.5] as [number, number, number],
    },
  },
  {
    id: 504,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [4, 2, 0] as [number, number, number],
      scale: [1.5, 4, 1.5] as [number, number, number],
    },
  },
  {
    id: 505,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [8, 2, 0] as [number, number, number],
      scale: [1.5, 4, 1.5] as [number, number, number],
    },
  },

  // Main Deck Beams
  {
    id: 601,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-6, 4, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1.2, 1.2, 0.8] as [number, number, number],
    },
  },
  {
    id: 602,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [-2, 4, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1.2, 1.2, 0.8] as [number, number, number],
    },
  },
  {
    id: 603,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [2, 4, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1.2, 1.2, 0.8] as [number, number, number],
    },
  },
  {
    id: 604,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [6, 4, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1.2, 1.2, 0.8] as [number, number, number],
    },
  },

  // Cross Bracing
  {
    id: 701,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-6, 3, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 702,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-2, 3, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 703,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [2, 3, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 704,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [6, 3, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 705,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-6, 3, 0] as [number, number, number],
      rotation: [0, 0, -Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
    },
  },
  {
    id: 706,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [-2, 3, 0] as [number, number, number],
      rotation: [0, 0, -Math.PI / 6] as [number, number, number],
      scale: [0.5, 0.5, 0.8] as [number, number, number],
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
