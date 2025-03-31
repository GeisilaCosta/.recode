import React from 'react';
import Aside from './Aside';
import Footer from './Footer';

export default function Main() {
  return (
    <div className="p-3" style={{ backgroundColor: '#ecaa7d', color: 'white' }}>
      <h3>Main Content</h3>
      <div className="row">
        <div className="col-md-8">
          <p>Content goes here...</p>
        </div>
        <div className="col-md-4">
          <Aside />
        </div>
      </div>
      <Footer />
    </div>
  );
}
