<template>

  <div>
    <v-header></v-header>
    <router-view></router-view>
  	<v-footer></v-footer>
  </div>
  
</template>

<script>

import vfooter from './components/together/footer.vue'
import vheader from './components/together/header.vue'
export default{
  components:{
    'v-footer':vfooter,
    'v-header':vheader
  }
}
</script>

<style>

</style>
