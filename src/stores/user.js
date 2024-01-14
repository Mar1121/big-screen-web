import { defineStore } from "pinia";
import { ref } from "vue";

let useUsersStore = defineStore('users', () => {
    let userInfo = ref({})

    return {
        userInfo
    }
})

export default useUsersStore; 