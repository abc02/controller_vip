/**
 * @file 列表 Reflux View
 * @author 2017.12.21
 */

import React, { Component } from 'react';


var marginRight = {
    "margin-right": '10px'
}
const List = (props) => {
    const listItems = props.data.map((item, index) => {
        return (
            <tr key={index}
                >
                <td>{index + 1}</td>
                <td>{item.Title}</td>
                <td>
                    <a href="javscirpt:void(0);" 
                        style={marginRight}
                        onClick={props.onManager.bind(this, index)}
                        >查看
                    </a>
                </td>
            </tr>
            )
        }   
    )
    return (
        <table className="table">
            <thead>
                <tr>
                  <th>序号</th>
                  <th>设备昵称</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {listItems}
              </tbody>
        </table>
    )
}

export default List;
