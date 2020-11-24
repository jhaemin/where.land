import { atom } from 'recoil'

export const mousePointer = atom({
  key: 'mousePointer',
  default: {
    x: 0,
    y: 0,
  },
})
