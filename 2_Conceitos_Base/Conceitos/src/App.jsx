import './App.css'

// 2- Importando componente
import FirstComponent from './components/FirstComponent'

// 5- hieraquia de componentes
import { MYComponent } from './components/MYComponent';

// 4 - template expression
import { TemplateExpression } from './components/TemplateExpression';

// 6 - Eventos 
import Events from './components/Events';
function App() {
  // 3- comentários
  return <div className='App'>
    {/*3- Comentários */}
    <h1>Fundamentos do React</h1>
    <FirstComponent/>
    <TemplateExpression/>
    <MYComponent/>
    <Events/>
  </div>;
}

export default App
