<template>
   

     <i @click="scroll" class="bi bi-arrow-up-circle-fill"></i>

</template>

<script>
export default {

   setup() {
     
     function scroll () {
         
         window.scrollTo({
             top: 0,
             behavior: 'smooth'
           });
     }

     scroll()
        
        return {scroll}
   }
}
</script>

<style>
  
   html {
        
        direction: rtl !important;
   }


   .bi-arrow-up-circle-fill {

        font-size: 2.9rem;
        cursor: pointer;
        color: #D61616;
        position: fixed;
        bottom: 25px;
        right: 25px;
        
        
   }
</style>