import React, { Component } from "react";

export default class Task2a extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            totalScore: 0,
            userId: ""
        }
    }

    
    handleButtonClick(event) {
        this.props.history.push({
            pathname: '/task2b',
            state: {order: this.state.order, userId: this.state.userId}
        });
    }  

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({
            order: this.props.history.location.state.order,
            totalScore: this.props.history.location.state.totalScore,
            userId: this.props.history.location.state.userId
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Congratulations - you have completed the first task!</h3>
                    <p>Your total score was <b>{this.state.totalScore}</b>, out of a maximum of 30.</p>
                </div>
                <hr/>
                <div>
                    <h3>Task 2</h3>
                    <p>
                        The second task involves a very similar game to the first task.
                        However, in this task, the choices will be <b>made for you</b>.
                        Simply click "Next Choice" to see what the other player chose.
                    </p>
                    <p>
                        Otherwise, the rules of the game are the same as before.
                        However, the payoff rates for each option will be <b>different</b> from the last game.
                    </p>
                    <p>
                        The series of choices being made will be taken from <b>one of these two sources</b>:
                        <ol>
                            <li>Another human participant playing the game - just as you did in the first task.</li>
                            <li>A computer algorithm that is playing the game according to a fixed set of rules.</li>
                        </ol>
                    </p>
                    <p>
                        After the game has finished, you will be asked whether you thought the other player was a human or not.
                    </p>
                </div>
                <br/>
                <button type='button' className='button' onClick={event => this.handleButtonClick(event)}>Start Task 2</button>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}