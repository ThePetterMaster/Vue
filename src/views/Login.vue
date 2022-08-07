<template>
  <div class="hello">
    <NavComponente/>
    <form  @submit="login"  class="d-flex justify-content-center align-items-center">
      <div class="form-group">
        <h1 class="d-flex justify-content-center align-items-center" >Faça Login</h1>
        <label for="fEmail">Email:</label><br>
        <input type="text" class="form-control" id="nome" name="nome" v-model="email" ><br>
        <label for="lsenha">Senha:</label><br>
        <input type="password" class="form-control" id="senha" name="senha" v-model="senha" ><br><br>
        <input type="submit" class="btn btn-primary" data-toggle="button" value="Submit">
      </div>

    </form> 
  </div>
</template>

<script>
import ConsultaService from '../service/ConsultaService';
export default {
  name: 'LoginTela',
  data(){
    return{
      email:null,
      senha:null
    }
  },
  props: {
    msg: String
  },
  methods:{

    async login(e){
      e.preventDefault();
      const data ={
        email:this.email,
        senha:this.senha
      }
      const dataJson=JSON.stringify(data);
       const req = await fetch("https://forum-api-neto.herokuapp.com/auth",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:dataJson
       })
       const res= await req.json();
       
       console.log(res);
        
        var token=res.token
        var jsonPayload = ConsultaService.parseJwt(token)
        localStorage.setItem("token", res.token);
   
        console.log(jsonPayload)
       
       this.$router.push("/Home");
    }
  }
}
</script>

<style >
</style>
