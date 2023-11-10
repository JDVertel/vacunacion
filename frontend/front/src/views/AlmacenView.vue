<template>
<br>
<h5 class="display-6">Almacen IPS</h5>
<div class="container-fluid">


    <br>
    <div class="row">
        <div class="col-12 col-md-6">
            <div class="container vitrina">
                <h6>Registro de temperatura de neveras</h6>
                <hr>
                <h6>Seleccione una nevera para realizar un registro</h6>
                <select class="form-select form-select-sm" aria-label="Small select example">
                    <option selected>Neveras de almacenamiento</option>
                    <option value="1">Nevera 1</option>
                    <option value="2">Congelador 1</option>
                    <option value="3">Congelador 1</option>
                </select>
                <hr>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Historial</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">+ Registro</button>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane " id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <h6>Registro de Temperatura de nevera</h6>
                        <hr>
                     
                        <div class="container">

                            <div class="row">
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Temperatura (°C)</span>
                                    <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                </div><button type="button" class="btn btn-primary btn-sm">Guardar Registro</button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane active" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Temperatura </th>
                                        <th scope="col">Fecha/hora</th>
                                        <th scope="col">Rango limite</th>
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
                    <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>

                </div>
                <br>
            </div>
        </div>

        <div class="col-12 col-md-6">
            <div class="container vitrina">
                <h6>Kardex</h6>
                <hr>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Ubicacion</th>
                                <th scope="col">Cant</th>
                                <th scope="col">Biologico</th>
                                <th scope="col">Lote</th>
                                <th scope="col">F-vencimiento</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>         <td>Mark</td>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Detalle</button></td>
                            </tr>
                            <tr>         <td>Mark</td>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Detalle</button></td>
                            </tr>
                            <tr>         <td>Mark</td>
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
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.vitrina {
    background-color: rgb(228, 239, 235);
}
</style>
