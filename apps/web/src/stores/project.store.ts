import { create } from 'zustand';
import type { Project, CanvasContent } from '@/types';

interface ProjectStore {
  currentProject: Project | null;
  canvasContent: CanvasContent | null;
  setCurrentProject: (project: Project) => void;
  updateCanvasContent: (content: CanvasContent) => void;
  clearProject: () => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  currentProject: null,
  canvasContent: null,
  setCurrentProject: (project) => set({ currentProject: project }),
  updateCanvasContent: (content) => set({ canvasContent: content }),
  clearProject: () => set({ currentProject: null, canvasContent: null }),
}));
