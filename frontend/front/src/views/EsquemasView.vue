<template>
<!--   <p>
    imformacion de nombre del rango + nombre biologico +copdigo biologico dosis
    , organizado por n9mbre de rango de edad
  </p> -->
<div class="container">
  
    <br>

    <div class="table-responsive">
        <div class="card ">
            <div class="card-header">
                <div class="row">
                    <div class="col-10 text-center">
                        <h6 class="display-6 ">Configuracion de vacunas en el esquema</h6>
                    </div>
                    <div class="col-2 text-center"> <button class="btn btn-outline-primary btn-sm" @click="mostrar(esquema)" v-if="!mostrarmodal">+</button></div>
                </div>
              </div>
            <div class="card-body ">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th><strong>RANGO</strong></th>
                            <th><strong>CUPS</strong></th>
                            <th><strong>BIOLOGICO</strong></th>
                            <th><strong>DILUYENTE</strong></th>
                            <th><strong>DOSIS</strong></th>
                            <th><strong>OPCIONES</strong></th>

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
                            <td><button class="btn btn-outline-success btn-sm" @click="mostrar(esquema)" v-if="!mostrarmodal">Editar</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <br>
    <footer>
        <div class="container">

            <RouterLink to="/dashboard"><button type="button" class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg></button> </RouterLink>
        </div>
    </footer>
    <modalesq :datos="uregistro" :t_title="titulot" :b_title="titulob" v-if="mostrarmodal" @rta_hijo="this.mostrarmodal = $event" />

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
            consultaesquemas: [{
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
            if (esquema) {
                this.titulot = "Editar", this.titulob = "Editar"
            } else {
                this.titulot = "Agregar Nueva", this.titulob = "Guardar"
            }
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
