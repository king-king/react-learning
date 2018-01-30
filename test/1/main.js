class MyHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexs: [0, 1, 2, 3, 4]
        };
        console.log(this.props);
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }
    componentDidMount() {
        // render完毕
        console.log('componentDidMount');
        // console.log(ReactDOM.findDOMNode(this));
    }
    render() {
        console.log('render');
        return React.createElement(
            'div',
            null,
            this.state.indexs.map(item => {
                return React.createElement(
                    'div',
                    { className: 'item item-' + item, key: item },
                    item
                );
            })
        );
    }
}

function Alert() {
    return React.createElement(
        'div',
        null,
        'hello'
    );
}

setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('example'));
}, 3000);
ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(MyHello, { hello: 'yes' }),
    React.createElement(Alert, null)
), document.getElementById('example'), () => {
    console.log(document.getElementById('example').innerHTML);
});