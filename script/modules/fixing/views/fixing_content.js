/**
 * @file 列表页  View
 * @author 2017.12.21
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './list.js'

class FixingContent extends Component {
    constructor(props) {
        super(props)
        let resString = sessionStorage.getItem('resString')
        this.state = JSON.parse(resString)

        this.onManager = this.onManager.bind(this)
    }
    onManager(index, e) {
        e.preventDefault()
        location.href = `manager.html?index=${index}`
    }
    render() {
        return (
            <div className="main">
                <div className="head">
                    <div className="ditu" />
                    <div>
                        <h1 className="list-title">阿布跑跑大数据列表</h1>
                        <p className="sub">ABU RUN LARGE DATA LIST</p>
                    </div>
                    {/* <div className="aboo-logo" /> */}
                </div>
                <div className="table-outer" >
                    <h3 className="table-title">阿布数据列表</h3>
                    <List data={this.state.data} onManager={this.onManager} />
                </div>
            </div>
        )
    }
}

render(
    <FixingContent />,
    $('#Fixing_content')[0]
)
