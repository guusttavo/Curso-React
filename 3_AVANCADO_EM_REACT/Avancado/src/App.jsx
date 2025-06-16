import './App.css'

// 2 - imagem em assets
import  night from "./assets/night.jpg";

// 3 - useState
import Data from "./components/Data";

// 4 - renderizacao de lista 
import ListRender from './components/ListRender';

// 7 - render condicional 
import ConditionalRender from './components/ConditionalRender';

// 8 - props 
import ShowUserName from './components/ShowUserName';

// 9 - desestruturando props 
import CarDetails from './components/CarDetails';

// 11- renderização de listaws com componentes 
const cars = [
    {id: 1, name: "Ferrari", color: "Amarelo", km: 0},
    {id: 2, name: "KIA", color: "Branco", km: 20000},
    {id: 2, name: "Fiat", color: "Azul", km: 32000},
];

// 12 - Fragments
import Fragment from './components/Fragment';

// 13 - Children 
import Container from './components/Container';

// 14 - funcao em prop
import ExecuteFuncion from './components/ExecuteFuncion';

// 15 - state lift
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App() {
  // 14 - funcao em prop
  function showMessage(){
    console.log('Evento do componente pai');
  }

  // 15 - state lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  return (
    <div className= "App" style={{paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assests */}
      <img src={night} alt="Outra imagem" />
      {/*3 useState */}
      <Data />
      {/*4 - render de lista  */}
      <ListRender />
      {/*7 - render condicional */}
      <ConditionalRender/>
      {/*8 - props*/}
      <ShowUserName name= "Gustavo"/>
      {/*9 - desestruturando o props */}
      <CarDetails name= "GM" km = {1000} color="Vermelho"/>
      {/*10 - reaproveitamento de componentes */}
      <CarDetails name= "Fiat" km = {123000} color="Azul"/>
      <CarDetails name= "GM" km = {111222} color="Preto"/>
      {/*11 - renderizacao de lista com componentes */}
      {cars.map((car) => (
        <CarDetails key={car.id} name={car.name} color={car.color} km={car.km}/>
      ))}
      {/*12 - Fragments */}
      <Fragment />
      {/*13 - Children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>
      {/*14 - Funcao em prop */}
      <ExecuteFuncion myFunction={showMessage}/>
      {/*15 - state lift  */}
      <Message  msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  )
}

export default App
