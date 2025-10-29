import users from '../assets/images/users.png';
import home from '../assets/images/home.png';
import tv from '../assets/images/tv.png';
import baged from '../assets/images/baged.png';
export const First_section = () => {
    return (
        <section id="first-section">
            <div className="conteiner">
                <div className="second-flex">
                    <div className="second-text">
                        <h1>Experts are here solve
                            your business problem.</h1>
                        <p>We know how large objects will act, but things on a
                            small scale just do not act that way.</p>
                        <div className="button">
                            <a href="#">Get Quote Now</a>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="people">
                        {/* 01 */}
                        <div className="peopleand-text">
                            <div className="people-icon">
                                <img src={users} alt="users" />
                            </div>
                            <div className="people-txt">
                                <h5>1.5k</h5>
                                <p>HAPPY </p>
                                <p>CUSTOMERS</p>
                            </div>
                        </div>
                        {/* 02 */}
                        <div className="peopleand-text">
                            <div className="people-icon">
                                <img src={home} alt="home" />
                            </div>
                            <div className="people-txt">
                                <h5>3k</h5>
                                <p>CASES</p>
                                <p>DONE</p>
                            </div>
                        </div>
                        {/* 03 */}
                        <div className="peopleand-text">
                            <div className="people-icon">
                                <img src={tv} alt="tv" />
                            </div>
                            <div className="people-txt">
                                <h5>45</h5>
                                <p>AWARD</p>
                                <p>WINNING</p>
                            </div>
                        </div>
                        {/* 04 */}
                        <div className="peopleand-text">
                            <div className="people-icon">
                                <img src={baged} alt="baged" />
                            </div>
                            <div className="people-txt">
                                <h5>12+</h5>
                                <p>COUNTRIES </p>
                                <p>WORLDWIDE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default First_section;
