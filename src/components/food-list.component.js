import React, { Component } from 'react';
import axios from 'axios';

export const Food = (props) => {
    
    var x = '';
    if (props.food.foodSafe === "Yes") {
        x = "Dogs can eat ";
    }
    else if (props.food.foodSafe === "No") {
        x = "Dogs can't eat ";
    }
    else  {
        console.log("We finally got here!!!");
        x = "Please try clicking the help me learn more button!";
    }

    return(
        <div className="foodReturn">
            <h1>{props.food.foodSafe}!</h1>
            <p>{x} {props.food.foodName}</p>
        </div>
    );

}

export default class FoodList extends Component {

    constructor(props) {
        super(props);

        this.deleteFood = this.deleteFood.bind(this);
        this.foodSafe = '';
        this.state = {
            foodItems: []
        };
    }

    render() {
        return (
            <div className="BudgetList-Items">
                { this.foodList() }
            </div>
        )
        
    }


    componentDidMount() {
        axios.get('https://final-project-node-server-zron8.ondigitalocean.app/food') //username/'+this.props.username
        .then(response => {
            this.setState({ foodItems: response.data });
            console.log({ foodItems: response.data });
            this.filterFoodList();
        })
        .catch((error) => {
            console.log(error);
        });
        

    }

    deleteFood(id) {
        axios.delete('https://final-project-node-server-zron8.ondigitalocean.app/food'+id)
        .then(response => { 
            console.log(response.data);
            window.location = '/tab3';
        }); 
    }


    filterFoodList() {  
        const name = this.props.foodName;
        this.setState({
            foodItems: this.state.foodItems.filter(foodbudget => foodbudget.foodName === (`${name}`) )
            
        });

    }

    foodList() {

        return this.state.foodItems.map(currentfood => {

            this.props.parentCallback(currentfood.foodSafe);
            
        return <Food  food={currentfood} deleteFood={this.deleteFood} key={currentfood._id}/>;
        });
    }

}