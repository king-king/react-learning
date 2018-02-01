class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curIndex: 0 };
        this.commonStyle = {
            cursor: 'pointer',
            display: 'inline-block',
            height: '20px',
            textAlign: 'center',
            width: '100px',
            lineHeight: '20px',
            borderRadius:'2px'
        };
        this.selectStyle = {
            ...this.commonStyle,
            backgroundColor: '#eee'
        };
    }
    onChange(i) {
        this.props.onChange && this.props.onChange(i);
        this.setState({ curIndex: i });
    }
    render() {
        return (
            <div>
                {this.props.items.map((item, i) => {
                    return <div key={i} style={i === this.state.curIndex ? this.selectStyle : this.commonStyle} onClick={() => { this.onChange(i) }} className={'item-' + i}>{item.txt}</div>
                })}
            </div>
        );
    }
}

function onChange(i) {
    console.log(i);
}

ReactDOM.render(<Switch onChange={onChange} items={[{ txt: '西游记' }, { txt: '西部世界' }, { txt: '敦刻尔克' }]} />, document.querySelector('#example'));