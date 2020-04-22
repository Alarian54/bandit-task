import React, { Component } from "react";
import { Bar } from 'react-chartjs-2'
import StatBar from "./../statBar";

export default class Task4b extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isButtonDisabled: false,
            nextChoice: "opt1",
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
            order: [],
            totalScore: 0,
            userId: "",
            probs: {
                opt1: 0.39,
                opt2: 0.75,
                opt3: 0.60,
                opt4: 0.06,
                opt5: 0.21
            }
        }
    }
    
    handleButtonClick(event) {
        const numTimesClicked = this.state.numClicks + 1;
        const updatedOpt = this.state.nextChoice;

        const rand_num = Math.random();

        const roundProbabilities = this.state.probs;
        const success = rand_num < roundProbabilities[[updatedOpt]];
        var nextOpt = updatedOpt;

        if (this.state.order[2]===2){
            // Guessing
            const rand_opt = Math.random();
            nextOpt = "opt1";
            if (rand_opt <= 0.8) {nextOpt = "opt2"};
            if (rand_opt <= 0.6) {nextOpt = "opt3"};
            if (rand_opt <= 0.4) {nextOpt = "opt4"};
            if (rand_opt <= 0.2) {nextOpt = "opt5"};
        }

        else if (this.state.order[2]===3){
            // Win-stay, lose-switch
            if (!success) {
                if (updatedOpt==="opt1") {nextOpt = "opt2"}
                if (updatedOpt==="opt2") {nextOpt = "opt3"}
                if (updatedOpt==="opt3") {nextOpt = "opt4"}
                if (updatedOpt==="opt4") {nextOpt = "opt5"}
                if (updatedOpt==="opt5") {nextOpt = "opt1"}
            }
        }

        else if (this.state.order[2]===4){
            // Epsilon-greedy (e=0.1)
            const rand_epsilon = Math.random();
            if (rand_epsilon <= 0.1) {
                const rand_opt = Math.random();
                if (rand_opt <= 0.2) {nextOpt = "opt1"}
                else if (rand_opt <= 0.4) {nextOpt = "opt2"}
                else if (rand_opt <= 0.6) {nextOpt = "opt3"}
                else if (rand_opt <= 0.8) {nextOpt = "opt4"}
                else nextOpt = "opt5";
            }
            else {
                const opt1rate = (this.state.opt1Success+1)/(this.state.opt1Failure+1);
                const opt2rate = (this.state.opt2Success+1)/(this.state.opt2Failure+1);
                const opt3rate = (this.state.opt3Success+1)/(this.state.opt3Failure+1);
                const opt4rate = (this.state.opt4Success+1)/(this.state.opt4Failure+1);
                const opt5rate = (this.state.opt5Success+1)/(this.state.opt5Failure+1);
                if ((opt1rate >= opt2rate) && (opt1rate >= opt3rate) && (opt1rate >= opt4rate) && (opt1rate >= opt5rate)) {nextOpt = "opt1"}
                else if ((opt2rate >= opt3rate) && (opt2rate >= opt4rate) && (opt2rate >= opt5rate)) {nextOpt = "opt2"}
                else if ((opt3rate >= opt4rate) && (opt3rate >= opt5rate)) {nextOpt = "opt3"}
                else if (opt4rate >= opt5rate) {nextOpt = "opt4"}
                else  {nextOpt = "opt5"};
            }
        }

        var updatedKey = updatedOpt + (success ? "Success" : "Failure");

        if (this.state.order[2]===1){
            // Choices made by human player
            const choices = ["opt1Success", "opt2Success", "opt2Failure", "opt2Failure", "opt2Success", 
            "opt3Failure", "opt3Failure", "opt3Failure", "opt4Success", "opt4Failure", "opt4Success", 
            "opt4Success", "opt4Failure", "opt5Success", "opt5Success", "opt5Success", "opt5Failure", 
            "opt5Success", "opt5Success", "opt5Success", "opt5Success", "opt5Failure", "opt4Success", 
            "opt4Success", "opt4Failure", "opt4Success", "opt5Success", "opt5Success", "opt5Success", "opt5Failure"];
            updatedKey = choices[numTimesClicked-1];
        }

        const currentValue = this.state[updatedKey];
        this.setState({
            [updatedKey]: Math.min(currentValue + 1, 30),
            numClicks: numTimesClicked,
            totalScore: this.state.totalScore + (success ? 1 : 0),
            isButtonDisabled: true,
            nextChoice: nextOpt
        });

        if (numTimesClicked === 30) {
            setTimeout(() => this.setState({ isButtonDisabled: false }), 500);
            setTimeout(() => this.props.history.push({
                pathname: '/task4c',
                state: {order: this.state.order, userId: this.state.userId}
            }), 500);
        } else {
            setTimeout(() => this.setState({ isButtonDisabled: false }), 500);
        }
    }

    writeToDB(updatedKey, optChosen, success) { }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({
            order: this.props.history.location.state.order,
            userId: this.props.history.location.state.userId
        });
        this.randomPayoffRates()
    }

    randomPayoffRates() {
        var payoffs = [0.2, 0.35, 0.5, 0.65, 0.8];
        const opt1prob = payoffs[Math.floor(Math.random()*5)];
        for (var i=0; i<5; i++) {if (payoffs[i]===opt1prob) {payoffs.splice(i, 1)}};
        const opt2prob = payoffs[Math.floor(Math.random()*4)];
        for (i=0; i<4; i++) {if (payoffs[i]===opt2prob) {payoffs.splice(i, 1)}};
        const opt3prob = payoffs[Math.floor(Math.random()*3)];
        for (i=0; i<3; i++) {if (payoffs[i]===opt3prob) {payoffs.splice(i, 1)}};
        const opt4prob = payoffs[Math.floor(Math.random()*2)];
        for (i=0; i<2; i++) {if (payoffs[i]===opt4prob) {payoffs.splice(i, 1)}};
        const opt5prob = payoffs[0];
        this.setState({
            probs: {
                opt1: opt1prob,
                opt2: opt2prob,
                opt3: opt3prob,
                opt4: opt4prob,
                opt5: opt5prob
            }
        })
    }

    render() {

        const {numClicks, opt1Success, opt2Success, opt3Success, opt4Success, opt5Success, opt1Failure, opt2Failure, opt3Failure, opt4Failure, opt5Failure} = this.state;

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
                <button type='button' className='button leftpadded' disabled={this.state.isButtonDisabled} onClick={event => this.handleButtonClick(event)}>Next Choice</button>
                <br/><br/><br/>
            </div>
        )
    }
}