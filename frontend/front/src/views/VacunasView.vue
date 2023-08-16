<template>
  <h1>vacunas</h1>

  <br />
  <div class="row">
    <div class="col-10">
      <h6>Listado de Vacunas del sistema</h6>
    </div>
    <div class="col-2">

    </div>
  </div>

  <br />
  <div class="table-responsive">
    <table class="table table-sm table-bordered">
      <thead>
        <tr class="table-primary">
          <th>CUPS</th>
          <th>Nombre</th>
          <th>Aplicacion</th>
          <th>Diluyente</th>
          <th>Calibre</th>
          <th>Sexo</th>
          <th>Opc</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vacuna in vacunas">
          <td>{{ vacuna.cups }} </td>
          <td>{{ vacuna.nombre }}</td>
          <td>{{ vacuna.aplicacion }}</td>
          <td>{{ vacuna.diluyente }}</td>
          <td>{{ vacuna.jeringa }}</td>
          <td>{{ vacuna.sexo }}</td>

          <td> <button class="btnm" @click="mostrar" v-if="!mostrarmodal"> activar</button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>


  <modal title="titulodesdepadre" v-if="mostrarmodal" @rta_hijo="this.mostrarmodal = $event" />

  <!--    -->
</template>

<script>
import Modal from "./../components/Modal.vue";

export default {



  components: {
    Modal
  },



  data() {

    return {
      mostrarmodal: false,
      aplicacion: "",
      diluyente: "",
      jeringa: "",
      sexo: "",
      cups: "",
      nombre: "",
      vacunas: [
        {
          aplicacion: "I",
          diluyente: "si",
          jeringa: "25",
          sexo: "A",
          cups: "CUB123",
          nombre: "HEPATITIS B"
        },
        {
          aplicacion: "I",
          diluyente: "NO",
          jeringa: "25",
          sexo: "A",
          cups: "CUB456",
          nombre: "pfizer"
        }
      ],



    }


  },


  methods: {
    mostrar() {
      this.mostrarmodal = !this.mostrarmodal,
        console.log(this.mostrarmodal)
    }
  }
}

</script>

<style scoped>
.th {
  font-weight: bold;
}

.btnm {
  border-radius: 5px !important;
  background-color: aquamarine !important;
  border: 0px;
}
</style>
/* https://www.youtube.com/watch?v=QqjO9LulR3M */