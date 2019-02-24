import React from 'react'
import './index.less'


export default class Logo extends React.Component{

    LogoTextClassName = ()=>{
        if(this.props.collapsed){
            return 'logo-text-hidden';
        }else{
            return "logo-text-show";
        }
    }

    LogoImgClassName = ()=>{
        if(this.props.collapsed){
            return 'logo-img-hidden';
        }else{
            return "logo-img-show";
        }
    }


    render(){
        return (
            <div className="Logo">
                <img className={ this.LogoImgClassName() } src="/assets/leaf.svg" alt="This is a logo"/>
                <h1 className={ this.LogoTextClassName() }>IAMS</h1>
            </div>
        );
    }
}