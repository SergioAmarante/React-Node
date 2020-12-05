import { useState } from "react";
import imgfinal from "../componentes/images/Blu1.png"
import '../componentes/paginafinal/paginafinal.css'
function Contato(){
    async function registerComentario(evento){
        evento.preventDefault();
        let formData = new FormData (evento.target);
        const url = 'http://localhost/entrega_projetos/back/contato-guarda.php';

        fetch(url, {
            method: "POST", 
            body: formData 
        }).then((response) => console.log(response.json())).then((dados) => { 
            console.log("euu", "dados");
        });
    }
    return(
        <div Class="container formMensagem">
        <div class="row justify-content-around">
            <div class="col-12" >
                 <h1> Quer ganhar um Blusão Tech-Shop?</h1>
                 <h1> Preencha e concorra!</h1>
            </div>
            <div class="col ">
                <img src={imgfinal} width="300px" />
            </div>
            <div class="col-12">
                    <h1><b Formulario de inscrição></b></h1>
                        <form onSubmit = {registerComentario} >
                            <div class="form-group col-md-6 offset-md-3 my-1">
                                <label for="exampleFormControlInput1">Nome</label>
                                <input type="text" class="form-control "id="nome" name="nome" placeholder="Digite seu nome aqui"/><br/><br/>
                            </div>   
                            <div class="form-group col-md-6 offset-md-3">
                                <label for="exampleFormControlInput1">Email</label>
                                <input type="email" class="form-control " name="email" id="email" placeholder="nome@exemplo.com"/>
                            </div>
                            <div class="form-group col-md-6 offset-md-3">
                                <label for="exampleFormControlTextarea1">Comentario</label>
                                <textarea class="form-control " name="comentario" id="comentario"></textarea>
                            </div>
                                <button type="submit" class="btn btn-primary col-md-6 offset-md-3 my-3">Enviar</button>
                        </form>
            </div>
        </div>
    </div>
    )
}

export default Contato;