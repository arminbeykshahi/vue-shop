<template>
  
   <div class="header d-flex justify-content-between align-items-center">
             
                      <i class="bi bi-list  ms-5" @click="showsidebar"></i>
            <div class="list ms-5">
               <ul class="d-flex">
                  <li><router-link to="/">خانه</router-link></li>
                  <li class="ms-4"><router-link to="/products">محصولات</router-link></li>
                  <li class="ms-4"><router-link to="/login">ورود</router-link></li>
                  <li class="ms-4"><router-link to="/about">درباره ما</router-link></li>
               </ul>
            </div>
           <div class="logo me-5"> 
              
            <router-link to="/card"><i class="bi bi-cart2 fs-3 position-relative">
                 <span class="tedadsabad badge bg-danger rounded-pill position-absolute translate-middle top-0 start-0">{{cards.length}}</span>
                 </i></router-link> 
    </div>
                
          
       
  </div> 

   <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #f8f9fa;"></path></svg></div>
 
  
   <div class="sidebar scale-up-hor-right" v-if="show">
        
         <i class="bi bi-x" @click="deletesidebar"></i>
         <ul>
            <li class="mb-4 mt-4 ">
                <router-link to="/" class="d-block">خانه</router-link>
            </li>
            <hr>
            <li class="mb-4">
                <router-link to="/products" class="d-block">محصولات</router-link>
            </li>
            <hr>
            <li class=" mb-4">
                <router-link to="/login" class="d-block">ورود</router-link>
            </li>
            <hr>
            <li class="mb-4">
                <router-link to="/about" class="d-block">درباره ما</router-link>
            </li>
            
         </ul>

         <div class="logos d-flex justify-content-center align-items-center mt-5">

              <i class="bi bi-instagram fs-4"></i>
              <i class="bi bi-telegram fs-4 ms-3 me-3"></i>
              <i class="bi bi-whatsapp fs-4 "></i>
         </div>
   </div>

</template>

<script>
import { ref } from '@vue/reactivity'
import axios from 'axios'
export default {

     
  setup () {
    
     const show = ref(false)
     
     const cards = ref([])

      function showsidebar () {
          
          show.value = true

      }

      showsidebar()

      function deletesidebar () {

           show.value = false
      }

      deletesidebar()


      function getcardlength () {
           
           axios.get('http://localhost:3000/cards')
          .then(function (response) {
           
            cards.value = response.data
           })
          .catch(function (error) {
          
           console.log(error);
          })
      }

      getcardlength()



      return {show,showsidebar,deletesidebar,getcardlength,cards}
  }
}
</script>

<style scoped>

   html {

        direction: rtl !important;
   }

   .router-link-active {
        
        color: black !important;
        border-bottom: 2px solid black !important;
   }

   .header {

       background-color: #f8f9fa ;
       width: 100%;
       height: 4rem;
   }


   ul {

       list-style-type: none;
       
   }


   a {

       color: black;
       text-decoration: none;
   }

   a:hover {

       color: black;
   }


   .bi-list {
    
    display: none;
    font-size: 1.8rem;
    color: black;
    cursor: pointer;
       
   }

   .sidebar {

        width: 25%;
        height: 100%;
        background-color: silver ;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 2;

   }


   .bi-x {

        color: red;
        font-size: 2rem;
        cursor: pointer;
   }

   .bi-instagram {

        color: white;
   }


  .bi-telegram {

       color: white;
  }


  .bi-whatsapp {

       color: white;
  }

  .tedadsabad {

       font-size: 10px;
  }

 .scale-up-hor-right {
	-webkit-animation: scale-up-hor-right 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: scale-up-hor-right 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}


   


   @media screen and (max-width : 768px) {

        .list {

             display: none;
        }

        .bi {

            display: inline-block;
        }
   }


@-webkit-keyframes scale-up-hor-right {
  0% {
    -webkit-transform: scaleX(0.4);
            transform: scaleX(0.4);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
}
@keyframes scale-up-hor-right {
  0% {
    -webkit-transform: scaleX(0.4);
            transform: scaleX(0.4);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
}

  


   

</style>