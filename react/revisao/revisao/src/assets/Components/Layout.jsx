import React from 'react';
import Aside from './Aside';
import Footer from './Footer';
import Main from './Main';
import Header from './Header';

const Layout = () => {
  return (
    <div className="container">
      <Header title="Curso React" />
      <div className="content">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
