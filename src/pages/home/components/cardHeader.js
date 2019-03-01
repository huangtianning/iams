import React from 'react'
import './cardHeader.less'

export default class CardHeader extends React.Component {
    render(){
        return(
            <div className='CardHeader'>
                <span >{this.props.title}</span>
                <div style={{ backgroundColor: this.props.iconColor,backgroundImage:`url(${this.props.iconUrl})` }}></div>
            </div>
        )
    }
}