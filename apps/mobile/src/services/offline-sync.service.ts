import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

class OfflineSyncService {
  private queue: Map<string, any> = new Map();

  async addToQueue(key: string, data: any) {
    this.queue.set(key, data);
    await AsyncStorage.setItem(`queue_${key}`, JSON.stringify(data));
  }

  async loadQueue() {
    const keys = await AsyncStorage.getAllKeys();
    const queueKeys = keys.filter((k) => k.startsWith('queue_'));
    
    for (const key of queueKeys) {
      const data = await AsyncStorage.getItem(key);
      if (data) {
        this.queue.set(key, JSON.parse(data));
      }
    }
  }

  async syncWhenOnline() {
    const state = await NetInfo.fetch();
    if (!state.isConnected) return;

    for (const [key, data] of this.queue.entries()) {
      try {
        // TODO: Sync with backend
        console.log(`Syncing ${key}:`, data);
        this.queue.delete(key);
        await AsyncStorage.removeItem(`queue_${key}`);
      } catch (error) {
        console.error(`Failed to sync ${key}:`, error);
      }
    }
  }
}

export const offlineSyncService = new OfflineSyncService();
