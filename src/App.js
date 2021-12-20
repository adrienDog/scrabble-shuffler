import { DndProvider } from 'react-dnd'
import { HTML5Backend} from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

import './App.css';
import Container from './Container';

function App({isTouch}) {
  const Backend = isTouch ? TouchBackend : HTML5Backend;
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Container appName={'*'}/>
      </DndProvider>
    </div>
  );
}

export default App;
