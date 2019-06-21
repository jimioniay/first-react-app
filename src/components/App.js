import React from 'react';
import '../../src/styles.css';

import NavBar from './UIComponents/NavBar';
import Main from './UIComponents/MainUIComponents/Main';
import Footer from './UIComponents/Footer';

const App = () => (
  <div className="container-fluid body border rounded">
    <NavBar />
    <Main />
    <Footer />
  </div>
);

export default App;
