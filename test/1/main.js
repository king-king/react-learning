class MyHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexs: [0, 1, 2, 3, 4]
        };
    }
    render() {
        return React.createElement(
            'div',
            null,
            this.state.indexs.map(item => {
                return React.createElement(
                    'div',
                    { key: item },
                    item
                );
            })
        );
    }
}

ReactDOM.render(React.createElement(MyHello, null), document.getElementById('example'));