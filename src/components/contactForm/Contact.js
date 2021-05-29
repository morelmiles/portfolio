import React from 'react';

function Contact() {
    return (
        <>
            <h4
                className=" text-center mt-5
       heading text-dark"
            >
                Contact Me
            </h4>

            <p className="text-center contact__para">
                Want us to collaborate on a project? <br />
                Get in touch.
            </p>
            <p className="text-center">
                WhatsApp me on
                <a href="tel:+256 704 916 696">+256 704 916 696</a> <br />
                Or fill in the form below
            </p>
            <div className="container">
                <form
                    action="/success"
                    onSubmit="submit"
                    data-netlify="true"
                    method="POST"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <div hidden>
                        <input name="bot-field" />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <input
                                type="text"
                                className="form-control input__box"
                                id="name"
                                name="name"
                                placeholder="Name"
                                required
                            />
                            <div class="invalid-feedback">
                                Valid name is required.
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <input
                                type="email"
                                className="form-control input__box"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                autoComplete="email"
                                required
                            />
                            <div class="invalid-feedback">
                                Valid email address is required.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <select
                                class=" d-block form-control input__box box-shadow w-100"
                                id="reason"
                                placeholder="Select reason"
                                name="reason"
                                required
                            >
                                <option value="">Select a reason...</option>
                                <option value="hi">I just wanna say Hi</option>
                                <option value="project">
                                    I have a project
                                </option>
                                <option value="inquiry">
                                    I have an inquiry...
                                </option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-2">
                            <textarea
                                className="form-control"
                                rows="4"
                                name="message"
                                required
                                placeholder="Message"
                            ></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btnSubmit mt-3 mb-3 btn">
                        Send Message
                    </button>
                </form>
            </div>
        </>
    );
}

export default Contact;
