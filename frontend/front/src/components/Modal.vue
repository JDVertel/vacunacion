<template>

        <div class="modal fade" id="ModalEVacunas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Vacunas</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!--  ... -->

                <div class="container">
                  <div class="row">
                    <div class="col-6 col-sm-4">
                      <input class="form-control form-control-sm" type="text" placeholder="Codigo CUPS" v-model="cups" />
                    </div>
                    <div class="col-6 col-sm-4">
                      <input class="form-control form-control-sm" type="text" placeholder="Nombre Biologico" v-model="nombre" />
                    </div>


                    <div class="col-6 col-sm-4">
                      <select class="form-select" aria-label="Default select example" v-model="aplicacion">
                        <option value="">Aplicacion</option>
                        <option value="I">Inyectable</option>
                        <option value="O">Oral</option>
                      </select>
                    </div>
                    <div class="col-6 col-sm-4">
                      <select class="form-select" aria-label="Default select example" v-model="diluyente">
                        <option value="">Diluyente</option>
                        <option value="1">SI</option>
                        <option value="0">NO</option>
                      </select>
                    </div>
                    <div class="col-6 col-sm-4">
                      <select class="form-select" aria-label="Default select example" v-model="jeringa">
                        <option value="">Calibre Jeringa</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                      </select>
                    </div>
                    <div class="col-6 col-sm-4">
                      <select class="form-select" aria-label="Default select example" v-model="sexo">
                        <option value="">Sexo</option>
                        <option value="A">Ambos</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                      </select>
                    </div>
                  </div>
                </div>
                {{ cups }} {{ nombre }} {{ dosis }}
                <!--  -->
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Cerrar
                </button>
                <button type="button" class="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>

</template>