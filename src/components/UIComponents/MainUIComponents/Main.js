import React from 'react';

import ListItem from './ListItem';
import MyInfo from './MyInfo';
import CardComponent from '../MainUIComponents/CardComponent';
import Joke from './Jokes';
import JokesData from '../../../data/JokesData';
import ProductsData from '../../../data/vSchoolsProduct';
import Product from './Product';
// import ChuckNorrisJokes from '../../api/ajax-helper';

const Main = () => {
  // Jokes from File
  let i = 0;
  let j = 0;
  const jokeArray = JokesData.map(joke => {
    return (
      <Joke key={++i} question={joke.question} punchLine={joke.punchLine} />
    );
  });

  const productsArray = ProductsData.map(product => {
    return (
      <Product
        num={++j}
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
      />
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
        <CardComponent content="loremmmmmmm4567890p" author="Ayomide" />
        <CardComponent content="loremmmmmmm4567890p" author="Ayomide" />
        <CardComponent
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae numquam minima provident accusantium corrupti maxime excepturi officia. Omnis, quo odio."
          author="Ayomide"
        />
      </div>
      <div>{jokeArray}</div>
      <div>{productsArray}</div>
      <MyInfo />
    </div>
  );
};
export default Main;
