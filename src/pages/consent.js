import React, { Component } from 'react';
import './../index.css'

export default class Consent extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
            userId: "",
        }
    }

    writeToDB(consented) {
        const userId = this.state;
        const timestamp = Date.now(); 
        const obj = {
            userId: userId,
            timestamp: timestamp,
            consent: consented,
        };
        console.log(obj)
    }

    handleButtonClick(event, consented) {

        const idpart1 = Date.now()*10000000;
        const idpart2 = Math.ceil(Math.random()*10000000);
        const id = Math.ceil((idpart1 + idpart2)/1000);
        this.state.userId = id;

        this.writeToDB(consented);

        if (consented) {
            this.props.history.push({
                pathname: '/task1a',
                state: {userId: this.state.userId, consented: consented}
            });
        } else {
            this.props.history.push({
                pathname: '/thankYou',
                state: {userId: this.state.userId, consented: consented}
            });
        }
    }    

    render() {
        
        return(
            <div>
            <div>
                <h2>Participant Information</h2>
                <br/>
                <div className="text" >
                    <h3>Project title:</h3>
                    <p>Assessing Intelligence of Explore-Exploit Algorithms</p>
                </div>
                <div className="text">
                    <h3>Principal Investigator:</h3>
                    <p>Chris Lucas</p>
                </div>
                <div className="text">
                    <h3>Researcher collecting data:</h3>
                    <p>Angus Shaw</p>
                </div>
                <p>
                    This study was certified according to the Informatics Research Ethics Process, RT number 30656.<br/>
                    Please take time to read the following information carefully.<br/>
                    You should save a copy of this page for your records.<br/>
                </p>
            </div>
            <hr/>
            <div>
                <h3>Who are the researchers?</h3>
                <p>
                    Angus Shaw is a Student in the School of Informatics at the University of Edinburgh.
                    Chris Lucas is a Lecturer in the School of Informatics at the University of Edinburgh.
                </p>

                <h3>What is the purpose of the study?</h3>
                <p>The aim of this study is to evaluate certain strategies for multi-armed bandit problems with regards to how “humanlike” they are.</p>
                
                <h3>Do I have to take part?</h3>
                <p>
                    No – participation in this study is entirely up to you.
                    You can withdraw from the study at any time, without giving a reason.
                    Your rights will not be affected.
                    We will stop using your data in any publications or presentations submitted after you have withdrawn consent.
                    However, we will keep copies of your original consent, and of your withdrawal request.
                </p>

                <h3>What will happen if I decide to take part? </h3>
                <p>
                    You will be asked to play a short game involving clicking on one of five boxes and obtaining the highest score you can.
                    You will then watch several others playing this game before answering questions about their strategies.
                </p>

                <h3>Compensation.</h3>
                <p>You will be paid $1.50 for your participation in this study.</p>

                <h3>Are there any risks associated with taking part?</h3>
                <p>There are no significant risks associated with participation.</p>

                <h3>What will happen to the results of this study? </h3>
                <p>
                    The results of this study may be summarised in published articles, reports and presentations.
                    We will remove any information that could, in our assessment, allow anyone to identify you.
                    With your consent, information can also be used for future research.
                    Your data may be archived for a minimum of 2 years.<br/>
                    We do not collect any personally identifying information in this study, apart from your randomized user id, which we will only use to track repeat participation in the study.
                    It will be stored on a university-controlled server in a locked server room on a separate database from the experimental data, and never shared with anyone outside the research team
                    Your anonymous experimental data will be referred to by an anonymous session number rather than your user ID.
                </p>

                <h3>Data protection and confidentiality.</h3>
                <p>
                    Your data will be processed in accordance with Data Protection Law. 
                    All information collected about you will be kept strictly confidential.
                    Your data will be referred to by a unique participant number rather than by name.<br/>
                    Your data will only be viewed by the two researchers, and not shared with anyone outside the research team.
                    All electronic data will be stored on a password-protected encrypted computer.
                    Your consent information will be kept separately from your responses in order to minimise risk.
                </p>

                <h3>What are my data protection rights?</h3>
                <p>
                    The University of Edinburgh is a Data Controller for the information you provide.
                    You have the right to access information held about you.
                    Your right of access can be exercised in accordance with Data Protection Law.
                    You also have other rights including rights of correction, erasure and objection.
                    For more details, including the right to lodge a complaint with the Information Commissioner’s Office, please visit www.ico.org.uk.
                    Questions, comments and requests about your personal data can also be sent to the University Data Protection Officer at <a href="mailto:dpo@ed.ac.uk">dpo@ed.ac.uk</a>. 
                </p>    

                <h3>Who can I contact?</h3>
                <p>
                    If you have any further questions about the study, please contact the lead researcher, Angus Shaw, at <a href="mailto:s1653336@ed.ac.uk">s1653336@ed.ac.uk</a>.
                    If you wish to make a complaint about the study, please contact <a href="mailto:inf-ethics@inf.ed.ac.uk">inf-ethics@inf.ed.ac.uk</a>.
                    When you contact us, please provide the study title and detail the nature of your complaint.
                </p>

                <h3>Updated information</h3>
                <p>If the research project changes in any way, an updated Participant Information Sheet will be made available <a href="https://web.inf.ed.ac.uk/infweb/research/study-updates">here</a>.</p>

                <h3>Alternative formats</h3>
                <p>To request to take this study in an alternative format, such as in large print or on a coloured background, please contact Angus Shaw at <a href="mailto:s1653336@ed.ac.uk">s1653336@ed.ac.uk</a>.</p>

                <h3>General information</h3>
                <p>For general information about how we use your data, visit <a href="edin.ac/privacy-research">here</a>.</p>
                
                <hr/>

                <h3>Agreement</h3>

                <p>If you agree to all of the statements below, click the “I agree” button at the bottom of the page. If not, please close this page.</p>
                <ul>
                <li>I confirm that I have read and understood the Participant Information for this study, that I have had the opportunity to ask questions, and that any questions I had were answered to my satisfaction.</li>
                <li>I understand that my participation is voluntary, and that I can withdraw at any time without giving a reason. Withdrawing will not affect any of my rights.</li>
                <li>I am at least 18 years of age.</li>
                <li>I consent to my data – excluding any personal or identifying information – being used in academic publications and presentations, and shared online.</li>
                <li>My anonymous data may be used in future ethically approved research.</li>
                <li>I agree to take part in this study.</li>
                </ul>
            </div>
            <br/>
            <button type='button' className='button' onClick={event => this.handleButtonClick(event, true)}>I agree</button>
            <br/>
            <br/>
            <br/>
            </div>
        )

    }
}