import React from 'react'
import './index.less'
import { Table, Collapse } from 'antd';
import NProgress from 'nprogress'
import './../../css/nprogress.css' //这个样式必须引入


//第一部分列信息
const columnsA1 = [{
    title: '湖北省休闲农业示范点申报表',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: "16.7%",
    colSpan: 6,
    render: text => <span className="form-text-bold">{text}</span>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if (index === 1) {
            obj.props.colSpan = 3;
        };
        return obj;
    }

}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: (value, row, index) => {
        const obj = {
            children: <span className="form-text-bold">{value}</span>,
            props: {},
        };
        if (index === 1) {
            obj.props.colSpan = 0;
        };
        return obj;
    }

}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if (index === 1) {
            obj.props.colSpan = 0;
        };
        return obj;
    }
}, {
    title: 'Action',
    dataIndex: 'col5',
    key: 'col5',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: text => <span className="form-text-bold">{text}</span>,
}, {
    title: 'Action',
    dataIndex: 'col6',
    key: 'col6',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
}];

//第二部分列信息
const columnsA2 = [{
    title: '湖北省休闲农业示范点申报表',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: "16.7%",
    colSpan: 6,
    render: text => <span className="form-text-bold">{text}</span>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if (index < 3) {
            obj.props.colSpan = 3;
        };
        return obj;
    }

}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: (value, row, index) => {
        const obj = {
            children: <span className="form-text-bold">{value}</span>,
            props: {},
        };
        if (index < 3) {
            obj.props.rowSpan = 0;
        };
        return obj;
    }

}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if (index < 3) {
            obj.props.rowSpan = 0;
        };
        return obj;
    }
}, {
    title: 'Action',
    dataIndex: 'col5',
    key: 'col5',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: text => <span className="form-text-bold">{text}</span>,
}, {
    title: 'Action',
    dataIndex: 'col6',
    key: 'col6',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
}];

//第三部分列信息
const columnsA3 = [{
    title: '湖北省休闲农业示范点申报表',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: "16.7%",
    render: text => <span className="form-text-bold">{text}</span>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if (index === 0 || index === 8) {
            obj.props.colSpan = 3;
        };
        return obj;
    }

}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: (value, row, index) => {
        const obj = {
            children: <span className="form-text-bold">{value}</span>,
            props: {},
        };
        if (index === 0 || index === 8) {
            obj.props.rowSpan = 0;
        };
        return obj;
    }

}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if (index === 0 || index === 8) {
            obj.props.rowSpan = 0;
        };
        return obj;
    }
}, {
    title: 'Action',
    dataIndex: 'col5',
    key: 'col5',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
    render: text => <span className="form-text-bold">{text}</span>,
}, {
    title: 'Action',
    dataIndex: 'col6',
    key: 'col6',
    align: 'center',
    width: "16.7%",
    colSpan: 0,
}];


//第四部分列信息
const columnsA4 = [{
    title: '湖北省休闲农业示范点申报表',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children: <span className="form-text-bold">{value}</span>,
            props: {},
        };
        if (index === 0) {
            ;
        }else if(index === 1){
            obj.props.rowSpan = 5;
        }else if(index === 2){
            obj.props.rowSpan = 0;
        }else if(index === 3){
            obj.props.rowSpan = 0;
        }else if(index === 4){
            obj.props.rowSpan = 0;
        }else if(index === 5){
            obj.props.rowSpan = 0;
        }else if(index === 6){
            obj.props.rowSpan = 5;
        }else if(index === 7){
            obj.props.rowSpan = 0;
        }else if(index === 8){
            obj.props.rowSpan = 0;
        }else if(index === 9){
            obj.props.rowSpan = 0;
        }else if(index === 10){
            obj.props.rowSpan = 0;
        }else if(index === 11){
            ;
        }
        return obj;
    }
    
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        obj.props.colSpan = 6;
        return obj;
    }

}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        obj.props.colSpan = 0;
        return obj;
    }

}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        obj.props.colSpan = 0;
        return obj;
    }
}, {
    title: 'Action',
    dataIndex: 'col5',
    key: 'col5',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        obj.props.colSpan = 0;
        return obj;
    }
}, {
    title: 'Action',
    dataIndex: 'col6',
    key: 'col6',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        obj.props.colSpan = 0;
        return obj;
    }
}];


//第五部分列信息
const columnsA5 = [{
    title: '',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children: <span className="form-text-bold">{value}</span>,
            props: {},
        };
        if (index === 0) {
            obj.props.rowSpan = 4;
        }else if(index === 4){
            obj.props.rowSpan = 1;
        }else{
            obj.props.rowSpan = 0;
        }
        return obj;
    }
    
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if(index === 4){
            obj.props.colSpan = 1;
        }else{
            obj.props.colSpan = 6;
        }
        return obj;
    }

}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children:  <span className="form-text-bold">{value}</span>,
            props: {},
        };
        if(index === 4){
            obj.props.colSpan = 1;
        }else{
            obj.props.colSpan = 0;
        }
        return obj;
    }

}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if(index === 4){
            obj.props.colSpan = 1;
        }else{
            obj.props.colSpan = 0;
        }
        return obj;
    }
}, {
    title: 'Action',
    dataIndex: 'col5',
    key: 'col5',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if(index === 4){
            obj.props.colSpan = 0;
        }else{
            obj.props.colSpan = 0;
        }
        return obj;
    }
}, {
    title: 'Action',
    dataIndex: 'col6',
    key: 'col6',
    align: 'center',
    width: "16.7%",
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if(index === 4){
            obj.props.colSpan = 0;
        }else{
            obj.props.colSpan = 0;
        }
        return obj;
    }
}];


export default class ApplyCheck extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            dataA1: [{//dataA1
                key: '1',
                name: '省份',
                age: "ikun",
                address: '市州',
                tags: 'ikun',
                col5: '县市区',
                col6: "ikun",
            }, {
                key: '2',
                name: '申报休闲农业示范点名称',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '类型',
                col6: "ikun",
            }],
            dataA2: [{//dataA2
                key: '1',
                name: '申报单位名称',
                age: "ikun",
                address: '#',
                tags: '#',
                col5: '企业注册日期',
                col6: "ikun",
            }, {
                key: '2',
                name: '统一社会信用代码',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '企业法人',
                col6: "ikun",
            }, {
                key: '3',
                name: '详细地址',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '邮政编码',
                col6: "ikun",
            }, {
                key: '4',
                name: '单位负责人',
                age: "ikun",
                address: '手机号码',
                tags: "ikun",
                col5: '电子邮箱',
                col6: "ikun",
            }, {
                key: '5',
                name: '申报经办人',
                age: "ikun",
                address: '手机号码',
                tags: "ikun",
                col5: '电子邮箱',
                col6: "ikun",
            }],
            dataA3: [{//dataA3
                key: '1',
                name: '主导产业',
                age: "ikun",
                address: '#',
                tags: '#',
                col5: '资产规模（万元）',
                col6: "ikun",
            }, {
                key: '2',
                name: '占地面积（亩）',
                age: "ikun",
                address: '停车场面积（亩）',
                tags: "ikun",
                col5: '接待中心面积（亩）',
                col6: "ikun",
            }, {
                key: '3',
                name: '设计接待能力（人/天）',
                age: "ikun",
                address: '餐饮接待能力',
                tags: "ikun",
                col5: '客房床位',
                col6: "ikun",
            }, {
                key: '4',
                name: '年接待游客人次',
                age: "ikun",
                address: '综合营业收入',
                tags: "ikun",
                col5: '公共厕所',
                col6: "ikun",
            }, {
                key: '5',
                name: '年实现利润',
                age: "ikun",
                address: '其中：农产品销售收入',
                tags: "ikun",
                col5: '年上缴税金',
                col6: "ikun",
            }, {
                key: '6',
                name: '从业人数',
                age: "ikun",
                address: '其中：农民就业人数',
                tags: "ikun",
                col5: '持证上岗人数',
                col6: "ikun",
            }, {
                key: '7',
                name: '带动农户数',
                age: "ikun",
                address: '从业农民人均年收入',
                tags: "ikun",
                col5: '当地农民年均人收入',
                col6: "ikun",
            }, {
                key: '8',
                name: '休闲观光点个数',
                age: "ikun",
                address: '最佳休闲观光季节',
                tags: "ikun",
                col5: '人均消费',
                col6: "ikun",
            }, {
                key: '9',
                name: '特色活动或品牌名称',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '星级评定情况',
                col6: "ikun",
            }],
            dataA4: [{//dataA4
                key: '1',
                name: '到景区行车路线',
                age: "ikun",
                address: '#',
                tags: '#',
                col5: '资产规模（万元）',
                col6: "ikun",
            }, {
                key: '2',
                name: '示范点基础设施建设情况',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '3',
                name: '#',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '4',
                name: '',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '5',
                name: '#',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '6',
                name: '#',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '7',
                name: '示范点综合情况摘要',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '8',
                name: '#',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '9',
                name: '#',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '10',
                name: '#',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '11',
                name: '#',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '12',
                name: '示范点休闲功能开发对当地社会经济的影响',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }],
            dataA5: [{//dataA5
                key: '1',
                name: '示范点典型照片',
                age: "ikun",
                address: '#',
                tags: '#',
                col5: '#',
                col6: "#",
            }, {
                key: '2',
                name: '#',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '3',
                name: '#',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '4',
                name: '#',
                age: "ikun",
                address: '#',
                tags: "#",
                col5: '#',
                col6: "#",
            }, {
                key: '5',
                name: '县级农业农村部门意见',
                age: "ikun",
                address: '市州农业农村部门审查意见',
                tags: "ikun",
                col5: '#',
                col6: "#",
            }]
        }
    }

    componentWillMount() {
        NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();
    }

    render() {
        return (

            <div className="apply-check-content">
                <Collapse defaultActiveKey={["1","2","3","4","5"]} >
                    <Collapse.Panel header="表头部分" key="1">
                        <Table
                            columns={columnsA1}
                            dataSource={this.state.dataA1}
                            pagination={false}
                            bordered={true}
                            showHeader={false}
                        />
                    </Collapse.Panel>
                    <Collapse.Panel header="商务信息" key="2">
                        <Table
                            columns={columnsA2}
                            dataSource={this.state.dataA2}
                            pagination={false}
                            bordered={true}
                            showHeader={false}
                        />
                    </Collapse.Panel>
                    <Collapse.Panel header="经济指标" key="3" >
                        <Table
                            columns={columnsA3}
                            dataSource={this.state.dataA3}
                            pagination={false}
                            bordered={true}
                            showHeader={false}
                        />
                    </Collapse.Panel>
                    <Collapse.Panel header="综合信息" key="4" >
                        <Table
                            columns={columnsA4}
                            dataSource={this.state.dataA4}
                            pagination={false}
                            bordered={true}
                            showHeader={false}
                        />
                    </Collapse.Panel>
                    <Collapse.Panel header="图片资料及推荐意见" key="5" >
                        <Table
                            columns={columnsA5}
                            dataSource={this.state.dataA5}
                            pagination={false}
                            bordered={true}
                            showHeader={false}
                        />
                    </Collapse.Panel>
                </Collapse>

            </div >

        )
    }
}

