import { useState } from "react";
import "./card.component.css";

const Card = ({ number, head, body }) => {
  const [showBody, setShowBody] = useState(false);

  const active = () => {
    setShowBody(true);
  };

  const inActive = () => {
    setShowBody(false)
  }

  return (
    <article className={`process-card ${showBody ? "green" : ""}`}>
      <div className="card-header">
        <div>
          <p className="card-number">{number}</p>
          <h3 className="card-title">{head}</h3>
        </div>
        {showBody ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="59"
            viewBox="0 0 58 59"
            fill="none"
            id="minus"
            onClick={inActive}
          >
            <circle
              cx="29"
              cy="29.5"
              r="28.5"
              fill="#F3F3F3"
              stroke="#191A23"
            />
            <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="59"
            viewBox="0 0 58 59"
            fill="none"
            id="plus"
            onClick={active}
          >
            <circle
              cx="29"
              cy="29.5"
              r="28.5"
              fill="#F3F3F3"
              stroke="#191A23"
            />
            <path
              d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
              fill="#191A23"
            />
          </svg>
        )}
      </div>

      {showBody && (
        <div>
          <hr className="line" />
          <p className="card-body">{body}</p>
        </div>
      )}
    </article>
  );
};

export default Card;
