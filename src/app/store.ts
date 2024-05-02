import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../entities/news/model/newsApi";
const rootReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
})


export const setupStore = () => {
  return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware()
              .concat(newsApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']