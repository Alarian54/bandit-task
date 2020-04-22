import React, { Component } from 'react';

export default class StatBar extends Component {

    render() {
        const {numClicks, score} = this.props;
        return(
            <div className='statBar'>
                <p style={{align:"left"}}>
                    <h3>
                        Turns taken: {numClicks}/30
                        <span style={{float:"right"}}>
                            Score: {score}
                        </span>
                    </h3>
                </p>
            </div>
        )
    }
}