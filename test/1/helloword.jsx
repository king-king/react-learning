class MyHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexs: [0, 1, 2, 3, 4]
        };
        console.log(this.props);
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    componentDidMount() {
        // render完毕
        console.log('componentDidMount');
        // console.log(ReactDOM.findDOMNode(this));
    }
    render() {
        console.log('render');
        return (<div>{this.state.indexs.map((item) => {
            return <div className={'item item-' + item} key={item}>{item}</div>;
        })}</div>);
    }
}

function Alert(){
    return <div>hello</div>
}

setTimeout(() => {
    ReactDOM.unmountComponentAtNode(
        document.getElementById('example')
    );
}, 3000);
ReactDOM.render(
    <div><MyHello  hello='yes' /><Alert/></div>,
    document.getElementById('example'),
    ()=>{
        console.log(document.getElementById('example').innerHTML)
    }
);