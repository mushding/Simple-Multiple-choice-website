import React from 'react'
import * as PIXI from 'pixi.js'
import './styles.css'
import bunny_img from './bunny.png'

export default class PixiTestPage extends React.Component{
    componentDidMount(){
        let app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,                       
            antialias: true,
            transparent: false,
            resolution: 1
        });
        document.body.appendChild(app.view);

        let loader = new PIXI.Loader
        loader
            .add("bunny", bunny_img)
            .load(setup);

        function setup() {
            let bunny_sprite = new PIXI.Sprite(loader.resources.bunny.texture);
            app.stage.addChild(bunny_sprite);
        }
    }
    render(){
        return (
            <div className="padding">
                
            </div>
        )
    }
}