import { format } from 'date-fns'

export const currentTime = () => format(new Date(), 'yyyy-MM-dd HH:mm:ss')
