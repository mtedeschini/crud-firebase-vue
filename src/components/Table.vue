<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Teconogías</th>
      <th scope="col">Categoría</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <td>{{user.id}}</td>
      <td>{{user.nombre}}</td>
      <td>{{user.tech.join(', ').toUpperCase()}}</td>
      <td>{{user.category}}</td>
      <td>{{user.cantidad}}</td>
      <td>
          <router-link 
             class="btn btn-warning btn-sm mx-1 my-1"
             :to="{ 
              name: 'editar', 
              params: {
                  id: user.id
              }
          }"
         >Editar</router-link>
          <button @click="deleteUser(user.id)" class="btn btn-danger btn-sm mx-1 my-1">Eliminar</button>
      
      </td>
    </tr>
  </tbody>
</table>

</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: "Tabla",
    computed: {
    ...mapState(['users']),
  },
  methods:{
      ...mapActions(['deleteUser'])
  }
}
</script>

<style>
.btn{
  min-width: 70px;
  
}

</style>