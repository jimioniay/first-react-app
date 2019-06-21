import React from 'react';

const Jokes = props => {
  return (
    <div>
      <p>Sample Jokes</p>
      <ul>
        {/* <li style={props.question ? 'block' : 'block'}>{props.question}</li> */}
        <li className={props.question ? 'd-block' : 'd-none'} />
        <li>{props.punchLine}</li>
      </ul>
    </div>
  );
};

export default Jokes;
