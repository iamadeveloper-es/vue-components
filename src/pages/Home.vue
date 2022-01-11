<template>
  <div class="home">
    
  </div>
</template>

<script>
import {routes} from '../router/index'
export default {
  name: 'Home',
  data(){
    return{
      routes,
    }
  },
  created(){
    console.log(this.routes)
  }
}
</script>
