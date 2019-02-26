var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Calculator = function (_React$Component) {_inherits(Calculator, _React$Component);
  function Calculator(props) {_classCallCheck(this, Calculator);var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
    props));

    _this.state = {
      initialValue: "0" };return _this;

  }_createClass(Calculator, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", null));



    } }]);return Calculator;}(React.Component);var


Buttons = function (_React$Component2) {_inherits(Buttons, _React$Component2);function Buttons() {_classCallCheck(this, Buttons);return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));}_createClass(Buttons, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", null,
          React.createElement("button", { id: "clear", value: "C" }, "C"),
          React.createElement("button", { id: "divide", value: "/" }, "/"),
          React.createElement("button", { id: "seven", value: "7" }, "7"),
          React.createElement("button", { id: "eight", value: "8" }, "8"),
          React.createElement("button", { id: "nine", value: "9" }, "9"),
          React.createElement("button", { id: "multiply", value: "x" }, "x"),
          React.createElement("button", { id: "four", value: "4" }, "4"),
          React.createElement("button", { id: "five", value: "5" }, "5"),
          React.createElement("button", { id: "six", value: "6" }, "6"),
          React.createElement("button", { id: "subtract", value: "-" }, "-"),
          React.createElement("button", { id: "one", value: "1" }, "1"),
          React.createElement("button", { id: "two", value: "2" }, "2"),
          React.createElement("button", { id: "three", value: "3" }, "3"),
          React.createElement("button", { id: "add", value: "+" }, "+"),
          React.createElement("button", { id: "zero", value: "0" }, "0"),
          React.createElement("button", { id: "decimal", value: "." }, "."),
          React.createElement("button", { id: "equals", value: "=" }, "=")));


    } }]);return Buttons;}(React.Component);var


OutputScreen = function (_React$Component3) {_inherits(OutputScreen, _React$Component3);function OutputScreen() {_classCallCheck(this, OutputScreen);return _possibleConstructorReturn(this, (OutputScreen.__proto__ || Object.getPrototypeOf(OutputScreen)).apply(this, arguments));}_createClass(OutputScreen, [{ key: "render", value: function render()
    {
      return;
      React.createElement("div", { id: "display" }, this.props.initialValue);

    } }]);return OutputScreen;}(React.Component);


ReactDOM.render(React.createElement(Calculator, null), document.getElementById('app'));