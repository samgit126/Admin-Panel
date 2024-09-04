import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { useLocalStorage } from "@vueuse/core";
import { useConstantStore } from "@/store/useConstantStore";
import Axios from "axios";

export const useAuthStore = defineStore('useAuthStore', () => {
    const appConst = useConstantStore();

    const user = ref({});
    const appToken = ref(useLocalStorage('token', ''));

    const userEmail = ref('');
    const userFullName = ref('');
    const userRole = ref('');
    const fullName = ref('');
    const email = ref('');
    function fetchUser() {

        Axios.get(appConst.apiServer('/user'))
            .then(response => {
                user.value = response.data.data;
                userEmail.value = user.value.email;
                userFullName.value = user.value.full_name;
            })
            .catch(error => {
                appToken.value = ''
                user.value = ''
                window.location.href = appConst.HomeUrl;
            });
    }
    function  getUserRole(){
         Axios.get('/api/user')
          .then((res)=>{
            userRole.value = res.data.role,
            fullName.value =  res.data.full_name
            email.value =  res.data.email
          }).catch(error=>{
            console.log(error)
          })
    }

    function logoutAccount() {
        Axios.post(appConst.logoutUrl)
            .then(response => {})
            .catch(error => {})
            .finally(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = appConst.loginUrl;
            });
    } 
    onMounted(()=>{
        getUserRole();
    })
    return {
        user, userEmail, userFullName,userRole,fullName,
        email,
        appToken, fetchUser, logoutAccount
    };
});