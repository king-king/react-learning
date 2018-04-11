import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(){
        return true;
    }
    componentDidMount() {
        this.setState({ ok: true });
    }
    render() {
        return (
            <div>hello word</div>
        );
    }
}

ReactDOM.render(<App></App>, document.querySelector('#content'));
