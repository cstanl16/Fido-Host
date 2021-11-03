import React, { Component } from 'react';
import Axios from 'axios';
import { Auth0Context } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDogType = this.onChangeDogType.bind(this);
        this.onChangeDogName = this.onChangeDogName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            dogType: '',
            dogName: ''
        };
    };

    componentDidMount() {
        Axios.get('https://final-project-node-server-zron8.ondigitalocean.app/user/' + this.props.username)
        //Axios.get('http://localhost:8080/user/' + this.props.username)
            .then(response => {
                console.log(response);
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    dogType: response.data.dogType,
                    dogName: response.data.dogName
                })
            })
            .catch(function (error) {
                if (error === '400') {
                    console.log("Hello");
                }
                
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    };


    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
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

    onSubmit() {
        console.log("herex2")
        
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
                        <input type="text" placeholder="Full Name" className="createUserInput" value={this.state.name} onChange={this.onChangeName}/>
                    </div>

                    <div>
                        <input type="text" placeholder={name} className="createUserInput" value={name} readOnly/>
                    </div>

                    <div>
                        <input type="text" placeholder="email" className="createUserInput" value={this.state.email} onChange={this.onChangeEmail}/>
                    </div>

                    <div>
                            <input type="text" placeholder="Dog Type" className="createUserInput" value={this.state.dogType} onChange={this.onChangeDogType}/>
                    </div>

                    <div>
                            <input type="text" placeholder="Dog Name" className="createUserInput" value={this.state.dogName} onChange={this.onChangeDogName}/>
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