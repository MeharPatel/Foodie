import React from 'react'

function Home() {
  return (
    <div>
      <div className='home'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/food1.jpeg" className="d-block w-100" alt="Slide1" />
              <div className="half"></div>
              <p className="fs-3 half-text">Good Food, Good Mood!!</p>
            </div>
            <div className="carousel-item">
              <img src="images/food2.jpeg" className="d-block w-100" alt="Slide2" />
              <div className="half"></div>
              <p className="fs-3 half-text">Eat, Drink, Be Happy!!</p>
            </div>
            <div className="carousel-item">
              <img src="images/food3.jpeg" className="d-block w-100" alt="Slide3" />
              <div className="half"></div>
              <p className="fs-3 half-text">Nothing Brings People Together Like Food!!</p>
            </div>
            <div className="carousel-item">
              <img src="images/food4.jpeg" className="d-block w-100" alt="Slide4" />
              <div className="half"></div>
              <p className="fs-3 half-text">Health Needs Healthy Food!!</p>
            </div>
            <div className="carousel-item">
              <img src="images/food5.jpeg" className="d-block w-100" alt="Slide5" />
              <div className="half"></div>
              <p className="fs-3 half-text">Wake Up, It's Food o'clock!!</p>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container-fluid mt-5">
          <div className="text-center fs-2">
            <b>Easy Way To Order And Enjoy Your Food!!</b>
          </div>
          <div className="container easy">
            <div className="select text-center">
              <ion-icon name="bag-check-outline"></ion-icon>
              <p className="fs-6">Search Throught Our Wide Menu.</p>
              <p className="fs-6">Select The Food Items You Want.</p>
            </div>
            <div className="pay text-center">
              <ion-icon name="cash-outline"></ion-icon>
              <p className="fs-6">Pay For The Food Using Any Method.</p>
              <p className="fs-6">Our Delivery Partner Will Reach You Soon,</p>
            </div>
            <div className="enjoy text-center">
              <ion-icon name="fast-food-outline"></ion-icon>
              <p className="fs-">Enjoy Your Food!!</p>
            </div>
          </div>
        </div>



        <div className="container home-specials mt-5">
          <div className="fs-2 text-center">
            <b>Exciting Offers Everyday!!</b>
          </div>

          <div className="cards mt-5">
            <div className="row row-cols-auto">

              <div className="col mb-4 me-5">
                <div className="card">
                  <img src="images/food10.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Burger Combo!!</h5>
                    <p className="card-text">Get A Small Fries And A Coke Free With 2 Burgers!!</p>
                    <p className="card-text">Offer Valid Only For Today!!</p>
                    <a href="/" className="btn btn-outline-primary">Order Now!!</a>
                  </div>
                </div>
              </div>

              <div className="col mb-4 me-5">
                <div className="card">
                  <img src="images/food21.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Desserts Everywhere!!</h5>
                    <p className="card-text">Get Any 1 Dessert FREE On 2 Desserts!!</p>
                    <p className="card-text">Offer Valid Only For Today!!</p>
                    <a href="/" className="btn btn-outline-primary">Order Now!!</a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="container home-cat mt-4 mb-5">
          <div className="fs-2 text-center">
            <b>We Have Many Menu Options!!</b>
          </div>
          <div className="cards mt-5">
            <div className="row row-cols-auto">

              <div className="col mb-4 me-4">
                <div className="card text-bg-dark">
                  <img src="images/food6.jpeg" className="card-img" alt="Vegitarian" />
                  <div className="titletilt"></div>
                  <div className="card-img-overlay">
                    <h4 className="card-title">Explore Our Vegitarian Menu!</h4>
                    <p className="card-text"><small>See More</small></p>
                  </div>
                </div>
              </div>

              <div className="col mb-4 me-4">
                <div className="card text-bg-dark">
                  <img src="images/p13.jpeg" className="card-img" alt="Vegan" />
                  <div className="titletilt"></div>
                  <div className="card-img-overlay">
                    <h4 className="card-title">Explore Our Vegan Menu!</h4>
                    <p className="card-text"><small>See More</small></p>
                  </div>
                </div>
              </div>

              <div className="col mb-4 me-4">
                <div className="card text-bg-dark">
                  <img src="images/p14.jpeg" className="card-img" alt="Diet" />
                  <div className="titletilt"></div>
                  <div className="card-img-overlay">
                    <h4 className="card-title">Explore Our Diet-Friendly Options!</h4>
                    <p className="card-text"><small>See More</small></p>
                  </div>
                </div>
              </div>

              <div className="col mb-4 me-4">
                <div className="card text-bg-dark">
                  <img src="images/food4.jpeg" className="card-img" alt="Nonveg" />
                  <div className="titletilt"></div>
                  <div className="card-img-overlay">
                    <h4 className="card-title">Explore Our Non-Vegitarian Menu!!</h4>
                    <p className="card-text"><small>See More</small></p>
                  </div>
                </div>
              </div>

              <div className="col mb-4 me-4">
                <div className="card text-bg-dark">
                  <img src="images/food14.jpeg" className="card-img" alt="Drinks" />
                  <div className="titletilt"></div>
                  <div className="titletilt"></div>
                  <div className="card-img-overlay">
                    <h4 className="card-title">Find Drinks That Suit Your Taste!!</h4>
                    <p className="card-text"><small>See More</small></p>
                  </div>
                </div>
              </div>

              <div className="col mb-4 me-4">
                <div className="card text-bg-dark">
                  <img src="images/food21.jpeg" className="card-img" alt="Desserts" />
                  <div className="titletilt"></div>
                  <div className="card-img-overlay">
                    <h4 className="card-title">Select From Our Wide Variety Of Desserts!!</h4>
                    <p className="card-text"><small>See More</small></p>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Home