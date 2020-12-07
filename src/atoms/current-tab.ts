import { atom } from 'recoil'

export type CurrentTab = 'curated' | 'bookmarks'

export const currentTab = atom<CurrentTab>({
  key: 'currentTab',
  default: 'curated',
})
