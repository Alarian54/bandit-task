import React, { Component } from "react";

export default class Task1a extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
            userId: ""
        }
    }

    handleButtonClick(event) {
        this.props.history.push({
            pathname: '/task1b',
            state: {userId: this.state.userId}
        });
    }  

    writeToDB(updatedKey, optChosen, success) { }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({
            userId: this.props.history.location.state.userId,
            consented: this.props.history.location.state.consented
        });    
    }

    render() {

        if (!this.state.userId || this.state.userId === "") {
            return(
                <div>
                    <h3>There was a problem loading the game. Please return to the <a href="/">home page</a> and try again.</h3>
                    <p>If the problem persists, please close this window and try again. Apologies for any difficulties.</p>
                </div>

            )
        } else {

            const {userId} = this.state;

            return (
                <div>
                    <div>
                        <h3>Thank you for agreeing to participate.</h3>
                        <p>Your unique ID is {userId}</p>
                        <p>This study will consist of five tasks.</p>
                    </div>
                    <hr/>
                    <div>
                        <h3>Task 1</h3>
                        <p>The first task is to play a game.</p>
                        <p>
                            In this game, your goal is to score as many points as you can.
                            To score points, you will have to click on one of the five options below.
                        </p>
                        <p>
                            You can think of these options as flipping a coin - when you do so, you either win or you don't.
                            Similarly, when you click on one of the options, you will either score 1 point or no points.
                            Also like flipping a coin, the chance of a point does not change depending on which options you have already chosen.
                        </p>
                        <p>    
                            However, <i>unlike</i> real coins, each choice has a different payoff rate.
                            In other words, some choices are more likely to give you a point than others each time you click on them.
                            During the round, the payoff rate of each choice will not change - the chance of winning for a given machine will remain the same.
                        </p>
                        <p>
                            Above each option will be displayed the number of times you won points or didn't win points when you chose it.
                            Therefore, every time you click on an option, you will get more information which may influence your future decisions.
                        </p>
                        <p>You will have 30 clicks in total before the game ends. When you are ready to begin, click the button below.</p>
                    </div>
                    <br/>
                    <button type='button' className='button' onClick={event => this.handleButtonClick(event)}>Start Task 1</button>
                    <br/>
                    <br/>
                    <br/>
                </div>
            )
        }
    }
}