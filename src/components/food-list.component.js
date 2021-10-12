import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Food = (props) => {
    console.log("here")
    var x = '';
    if (props.food.foodSafe == "Yes") {
        x = "Dogs can eat "
    }
    else if (props.food.foodSafe == "No") {
        x = "Dogs can't eat "
    }
    else  {
        console.log("Help")
        x = "Please try clicking the help me learn more button!"
    }


    return(
        <div>
            <h1>{props.food.foodSafe} </h1>
            <p>{x} {props.food.foodName}</p>
            {/* <tr className="budgetListRow">
                <td className="budgetListCell">{props.food.foodName}</td>
                <td className="budgetListCell">{props.food.foodType}</td>
                <td className="budgetListCell">{props.food.foodSafe}</td>
                <td className="budgetListCell">{props.food.foodNotes}</td>
                <td className="BudgetListCell">
                <Link to={"/edit/"+props.food._id} className="budgetListLinks">edit</Link> | <a className="budgetListLinks" href="#" onClick={() => { props.deleteFood(props.food._id) }}>delete</a>
                </td>
            </tr> */}
        </div>
    )
}

export default class FoodList extends Component {
    constructor(props) {
        super(props);

        this.deleteFood = this.deleteFood.bind(this);
        this.foodSafe = this.foodSafe;
        this.state = {
            foodItems: []
        };
    }

    render() {
        return (
            <div className="BudgetList-Items">
                {/*
                <h3>Food Items</h3>
                <table className="budgetTable">
                    <tbody>
                        <tr className="budgetListRow">
                            <th className="budgetListHeadCell">Food Name</th>
                            <th className="budgetListHeadCell">Food Type</th>
                            <th className="budgetListHeadCell">Food Safe</th>
                            <th className="budgetListHeadCell">Food Notes</th>
                        </tr>
                        
                        
                    </tbody>
                </table>
 
                 <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Create a new Food Item?</label>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="New Food Item" className="newFoodItem" />
                    </div>
                </form> */}
                { this.foodList() }
            </div>
        )
        
    }

    onTrigger() {
        var safe = this.foodSafe;
        console.log(safe);
        
    }

    onSubmit(e) {
        e.preventDefault();
    
        window.location = '/create';
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
            foodItems: this.state.foodItems.filter(foodbudget => foodbudget.foodName == (`${name}`) )
            
        });

        //this.setState({
        //    foodItems: this.state.foodItems.filter(currentfood => currentfood )
        //});

    }

    handleCallback = (FOODSAFE) =>{
        console.log(FOODSAFE);
        this.setState({foodSafe: FOODSAFE})
    }

    foodList() {

        return this.state.foodItems.map(currentfood => {

            
            this.props.parentCallback(currentfood.foodSafe);
        return <Food  food={currentfood} deleteFood={this.deleteFood} key={currentfood._id}/>;
        });
    }

}