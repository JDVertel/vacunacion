<template>
<h1>informes</h1>
<div class="container">

    <div class="row">
        <div class="col-12 col-md-4 ">
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Fecha inicio</span>
                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
        </div>
        <div class="col-12 col-md-4 ">
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Fecha Fin</span>
                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
        </div>
        <div class="col-12 col-md-4 "><select class="form-select" aria-label="Default select example">
                <option selected>Seleccione el tipo de informe a realizar</option>
                <option value="1">Informe x biologico</option>
                <option value="2">Informe x edades</option>
                <option value="3">Informe por Esquemas</option>
            </select></div>
    </div>
    
        <select class="form-select" aria-label="Default select example">
            <option selected>Seleccione Biologico</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    
    <select class="form-select" aria-label="Default select example">
        <option selected>seleccione esquema</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <select class="form-select" aria-label="Default select example">
        <option selected>Seleccione rango de edad</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
