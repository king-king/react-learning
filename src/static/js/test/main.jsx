import React from 'react';
import ReactDOM from 'react-dom';
import '../../style/test';
class Com extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>hello</div>
    }
}

ReactDOM.render(<Com></Com>, document.querySelector('#wrap'));
