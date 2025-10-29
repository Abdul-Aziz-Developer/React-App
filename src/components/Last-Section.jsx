import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import youtube from '../assets/images/youtube.png';

export const Last_Section = () => {
    return (

<div className="last-section">
  <div className="conteiner">
    <div className="last-flex">
      <div className="twitter">
        <h1>Get In Touch</h1>
        <p>the quick fox jumps over the
          lazy dog</p>
        <div className="l-image">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
      <div className="last-text-grid">
        {/* 01 */}
        <div className="last-texts">
          <div className="heading">
            <h1>Company info</h1>
          </div>
          <div className="pera">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        {/* 02 */}
        <div className="last-texts">
          <div className="heading">
            <h1>Features</h1>
          </div>
          <div className="pera">
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
        </div>
        {/* 03 */}
        <div className="last-texts">
          <div className="heading">
            <h1>Resources</h1>
          </div>
          <div className="pera">
            <p>IOS &amp; Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Last_Section;
