"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

var _offcourseComponentTodolistItem = require("offcourse-component-todolist-item");

var _offcourseComponentTodolistItem2 = _interopRequireDefault(_offcourseComponentTodolistItem);

var Todolist = (function (_React$Component) {
  function Todolist(props) {
    _classCallCheck(this, Todolist);

    _get(Object.getPrototypeOf(Todolist.prototype), "constructor", this).call(this, props);
    this.name = "todolist";
  }

  _inherits(Todolist, _React$Component);

  _createClass(Todolist, [{
    key: "classes",
    value: function classes() {
      return (0, _classnames3["default"])(_defineProperty({}, this.name, true));
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var collection = _props.collection;
      var handleHover = _props.handleHover;
      var handleTitleClick = _props.handleTitleClick;
      var handleCheckboxClick = _props.handleCheckboxClick;

      var items = _ramda2["default"].mapIndexed(function (item, index) {
        return _react2["default"].createElement(_offcourseComponentTodolistItem2["default"], { key: index, item: item,
          handleHover: handleHover,
          handleTitleClick: handleTitleClick,
          handleCheckboxClick: handleCheckboxClick });
      }, collection);

      return _react2["default"].createElement(
        "ul",
        { className: this.classes() },
        items
      );
    }
  }]);

  return Todolist;
})(_react2["default"].Component);

Todolist.defaultProps = {
  handleCheckboxClick: function handleCheckboxClick() {},
  handleTitleClick: function handleTitleClick() {},
  handleHover: function handleHover() {}
};

Todolist.propTypes = {
  handleHover: _react2["default"].PropTypes.func,
  handleTitleClick: _react2["default"].PropTypes.func,
  handleCheckboxClick: _react2["default"].PropTypes.func,
  collection: _react2["default"].PropTypes.array.isRequired
};

exports["default"] = Todolist;

/*eslint no-unused-vars:0 */
module.exports = exports["default"];