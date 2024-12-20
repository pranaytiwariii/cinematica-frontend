import { create } from 'zustand';
import { doc, setDoc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuthStore } from './authStore';

interface LikesState {
  likedSpaces: string[];
  isLoading: boolean;
  error: string | null;
  toggleLike: (spaceId: string) => Promise<void>;
  fetchLikedSpaces: () => Promise<void>;
}

export const useLikesStore = create<LikesState>((set, get) => ({
  likedSpaces: [],
  isLoading: false,
  error: null,
  toggleLike: async (spaceId: string) => {
    const user = useAuthStore.getState().user;
    if (!user) return;

    try {
      set({ isLoading: true, error: null });
      const likeRef = doc(db, 'likes', `${user.uid}_${spaceId}`);
      
      if (get().likedSpaces.includes(spaceId)) {
        await deleteDoc(likeRef);
        set(state => ({
          likedSpaces: state.likedSpaces.filter(id => id !== spaceId)
        }));
      } else {
        await setDoc(likeRef, {
          userId: user.uid,
          spaceId,
          createdAt: new Date().toISOString()
        });
        set(state => ({
          likedSpaces: [...state.likedSpaces, spaceId]
        }));
      }
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchLikedSpaces: async () => {
    const user = useAuthStore.getState().user;
    if (!user) return;

    try {
      set({ isLoading: true, error: null });
      const likesQuery = query(
        collection(db, 'likes'),
        where('userId', '==', user.uid)
      );
      const querySnapshot = await getDocs(likesQuery);
      const likedSpaces = querySnapshot.docs.map(doc => doc.data().spaceId);
      set({ likedSpaces });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },
}));