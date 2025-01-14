import React from 'react';

function Logo_bar() {
  return (
    <section className="logo-bar py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="logo-content d-flex flex-wrap justify-content-between">
            <img src="images/logo1.png" alt="logo" className="logo-image img-fluid" />
            <img src="images/logo2.png" alt="logo" className="logo-image img-fluid" />
            <img src="images/logo3.png" alt="logo" className="logo-image img-fluid" />
            <img src="images/logo4.png" alt="logo" className="logo-image img-fluid" />
            <img src="images/logo5.png" alt="logo" className="logo-image img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logo_bar;
