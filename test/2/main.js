'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_React$Component) {
    _inherits(Switch, _React$Component);

    function Switch(props) {
        _classCallCheck(this, Switch);

        var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

        _this.state = { curIndex: 0 };
        _this.commonStyle = {
            cursor: 'pointer',
            display: 'inline-block',
            height: '20px',
            textAlign: 'center',
            width: '100px',
            lineHeight: '20px',
            borderRadius: '2px'
        };
        _this.selectStyle = _extends({}, _this.commonStyle, {
            backgroundColor: '#eee'
        });
        return _this;
    }

    _createClass(Switch, [{
        key: 'onChange',
        value: function onChange(i) {
            this.props.onChange && this.props.onChange(i);
            this.setState({ curIndex: i });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                this.props.items.map(function (item, i) {
                    return React.createElement(
                        'div',
                        { key: i, style: i === _this2.state.curIndex ? _this2.selectStyle : _this2.commonStyle, onClick: function onClick() {
                                _this2.onChange(i);
                            }, className: 'item-' + i },
                        item.txt
                    );
                })
            );
        }
    }]);

    return Switch;
}(React.Component);

function onChange(i) {
    console.log(i);
}

ReactDOM.render(React.createElement(Switch, { onChange: onChange, items: [{ txt: '西游记' }, { txt: '西部世界' }, { txt: '敦刻尔克' }] }), document.querySelector('#example'));