import { configureStore } from "@reduxjs/toolkit"
import peopleReducer from "./peopleReducer"


export const store = configureStore({
  reducer: {
    people: peopleReducer
  }
})