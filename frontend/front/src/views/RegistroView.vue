<template>



    <hr>
    <h1>Registro de Actividad</h1>
    <p>traer edad en dias , sexo, tipo y numdoc del paciente para validar las pestañas del accordeon </p>

    <br />
    <div class="row">
      <div class="col-10">
        <h6>Buscar un paciente</h6>
      </div>
      <div class="col-2">
        <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
          +
        </button>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-4"><select class="form-select" aria-label="Default select example">
          <option value="0">Parametro</option>
          <option value="1"># Documento</option>
          <option value="3">1 Nombre</option>
          <option value="2">1 Apellido</option>

        </select></div>
      <div class="col-5"><input class="form-control form-control-sm" type="text" placeholder="Detalle"></div>
      <div class="col-2">
        <button class="btn btn-success btn-sm">
          Buscar
        </button>
      </div>

    </div>

    <br />
    <div class="table-responsive">
      <table class="table table-sm ">
        <thead>
          <tr class="table-primary">
            <th>Opc</th>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Sexo</th>
            <th>Fnacimiento</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop">*</button></td>
            <td>cc13862306</td>
            <td>juan Vertel</td>
            <td>M</td>
            <td>05/05/1987</td>

          </tr>

        </tbody>
      </table>
    </div>

<!--  -->

  <!-- Button trigger modal -->

  <!-- Modal -->
  <div class="modal-dialog modal-dialog-scrollable">
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Esquema de Vascunacion</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="accordion" id="accordionPanelsStayOpenExample">




        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse1" aria-expanded="false" aria-controls="panelsStayOpen-collapse1">
              Recien Nacido
            </button>
          </h2>
          <div id="panelsStayOpen-collapse1" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse2" aria-expanded="false" aria-controls="panelsStayOpen-collapse2">
              2 meses
            </button>
          </h2>
          <div id="panelsStayOpen-collapse2" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>


        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse3" aria-expanded="false" aria-controls="panelsStayOpen-collapse3">
              4 Meses
            </button>
          </h2>
          <div id="panelsStayOpen-collapse3" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false" aria-controls="panelsStayOpen-collapse4">
              6 Meses
            </button>
          </h2>
          <div id="panelsStayOpen-collapse4" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false" aria-controls="panelsStayOpen-collapse5">
              7 Meses
            </button>
          </h2>
          <div id="panelsStayOpen-collapse5" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false" aria-controls="panelsStayOpen-collapse6">
              12 Meses
            </button>
          </h2>
          <div id="panelsStayOpen-collapse6" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse7" aria-expanded="false" aria-controls="panelsStayOpen-collapse7">
              18 Meses
            </button>
          </h2>
          <div id="panelsStayOpen-collapse7" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse8" aria-expanded="false" aria-controls="panelsStayOpen-collapse8">
              5 Años
            </button>
          </h2>
          <div id="panelsStayOpen-collapse8" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse9" aria-expanded="false" aria-controls="panelsStayOpen-collapse9">
              Niñas 9 a 17 Años
            </button>
          </h2>
          <div id="panelsStayOpen-collapse9" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse10" aria-expanded="false" aria-controls="panelsStayOpen-collapse10">
              Niños 1 a 13
            </button>
          </h2>
          <div id="panelsStayOpen-collapse10" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse11" aria-expanded="false" aria-controls="panelsStayOpen-collapse11">
              Mujeres Edad Fertil 10 a 49 años
            </button>
          </h2>
          <div id="panelsStayOpen-collapse11" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse12" aria-expanded="false" aria-controls="panelsStayOpen-collapse12">
              Poblacion mayor de 50
            </button>
          </h2>
          <div id="panelsStayOpen-collapse12" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse13" aria-expanded="false" aria-controls="panelsStayOpen-collapse13">
              Gestantes
            </button>
          </h2>
          <div id="panelsStayOpen-collapse13" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse14" aria-expanded="false" aria-controls="panelsStayOpen-collapse14">
              Monovalente mayor de 1 año hasta 5 años
            </button>
          </h2>
          <div id="panelsStayOpen-collapse14" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
              adds the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <br>
        <br>
      </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  
        </div>
      </div>
    </div>
  </div>
  </div>

























    <!-- modal agregar paciente-->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Pacientes</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!--  ... -->
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse1" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapse1">
                    Datos personales
                  </button>
                </h2>
                <div id="panelsStayOpen-collapse1" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                    <div class="container">
                      <div class="row mb-3 parametrosbusqueda">
                        <div class="col-6">
                          <select class="form-select" aria-label="Default select example" v-model="tipodoc"
                            data-toggle="tooltip" title="Fecha de Nacimiento">
                            <option value="">Tipo Documento</option>
                            <option value="CCM">CC Madre</option>
                            <option value="RC">Registro Civil</option>
                            <option value="TI">Tarjeta de identidad</option>
                            <option value="CC">Cedula de Ciudadania</option>
                            <option value="CE">Cedula de Extrangeria</option>
                            <option value="PA">Pasaporte</option>
                          </select>
                        </div>
                        <div class="col-6">

                          <input class="form-control form-control-sm" type="text" placeholder="Numero documento" selected
                            v-model="numdoc" />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-6 col-sm-4">
                          <input class="form-control form-control-sm" type="text" placeholder="Nombre1" v-model="name1" />
                        </div>
                        <div class="col-6 col-sm-4">
                          <input class="form-control form-control-sm" type="text" placeholder="Nombre2" v-model="name2" />
                        </div>
                        <div class="col-6 col-sm-4">
                          <input class="form-control form-control-sm" type="text" placeholder="Apellido1"
                            v-model="apell1" />
                        </div>
                        <div class="col-6 col-sm-4">
                          <input class="form-control form-control-sm" type="text" placeholder="Apellido2"
                            v-model="apell2" />
                        </div>
                        <div class="col-6 col-sm-4">
                          <select class="form-select" aria-label="Default select example" v-model="sexo">
                            <option value="">Sexo</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                            <option value="I">Indeterminado</option>
                          </select>
                        </div>
                        <div class="col-6 col-sm-4">
                          <input class="form-control form-control-sm" type="date" placeholder="Fecha nacimiento"
                            v-model="fnacimiento" />
                        </div>
                        <div class="col-6 col-sm-4">
                          <input class="form-control form-control-sm" type="text" placeholder="Telefono" v-model="tel" />
                        </div>
                        <div class="col-6 col-sm-8">
                          <input class="form-control form-control-sm" type="text" placeholder="Direccion" v-model="dir" />
                        </div>




                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse2" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapse2">
                    Datos complementarios
                  </button>
                </h2>
                <div id="panelsStayOpen-collapse2" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <div class="container">
                      <h1>no disponible en este prototipo</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse3" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapse3">
                    Antecedentes Medicos
                  </button>
                </h2>
                <div id="panelsStayOpen-collapse3" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <div class="container">
                      <h1>no disponible en este prototipo</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapse4">
                    Condicion Usuaria
                  </button>
                </h2>
                <div id="panelsStayOpen-collapse4" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <h1>no disponible en este prototipo</h1>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapse5">
                    Historico de Antecedentes
                  </button>
                </h2>
                <div id="panelsStayOpen-collapse5" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <h1>no disponible en este prototipo</h1>
                  </div>
                </div>
              </div>
              <div class="accordion-item" v-if="tipodoc === 'CCM' || tipodoc === 'RC' || tipodoc === 'TI'">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapse6">
                    Datos de la Madre
                  </button>
                </h2>
                <div id="panelsStayOpen-collapse6" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <h1>no disponible en este prototipo</h1>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse7" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapse7">
                    Datos del Cuidador
                  </button>
                </h2>
                <div id="panelsStayOpen-collapse7" class="accordion-collapse collapse">
                  <div class="accordion-body">
                  <h1>no disponible en este prototipo</h1>
                </div>
              </div>
            </div>

          </div>

          <!--  -->

          <!--  -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Cerrar
          </button>
          <button type="button" class="btn btn-primary">Guardar</button>
        </div>
        {{ tipodoc }} {{ numdoc }}
      </div>
    </div>
  </div>

</template>

<script>


export default {
  data() {
    return {
      data: [],
      tipodoc: '',
      numdoc: '',
      sexo: '',
    }
  }

};
</script>

<style>input {
  margin: 5px !important;
}


select.form-select,
input.form-control {
  font-size: 0.7rem !important;
  padding: 4px;
  margin: 5px !important;
}


.accordion-button {
  font-size: 0.7rem !important;
  padding: 5px !important;
}

.accordion-body {
  font-size: 0.6rem !important;
  padding: 5px !important;
}

.parametrosbusqueda {
  background-color: rgb(239, 239, 233);
}</style>
