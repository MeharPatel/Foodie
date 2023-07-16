import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className="container mt-3 pt-2">
        <div className="brands text-center">
          <h4>
            Associated Brands
            </h4>
              <a className='fs-6 me-4' href="/">Brand Name 1</a>
              <a className='fs-6 me-4' href="/">Brand Name 2</a>
              <a className='fs-6 me-4' href="/">Brand Name 3</a>
              <a className='fs-6 me-4' href="/">Brand Name 4</a>
              <a className='fs-6 me-4' href="/">Brand Name 5</a>
              <a className='fs-6 me-4' href="/">Brand Name 6</a>
              <a className='fs-6 me-4' href="/">Brand Name 7</a>
              <a className='fs-6 me-4' href="/">Brand Name 8</a>
        </div>

        <div className="questions">
            <div className='qs text-center'>
              <p className="fs-4">
                Have Any Questions? Ask away!
              </p>
                <a className='fs-6' href="/">How is the quality of food?</a>
                <a className='fs-6' href="/">Is the food fresh?</a>
                <a className='fs-6' href="/">Can I get a home delivery?</a>
                <a className='fs-6' href="/">Can I place an order for a specific time?</a>
                <a className='fs-6' href="/">Can I order food for a party?</a>
                <a className='fs-6' href="/">Are the brands and restaurants legit?</a>
                <a className='fs-6' href="/">I want to cancel my order.</a>
                <a className='fs-6' href="/">I did not receive my order!</a>
                <a className='fs-6' href="/">I want to Dine-in.</a>
            </div>
        </div>

        <div className="foodie-brand">
          <div className="foodie-img text-end">
            <img src="images/foodie.png" alt="Foodie" />
          </div>
            <div>
              <p className="fs-3 text-end">
               Enjoy <br /> Foodie's <br /> Services!!
              </p>
              <p className="fs-5 text-end">
                Created by Mehar Patel.
              </p>
            </div>
        </div>
      </div>

      <p className="fs-6 text-center mt-2 pb-3">
        Copyright &copy; www.Foodie.com All rights reserved.
      </p>
    </div>
  )
}

export default Footer