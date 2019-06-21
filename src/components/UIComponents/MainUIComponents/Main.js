import React from 'react';

import ListItem from './ListItem';
import MyInfo from './MyInfo';
import CardComponent from '../MainUIComponents/CardComponent';
import Joke from './Jokes';
import JokesData from '../../../data/JokesData';
// import ChuckNorrisJokes from '../../api/ajax-helper';

const Main = () => {
  // Jokes from File
  let i = 0;
  const jokeArray = JokesData.map(joke => {
    return (
      <Joke key={++i} question={joke.question} punchLine={joke.punchLine} />
    );
  });

  // Jokes from API
  // const NorrisJokes = ChuckNorrisJokes(joke => {
  //   return (
  //     <CardComponent
  //       id={joke.id}
  //       joke={joke.joke}
  //       categories={joke.categories[0]}
  //     />
  //   );
  // });

  // Main!!!!
  return (
    <div className="container-fluid main">
      <ListItem />
      <p>
        Lorem Ipsum bla bla bla Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Animi, fugit?
      </p>
      <div className="card-columns">
        <CardComponent content="loremmmmmmm4567890p" author="Ayomide" />
      </div>
      <div>{jokeArray}</div>
      <MyInfo />
    </div>
  );
};
export default Main;
