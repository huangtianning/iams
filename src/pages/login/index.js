import React from 'react'
import { Form, Input, Icon, Button, Card, message } from 'antd'
import './index.less'


const accessKey = {
    userName: "guest",
    passWord: "guest"
}



class LoginFrom extends React.Component{

    accessKeyIsRight = (params)=>{
        if(params.userName === accessKey['userName'] && params.passWord === accessKey['passWord']){
            return true;
        }else{
            return false;
        }
    }

    handleSubmit = (e) => {
        //提交之前判断输入的字段是否有错误
        e.preventDefault();
        
        let history = this.props.history;
        this.props.form.validateFields((errors,values)=>{
            if (!errors) {
                if(this.accessKeyIsRight(values)){
                    // console.log('Received values of form: ', values);
                    history.push('/admin');
                }else{ message.error('用户名或密码错误'); }
              }
        })
    }

    render(){
        //Form.create 包装的组件会自带this.props.form属性，该属性提供了一系列API，包括以下4个
        //getFieldDecorator用于和表单进行双向绑定
        //isFieldTouched判断一个输入控件是否经历过 getFieldDecorator 的值收集时机 options.trigger(收集子节点的值的时机，默认时onChange)
        //getFieldError获取某个输入控件的 Error
        //getFieldsError获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error
        const { getFieldDecorator, /*getFieldsError,*/ getFieldError, isFieldTouched } = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passWordError = isFieldTouched('passWord') && getFieldError('passWord');

        return (

                <Card className="login-card">
                <div className="login-logo">
                    IAMS demo
                </div>
                <div className="login-form">
                    <Form onSubmit={this.handleSubmit}>
                        {/* 一个FromItem中放一个被 getFieldDecorator 装饰过的 child */}
                        <Form.Item
                            validateStatus={userNameError ? 'error' : 'success'}//validateStatus为校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'
                            hasFeedback
                        >
                        {
                            getFieldDecorator('userName',{
                                rules:[{required:true,message:"username is required"}]
                            })(
                                <Input prefix={<Icon type="user" />}
                                        placeholder="Username"
                                />
                            )
                        }
                        </Form.Item>
                        <Form.Item
                            validateStatus={passWordError ? "error" : 'success'}
                            hasFeedback
                        >
                        {
                            getFieldDecorator('passWord',{
                                rules:[{required:true,message:"password is required"}]
                            })(
                                <Input type="passWord" prefix={<Icon type="lock"/>}
                                        placeholder="Password"
                                />
                            )
                        }
                        </Form.Item>
                        
                            <Button
                                type="primary"
                                htmlType="submit"  
                                className="login-btn" 
                            >Sign in
                            </Button>
                        
                        <p className="user-msg">
                            <span>Username：guest</span>
                            <span>Password：guest</span>
                        </p>
                    </Form>
                </div>
            </Card>

                
            
        )
    }
}
let LoginForm = Form.create()(LoginFrom);
export default LoginForm;
