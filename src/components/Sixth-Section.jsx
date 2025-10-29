import map from '../assets/images/map.png';

export const Sixth_Section = () => {
    return (

<section id="sixth-section">
  <div className="conteiner">
    <div className="sixth-flex">
      <div className="sixth-text">
        <h1>We Have Branches All
          Over The World</h1>
        <p>The gradual accumulation of information about atomic and
          small-scale behaviour during the first quarter of the 20th
          century, which gave some indications about how small things
          do behave, produced an increasing confusion which was
          Heisenberg, and Born.</p>
      </div>
      <div className="maps">
        <img src={map} alt="map" />
      </div>
    </div>
  </div>
</section>
    );
}   

export default Sixth_Section;
