import React, { Component } from 'react';
import './subPage.less'
export default class subPage extends Component {
    render() {
        return (
            <div className="subPage">
                <header>
                    <i className="iconfont icon-fanhui"></i>
                    <h3 className="title">
                        Use Redux
                  </h3>
                </header>

                <main className="main">

                    <div className="endTime sub">
                        <i className="iconfont icon-rili"></i>
                        <span className="subP">截止时间</span>

                    </div>
                    <div className="remindTime sub">
                        <i className="iconfont icon-36"></i>
                        <span className="subP">提醒时间</span>

                    </div>
                    <div className="loop sub">
                        <i className="iconfont icon-icon--"></i>
                        <span className="subP">重复</span>

                    </div>

                    <div className="addSubTask sub">
                        <i className="iconfont icon-jia1"></i>
                        <input placeholder="添加子任务" className="addTaskInp subP"></input>

                    </div>
                    <div className="addRemark sub">
                        <i className="iconfont icon-tianjiabeizhu"></i>
                        <span className="subP">添加备注</span>
                    </div>

                </main>




            </div>
        )
    }
}