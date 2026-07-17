import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProjectStore {
  projects: any[];
  currentProject: any | null;
  loadProjects: () => Promise<void>;
  saveProject: (project: any) => Promise<void>;
  setCurrentProject: (project: any) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  currentProject: null,
  loadProjects: async () => {
    try {
      const data = await AsyncStorage.getItem('projects');
      if (data) {
        set({ projects: JSON.parse(data) });
      }
    } catch (error) {
      console.error('Failed to load projects:', error);
    }
  },
  saveProject: async (project) => {
    try {
      const { projects } = useProjectStore.getState();
      const updated = [...projects.filter((p) => p.id !== project.id), project];
      await AsyncStorage.setItem('projects', JSON.stringify(updated));
      set({ projects: updated, currentProject: project });
    } catch (error) {
      console.error('Failed to save project:', error);
    }
  },
  setCurrentProject: (project) => set({ currentProject: project }),
}));
