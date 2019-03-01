import React from 'react'
import './cardBody.less'
import { Statistic } from 'antd'

export default class cardBody extends React.Component {
    render() {
        return (
            <div className='cardBody'>
                <div>
                    <Statistic valueStyle={{fontSize:48}}  value={this.props.value1} precision={0} />
                </div>
                <div>
                    <Statistic
                        value={this.props.value2}
                        precision={2}
                        valueStyle={{ color: this.props.value2Color,display:"flex",alignItems:"flex-end",flexWrap:"nowrap" }}
                        prefix={this.props.icon}
                        suffix="%"
                    />
                </div>
            </div>
        )
    }
}