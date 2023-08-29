<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
        role="tab" aria-controls="home-tab-pane" aria-selected="true">Entidades</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button"
        role="tab" aria-controls="profile-tab-pane" aria-selected="false">+ Nueva</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button"
        role="tab" aria-controls="contact-tab-pane" aria-selected="false">Sucursales</button>
    </li>

  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
      <br>
      <h6 class="display-6">Entidades</h6>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nit</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>829001846-6</th>
            <td>Ese Barrancabermeja</td>
            <td>Activa</td>
            <td><button type="button" class="btn btn-warning btn-sm">x</button><button type="button"
                class="btn btn-danger btn-sm">Bloq</button></td>
          </tr>

        </tbody>
      </table>



    </div>
    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">


      <br>
      <h6 class="display-6">Datos de la Entidad</h6>

      <div class="container">
        <div class="row">
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Nombre"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="# Nit"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Ciudad"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Direccion">
          </div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="number" placeholder="Telefono">
          </div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="mail" placeholder="Email"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="number" placeholder="# Nivel">
          </div>

        </div>
      </div>
      <br>
      <h6 class="display-6">Administrador</h6>
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Nombre"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="# Documento">
          </div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="password"
              placeholder="Contraseña"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="password"
              placeholder="Confirma Contraseña"></div>
          <div class="col-6 col-md-4">ok check</div>
        </div>

      </div>
      <br>

      <br>
      <h6 class="display-6">Imagen Corporativa</h6>
      <div class="container">
        <div class="row">
          <div class="col-9">


            <div class="row">
              <div class="col-6">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="addon-wrapping">1 Color</span>
                  <input type="color" class="form-control" placeholder="Username" aria-label="Username"
                    aria-describedby="addon-wrapping">
                </div>
              </div>
              <div class="col-6">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="addon-wrapping">2 Color</span>
                  <input type="color" class="form-control" placeholder="Username" aria-label="Username"
                    aria-describedby="addon-wrapping">
                </div>
              </div>
              <div class="col-6">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="addon-wrapping">3 Color</span>
                  <input type="color" class="form-control" placeholder="Username" aria-label="Username"
                    aria-describedby="addon-wrapping">
                </div>
              </div>
              <div class="col-6">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="addon-wrapping">Fondo</span>
                  <input type="color" class="form-control" placeholder="Username" aria-label="Username"
                    aria-describedby="addon-wrapping">
                </div>
              </div>

            </div>


          </div>
          <div class="col-3">
            <img src="./../img/2.png" class="img-fluid" alt="...">
          </div>
          <div class="row">
            <div class="col-12">
              <div class="input-group input-group-sm  mb-3" sm>
                <label class="input-group-text " for="inputGroupFile01">Cargar Logo</label>
                <input type="file" class="form-control" id="inputGroupFile01">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <button>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
      <br>
      <select class="form-select form-select-sm" aria-label="Default select example" v-model="select_ent">
        <option selected value="0">Seleccione la Entidad</option>
        <option value="1">Esebarranca</option>
        <option value="2">Clinica san jose</option>
        <option value="3">Clinica comuneros</option>
      </select>
      <div class="container">



        <br>

        <p class="d-inline-flex gap-1">

          <button class="btn btn-outline-success btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample" v-if="select_ent > 0">
            +Nueva
          </button>


        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">



            <h6 class="display-6">Datos de la nueva Sucursal</h6>

            <div class="container">
              <div class="row">
                <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text"
                    placeholder="Nombre sucursal">
                </div>

                <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Ciudad">
                </div>
                <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text"
                    placeholder="Direccion">
                </div>
                <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="number"
                    placeholder="Telefono">
                </div>
                <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="mail" placeholder="Email">
                </div>
                <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="mail" placeholder="Email">
                </div>

              </div>

              <br>
              <h6>Supervisor</h6>

              <div class="row">
                <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Nombre">
                </div>
                <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text"
                    placeholder="# Documento">
                </div>
                <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="password"
                    placeholder="Contraseña"></div>
                <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="password"
                    placeholder="Confirma Contraseña"></div>
                <div class="col-6 col-md-4">ok check</div>
              </div>
              <br>
              <div class="row">
                <div class="col"> <button type="button" class="btn btn-outline-primary">Guardar</button></div>

              </div>
            </div>


          </div>
        </div>
      </div>




      <br>

      <hr>
      <div class="container">


        <h6>Sucursales del la Entidad</h6>
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Direccion</th>
              <th>Estado</th>
              <th>Opc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
               <td>@mdo</td>
               <td><button type="button" class="btn btn-outline-primary btn-sm">o
               </button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
               <td>@mdo</td>
                   <td><button type="button" class="btn btn-outline-primary btn-sm">o
                 </button></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
               <td>@mdo</td>
                   <td><button type="button" class="btn btn-outline-primary btn-sm">o
                 </button></td>
            </tr>
          </tbody>
        </table>
      </div>




    </div>
    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      select_ent:'',
    }
  }
}
</script>

<style></style>