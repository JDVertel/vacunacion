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
            <th> <strong>NIT</strong></th>
            <th> <strong>NOMBRE</strong></th>
            <th> <strong>ESTADO</strong></th>
            <th> <strong>OPCIONES</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entidad, index) in BDentidades" :key="index">
            <th>{{ entidad.nit }}</th>
            <td>{{ entidad.nombre }}</td>
            <td>{{ entidad.estado }}</td>
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
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Nombre"
              v-model="nombre"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="# Nit"
              v-model="nit"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Ciudad"
              v-model="ciudad"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Direccion"
              v-model="direccion">
          </div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="number" placeholder="Telefono"
              v-model="telefono">
          </div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="mail" placeholder="Email"
              v-model="email"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="number" placeholder="# Nivel"
              v-model="nivel">
          </div>

        </div>
      </div>
      <br>
      <h6 class="display-6">Administrador</h6>
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Nombre"
              v-model="admin_name"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="# Documento"
              v-model="admin_doc">
          </div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="password" placeholder="Contraseña"
              v-model="pass1"></div>
          <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="password"
              placeholder="Confirma Contraseña" v-model="pass2"></div>
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
                  <input type="color" class="form-control" v-model="color1" aria-describedby="addon-wrapping">
                </div>
              </div>
              <div class="col-6">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="addon-wrapping">2 Color</span>
                  <input type="color" class="form-control" v-model="color2" aria-describedby="addon-wrapping">
                </div>
              </div>
              <div class="col-6">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="addon-wrapping">3 Color</span>
                  <input type="color" class="form-control" v-model="color3" aria-describedby="addon-wrapping">
                </div>
              </div>
              <div class="col-6">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="addon-wrapping">Fondo</span>
                  <input type="color" class="form-control" v-model="color4" aria-describedby="addon-wrapping">
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
              <button class="btn btn-outline-primary" @click="guardar_paciente">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
      <br>



      <select class="form-select form-select-sm" aria-label="Default select example" v-model="select_ent">
        <option selected value="0">Seleccione la Entidad </option>
        <option value="1">Esebarranca</option>
        <option value="2">Clinica san jose</option>
        <option value="3">Clinica comuneros</option>
      </select>

      <div class="container">
        <br>
        <div class="container" v-if="select_ent > 0">
          <p class="d-inline-flex gap-1">
            <button class="btn btn-outline-success btn-sm" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              +Nueva
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">

              <!-- sucursales --------------------------------------------------------------------------------------------------- -->

              <h6 class="display-6">Datos de la nueva Sucursal</h6>

              <div class="container">
                <div class="row">
                  <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text"
                      placeholder="Nombre sucursal" v-model="s_nombre">
                  </div>

                  <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Ciudad"
                      v-model="s_ciudad">
                  </div>
                  <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text"
                      placeholder="Direccion" v-model="s_direccion">
                  </div>
                  <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="number"
                      placeholder="Telefono" v-model="s_telefono">
                  </div>
                  <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="mail" placeholder="Email"
                      v-model="s_email">
                  </div>


                </div>

                <br>
                <h6>Supervisor</h6>

                <div class="row">
                  <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text"
                      placeholder="Usuario" v-model="s_user">
                  </div>

                  <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="password"
                      placeholder="Contraseña" v-model="pass1"></div>
                  <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="password"
                      placeholder="Confirma Contraseña" v-model="pass2"></div>
                  <div class="col-6 col-md-4"></div>
                </div>
                <br>
                <div class="row">
                  <div class="col"> <button type="button" class="btn btn-outline-primary" @click="guardar_sucursal"
                      v-if="pass1 === pass2 && pass1 != ''">Guardar</button></div>

                </div>
              </div>
            </div>

          </div>

          <div class="container">
            <hr>

            <h6>Sucursales del la Entidad</h6>
            <table class="table table-sm">
              <thead>
                <tr>
                  <th> <strong>ID</strong></th>
                  <th> <strong>NOMBRE</strong></th>
                  <th> <strong>CUPS</strong></th>
                  <th> <strong>DIRECCION</strong></th>
                  <th>Estado</th>
                  <th>Opc</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td><button type="button" class="btn btn-outline-primary btn-sm">o
                    </button></td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td><button type="button" class="btn btn-outline-primary btn-sm">o
                    </button></td>
                </tr>
                <tr>
                  <th>3</th>
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


        {{ sucursal }}



      </div>


    </div>
    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...
    </div>
  </div>
  <footer>
    <div class="container">
  
         <RouterLink to="/dashboard"><button type="button" class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></button>       </RouterLink>
    </div>
  </footer>
</template>

<script>
export default {

  data() {
    return {
      select_ent: '0',
      /* ---------- */
      entidad: [],
      nombre: '',
      ciudad: '',
      direccion: '',
      telefono: '',
      email: '',
      nivel: '',
      admin_name: '',
      admin_doc: '',
      pass1: '',
      pass2: '',
      /* ------------ */
      sucursal: [],



      /* -----------------------BD */
      BDentidades: [
        {
          nit: '123456',
          nombre: 'cajasan',
          estado: 'activo'

        },
        {
          nit: '654321',
          nombre: 'esebarranca',
          estado: 'activo'

        },
        {
          nit: '19854',
          nombre: 'clinica san jose',
          estado: 'inactivo'

        }
      ]

    }
  },


  methods: {


    guardar_paciente() {
      console.log("metodo guardar")
      //crear un array con todoss los elementos

    },

    guardar_entidad() {
      this.entidad.push({
        nombre: this.nombre,
        ciudad: this.ciudad,
        direccion: this.direccion,
        telefono: this.telefono,
        email: this.email,
        nivel: this.nivel
      });
    },



    guardar_sucursal() {

      console.log("guardando sucursal"),
        this.sucursal.push({
          id_entidad: this.select_ent,
          s_nombre: this.s_nombre,
          s_ciudad: this.s_ciudad,
          s_direccion: this.s_direccion,
          s_telefono: this.s_telefono,
          s_email: this.s_email,
          /* -------------------credenciales */
          s_user: this.s_user,
          s_pass: this.pass2,


        })


    }
  }

}

</script>

<style></style>