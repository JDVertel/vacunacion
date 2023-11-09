<template>
  <h1>aplicaciones</h1>
<div class="container">
  <h6 class="text-center">    Ingrese los datos del paciente a consultar </h6>
  <div class="row">
    <div class="col-5">
      <select class="form-select" aria-label="Default select example" v-model="tipodoc">
        <option value="">Tipo Documento</option>
        <option value="CCM">CC Madre</option>
        <option value="RC">Registro Civil</option>
        <option value="TI">Tarjeta de identidad</option>
        <option value="CC">Cedula de Ciudadania</option>
        <option value="CE">Cedula de Extrangeria</option>
        <option value="PA">Pasaporte</option>
      </select>
    </div>

    <div class="col-4">
      
      <input class="form-control form-control-sm" type="text" placeholder="# Documento" v-model="numdoc">
    </div>


    <div class="col-2">
      <button class="btn btn-success btn-sm" @click="buscar" v-if="tipodoc !='' && numdoc !='' ">
        Buscar
      </button>
    </div>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>