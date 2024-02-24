import type { RootState } from '@lib/redux/store'

const selectTheme = (state: RootState) => state.layout.theme

export default selectTheme
