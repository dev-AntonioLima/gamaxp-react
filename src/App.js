import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App(props) {
const [ usuario, setUsuario ] = useState('');

function handlePesquisa() {
  axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response));
}

return (

  <> 


<input placeholder="Usuário" id="usuario" value={ usuario } className="usuario" onChange={e => setUsuario(e.target.value)}/> 
<button type="button" onClick={handlePesquisa}>Pesquisar</button>
</>
);
}

export default App;
