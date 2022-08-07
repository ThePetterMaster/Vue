<template>
<div class="hello">
  <NavComponente/>

  <section class="d-flex justify-content-center align-items-center">
    <h1>Usuario deslogado</h1>
  </section>
</div>


</template>

<script>
export default {
  name: 'LogoutTela',
  data(){
    return{
    }
  },
  props: {
    msg: String
  },
  methods:{
    limparLocalStorage(){
      console.log("removeu local")
      localStorage.removeItem("token");
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.limparLocalStorage();
    });
  },

}
</script>

<style>
section{
  height: 80vh;
}

</style>
