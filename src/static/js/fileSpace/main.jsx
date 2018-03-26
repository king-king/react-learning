import Dir from '../lib/component/dir/main';
import ReactDOM from 'react-dom';

var lines = [
    {
        type: 'dir',
        size: 3213
    }, {
        type: 'dir',
        size: 123
    }, {
        type: 'dir',
        size: 11
    }, {
        type: 'file',
        size: 3213
    }, {
        type: 'file',
        size: 3213
    }, {
        type: 'file',
        size: 3213
    }
];
ReactDOM.render(<Dir lines={lines}></Dir>, document.querySelector('#wrap'));
