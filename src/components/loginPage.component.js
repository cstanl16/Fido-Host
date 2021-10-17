import React, { Component } from 'react';
import Axios from 'axios';

class login extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        //this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onRouteToNewUser = this.onRouteToNewUser.bind(this);

        this.state = {
            username: '', 
            password: '',
        };
    };

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    };

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
        };

        console.log(user);

        Axios.post('https://final-project-node-server-zron8.ondigitalocean.app/user/add', user)
            .then(res => {
                console.log(res.data);
                window.location = '/tab3';
            });
    };

    onRouteToNewUser() {
        const url = 'http://localhost:3000/newuser' //change when hosted!
        window.location.href = url;
        
    }
    
    render() {
        return (
            <div className="createUserPage">
                <h3 className="createUserH3">Login</h3>
                <form className="createUserForm" onSubmit={this.onSubmit}>

                    <div className="">
                        <input type="text" placeholder="Username" className="createUserInput" value={this.state.username} onChange={this.onChangeUsername}/>
                    </div>

                    <div>
                        <input type="text" placeholder="Password" className="createUserInput" value={this.state.password} onChange={this.onChangePassword}/>
                    </div>

                    <div className="createUserButtonDiv">
                        <button className="createUserButton" onSubmit={this.onSubmit}>done! </button>
                    </div>
                    
                </form>
            </div>
        );
    };
};

export default (login);