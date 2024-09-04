import { defineStore } from 'pinia';
import { ref } from 'vue';
import Axios from 'axios';
import Swal from "sweetalert2";
import { useToast } from 'vue-toastification';
const toast = useToast();
export const useFrontAuthStore = defineStore('useFrontAuthStore', () => {
  const isAuthenticated = ref(false);
  const user = ref([]);
  function checkAuthentication() {
    Axios.get('/check-auth')
      .then(res => {
        isAuthenticated.value = res.data.authenticated;
      })
      .catch(error => {
        console.log(error);
      });
  }
  function loggedOut() {
    Axios.get('/logout')
    .then(res => {
      isAuthenticated.value = false;
      localStorage.removeItem('authenticated');
      window.location.href = "/#/";
   
    })
    .catch(err => {
      toast.error("Something went wrong!", {
        timeout: 2000
      })
    });
  }
  function logout() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You Want to Log out!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        loggedOut();
        toast.success("Successfully Logout!", {
          timeout: 2000
        })
      }
    })

  }
  function getUser() {
    Axios.get('/user')
      .then(res => {
        user.value = res.data;
      })
      .catch(err => {
        console.log(err)
      })
  }

  return {
    isAuthenticated,
    user,
    checkAuthentication,
    logout,
    getUser,
    loggedOut

  };
});
