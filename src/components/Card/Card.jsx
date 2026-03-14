import './Card.css';
import { useState } from 'react';

function Card({ travel }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card">
      <h3>{travel.country}</h3>
      <h4>{travel.title}</h4>
      <p>{travel.description}</p>
      <div className="card-footer">
        <button onClick={handleLike} className="like-button">
          ❤️ {likes}
        </button>
      </div>
    </div>
  );
}

export default Card;