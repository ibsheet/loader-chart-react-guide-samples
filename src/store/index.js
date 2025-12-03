import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './chartSlice';

const store = configureStore({
  reducer: chartReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // IBChart 인스턴스는 직렬화할 수 없으므로 무시
        ignoredActions: ['chart/addChart'],
        ignoredPaths: ['chart'],
      },
    }),
});

export default store;
