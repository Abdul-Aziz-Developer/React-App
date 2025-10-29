import woman1 from '../assets/images/woman-1.png';
import man1 from '../assets/images/man-1.png';
import man2 from '../assets/images/man-2.png';
import star from '../assets/images/star.png';
import star1 from '../assets/images/star-1.png';

export const ForthSection = () => {
    return (
        <section id="forth-section">
            <div className="conteiner">
                <div className="forth-flex">
                    <div className="forth-texts">
                        <h2>What Clients Say</h2>
                        <p>Problems trying to resolve the conflict between
                            the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className="profile">
                        {/* 1 */}
                        <div className="forth-profile">
                            <div className="profile-text">
                                <div className="image">
                                    <div className="progile-pic">
                                        <img src={woman1} alt="woman-1" />
                                    </div>
                                    <div className="profile-name">
                                        <h3>Regina Miles</h3>
                                        <h6>Designer</h6>
                                    </div>
                                    <ul>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star1} alt="star-1" /></li>
                                    </ul>
                                </div>
                                <p>This proved to be impossible using the traditional
                                    concepts of space and time. Einstein developed a
                                    new view of time first and then space. This proved
                                    to be impossible using the traditional concepts of
                                    space and time. Einstein developed a new view
                                    of time first and then space.</p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="forth-profile">
                            <div className="profile-text">
                                <div className="image">
                                    <div className="progile-pic">
                                        <img src={man1} alt="man-1" />
                                    </div>
                                    <div className="profile-name">
                                        <h3>Regina Miles</h3>
                                        <h6>Designer</h6>
                                    </div>
                                    <ul>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star1} alt="star-1" /></li>
                                    </ul>
                                </div>
                                <p>This proved to be impossible using the traditional
                                    concepts of space and time. Einstein developed a
                                    new view of time first and then space. This proved
                                    to be impossible using the traditional concepts of
                                    space and time. Einstein developed a new view
                                    of time first and then space.</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="forth-profile">
                            <div className="profile-text">
                                <div className="image">
                                    <div className="progile-pic">
                                        <img src={man2} alt="man-2" />
                                    </div>
                                    <div className="profile-name">
                                        <h3>Regina Miles</h3>
                                        <h6>Designer</h6>
                                    </div>
                                    <ul>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star} alt="star" /></li>
                                        <li><img src={star1} alt="star-1" /></li>
                                    </ul>
                                </div>
                                <p>This proved to be impossible using the traditional
                                    concepts of space and time. Einstein developed a
                                    new view of time first and then space. This proved
                                    to be impossible using the traditional concepts of
                                    space and time. Einstein developed a new view
                                    of time first and then space.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ForthSection;
