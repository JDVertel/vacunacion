<!-- componente de modal accesible desde dualquier -->
<template>
  <h1> componente de modal {{ title }} </h1>
  <button @click="ocultar" v-if="!mostrarmodal"> activar</button>
</template>

<script>
export default {
  name: 'modalDinamico',
  props: ['title'],
  methods: {
    ocultar() {
      this.mostrarmodal = !this.mostrarmodal,
        this.$emit('datoshijo', this.mostrarmodal);
      console.log(this.mostrarmodal)
    }
  }
}

</script>

<style></style>