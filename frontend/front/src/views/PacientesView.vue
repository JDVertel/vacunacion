<template>
  <h1>pacientes</h1>

  <br />
  <div class="row">
    <div class="col-10"><h6>Buscar un paciente</h6></div>
    <div class="col-2">
      <button
        class="btn btn-success btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        +
      </button>
    </div>
  </div>

  <br />
  <div class="table-responsive">
    <table class="table table-sm table-bordered">
      <thead>
        <tr class="table-primary">
          <th scope="col">CUPS</th>
          <th scope="col">Nombre</th>
          <th scope="col">Opc</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td><button class="btn btn-warning btn-sm">edit</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td><button class="btn btn-warning btn-sm">edit</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td><button class="btn btn-warning btn-sm">edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Pacientes</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!--  ... -->
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapse1"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapse1"
                >
                  Datos personales
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapse1"
                class="accordion-collapse collapse show"
              >
                <div class="accordion-body">
                  <div class="container">
                    <div class="row mb-3">
                      <div class="col-6">
                        <select
                          class="form-select"
                          aria-label="Default select example" 
                          selected v-model="data.tipodoc"
                        >
                          <option>Tipo Documento</option>
                          <option value="CCM">CC Madre</option>
                          <option value="RC">Registro Civil</option>
                          <option value="TI">Tarjeta de identidad</option>
                          <option value="CC">Cedula de Ciudadania</option>
                          <option value="CE">Cedula de Extrangeria</option>
                          <option value="PA">Pasaporte</option>
                        </select>
                      </div>
                      <div class="col-6">
                    
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Numero documento"
                          selected v-model="data.numdoc"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6 col-sm-4">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Nombre1"
                          v-model="data.name1"
                        />
                      </div>
                      <div class="col-6 col-sm-4">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Nombre2"
                          v-model="data.name2"
                        />
                      </div>
                      <div class="col-6 col-sm-4">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Apellido1"
                          v-model="data.apell1"
                        />
                      </div>
                      <div class="col-6 col-sm-4">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Apellido2"
                          v-model="data.apell2"
                        />
                      </div>
                      <div class="col-6 col-sm-4">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="data.sexo"
                        >
                          <option selected>Sexo</option>
                          <option value="M">Masculino</option>
                          <option value="F">Femenino</option>
                          <option value="I">Indeterminado</option>
                        </select>
                      </div>
                      <div class="col-6 col-sm-4">
                        <input
                          class="form-control form-control-sm"
                          type="date"
                          placeholder="Fecha nacimiento"
                          v-model="data.fnaciiento"
                        />
                      </div>
                      <div class="col-6 col-sm-4">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Telefono"
                          v-model="data.tel"
                        />
                      </div>
                      <div class="col-6 col-sm-8">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Direccion"
                          v-model="data.dir"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapse2"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapse2"
                >
                  Datos complementarios
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapse2"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <div class="container">
                <h1>no disponible en este prototipo</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapse3"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapse3"
                >
                  Antecedentes Medicos
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapse3"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <div class="container">
                    <h1>no disponible en este prototipo</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapse4"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapse4"
                >
                  Condicion Usuaria
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapse4"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <h1>no disponible en este prototipo</h1>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapse5"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapse5"
                >
                  Historico de Antecedentes
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapse5"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <h1>no disponible en este prototipo</h1>
                </div>
              </div>
            </div>
            <div class="accordion-item" v-if="data.tipodoc==='CCM' || data.tipodoc==='RC' || data.tipodoc==='TI'">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapse6"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapse6"
                >
                  Datos de la Madre
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapse6"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <h1>no disponible en este prototipo</h1>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapse7"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapse7"
                >
                  Datos del Cuidador
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapse7"
                class="accordion-collapse collapse"
              >
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
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
          <button type="button" class="btn btn-primary">Guardar</button>
        </div>
      {{ data.tipodoc }} {{ data.numdoc }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    data:[]
  }
}

};
</script>

<style scoped>
input{
margin:5px!important;
}


select.form-select{
font-size: 0.9rem!important;
padding:4px;
margin:5px!important;
}
</style>
