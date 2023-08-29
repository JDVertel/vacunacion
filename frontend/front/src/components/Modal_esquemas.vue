<template>
  <transition>
    <div class="modal2-overlay" v-if="b_title">
    </div>
  </transition>

  <transition>
    <div class="modal2">


      <div class="container">
             <h4 class="display-6">{{ t_title }}</h4>
        <div class="row">
          <div class="col-6">
            <select class="form-select form-select-sm" aria-label="Small select example" v-model="esquema">
              <option value="">Selecciona la etapa</option>
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
            <br>
            <button class="btn_c" @click="ocultar"> Cerrar</button>
            <button class="btn_e" @click="guardar"> {{ b_title }} </button>

          </div>
        </div>
{{ esquema }} {{ dosisrango  }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['t_title', 'b_title', 'datos'],

  data() {
    return {
      esquema: this.datos.Esquema || "vacio",
      biologico: this.datos.Biologico || "vacio",
      dosisrango: this.datos.Dosis || "vacio",

    }
  },
  methods: {
    ocultar() {
      /* lo que viaja al padre desde el hijo */
      this.$emit('rta_hijo', this.estadomodal);
      console.log(this.estadomodal)
    }
  }
}
</script>

<style scoped>
.modal2-overlay {

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 98;
  background-color: rgb(19, 19, 19);
  opacity: 0.5;
}

.modal2 {

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 20px;
  border-radius: 15px;
  z-index: 105;

}

.btn_c {
  border-radius: 5px !important;
  background-color: rgb(245, 25, 25) !important;
  color: #ffffff;
  border: none;
}

.btn_e {
  border-radius: 5px !important;
  background-color: rgb(6, 212, 88) !important;
  color: #ffffff;
  border: none;
}
</style>