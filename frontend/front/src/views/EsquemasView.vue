<template>
  <h1>esquemas</h1>

  <p>
    imformacion de nombre del rango + nombre biologico +copdigo biologico dosis
    , organizado por n9mbre de rango de edad
  </p>

  <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
        role="tab" aria-controls="nav-home" aria-selected="true">
        Admin
      </button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button"
        role="tab" aria-controls="nav-profile" aria-selected="false">
        + Nuevo
      </button>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
      <br />
      <h6 class="display-6">Esquemas del sistema</h6>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Esquema</th>
              <th>Cups</th>
              <th>Biologico</th>
              <th>Diluyente</th>
              <th>Dosis</th>
              <th>Opciones</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td><button type="button" class="btn btn-primary btn-sm">edit</button></td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td><button type="button" class="btn btn-primary btn-sm">edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
      <br />
      <h6 class="display-6">Adicionar nuevo Esquema</h6>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <select class="form-select form-select-sm" aria-label="Small select example" v-model="rango">
              <option value="">Selecciona el rango</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-6">
            <select class="form-select form-select-sm" aria-label="Small select example" v-model="biologico">
              <option value="">Selecciona el biologico</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-6">
            <select class="form-select form-select-sm" aria-label="Small select example" v-model="dosisrango">
              <option value="">Selecciona la dosis del rango</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-6">
            <button type="button" class="btn btn-primary btn-sm">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rango: "",
      biologico: "",
      dosisrango: "",
    }
  }
};
</script>

<style></style>
