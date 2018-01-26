/*
todo 用户注册的路由组件
*/

import React,{Component} from 'react'
import {WingBlank,List,InputItem,WhiteSpace,Radio,Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'

const RadioItem = Radio.RadioItem

export default class Register extends Component{
    state={
        name:'',
        pwd:'',
        pwd2:'',
        type:'boss'

    }

    //处理输入框/单选框变化，收集数据到state
    handleChange=(name,val)=>{
        this.setState({
            [name]:val
        })
    }

    //跳转到login路由
    toLogin=()=>{
       this.props.history.replace('./login')
    }

    //注册
    register=()=>{
        console.log(JSON.stringify(this.state));
    }

    render(){
        const {type} = this.state
        return (
            <div>
                <Logo/>
                <WingBlank/>
                <List>
                    <InputItem onChange={val=>this.handleChange('name',val)}>用户名：</InputItem>
                    <WhiteSpace/>
                    <InputItem type='password' onChange={val => this.handleChange('pwd',val)}>密码：</InputItem>
                    <WhiteSpace/>
                    <InputItem type='password' onChange={val => this.handleChange('pwd2',val)}>确认密码</InputItem>

                    <WhiteSpace/>
                    <RadioItem checked={type==='boss'} onChange={()=>this.handleChange('type','boss')}>BOSS</RadioItem>
                    <RadioItem checked={type==='genius'} onChange={()=>this.handleChange('type','genius')}>牛人</RadioItem>

                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                    <Button onClick={this.toLogin}>已有账号</Button>

                </List>

            </div>
        )
    }
}