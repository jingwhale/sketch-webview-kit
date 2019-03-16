import React, { PureComponent } from 'react';
import { Button } from 'antd';
import styles from './index.css'

var demo = "demo"

export default class IndexUI extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: demo,
    };
  }

  onClick = value => {
    // alert("click")
    console.log(demo);
    window.postMessage('fromwebview', {name:"from webview!"});
  };

  render() {
    var that = this;
    var  { date } = this.state;

    //监听plugin,更新UI
    window.someGlobalFunctionDefinedInTheWebview = function(arg) {
      console.log('from plugin---'+arg)
      that.setState({
        date: arg
      });
    };

    //主动向plugin获取数据
    if (window.data === undefined) {
      window.postMessage('getData');
    }

    return (
      <div>
          <div className={styles.title}>title</div>
          <Button onClick={this.onClick}>{date}</Button>
      </div>
    );
  }
}

