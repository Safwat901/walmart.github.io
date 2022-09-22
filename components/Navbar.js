// import { library } from "@fortawesome/fontawesome-svg-core";

// // import your icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCode,
//   faHighlighter,
//   caretDown,
// } from "@fortawesome/free-solid-svg-icons";
import {
  FaAngleDown,
  FaSearch,
  f002,
  FaRegHeart,
  FaShoppingCart,
  FaRegUser,
  FaArrowRight,
  FaLaptop,
  FaChair,
  FaBook,
  FaHouseUser,
  FaMobileAlt,
  FaAngleRight,
  FaAppleAlt,
  FaCloudversify,
  FaBars,
} from "react-icons/fa";
import BodyImg from "./BodyImg";

import ProductsCat from "./ProductsCat";

const Navbar = () => {
  return (
    <>
      <div className="main_div">
        {/* UPPER MENU........................... */}
        <div className="upperMenu">
          <ul>
            <li>
              <a href="/">
                About Us <span style={{ marginLeft: "20px" }}>|</span>
              </a>
            </li>
            <li>
              <a href="/">
                My Account<span style={{ marginLeft: "20px" }}>|</span>
              </a>
            </li>
            <li>
              <a href="/">
                Featured Products<span style={{ marginLeft: "20px" }}>|</span>
              </a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li style={{ marginLeft: "400px" }}>
              <a href="/">Order Taking</a>
            </li>
            <li>
              <a href="/">
                English <FaAngleDown style={{ color: "white" }} />
              </a>

              <ul>
                <li>
                  <a href="/">dfsij</a>
                </li>
                <li>
                  <a href="/">dfsij</a>
                </li>
                <li>
                  <a href="/">dfsij</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                USD <FaAngleDown style={{ color: "white" }} />
              </a>
              <ul>
                <li>
                  <a href="/">dfsij</a>
                </li>
                <li>
                  <a href="/">dfsij</a>
                </li>
                <li>
                  <a href="/">dfsij</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* UPPER MENU END........................... */}

        {/* MIDDLE MENU........................... */}
        <div className="middleMenu">
          <div className="brandName">
            <h1>WALCART</h1>
          </div>
          <div className="searchBar">
            <input
              className="searchBox_inp"
              type="text"
              placeholder="&#xf002;What do you want to order?"
            />

            <a href="#" className="srch-btn"></a>

            <button className="search-btn" href="#">
              <span
                style={{
                  fontFamily: "Inter",
                  color: "#FFFFFF",
                  fontSize: "18px",
                }}
              >
                Search
              </span>
            </button>
          </div>

          <div className="carts">
            <ul>
              <li style={{ marginLeft: "5px" }}>
                <span
                  style={{
                    marginLeft: "-40px",
                    top: "400px",
                  }}
                ></span>
                <a style={{ fontFamily: "Inter" }} href="/">
                  Sign In
                  <br /> <span>Account</span>
                </a>
              </li>
              <li>
                <a>
                  <FaRegHeart style={{ fontSize: "25px" }} />
                </a>
              </li>
              <li>
                <a>
                  <img src="./Vector.png" style={{ fontSize: "25px" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* MIDLLE MENU END....................... */}
        {/* NAVBAR................................ */}
        <nav>
          <ul className="firstUl">
            <li>
              <a
                style={{ background: "#EF262C", borderRadius: "10px 10px 0 0" }}
                href="/"
              >
                <FaBars style={{ marginRight: "10px" }} />
                Top Categories
                <FaAngleDown />
              </a>
              <ul className="subMenu">
                <li>
                  <a href="/">
                    <FaLaptop style={{ marginRight: "10px" }} />
                    Laptop and Desktop
                    <FaAngleRight />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaChair style={{ marginRight: "10px" }} />
                    Home Living
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaBook style={{ marginRight: "10px" }} />
                    Book and Stationary <FaAngleRight />
                  </a>
                  <ul className="supersubMenu">
                    <li>
                      <a href="/">Laptop and Desktop</a>
                    </li>
                    <li>
                      <a href="/">Home Living</a>
                    </li>
                    <li>
                      <a href="/">
                        Book and Stationary <FaAngleRight />
                      </a>
                      <ul className="extrasubMenu">
                        <li>
                          <a href="/">Laptop and Desktop</a>
                        </li>
                        <li>
                          <a href="/">Home Living</a>
                        </li>
                        <li>
                          <a href="/">Book and Stationary</a>
                        </li>
                        <li>
                          <a href="/">Home Apliances</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Home Apliances</a>
                    </li>
                    <li>
                      <a href="/">Book and Stationary</a>
                    </li>
                    <li>
                      <a href="/">Electronics Apliances</a>
                    </li>
                    <li>
                      <a href="/">Food and Snacks</a>
                    </li>
                    <li>
                      <a href="/">More Categories</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">
                    <FaHouseUser style={{ marginRight: "10px" }} />
                    Home Apliances <FaAngleRight />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaBook style={{ marginRight: "10px" }} />
                    Book and Stationary
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaMobileAlt style={{ marginRight: "10px" }} />
                    Electronics Apliances <FaAngleRight />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaAppleAlt style={{ marginRight: "10px" }} />
                    Food and Snacks
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaCloudversify style={{ marginRight: "10px" }} />
                    More Categories <FaAngleRight />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                Executive Deals <FaAngleDown />
              </a>
            </li>
            <li>
              <a href="/">
                Smart Watches <FaAngleDown />
              </a>
            </li>
            <li>
              <a href="/">Cell Phone</a>
            </li>
            <li>
              <a href="/">Headphone</a>
            </li>
            <li>
              <a href="/">
                <span style={{ height: "10px", opacity: "65%" }}>
                  only this weekend
                  <br />
                </span>
                Super Discount <FaAngleDown style={{ marginLeft: "20px" }} />
              </a>
            </li>
          </ul>
        </nav>
        {/* NAVBAR END................................ */}
      </div>
      <BodyImg />
      <ProductsCat />
    </>
  );
};

export default Navbar;
