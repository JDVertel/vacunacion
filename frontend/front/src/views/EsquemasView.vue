<template>
  <!--   <p>
    imformacion de nombre del rango + nombre biologico +copdigo biologico dosis
    , organizado por n9mbre de rango de edad
  </p> -->
  <div class="container">
    <div class="row">
      <div class="col-10">
        <h6 class="display-6">Esquemas del sistema</h6>
      </div>
      <div class="col-2"> <button class="btn btn-outline-primary btn-sm" @click="mostrar(esquema)"
          v-if="!mostrarmodal">+</button></div>
    </div>


    <div class="table-responsive">
      <table class="table table-sm">
        <thead>
          <tr>
            <th>Esquema</th>
            <th>Cups</th>
            <th>Biologico</th>
            <th>Diluyente</th>
            <th>Dosis</th>
            <th>Opciones</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(esquema, index) in consultaesquemas" :key="index">
            <td>
              {{ esquema.Esquema }}
            </td>
            <td> {{ esquema.Cups }}</td>
            <td> {{ esquema.Biologico }}</td>
            <td> {{ esquema.Diluyente }}</td>
            <td> {{ esquema.Dosis }}</td>
            <td><button class="btn btn-outline-success btn-sm" @click="mostrar(esquema)"
                v-if="!mostrarmodal">Editar</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    <modalesq :datos="uregistro" :t_title="titulot" :b_title="titulob" v-if="mostrarmodal"
      @rta_hijo="this.mostrarmodal = $event" />

  </div>
</template>

<script>
import Modalesq from "../components/Modal_esquemas.vue";
export default {
  components: {
    Modalesq
  },
  data() {
    return {
      mostrarmodal: false,
      titulot: "",
      titulob: "",
      esquema: "",


      /*--------------------------------------------------- BD */
      consultaesquemas: [
        {
          id: "1",
          Esquema: "Rnacido",
          Cups: "C1234",
          Biologico: "hepatitisB",
          Diluyente: "no",
          Dosis: "1",
        },
        {
          id: "3",
          Esquema: "2meses",
          Cups: "C6541",
          Biologico: "Pfizer",
          Diluyente: "si",
          Dosis: "2",
        },
        {
          id: "5",
          Esquema: "6meses",
          Cups: "C96325",
          Biologico: "Tetano",
          Diluyente: "si",
          Dosis: "3",
        }
      ],
      esquemas: [
        "Rnacido", "2meses", "4meses", "6meses"
      ],
      uregistro: []

    }
  },
  methods: {
    mostrar(esquema) {
      this.mostrarmodal = !this.mostrarmodal,
      this.uregistro = esquema;
      console.log(this.uregistro);
      console.log(this.mostrarmodal);
      if (esquema) { this.titulot = "Editar", this.titulob = "Editar" }
      else { this.titulot = "Agregar Nueva", this.titulob = "Guardar" }
    }

  },
};
</script>

<style>
.btnm {
  border-radius: 5px !important;
  background-color: aquamarine !important;
  border: 0px;
}
</style>
