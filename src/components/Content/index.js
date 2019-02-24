import React from 'react'
import { Layout } from 'antd'
import './index.less'

const LayoutContent = Layout.Content;

export default class Content extends React.Component{
    render(){
        return (
            <LayoutContent className="Content">
                <div className="Content-details">
                   { this.props.children }
                </div>
            </LayoutContent>
        );
    }
}