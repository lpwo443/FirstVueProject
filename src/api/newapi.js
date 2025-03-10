import httpInstance from '@/utils/http'
export const getnewapi = () => {
    return httpInstance({
      url: '/home/new'
    })
  }