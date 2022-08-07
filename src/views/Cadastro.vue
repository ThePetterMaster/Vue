<template>
  <div class="hello">
  <NavComponente/>
    <form  @submit="createCadastro" class="d-flex justify-content-center align-items-center">
      <div class="form-group">
        <h1 class="d-flex justify-content-center align-items-center">Faça Cadastro</h1>
        <label for="fnome">Nome:</label><br>
        <input class="form-control" type="text" id="nome" name="nome" v-model="nome" ><br>
        <label for="lsobrenome">Sobrenome:</label><br>
        <input class="form-control" type="text" id="sobrenome" name="sobrenome" v-model="sobrenome" ><br><br>
        <input  type="submit" class="btn btn-primary" value="Submit">
      </div>
    </form> 
  </div>
</template>

<script>
export default {
  name: 'CadastroTela',
  data(){
    return{
      nome:null,
      sobrenome:null
    }
  },
  props: {
    msg: String
  },
  methods:{
    async createCadastro(e){
      e.preventDefault();
      const data ={
        nome:this.nome,
        sobrenome:this.sobrenome
      }
      const dataJson=JSON.stringify(data);
       const req = await fetch("http://localhost:8081/cadastro",{
        mode: 'no-cors',
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:dataJson
       })
       const res= await req.json();
       console.log(res);
    },
    limparLocalStorage(){
        console.log("removeu local")
        localStorage.removeItem("token");
    },

  },
}
</script>

<style scoped>

</style>
