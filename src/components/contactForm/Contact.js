import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');

    const encode = (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((k) => {
            formData.append(k, data[k]);
        });
        return formData;
    };
    const handleSubmit = (e) => {
        const data = { 'form-name': 'contact', name, email, message, reason };

        fetch('/', {
            method: 'POST',
            // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
            body: encode(data),
        });
        e.preventDefault();
    };

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
                <form onSubmit={handleSubmit} action="/succes/">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <input
                                type="text"
                                className="form-control input__box"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={name}
                                required
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
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
                                value={email}
                                autoComplete="email"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
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
                                value={reason}
                                placeholder="Select reason"
                                name="reason"
                                required
                                onChange={(event) =>
                                    setReason(event.target.value)
                                }
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
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
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
};

export default Contact;
