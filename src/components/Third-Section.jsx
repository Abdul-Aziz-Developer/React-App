import officeRoom from '../assets/images/office-room.png';
import mans from '../assets/images/mans.png';
import speed from '../assets/images/speed.png';
export const ThirdSection = () => {
    return (
<section id="third-section">
  <div className="conteiner">
    <div className="third-flex">
      <div className="third-texts">
        <h1>We are providing best
          business service.</h1>
        <p>Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics </p>
      </div>
      <div className="third-videoplayer">
        <div className="video">
          <img src={officeRoom} alt="office-room" />
        </div>
        <div className="video-texts">
          <div className="video-h1">
            <h1>Most trusted in
              our field</h1>
            <p>Most calendars are designed for teams. Slate
              is designed for freelancers who want a
              simple way to plan their schedule.</p>
          </div>
          <div className="logo-text">
            <div className="imagess">
              <img src={mans} alt="mans" />
            </div>
            <div className="headerrr">
              <h5>the quick fox jumps over the lazy
                dog</h5>
              <p>Things on a very small scale ...</p>
            </div>
            <div className="imagess">
              <img src={speed} alt="speed" />
            </div>
            <div className="headerrr">
              <h5>the quick fox jumps over the lazy
                dog</h5>
              <p>Things on a very small scale ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}   

export default ThirdSection;
