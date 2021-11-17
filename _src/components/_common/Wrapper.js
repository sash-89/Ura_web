import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

function Wrapper({ children }) {
  Wrapper.propTypes = {
    children: PropTypes.any.isRequired,
  };
  return (
    <>
      <Header />
      <section className="content">
        {children}
      </section>
      <Footer />
    </>
  );
}

export default Wrapper;
