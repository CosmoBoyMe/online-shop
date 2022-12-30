import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  imagePath: string
}

const initialState: CounterState = {
  imagePath: '',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changeImage: (state, action: PayloadAction<string>) => {
      state.imagePath = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeImage } = productSlice.actions

export default productSlice.reducer
