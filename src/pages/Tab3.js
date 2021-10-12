import { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton } from '@ionic/react';
import FoodList from '../components/food-list.component.js';
import SearchBox from '../components/SearchBox.js';


class Tab3 extends Component{
    constructor(props) {
        super(props);

        //this.setKeyState = this.setKeyState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.routeToFoodInfo = this.routeToFoodInfo.bind(this);

        this.state = {
            searchText: '',
            searchFood: '',
            foodSafe: '',
        }
    }

    componentDidMount() {
        var x = document.getElementById("foodListShow");
            x.style.display = "none";
    }

     onChange(event) {
         this.setState({searchText: event.target.value});
         var x = document.getElementById("foodListShow");
             x.style.display = "none";
     }

    routeToFoodInfo() {
        const url = `https://www.akc.org/?s=${this.state.searchText}/`
        window.location.href = url;
        
      }

    onSearch() {
        var x = document.getElementById("foodListShow");
              x.style.display = "block";

    }

    handleCallback(FOODSAFE) {
        if (FOODSAFE == "Yes") {
            var x = document.getElementById("main");
              x.style.backgroundColor = "green";
        }
        else {
            var x = document.getElementById("main");
              x.style.backgroundColor = "#ff0000";
        }
    }

    foodList() {
        return ;
    }

    render() {

        return(
            <IonPage>
                <IonContent fullscreen >
                    <div id="main" style={{backgroundColor: 'blue'}}>
                        <h1 className="homePageTitle">
                        What Can Fido Eat?
                        </h1>

                        <SearchBox value={this.state.searchText} handleChange={this.onChange} showCancelButton="never"/>
                        <IonButton value="search" onClick={ this.onSearch }>Search</IonButton>


                        <div id="foodListShow" >
                            <FoodList parentCallback = { this.handleCallback } key = { this.state.searchText } foodName = {this.state.searchText}/>
                        </div>

                        <IonButton onClick={ this.routeToFoodInfo } class="moreInfoOnSearch">Help Me learn More!</IonButton>
                    </div>
                </IonContent>
            </IonPage>
        );

        
    }

}

export default Tab3;