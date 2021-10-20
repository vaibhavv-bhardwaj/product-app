import { Component } from "react";
import LoginComponent from './Login'
import { history } from "../../managers/history";
import utility, { mapDispatchToProps } from "../../managers/validations";
import { connect } from 'react-redux'
import { eventConstants } from "../../managers/eventConstants";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: ""
        }
    }

    onChangeEvent = (event) => {
        this.setState({ [event.target.id]: event.target.value, [`${event.target.id}Error`]: '' });
    };

    validateLoginForm = () => {
        this.setState({
            emailError: utility.validateEmail(this.state.email) ? "" : "Email is not valid",
            passwordError: utility.validatePassword(this.state.password) ? "" : "Password must be 8 characters long"
        });
        return utility.validateEmail(this.state.email) && utility.validatePassword(this.state.password);
    };

    onLoginClick = async () => {
        if (!this.validateLoginForm) {
            return
        }
        let reqObj = {
            "email": this.state.email,
            "password": this.state.password
        }
        this.props.mapDispatchToProps(eventConstants.LOGIN_USER, reqObj)
        // this.props.dispatchAction(eventConstants.LOGIN_USER);
        // if (!this.validateLoginForm) {
        //     return history.push("/")
        // }
        // else {
        //     return history.push("/dashboard")
        // }
        history.push("/dashboard")
    }
    render() {
        return (
            <LoginComponent
                state={this.state}
                onLoginClick={this.onLoginClick}
                onChangeEvent={this.onChangeEvent}
            />
        )
    }
}

const mapStateToProps = state => (
    {
        userData: state.user,
    }
)

export default connect(mapStateToProps, { mapDispatchToProps })(Login);