import "./Letter.css";


function Letter({character, points}) {
  return (
    <div className="Letter unselectable">
      <p className="Letter-character">
        {character.toUpperCase()}
      </p>
      <p className="Letter-points">
        {points}
      </p>
    </div>
  );
}

export default Letter;
