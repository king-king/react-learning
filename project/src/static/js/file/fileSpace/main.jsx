import React from 'react';
import ReactDOM from 'react-dom';

import '../../../style/common';
import '../../../style/fileSpace';

import Dir from './component/Dir.jsx';
import Path from './component/Path.jsx';

var lines = [
    {
        name: '用户数据',
        type: 'dir',
        size: 3213
    }, {
        name: 'UserData',
        type: 'dir',
        size: 123
    }, {
        name: 'ProductData',
        type: 'dir',
        size: 11
    }, {
        name: 'A-Data.csv',
        type: 'file',
        size: 3213
    }, {
        name: 'W-Data.csv',
        type: 'file',
        size: 3213
    }, {
        name: 'G-Data.csv',
        type: 'file',
        size: 3213
    }
];

class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    onPathChange(path) {
        console.log(path)
    }
    render() {
        return (
            <React.Fragment>
                <Path onChange={this.onPathChange} path={'文件空间/Data/Userdata/Dailydata'}></Path>
                <Dir lines={lines}></Dir>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Page></Page>, document.querySelector('#content'));
