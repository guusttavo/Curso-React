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

function App() {
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
    </div>
  )
}

export default App
