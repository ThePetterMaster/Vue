<template>
<div class="hello">
  <NavComponente/>

  <section class="d-flex justify-content-center align-items-center">
    <h1>Home</h1>
  </section>
</div>


</template>

<script>
import ConsultaService from '../service/ConsultaService';
export default {
  name: 'HomeTela',
  data(){
    return{
    }
  },
  props: {
    msg: String
  },
  methods:{
    auth(){
      var token=localStorage.getItem("token")
      if(token&& ConsultaService.tokenValido(token)){
        console.log("autenticado")
        console.log(ConsultaService.tokenValido(token))
      }else{
        this.$router.push("/Login");
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.auth();
    });
  },

}
</script>

<style>
section{
  height: 80vh;
}

</style>
