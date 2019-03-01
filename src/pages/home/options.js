let colors = ['#d897eb', '#f49798', '#64ea91'];

let option = {
    color: colors,
    title: {
        text: 'Rainfall comparison',
        textStyle:{
            color: "#999"
        }
    },
    // tooltip: {
    //     trigger: 'none',
    //     axisPointer: {
    //         type: 'cross'
    //     }
    // },
    legend: {
        right:48,
        top: 24,
        itemGap:30,
        textStyle:{
            color: "#999",
            fontWeight:'bold',
            fontSize:14
        },
        data:[
            {
                name: '2015',
                // 强制设置图形为圆。
                icon: 'circle',
            },
            {
                name: '2016',
                // 强制设置图形为圆。
                icon: 'circle',
            },
            {
                name: '2017',
                // 强制设置图形为圆。
                icon: 'circle',
            },
        ]
    },
    grid: {
        top: 100,
        bottom: 48,
        left: 48,
        right: 48
    },
    xAxis: {
        type: 'category',
        axisTick: {
            alignWithLabel: true,
            show:false
        },
        axisLine: {
            onZero: false,
            lineStyle: {
                color: "#999",
                width: 2
            }
        },
        
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    },
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show:false
            },
            axisTick: {
                alignWithLabel: true,
                show:false
            },
            splitLine:{
                lineStyle:{
                    type:"dot"
                }
            }
        }
    ],
    series: [
        {
            name:'2015',
            type:'line',
            symbolSize: 9,
            symbol:"circle",
            showSymbol:true,
            // hoverAnimation:false,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 160, 176, 48.7, 18.8, 6.0, 2.3],
            lineStyle: {
                width:4
            }
        },
        {
            name:'2016',
            type:'line',
            symbol:"circle",
            symbolSize: 9,
            showSymbol:true,
            // hoverAnimation:false,
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
            lineStyle: {
                width:4
            }
        },
        {
            name:'2017',
            type:'line',
            symbol:"circle",
            // hoverAnimation:false,
            symbolSize: 9,
            showSymbol:true,
            smooth: true,
            data: [8.9, 13.9, 8.1, 35, 55.3, 23.2, 120, 78.6, 88.4, 123.4, 64.3, 22.7],
            lineStyle: {
                width:4
            }
        }
    ]
};

export default option