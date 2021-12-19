import { useState } from 'react';
import SetOfLetters from './SetOfLetters';
import UpdateLettersForm from './UpdateLettersForm';

const Container = ({appName}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [letters, setLetters] = useState('abcdefg');

  return (<>
    <header className="App-header">
      <div className="App-header-left">

      </div>
      <div className="App-header-middle">
        {appName}
      </div>
      <div className="App-header-right">
        <a href="#" style={{float: 'right'}} className="btn"
          onClick={() => setIsEditMode(!isEditMode)}>
          { isEditMode ? 'save' : 'edit'}
        </a>
      </div>
      
    </header>
    <div style={{marginTop: '20px'}}>
      {!isEditMode &&
        <SetOfLetters letters={letters} />}
    
      {isEditMode && 
        <UpdateLettersForm 
          text={letters} 
          onChange={(newLetters) => setLetters(newLetters)}/
        >}
    </div>
  </>);
};

export default Container;