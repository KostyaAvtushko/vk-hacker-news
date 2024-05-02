import { createSlice } from "@reduxjs/toolkit"
import  { INews } from "./types"

const initialState: { news: INews[] } = {
  news: []
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {}
})

export default newsSlice.reducer