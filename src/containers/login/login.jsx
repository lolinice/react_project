/*
todo 用户登陆的路由组件
*/
import React,{Component} from 'react'
import {WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'
/*WingBlank两边留白，List列表，InputItem包含左边的item和右边input
 WhiteSpace垂直之间有空隙，Radio单选框
 */
import Logo from '../../components/logo/logo'

export default class Login extends Component{
    state={
        name:'',
        pwd:''
    }
    handleChange=(name,value)=>{
        this.setState({[name]:value})
    }
    //登陆
    login=()=>{
        console.log(JSON.stringify(this.state));
    }
    //跳转到注册路由
    toRegister=()=>{
        this.props.history.replace('/register')
    }

    render(){
        return(
            <div>
                <Logo/>
                <WingBlank/>
                <list>
                    <InputItem placeholder="请输入用户名" onChange={val=>this.handleChange('name',val)}>用户名:</InputItem>
                    <WhiteSpace/>
                    <InputItem type='password' placeholer="输入密码" onChange={val=>this.handleChange('pwd',val)}>密码：</InputItem>
                    <WhiteSpace/>

                    <Button type="primary" onClick={this.login}>登陆</Button>
                    <WhiteSpace/>
                    <Button onClick={this.toRegister}>还没有账号</Button>
                </list>

            </div>
        )
    }
}