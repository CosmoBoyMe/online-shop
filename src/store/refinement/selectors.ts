import { RootState } from '../index'

const selectRefinement = (state: RootState) => state.filters
const selectSortType = (state: RootState) => state.refinements.sortType

export { selectRefinement, selectSortType }
