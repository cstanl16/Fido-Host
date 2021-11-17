import React, { Component } from 'react';
import Axios from 'axios';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class Review extends Component {

    constructor(props) {
        super(props);

        this.onChangeComments = this.onChangeComments.bind(this);
        this.onClick1 = this.onClick1.bind(this);
        this.onClick2 = this.onClick2.bind(this);
        this.onClick3 = this.onClick3.bind(this);
        this.onClick4 = this.onClick4.bind(this);
        this.onClick5 = this.onClick5.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            adID: 'petco',
            rating: '',
            comments: ''
        };
    };

    componentDidMount() {

        this.setState({
            username: this.props.username
        });
    }

    onChangeComments(e) {
        this.setState({
            comments: e.target.value
        });
    };

    onClick1() {
        this.setState({
            rating: 1
        });
        var star1 = document.getElementById("star1");
        var star2 = document.getElementById("star2");
        var star3 = document.getElementById("star3");
        var star4 = document.getElementById("star4");
        var star5 = document.getElementById("star5");
        star1.style.color = "Yellow";
        star2.style.color = "White";
        star3.style.color = "White";
        star4.style.color = "White";
        star5.style.color = "white";
    };

    onClick2() {
        this.setState({
            rating: 2
        });
        var star1 = document.getElementById("star1");
        var star2 = document.getElementById("star2");
        var star3 = document.getElementById("star3");
        var star4 = document.getElementById("star4");
        var star5 = document.getElementById("star5");
        star1.style.color = "Yellow";
        star2.style.color = "Yellow";
        star3.style.color = "White";
        star4.style.color = "White";
        star5.style.color = "white";
    };

    onClick3() {
        this.setState({
            rating: 3
        });
        var star1 = document.getElementById("star1");
        var star2 = document.getElementById("star2");
        var star3 = document.getElementById("star3");
        var star4 = document.getElementById("star4");
        var star5 = document.getElementById("star5");
        star1.style.color = "Yellow";
        star2.style.color = "Yellow";
        star3.style.color = "Yellow";
        star4.style.color = "White";
        star5.style.color = "white";
    };

    onClick4() {
        this.setState({
            rating: 4
        });
        var star1 = document.getElementById("star1");
        var star2 = document.getElementById("star2");
        var star3 = document.getElementById("star3");
        var star4 = document.getElementById("star4");
        var star5 = document.getElementById("star5");
        star1.style.color = "Yellow";
        star2.style.color = "Yellow";
        star3.style.color = "Yellow";
        star4.style.color = "Yellow";
        star5.style.color = "white";
    };

    onClick5() {
        this.setState({
            rating: 5
        });
        var star1 = document.getElementById("star1");
        var star2 = document.getElementById("star2");
        var star3 = document.getElementById("star3");
        var star4 = document.getElementById("star4");
        var star5 = document.getElementById("star5");
        star1.style.color = "Yellow";
        star2.style.color = "Yellow";
        star3.style.color = "Yellow";
        star4.style.color = "Yellow";
        star5.style.color = "Yellow";

    };

    onSubmit(e) {
        e.preventDefault();

        const review = {
            username: this.state.username,
            adID: this.state.adID,
            rating: this.state.rating,
            comments: this.state.comments
            
        };

        console.log(review)

        Axios.post('https://final-project-node-server-zron8.ondigitalocean.app/review/add', review)
        //Axios.post('http://localhost:8080/review/add', review)
            .then(res => {
                console.log(res.data);
                window.location = '/tab3';
            })
            .catch(function (error) {
                console.log(error);
            })
        // remove afterwards
        //window.location = '/tab3';
    };

    
    render() {

        return (
            
            <div className="ratingPage">

                This is the rating page {this.state.username}

                <div className="stars">
                    <button id="star1" onClick={this.onClick1}><FontAwesomeIcon icon={faStar}/></button>
                    <button id="star2" onClick={this.onClick2}><FontAwesomeIcon icon={faStar}/></button>
                    <button id="star3" onClick={this.onClick3}><FontAwesomeIcon icon={faStar}/></button>
                    <button id="star4" onClick={this.onClick4}><FontAwesomeIcon icon={faStar}/></button>
                    <button id="star5" onClick={this.onClick5}><FontAwesomeIcon icon={faStar}/></button>
                </div>

                <div className="reviewComments">
                    <input type="text" placeholder="Comments" value={this.state.comments} onChange={this.onChangeComments}/>
                </div>

                <div className="submitButton">
                    <button onClick={this.onSubmit}>Submit</button>
                </div>

                
            </div>
        );
    };
};

export default (Review);