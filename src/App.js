import { useState } from 'react';

function App() {
  const [nome, setNome] = useState(''); //as variáveis que sersão utilizadas
  const [data, setData] = useState(''); 
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});
  
  function Monoglop(e) { //função da página ao preencher o formulário
    e.preventDefault();
    alert('Registrado com sucesso');
    setUser({
      nome: nome,
      data: data,
      idade: idade,

    })

  }

  return (
    //a intereção do usuário na página
    <div>
      <form onSubmit={Monoglop}>
        <label>Nome: </label>
        <br/>
        <input placeholder='Digite seu nome aqui' value={nome} onChange={(e) => setNome(e.target.value)}/>
        <br/>
        <label>Data de nascimento: </label>
        <br/>
        <input placeholder='Digite sua data de nascimento aqui' value={data} onChange={(e) => setData(e.target.value)}/>
        <br/>
        <label>Idade: </label>
        <br/>
        <input placeholder='Digite sua data de nascimento aqui' value={idade} onChange={(e) => setIdade(e.target.value)}/>
        <br/>
        <button type='submit'>Enviar</button>

      </form>

      <br/><br/>

      <div className='register'>
        <span>Bem vindo: {user.nome}</span>
        <br/>
        <span>A data de nascimento: {user.data} foi registrada</span>
        <br/>
        <span>Sua idade de: {user.idade} foi registrada</span>
        <br/>

      </div>

    </div>
  );
}

export default App;






