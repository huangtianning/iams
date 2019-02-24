import React from 'react'
import './index.less'
// import axios from './../../axios'
// import MockData from './../../mock'

export default class BaseDetails extends React.Component{

    // getData = ()=>{
    //     axios.jsonp({
    //         url:'http://120.24.5.162:9999/trace/controller?logic=logic.BaseGetByEnterpriseIdLogic&enterprise_id=3'
    //     }).then((res)=>{
    //         console.log('这里是后端以参数形式传来的数据:',res);
    //     })
    // }

    componentWillMount(){
        // console.log("baseDetails componentWillMount.")
        // console.log(this.props.feild.location.state)
        this.setState({
            baseItem: this.props.feild.location.state
        })
    }

    render(){
        return(
            <div>
                <pre>
                    this is BaseDetails, params is { this.state.baseItem.id }.
                    <br/><br/>                         
                    and mockdata is 
                    <br/><br/>
                    { JSON.stringify(this.state.baseItem, null, 4) }
                </pre>
            </div>
        )
    }
}