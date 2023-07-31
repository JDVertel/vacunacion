<template>
  <div class="container">
    <dir class="row">
      <div class="col-6"><img src="../img/logo.png" alt="" class="logo" /></div>
    </dir>
    <div>
      <h6 class="display-6 text-center">Dashboard</h6>
    </div>
    <br>

    <div class="row">
      <div class="col-6 col-md-4">
        <div class="card super" >
          <v-icon name="bi-truck" class="card-img-top iconos" />
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/vacunas">++Vacunas</RouterLink>
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="card super" >
          <v-icon name="la-product-hunt" class="card-img-top iconos" />
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/esquemas">++Esquemas</RouterLink>
            </p>
          </div>
        </div>
      </div>
            <div class="col-6 col-md-4">
          <div class="card super">
            <v-icon name="md-output-outlined" class="card-img-top iconos" />
            <div class="card-body">
              <p class="card-text">
                <RouterLink to="/entidades">++Entidades </RouterLink>
              </p>
            </div>
          </div>
        </div>

      <div class="col-6 col-md-4">
        <div class="card user" >
          <v-icon name="ri-customer-service-2-line" class="card-img-top iconos" />
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/registro">Registro</RouterLink>
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="card user" >
          <v-icon name="hi-solid-users" class="card-img-top iconos" />
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/aplicaciones">Aplicaciones</RouterLink>
            </p>
          </div>
        </div>
      </div>

    <div class="col-6 col-md-4">
          <div class="card user" >
            <v-icon name="md-bordercolor-outlined" class="card-img-top iconos" />
            <div class="card-body">
              <p class="card-text">
                <RouterLink to="/informes">Informes</RouterLink>
              </p>
            </div>
          </div>
        </div>
  
            <div class="col-6 col-md-4">
          <div class="card admin" >
            <v-icon name="si-materialdesignicons" class="card-img-top iconos" />
            <div class="card-body">
              <p class="card-text">
                <RouterLink to="/neveras">+Neveras</RouterLink>
              </p>
            </div>
          </div>
        </div>
      <div class="col-6 col-md-4">
          <div class="card admin" >
            <v-icon name="hi-document-report" class="card-img-top iconos" />
            <div class="card-body">
              <p class="card-text">
                <RouterLink to="/usuarios">+Usuarios</RouterLink>
              </p>
            </div>
          </div>
        </div>
    
      <div class="col-6 col-md-4">
        <div class="card admin" >
          <v-icon name="md-shoppingcart-outlined" class="card-img-top iconos" />
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/administracion">+Admin</RouterLink>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script></script>

<style scoped>
.admin{
background-color: #D4C110;
}
.user{
background-color:#B6DEDE;
}
.super{
background-color:#35D41D;
}




.card {
  margin: 2px !important;
}

.iconos {
  margin-top: 20px;
  scale: 2.5;

}

.card-body {
  text-align: center !important;
}
</style>
