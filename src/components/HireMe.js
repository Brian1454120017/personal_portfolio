import React from "react";

const HireMe = () => {
    return (
        <div className="hire-me-section" id="hire-me">
            <h1 className="section-title">Hire Me</h1>
            <div className="hire-me-content">
                <div className="hire-me-form-wrap">
                    <h2>Lets work together</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit nisi, pretium ut lacinia in, elementum id sapien</p>
                    <form>
                        <div className="input-group">
                            <label>Fullname</label>
                            <input className="input-control" type="text" placeholder="e.g Brian Kasonde" required/>
                        </div>
                        <div className="input-group">
                            <label>Contact</label>
                            <input className="input-control" type="text" placeholder="e.g 0960 000 000" required/>
                        </div>
                        <div className="input-group">
                            <label>Project Type</label>
                            <select className="input-control" type="text" placeholder="e.g Brian Kasonde" required>
                                <option>Webbased System or App</option>
                                <option>Mobile App</option>
                                <option>Desktop App</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Project Description</label>
                            <textarea className="input-control" placeholder="Tell me about your project..."/>
                        </div>
                        <div className="input-group">
                            <button className="primary-button">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="contact-wrap">
                    <h2>Get in touch with me.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit nisi, pretium ut lacinia in, elementum id sapien</p>
                    <div className="contact-info">
                        
                        <div class="contact-phone">
                            <img class="contact-icon" src="../assets/icons/phone.png" alt="call" />
                            <div class="phone">
                                <span>Phone number</span>
                                <a href="Tel:+260762557444">+260 7625 557 444</a>
                            </div>
                        </div>

                        <div class="contact-email">
                            <img class="contact-icon" src="../assets/icons/email.png" alt="call" />
                            <div class="email">
                                <span>Email address</span>
                                <a href="mailto:flamintouchtechnologies@gmail.com">flamintouchtechnologies@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireMe;