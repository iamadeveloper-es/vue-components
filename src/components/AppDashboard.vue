<template>
  <div class="app-dashboard">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-8 gap-2">
            <div 
            id="app-nav"
            class="app-nav col-span-2 border-r-2 border-sky-500 px-3"
            >
                <ul class="app-menu">
                    <li
                    class="mt-2"
                    v-for="(route, index) in routes"
                    :key="index"
                    >
                    <span
                    class="cursor-pointer space-y-4"
                    @click="toggleChildRoutes($event)"
                    >{{route.name}}</span>
                    <ul class="app-menu-children pl-2">
                        <li
                        class="mt-2"
                        v-for="child in route.children"
                        :key="child.name"
                        >
                            <router-link
                            :to="child.path">{{child.name}}</router-link>
                        </li>
                    </ul>
                    </li>
                </ul>
            </div>
            <div
            class="col-start-3 col-end-8 px-3"
            >
                <router-view/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {routes} from '@/router/index'
export default {
   data(){
    return{
        routes,
    }
  },
  created(){
    console.log(this.routes)
  },
  methods:{
    toggleChildRoutes(ev){
      ev.target.nextSibling.classList.toggle('app-menu-children-active')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-dashboard{
    padding: 50px 20px;
    min-height: 100vh;
}
.app-menu{
  //max-height: 100vh;
  //overflow-y: auto;
  .app-menu-children{
    display: none;
    &.app-menu-children-active{
      display: block;
    }
  }
}
</style>