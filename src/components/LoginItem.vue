<template>


    <div class="main d-flex justify-content-center align-items-center mt-3 mb-5">
      <div class="container">
        <div class="row">
           <div class="card w-75 mx-auto">
             <div v-if="namayeshalert" class="alert alert-danger mt-3">
                    فیلد مورد نظر را پر کنید                 
             </div>
             <div class="card-body">
                <form @submit.prevent="validation">
              <div class="mb-3">
              <label  class="form-label">ایمیل :</label>
              <input type="email" class="form-control" v-model="emailmeghdar">
              </div>
            <div class="mb-3">
          <label  class="form-label">پسورد :</label>
          <input type="password" class="form-control" v-model="passwordmeghdar" >
          <p v-if="namayesholgoo" class="text-danger">الگو را رعایت نمایید</p>
          <p class="text-muted">کلمه اول پسورد باید حروف بزرگ باشد</p>
          </div>
       <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="yadavari">
       <label class="form-check-label" for="yadavari">مرا به خاطر بسپار</label>
  </div>
  <button type="submit" class="btn btn-success mt-3 w-100">ورود</button>
           </form>
             </div>
           </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Swal from 'sweetalert2'
export default {

  
  setup () {


    const emailmeghdar = ref('')

    const passwordmeghdar = ref('')
    
    const namayeshalert = ref(false)

    const namayesholgoo = ref(false)

    function validation () {
       
       if (emailmeghdar.value || passwordmeghdar.value == '') {
         
          namayeshalert.value = true
       }

       if (emailmeghdar.value && passwordmeghdar.value !== '') {
         
         namayeshalert.value = false
       }

       if (/[A-Z][A-Za-z0-9]/.test(passwordmeghdar.value)) {
         
          namayesholgoo.value = false
       }
       else {

          namayesholgoo.value = true
       }

       if (/[A-Z][A-Za-z0-9]/.test(passwordmeghdar.value) && emailmeghdar.value && passwordmeghdar.value !== '' ) {
         
          Swal.fire({
         position: 'top-center',
         icon: 'success',
         title: 'شما با موفقیت وارد سایت شدید',
         showConfirmButton: false,
         timer: 2000
         })

       }
      
    }

    validation()

    return {emailmeghdar,passwordmeghdar,validation,namayeshalert,namayesholgoo}
  }

     

   
   }

</script>

<style>


  html {

       direction: rtl !important;

  }

 

</style>