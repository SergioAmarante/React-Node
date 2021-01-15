import React from 'react'

const Forms = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    comentario:""
  })

  const [response, setResponse] = React.useState(null);



  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
    console.log(form)
  }
  // enviando nossos dados para a API
  function handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:3005/contato', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // transformando nosso dado em JSON
      body: JSON.stringify(form)
    }).then((res) => {
      setResponse(res);
    })
  }

  return (
    <div>

                        <h1><b Formulario de inscrição></b></h1>
                        <form onSubmit={handleSubmit} >
                            <div class="form-group col-md-6 offset-md-3 my-1">
                                <label for="exampleFormControlInput1">Nome</label>
                                <input onChange={handleChange} value={form.nome} type="text" class="form-control "id="nome" name="nome" placeholder="Digite seu nome aqui"/><br/><br/>
                            </div>   
                            <div class="form-group col-md-6 offset-md-3">
                                <label for="exampleFormControlInput1">Email</label>
                                <input onChange={handleChange} value={form.email}  type="email" class="form-control " name="email" id="email" placeholder="nome@exemplo.com"/>
                            </div>
                            <div class="form-group col-md-6 offset-md-3">
                                <label for="exampleFormControlTextarea1">Comentario</label>
                                <textarea onChange={handleChange} value={form.comentario} class="form-control " name="comentario" id="comentario"></textarea>
                            </div>
                                <button type="submit" class="btn btn-primary col-md-6 offset-md-3 my-3">Enviar</button>
                        </form>





     
      {response && response.ok && <p>Formulario enviado</p>}
         {/* se existir response, e o response for a resposta esperada ele execulta */}
    </div>
  )
}

export default Forms
