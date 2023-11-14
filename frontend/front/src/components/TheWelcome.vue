<script>
import {
    useRouter
} from 'vue-router';
import {
    usuarios
} from './../BD/index'
export default {

    data: () => ({
        datausers: usuarios,
        user: "",
        passw: "",
        auth: "true",

    }),
    methods: {
        validar() {
            console.log("ejecutando funcion");
            const router = useRouter();
            router.push({
                name: '/dashboard'
            });
        }
    },

}
</script>

<template>
<p class="text-center">
    Prototipo de Sistema de Registro Control y Gestion de Vacunacion Version 1.0
</p>
<br>
{{datausers}}
<div class="container text-center">
    <form>
        <h6>Login</h6>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Usuario</span>
            <input v-model="user" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Contraseña</span>
            <input v-model="passw" type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>

        <button type="button" class="btn btn-success btn-sm" v-if="user && passw!=''" @click="validar">Ingresar</button>
    </form>
</div>
</template>

765
