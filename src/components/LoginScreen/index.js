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

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
            isValid: false
        };

        this.checkValidity = this.checkValidity.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(e) {
        e.preventDefault();
        this.setState({username: e.target.value});
        this.checkValidity(e.target.value, this.state.password, this.state.passwordConfirmation);
    }

    handlePasswordChange(e) {
        e.preventDefault();
        this.setState({password: e.target.value});
        this.checkValidity(this.state.username, e.target.value, this.state.passwordConfirmation);
    }

    handlePasswordConfirmationChange(e) {
        e.preventDefault();
        this.setState({passwordConfirmation: e.target.value});
        this.checkValidity(this.state.username, this.state.password, e.target.value);
    }

    checkValidity(username, password, passwordConfirmation) {
        let newValidity = false;

        if (username !== '' && password !== '') {
            if (password === passwordConfirmation)  {
                newValidity = true;
            }
        }

        this.setState({isValid: newValidity});
    }

    render() {
        return (
            <div className="box">
                <h1 className="title is-black">Create a new account</h1>
                <div className="field">
                    <label className="label">Username</label>
                    <p className="control">
                        <input onChange={this.handleUsernameChange} className="input" type="text"/>
                    </p>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <p className="control">
                        <input onChange={this.handlePasswordChange} className="input" type="password"/>
                    </p>
                </div>
                <div className="field">
                    <label className="label">Confirm password</label>
                    <p className="control">
                        <input onChange={this.handlePasswordConfirmationChange} className="input" type="password"/>
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <button disabled={!this.state.isValid} className="button is-info login-button">Register</button>
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

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isValid: false
        };

        this.checkValidity = this.checkValidity.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(e) {
        e.preventDefault();
        this.setState({username: e.target.value});
        this.checkValidity(e.target.value, this.state.password);
    }

    handlePasswordChange(e) {
        e.preventDefault();
        this.setState({password: e.target.value});
        this.checkValidity(this.state.username, e.target.value);
    }

    checkValidity(username, password) {
        let newValidity = false;

        if (username !== '' && password !== '') {
            newValidity = true;
        }

        this.setState({isValid: newValidity});
    }

    render() {
        return (
            <div className="box">
                <h1 className="title is-black">Welcome back!</h1>
                <div className="field">
                    <label className="label">Username</label>
                    <p className="control">
                        <input onChange={this.handleUsernameChange} className="input" type="text"/>
                    </p>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <p className="control">
                        <input onChange={this.handlePasswordChange} className="input" type="password"/>
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <button disabled={!this.state.isValid} className="button is-info login-button">Login</button>
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