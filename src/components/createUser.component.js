import React, { Component } from 'react';
import Axios from 'axios';

class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);
        this.onChangeDogType = this.onChangeDogType.bind(this);
        this.onChangeDogName = this.onChangeDogName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '', 
            name: '',
            email: '',
            password: '',
            password2: '',
            dogType: '',
            dogName: ''
        };
    };

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    };

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    };

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    };

    onChangePassword(e) {
        var updatedPassword = e.target.value;
        
        this.setState({
            password: updatedPassword
        });
 
        if (updatedPassword === this.state.password2) {

            var a = document.getElementById("createUserSubmitButton");
                a.className = "createUserButton";

            var b = document.getElementById("testMatch");
                b.className = "Match";

        }
        else if (updatedPassword !== this.state.password2) {

            var c = document.getElementById("createUserSubmitButton");
                c.className = "Disabled";

            var d = document.getElementById("testMatch");
                d.className = "noMatch";
        } 

    };

    onChangePassword2(e) {
        var updatedPassword2 = e.target.value;

        this.setState({
            password2: updatedPassword2
        });

        if (this.state.password === updatedPassword2) {

            var a = document.getElementById("createUserSubmitButton");
                a.className = "createUserButton";

            var b = document.getElementById("testMatch");
               b.className = "Match";

        }
        else if (this.state.password !== updatedPassword2) {

            var c = document.getElementById("createUserSubmitButton");
                c.className = "Disabled";

            var d = document.getElementById("testMatch");
               d.className = "noMatch";

        } 

    };

    onChangeDogType(e) {
        this.setState({
            dogType: e.target.value
        });
    };

    onChangeDogName(e) {
        this.setState({
            dogName: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            dogType: this.state.dogType,
            dogName: this.state.dogName

        };

        console.log(user);

        Axios.post('https://final-project-node-server-zron8.ondigitalocean.app/user/add', user)
            .then(res => {
                console.log(res.data);
                window.location = '/tab3';
            });
        // remove afterwards
        window.location = '/tab3';
    };
    
    render() {
        return (
            <div className="createUserPage">
                <h3 className="createUserH3">Create account</h3>
                <form className="createUserForm" onSubmit={this.onSubmit}>

                    <div className="">
                        <input type="text" placeholder="Full Name" className="createUserInput" value={this.state.name} onChange={this.onChangeName}/>
                    </div>

                    <div>
                        <input type="text" placeholder="Username" className="createUserInput" value={this.state.username} onChange={this.onChangeUsername}/>
                    </div>

                    <div>
                        <input type="text" placeholder="email" className="createUserInput" value={this.state.email} onChange={this.onChangeEmail}/>
                    </div>

                    <div>
                            <input type="text" placeholder="password" className="createUserInput" selected={this.state.password} onChange={this.onChangePassword}/>
                    </div>

                    <div id="testMatch" className="Match">
                        Passwords Must match!
                    </div>

                    <div>
                            <input type="text" placeholder="password" className="createUserInput" selected={this.state.password2} onChange={this.onChangePassword2}/>
                    </div>

                    <div>
                            <input type="text" placeholder="Dog Type" className="createUserInput" selected={this.state.dogType} onChange={this.onChangeDogType}/>
                    </div>

                    <div>
                            <input type="text" placeholder="Dog Name" className="createUserInput" selected={this.state.dogName} onChange={this.onChangeDogName}/>
                    </div>

                    <div className="createUserButtonDiv">
                        <button id="createUserSubmitButton" className="createUserButton" onSubmit={this.onSubmit}>done! </button>
                    </div>
                    
                </form>
            </div>
        );
    };
};

export default (CreateUser);