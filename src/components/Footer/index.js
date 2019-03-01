import React from 'react'
import { Layout } from 'antd'
import './index.less'

const LayoutFooter = Layout.Footer;

export default class Footer extends React.Component{
    render(){
        return (
            <LayoutFooter className="Footer">
                Ant Design ©2018 Huangtianning
            </LayoutFooter>
        );
    }
}