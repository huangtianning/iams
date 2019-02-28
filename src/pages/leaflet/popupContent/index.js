import React from 'react'
import './index.less'
import ReactEcharts from 'echarts-for-react';

export default class PopupContent extends React.Component {

    getOption = (props)=>{
        return {
            title: {
                text: 'Echarts Demo',
                padding: [
                    20,  // 上
                    0, // 右
                    0,  // 下
                    0, // 左
                ],
                left:"center"
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: (function (){
                    var res = [];

                    for (let i=0; i < 12; i++) {

                        res.push(props.axisData[i]);

                    }
                    return res;
                })()
            },
            yAxis: {
                type: 'value',
                max: 100,
            },
            series: [{
                data: (function (){
                    var res = [];

                    for (let i=0; i < 12; i++) {

                        res.push(props.echartsData[i]);

                    }
                    return res;
                })(),
                itemStyle:{
                    normal:{
                        color:'#dd8369'
                    }
                },
                type: 'bar'
            },
            {
                name:'最新成交价',
                type:'line',
                symbolSize:8,
                itemStyle : {  
                    normal : {  
                        color:'#c23531',  //圈圈的颜色
                        lineStyle:{  
                            color:'#c23531'  //线的颜色
                        }  
                    }  
                },
                data:(function (){
                    var res = [];

                    for (let i=0; i < 12; i++) {

                        res.push(props.echartsData[i]);

                    }
                    return res;
                })()
            }
        ]
        }
    }

    render() {
        return (
            <div className="popup-content">
                <ReactEcharts
                    ref={(e) => { this.echarts_react = e; }}
                    option={
                        this.getOption(this.props)
                    }
                    style={{ height: '360px', width: '640px',backgroundColor:"#f3f3f3" }}
                    className='react_for_echarts' />
            </div>
        )
    }
}