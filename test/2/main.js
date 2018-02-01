var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curIndex: 0 };
        let commonStyle = { cursor: 'pointer', display: 'inline-block', height: '20px', textAlign: 'center', width: '100px', lineHeight: '20px' };
        this.commonStyle = commonStyle;
        this.selectStyle = _extends({}, commonStyle, {
            backgroundColor: '#eee'
        });
    }
    onChange(i) {
        this.props.onChange && this.props.onChange(i);
        this.setState({ curIndex: i });
    }
    render() {
        return React.createElement(
            'div',
            null,
            this.props.items.map((item, i) => {
                return React.createElement(
                    'div',
                    { key: i, style: i === this.state.curIndex ? this.selectStyle : this.commonStyle, onClick: () => {
                            this.onChange(i);
                        }, className: 'item-' + i },
                    item.txt
                );
            })
        );
    }
}

ReactDOM.render(React.createElement(Switch, { items: [{ txt: '西游记' }, { txt: '西部世界' }, { txt: '敦刻尔克' }] }), document.querySelector('#example'));