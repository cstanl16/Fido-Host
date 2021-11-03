import React, { Component } from 'react';
import Axios from 'axios';
import { Auth0Context } from '@auth0/auth0-react';

class Review extends Component {

    constructor(props) {
        super(props);

        this.onChangeRatingt = this.onChangeRating.bind(this);
        this.onChangeComments = this.onChangeComments.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            adID: '',
            rating: '',
            comments: ''
        };
    };

    componentDidMount() {

        this.setState({
            username: this.props.username
        });


    }

    onChangeRating(e) {
        this.setState({
            rating: e.target.value
        });
    }; 

    onChangeComments(e) {
        this.setState({
            comments: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const review = {
            username: this.state.username,
            adID: this.state.adID,
            rating: this.state.rating,
            comments: this.state.comments

        };

        console.log(review);

        Axios.post('https://final-project-node-server-zron8.ondigitalocean.app/review/add', review)
            .then(res => {
                console.log(res.data);
                //window.location = '/tab3';
            })
            .catch(function (error) {
                alert("you may only create one review for each product!");
            })
        // remove afterwards
        //window.location = '/tab3';
    };

    
    render() {

        return (
            <div className="ratingPage">
                This is the rating page {this.state.username}
            </div>
        );
    };
};

export default (Review);