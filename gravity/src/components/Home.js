import React from "react";
import { Link, useNavigate } from "react-router-dom";
import pic from "../Home-img/1644216662775.jpg";
import pix from "../Home-img/1644216635611.jpg";
import pis from "../Home-img/1644216687336.jpg";
import pid from "../Home-img/1644216657587.jpg";
import logo from "../Home-img/ftcy.jpg";
import did from  "../Home-img/GDG (1).jpg"

export const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="home">
      <div className="App">
        <section id="home">
          <div className="main">
            <h1 className="heading">
              F T C.co <br />
              <h3>Giving You The Best In Everything.!!</h3>
              Fashion & Clothing Store
            </h1>
            <button
              className="btn"
              onClick={() => {
                navigate("/Login");
              }}
            >
              LOG IN
            </button>
          </div>
        </section>
        <section id="services">
          <h1 className="heading" style={{ "background-color": "blue" }}>New Line</h1>
          <div className="row">
            <div className="box">
              <img src={pic} alt="" />
              <h2 className="heading">Unisex Paniki Caps</h2>
              <p style={{ "background-color": "red" }}>On Sale</p>
              <p>
                R150,00
                <span> each</span>
              </p>
            </div>
            <div className="box">
              <img src={pix} alt="" />
              <h2 className="heading">Paniki T-Shirts</h2>
              <p style={{ "background-color": "red" }}>On Sale</p>
              <p>
                R250,00
                <span> each</span>
              </p>
            </div>
            <div className="box">
              <img src={pis} alt="" />
              <h2 className="heading">Men Summer shorts</h2>
              <p style={{ "background-color": "red" }}>On Sale</p>
              <p>
                R200,00
                <span> each</span>
              </p>
            </div>
            <div className="box">
              <img src={pid} alt="" />
              <h2 className="heading">Women Summer shorts</h2>
              <p style={{ "background-color": "red" }}>On Sale</p>
              <p>
                R150,00
                <span> each</span>
              </p>
            </div>
          </div>
        </section>
        <section id="about">
          <h1 className="heading" style={{ "background-color": "blue" }}>OUR STYLE</h1>
          <div id="pic">
            <img src={did} alt="Logo" />
            <div id="intro">
              <h2>Feydo Top Clothing.co</h2>
              <p>
                A woman's brands are typically two-piece (a crop top and a high
                waist shorts or a hoodie with a v-shape shorts) with a
                long-sleeved top. The ensemble was traditionally paired with a
                headpiece and special footwear, but now a smartphone and running
                shoes are more common accessories. man brands also feature
                t-shirts and shorts or  track pants also with a hoodie or a base
                ball jacket Our brands designs are still largely bespoke and
                picking one out typically begins at a fabric store. Drawing
                inspiration from the clothes of the Chosun dynasty, which ran
                from 2010 to 2022, Ricky RIck told reporters after the show that
                he "loved traditional south african clothes, materials and
                patterns" and that the timing of the show, Chanel's first in
                South Africa, was just "the right moment to do it." Many will be
                familiar with South African Hip Hop music, or at least the term
                Ghetto-Music, with gangster love (still the most-viewed video on
                YouTube ever) representing South Africa's latest musical mass
                export. Makeup is another. South Africa's skin-care market,
                collectively known as "African-beauty" in Central Africa, is
                already well-established and highly profitable.
              </p>
            </div>
          </div>
        </section>
        <section id="services">
          <h1 className="heading" style={{ "background-color": "blue" }}>CATEGORIES</h1>
          <div className="row">
            <div className="box">
              <h2 className="heading">Men Line</h2>
              <img src={pis} alt="" />
            </div>
            <div className="box">
              <h2 className="heading">Women Line</h2>
              <img src={pid} alt="" />
            </div>
          </div>
        </section>
        <section id="portfolio">
          <h1 className="heading" style={{ "background-color": "blue" }}>Browse</h1>
          <div className="gallery">
            <span className="col">
              <img src="/portfolio/1" alt="" />
              <a href="https://codepen.io/Feydo15/pen/wvPgRKd">click to open</a>
            </span>
            <span className="col">
              <img src="/portfolio/2" alt="" />
              <a href="https://codepen.io/Feydo15/pen/podRxzB">click to open</a>
            </span>
            <span className="col">
              <img src="/portfolio/3" alt="" />
              <a href="https://codepen.io/Feydo15/pen/vYWGQGX">click to open</a>
            </span>
            <span className="col">
              <img src="/portfolio/4" alt="" />
              <a href="https://www.facebook.com/F-T-clothing-Co-103036627861515">
                click to open
              </a>
            </span>
            <span className="col">
              <img src="/portfolio/5" alt="" />
              <a href="https://codepen.io/Feydo15/pen/GROjWgM">click to open</a>
            </span>
            <span className="col">
              <img src="/portfolio/6" alt="" />
              <a href="https://www.facebook.com/F-T-clothing-Co-103036627861515">
                click to open
              </a>
            </span>
          </div>
        </section>
        <section id="link">
          <div className="links">
            <Link to="/login">Click here to sign in</Link>
          </div>
          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>
          <Link to="/Register" className="secondary-btn">
            Create an account
          </Link>
        </section>
        <section id="about">
          <h1 className="heading">ABOUT US</h1>
          <div id="pic">
            <img src={logo} alt="Logo" />
            <div id="intro">
              <h2>Feydo Top Clothing.co</h2>
              <p>
                "F T C. CO" (Feydo Top Clothing. Co) is a South African
                collective online apparel store that provide its valued
                customers with a variety of locally manufactured brands that was
                tailored with a 100% fabric from china and several neighbouring
                countries along the southern part of Africa. F T C. Co has been
                consistent on bringing a wide variety of brands that are inspired
                by the Ghetto culture and the current fashion trends since 2016.
                <h3>Feature</h3>
                F T C. Co can be classified as one of the largest online apparel
                store that provide a wide variety of brand that fit all the
                occasion like cultural, ceremonial and everyday dress, each of
                which can be further classified by gender, age and season. All
                types of brads are created beautifully through combinations of
                art,culture and current fashion trends themes. Women's brand in
                particular are recognized worldwide for the simple yet
                delightful harmony of their short hoodie and shorts. The hoodie,
                which is cropped to the stomach, it makes the waist look so slim
                and increase the cleavage area, while the high waist bum shorts
                makes the lower body look full, creating an attractive balance.
                The cut and drape of the clothing complements not only the
                african female physique but also flatters and fits most other
                body types as well.
                <br />
                The unique brands of F T C. CO like "Paniki" that is inspired by
                the Beer bottle cap ,"Ghetto Gravity" that is inspired by the
                life style of the Ghetto from the inner Ghetto of Gauteng and many
                more appear at their greatest when the wearer is in motion. F T
                C. Co brands are creative and expressive in their design.
                Another special feature about F T C. Co brands is the shape,
                having a slim top and wide bottom, similar to a bell. The crop
                tops should be tight and fitted while the high waist shorts is
                relaxed at the waist level and tight at the bum area. The
                tightly fitting top attractively reflects the shape of the upper
                body. male hoodies have a tight chest area and the jeans are
                mostly slim fit jeans with bucket
 hat or a cap
              </p>
            </div>
          </div>
        </section>
        <section id="contact">
          <h1 className="heading">CONTACT</h1>
          <form action="" className="form">
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Your Email"
            />
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
            ></textarea>
            <input type="submit" value="send" id="send" />
          </form>
        </section>
      </div>

      <footer id="main-footer" style={{ "background-color": "gray" }}>
        <p>Copyright &copy; 2022, Feydo Top Clothing.co All Rights Reserved</p>
        <div>
          <a href="#">terms of use</a> | <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};
