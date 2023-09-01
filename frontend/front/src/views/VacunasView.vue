<template>


  <br />
  <div class="container">
  <div class="row">
    <div class="col-10">
      <h6 class="display-6">Listado de Vacunas del sistema</h6>
    </div>
    <div class="col-2">
      <button class="btn btn-outline-success btn-sm" @click="mostrar(vacuna)" v-if="!mostrarmodal">+</button>
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
        <tr v-for="(vacuna, index) in consultavacunas" :key="index">
          <td>{{ vacuna.cups }} </td>
          <td>{{ vacuna.nombre }}</td>
          <td>{{ vacuna.aplicacion }}</td>
          <td>{{ vacuna.diluyente }}</td>
          <td>{{ vacuna.jeringa }}</td>
          <td>{{ vacuna.sexo }}</td>
          <td> <button class="btn btn-outline-primary btn-sm" @click="mostrar(vacuna)" v-if="!mostrarmodal">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <modalvac :datos="uregistro" :t_title="titulot" :b_title="titulob" v-if="mostrarmodal" @rta_hijo="this.mostrarmodal = $event" />
  

</div>
  <!--    -->
</template>

<script>
import Modalvac from "../components/Modal_vacunas.vue";

export default {
  components: {
    Modalvac
  },
  data() {
    return {
      vacuna: "",
      titulot: "",
      titulob:"",
      mostrarmodal: false,
      consultavacunas: [
        {
          id: 1,
          aplicacion: "I",
          diluyente: "si",
          jeringa: "25",
          sexo: "A",
          cups: "CUB123",
          nombre: "HEPATITIS B"
        },
        {
          id: 45,
          aplicacion: "I",
          diluyente: "no",
          jeringa: "25",
          sexo: "A",
          cups: "CUB456",
          nombre: "pfizer"
        }
      ],
      uregistro: []
    }
  },


  methods: {
    mostrar(vacuna) {
      this.mostrarmodal = !this.mostrarmodal,
        this.uregistro = vacuna;
      console.log(this.mostrarmodal)
      if (vacuna) { this.titulot = "Editar", this.titulob="Editar"  }
      else { this.titulot = "Agregar Nueva", this.titulob = "Guardar" }
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