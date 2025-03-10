import httpInstance from '@/utils/http'
export function getbannerapi(){
    return httpInstance({
        url:'home/banner'
    })
}