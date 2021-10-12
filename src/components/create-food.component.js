import React, { Component } from 'react';
import Axios from 'axios';

class CreateFood extends Component {

    constructor(props) {
        super(props);

        this.onChangeFoodName = this.onChangeFoodName.bind(this);
        this.onChangeFoodType = this.onChangeFoodType.bind(this);
        this.onChangeFoodSafe = this.onChangeFoodSafe.bind(this);
        this.onChangeFoodNotes = this.onChangeFoodNotes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            foodName: '', 
            foodType: '',
            foodSafe: 0,
            foodNotes: '',
        };
    };

    onChangeFoodName(e) {
        this.setState({
            foodName: e.target.value
        });
    };

    onChangeFoodType(e) {
        this.setState({
            foodType: e.target.value
        });
    };

    onChangeFoodSafe(e) {
        this.setState({
            foodSafe: e.target.value
        });
    };

    onChangeFoodNotes(e) {
        this.setState({
            foodNotes: e.target.value
        });
    };


    onChangeDate(date) {
        this.setState({
            foodNotes: date //MAKE THIS GET TODAYS DATE
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const food = {
            foodName: this.state.foodName,
            foodType: this.state.foodType,
            foodSafe: this.state.foodSafe,
            foodNotes: this.state.foodNotes
        };

        console.log(food);

        Axios.post('https://final-project-node-server-zron8.ondigitalocean.app/food/add', food)
            .then(res => {
                console.log(res.data);
                window.location = '/tab3';
            });
    };

    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus();
    };
    
    render() {
        return (
            <div className="createBudgetDiv">
                <h3 className="createBudgetH3">Create a new Food Item</h3>
                <form className="createBudgetForm" onSubmit={this.onSubmit}>

                    <div className="">
                        <label>Food Name:</label>
                        <input type="text" className="createBudgetInput" value={this.state.foodName} onChange={this.onChangeFoodName}/>
                    </div>

                    <div>
                        <label>Food Type: </label>
                        <input type="text" className="createBudgetInput" value={this.state.foodType} onChange={this.onChangeFoodType}/>
                    </div>

                    <div>
                        <label>Food Safe: </label>
                        <input type="text" className="createBudgetInput" value={this.state.foodSafe} onChange={this.onChangeFoodSafe}/>
                    </div>

                    <div>
                        <label>Food Notes: </label>
                            <input type="text" className="createBudgetInput" selected={this.state.foodNotes} onChange={this.onChangeFoodNotes}/>
                    </div>

                    <div>
                        <input type="submit" className="createBudgetButton" value="Create New Food Item" />
                    </div>
                </form>
            </div>
        );
    };
};

export default (CreateFood);