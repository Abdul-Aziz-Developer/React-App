import lav from '../assets/images/lav.png';
export const From_Section = () => {
    return (

<section id="from-section">
  <div className="conteiner">
    <div className="from-flex">
      <div className="form-images">
        <img src={lav} alt="lav" />
      </div>
      <div className="from-texts">
        <div className="f-texts">
          <h1>Get A Free Quote Here</h1>
        </div>
        <div className="from">
          <div className="name">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" placeholder="Full Name" />
          </div>
          <div className="Email">
            <label htmlFor="Email">Email *</label>
            <input type="email" id="Email" placeholder="example@gmail.com" />
          </div>
          <div className="Department">
            <label htmlFor="department">Department *</label>
            <select name="department" id="department" required>
              <option value disabled selected>Please Select</option>
              <option value="sales">Computer Science</option>
              <option value="marketing">Electrical</option>
              <option value="support">Civil</option>
              <option value="engineering">Mechanical</option>
            </select>
          </div>
          <div className="time">
            <label htmlFor="time">Time *</label>
            <select name="time" id="time" required>
              <option value=" " disabled selected>4:00 Available</option>
              <option value="4:00">4:00 Available</option>
              <option value="5:00">5:00 Available</option>
              <option value="6:00">6:00 Available</option>
              <option value="7:00">7:00 Available</option>
            </select>
          </div>
        </div>
        <div className="button0">
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}   

export default From_Section;
