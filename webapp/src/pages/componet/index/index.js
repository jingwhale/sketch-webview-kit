import React, { PureComponent } from 'react';
import { Button } from 'antd';
import styles from './index.css'

var demo = "demo";

window.someGlobalFunctionDefinedInTheWebview = function(arg) {
  console.log('someGlobalFunctionDefinedInTheWebview---'+arg)
  demo = arg;
}

export default class IndexUI extends PureComponent {
  onClick = value => {
    // alert("click")
    window.postMessage('fromwebview', {name:"from webview!"});

    window.postMessage('getData', {name:"getData"});
  };

  render() {
    return (
      <div>
          <div className={styles.title}>title</div>
          <Button onClick={this.onClick}>{demo}</Button>
      </div>
    );
  }
}

