<template>
<h5 class="display-6">nevera IPS</h5>
<div class="container-fluid">

<div class="row">

    <div class="col-6">
        <h6>Registro de temperatura</h6>
    </div>

    <div class="col-6">

        <h6>Kardex</h6>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Cant</th>
                    <th scope="col">Biologico</th>
                    <th scope="col">Lote</th>
                    <th scope="col">F-vencimiento</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button type="button" class="btn btn-primary btn-sm">Detalle</button></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td><button type="button" class="btn btn-primary btn-sm">Detalle</button></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@mdo</td>
                    <td><button type="button" class="btn btn-primary btn-sm">Detalle</button></td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.seg {
    background-color: blueviolet !important;

}

.container-fluid {
    background-color: brown;
}
</style>
