import React, { Component } from "react";
import { Bar } from 'react-chartjs-2'
import StatBar from "./../statBar";

export default class Task1b extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
            consented: false,
            isButtonDisabled: false,
            numClicks: 0,
            opt1Success: 0,
            opt2Success: 0,
            opt3Success: 0,
            opt4Success: 0,
            opt5Success: 0,
            opt1Failure: 0,
            opt2Failure: 0,
            opt3Failure: 0,
            opt4Failure: 0,
            opt5Failure: 0,
            order: [1, 2, 3, 4],
            totalScore: 0,
            userId: "",
            probs: {
                opt1: 0.2,
                opt2: 0.65,
                opt3: 0.35,
                opt4: 0.5,
                opt5: 0.85
            }
        }
    }

    handleButtonClick(event) {
        const numTimesClicked = this.state.numClicks + 1;
        const updatedOpt = event.target.value;

        const rand_num = Math.random()

        const roundProbabilities = this.state.probs;
        const success = rand_num < roundProbabilities[[updatedOpt]];
        const updatedKey = updatedOpt + (success ? "Success" : "Failure");
        const currentValue = this.state[updatedKey];
        this.setState({
            [updatedKey]: Math.min(currentValue + 1, 30),
            numClicks: numTimesClicked,
            totalScore: this.state.totalScore + (success ? 1 : 0),
            isButtonDisabled: true
        });

        const optNumber = Number(updatedOpt.split("opt")[1]);
        this.writeToDB(updatedKey, optNumber, success ? 1 : 0);

        if (numTimesClicked === 30) {
            setTimeout(() => this.setState({ isButtonDisabled: false }), 500);

            const orderSeed = Math.random();
            if (orderSeed >= 0.0416667) {this.state.order = [1, 2, 4, 3]};
            if (orderSeed >= 0.0833333) {this.state.order = [1, 3, 2, 4]};
            if (orderSeed >= 0.1250000) {this.state.order = [1, 3, 4, 2]};
            if (orderSeed >= 0.1666666) {this.state.order = [1, 4, 2, 3]};
            if (orderSeed >= 0.2083333) {this.state.order = [1, 4, 3, 2]};
            if (orderSeed >= 0.2500000) {this.state.order = [2, 1, 3, 4]};
            if (orderSeed >= 0.2916667) {this.state.order = [2, 1, 4, 3]};
            if (orderSeed >= 0.3333333) {this.state.order = [2, 3, 1, 4]};
            if (orderSeed >= 0.3750000) {this.state.order = [2, 3, 4, 1]};
            if (orderSeed >= 0.4166667) {this.state.order = [2, 4, 1, 3]};
            if (orderSeed >= 0.4583333) {this.state.order = [2, 4, 3, 1]};
            if (orderSeed >= 0.5000000) {this.state.order = [3, 1, 2, 4]};
            if (orderSeed >= 0.5416667) {this.state.order = [3, 1, 4, 2]};
            if (orderSeed >= 0.5833333) {this.state.order = [3, 2, 1, 4]};
            if (orderSeed >= 0.6250000) {this.state.order = [3, 2, 4, 1]};
            if (orderSeed >= 0.6666667) {this.state.order = [3, 4, 1, 2]};
            if (orderSeed >= 0.7083333) {this.state.order = [3, 4, 2, 1]};
            if (orderSeed >= 0.7500000) {this.state.order = [4, 1, 2, 3]};
            if (orderSeed >= 0.7916667) {this.state.order = [4, 1, 3, 2]};
            if (orderSeed >= 0.8333333) {this.state.order = [4, 2, 1, 3]};
            if (orderSeed >= 0.8750000) {this.state.order = [4, 2, 3, 1]};
            if (orderSeed >= 0.9166667) {this.state.order = [4, 3, 1, 2]};
            if (orderSeed >= 0.9583333) {this.state.order = [4, 3, 2 ,1]};

            setTimeout(() => this.props.history.push({
                pathname: "/task2a",
                state: {order: this.state.order, totalScore: this.state.totalScore, userId: this.state.userId}
            }), 500);
        } else {
            setTimeout(() => this.setState({ isButtonDisabled: false }), 500);
        }
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

            const {numClicks, userId, opt1Success, opt2Success, opt3Success, opt4Success, opt5Success, opt1Failure, opt2Failure, opt3Failure, opt4Failure, opt5Failure} = this.state;

            const data = {
                labels: [" Wins              Losses", " Wins              Losses", " Wins              Losses", " Wins              Losses", " Wins              Losses"],
                datasets: [
                    {
                        label: "Wins",
                        backgroundColor: '#4adeff',
                        data: [opt1Success, opt2Success, opt3Success, opt4Success, opt5Success]
                    },
                    {
                        label: "Losses",
                        backgroundColor: '#dc3545',
                        data: [opt1Failure, opt2Failure, opt3Failure, opt4Failure, opt5Failure]
                    },
                ]
            };

            const options = {
                layout: {
                    borderWidth: 1
                },
                plugins: {
                    datalabels: {
                        display: function(context) {
                            var index = context.dataIndex;
                            var value = context.dataset.data[index];
                            return value !== 0;  // don't show if value is 0
                        },
                        color: 'black',
                        anchor: 'end',
                        align: 'top'
                    }
                },
                annotation: {
                    annotations: [{
                        drawTime: 'afterDatasetsDraw',
                        borderColor: 'red',
                        borderDash: [2, 2],
                        borderWidth: 2,
                        mode: 'vertical',
                        type: 'line',
                        value: 10,
                        scaleID: 'x-axis-0',
                    }]
                },
                scales: {
                    xAxes: [
                        {
                            position: 'bottom'
                        },
                        {
                            position: 'top',
                            ticks: {
                                beginAtZero:true,
                                min: 0,
                                max: 15,
                                stepSize: 1,
                                display: false
                            },
                            gridLines: {
                                display:false
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero:true,
                                min: 0,
                                max: 30,
                                stepSize: 2,
                            },
                            gridLines: {
                                display:false
                            }
                        },
                        {
                            position: 'right',
                            ticks: {
                                beginAtZero:true,
                                min: 0,
                                max: 30,
                                stepSize: 2,
                                display: false
                            },
                            gridLines: {
                                display:false
                            }
                        }
                    ]
                },
                maintainAspectRatio: false,
                height: 1000,
            };

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
                            You can think of these options as slot machines - when you put money into a machine, you either win or you don't.
                            Similarly, when you click on one of the options, you will either score 1 point or no points.
                            Just like real slot machines, some of the options might be more likely to give you points than others.
                            The rate at which each option awards points will stay the same accross the whole task.
                        </p>
                        <p>
                            Above each option will be displayed the number of times you won points or didn't win points when you chose it.
                            Therefore, every time you click on an option, you will get more information which may influence your future decisions.
                        </p>
                        <p>You will have 30 clicks in total before the game ends.</p>
                    </div>
                    <hr/>
                    <div>
                        <StatBar numClicks={numClicks} score={this.state.totalScore}/>
                    </div>
                    <br/>
                    <div id='gameBars'>
                        <Bar height={400}
                             data={data}
                             options={options}
                        />
                    </div>
                    <br/>
                    <div class="container">
                        <button type='button' className='button' value='opt1' disabled={this.state.isButtonDisabled} onClick={this.handleButtonClick}>1</button>
                        <button type='button' className='button' value='opt2' disabled={this.state.isButtonDisabled} onClick={this.handleButtonClick}>2</button>
                        <button type='button' className='button' value='opt3' disabled={this.state.isButtonDisabled} onClick={this.handleButtonClick}>3</button>
                        <button type='button' className='button' value='opt4' disabled={this.state.isButtonDisabled} onClick={this.handleButtonClick}>4</button>
                        <button type='button' className='button' value='opt5' disabled={this.state.isButtonDisabled} onClick={this.handleButtonClick}>5</button>
                    </div>
                    <br/><br/><br/>
                </div>
            )
        }
    }
}