import React, { Component } from 'react';

export default class Thanks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            order: [],
            userId: ""
        }
    }

    componentDidMount() {
        this.setState({
            order: this.props.history.location.state.order,
            userId: this.props.history.location.state.userId
        });

        const order = this.props.history.location.state.order;
        var message = "In case you wanted to know, the player in Task ";
        if (order[0]===1) {message += "2 was a human, and all other players were computers."}
        else if (order[1]===1) {message += "3 was a human and all other players were computers."}
        else if (order[2]===1) {message += "4 was a human and all other players were computers."}
        else if (order[3]===1) {message += "5 was a human and all other players were computers."}
        else {message += "all of the players were computers."};
        this.setState({message: message});
    }

    render() {
        return(
            <div>
                <h3>Congratulations - you have now completed all five tasks!</h3>
               <p>
                   Thank you for partipating in this study.
                   You may now close this window.
                </p>
                <p>{this.state.message}</p>
            </div>
        )
    }
}