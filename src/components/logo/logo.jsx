/*
todo 显示logo图片的UI组件
*/
import React from 'react'
import logoImg from './job.png'
import './logo.css'

export default function Logo(){
    return (
        <div className="logo-container">
            <img src={logoImg} alt="logo"/>
        </div>
    )
}
