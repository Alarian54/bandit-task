import React, { Component } from "react";

export default class Task4c extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            userId: ""
        }
    }

    handleButtonClick(event) {
        this.props.history.push({
            pathname: '/task4d',
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
                    <h3>Task 4</h3>
                    <p>
                        The fourth task will be similar to the previous two.
                        Proceed by clicking "Next Choice" to see what the other player chooses.
                    </p>
                    <p>
                        Again, remember that no two computer players in this study will be following the same set of rules, and that the payoff rates will be different from the last game.
                    </p>
                </div>
                <hr/>
                <div>
                    <h3>Now, do you think the game was being played by a human? Or by a computer following rules?</h3>
                </div>
                <br/>
                    <div class="container">
                        <button type='button' className='button' onClick={event => this.handleButtonClick(event, true)}>The choices came from another human player</button>
                        <button type='button' className='button' onClick={event => this.handleButtonClick(event, true)}>The choices were made by a computer following rules</button>
                    </div>
                <br/><br/><br/>
            </div>
        )
    }
}