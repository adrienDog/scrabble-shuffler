import { useState } from 'react';
import './SavedWords.css';

const wordStyle = {
  'padding': '4px 6px',
  'marginRight': '6px',
  'display': 'inline-block',
  'border': '1px solid #ddd',
  'borderRadius': '2px',
  'color': '#555',
}

const SavedWords = ({words}) => {
  const [show, setShow] = useState(false);

  return (<div>
    <div style={{'marginBottom': '10px'}}>
      <h4 style={{
          'color': show ? '#333' : '#aaa',
          'margin': '0',
          'display': 'inline-block',
        }}>
        Saved words
          <button style={{
            'float': 'right',
            'marginLeft': '0.4em',
          }}
            onClick={() => setShow(!show)}>
            {show ? 'hide' : 'show'}
          </button>
      </h4>
    </div>
    {show && (<div>
      { words.length > 0 ?
          words.map((value, i) => <span style={wordStyle} key={i}>{value}</span>) :
          'You have not saved any words yet.'
      }
    </div>)}
  </div>)
}

export default SavedWords;