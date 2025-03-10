import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategory } from '@/api/testapi'
export const useCounterStore = defineStore('counter', () => {
    const listdata=ref([])
    const getCategorydata=async ()=>{
    const res=await getCategory()
    listdata.value=res.data.result
    console.log(res);
    console.log(listdata);
    }
    return {listdata,getCategorydata}
})
