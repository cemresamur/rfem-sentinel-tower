// Mock 3D geometry data for structural elements - Ultra-Complex Realistic Structures

// ==================== MODEL 1: TOWER CRANE FOUNDATION ====================
// Ultra-complex 10-level lattice crane tower with massive foundation
export const towerCraneGeometry = [
  // ===== FOUNDATION PIERS (Massive concrete piers) =====
  { id: 1001, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-4, 1.5, -4] as [number, number, number], scale: [1.8, 3, 1.8] as [number, number, number] } },
  { id: 1002, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [4, 1.5, -4] as [number, number, number], scale: [1.8, 3, 1.8] as [number, number, number] } },
  { id: 1003, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-4, 1.5, 4] as [number, number, number], scale: [1.8, 3, 1.8] as [number, number, number] } },
  { id: 1004, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [4, 1.5, 4] as [number, number, number], scale: [1.8, 3, 1.8] as [number, number, number] } },

  // ===== MAIN TOWER LEGS - LEVEL 1 (Ground to 3m) =====
  { id: 123, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-4, 4.5, -4] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 234, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [4, 4.5, -4] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 345, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-4, 4.5, 4] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 456, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [4, 4.5, 4] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },

  // ===== MAIN TOWER LEGS - LEVEL 2 (3m to 6m) =====
  { id: 124, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.8, 7.5, -3.8] as [number, number, number], scale: [1.15, 3, 1.15] as [number, number, number] } },
  { id: 235, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.8, 7.5, -3.8] as [number, number, number], scale: [1.15, 3, 1.15] as [number, number, number] } },
  { id: 346, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.8, 7.5, 3.8] as [number, number, number], scale: [1.15, 3, 1.15] as [number, number, number] } },
  { id: 457, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.8, 7.5, 3.8] as [number, number, number], scale: [1.15, 3, 1.15] as [number, number, number] } },

  // ===== MAIN TOWER LEGS - LEVEL 3 (6m to 9m) =====
  { id: 125, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.6, 10.5, -3.6] as [number, number, number], scale: [1.1, 3, 1.1] as [number, number, number] } },
  { id: 236, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.6, 10.5, -3.6] as [number, number, number], scale: [1.1, 3, 1.1] as [number, number, number] } },
  { id: 347, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.6, 10.5, 3.6] as [number, number, number], scale: [1.1, 3, 1.1] as [number, number, number] } },
  { id: 458, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.6, 10.5, 3.6] as [number, number, number], scale: [1.1, 3, 1.1] as [number, number, number] } },

  // ===== MAIN TOWER LEGS - LEVEL 4 (9m to 12m) =====
  { id: 126, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.4, 13.5, -3.4] as [number, number, number], scale: [1.05, 3, 1.05] as [number, number, number] } },
  { id: 237, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.4, 13.5, -3.4] as [number, number, number], scale: [1.05, 3, 1.05] as [number, number, number] } },
  { id: 348, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.4, 13.5, 3.4] as [number, number, number], scale: [1.05, 3, 1.05] as [number, number, number] } },
  { id: 459, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.4, 13.5, 3.4] as [number, number, number], scale: [1.05, 3, 1.05] as [number, number, number] } },

  // ===== MAIN TOWER LEGS - LEVEL 5 (12m to 15m) =====
  { id: 127, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.2, 16.5, -3.2] as [number, number, number], scale: [1.0, 3, 1.0] as [number, number, number] } },
  { id: 238, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.2, 16.5, -3.2] as [number, number, number], scale: [1.0, 3, 1.0] as [number, number, number] } },
  { id: 349, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.2, 16.5, 3.2] as [number, number, number], scale: [1.0, 3, 1.0] as [number, number, number] } },
  { id: 460, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.2, 16.5, 3.2] as [number, number, number], scale: [1.0, 3, 1.0] as [number, number, number] } },

  // ===== MAIN TOWER LEGS - LEVEL 6 (15m to 18m) =====
  { id: 128, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.0, 19.5, -3.0] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 239, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.0, 19.5, -3.0] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 350, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.0, 19.5, 3.0] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 461, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.0, 19.5, 3.0] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },

  // ===== MAIN TOWER LEGS - LEVEL 7 (18m to 21m) =====
  { id: 129, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2.8, 22.5, -2.8] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },
  { id: 240, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2.8, 22.5, -2.8] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },
  { id: 351, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2.8, 22.5, 2.8] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },
  { id: 462, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2.8, 22.5, 2.8] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },

  // ===== MAIN TOWER LEGS - LEVEL 8 (21m to 24m) =====
  { id: 130, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2.6, 25.5, -2.6] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },
  { id: 241, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2.6, 25.5, -2.6] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },
  { id: 352, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2.6, 25.5, 2.6] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },
  { id: 463, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2.6, 25.5, 2.6] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },

  // ===== HORIZONTAL BEAMS - LEVEL 1 (3m height) =====
  { id: 451, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 6, -4] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.6] as [number, number, number] } },
  { id: 567, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 6, 4] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.6] as [number, number, number] } },
  { id: 678, type: 'BEAM', geometry: { type: 'beam' as const, position: [-4, 6, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.6] as [number, number, number] } },
  { id: 789, type: 'BEAM', geometry: { type: 'beam' as const, position: [4, 6, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.6] as [number, number, number] } },

  // ===== HORIZONTAL BEAMS - LEVEL 2 (6m height) =====
  { id: 452, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 9, -3.8] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.95, 0.95, 1.52] as [number, number, number] } },
  { id: 568, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 9, 3.8] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.95, 0.95, 1.52] as [number, number, number] } },
  { id: 679, type: 'BEAM', geometry: { type: 'beam' as const, position: [-3.8, 9, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.95, 0.95, 1.52] as [number, number, number] } },
  { id: 790, type: 'BEAM', geometry: { type: 'beam' as const, position: [3.8, 9, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.95, 0.95, 1.52] as [number, number, number] } },

  // ===== HORIZONTAL BEAMS - LEVEL 3 (9m height) =====
  { id: 453, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 12, -3.6] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 1.44] as [number, number, number] } },
  { id: 569, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 12, 3.6] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 1.44] as [number, number, number] } },
  { id: 680, type: 'BEAM', geometry: { type: 'beam' as const, position: [-3.6, 12, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 1.44] as [number, number, number] } },
  { id: 791, type: 'BEAM', geometry: { type: 'beam' as const, position: [3.6, 12, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 1.44] as [number, number, number] } },

  // ===== HORIZONTAL BEAMS - LEVEL 4 (12m height) =====
  { id: 454, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 15, -3.4] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.85, 0.85, 1.36] as [number, number, number] } },
  { id: 570, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 15, 3.4] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.85, 0.85, 1.36] as [number, number, number] } },
  { id: 681, type: 'BEAM', geometry: { type: 'beam' as const, position: [-3.4, 15, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.85, 0.85, 1.36] as [number, number, number] } },
  { id: 792, type: 'BEAM', geometry: { type: 'beam' as const, position: [3.4, 15, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.85, 0.85, 1.36] as [number, number, number] } },

  // ===== HORIZONTAL BEAMS - LEVEL 5 (15m height) =====
  { id: 455, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 18, -3.2] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 1.28] as [number, number, number] } },
  { id: 571, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 18, 3.2] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 1.28] as [number, number, number] } },
  { id: 682, type: 'BEAM', geometry: { type: 'beam' as const, position: [-3.2, 18, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 1.28] as [number, number, number] } },
  { id: 793, type: 'BEAM', geometry: { type: 'beam' as const, position: [3.2, 18, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 1.28] as [number, number, number] } },

  // ===== HORIZONTAL BEAMS - LEVEL 6 (18m height) =====
  { id: 456, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 21, -3.0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.75, 0.75, 1.2] as [number, number, number] } },
  { id: 572, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 21, 3.0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.75, 0.75, 1.2] as [number, number, number] } },
  { id: 683, type: 'BEAM', geometry: { type: 'beam' as const, position: [-3.0, 21, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.75, 0.75, 1.2] as [number, number, number] } },
  { id: 794, type: 'BEAM', geometry: { type: 'beam' as const, position: [3.0, 21, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.75, 0.75, 1.2] as [number, number, number] } },

  // ===== HORIZONTAL BEAMS - LEVEL 7 (21m height) =====
  { id: 457, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 24, -2.8] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 1.12] as [number, number, number] } },
  { id: 573, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 24, 2.8] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 1.12] as [number, number, number] } },
  { id: 684, type: 'BEAM', geometry: { type: 'beam' as const, position: [-2.8, 24, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 1.12] as [number, number, number] } },
  { id: 795, type: 'BEAM', geometry: { type: 'beam' as const, position: [2.8, 24, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 1.12] as [number, number, number] } },

  // ===== DIAGONAL CROSS-BRACING - LEVEL 1 - NORTH FACE =====
  { id: 782, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-2, 4.5, -4] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 890, type: 'TRUSS', geometry: { type: 'beam' as const, position: [2, 4.5, -4] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 891, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-2, 7.5, -4] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 892, type: 'TRUSS', geometry: { type: 'beam' as const, position: [2, 7.5, -4] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },

  // ===== DIAGONAL CROSS-BRACING - LEVEL 1 - SOUTH FACE =====
  { id: 893, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-2, 4.5, 4] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 894, type: 'TRUSS', geometry: { type: 'beam' as const, position: [2, 4.5, 4] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 895, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-2, 7.5, 4] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 896, type: 'TRUSS', geometry: { type: 'beam' as const, position: [2, 7.5, 4] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },

  // ===== DIAGONAL CROSS-BRACING - LEVEL 1 - WEST FACE =====
  { id: 901, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-4, 4.5, -2] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 902, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-4, 4.5, 2] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 903, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-4, 7.5, -2] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 904, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-4, 7.5, 2] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },

  // ===== DIAGONAL CROSS-BRACING - LEVEL 1 - EAST FACE =====
  { id: 905, type: 'TRUSS', geometry: { type: 'beam' as const, position: [4, 4.5, -2] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 906, type: 'TRUSS', geometry: { type: 'beam' as const, position: [4, 4.5, 2] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 907, type: 'TRUSS', geometry: { type: 'beam' as const, position: [4, 7.5, -2] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },
  { id: 908, type: 'TRUSS', geometry: { type: 'beam' as const, position: [4, 7.5, 2] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.1] as [number, number, number] } },

  // ===== DIAGONAL CROSS-BRACING - LEVEL 2 - ALL FACES =====
  { id: 783, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.9, 10.5, -3.8] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.55, 0.55, 1.05] as [number, number, number] } },
  { id: 897, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.9, 10.5, -3.8] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.55, 0.55, 1.05] as [number, number, number] } },
  { id: 898, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.9, 10.5, 3.8] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.55, 0.55, 1.05] as [number, number, number] } },
  { id: 899, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.9, 10.5, 3.8] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.55, 0.55, 1.05] as [number, number, number] } },
  { id: 909, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-3.8, 10.5, -1.9] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.55, 0.55, 1.05] as [number, number, number] } },
  { id: 910, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-3.8, 10.5, 1.9] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.55, 0.55, 1.05] as [number, number, number] } },
  { id: 911, type: 'TRUSS', geometry: { type: 'beam' as const, position: [3.8, 10.5, -1.9] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.55, 0.55, 1.05] as [number, number, number] } },
  { id: 912, type: 'TRUSS', geometry: { type: 'beam' as const, position: [3.8, 10.5, 1.9] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.55, 0.55, 1.05] as [number, number, number] } },

  // ===== DIAGONAL CROSS-BRACING - LEVEL 3 - ALL FACES =====
  { id: 784, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.8, 13.5, -3.6] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.5, 0.5, 1.0] as [number, number, number] } },
  { id: 900, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.8, 13.5, -3.6] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.5, 0.5, 1.0] as [number, number, number] } },
  { id: 913, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.8, 13.5, 3.6] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.5, 0.5, 1.0] as [number, number, number] } },
  { id: 914, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.8, 13.5, 3.6] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.5, 0.5, 1.0] as [number, number, number] } },
  { id: 915, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-3.6, 13.5, -1.8] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.5, 0.5, 1.0] as [number, number, number] } },
  { id: 916, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-3.6, 13.5, 1.8] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.5, 0.5, 1.0] as [number, number, number] } },
  { id: 917, type: 'TRUSS', geometry: { type: 'beam' as const, position: [3.6, 13.5, -1.8] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.5, 0.5, 1.0] as [number, number, number] } },
  { id: 918, type: 'TRUSS', geometry: { type: 'beam' as const, position: [3.6, 13.5, 1.8] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.5, 0.5, 1.0] as [number, number, number] } },

  // ===== DIAGONAL CROSS-BRACING - LEVEL 4 - ALL FACES =====
  { id: 919, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.7, 16.5, -3.4] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.48, 0.48, 0.95] as [number, number, number] } },
  { id: 920, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.7, 16.5, -3.4] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.48, 0.48, 0.95] as [number, number, number] } },
  { id: 921, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.7, 16.5, 3.4] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.48, 0.48, 0.95] as [number, number, number] } },
  { id: 922, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.7, 16.5, 3.4] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.48, 0.48, 0.95] as [number, number, number] } },
  { id: 923, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-3.4, 16.5, -1.7] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.48, 0.48, 0.95] as [number, number, number] } },
  { id: 924, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-3.4, 16.5, 1.7] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.48, 0.48, 0.95] as [number, number, number] } },
  { id: 925, type: 'TRUSS', geometry: { type: 'beam' as const, position: [3.4, 16.5, -1.7] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.48, 0.48, 0.95] as [number, number, number] } },
  { id: 926, type: 'TRUSS', geometry: { type: 'beam' as const, position: [3.4, 16.5, 1.7] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.48, 0.48, 0.95] as [number, number, number] } },

  // ===== DIAGONAL CROSS-BRACING - LEVELS 5-7 (Additional bracing on all faces) =====
  { id: 927, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.6, 19.5, -3.0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.45, 0.45, 0.9] as [number, number, number] } },
  { id: 928, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.6, 19.5, -3.0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.45, 0.45, 0.9] as [number, number, number] } },
  { id: 929, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.6, 19.5, 3.0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.45, 0.45, 0.9] as [number, number, number] } },
  { id: 930, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.6, 19.5, 3.0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.45, 0.45, 0.9] as [number, number, number] } },
  { id: 931, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.4, 22.5, -2.8] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.42, 0.42, 0.85] as [number, number, number] } },
  { id: 932, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.4, 22.5, -2.8] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.42, 0.42, 0.85] as [number, number, number] } },
  { id: 933, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.4, 22.5, 2.8] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.42, 0.42, 0.85] as [number, number, number] } },
  { id: 934, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.4, 22.5, 2.8] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.42, 0.42, 0.85] as [number, number, number] } },
];

// ==================== MODEL 2: HIGH-RISE BUILDING FRAME ====================
// 12-story commercial tower with 6x6 perimeter columns, core structure, and bracing
export const buildingFrameGeometry = [
  // ===== FOUNDATION / BASEMENT COLUMNS (Ground Level - 6x6 Grid) =====
  { id: 101, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 1.5, -10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 102, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 1.5, -10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 103, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 1.5, -10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 104, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 1.5, -10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 105, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 1.5, -10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 106, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 1.5, -10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 107, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 1.5, -6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 108, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 1.5, -6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 109, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 1.5, -6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 110, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 1.5, -6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 111, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 1.5, -6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 112, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 1.5, -6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 113, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 1.5, -2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 114, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 1.5, -2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 115, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 1.5, -2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 116, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 1.5, -2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 117, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 1.5, -2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 118, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 1.5, -2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 119, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 1.5, 2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 120, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 1.5, 2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 121, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 1.5, 2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 122, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 1.5, 2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 123, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 1.5, 2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 124, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 1.5, 2] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 125, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 1.5, 6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 126, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 1.5, 6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 127, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 1.5, 6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 128, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 1.5, 6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 129, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 1.5, 6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 130, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 1.5, 6] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 131, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 1.5, 10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 132, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 1.5, 10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 133, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 1.5, 10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 134, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 1.5, 10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 135, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 1.5, 10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 136, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 1.5, 10] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },

  // ===== PERIMETER COLUMNS - FLOORS 2-4 (Typical offices) =====
  // North edge
  { id: 201, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 4.5, -10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 202, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 4.5, -10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 203, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 4.5, -10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 204, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 4.5, -10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 205, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 4.5, -10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 206, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 4.5, -10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  // South edge
  { id: 207, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 4.5, 10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 208, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 4.5, 10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 209, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 4.5, 10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 210, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 4.5, 10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 211, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 4.5, 10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 212, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 4.5, 10] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  // West edge (interior points)
  { id: 213, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 4.5, -6] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 214, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 4.5, -2] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 215, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 4.5, 2] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 216, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 4.5, 6] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  // East edge (interior points)
  { id: 217, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 4.5, -6] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 218, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 4.5, -2] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 219, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 4.5, 2] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },
  { id: 220, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 4.5, 6] as [number, number, number], scale: [1, 3, 1] as [number, number, number] } },

  // ===== CORE COLUMNS (Elevator/Stair Shafts) - FLOORS 2-18 =====
  { id: 221, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 4.5, -2] as [number, number, number], scale: [1.1, 3, 1.1] as [number, number, number] } },
  { id: 222, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 4.5, -2] as [number, number, number], scale: [1.1, 3, 1.1] as [number, number, number] } },
  { id: 223, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 4.5, 2] as [number, number, number], scale: [1.1, 3, 1.1] as [number, number, number] } },
  { id: 224, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 4.5, 2] as [number, number, number], scale: [1.1, 3, 1.1] as [number, number, number] } },

  { id: 225, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 7.5, -2] as [number, number, number], scale: [1.05, 3, 1.05] as [number, number, number] } },
  { id: 226, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 7.5, -2] as [number, number, number], scale: [1.05, 3, 1.05] as [number, number, number] } },
  { id: 227, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 7.5, 2] as [number, number, number], scale: [1.05, 3, 1.05] as [number, number, number] } },
  { id: 228, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 7.5, 2] as [number, number, number], scale: [1.05, 3, 1.05] as [number, number, number] } },

  { id: 229, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 10.5, -2] as [number, number, number], scale: [1.0, 3, 1.0] as [number, number, number] } },
  { id: 230, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 10.5, -2] as [number, number, number], scale: [1.0, 3, 1.0] as [number, number, number] } },
  { id: 231, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 10.5, 2] as [number, number, number], scale: [1.0, 3, 1.0] as [number, number, number] } },
  { id: 232, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 10.5, 2] as [number, number, number], scale: [1.0, 3, 1.0] as [number, number, number] } },

  { id: 233, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 13.5, -2] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 234, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 13.5, -2] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 235, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 13.5, 2] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 236, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 13.5, 2] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },

  { id: 237, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 16.5, -2] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },
  { id: 238, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 16.5, -2] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },
  { id: 239, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 16.5, 2] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },
  { id: 240, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 16.5, 2] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },

  // ===== PERIMETER COLUMNS - FLOORS 5-8 =====
  { id: 301, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 7.5, -10] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 302, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 7.5, -10] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 303, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 7.5, -10] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 304, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 7.5, -10] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 305, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 7.5, -10] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 306, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 7.5, -10] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 307, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 7.5, 10] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 308, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 7.5, 10] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 309, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 7.5, -6] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 310, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 7.5, 6] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 311, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 7.5, 10] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },
  { id: 312, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 7.5, 10] as [number, number, number], scale: [0.95, 3, 0.95] as [number, number, number] } },

  { id: 351, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 10.5, -10] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },
  { id: 352, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 10.5, -10] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },
  { id: 353, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 10.5, 10] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },
  { id: 354, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 10.5, 10] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },
  { id: 355, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-8, 10.5, -10] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },
  { id: 356, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [8, 10.5, -10] as [number, number, number], scale: [0.9, 3, 0.9] as [number, number, number] } },

  // ===== PERIMETER COLUMNS - FLOORS 9-12 =====
  { id: 361, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 13.5, -10] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },
  { id: 362, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 13.5, -10] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },
  { id: 363, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 13.5, 10] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },
  { id: 364, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 13.5, 10] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },
  { id: 365, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 13.5, -10] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },
  { id: 366, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 13.5, -10] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },
  { id: 367, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 13.5, 10] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },
  { id: 368, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 13.5, 10] as [number, number, number], scale: [0.85, 3, 0.85] as [number, number, number] } },

  { id: 371, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 16.5, -10] as [number, number, number], scale: [0.8, 3, 0.8] as [number, number, number] } },
  { id: 372, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 16.5, -10] as [number, number, number], scale: [0.8, 3, 0.8] as [number, number, number] } },
  { id: 373, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-10, 16.5, 10] as [number, number, number], scale: [0.8, 3, 0.8] as [number, number, number] } },
  { id: 374, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [10, 16.5, 10] as [number, number, number], scale: [0.8, 3, 0.8] as [number, number, number] } },

  // ===== PERIMETER COLUMNS - FLOORS 13-15 =====
  { id: 381, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-8, 19.5, -8] as [number, number, number], scale: [0.75, 3, 0.75] as [number, number, number] } },
  { id: 382, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [8, 19.5, -8] as [number, number, number], scale: [0.75, 3, 0.75] as [number, number, number] } },
  { id: 383, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-8, 19.5, 8] as [number, number, number], scale: [0.75, 3, 0.75] as [number, number, number] } },
  { id: 384, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [8, 19.5, 8] as [number, number, number], scale: [0.75, 3, 0.75] as [number, number, number] } },
  { id: 385, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-4, 19.5, -8] as [number, number, number], scale: [0.75, 3, 0.75] as [number, number, number] } },
  { id: 386, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [4, 19.5, -8] as [number, number, number], scale: [0.75, 3, 0.75] as [number, number, number] } },
  { id: 387, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-4, 19.5, 8] as [number, number, number], scale: [0.75, 3, 0.75] as [number, number, number] } },
  { id: 388, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [4, 19.5, 8] as [number, number, number], scale: [0.75, 3, 0.75] as [number, number, number] } },

  { id: 391, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 22.5, -6] as [number, number, number], scale: [0.7, 3, 0.7] as [number, number, number] } },
  { id: 392, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 22.5, -6] as [number, number, number], scale: [0.7, 3, 0.7] as [number, number, number] } },
  { id: 393, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 22.5, 6] as [number, number, number], scale: [0.7, 3, 0.7] as [number, number, number] } },
  { id: 394, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 22.5, 6] as [number, number, number], scale: [0.7, 3, 0.7] as [number, number, number] } },

  // ===== FLOOR BEAMS - LEVEL 1 (Foundation/Ground) =====
  { id: 401, type: 'BEAM', geometry: { type: 'beam' as const, position: [-8, 3, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 402, type: 'BEAM', geometry: { type: 'beam' as const, position: [-4, 3, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 403, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 3, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 404, type: 'BEAM', geometry: { type: 'beam' as const, position: [4, 3, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 405, type: 'BEAM', geometry: { type: 'beam' as const, position: [8, 3, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 406, type: 'BEAM', geometry: { type: 'beam' as const, position: [-8, 3, 10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 407, type: 'BEAM', geometry: { type: 'beam' as const, position: [-4, 3, 10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 408, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 3, 10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 409, type: 'BEAM', geometry: { type: 'beam' as const, position: [4, 3, 10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 410, type: 'BEAM', geometry: { type: 'beam' as const, position: [8, 3, 10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 411, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 3, -8] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 412, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 3, -4] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 413, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 414, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 3, 4] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 415, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 3, 8] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 416, type: 'BEAM', geometry: { type: 'beam' as const, position: [10, 3, -8] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 417, type: 'BEAM', geometry: { type: 'beam' as const, position: [10, 3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },
  { id: 418, type: 'BEAM', geometry: { type: 'beam' as const, position: [10, 3, 8] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 0.8] as [number, number, number] } },

  // ===== FLOOR BEAMS - LEVEL 2 =====
  { id: 501, type: 'BEAM', geometry: { type: 'beam' as const, position: [-8, 6, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 0.8] as [number, number, number] } },
  { id: 502, type: 'BEAM', geometry: { type: 'beam' as const, position: [-4, 6, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 0.8] as [number, number, number] } },
  { id: 503, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 6, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 0.8] as [number, number, number] } },
  { id: 504, type: 'BEAM', geometry: { type: 'beam' as const, position: [4, 6, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 0.8] as [number, number, number] } },
  { id: 505, type: 'BEAM', geometry: { type: 'beam' as const, position: [8, 6, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 0.8] as [number, number, number] } },
  { id: 506, type: 'BEAM', geometry: { type: 'beam' as const, position: [-8, 6, 10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 0.8] as [number, number, number] } },
  { id: 507, type: 'BEAM', geometry: { type: 'beam' as const, position: [8, 6, 10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 0.8] as [number, number, number] } },
  { id: 508, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 6, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 0.8] as [number, number, number] } },
  { id: 509, type: 'BEAM', geometry: { type: 'beam' as const, position: [10, 6, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 0.8] as [number, number, number] } },
  { id: 510, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 6, -6] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 0.8] as [number, number, number] } },
  { id: 511, type: 'BEAM', geometry: { type: 'beam' as const, position: [10, 6, 6] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.9, 0.9, 0.8] as [number, number, number] } },

  // ===== FLOOR BEAMS - LEVEL 3 =====
  { id: 601, type: 'BEAM', geometry: { type: 'beam' as const, position: [-8, 9, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.85, 0.85, 0.8] as [number, number, number] } },
  { id: 602, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 9, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.85, 0.85, 0.8] as [number, number, number] } },
  { id: 603, type: 'BEAM', geometry: { type: 'beam' as const, position: [8, 9, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.85, 0.85, 0.8] as [number, number, number] } },
  { id: 604, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 9, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.85, 0.85, 0.8] as [number, number, number] } },
  { id: 605, type: 'BEAM', geometry: { type: 'beam' as const, position: [10, 9, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.85, 0.85, 0.8] as [number, number, number] } },
  { id: 606, type: 'BEAM', geometry: { type: 'beam' as const, position: [-4, 9, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.85, 0.85, 0.8] as [number, number, number] } },
  { id: 607, type: 'BEAM', geometry: { type: 'beam' as const, position: [4, 9, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.85, 0.85, 0.8] as [number, number, number] } },

  // ===== FLOOR BEAMS - LEVEL 4 =====
  { id: 701, type: 'BEAM', geometry: { type: 'beam' as const, position: [-5, 12, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 0.8] as [number, number, number] } },
  { id: 702, type: 'BEAM', geometry: { type: 'beam' as const, position: [5, 12, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 0.8] as [number, number, number] } },
  { id: 703, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 12, -5] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 0.8] as [number, number, number] } },
  { id: 704, type: 'BEAM', geometry: { type: 'beam' as const, position: [10, 12, 5] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 0.8] as [number, number, number] } },
  { id: 705, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 12, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 0.8] as [number, number, number] } },
  { id: 706, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 12, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 0.8] as [number, number, number] } },
  { id: 707, type: 'BEAM', geometry: { type: 'beam' as const, position: [10, 12, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 0.8] as [number, number, number] } },

  // ===== FLOOR BEAMS - LEVELS 5-7 =====
  { id: 711, type: 'BEAM', geometry: { type: 'beam' as const, position: [-6, 15, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.75, 0.75, 0.8] as [number, number, number] } },
  { id: 712, type: 'BEAM', geometry: { type: 'beam' as const, position: [6, 15, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.75, 0.75, 0.8] as [number, number, number] } },
  { id: 713, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 15, -6] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.75, 0.75, 0.8] as [number, number, number] } },
  { id: 714, type: 'BEAM', geometry: { type: 'beam' as const, position: [10, 15, 6] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.75, 0.75, 0.8] as [number, number, number] } },
  { id: 715, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 15, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.75, 0.75, 0.8] as [number, number, number] } },
  { id: 716, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 15, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.75, 0.75, 0.8] as [number, number, number] } },
  { id: 717, type: 'BEAM', geometry: { type: 'beam' as const, position: [10, 15, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.75, 0.75, 0.8] as [number, number, number] } },

  // ===== FLOOR BEAMS - LEVELS 8-10 =====
  { id: 721, type: 'BEAM', geometry: { type: 'beam' as const, position: [-5, 18, -8] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 0.7] as [number, number, number] } },
  { id: 722, type: 'BEAM', geometry: { type: 'beam' as const, position: [5, 18, -8] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 0.7] as [number, number, number] } },
  { id: 723, type: 'BEAM', geometry: { type: 'beam' as const, position: [-8, 18, -5] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 0.7] as [number, number, number] } },
  { id: 724, type: 'BEAM', geometry: { type: 'beam' as const, position: [8, 18, 5] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 0.7] as [number, number, number] } },
  { id: 725, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 18, -8] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 0.7] as [number, number, number] } },
  { id: 726, type: 'BEAM', geometry: { type: 'beam' as const, position: [-8, 18, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 0.7] as [number, number, number] } },
  { id: 727, type: 'BEAM', geometry: { type: 'beam' as const, position: [8, 18, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 0.7] as [number, number, number] } },

  // ===== FLOOR BEAMS - LEVELS 11-13 =====
  { id: 731, type: 'BEAM', geometry: { type: 'beam' as const, position: [-4, 21, -6] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.65, 0.65, 0.6] as [number, number, number] } },
  { id: 732, type: 'BEAM', geometry: { type: 'beam' as const, position: [4, 21, -6] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.65, 0.65, 0.6] as [number, number, number] } },
  { id: 733, type: 'BEAM', geometry: { type: 'beam' as const, position: [-6, 21, -4] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.65, 0.65, 0.6] as [number, number, number] } },
  { id: 734, type: 'BEAM', geometry: { type: 'beam' as const, position: [6, 21, 4] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.65, 0.65, 0.6] as [number, number, number] } },

  // ===== OUTRIGGER BEAMS - MECHANICAL FLOOR (Floor 8) =====
  { id: 741, type: 'BEAM', geometry: { type: 'beam' as const, position: [-6, 12, -2] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.6] as [number, number, number] } },
  { id: 742, type: 'BEAM', geometry: { type: 'beam' as const, position: [6, 12, 2] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.6] as [number, number, number] } },
  { id: 743, type: 'BEAM', geometry: { type: 'beam' as const, position: [-2, 12, -6] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.6] as [number, number, number] } },
  { id: 744, type: 'BEAM', geometry: { type: 'beam' as const, position: [2, 12, 6] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.6] as [number, number, number] } },

  // ===== TRANSFER GIRDERS - MECHANICAL FLOOR (Floor 8) =====
  { id: 751, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 12, -10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.3, 1.3, 4] as [number, number, number] } },
  { id: 752, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 12, 10] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.3, 1.3, 4] as [number, number, number] } },
  { id: 753, type: 'BEAM', geometry: { type: 'beam' as const, position: [-10, 12, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1.3, 1.3, 4] as [number, number, number] } },
  { id: 754, type: 'BEAM', geometry: { type: 'beam' as const, position: [10, 12, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1.3, 1.3, 4] as [number, number, number] } },

  // ===== DIAGONAL BRACING - FLOORS 2-4 (Every 3 floors) =====
  // North face
  { id: 801, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-8, 5, -10] as [number, number, number], rotation: [0, 0, Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  { id: 802, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-4, 5, -10] as [number, number, number], rotation: [0, 0, -Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  { id: 803, type: 'TRUSS', geometry: { type: 'beam' as const, position: [0, 5, -10] as [number, number, number], rotation: [0, 0, Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  { id: 804, type: 'TRUSS', geometry: { type: 'beam' as const, position: [4, 5, -10] as [number, number, number], rotation: [0, 0, -Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  { id: 805, type: 'TRUSS', geometry: { type: 'beam' as const, position: [8, 5, -10] as [number, number, number], rotation: [0, 0, Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  // South face
  { id: 806, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-8, 5, 10] as [number, number, number], rotation: [0, 0, Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  { id: 807, type: 'TRUSS', geometry: { type: 'beam' as const, position: [8, 5, 10] as [number, number, number], rotation: [0, 0, -Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  // West face
  { id: 808, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-10, 5, -8] as [number, number, number], rotation: [Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  { id: 809, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-10, 5, 0] as [number, number, number], rotation: [-Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  { id: 810, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-10, 5, 8] as [number, number, number], rotation: [Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  // East face
  { id: 811, type: 'TRUSS', geometry: { type: 'beam' as const, position: [10, 5, -8] as [number, number, number], rotation: [Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  { id: 812, type: 'TRUSS', geometry: { type: 'beam' as const, position: [10, 5, 0] as [number, number, number], rotation: [-Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },
  { id: 813, type: 'TRUSS', geometry: { type: 'beam' as const, position: [10, 5, 8] as [number, number, number], rotation: [Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.5, 0.5, 1.5] as [number, number, number] } },

  // ===== DIAGONAL BRACING - FLOORS 5-7 =====
  { id: 814, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-8, 8, -10] as [number, number, number], rotation: [0, 0, Math.PI / 6] as [number, number, number], scale: [0.48, 0.48, 1.4] as [number, number, number] } },
  { id: 815, type: 'TRUSS', geometry: { type: 'beam' as const, position: [0, 8, -10] as [number, number, number], rotation: [0, 0, -Math.PI / 6] as [number, number, number], scale: [0.48, 0.48, 1.4] as [number, number, number] } },
  { id: 816, type: 'TRUSS', geometry: { type: 'beam' as const, position: [8, 8, -10] as [number, number, number], rotation: [0, 0, Math.PI / 6] as [number, number, number], scale: [0.48, 0.48, 1.4] as [number, number, number] } },
  { id: 817, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-10, 8, 0] as [number, number, number], rotation: [Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.48, 0.48, 1.4] as [number, number, number] } },
  { id: 818, type: 'TRUSS', geometry: { type: 'beam' as const, position: [10, 8, 0] as [number, number, number], rotation: [-Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.48, 0.48, 1.4] as [number, number, number] } },
  { id: 823, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-4, 8, 10] as [number, number, number], rotation: [0, 0, Math.PI / 6] as [number, number, number], scale: [0.48, 0.48, 1.4] as [number, number, number] } },
  { id: 824, type: 'TRUSS', geometry: { type: 'beam' as const, position: [4, 8, 10] as [number, number, number], rotation: [0, 0, -Math.PI / 6] as [number, number, number], scale: [0.48, 0.48, 1.4] as [number, number, number] } },

  // ===== DIAGONAL BRACING - FLOORS 8-10 =====
  { id: 819, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-5, 11, -10] as [number, number, number], rotation: [0, 0, Math.PI / 6] as [number, number, number], scale: [0.45, 0.45, 1.3] as [number, number, number] } },
  { id: 820, type: 'TRUSS', geometry: { type: 'beam' as const, position: [5, 11, -10] as [number, number, number], rotation: [0, 0, -Math.PI / 6] as [number, number, number], scale: [0.45, 0.45, 1.3] as [number, number, number] } },
  { id: 821, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-10, 11, -5] as [number, number, number], rotation: [Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.45, 0.45, 1.3] as [number, number, number] } },
  { id: 822, type: 'TRUSS', geometry: { type: 'beam' as const, position: [10, 11, 5] as [number, number, number], rotation: [-Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.45, 0.45, 1.3] as [number, number, number] } },
  { id: 825, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-8, 11, 10] as [number, number, number], rotation: [0, 0, Math.PI / 6] as [number, number, number], scale: [0.45, 0.45, 1.3] as [number, number, number] } },
  { id: 826, type: 'TRUSS', geometry: { type: 'beam' as const, position: [8, 11, 10] as [number, number, number], rotation: [0, 0, -Math.PI / 6] as [number, number, number], scale: [0.45, 0.45, 1.3] as [number, number, number] } },

  // ===== DIAGONAL BRACING - FLOORS 11-13 =====
  { id: 827, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 14, -10] as [number, number, number], rotation: [0, 0, Math.PI / 6] as [number, number, number], scale: [0.42, 0.42, 1.2] as [number, number, number] } },
  { id: 828, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 14, -10] as [number, number, number], rotation: [0, 0, -Math.PI / 6] as [number, number, number], scale: [0.42, 0.42, 1.2] as [number, number, number] } },
  { id: 829, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-10, 14, -6] as [number, number, number], rotation: [Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.42, 0.42, 1.2] as [number, number, number] } },
  { id: 830, type: 'TRUSS', geometry: { type: 'beam' as const, position: [10, 14, 6] as [number, number, number], rotation: [-Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.42, 0.42, 1.2] as [number, number, number] } },

  // ===== DIAGONAL BRACING - FLOORS 14-16 =====
  { id: 831, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-4, 17, -8] as [number, number, number], rotation: [0, 0, Math.PI / 6] as [number, number, number], scale: [0.4, 0.4, 1.1] as [number, number, number] } },
  { id: 832, type: 'TRUSS', geometry: { type: 'beam' as const, position: [4, 17, -8] as [number, number, number], rotation: [0, 0, -Math.PI / 6] as [number, number, number], scale: [0.4, 0.4, 1.1] as [number, number, number] } },
  { id: 833, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-8, 17, -4] as [number, number, number], rotation: [Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.4, 0.4, 1.1] as [number, number, number] } },
  { id: 834, type: 'TRUSS', geometry: { type: 'beam' as const, position: [8, 17, 4] as [number, number, number], rotation: [-Math.PI / 6, Math.PI / 2, 0] as [number, number, number], scale: [0.4, 0.4, 1.1] as [number, number, number] } },

  // ===== X-BRACING CORE - FLOORS 2-8 =====
  { id: 841, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-2, 6, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.4, 0.4, 0.8] as [number, number, number] } },
  { id: 842, type: 'TRUSS', geometry: { type: 'beam' as const, position: [2, 6, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.4, 0.4, 0.8] as [number, number, number] } },
  { id: 843, type: 'TRUSS', geometry: { type: 'beam' as const, position: [0, 6, -2] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.4, 0.4, 0.8] as [number, number, number] } },
  { id: 844, type: 'TRUSS', geometry: { type: 'beam' as const, position: [0, 6, 2] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.4, 0.4, 0.8] as [number, number, number] } },

  { id: 845, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-2, 9, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.4, 0.4, 0.8] as [number, number, number] } },
  { id: 846, type: 'TRUSS', geometry: { type: 'beam' as const, position: [2, 9, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.4, 0.4, 0.8] as [number, number, number] } },
  { id: 847, type: 'TRUSS', geometry: { type: 'beam' as const, position: [0, 9, -2] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.4, 0.4, 0.8] as [number, number, number] } },
  { id: 848, type: 'TRUSS', geometry: { type: 'beam' as const, position: [0, 9, 2] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.4, 0.4, 0.8] as [number, number, number] } },

  // ===== SECONDARY BEAMS - Distributed across levels =====
  { id: 851, type: 'BEAM', geometry: { type: 'beam' as const, position: [-8, 6, -6] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 0.8] as [number, number, number] } },
  { id: 852, type: 'BEAM', geometry: { type: 'beam' as const, position: [8, 6, 6] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 0.8] as [number, number, number] } },
  { id: 853, type: 'BEAM', geometry: { type: 'beam' as const, position: [-6, 9, -8] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 0.8] as [number, number, number] } },
  { id: 854, type: 'BEAM', geometry: { type: 'beam' as const, position: [6, 9, 8] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 0.8] as [number, number, number] } },
  { id: 855, type: 'BEAM', geometry: { type: 'beam' as const, position: [-4, 12, -8] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 0.8] as [number, number, number] } },
  { id: 856, type: 'BEAM', geometry: { type: 'beam' as const, position: [4, 12, 8] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 0.8] as [number, number, number] } },
  { id: 857, type: 'BEAM', geometry: { type: 'beam' as const, position: [-8, 15, -4] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 0.8] as [number, number, number] } },
  { id: 858, type: 'BEAM', geometry: { type: 'beam' as const, position: [8, 15, 4] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 0.8] as [number, number, number] } },
];

// ==================== MODEL 3: CABLE-STAYED BRIDGE ====================
// Long-span cable-stayed bridge with 300m main span and twin A-frame towers
export const bridgeDeckGeometry = [
  // ===== FOUNDATION PIERS (Deep piers) =====
  { id: 501, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-30, 2, 0] as [number, number, number], scale: [2, 4, 2] as [number, number, number] } },
  { id: 502, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-24, 2, 0] as [number, number, number], scale: [2, 4, 2] as [number, number, number] } },
  { id: 503, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-18, 2, 0] as [number, number, number], scale: [2, 4, 2] as [number, number, number] } },
  { id: 504, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-12, 2, 0] as [number, number, number], scale: [2.2, 4, 2.2] as [number, number, number] } },
  { id: 505, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 2, 0] as [number, number, number], scale: [2.5, 4, 2.5] as [number, number, number] } },
  { id: 506, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [0, 2, 0] as [number, number, number], scale: [2.5, 4, 2.5] as [number, number, number] } },
  { id: 507, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 2, 0] as [number, number, number], scale: [2.5, 4, 2.5] as [number, number, number] } },
  { id: 508, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [12, 2, 0] as [number, number, number], scale: [2.2, 4, 2.2] as [number, number, number] } },
  { id: 509, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [18, 2, 0] as [number, number, number], scale: [2, 4, 2] as [number, number, number] } },
  { id: 510, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [24, 2, 0] as [number, number, number], scale: [2, 4, 2] as [number, number, number] } },
  { id: 511, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [30, 2, 0] as [number, number, number], scale: [2, 4, 2] as [number, number, number] } },

  // ===== MAIN CABLE TOWERS - SOUTH TOWER (A-Frame design) =====
  // Base segments
  { id: 512, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 6, -2] as [number, number, number], scale: [1.5, 4, 1.5] as [number, number, number] } },
  { id: 513, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 6, 2] as [number, number, number], scale: [1.5, 4, 1.5] as [number, number, number] } },
  // Mid segments (tapering inward)
  { id: 514, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 10, -1.5] as [number, number, number], scale: [1.3, 4, 1.3] as [number, number, number] } },
  { id: 515, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 10, 1.5] as [number, number, number], scale: [1.3, 4, 1.3] as [number, number, number] } },
  // Upper segments (converging)
  { id: 516, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 14, -1] as [number, number, number], scale: [1.1, 4, 1.1] as [number, number, number] } },
  { id: 517, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 14, 1] as [number, number, number], scale: [1.1, 4, 1.1] as [number, number, number] } },
  // Top segment (single column)
  { id: 518, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-6, 18, 0] as [number, number, number], scale: [1.2, 4, 1.2] as [number, number, number] } },

  // ===== MAIN CABLE TOWERS - NORTH TOWER (A-Frame design) =====
  { id: 519, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 6, -2] as [number, number, number], scale: [1.5, 4, 1.5] as [number, number, number] } },
  { id: 520, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 6, 2] as [number, number, number], scale: [1.5, 4, 1.5] as [number, number, number] } },
  { id: 521, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 10, -1.5] as [number, number, number], scale: [1.3, 4, 1.3] as [number, number, number] } },
  { id: 522, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 10, 1.5] as [number, number, number], scale: [1.3, 4, 1.3] as [number, number, number] } },
  { id: 523, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 14, -1] as [number, number, number], scale: [1.1, 4, 1.1] as [number, number, number] } },
  { id: 524, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 14, 1] as [number, number, number], scale: [1.1, 4, 1.1] as [number, number, number] } },
  { id: 525, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [6, 18, 0] as [number, number, number], scale: [1.2, 4, 1.2] as [number, number, number] } },

  // ===== MAIN DECK BEAMS (Continuous bridge deck) =====
  { id: 601, type: 'BEAM', geometry: { type: 'beam' as const, position: [-27, 4, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.5, 1.5, 1.2] as [number, number, number] } },
  { id: 602, type: 'BEAM', geometry: { type: 'beam' as const, position: [-21, 4, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.5, 1.5, 1.2] as [number, number, number] } },
  { id: 603, type: 'BEAM', geometry: { type: 'beam' as const, position: [-15, 4, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.5, 1.5, 1.2] as [number, number, number] } },
  { id: 604, type: 'BEAM', geometry: { type: 'beam' as const, position: [-9, 4, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.5, 1.5, 1.2] as [number, number, number] } },
  { id: 605, type: 'BEAM', geometry: { type: 'beam' as const, position: [-3, 4, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.5, 1.5, 1.2] as [number, number, number] } },
  { id: 606, type: 'BEAM', geometry: { type: 'beam' as const, position: [3, 4, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.5, 1.5, 1.2] as [number, number, number] } },
  { id: 607, type: 'BEAM', geometry: { type: 'beam' as const, position: [9, 4, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.5, 1.5, 1.2] as [number, number, number] } },
  { id: 608, type: 'BEAM', geometry: { type: 'beam' as const, position: [15, 4, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.5, 1.5, 1.2] as [number, number, number] } },
  { id: 609, type: 'BEAM', geometry: { type: 'beam' as const, position: [21, 4, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.5, 1.5, 1.2] as [number, number, number] } },
  { id: 610, type: 'BEAM', geometry: { type: 'beam' as const, position: [27, 4, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.5, 1.5, 1.2] as [number, number, number] } },

  // ===== SIDE DECK BEAMS - RIGHT SIDE (Parallel to main deck) =====
  { id: 611, type: 'BEAM', geometry: { type: 'beam' as const, position: [-27, 4.5, 3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 612, type: 'BEAM', geometry: { type: 'beam' as const, position: [-21, 4.5, 3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 613, type: 'BEAM', geometry: { type: 'beam' as const, position: [-15, 4.5, 3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 614, type: 'BEAM', geometry: { type: 'beam' as const, position: [-9, 4.5, 3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 615, type: 'BEAM', geometry: { type: 'beam' as const, position: [-3, 4.5, 3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 616, type: 'BEAM', geometry: { type: 'beam' as const, position: [3, 4.5, 3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 617, type: 'BEAM', geometry: { type: 'beam' as const, position: [9, 4.5, 3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 618, type: 'BEAM', geometry: { type: 'beam' as const, position: [15, 4.5, 3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 619, type: 'BEAM', geometry: { type: 'beam' as const, position: [21, 4.5, 3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 620, type: 'BEAM', geometry: { type: 'beam' as const, position: [27, 4.5, 3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },

  // ===== SIDE DECK BEAMS - LEFT SIDE =====
  { id: 621, type: 'BEAM', geometry: { type: 'beam' as const, position: [-27, 4.5, -3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 622, type: 'BEAM', geometry: { type: 'beam' as const, position: [-21, 4.5, -3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 623, type: 'BEAM', geometry: { type: 'beam' as const, position: [-15, 4.5, -3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 624, type: 'BEAM', geometry: { type: 'beam' as const, position: [-9, 4.5, -3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 625, type: 'BEAM', geometry: { type: 'beam' as const, position: [-3, 4.5, -3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 626, type: 'BEAM', geometry: { type: 'beam' as const, position: [3, 4.5, -3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 627, type: 'BEAM', geometry: { type: 'beam' as const, position: [9, 4.5, -3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 628, type: 'BEAM', geometry: { type: 'beam' as const, position: [15, 4.5, -3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 629, type: 'BEAM', geometry: { type: 'beam' as const, position: [21, 4.5, -3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },
  { id: 630, type: 'BEAM', geometry: { type: 'beam' as const, position: [27, 4.5, -3] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [1.2, 1.2, 1.2] as [number, number, number] } },

  // ===== TRANSVERSE DECK BEAMS (Cross-beams every 6m) =====
  { id: 631, type: 'BEAM', geometry: { type: 'beam' as const, position: [-30, 4.3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.2] as [number, number, number] } },
  { id: 632, type: 'BEAM', geometry: { type: 'beam' as const, position: [-24, 4.3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.2] as [number, number, number] } },
  { id: 633, type: 'BEAM', geometry: { type: 'beam' as const, position: [-18, 4.3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.2] as [number, number, number] } },
  { id: 634, type: 'BEAM', geometry: { type: 'beam' as const, position: [-12, 4.3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.2] as [number, number, number] } },
  { id: 635, type: 'BEAM', geometry: { type: 'beam' as const, position: [-6, 4.3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.2] as [number, number, number] } },
  { id: 636, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 4.3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.2] as [number, number, number] } },
  { id: 637, type: 'BEAM', geometry: { type: 'beam' as const, position: [6, 4.3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.2] as [number, number, number] } },
  { id: 638, type: 'BEAM', geometry: { type: 'beam' as const, position: [12, 4.3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.2] as [number, number, number] } },
  { id: 639, type: 'BEAM', geometry: { type: 'beam' as const, position: [18, 4.3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.2] as [number, number, number] } },
  { id: 640, type: 'BEAM', geometry: { type: 'beam' as const, position: [24, 4.3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.2] as [number, number, number] } },
  { id: 641, type: 'BEAM', geometry: { type: 'beam' as const, position: [30, 4.3, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [1, 1, 1.2] as [number, number, number] } },

  // ===== LOWER DECK TRUSS (Warren truss pattern) =====
  { id: 701, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-27, 3.5, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 702, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-24, 3.5, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 703, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-21, 3.5, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 704, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-18, 3.5, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 705, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-15, 3.5, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 706, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-12, 3.5, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 707, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-9, 3.5, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 708, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 3.5, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 709, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-3, 3.5, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 710, type: 'TRUSS', geometry: { type: 'beam' as const, position: [0, 3.5, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 711, type: 'TRUSS', geometry: { type: 'beam' as const, position: [3, 3.5, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 712, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 3.5, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 713, type: 'TRUSS', geometry: { type: 'beam' as const, position: [9, 3.5, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 714, type: 'TRUSS', geometry: { type: 'beam' as const, position: [12, 3.5, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 715, type: 'TRUSS', geometry: { type: 'beam' as const, position: [15, 3.5, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 716, type: 'TRUSS', geometry: { type: 'beam' as const, position: [18, 3.5, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 717, type: 'TRUSS', geometry: { type: 'beam' as const, position: [21, 3.5, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 718, type: 'TRUSS', geometry: { type: 'beam' as const, position: [24, 3.5, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },
  { id: 719, type: 'TRUSS', geometry: { type: 'beam' as const, position: [27, 3.5, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.8, 0.8, 1.2] as [number, number, number] } },

  // ===== CABLE STAYS - SOUTH TOWER (Fan pattern from tower top to deck) =====
  { id: 720, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 14, 0] as [number, number, number], rotation: [0.3, 0, 0.2] as [number, number, number], scale: [0.4, 0.4, 3.5] as [number, number, number] } },
  { id: 721, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 13.5, 0] as [number, number, number], rotation: [0.4, 0, 0.15] as [number, number, number], scale: [0.4, 0.4, 3] as [number, number, number] } },
  { id: 722, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 13, 0] as [number, number, number], rotation: [0.5, 0, 0.1] as [number, number, number], scale: [0.4, 0.4, 2.5] as [number, number, number] } },
  { id: 723, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 12.5, 0] as [number, number, number], rotation: [0.6, 0, 0.05] as [number, number, number], scale: [0.4, 0.4, 2] as [number, number, number] } },
  { id: 724, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 14, 0] as [number, number, number], rotation: [0.3, 0, -0.2] as [number, number, number], scale: [0.4, 0.4, 3.5] as [number, number, number] } },
  { id: 725, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 13.5, 0] as [number, number, number], rotation: [0.4, 0, -0.15] as [number, number, number], scale: [0.4, 0.4, 3] as [number, number, number] } },
  { id: 726, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 13, 0] as [number, number, number], rotation: [0.5, 0, -0.1] as [number, number, number], scale: [0.4, 0.4, 2.5] as [number, number, number] } },
  { id: 727, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 12.5, 0] as [number, number, number], rotation: [0.6, 0, -0.05] as [number, number, number], scale: [0.4, 0.4, 2] as [number, number, number] } },

  // ===== CABLE STAYS - NORTH TOWER (Fan pattern) =====
  { id: 728, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 14, 0] as [number, number, number], rotation: [-0.3, 0, 0.2] as [number, number, number], scale: [0.4, 0.4, 3.5] as [number, number, number] } },
  { id: 729, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 13.5, 0] as [number, number, number], rotation: [-0.4, 0, 0.15] as [number, number, number], scale: [0.4, 0.4, 3] as [number, number, number] } },
  { id: 730, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 13, 0] as [number, number, number], rotation: [-0.5, 0, 0.1] as [number, number, number], scale: [0.4, 0.4, 2.5] as [number, number, number] } },
  { id: 731, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 12.5, 0] as [number, number, number], rotation: [-0.6, 0, 0.05] as [number, number, number], scale: [0.4, 0.4, 2] as [number, number, number] } },
  { id: 732, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 14, 0] as [number, number, number], rotation: [-0.3, 0, -0.2] as [number, number, number], scale: [0.4, 0.4, 3.5] as [number, number, number] } },
  { id: 733, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 13.5, 0] as [number, number, number], rotation: [-0.4, 0, -0.15] as [number, number, number], scale: [0.4, 0.4, 3] as [number, number, number] } },
  { id: 734, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 13, 0] as [number, number, number], rotation: [-0.5, 0, -0.1] as [number, number, number], scale: [0.4, 0.4, 2.5] as [number, number, number] } },
  { id: 735, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 12.5, 0] as [number, number, number], rotation: [-0.6, 0, -0.05] as [number, number, number], scale: [0.4, 0.4, 2] as [number, number, number] } },

  // ===== TOWER CROSS-BRACING (Structural integrity for towers) =====
  { id: 736, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 8, 0] as [number, number, number], rotation: [0, Math.PI / 4, 0] as [number, number, number], scale: [0.6, 0.6, 1.8] as [number, number, number] } },
  { id: 737, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 8, 0] as [number, number, number], rotation: [0, -Math.PI / 4, 0] as [number, number, number], scale: [0.6, 0.6, 1.8] as [number, number, number] } },
  { id: 738, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 12, 0] as [number, number, number], rotation: [0, Math.PI / 4, 0] as [number, number, number], scale: [0.55, 0.55, 1.5] as [number, number, number] } },
  { id: 739, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 12, 0] as [number, number, number], rotation: [0, -Math.PI / 4, 0] as [number, number, number], scale: [0.55, 0.55, 1.5] as [number, number, number] } },
  { id: 740, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 16, 0] as [number, number, number], rotation: [0, Math.PI / 4, 0] as [number, number, number], scale: [0.5, 0.5, 1.2] as [number, number, number] } },
  { id: 741, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 16, 0] as [number, number, number], rotation: [0, -Math.PI / 4, 0] as [number, number, number], scale: [0.5, 0.5, 1.2] as [number, number, number] } },
  { id: 742, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 8, 0] as [number, number, number], rotation: [0, Math.PI / 4, 0] as [number, number, number], scale: [0.6, 0.6, 1.8] as [number, number, number] } },
  { id: 743, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 8, 0] as [number, number, number], rotation: [0, -Math.PI / 4, 0] as [number, number, number], scale: [0.6, 0.6, 1.8] as [number, number, number] } },
  { id: 744, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 12, 0] as [number, number, number], rotation: [0, Math.PI / 4, 0] as [number, number, number], scale: [0.55, 0.55, 1.5] as [number, number, number] } },
  { id: 745, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 12, 0] as [number, number, number], rotation: [0, -Math.PI / 4, 0] as [number, number, number], scale: [0.55, 0.55, 1.5] as [number, number, number] } },
  { id: 746, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 16, 0] as [number, number, number], rotation: [0, Math.PI / 4, 0] as [number, number, number], scale: [0.5, 0.5, 1.2] as [number, number, number] } },
  { id: 747, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 16, 0] as [number, number, number], rotation: [0, -Math.PI / 4, 0] as [number, number, number], scale: [0.5, 0.5, 1.2] as [number, number, number] } },

  // ===== LATERAL WIND BRACING (Deck lateral stability) =====
  { id: 748, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-24, 4, 1.5] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 0.8] as [number, number, number] } },
  { id: 749, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-18, 4, 1.5] as [number, number, number], rotation: [0, Math.PI / 2, -Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 0.8] as [number, number, number] } },
  { id: 750, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-12, 4, 1.5] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 0.8] as [number, number, number] } },
  { id: 751, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-6, 4, 1.5] as [number, number, number], rotation: [0, Math.PI / 2, -Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 0.8] as [number, number, number] } },
  { id: 752, type: 'TRUSS', geometry: { type: 'beam' as const, position: [0, 4, 1.5] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 0.8] as [number, number, number] } },
  { id: 753, type: 'TRUSS', geometry: { type: 'beam' as const, position: [6, 4, 1.5] as [number, number, number], rotation: [0, Math.PI / 2, -Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 0.8] as [number, number, number] } },
  { id: 754, type: 'TRUSS', geometry: { type: 'beam' as const, position: [12, 4, 1.5] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 0.8] as [number, number, number] } },
  { id: 755, type: 'TRUSS', geometry: { type: 'beam' as const, position: [18, 4, 1.5] as [number, number, number], rotation: [0, Math.PI / 2, -Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 0.8] as [number, number, number] } },
  { id: 756, type: 'TRUSS', geometry: { type: 'beam' as const, position: [24, 4, 1.5] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 6] as [number, number, number], scale: [0.5, 0.5, 0.8] as [number, number, number] } },
];

// ==================== MODEL 4: TORRE COMMUNICATION TOWER ====================
// Ultra-tall tapering lattice tower with antenna mounts (60m height)
export const torreTowerGeometry = [
  // ===== FOUNDATION BASE LEGS (0-3m) =====
  { id: 4001, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [8, 1.5, 8] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 4002, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-8, 1.5, 8] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 4003, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [8, 1.5, -8] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },
  { id: 4004, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-8, 1.5, -8] as [number, number, number], scale: [1.2, 3, 1.2] as [number, number, number] } },

  // ===== LEVEL 1 LEGS (3-12m) =====
  { id: 4011, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [7, 7.5, 7] as [number, number, number], scale: [0.9, 9, 0.9] as [number, number, number] } },
  { id: 4012, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-7, 7.5, 7] as [number, number, number], scale: [0.9, 9, 0.9] as [number, number, number] } },
  { id: 4013, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [7, 7.5, -7] as [number, number, number], scale: [0.9, 9, 0.9] as [number, number, number] } },
  { id: 4014, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-7, 7.5, -7] as [number, number, number], scale: [0.9, 9, 0.9] as [number, number, number] } },

  // ===== LEVEL 2 LEGS (12-24m) =====
  { id: 4021, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [5.5, 18, 5.5] as [number, number, number], scale: [0.75, 12, 0.75] as [number, number, number] } },
  { id: 4022, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-5.5, 18, 5.5] as [number, number, number], scale: [0.75, 12, 0.75] as [number, number, number] } },
  { id: 4023, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [5.5, 18, -5.5] as [number, number, number], scale: [0.75, 12, 0.75] as [number, number, number] } },
  { id: 4024, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-5.5, 18, -5.5] as [number, number, number], scale: [0.75, 12, 0.75] as [number, number, number] } },

  // ===== LEVEL 3 LEGS (24-40m) =====
  { id: 4031, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.5, 32, 3.5] as [number, number, number], scale: [0.6, 16, 0.6] as [number, number, number] } },
  { id: 4032, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.5, 32, 3.5] as [number, number, number], scale: [0.6, 16, 0.6] as [number, number, number] } },
  { id: 4033, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [3.5, 32, -3.5] as [number, number, number], scale: [0.6, 16, 0.6] as [number, number, number] } },
  { id: 4034, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-3.5, 32, -3.5] as [number, number, number], scale: [0.6, 16, 0.6] as [number, number, number] } },

  // ===== LEVEL 4 LEGS (40-55m) - Narrow top section =====
  { id: 4041, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 47.5, 2] as [number, number, number], scale: [0.5, 15, 0.5] as [number, number, number] } },
  { id: 4042, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 47.5, 2] as [number, number, number], scale: [0.5, 15, 0.5] as [number, number, number] } },
  { id: 4043, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [2, 47.5, -2] as [number, number, number], scale: [0.5, 15, 0.5] as [number, number, number] } },
  { id: 4044, type: 'COLUMN', geometry: { type: 'cylinder' as const, position: [-2, 47.5, -2] as [number, number, number], scale: [0.5, 15, 0.5] as [number, number, number] } },

  // ===== HORIZONTAL BEAMS - LEVEL 1 (12m) =====
  { id: 4101, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 12, 7] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 2.8] as [number, number, number] } },
  { id: 4102, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 12, -7] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 2.8] as [number, number, number] } },
  { id: 4103, type: 'BEAM', geometry: { type: 'beam' as const, position: [7, 12, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 2.8] as [number, number, number] } },
  { id: 4104, type: 'BEAM', geometry: { type: 'beam' as const, position: [-7, 12, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.8, 0.8, 2.8] as [number, number, number] } },

  // ===== HORIZONTAL BEAMS - LEVEL 2 (24m) =====
  { id: 4111, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 24, 5.5] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 2.2] as [number, number, number] } },
  { id: 4112, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 24, -5.5] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 2.2] as [number, number, number] } },
  { id: 4113, type: 'BEAM', geometry: { type: 'beam' as const, position: [5.5, 24, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 2.2] as [number, number, number] } },
  { id: 4114, type: 'BEAM', geometry: { type: 'beam' as const, position: [-5.5, 24, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.7, 0.7, 2.2] as [number, number, number] } },

  // ===== HORIZONTAL BEAMS - LEVEL 3 (40m) =====
  { id: 4121, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 40, 3.5] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },
  { id: 4122, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 40, -3.5] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },
  { id: 4123, type: 'BEAM', geometry: { type: 'beam' as const, position: [3.5, 40, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },
  { id: 4124, type: 'BEAM', geometry: { type: 'beam' as const, position: [-3.5, 40, 0] as [number, number, number], rotation: [0, Math.PI / 2, Math.PI / 2] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },

  // ===== DIAGONAL BRACING - LEVEL 1 - NORTH FACE =====
  { id: 4201, type: 'TRUSS', geometry: { type: 'beam' as const, position: [3.5, 7.5, 7] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },
  { id: 4202, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-3.5, 7.5, 7] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },

  // ===== DIAGONAL BRACING - LEVEL 1 - SOUTH FACE =====
  { id: 4203, type: 'TRUSS', geometry: { type: 'beam' as const, position: [3.5, 7.5, -7] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },
  { id: 4204, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-3.5, 7.5, -7] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },

  // ===== DIAGONAL BRACING - LEVEL 1 - EAST FACE =====
  { id: 4205, type: 'TRUSS', geometry: { type: 'beam' as const, position: [7, 7.5, 3.5] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },
  { id: 4206, type: 'TRUSS', geometry: { type: 'beam' as const, position: [7, 7.5, -3.5] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },

  // ===== DIAGONAL BRACING - LEVEL 1 - WEST FACE =====
  { id: 4207, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-7, 7.5, 3.5] as [number, number, number], rotation: [Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },
  { id: 4208, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-7, 7.5, -3.5] as [number, number, number], rotation: [-Math.PI / 4, Math.PI / 2, 0] as [number, number, number], scale: [0.6, 0.6, 1.4] as [number, number, number] } },

  // ===== DIAGONAL BRACING - LEVEL 2 - ALL FACES =====
  { id: 4211, type: 'TRUSS', geometry: { type: 'beam' as const, position: [2.75, 18, 5.5] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.55, 0.55, 1.6] as [number, number, number] } },
  { id: 4212, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-2.75, 18, 5.5] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.55, 0.55, 1.6] as [number, number, number] } },
  { id: 4213, type: 'TRUSS', geometry: { type: 'beam' as const, position: [2.75, 18, -5.5] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.55, 0.55, 1.6] as [number, number, number] } },
  { id: 4214, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-2.75, 18, -5.5] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.55, 0.55, 1.6] as [number, number, number] } },

  // ===== DIAGONAL BRACING - LEVEL 3 - ALL FACES =====
  { id: 4221, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.75, 32, 3.5] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.5, 0.5, 1.8] as [number, number, number] } },
  { id: 4222, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.75, 32, 3.5] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.5, 0.5, 1.8] as [number, number, number] } },
  { id: 4223, type: 'TRUSS', geometry: { type: 'beam' as const, position: [1.75, 32, -3.5] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number], scale: [0.5, 0.5, 1.8] as [number, number, number] } },
  { id: 4224, type: 'TRUSS', geometry: { type: 'beam' as const, position: [-1.75, 32, -3.5] as [number, number, number], rotation: [0, 0, -Math.PI / 4] as [number, number, number], scale: [0.5, 0.5, 1.8] as [number, number, number] } },

  // ===== ANTENNA MOUNTS AT TOP (55m) =====
  { id: 4301, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 55, 0] as [number, number, number], rotation: [0, 0, 0] as [number, number, number], scale: [0.8, 0.8, 1.6] as [number, number, number] } },
  { id: 4302, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 55, 0] as [number, number, number], rotation: [0, 0, Math.PI / 3] as [number, number, number], scale: [0.8, 0.8, 1.6] as [number, number, number] } },
  { id: 4303, type: 'BEAM', geometry: { type: 'beam' as const, position: [0, 55, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 3] as [number, number, number], scale: [0.8, 0.8, 1.6] as [number, number, number] } },
];

// Export geometry map for easy lookup
export const modelGeometryMap: Record<string, typeof towerCraneGeometry> = {
  'model-1': towerCraneGeometry,
  'model-2': buildingFrameGeometry,
  'model-3': bridgeDeckGeometry,
  'model-4': torreTowerGeometry,
};

// Default export (backward compatibility)
export default towerCraneGeometry;
