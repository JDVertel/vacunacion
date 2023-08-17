<template>
  <p>
    imformacion de nombre del rango + nombre biologico +copdigo biologico dosis
    , organizado por n9mbre de rango de edad
  </p>
  <div class="container">
    <h6 class="display-6">Esquemas del sistema</h6>
    <div class="table-responsive">
      <table class="table">
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
          <tr>
            <td>
              Recien Nacido
            </td>
            <td>123456</td>
            <td>Hepatitis A</td>
            <td>si</td>
            <td>U</td>
            <td><button class="btnm" @click="mostrar(vacuna)" v-if="!mostrarmodal">Editar</button></td>
          </tr>

        </tbody>
      </table>
    </div>
    <!-- 



 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarmodal: false,
      titulot: "",
      titulob: "",
      /*  */
      rango: "",
      biologico: "",
      dosisrango: "",

      consultaesquemas: [
        {
          id: "1",
          Esquema: "",
          Cups: "",
          Biologico: "",
          Diluyente: "",
          Dosis: "",
        },
        {
          id: "3",
          Esquema: "",
          Cups: "",
          Biologico: "",
          Diluyente: "",
          Dosis: "",
        },
        {
          id: "5",
          Esquema: "",
          Cups: "",
          Biologico: "",
          Diluyente: "",
          Dosis: "",
        }
      ],
      esquemas: [
        "Rnacido", "2meses", "4meses", "6meses"
      ],
      uregistro: []

    }
  },
  methods: {
    
  },
};
</script>

<style></style>
