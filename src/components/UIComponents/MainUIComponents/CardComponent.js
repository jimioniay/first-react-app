import React from 'react';

const CardComponent = props => {
  return (
    <div className="card p-3 text-left">
      <blockquote className="blockquote mb-0">
        <h5 className="card-title">
          # {!props.hasOwnProperty('id') ? '1' : props.id}
        </h5>
        <p>{props.content}</p>
        <footer className="blockquote-footer">
          <small className="text-muted author">
            <cite title="Source Title">{props.author}</cite>
          </small>
        </footer>
      </blockquote>
    </div>
  );
};

export default CardComponent;
