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
                    <div class="row">
                      <div class="col-6 col-sm-3">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Codigo CUPS"
                        />
                      </div>
                      <div class="col-6 col-sm-3">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Nombre Biologico"
                        />
                      </div>
                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Dosis Aplicables</option>
                          <option value="1">U</option>
                          <option value="2">1-2</option>
                          <option value="3">1-2-1r</option>
                          <option value="4">1-2-1r-2r</option>
                        </select>
                      </div>

                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Aplicacion</option>
                          <option value="I">Inyectable</option>
                          <option value="O">Oral</option>
                        </select>
                      </div>
                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Diluyente</option>
                          <option value="1">SI</option>
                          <option value="0">NO</option>
                        </select>
                      </div>
                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Calibre Jeringa</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                        </select>
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
                    <div class="row">
                      <div class="col-6 col-sm-3">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Codigo CUPS"
                        />
                      </div>
                      <div class="col-6 col-sm-3">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Nombre Biologico"
                        />
                      </div>
                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Dosis Aplicables</option>
                          <option value="1">U</option>
                          <option value="2">1-2</option>
                          <option value="3">1-2-1r</option>
                          <option value="4">1-2-1r-2r</option>
                        </select>
                      </div>

                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Aplicacion</option>
                          <option value="I">Inyectable</option>
                          <option value="O">Oral</option>
                        </select>
                      </div>
                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Diluyente</option>
                          <option value="1">SI</option>
                          <option value="0">NO</option>
                        </select>
                      </div>
                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Calibre Jeringa</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                        </select>
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
                    <div class="row">
                      <div class="col-6 col-sm-3">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Codigo CUPS"
                        />
                      </div>
                      <div class="col-6 col-sm-3">
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Nombre Biologico"
                        />
                      </div>
                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Dosis Aplicables</option>
                          <option value="1">U</option>
                          <option value="2">1-2</option>
                          <option value="3">1-2-1r</option>
                          <option value="4">1-2-1r-2r</option>
                        </select>
                      </div>

                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Aplicacion</option>
                          <option value="I">Inyectable</option>
                          <option value="O">Oral</option>
                        </select>
                      </div>
                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Diluyente</option>
                          <option value="1">SI</option>
                          <option value="0">NO</option>
                        </select>
                      </div>
                      <div class="col-6 col-sm-3">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Calibre Jeringa</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false" aria-controls="panelsStayOpen-collapse4">
                  Condicion Usuaria
                </button>
              </h2>
              <div id="panelsStayOpen-collapse4" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false" aria-controls="panelsStayOpen-collapse5">
                Historico de Antecedentes
                </button>
              </h2>
              <div id="panelsStayOpen-collapse5" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false" aria-controls="panelsStayOpen-collapse6">
                 Datos de la Madre
                </button>
              </h2>
              <div id="panelsStayOpen-collapse6" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse7" aria-expanded="false" aria-controls="panelsStayOpen-collapse7">
               Datos del Cuidador
                </button>
              </h2>
              <div id="panelsStayOpen-collapse7" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <!--    <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse8" aria-expanded="false" aria-controls="panelsStayOpen-collapse8">
                  Datos de Vacunador
                </button>
              </h2>
              <div id="panelsStayOpen-collapse8" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
         <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse9" aria-expanded="false" aria-controls="panelsStayOpen-collapse9">
                  Accordion Item #2
                </button>
              </h2>
              <div id="panelsStayOpen-collapse9" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse10" aria-expanded="false" aria-controls="panelsStayOpen-collapse10">
                  Accordion Item #2
                </button>
              </h2>
              <div id="panelsStayOpen-collapse10" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div> -->
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
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
