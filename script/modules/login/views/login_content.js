/**
 * @file 登录页  View
 * @author 2017.12.21
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Login from './login.js'
class LoginContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.onLogin = this.onLogin.bind(this)
        this.onToggle = this.onToggle.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange(e) {
        let state = {}
        const fieldName = e.currentTarget.id
        state[fieldName] = e.target.value
        this.setState(state)
    }
    onLogin(e) {
        e.preventDefault()
        let url = "https://abuapi.0577xiedu.net/v1/xiedian_admin/AdminLoginForBaidu"
        if (!this.state.username) return alert('请输入用户名')
        if (!this.state.password && this.state.password.length < 6) return alert('请输入正确的密码')
        $.ajax({
            url: url,
            method: "POST",
            data: this.state,
            dataType: 'JSON'
        }).done(res => {
            if(res.ret === 1001) {
                let resString = JSON.stringify(res)
                sessionStorage.setItem('resString', resString);
                location.href = 'fixinglist.html?index'
            }else {
                alert(res.code)
            }
        })
        .fail(res => {
            alert(res.code)
        })
    }
    onToggle(e) {
        e.preventDefault()
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow")
    }
    render() {
        return (
            <div className="main">
                    <h1 className="sigin-title">title</h1>
                    <p className="sigin-sub">sub</p>
                <div className="sigin-outer">
                    <div className="yun-bg">yun</div>
                        <Login
                        state={this.state}
                        onLogin={this.onLogin}
                        onToggle={this.onToggle}
                        onChange={this.onChange}
                    />
                </div>
               
            </div>
        )
    }
}

render(
    <LoginContent />,
    $('#Login_content')[0]
)
