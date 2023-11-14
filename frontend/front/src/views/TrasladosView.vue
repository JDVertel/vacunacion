<template>
<h1>traslados</h1>

<h6>Traslados de Biologico entre Sucursales de la misma IPS</h6>

<div class="container">

    <div class="row">
        <div class="col-12 col-md-6 remite">
            <h6>Remitente</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam delectus nemo quam dolores adipisci sunt fuga? Tempora voluptatibus commodi id fuga rem repellendus quos voluptatem obcaecati, fugit, quam quo?
            </p>
            <div class="container">
                <div class="row mb-3">
                    <div class="col-8"><select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>Seleccione Sucursal Remitente</option>
                            <option value="1">Galan</option>
                            <option value="2">Cicuentenario</option>
                            <option value="3">Danubio</option>
                        </select></div>

                    <div class="col-8"><select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>Seleccione Sucursal Destino</option>
                            <option value="1">Galan</option>
                            <option value="2">Cicuentenario</option>
                            <option value="3">Danubio</option>
                        </select></div>
                    <div class="col-4">
                        <button type="button" class="btn btn-primary btn-sm">Seleccionar</button>
                    </div>
                </div>

                <!-- ------------------------------------------------------------ -->

                <div class="container additem">
                    <h6>Seleccion de <strong>Biologicos o Insumos</strong> para traslado a sucursal Danubio</h6>
                    <!--  -->
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Biologicos</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Insumos</button>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

                            <div class="row mb-3">
                                <div class="col-8"><select class="form-select form-select-sm" aria-label="Small select example">
                                        <option selected>Seleccione Biologico</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="col-4"><select class="form-select form-select-sm" aria-label="Small select example">
                                        <option selected>Seleccione Lote</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row mb-3">
                                <div class="col-6">
                                    <div>
                                        <h6>Cantidad Disponible: 34</h6>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <h6>
                                        F vencimiento
                                    </h6>

                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-6"><input class="form-control form-control-sm" type="number" placeholder="Cantidad a enviar"></div>
                                <div class="col-6"><button type="button" class="btn btn-primary btn-sm">Agregar</button></div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                            <div class="row mt-3">
                                <div class="col-8 "><select class="form-select form-select-sm" aria-label="Small select example">
                                        <option selected>Seleccione insumo</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="col-4"><input class="form-control form-control-sm" type="number" placeholder="cantidad" aria-label=".form-control-sm example"></div>

                            </div>
                            <div class="row mt-3">
                                <div class="col-6">
                                    <div>
                                        <h6>Cantidad Disponible: 34</h6>
                                    </div>
                                </div>
                                <div class="col-6">

                                </div>
                            </div>

                        </div>

                    </div>

                    <!--  -->

                    <br>
                </div>

                <!-- ------------------------------------------------------------ -->
                <div class="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Tipo</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Lote</th>
                                <th scope="col">Fvencimiento</th>
                                <th scope="col"> Cant </th>
                                <th>Opc</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">Biologico</th>
                                <th scope="row">Moderna</th>
                                <td>12345</td>
                                <td>05/12/2024</td>
                                <td>
                                    <div class="col-6"><input class="form-control form-control-sm" type="number" value="10"></div>
                                </td>
                                <td><button type="button" class="btn btn-danger btn-sm">X</button></td>
                            </tr>
                            <tr>
                                <th scope="row">insumo</th>
                                <th scope="row">jeringas 22</th>
                                <td>2265</td>
                                <td>no aplica</td>
                                <td>
                                    <div class="col-6"><input class="form-control form-control-sm" type="number" value="10"></div>
                                </td>
                                <td><button type="button" class="btn btn-danger btn-sm">X</button></td>
                            </tr>
                            <tr>
                                <th scope="row">insumo</th>
                                <th scope="row">algodon x 100</th>
                                <td>2265</td>
                                <td>no aplica</td>

                                <td>
                                    <div class="col-6"><input class="form-control form-control-sm" type="number" value="10"></div>
                                </td>
                                <td><button type="button" class="btn btn-danger btn-sm">X</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row mb-3"><button type="button" class="btn btn-primary btn-sm">Realizar traslado</button></div>
                </div>
            </div>

        </div>

        <div class="col-12 col-md-6 destino">
            <h6>Destino</h6>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ut quas, repudiandae ipsum laborum nobis doloremque maiores debitis id doloribus. Cupiditate laudantium recusandae repellendus quia mollitia voluptas, delectus similique aliquid!

            <div class="container vitrina">
                <h6>Kardex</h6>
                <hr>
                <div class="table-responsive">
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

                    este kardes debe cargar por defecto el inventario actual de la sucursal destino , al momento de seleccionar un bilogico en el remitente (para agregarlo al destino) el debe filtar esta tabla y mostrar el estado de biologicos que tiene actualmente, se puede manejar los estados actuales vs valores minimos definidos en kardes
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
.remite {
    background-color: burlywood
}

.destino {
    background-color: chartreuse
}

.additem {
    background-color: rgb(85, 130, 208)
}

.redondo {
    border-radius: 50%;
    margin: 1px !important;

}
</style>
