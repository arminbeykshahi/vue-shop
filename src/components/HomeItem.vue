<template>


 <div class="slider">
   <div class="container">
      
          <SliderItem />
          
   </div>
 </div>
        
  

<br>

<br>

<br>


 <div class="mostsales mt-5 mb-5">
   <div class="container">
     <div class="row">
       <h5>پرفروش ترین محصولات</h5>
     </div>
   </div>
 </div>

 <div class="porfrosh mt-3">
   <div class="container">
     <div class="row g-5">
       <div class="col-md-4" v-for="sale in sales" :key="sale.id">
         <div class="card">
          <img :src="sale.image" class="card-img-top" alt="..." >
          <div class="card-body"> 
          <h5 class="card-title">{{sale.name}}</h5>
          <p class="card-text">{{sale.description}}</p>
          
       </div>
      </div>
       </div>
     </div>
   </div>
 </div>
  
   <br>
   <br>
   <br>

  <div class="soalat mt-5">
    <div class="container">
      <div class="row">
        <h5>سوالات متداول</h5>
      </div>
    </div>
  </div>


  <div class="accordion mt-5">
    <div class="container">
      <div class="row">
        <div v-for="accordion in accordions" :key="accordion.id"  class="col-12">
        <div @click="namayesh" class="accordion-item d-flex justify-content-between align-items-center mt-4">
          <div class="accordion-title ms-3">  
            {{accordion.title}}
          </div>
          <div class="accordion-logo me-3">
            <i class="bi bi-arrow-left" v-if="arrowleft"></i>
            <i class="bi bi-arrow-down" v-if="arrowdown"></i>
          </div>
        </div>
        <div v-if="show" class="card w-100">
          <div class="card-body">
             <p>{{accordion.body}}</p>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  </div>
 
  <br>
  <br>
  <br>

  <div class="sefaresh mt-5">
    <div class="container">
      <div class="row">
          <h5>خرید و سفارش</h5>
      </div>
    </div>
  </div>


  
 <div class="detail mt-5 mb-5">
   <div class="container">
     <div class="row g-4">
       <div class="col-md-4">
         <div class="card sefaresh">
           <div class="card-body d-flex justify-content-center align-items-center">
             <img src="../images/customer-service.png" alt="" width="50" height="50">
           </div>
           <div class="d-flex justify-content-center align-items-center">
             <p class="text-muted">پشتیبانی</p>
           </div>
         </div>
       </div>
       <div class="col-md-4">
         <div class="card sefaresh">
           <div class="card-body d-flex justify-content-center align-items-center">
             <img src="../images/secure-shield.png" alt="" width="50" height="50">
           </div>
           <div class="d-flex justify-content-center align-items-center">
             <p class="text-muted">خرید</p>
           </div>
         </div>
       </div>
       <div class="col-md-4">
         <div class="card sefaresh">
           <div class="card-body d-flex justify-content-center align-items-center">
             <img src="../images/delivery.png" alt="" width="50" height="50">
           </div>
           <div class="d-flex justify-content-center align-items-center">
             <p class="text-muted">ارسال</p>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>

 <br>
 <br>

 

</template>

<script>
import { ref } from '@vue/reactivity'
import SliderItem from '../components/SliderItem.vue'
export default {
   
   components : {
       
        SliderItem
   },
 
   setup () {

     
     const show = ref(true)

     const arrowleft = ref(false)

     const arrowdown = ref(true)

     const sales = ref([
      
      {id:1 , name : 'apple' , description : 'گوشی آیفون یکی از محبوب ترین گوشی ها است', image : 'https://dkstatics-public.digikala.com/digikala-products/f7f8ffb33f96cb971bec78e2ee1d84dbb09a2a00_1649225266.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'},
      {id:2 , name : 'poco' , description : 'گوشی پوکو یکی از محبوب ترین گوشی ها برای همه است' , image : 'https://dkstatics-public.digikala.com/digikala-products/932752a3594b8f5d1ddfa62fe4d2a29824096916_1656405344.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'},
      {id:3 , name : 'samsung' , description : 'گوشی سامسونگ یکی از محبوب ترین گوشی ها است',image : 'https://dkstatics-public.digikala.com/digikala-products/871b53a2236bf90e7e37337b1089c39f5c5175ff_1656422780.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'}
     ])


     const accordions = ref([

       {id : 1 , title : 'آیا ضمانت بازگشت وجه وجود دارد؟' , body : 'بله تمامی محصولات بر اساس سلیقه مشتری ضمانت بازگشت وجه دارند.'},
       {id : 2 , title : 'آیا محصولات اصل هستند؟' , body : 'بله تمامی محصولات اصل و از کشور سازنده هستند.'},
       {id : 3 , title : 'مدت زمان تحویل کالا چقدر است؟' , body : 'تمامی محصولات در حداکثر سه روز کاری تحویل مشتری داده میشوند.'}
     ])

     

     function namayesh () {
       
        show.value = !show.value

        arrowleft.value = !arrowleft.value

        arrowdown.value = !arrowdown.value
     }

     namayesh()


     return {sales,show,namayesh,accordions,arrowleft,arrowdown}
   }
}
</script>

<style>

 html {

      direction: rtl !important;
 }


 .accordion-item {

    width: 100%;
    height: 3rem;
    background-color: #f8f9fa ;
    cursor: pointer;
 }

 .sefaresh {

   border: none;
 }


 
</style>