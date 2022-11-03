<template>
   
       <h3 v-if="sabadkhali" class="text-center">

            سبد خرید خالی می باشد
                   <i class="bi bi-cart-x ms-2"></i> 
       </h3>

   <div v-if="showtable" class="showcard d-flex justify-content-center align-items-center">

         <div class="container">
             <div class="row">
                     
                    
                    <div class="table-responsive">
                     <table class="table text-center">
             <thead>
                 <tr>
                     <th>شماره</th>
                     <th>عکس</th>
                     <th>برند</th>
                     <th>رنگ</th>
                     <th>تعداد</th>
                     <th>قیمت</th>
                     <th>حذف</th>
                 </tr>
             </thead>
             <tbody>
                <tr v-for="card in cards" :key="card.id">
                    <td>{{card.id}}</td>
                    <td><img :src="card.details.image" width="35" height="35"></td>
                    <td>{{card.details.brand}}</td>
                    <td>{{card.rang}}</td>
                    <td>{{card.tedad}}</td>
                    <td>{{card.details.price * card.tedad}}</td>
                    <td><button @click="deleteitem(card.id)" class="btn btn-danger w-100">حذف</button></td>
                </tr>

             </tbody>


         </table>


         <div class="d-flex justify-content-between align-items-center" >
            
             <h6 class="ms-2">جمع کل (تومان) :</h6>
             <span class="badge bg-secondary rounded-pill me-2">{{total}}</span>
               

         </div>

         </div>
             </div>

         
                 
             </div>
         </div>
   
    
</template>

<script>
import axios from 'axios'
import { ref } from '@vue/reactivity'
 import Swal from 'sweetalert2'
export default {

  setup () {


      const cards = ref([])
      
      const total = ref('')

      const showtable = ref(false)
      
      const sabadkhali = ref(true)
      
     
     function getcard() {
         
         axios.get('http://localhost:3000/cards')
        .then(function (response) {
           
           cards.value = response.data
         

          if (cards.value.length != 0) {
               
               showtable.value = true
               sabadkhali.value = false

          }
          else {
              
              Swal.fire({
               icon: 'error',
               title: 'سبد خرید خالی می باشد',

              })

 
             
          }

          

          deleteitem()
         
        })
       .catch(function (error) {
    
       console.log(error);
        })
     }

     getcard()


     function deleteitem(id) {

         axios.delete(`http://localhost:3000/cards/${id}`)
         .then(function (response) {
          
         console.log(response);
          })
        .catch(function (error) {
    
        console.log(error);
  })
        
           cards.value = cards.value.filter(card=> card.id != id)
            
             total.value = cards.value.reduce((acc,curr)=>{

          return acc + curr.details.price * curr.tedad
         },0)

          
     }

     

    

      return {getcard,cards,total,showtable,deleteitem,sabadkhali}
  }

}
</script>

<style>

html {

    direction: rtl !important;
}

</style>