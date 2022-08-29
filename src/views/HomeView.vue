<template>
    <form @submit.prevent="procesarForm" >
      <Input :user="this.user"/>
    </form>
    <p> 
      {
      <br>      
      nombre: {{user.nombre}}
      <br>      
      tech: {{user.tech}}
      <br>      
      category: {{user.category}}
      <br>      
      cantidad: {{user.cantidad}}
      <br>
      }
    </p>
    <Table/>
</template>
<script>

import Input from '../components/Input.vue'
import Table from '../components/Table.vue'
import { mapActions, mapState } from 'vuex'

//PAQUETE PARA GENERAR ID
const shortid = require('shortid');

export default {
  name: 'HomeView',
  data() {
    return {
      user:{
        id: '',
        nombre: '',
        tech: [],
        category: '',
        cantidad: 0,
      },
    }
  },
  components: {
    Input,
    Table,
  },  
  actions: {
    setUsers({ commit }, user){
      commit('set', user)
    },
    deleteUser({commit}, user){
      commit('eliminar', id)
    }
  },   
  methods:{
    ...mapActions(['setUsers']),
    procesarForm(){
      if(this.user.nombre.trim() ===""){
        console.log("Campo Vacío")
        return
      }else{

      //GENERADOR DE ID
      this.user.id = shortid.generate();
      this.setUsers(this.user)

      //LIMPIAR FORMULARIO
      this.user = {
        id: '',
        nombre: '',
        tech: [],
        category: '',
        cantidad: 0,
      }
      }
    },
  }

}
</script>
