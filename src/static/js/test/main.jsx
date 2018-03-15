import React from 'react';
import ReactDOM from 'react-dom';

class Com extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>hello</div>
    }
}

ReactDOM.render(<Com></Com>, document.querySelector('#wrap'));
