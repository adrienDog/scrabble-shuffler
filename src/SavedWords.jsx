import { useState } from 'react';

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
      <h3 style={{
          'color': show ? '#333' : '#999',
          'margin': '0',
          'display': 'inline-block',
        }}>
        Saved words
          <button style={{
              'float': 'right',
              'marginLeft': '10px',
            }}
            onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'}
          </button>
      </h3>
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