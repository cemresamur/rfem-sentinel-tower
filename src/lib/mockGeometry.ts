// Mock 3D geometry data for structural elements
export const mock3DElements = [
  // Columns
  {
    id: 123,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [0, 2.5, 0] as [number, number, number],
      scale: [1, 5, 1] as [number, number, number],
    },
  },
  {
    id: 234,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [5, 2.5, 0] as [number, number, number],
      scale: [1, 5, 1] as [number, number, number],
    },
  },
  {
    id: 345,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [0, 2.5, 5] as [number, number, number],
      scale: [1, 5, 1] as [number, number, number],
    },
  },
  {
    id: 456,
    type: 'COLUMN',
    geometry: {
      type: 'cylinder' as const,
      position: [5, 2.5, 5] as [number, number, number],
      scale: [1, 5, 1] as [number, number, number],
    },
  },

  // Beams
  {
    id: 451,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [2.5, 5, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1] as [number, number, number],
    },
  },
  {
    id: 567,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [2.5, 5, 5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1] as [number, number, number],
    },
  },
  {
    id: 678,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [0, 5, 2.5] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1] as [number, number, number],
    },
  },
  {
    id: 789,
    type: 'BEAM',
    geometry: {
      type: 'beam' as const,
      position: [5, 5, 2.5] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [1, 1, 1] as [number, number, number],
    },
  },

  // Truss elements
  {
    id: 782,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [2.5, 6, 2.5] as [number, number, number],
      rotation: [0, 0, Math.PI / 2] as [number, number, number],
      scale: [0.5, 0.5, 1] as [number, number, number],
    },
  },
  {
    id: 890,
    type: 'TRUSS',
    geometry: {
      type: 'beam' as const,
      position: [2.5, 6.5, 2.5] as [number, number, number],
      rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number],
      scale: [0.5, 0.5, 1] as [number, number, number],
    },
  },
];
