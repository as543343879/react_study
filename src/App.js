import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

import 'antd/dist/antd.css'
import { Button,DatePicker } from 'antd';
import {WechatOutlined,WeiboOutlined,SearchOutlined} from '@ant-design/icons'
const { RangePicker } = DatePicker;


export default class App extends Component {


  render() {
    return (
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <Header/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">

                {/* 原生html中，靠<a>跳转不同的页面 */}
                {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

                {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
                <NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>
                <MyNavLink to="/about"> MyNavLink About </MyNavLink>
                <MyNavLink  to="/home">MyNavLink Home </MyNavLink>
              </div>
              <button>点我</button>
              <Button type="primary">按钮1</Button>
              <Button >按钮2</Button>
              <Button type="link">按钮3</Button>
              <Button type="primary" icon={<SearchOutlined />}>
                Search
              </Button>
              <WechatOutlined />
              <WeiboOutlined />
              <DatePicker/>
              <RangePicker/>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
