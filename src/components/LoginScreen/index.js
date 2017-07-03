import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import * as validators from './validators';

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

class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.getErrorMessage = this.getErrorMessage.bind(this);
    }

    getErrorMessage(title, formContent) {
        if (title === "Username") {
            return "Username must be at least 4 characters long.";
        } else if (title === "Password") {
            return "Password must be at least 6 characters long.";
        } else if (title === "Confirm password") {
            return "Password do not match.";
        }
    }

    render() {

        let statusClasses = '';

        if (this.props.status === 'warning') {
            statusClasses += ' is-danger';
        } else if (this.props.status === 'success') {
            statusClasses += ' is-success';
        }

        if (this.props.status !== 'warning') {
            return (
                <div className="field">
                    <label className="label">{this.props.title}</label>
                    <InputFieldInput icon={this.props.icon} handleEvent={this.props.handleEvent}
                        type={this.props.type} status={this.props.status} statusClasses={statusClasses}/>
                </div>
            );
        } else {
            return (
                <div className="field">
                    <label className="label">{this.props.title}</label>
                    <InputFieldInput icon={this.props.icon} handleEvent={this.props.handleEvent}
                        type={this.props.type} status={this.props.status} statusClasses={statusClasses}/>
                    <InputFieldHelperText status={this.props.status} statusClasses={statusClasses} message={this.getErrorMessage(this.props.title, this.props.formContent)}/>
                </div>
            );
        }
    }

}

class InputFieldHelperText extends React.Component {
    render() {

        let helpClasses = "help";

        return (
            <p className={helpClasses + " " + this.props.statusClasses}>
                {this.props.message}
            </p>
        );
    }
}

class InputFieldInput extends React.Component {

    render() {

        let mainClasses = 'control has-icons-left';
        let inputClasses = 'input';

        if (this.props.status !== 'none') {
            mainClasses += ' has-icons-right';
        }

        let iconClassName = 'fa ' + this.props.icon;

        return (
            <p className={mainClasses}>
                <input onChange={this.props.handleEvent} className={inputClasses + ' ' + this.props.statusClasses} type={this.props.type}/>
                <span className="icon is-small is-left">
                        <i className={iconClassName}></i>
                </span>
            </p>
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

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(e) {
        e.preventDefault();
        this.setState({username: e.target.value});
        let newValidity = validators.validateRegistrationform(e.target.value, this.state.password, this.state.passwordConfirmation);
        this.setState({isValid: newValidity});
    }

    handlePasswordChange(e) {
        e.preventDefault();
        this.setState({password: e.target.value});
        let newValidity = validators.validateRegistrationform(this.state.username, e.target.value, this.state.passwordConfirmation);
        this.setState({isValid: newValidity});
    }

    handlePasswordConfirmationChange(e) {
        e.preventDefault();
        this.setState({passwordConfirmation: e.target.value});
        let newValidity = validators.validateRegistrationform(this.state.username, this.state.password, e.target.value);
        this.setState({isValid: newValidity});
    }

    render() {
        return (
            <div className="box">
                <h1 className="title is-black">Create a new account</h1>
                <InputField title="Username" icon="fa-user" handleEvent={this.handleUsernameChange} type="text"
                    status={validators.checkUsernameFieldStatus(this.state.username)} formContent={this.state}/>
                <InputField title="Password" icon="fa-lock" handleEvent={this.handlePasswordChange} type="password"
                    status={validators.checkPasswordFieldStatus(false, this.state.password, this.state.passwordConfirmation)} formContent={this.state}/>
                <InputField title="Confirm password" icon="fa-lock" handleEvent={this.handlePasswordConfirmationChange} type="password"
                    status={validators.checkPasswordFieldStatus(true, this.state.password, this.state.passwordConfirmation)} formContent={this.state}/>
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

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(e) {
        e.preventDefault();
        this.setState({
            username: e.target.value,
            isValid: e.target.value !== '' && this.state.password !== ''
        });
    }

    handlePasswordChange(e) {
        e.preventDefault();
        this.setState({
            password: e.target.value,
            isValid: this.state.username !== '' && e.target.value !== ''
        });
    }

    render() {
        return (
            <div className="box">
                <h1 className="title is-black">Welcome back!</h1>
                <InputField title="Username" icon="fa-user" handleEvent={this.handleUsernameChange} type="text"
                    status='none'/>
                <InputField title="Password" icon="fa-lock" handleEvent={this.handlePasswordChange} type="password"
                    status='none'/>
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