import Dir from '../lib/component/dir/main';
import React from 'react';
import ReactDOM from 'react-dom';

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
ReactDOM.render(<Dir lines={lines}></Dir>, document.querySelector('#wrap'));
