import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div id="content" className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <form>
                            <div className="form-group row">
                                <label labelfor="name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="name" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label labelfor="company" className="col-sm-2 col-form-label">Company</label>
                                <div className="col">
                                    <input type="text" className="form-control" id="company" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label labelfor="email" className="col-sm-2 col-form-label">Email address</label>
                                <div className="col">
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                    else.</small>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label labelfor="phone" className="col-sm-2 col-form-label">Phone</label>
                                <div className="col">
                                    <input type="tel" className="form-control" id="phone" />
                                </div>
                            </div>
                            <div className="form-group row align-items-center">
                                <label className="col-sm-2 col-form-label">Preferred Contact</label>
                                <div className="col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="preferredContact"
                                            id="preferredContactEmail" value="email" defaultChecked />
                                        <label className="form-check-label" labelfor="preferredContactEmail">
                                            Email
                                    </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="preferredContact"
                                            id="preferredContactPhone" value="phone" />
                                        <label className="form-check-label" labelfor="preferredContactPhone">
                                            Phone
                                    </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label labelfor="contactReason" className="col-sm-2 col-form-label">Contact Reason</label>
                                <div className="col">
                                    <select className="form-control" id="contactReason">
                                        <option>More Information</option>
                                        <option>Demo</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label labelfor="comments" className="col-sm-2 col-form-label">Comments</label>
                                <div className="col">
                                    <textarea className="form-control" id="comments" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col offset-sm-2">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;