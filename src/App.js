import { DndProvider } from 'react-dnd'
// import { HTML5Backend as Backend } from 'react-dnd-html5-backend'
import { TouchBackend as Backend } from 'react-dnd-touch-backend'

import './App.css';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Container appName={'*'}/>
      </DndProvider>
    </div>
  );
}

export default App;
