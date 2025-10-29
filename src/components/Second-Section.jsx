import bag from '../assets/images/bag.png';
import home from '../assets/images/home.png';
import updown from '../assets/images/up-down.png';
import tv from '../assets/images/tv.png';
import arrowright from '../assets/images/arrow-right.png';
export const SecondSection = () => {
    return (

<section id="second-section">
  <div className="conteiner">
    <div className="second-section-flex">
      {/* 01 */}
      <div className="bag-pura">
        <div className="bag-image">
          <img src={bag} alt="bag" />
        </div>
        <h5>Business Growing</h5>
        <p>the quick fox jumps
          over the lazy dog</p>
        <div className="twotag">
          <a href="#">More</a>
          <a href="#"><img src={arrowright} alt="arrow-right" /></a>
        </div>
      </div>
      {/* 02 */}
      <div className="bag-pura">
        <div className="bag-image">
          <img src={home} alt="home" />
        </div>
        <h5>Digital Marketing</h5>
        <p>the quick fox jumps
          over the lazy dog</p>
        <div className="twotag">
          <a href="#">More</a>
          <a href="#"><img src={arrowright} alt="arrow-right" /></a>
        </div>
      </div>
      {/* 03 */}
      <div className="bag-pura">
        <div className="bag-image">
          <img src={updown} alt="up-down" />
        </div>
        <h5>National top 50 firms</h5>
        <p>the quick fox jumps
          over the lazy dog</p>
        <div className="twotag">
          <a href="#">More</a>
          <a href="#"><img src={arrowright} alt="arrow-right" /></a>
        </div>
      </div>
      {/* 04 */}
      <div className="bag-pura">
        <div className="bag-image">
          <img src={tv} alt="tv" />
        </div>
        <h5>Digital Marketing</h5>
        <p>the quick fox jumps
          over the lazy dog</p>
        <div className="twotag">
          <a href="#">More</a>
          <a href="#"><img src={arrowright} alt="arrow-right" /></a>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}   
export default SecondSection;


