import httpLibrary from './ajax.js';

const GetJokes = () => {
  const ajaxReq = new httpLibrary();
  console.log('-----Get Request Start-----');
  ajaxReq
    .get('https://api.icndb.com/jokes/random/1')
    .then(data => data)
    .catch(err => console.log(err));
};

const ChuckNorrisJokes = () => {
  const response = GetJokes();
  return response.type === 'success'
    ? response.value
    : ['Why', 'Am', 'I', 'Here?'];
};

export default ChuckNorrisJokes;
