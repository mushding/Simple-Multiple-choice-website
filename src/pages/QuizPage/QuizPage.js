import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Questions from '../../components/Questions/Questions'
import Fade from '@material-ui/core/Fade';
import '../../assets/css/main.css'
import './styles.css'

export default class QuizPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            checked: false,
            enterQuiz: false,
        }
    }
    componentDidMount(){
        var that = this;
		setTimeout(function() {
			that.show();
		}, that.props.wait);
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
    toggleStart = () => {
        let that = this
		let delay = (s) => {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, s); 
            });
        };
        delay().then(() => {
            that.setState({ checked: false })
            return delay(1000); 
        }).then(() => {
            that.setState({ enterQuiz: true })
        })
    }
    render(){
        if (!this.state.enterQuiz){
            return (
                <div>
                    <Navbar/>
                    <div className="homepageContainer">
                        <Fade in={this.state.checked} timeout={1000}>
                            <div>
                                <p className="textFormat">CO2 快問快答</p>
                                <p className="textFormat">以下四選一題目</p>
                                <p className="textFormat">CO2 到 100 遊戲結束</p>
                                <div className="buttonFormat">
                                    <button onClick={this.toggleStart}>START</button>
                                </div>
                            </div>
                        </Fade>
                    </div>
    
                </div>
            )
        }
        else {
            return (
                <div>
                    <Navbar/>
                    <Questions/>
                </div>
            )
        }
    }
}