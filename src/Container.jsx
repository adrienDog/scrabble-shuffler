import { useState } from 'react';
import SetOfLetters from './SetOfLetters';
import UpdateLettersForm from './UpdateLettersForm';
import SavedWords from './SavedWords';

const Container = ({appName}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentWord, setCurrentWord] = useState('abcdefg');
  const [savedWords, setSavedWords] = useState(new Set());
  const [letters, setLetters] = useState(currentWord);

  const saveCurrentWord = () => {
    const newSet = new Set([...savedWords, currentWord]);
    setSavedWords(newSet);
  }

  const sortStr = (str) => {
    return str.split('').sort().join('');
  }

  const saveNewLetters = () => {
    if (sortStr(currentWord) !== sortStr(letters)) {
      setCurrentWord(letters);
      setSavedWords(new Set());
    } else {
      console.log('new letters are the same', letters);
    }
    toggleEditMode();
  }

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return (<>
    <header className="App-header">
      <div className="App-header-left">
        <button style={{float: 'left'}} className="btn"
          onClick={isEditMode ? saveNewLetters : toggleEditMode}>
          { isEditMode ? 'save' : 'new letters'}
        </button>
      </div>
      <div className="App-header-middle">
        {appName}
      </div>
      <div className="App-header-right">
        {!isEditMode && (<button style={{float: 'right'}} className="btn"
          onClick={saveCurrentWord}>
          save word
        </button>)}
      </div>
      
    </header>
    <div style={{marginTop: '30px'}}>
      {!isEditMode &&
        <SetOfLetters 
          letters={currentWord} 
          onReordered={(newWord)=>setCurrentWord(newWord)}/>}
    
      {isEditMode && 
        <UpdateLettersForm 
          text={currentWord} 
          onChange={(newWord) => setLetters(newWord)}/>}
    </div>
    {!isEditMode && (
      <div className='App-footer' style={{marginTop: '40px'}}>
      <SavedWords words={Array.from(savedWords)}/>
      </div>)}
  </>);
};

export default Container;