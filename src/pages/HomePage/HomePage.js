import React from 'react'
import Fade from '@material-ui/core/Fade';
import Navbar from '../../components/Navbar/Navbar';
import '../../assets/css/main.css'
import './styles.css'

export default class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            checked: false,
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
    render(){
        return (
            <div>
                <Navbar/>
                <div className="homepageContainer">
                    <Fade in={this.state.checked} timeout={2000}>
                        <div id="wrapper">
                            <header id="header">
                                <div className="content">
                                    <div className="inner">
                                        <h1 className="textFormat">carbon-dioxide sample page</h1>
                                        <p className="textFormat">一個 CO2 測試小遊戲</p>
                                        <p className="textFormat">及一些簡單的環境介紹</p>
                                    </div>
                                </div>
                                <nav>
                                    <ul>
                                        <li><a style={{"color": "white"}} href="/#/quiz">CO2 小測驗</a></li>
                                    </ul>
                                </nav>
                            </header>	
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}