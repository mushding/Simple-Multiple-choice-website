import React from 'react'
import questions from '../../Questions/Questions'
import { Progress } from 'semantic-ui-react'
import { Fade } from '@material-ui/core'
import './styles.css'

export default class Questions extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quizNum: 0,
            checked: false,
            progressValue: 0,
            isGameOver: false,
        }
    }
    componentDidMount() {
        var that = this;
        setTimeout(function() {
            that.show();
        }, that.props.wait);
        this.timerID = setInterval(
            () => this.gameTimer(),
            300
        );
    }   
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    gameTimer() {
        if (this.state.progressValue > 100){
            this.setState({ isGameOver: true })
            clearInterval(this.timerID);
        }
        let nextValue = this.state.progressValue + 1
        this.setState({ progressValue: nextValue })
        console.log(this.state.progressValue)
    }
	show() {
        var that = this
		var delay = function(s){
            return new Promise(function(resolve, reject){
                setTimeout(resolve,s); 
            });
        };
        delay().then(function(){
            that.setState({checked: true})
        })
    }
    toggleAnswer = (answer, index) => {
        console.log(answer)
        if (answer){
            let delay = (s) => {
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, s); 
                });
            };
            delay().then(() => {
                document.getElementById("buttonContainer" + String(index)).style.backgroundColor = "hsl(120, 100%, 50%, 30%)"
                return delay(800); 
            }).then(() => {
                this.setState({ checked: false })
                return delay(1000); 
            }).then(() => {
                try {
                    document.getElementById("buttonContainer" + String(index)).style.backgroundColor = ""
                } catch (error) {
                    console.log(error)
                }
            }).then(() => {
                let nextNum = this.state.quizNum + 1
                this.setState({ quizNum: nextNum })
            }).then(() => {
                this.setState({ checked: true })
            })
        } else {
            let delay = (s) => {
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, s); 
                });
            };
            delay().then(() => {
                document.getElementById("buttonContainer" + String(index)).style.backgroundColor = "hsl(0, 100%, 50%, 30%)"
                document.getElementById("buttonContainer" + String(questions['questions'][this.state.quizNum]["answer"] - 1)).style.backgroundColor = "hsl(120, 100%, 50%, 30%)"
                // damage!
                let nextValue = this.state.progressValue + 10
                this.setState({ progressValue: nextValue })
                return delay(800); 
            }).then(() => {
                this.setState({ checked: false })
                return delay(1000); 
            }).then(() => {
                try {
                    document.getElementById("buttonContainer" + String(index)).style.backgroundColor = ""
                    document.getElementById("buttonContainer" + String(questions['questions'][this.state.quizNum]["answer"] - 1)).style.backgroundColor = ""
                } catch (error) {
                    console.log(error)
                }
            }).then(() => {
                let nextNum = this.state.quizNum + 1
                this.setState({ quizNum: nextNum })
            }).then(() => {
                this.setState({ checked: true })
            })
        }
    }
    render(){
        const questionsArr = questions['questions']
        if (!this.state.isGameOver && this.state.quizNum < questionsArr.length){
            return(
                <div className="homepageContainer">
                    <div>
                        <Progress percent={this.state.progressValue} active progress>
                            CO2 濃度條
                        </Progress>
                    </div>
                    <Fade in={this.state.checked} timeout={1000}>
                        <div>
                            <div className="quizTitleContainer">
                                <p>{this.state.quizNum + 1} / {questionsArr.length}</p>
                            </div>
                            <div className="quizTitleContainer">
                                <h3>{questionsArr[this.state.quizNum]["title"]}</h3>
                            </div>
                            <div className="answerContainer">
                                <button id="buttonContainer0" onClick={this.toggleAnswer.bind(this, questionsArr[this.state.quizNum]["options"][0]["correct"], 0)}>{questionsArr[this.state.quizNum]["options"][0]["text"]}</button>
                            </div>
                            <div className="answerContainer">
                                <button id="buttonContainer1" onClick={this.toggleAnswer.bind(this, questionsArr[this.state.quizNum]["options"][1]["correct"], 1)}>{questionsArr[this.state.quizNum]["options"][1]["text"]}</button>
                            </div>
                            <div className="answerContainer">
                                <button id="buttonContainer2" onClick={this.toggleAnswer.bind(this, questionsArr[this.state.quizNum]["options"][2]["correct"], 2)}>{questionsArr[this.state.quizNum]["options"][2]["text"]}</button>
                            </div>
                            <div className="answerContainer">
                                <button id="buttonContainer3" onClick={this.toggleAnswer.bind(this, questionsArr[this.state.quizNum]["options"][3]["correct"], 3)}>{questionsArr[this.state.quizNum]["options"][3]["text"]}</button>
                            </div>
                        </div>
                    </Fade>
                </div>
            )
        }
        else if (this.state.quizNum === questionsArr.length){
            return (
                <div className="homepageContainer">
                    <Fade in={this.state.checked} timeout={1000}>
                        <div>
                            <div className="quizTitleContainer">
                                <h1>Finish</h1>
                            </div>
                        </div>
                    </Fade>
                </div>
            )
        }
        else {
            return (
                <div className="homepageContainer">
                    <Fade in={this.state.checked} timeout={1000}>
                        <div>
                            <div className="quizTitleContainer">
                                <h1>GameOver</h1>
                            </div>
                        </div>
                    </Fade>
                </div>
            )
        }
    }
}