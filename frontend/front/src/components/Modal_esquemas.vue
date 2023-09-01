<template>
  <transition>
    <div class="modal2-overlay" v-if="b_title">
    </div>
  </transition>

  <transition>
    <div class="modal2">


      <div class="container">
        <h4 class="display-6">{{ t_title }}</h4>

        <div class="col">
          <select class="form-select form-select-sm" aria-label="Small select example" v-model="esquema">
            <option value="">Rango de edad</option>
            <option value="RN">Recien Nacido</option>
            <option value="2M">2 Meses</option>
            <option value="4M">4 Meses</option>
            <option value="6M">6 Meses</option>
            <option value="7M">7 Meses</option>
            <option value="12M">12 Meses</option>
            <option value="18M">18 Meses</option>
            <option value="5A">5 Años</option>
            <option value="F9_17">Niñas de 9 a 17 Años</option>
            <option value="M1_13">Niños 1 a 13 Años</option>
            <option value="M10_49">Mujeres Fertil 10 a 49 Años</option>
            <option value="50">Mayores de 50 años</option>
            <option value="GEST">Gestantes</option>
            <option value="1_5">Mayor a 1 hasta 5 años</option>
          </select>
        </div>
        <div class="col">
          <select class="form-select form-select-sm" aria-label="Small select example" v-model="biologico">
            <option value="">Biologico</option>
            <option value="1">1ra</option>

          </select>
        </div>
        <div class="col">
          <select class="form-select form-select-sm" aria-label="Small select example" v-model="dosisrango">
            <option value="">Dosis en rango</option>
            <option value="U">unica</option>
            <option value="1">1ra</option>
            <option value="2">2da</option>
            <option value="3">3ra</option>
            <option value="1R">1Refuerzo</option>
            <option value="2R">2Refuerzo</option>
          </select>
        </div>

        <br>
        <button class="btn btn-outline-primary btn-sm" @click="ocultar"> Cerrar</button>
        <button class="btn btn-outline-success btn-sm" @click="guardar"> {{ b_title }} </button>



        {{ esquema }} {{ dosisrango }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['t_title', 'b_title', 'datos'],

  data() {
    return {
      esquema: this.datos.Esquema || "",
      biologico: this.datos.Biologico || "",
      dosisrango: this.datos.Dosis || "",

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