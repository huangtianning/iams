import React from 'react'
import { Icon } from 'antd'
import './index.less'

export default class NoMatch extends React.Component{
    render(){
        return(
            <div className="page-404">
                <div>
                    <Icon type="frown-o" style={{ fontSize: '48px', color: '#1da57a',marginBottom: "16px" }} />
                    <h1 className="message-404">404 Not Found</h1>
                </div>
            </div>
        );
    }
}