class MyHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexs: [0, 1, 2, 3, 4]
        };
    }
    render() {
        return (<div>{this.state.indexs.map((item) => {
            return <div key={item}>{item}</div>;
        })}</div>);
    }
}


ReactDOM.render(
    <MyHello />,
    document.getElementById('example')
);