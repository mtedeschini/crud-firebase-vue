<template>
    <!-- Text -->
    <input 
    type="text" 
    class="form-control my-2" 
    placeholder="Ingrese Nombre"
    v-model.trim="user.nombre"
    >
    <!-- Checkbox -->
    <div class="form-check form-check-inline">
      <input
      type="checkbox"
      class="form-check-input"
      v-model="user.tech"
      id="html"
      value="html"
      >
      <label for="html" class="form-check-label"> HTML</label>
    </div>    
    <div class="form-check form-check-inline">
      <input
      type="checkbox"
      class="form-check-input"
      v-model="user.tech"
      id="css"
      value="css"
      >
      <label for="css" class="form-check-label"> CSS </label>
    </div>    
    <div class="form-check form-check-inline">
      <input
      class="form-check-input"
      type="checkbox"
      v-model="user.tech"
      id="js"
      value="js"
      >
      <label for="js" class="form-check-label"> JavaScript</label>
    </div>
    
    <!-- RadioButton -->
    <div class="mt-3">
      <div class="form-check form-check-inline">
        <input class="form-check-input" 
          type="radio" 
          id="radio-1" 
          value="urgente" 
          v-model="user.category">
        <label 
          class="form-check-label" 
          for="radio-1">Urgente</label>
      </div>      
      <div class="form-check form-check-inline">
        <input class="form-check-input" 
          type="radio" 
          id="radio-2" 
          value="relax" 
          v-model="user.category">
        <label 
          class="form-check-label" 
          for="radio-2">Relax</label>
      </div>
  </div>

   <!-- Number -->
   <div>
     <input id="numb" 
      type="number"
      class="form-control my-2"
      v-model.number="user.cantidad"
      placeholder="Ingrese Cantidad" >
   </div>

  <button 
  class="btn btn-dark mt-4 btn-block mb-2" 
  type="submit" 
  :disabled="bloquear"
  >Procesar</button>   

</template>

<script>
export default {
    name: "Input",
    props: {
      user: {
        type: Object
      },
    },
  computed: {
    bloquear() {
      return this.user.nombre.trim() === "" ? true : false
    }
  },
  
}
</script>