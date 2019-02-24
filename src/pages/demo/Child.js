import React from 'react'


export default class Child extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    
    render(){
        return <div>
            <p>{ this.props.name }</p>
            <p>{ console.log(this.props.name2) }</p>
        </div>
    }
}