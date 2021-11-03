import React, { Component } from 'react';
import Axios from 'axios';
import { Auth0Context } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            dogType: '',
            dogName: ''
        };
    };

    async componentDidMount() {
        let x = this.props.username;
        await Axios.get('https://final-project-node-server-zron8.ondigitalocean.app/user/' + x)
        //await Axios.get('http://localhost:8080/user/' + this.props.username)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    dogType: response.data.dogType,
                    dogName: response.data.dogName
                })
            })
            .catch(function (error) {
                if (error) {
                    const newUser = {
                        username: x
                    };

                    Axios.post('https://final-project-node-server-zron8.ondigitalocean.app/add', newUser)
                        .then(response => {
                            console.log(response)
                        })
                }
                
            })
    }


    onSubmit() {
        window.location = '/editProfile';
    };

    static contextType = Auth0Context;
    
    render() {
        const { user } = this.context;
        const name = user.name; 

        return (
            <div className="createUserPage">
                <h3 className="createUserH3">Create account</h3>

                    <div className="">
                        <input type="text" placeholder="Full Name" className="createUserInput" value={this.state.name} readOnly/>
                    </div>

                    <div>
                        <input type="text" placeholder={name} className="createUserInput" value={name} readOnly/>
                    </div>

                    <div>
                        <input type="text" placeholder="email" className="createUserInput" value={this.state.email} readOnly/>
                    </div>

                    <div>
                            <input type="text" placeholder="Dog Type" className="createUserInput" value={this.state.dogType} readOnly/>
                    </div>

                    <div>
                            <input type="text" placeholder="Dog Name" className="createUserInput" value={this.state.dogName} readOnly/>
                    </div>

                    <div className="createUserButtonDiv">
                        <button id="createUserSubmitButton" className="createUserButton" onClick={this.onSubmit}>Edit Account </button>
                    </div>

                    <div className="createUserButtonDiv">
                        <LogoutButton className="createUserButton"/>
                    </div>
                    
            </div>
        );
    };
};

export default (CreateUser);