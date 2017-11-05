import React, { Component } from 'react';

class SubscribeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: '' };
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    onInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return(
            <form className="form-horizontal" onSubmit={this.onFormSubmit.bind(this)}>
                <p>Subscribe to newsletter</p>
                <div className="form-group">
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email address"
                            name='email'
                            value={this.state.email}
                            onChange={this.onInputChange.bind(this)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Password"
                            name='password'
                            value={this.state.password}
                            onChange={this.onInputChange.bind(this)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <button type="submit" className="btn btn-default btn-sm pull-right button-green">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SubscribeForm;
