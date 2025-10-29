import man2 from '../assets/images/man-2.png';
import woman1 from '../assets/images/woman-1.png';
import man3 from '../assets/images/man-3.png';
import woman2 from '../assets/images/woman-2.png';

export const Fifth_Section = () => {
    return (

<section id="fifth-section">
  <div className="conteiner">
    <div className="fifth-flex">
      <div className="fifth-texts">
        <h2>Meet Our Team</h2>
        <p>Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className="fifth-main">
        {/* 01 */}
        <div className="pura-profile">
          <div className="fifth-image">
            <img src={man2} alt="man-2" />
          </div>
          <h6>CO Founder</h6>
          <h5>Avie Beaton</h5>
          <p>the quick fox jumps
            over the lazy dog</p>
        </div>
        {/* 02 */}
        <div className="pura-profile">
          <div className="fifth-image">
            <img src={woman1} alt="woman-1" />
          </div>
          <h6>Consultant</h6>
          <h5>Ben Jonson</h5>
          <p>the quick fox jumps
            over the lazy dog</p>
        </div>
        {/* 03 */}
        <div className="pura-profile">
          <div className="fifth-image">
            <img src={man3} alt="man-3" />
          </div>
          <h6>Consultant</h6>
          <h5>Rodney Stratton</h5>
          <p>the quick fox jumps
            over the lazy dog</p>
        </div>
        {/* 04 */}
        <div className="pura-profile">
          <div className="fifth-image">
            <img src={woman2} alt="woman-2" />
          </div>
          <h6>Consultant</h6>
          <h5>Ben Jonson</h5>
          <p>the quick fox jumps
            over the lazy dog</p>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}   

export default Fifth_Section;
