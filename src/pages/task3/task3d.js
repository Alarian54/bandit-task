import React, { Component } from "react";

export default class Task3d extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            userId: ""
        }
    }
    
    handleButtonClick(event) {
        this.props.history.push({
            pathname: "task4a",
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
                    <h3>Task 3</h3>
                    <p>
                        The third task will be similar to the second.
                        Proceed by clicking "Next Choice" to see what the other player chooses.
                    </p>
                    <p>
                        Note that no two computer players in this study will be following the <b>same set of rules</b> (if there are at least two).
                        Again, the payoff rates for each option will be different from the last game.
                    </p>
                </div>
                <hr/>
                <div>
                    <h3>How sure are you of your decision?</h3>
                </div>
                <br/>
                    <div class="container">
                        <button type='button' className='button' onClick={event => this.handleButtonClick(event, true)}>Certain</button>
                        <button type='button' className='button' onClick={event => this.handleButtonClick(event, true)}>Very sure</button>
                        <button type='button' className='button' onClick={event => this.handleButtonClick(event, true)}>Pretty sure</button>
                        <button type='button' className='button' onClick={event => this.handleButtonClick(event, true)}>Not very sure</button>
                        <button type='button' className='button' onClick={event => this.handleButtonClick(event, true)}>I just guessed</button>
                    </div>
                <br/><br/><br/>
            </div>
        )
    }
}