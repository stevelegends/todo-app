// modules
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {useDispatch, useSelector} from 'react-redux';

// reducers
import {rootReducer} from './reducer';

// saga
import rootSaga from './saga';

/** saga */
const sagaMiddleware = createSagaMiddleware({});

/** store */
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }).concat([sagaMiddleware]),
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(
      __DEV__
        ? [
            // DEBUG: tool reactotron.createEnhancer!()
          ]
        : [],
    ),
});

/** run saga */
sagaMiddleware.run(rootSaga);

/** Infer the `RootState` and `AppDispatch` types from the store itself */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/** Use throughout app instead of plain `useDispatch` for type safety */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/** Use throughout app instead of plain `useSelector` for type safety */
export const useAppSelector = useSelector.withTypes<RootState>();
