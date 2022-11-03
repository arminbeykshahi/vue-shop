<template>
   
 
 <div class="main mt-5">
   <div class="container">
     <div class="row">
       <div class="col-md-4">
         <div class="card mb-5">
           <div class="card-body">
              <h5 class="mb-4">برند ها :</h5>
              
              
            <div @change="showFilter" v-for="filter in filters" :key="filter.id" class="form-check mb-4">
            <input class="form-check-input" type="radio" name="" :value="filter.value" v-model="maghadir" >
            <label class="form-check-label" >
             {{filter.name}}
           </label>
          </div>
           
               

           </div>
          
         </div>
       </div>
       <div class="col-md-8">

          <div v-if="spinner" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
           <span class="visually-hidden">Loading...</span>
          </div>
         </div>
           

          <div class="mahsulat">
            <div class="container">
              <div class="row g-4">
                 <div v-for="product in products" :key="product.id" class="col-md-4">
                    <div class="card">
                    <img :src="product.image" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">{{product.brand}}</h5>
                    <p class="card-text">{{product.summary}}</p>
                    <router-link class="btn btn-primary w-100" :to="{ name: 'singlepage', params: { id: product.id }}">خرید و مشخصات</router-link>
                    <div class="card-footer d-flex justify-content-between align-items-center mt-3">
                      <p>قیمت</p>
                      <p>{{product.price}}</p>
                    </div>
                  </div>
               </div>
                 </div>
              </div>
               <div class="row mt-5 mb-3">
                
                <span>
                  تعداد محصولات :                     
                     {{products.length}}
                </span>
                
              </div>
            </div>
          </div>
       </div>
     </div>
   </div>
 </div>




</template>

<script>
import { ref } from '@vue/reactivity'
import axios from 'axios'
export default {
   
  setup () {
    
    const products = ref([])

    const spinner = ref(true)

    const filters = ref([

       {id : 1 , name : 'اپل', value:'apple'},
       {id : 2 , name : 'سامسونگ', value:'samsung'},
       {id : 3 , name : 'شیائومی', value:'xiaomi'}
    ])

    const maghadir = ref('')

    const cards = ref([])

    
    

    function getProducts() {
      
       axios.get('http://localhost:3000/products')
       .then(function (response) {
           
           products.value = response.data

           spinner.value = false

       console.log(response);
       })
      .catch(function (error) {
       
       console.log(error);
      })
    }
  
     
    showFilter()
     getProducts()
      
      

     function showFilter() {
       
        axios.get(`http://localhost:3000/products?brand=${maghadir.value}`)
        .then(function (response) {
          
        products.value = response.data
  })
       .catch(function (error) {
     
      console.log(error);
  })
     }

      

     return {products,getProducts,spinner,filters,maghadir,showFilter,cards}
  }
}
</script>

<style>

  html {

       direction: rtl !important;
  }



  a {

    text-decoration: none;
    color: black;
  }

</style>