import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { } from "./counter"



function loadCounter() {
    try {
        const saved = localStorage.getItem("counter")
        return saved ? (JSON.parse(saved)) : undefined
    } catch {
        return undefined
    }
}


const preload = loadCounter()

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    preloadedState: preload ? { counter: preload } : undefined
});


store.subscribe(() => {
    localStorage.setItem("counter", JSON.stringify(store.getState().counter));
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;