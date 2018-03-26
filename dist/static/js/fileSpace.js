webpackJsonp([3],{

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(98);

var _main2 = _interopRequireDefault(_main);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lines = [{
    type: 'dir',
    size: 3213
}, {
    type: 'dir',
    size: 123
}, {
    type: 'dir',
    size: 11
}, {
    type: 'file',
    size: 3213
}, {
    type: 'file',
    size: 3213
}, {
    type: 'file',
    size: 3213
}];
_reactDom2.default.render(React.createElement(_main2.default, { lines: lines }), document.querySelector('#wrap'));

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_React$Component) {
    _inherits(Line, _React$Component);

    function Line(props) {
        _classCallCheck(this, Line);

        return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, props));
    }

    _createClass(Line, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'line ' + (this.props.index % 2 === 0 ? 'even' : 'odd') },
                _react2.default.createElement(
                    'div',
                    { classnName: 'name fl' },
                    _react2.default.createElement('span', { className: 'type-icon ' + this.props.type }),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.props.name
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { classnName: 'size fl' },
                    this.props.size
                ),
                _react2.default.createElement('span', { classnName: 'edit line-icon fl' })
            );
        }
    }]);

    return Line;
}(_react2.default.Component);

Line.PropTypes = {
    name: _propTypes2.default.string,
    index: _propTypes2.default.number,
    type: _propTypes2.default.string,
    size: _propTypes2.default.string
};
Line.defaultProps = {
    index: 0,
    name: '',
    type: 'file',
    size: ''
};

var Dir = function (_React$Component2) {
    _inherits(Dir, _React$Component2);

    function Dir(props) {
        _classCallCheck(this, Dir);

        return _possibleConstructorReturn(this, (Dir.__proto__ || Object.getPrototypeOf(Dir)).call(this, props));
    }

    _createClass(Dir, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'fl', style: { width: '47%' } },
                        '\u6587\u4EF6\u540D'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'fl', style: { width: '47%' } },
                        '\u6587\u4EF6\u5927\u5C0F'
                    )
                ),
                this.props.lines.map(function (cf, i) {
                    var pros = {
                        index: i,
                        name: cf.name,
                        type: cf.type,
                        size: cf.size
                    };
                    return _react2.default.createElement(Line, _extends({ key: i }, pros));
                })
            );
        }
    }]);

    return Dir;
}(_react2.default.Component);

exports.default = Dir;

/***/ })

},[97]);