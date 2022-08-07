<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo-sigma.png" width="70" height="30" class="d-inline-block align-top" alt="">
        </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link active" to="/Home">Home</router-link>
          <router-link class="nav-item nav-link active" to="/Cadastro">Cadastro</router-link>
          <router-link class="nav-item nav-link active" to="/Login">Login</router-link>
          <router-link class="nav-item nav-link active" to="/Logout">Logout</router-link>
        </div>
      </div>
    </nav> 


</div>


</template>

<script>
export default {
  name: "NavComponente"
};
</script>

<style>

</style>
