import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from './Reducer/authReducer';

import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";

import _createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { injectStore } from "../services/auth/AxiosInstance";
const createWebStorage = (_createWebStorage as any).default ?? _createWebStorage;
const storage = createWebStorage('local');

const rootReducer = combineReducers({
    auth: UserReducer,
});

const persistConfig = {
    key: 'root', // Key for storage
    storage,     // Type of storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const MainReduxStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore redux-persist actions
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "persist/REGISTER",
                ],
            },
        }),
})

export const PersistStore = persistStore(MainReduxStore);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof MainReduxStore.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof MainReduxStore.dispatch

injectStore(MainReduxStore)

