import axios from "axios";
import authHeader from './auth/auth-header';
class ConsultaService{
    tokenValido(token) {
        const tokenFormatado = this.parseJwt(token);
        const expEmSegundos = tokenFormatado.exp * 1000;
    
        if (expEmSegundos >= new Date().getTime()) {
    
          return true;
        }
        return false;
      }
      parseJwt(token) {
        const prefixo = "Bearer ";
        if (token.startsWith(prefixo)) {
          token = token.substring(0, prefixo.length);
        }
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          window
            .atob(base64)
            .split("")
            .map(function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );
        return JSON.parse(jsonPayload);
      }
       refreshToken() {
         axios
           .get("https://forum-api-neto.herokuapp.com/auth", { headers: authHeader() })
           .then((response) => {
             if (response.data.token) {
               localStorage.setItem("user", JSON.stringify(response.data));
             }
             return response.data;
           });
    
         return "ok";
       }
}

export default new ConsultaService();