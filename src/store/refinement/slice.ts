import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortTypes } from '../../constants/sortList'

interface IRefinementState {
  sortType: SortTypes | null
  isViewModeBig: boolean
}

const initialState: IRefinementState = {
  sortType: null,
  isViewModeBig: true,
}

const refinementSlice = createSlice({
  name: 'refinements',
  initialState,
  reducers: {
    setSortType(state, action: PayloadAction<SortTypes>) {
      state.sortType = action.payload
    },
    changeViewMode(state) {
      state.isViewModeBig = !state.isViewModeBig
    },
    resetSortType(state) {
      state.sortType = null
    },
  },
})

export const { setSortType, resetSortType, changeViewMode } = refinementSlice.actions
export default refinementSlice.reducer
