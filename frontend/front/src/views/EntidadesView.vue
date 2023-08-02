<template>

  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">IPSs del Sistema</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">+ Nueva</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Sucursales</button>
    </li>
 
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    <br>
      <h6 class="display-6">IPS del sistema</h6>
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
        <td><button type="button" class="btn btn-warning btn-sm">x</button><button type="button" class="btn btn-danger btn-sm">Bloq</button></td>
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
        <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Direccion"></div>
        <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="number" placeholder="Telefono"></div>
        <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="mail" placeholder="Email"></div>
        <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="number" placeholder="# Nivel"></div>
        <div class="col-12">
          <div class="input-group mb-3">
            <label class="input-group-text " for="inputGroupFile01">Cargar Logo</label>
            <input type="file" class="form-control" id="inputGroupFile01">
          </div>
        </div>
      </div>
    </div>
    <br>
    <h6 class="display-6">Administrador</h6>
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="Nombre"></div>
        <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="text" placeholder="# Documento"></div>
        <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="password" placeholder="Contraseña"></div>
        <div class="col-6 col-md-4"><input class="form-control form-control-sm" type="password"
            placeholder="Confirma Contraseña"></div>
                 <div class="col-6 col-md-4">ok check</div>
      </div>

    </div>
    <br>

    <br>
    <h6 class="display-6">Paleta de Colores</h6>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="addon-wrapping">Color Primario</span>
            <input type="color" class="form-control" placeholder="Username" aria-label="Username"
              aria-describedby="addon-wrapping">
          </div>
        </div>
        <div class="col-6">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="addon-wrapping">Color Secundario</span>
            <input type="color" class="form-control" placeholder="Username" aria-label="Username"
              aria-describedby="addon-wrapping">
          </div>
        </div>
        <div class="col-6">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="addon-wrapping">Color Terciario</span>
            <input type="color" class="form-control" placeholder="Username" aria-label="Username"
              aria-describedby="addon-wrapping">
          </div>
        </div>
        <div class="col-6">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="addon-wrapping">Color Fondo</span>
            <input type="color" class="form-control" placeholder="Username" aria-label="Username"
              aria-describedby="addon-wrapping">
          </div>
        </div>

      </div>
    </div>


    </div>
    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
  </div>






























</template>

<script>
export default {

}
</script>

<style></style>