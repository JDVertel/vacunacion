<template>
<br />
<div class="container">
  

    <br />
    <div class="card ">
      <div class="card-header">
        <div class="row">
          <div class="col-10 text-center">
              <h6 class="display-6">Listado de Vacunas del sistema</h6>
          </div>
          <div class="col-2 text-center">
              <button class="btn btn-outline-success btn-sm " @click="mostrar(vacuna)" v-if="!mostrarmodal">+</button>
          </div>
      </div>
      </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-sm ">
                    <thead>
                        <tr>
                            <th><strong>CUPS</strong></th>
                            <th><strong>NOMBRE</strong></th>
                            <th><strong>APLICACION</strong></th>
                            <th><strong>DILUYENTE</strong></th>
                            <th><strong>CALIBRE</strong></th>
                            <th><strong>SEXO</strong></th>
                            <th><strong>OPC</strong></th>
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
        </div>
    </div>

    <br>
    <modalvac :datos="uregistro" :t_title="titulot" :b_title="titulob" v-if="mostrarmodal" @rta_hijo="this.mostrarmodal = $event" />

</div>
<footer>
    <div class="container">

        <RouterLink to="/dashboard"><button type="button" class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg></button> </RouterLink>
    </div>
</footer>
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
            titulob: "",
            mostrarmodal: false,
            /* ----------------------------------BD */
            consultavacunas: [{
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
            /* -------------------------------------- */
            uregistro: []
        }
    },

    methods: {
        mostrar(vacuna) {
            this.mostrarmodal = !this.mostrarmodal,
                this.uregistro = vacuna;
            console.log(this.mostrarmodal)
            if (vacuna) {
                this.titulot = "Editar", this.titulob = "Editar"
            } else {
                this.titulot = "Agregar Nueva", this.titulob = "Guardar"
            }
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

.box {
    box-shadow: -11px -5px 37px -17px rgba(0, 0, 0, 0.71);
    -webkit-box-shadow: -11px -5px 37px -17px rgba(0, 0, 0, 0.71);
    -moz-box-shadow: -11px -5px 37px -17px rgba(0, 0, 0, 0.71);
}
</style>
/* https://www.youtube.com/watch?v=QqjO9LulR3M */
