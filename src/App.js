import "./App.css";
import myName from "./Assets/myname.svg";
import backg from "./Assets/backg.png";
import image from "./Assets/image.svg";
import five from "./Assets/five.svg";
import four from "./Assets/four.svg";
import one from "./Assets/one.svg";
import second from "./Assets/second.svg";
import seven from "./Assets/seven.svg";
import six from "./Assets/six.svg";
import Group from "./Assets/Group.png";
import Group1 from "./Assets/Group1.png";
import Group3 from "./Assets/Group3.png";
import Group4 from "./Assets/Group4.png";
import Group2 from "./Assets/Group2.png";
import bedimg from "./Assets/bedimg.png";
import beding from "./Assets/beding.png";
import pinkbed from "./Assets/pinkbed.png";
import pawdan from "./Assets/pawdan.png";
import sleeppic from "./Assets/sleeppic.png";
import niceplace from "./Assets/niceplace.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'

function App() {
  return (
    <>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <img className="responsive" src="topbar.png" />
            <div className="navbar-one">
              <nav class="navbar navbar-expand-lg navbar-light text-center  ">
                <a class="navbar-brand" href="#"></a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">
                        Customize <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="#">
                        Bedding
                      </a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="#">
                        Yogamats
                      </a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link disabled" href="#">
                        Tablemats
                      </a>
                    </li>

                    <li class="nav-item active">
                      <a class="nav-link disabled" href="#">
                        Sofa cover
                      </a>
                    </li>

                    <li class="nav-item active">
                      <a class="nav-link disabled" href="#">
                        Carpets/Rugs
                      </a>
                    </li>

                    <li class="nav-item active">
                      <a class="nav-link disabled" href="#">
                        Bathmats
                      </a>
                    </li>

                    <li class="nav-item active">
                      <a class="nav-link disabled" href="#">
                        Doormats
                      </a>
                    </li>

                    <li class="nav-item active">
                      <a class="nav-link disabled" href="#">
                        Runner
                      </a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link disabled" href="#">
                        Kids
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="apppp">
            <img className="images-back" src={backg}></img>
          </div>
        </div>
        <div className="container">
          <h1 className="hedding">Shop By Caregory</h1>

          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <img src={myName} />
              <p>Bedding</p>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <img src={one} />
              <p>Bedding</p>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <img src={seven} />
              <p>Bedding</p>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <img src={image} />
              <p>Bedding</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <img src={five} />
              <p>Bedding</p>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <img src={second} />
              <p>Bedding</p>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <img src={four} />
              <p>Bedding</p>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <img src={six} />
              <p>Bedding</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-4">
            <div className="main">
              <div className="padding-img">
                <img src={Group} />
              </div>
              <div>
                <h3>Direct to customer</h3>
                <p>We are the manufacturers, there is no middlemen</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4">
            <div className="main">
              <div className="padding-img">
                <img src={Group1} />
              </div>
              <div>
                <h3>OEKO-TEX</h3>
                <p>We are Oeko-tex STANDARD 100 certified</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="main">
              <div className="padding-img">
                <img src={Group2} />
              </div>
              <div>
                <h3>Made in India</h3>
                <p>We produce Inhouse using all the materials Made in India.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="main">
              <div className="padding-img">
                <img src={Group3} />
              </div>

              <div>
                <h3>High Performance</h3>
                <p>Our products are built for best performace</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="main">
              <div className="padding-img">
                <img src={Group4} />
              </div>
              <div>
                <h3>High Performance</h3>
                <p>Our products are built for best performace</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <h1 className="hedding">New Arrivals</h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 ">
              <div className="card">
                <img className="img-fluid" src={beding} />

                <h6>All over stripe handmade bed sheet</h6>
                <p>Price : 899</p>
                <p>Choose from 🟥🟩🟦🟪🟧</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <div className="card">
                <img className="img-fluid" src={bedimg} />
                <h6>All over stripe handmade bed sheet</h6>
                <p>Price : 682</p>
                <p>Choose from 🟥🟩🟦🟪🟧</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img className="img-fluid" src={beding} />
                <h6>All over stripe handmade bed sheet</h6>
                <p>Price : 580</p>
                <p>Choose from 🟥🟩🟦🟪🟧</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img className="img-fluid" src={beding} />
                <h6>All over stripe handmade bed sheet</h6>
                <p>Price : 1200</p>
                <p>Choose from 🟥🟩🟦🟪🟧</p>
              </div>
            </div>
            <p className="col-lg-12 col-md-6 col-sm-3 text-center">
              Shop all products
            </p>
          </div>
        </div>
      </footer>

      <div class="container">
        <h1 className="Handpic text-center">Handpicked by us</h1>
        <div class="row">
          <div class="col-sm">
            <div class="text-center">
              <img className="img-thumbnail" src={pawdan} />
            </div>
          </div>
          <div class="col-sm">
            <div class="text-center">
              <img className="img-thumbnail" src={pinkbed} />
            </div>
          </div>
        </div>
      </div>

      {/* form */}

      <div className="container">
        <div className="backgroung">
          <h1 className="headding">We are all about</h1>

          <div className="row ">
            <div className="col-sm">
              <div className="text-center">
                <img className="img-thumbnail" src={sleeppic} />
                <img className="img-responsive" src={Group2} />
              </div>
            </div>

            <div className="col-sm">
              <div class="row justify-content-center">
                <div class="">
                  <div className="main-div text-center">
                    <div className="qualityclass">
                      <p>Quality</p>
                    </div>
                    <div>
                    <AiOutlineDown/>
                    </div>
                  </div>
                  <hr />

                  <div className="main-div text-center">
                    <div className="productclass">
                      <p>Ecofriendly products</p>
                    </div>
                    <div>
                    <AiOutlineDown/>
                    </div>
                  </div>
                  <hr />

                  <div className="main-div text-center">
                    <div className="easyclass">
                      <p>Easy living</p>
                    </div>
                    <div>
                    <AiOutlineDown/>
                    </div>
                  </div>
                  <hr />

                  <div className="main-div text-center">
                    <div className="improvingclass">
                      <p>Improving lifestyle</p>
                    </div>
                    <div>
                    <AiOutlineDown/>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="text-center">
              <div className="card-div">
                <p className="new">
                  NEWS | EVENTS | OFFERS & NEW ADDITION TO MENU
                </p>
                <h6 className="para">SIGN UP TO OUR NEWSLETTER</h6>
                <input type="email" placeholder="Enter your email" />

                <input className="submitbtn" type="submit" value="SUBSCRIBE" />
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-6">
            <div className="text-center">
              <img className="img-thumbnail" src={niceplace} />
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5"></div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-social-icon">
                  <h3 className="contect-div">Contact with us</h3>
                    <h6 >Email</h6>
                    <p>support@halothemes.com</p>
                    <h3 className="address">Address</h3>
                    <p>
                      8808 Ave Dermentum, Onsectetur Adipiscing
                      <br /> Tortor Sagittis, CA 880986,
                      <br /> United States
                    </p>
                    <a href="#">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3 className="contect">Shop</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Customize</a>
                    </li>
                    <li>
                      <a href="#">Carpets/Rugs</a>
                    </li>
                    <li>
                      <a href="#">Bedding</a>
                    </li>
                    <li>
                      <a href="#">Bathmats</a>
                    </li>
                    <li>
                      <a href="#">Doormats</a>
                    </li>
                    <li>
                      <a href="#">Tablemats</a>
                    </li>
                    <li>
                      <a href="#">Runner</a>
                    </li>
                    <li>
                      <a href="#">Sofa covers</a>
                    </li>
                    <li>
                      <a href="#">Kids</a>
                    </li>
                  </ul>
                    <AiFillFacebook/>
                  <AiFillTwitterCircle/>
                  <AiFillInstagram/>
                  <AiFillFacebook/>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3 className="contect">Quick link</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    © 2020 Saral Home. All Rights Reserved. Designed And
                    Developed By UNBUNDL .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default App;
