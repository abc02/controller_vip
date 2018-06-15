/**
 * @file 登录页 Reflux View
 * @author 崔健 cuijian03@baidu.com 2016.08.20
 */

import React, { Component } from 'react';

const Login = (props) => {
    return (
        <div className="form">
          {/* <h3 className="form-title">阿布后台登录</h3> */}
          <form className="login-form" onSubmit={props.onLogin}>
            <div className="form-input">
            <input
              type="text"
              name="username"
              id="username" 
              placeholder="请输入用户名" 
              value={props.state.username} 
              onChange={props.onChange} />
              </div>
            <div className="form-input">
            <input 
              type="password" 
              name="password"
              id="password"
              placeholder="请输入6-12位密码"
              value={props.state.password} 
              onChange={props.onChange}
            />
            </div>
            <button type="submit">登录</button>
          </form>
        </div>
    )
}

export default Login;
