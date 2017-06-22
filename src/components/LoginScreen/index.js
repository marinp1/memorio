import React from 'react';
import {withRouter, Link} from 'react-router-dom';

require('./style.scss');

class InformationBox extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">
                    Memorio
                </h1>
                <h2 className="subtitle">
                    Responsive and simple note-taking application
                </h2>
            </div>
        );
    }
}

class RegistrationForm extends React.Component {
    render() {
        return (
            <div className="box">
                <h1 className="title is-black">Create a new account</h1>
                <div className="field">
                    <label className="label">Username</label>
                    <p className="control">
                        <input className="input" type="text"/>
                    </p>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <p className="control">
                        <input className="input" type="password"/>
                    </p>
                </div>
                <div className="field">
                    <label className="label">Confirm password</label>
                    <p className="control">
                        <input className="input" type="password"/>
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-info login-button">Register</button>
                    </p>
                </div>
                <Link to="/login" className="is-grey register-link">
                    Already have an account? Login here.
                </Link>
            </div>
        );
    }   
}

class LoginForm extends React.Component {
    render() {
        return (
            <div className="box">
                <h1 className="title is-black">Login</h1>
                <div className="field">
                    <label className="label">Username</label>
                    <p className="control">
                        <input className="input" type="text"/>
                    </p>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <p className="control">
                        <input className="input" type="password"/>
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-info login-button">Login</button>
                    </p>
                </div>
                <Link to="/register" className="is-grey register-link">
                    Don't have an account? Register here.
                </Link>
            </div>
        );
    }
}

class InputForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeForm: 'registration',
            currentRoute: '/register'
        };
    }

    toggleActiveForm() {
        if (this.state.activeForm === 'registration') {
            this.setState({activeForm: 'login'});
        } else {
            this.setState({activeForm: 'registration'});
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentRoute !== this.state.currentRoute) {
            this.toggleActiveForm();
            this.setState({
                currentRoute: nextProps.currentRoute
            });
        }
    }

    render() {
        if (this.state.activeForm === 'registration') {
            return <RegistrationForm/>;
        } else {
            return <LoginForm/>;
        }
    }

}

class LoginRegistrationScreenBase extends React.Component {

    render() {
        return (
            <section className="hero is-bold is-info is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <InformationBox/>
                        </div>
                        <div className="column">
                            <InputForm currentRoute={this.props.location.pathname}/>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        );
    }

};

const LoginRegistrationScreen = withRouter(props => <LoginRegistrationScreenBase {...props}/>);

export default LoginRegistrationScreen;