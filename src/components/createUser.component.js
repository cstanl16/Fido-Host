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
        this.setState({
            password: e.target.value
        });
    };

    onChangePassword2(e) {
        this.setState({
            password2: e.target.value
        });

        //if password 2 doesnt match send error

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
            password2: this.state.password2,
            dogType: this.state.dogType,
            dogName: this.state.dogName

        };

        console.log(user);

        Axios.post('https://final-project-node-server-zron8.ondigitalocean.app/user/add', user)
            .then(res => {
                console.log(res.data);
                window.location = '/tab3';
            });
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
                        <button className="createUserButton" onSubmit={this.onSubmit}>done! </button>
                    </div>
                    
                </form>
            </div>
        );
    };
};

export default (CreateUser);