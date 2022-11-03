<template>
   
   
   <HeaderItem />

    <router-view></router-view>

    <ScrollItem />

   <FooterItem />
  
</template>

<script>

import HeaderItem from './components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
import ScrollItem from './components/ScrollItem.vue'
export default {

  components: {

    
    HeaderItem,
    
    FooterItem,

    ScrollItem
     
  }
}
</script>

<style>

</style>
