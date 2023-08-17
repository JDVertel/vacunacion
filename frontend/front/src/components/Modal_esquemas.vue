<template>
  
      <div class="container">
        <h6 class="display-6">Adicionar nuevo Esquema</h6>
        <div class="row">
          <div class="col-6">
            <select class="form-select form-select-sm" aria-label="Small select example" v-model="rango">
              <option value="">Selecciona el rango</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-6">
            <select class="form-select form-select-sm" aria-label="Small select example" v-model="biologico">
              <option value="">Selecciona el biologico</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-6">
            <select class="form-select form-select-sm" aria-label="Small select example" v-model="dosisrango">
              <option value="">Selecciona la dosis del rango</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-6">
            <button type="button" class="btn btn-primary btn-sm">
              Guardar
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