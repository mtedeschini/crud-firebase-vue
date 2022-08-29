<template>
  <NavBar />
  <div class="container mt-5">
  <router-view />
  </div>
</template>

<script>
  import { mapActions } from 'vuex' 
  import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
  methods: {
    //...mapActions(['cargarLocalStorage'])
    ...mapActions(['getUsers'])
  },
  created(){
    this.getUsers();
   // this.cargarLocalStorage()
  }
}

</script>
