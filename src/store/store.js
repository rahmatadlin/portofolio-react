import create from 'zustand';

const useStore = create((set) => ({
  isDarkMode: true, // Default to dark mode
  toggleMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStore;
