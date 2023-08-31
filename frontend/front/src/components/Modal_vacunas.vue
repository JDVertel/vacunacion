
<!-- componente de modal accesible desde dualquier -->
<template>
  <transition>
    <div class="modal2-overlay" v-if="b_title">
    </div>
  </transition>

  <transition>
    <div class="modal2">
      <h4 class="display-6">{{ t_title }} Vacuna </h4>
     
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-4">
            <input class="form-control form-control-sm" type="text" placeholder="Codigo CUPS" v-model="cups" />
          </div>
          <div class="col-12 col-sm-4">
            <input class="form-control form-control-sm" type="text" placeholder="Nombre Biologico" v-model="nombre" />
          </div>
          <div class="col-12 col-sm-4">
            <select class="form-select" aria-label="Default select example" v-model="aplicacion">
              <option value="">Aplicacion</option>
              <option value="I">Inyectable</option>
              <option value="O">Oral</option>
            </select>
          </div>
          <div class="col-12 col-sm-4">
            <select class="form-select" aria-label="Default select example" v-model="diluyente">
              <option value="">Diluyente</option>
              <option value="si">SI</option>
              <option value="no">NO</option>
            </select>
          </div>
          <div class="col-12 col-sm-4">
            <select class="form-select" aria-label="Default select example" v-model="jeringa">
              <option value="">Calibre Jeringa</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="25">25</option>
              <option value="26">26</option>
            </select>
          </div>
          <div class="col-12 col-sm-4">
            <select class="form-select" aria-label="Default select example" v-model="sexo">
              <option value="">Sexo</option>
              <option value="A">Ambos</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </div>
        </div>
      </div>
  <br>
      <button class="btn btn-outline-primary btn-sm" @click="ocultar"> Cerrar</button>
      <button class="btn btn-outline-success btn-sm" @click="guardar"> {{ b_title }} </button>

    </div>

  </transition>
</template>

<script>
export default {

  /*  lo que viene del pádre hacia el hijo*/
  props: ['t_title', 'b_title', 'datos'],

  data() {

    return {
      estadomodal: false,
      id: this.datos.id,
      cups: this.datos.cups  || "",
      nombre: this.datos.nombre || "",
      aplicacion: this.datos.aplicacion  || "",
      diluyente: this.datos.diluyente  || "",
      jeringa: this.datos.jeringa  || "",
      sexo: this.datos.sexo  || "",
      guarda: [],
      crea:[]
    }
  },

  methods: {
    ocultar() {
      /* lo que viaja al padre desde el hijo */
      this.$emit('rta_hijo', this.estadomodal);
      console.log(this.estadomodal)
    },

    guardar() {
      /* lo que viaja al padre desde el hijo */
      /*   this.$emit('rta_hijo', this.estadomodal); */

      this.guarda.cups = this.cups
      this.guarda.nombre = this.nombre
      this.guarda.aplicacion = this.aplicacion
      this.guarda.diluyente = this.diluyente
      this.guarda.jeringa = this.jeringa
      this.guarda.sexo = this.sexo
      this.guarda.cups = this.cups

      if (this.id >0) {
      
        console.log("editar registro exitosamente")

             console.log(this.guarda)
      } else {
 
        console.log("registro nuevo")
        console.log(this.guarda)
      }





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