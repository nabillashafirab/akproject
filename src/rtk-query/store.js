// store.js
import { configureStore } from '@reduxjs/toolkit';
import { api } from './rtk-query/tagquery'; // Adjust the path as needed

const store = configureStore({
  reducer: {
    // Include the generated API reducer
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
