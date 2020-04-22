import React, { Component } from "react";

export default class Task5a extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            userId: ""
        }
    }

    
    handleButtonClick(event) {
        this.props.history.push({
            pathname: '/task5b',
            state: {order: this.state.order, userId: this.state.userId}
        });
    }  

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({
            order: this.props.history.location.state.order,
            userId: this.props.history.location.state.userId
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Congratulations - you have completed the fourth task!</h3>
                </div>
                <hr/>
                <div>
                    <h3>Task 5</h3>
                    <p>
                        The fifth and final task will be similar to the previous three.
                        Proceed by clicking "Next Choice" to see what the other player chooses.
                    </p>
                    <p>
                        Again, remember that no two computer players in this study will be following the same set of rules, and that the payoff rates will be different from the last game.
                    </p>
                </div>
                <br/>
                <button type='button' className='button leftpadded' onClick={event => this.handleButtonClick(event)}>Start Task 5</button>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}