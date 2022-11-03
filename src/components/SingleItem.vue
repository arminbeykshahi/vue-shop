<template>
  
   <div class="moshakhasat mt-3">
       <div class="container">
         <div class="row">
           <h5>مشخصات محصول :</h5>
         </div>
       </div>
   </div>

   <div class="single mt-5">
     <div class="container">
       <div class="row g-4">
         <div class="col-md-6 d-flex justify-content-center align-items-center">
           <div class="card" style="width: 18rem;">

              <img :src="product.image" class="card-img-top" alt="..." >
              
                 
            </div>            
         </div>
         <div class="col-md-6 d-flex justify-content-center align-items-center mt-5">

             <ul>
               <li><p>{{product.description[0]}}</p></li>
               <li><p>{{product.description[1]}}</p></li>
               <li><p>{{product.description[2]}}</p></li>
               <li><p>{{product.description[3]}}</p></li>
                <br>
                
                <form @submit.prevent="addtocard">

                 <h6>رنگ :</h6>
                
                <div class="d-flex">
                      <div class="form-check">
                      <input class="form-check-input" type="radio" value="خاکستری" v-model="rang" name="rang" id="rang1">
                      <label class="form-check-label" for="rang1">
                   خاکستری                      
                      </label>
                     </div>

                      <div class="form-check ms-3">
                      <input class="form-check-input" type="radio" value="نقره ای" v-model="rang" name="rang" id="rang2">
                      <label class="form-check-label" for="rang2">
                      نقره ای                        
                      </label>
                     </div>

                     

                     
                </div>
                
                <p v-if="fieldalert" class="text-danger mt-2">لطفاً فیلد را پر کنید</p>

                 <h6 class="mt-3">تعداد : </h6>
                 <input type="number" min="1" v-model="tedad" class="w-50 text-center">
                
                <p v-if="fieldalert" class="text-danger mt-2">لطفاً فیلد را پر کنید</p>
                  
                 <button type="submit" class="btn btn-success w-100 mt-5">افزودن به سبد خرید</button>
                
                </form>
                

             
               
                
             </ul>

             

             
             
         </div>
       </div>
     </div>
   </div>


   

   <br>
   <br>
   <br>


   <div class="didgah mt-5">
     <div class="container">
       <div class="row">
            <h5>نظرات :</h5>
       </div>
     </div>
   </div>


   <div class="nazarat mt-5 mb-4">
     <div class="container">
       <div class="row g-4">
         <div v-for="comment in comments" :key="comment.id" class="col-12">
         <div  class="card border-start border-5 border-primary w-100">
           <div class="card-body d-flex justify-content-between align-items-center">
                <div>
                <span class="text-muted">{{comment.name}}</span>
                <p class="mt-4">{{comment.body}}</p>
                </div>
                <div>
                  <i @click="deletecomment(comment.id)" class="bi bi-x-lg text-danger"></i>
                </div>
                
           </div>
         </div>
       </div>
       </div>
     </div>
   </div>

   <br>
   <br>
   <br>

   <div class="sabtdidgah mt-5">
     <div class="container">
       <div class="row">
         <h5>ثبت دیدگاه : </h5>
       </div>
     </div>
   </div>


   <div class="addcomment mt-5">
     <div class="container">
       <div class="row">

           <form @submit.prevent="sabtnazar">
           
           <div class="mb-3">
           <label for="name" class="form-label">نام : </label>
          <input v-model="nam" type="text" class="form-control" id="name" placeholder="نام کاربر">
          <p v-if="namefield" class="text-danger">لطفاً فیلد مورد نظر را پر کنید</p>
          
         </div>
          <div class="mb-3">
         <label for="body" class="form-label">متن : </label>
         <textarea v-model="matn" class="form-control" id="body" rows="7" placeholder="متن نظر"></textarea>
         <p v-if="matnfield" class="text-danger">لطفاً فیلد مورد نظر را پر کنید</p>
        
      </div>

       <button type="submit" class="btn btn-success">ارسال دیدگاه </button>
              
           </form>
       </div>
     </div>
   </div>


    
   
   

</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { ref } from '@vue/reactivity'
import Swal from 'sweetalert2'
export default {
   
    setup() {

      const route = useRoute()

      const product = ref()

      const comments = ref([])

      const nam = ref('')

      const matn = ref('')

      const namefield = ref(false)

      const matnfield = ref(false)

      const rang = ref('')

      const tedad = ref('')

      const fieldalert = ref(true)

       
      function getsingleItem() {
        
        axios.get(`http://localhost:3000/products/${route.params.id}`)
        .then(function (response) {
          
            product.value = response.data

              
         })
         .catch(function (error) {
          
        console.log(error);
  })
      }

      getsingleItem()


       
      

      function getComments() {
        
          axios.get(`http://localhost:3000/posts/${route.params.id}/comments`)
          .then(function (response) {
    
             comments.value = response.data
          })
        .catch(function (error) {
    
         console.log(error);
         })
      }
      
      getComments()


      function sabtnazar() {


        if (nam.value == '') {
          
          namefield.value = true
           
        } else {
          
            namefield.value = false
        }


        if (matn.value == '') {
          
           matnfield.value = true
        } else {
          
           matnfield.value = false
        }

         
         if (nam.value && matn.value !== '') {
           
            axios.post('http://localhost:3000/comments', {
           
           postId : route.params.id,
            name : nam.value,
            body: matn.value
           })
          .then(function (response) {
             comments.value.push(response.data)
          })
          .catch(function (error) {
          console.log(error);
          });


           Swal.fire({
         position: 'top-center',
         icon: 'success',
         title: 'دیدگاه شما با موفقیت ثبت گردید',
         showConfirmButton: false,
         timer: 2000
         })
            
         }

       



      }

      
        
      sabtnazar()

        

     function addtocard() {
         
         if (rang.value && tedad.value !== '') {
               
               fieldalert.value = false

                 axios.post('http://localhost:3000/cards', {
           
           rang : rang.value,

           tedad : tedad.value,

           details : product.value

           
         })
          .then(function (response) {
         
          console.log(response);
            
             Swal.fire({
           position: 'center',
           icon: 'success',
           title: 'محصول به سبد خرید اضافه شد',
          showConfirmButton: false,
          timer: 1500
           })
         
         })
        .catch(function (error) {
         console.log(error);
         });
         } 
           
          if (rang.value == '' || tedad.value == '') {
             
             fieldalert.value = true
          }

         
      }

   
         addtocard()


         function deletecomment(id) {
           
           axios.delete(`http://localhost:3000/comments/${id}`)
           .then(function (response) {
           
           console.log(response);
            
             Swal.fire({
           position: 'center',
           icon: 'success',
           title: 'نظر شما با موفقیت حذف گردید',
          showConfirmButton: false,
          timer: 1700
           })
            
            })
          .catch(function (error) {
          
          console.log(error);
          })
            comments.value = comments.value.filter(comment => comment.id != id)
         }

         deletecomment()

     
     

      return{route,getsingleItem,product,getComments,comments,nam,matn,sabtnazar,namefield,matnfield,rang,tedad,addtocard,fieldalert,deletecomment}
    }
}
</script>

<style>

html {

    direction: rtl !important;

}

.bi-heart {

   font-size: 1.1rem;
}


.rangamizi {

   color: red;
}

.bi-x-lg {

  font-size: 1.2rem;

  cursor: pointer;
}


</style>