import httpInstance from '@/utils/http'
export const getHotApi = () => {
    return httpInstance({
      url: '/home/hot'
    })
  }