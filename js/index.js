var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Calculator = function (_React$Component) {_inherits(Calculator, _React$Component);
  function Calculator(props) {_classCallCheck(this, Calculator);var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
    props));

    _this.state = {
      inputValue: '0',
      prevVal: '0',
      formula: '' };


    _this.initialize = _this.initialize.bind(_this);
    _this.handleNumbers = _this.handleNumbers(_this);
    _this.handleOperators = _this.handleOperators(_this);return _this;
  }_createClass(Calculator, [{ key: 'initialize', value: function initialize()

    {
      this.setState({
        inputValue: '0',
        prevVal: '0',
        formula: '',
        lastClicked: '' });

    } }, { key: 'handleNumbers', value: function handleNumbers(

    e) {
      if (this.state === true) {
        this.setState({
          inputValue: e.target.value,
          formula: e.target.value != '0' ? e.target.value : '' });

      }
    } }, { key: 'handleOperators', value: function handleOperators(

    e) {
      if (this.state === true) {
        this.setState({
          inputValue: e.target.value });

      }

    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement('div', { className: 'title' }, React.createElement('h1', null, 'JavaScript Calculator')),
          React.createElement('div', { className: 'calculator' },
            React.createElement('div', { className: 'displayScreen' },
              React.createElement(FormulaScreen, { formula: this.state.formula.replace(/x/g, '.') }),
              React.createElement(OutputScreen, { currentValue: this.state.inputValue })),

            React.createElement(Buttons, { initialize: this.initialize, numbers: this.handleNumbers, operators: this.handleOperators }))));





    } }]);return Calculator;}(React.Component);var


Buttons = function (_React$Component2) {_inherits(Buttons, _React$Component2);function Buttons() {_classCallCheck(this, Buttons);return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));}_createClass(Buttons, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', null,
          React.createElement('button', { id: 'clear', value: 'CE', className: 'clearBtn' }, 'CE'),
          React.createElement('button', { id: 'clear', value: 'C', className: 'clearBtn', onClick: this.props.initialize }, 'C'),
          React.createElement('button', { id: 'divide', value: '/', onClick: this.props.operators }, '/'),
          React.createElement('button', { id: 'seven', value: '7', onClick: this.props.numbers }, '7'),
          React.createElement('button', { id: 'eight', value: '8', onClick: this.props.numbers }, '8'),
          React.createElement('button', { id: 'nine', value: '9', onClick: this.props.numbers }, '9'),
          React.createElement('button', { id: 'multiply', value: 'x', nClick: this.props.operators }, 'x'),
          React.createElement('button', { id: 'four', value: '4', onClick: this.props.numbers }, '4'),
          React.createElement('button', { id: 'five', value: '5', onClick: this.props.numbers }, '5'),
          React.createElement('button', { id: 'six', value: '6', onClick: this.props.numbers }, '6'),
          React.createElement('button', { id: 'subtract', value: '-', nClick: this.props.operators }, '-'),
          React.createElement('button', { id: 'one', value: '1', onClick: this.props.numbers }, '1'),
          React.createElement('button', { id: 'two', value: '2', onClick: this.props.numbers }, '2'),
          React.createElement('button', { id: 'three', value: '3', onClick: this.props.numbers }, '3'),
          React.createElement('button', { id: 'add', value: '+', nClick: this.props.operators }, '+'),
          React.createElement('button', { id: 'zero', value: '0', onClick: this.props.numbers }, '0'),
          React.createElement('button', { id: 'decimal', value: '.' }, '.'),
          React.createElement('button', { id: 'equals', value: '=', className: 'equalBtn', nClick: this.props.operators }, '=')));


    } }]);return Buttons;}(React.Component);var


OutputScreen = function (_React$Component3) {_inherits(OutputScreen, _React$Component3);function OutputScreen() {_classCallCheck(this, OutputScreen);return _possibleConstructorReturn(this, (OutputScreen.__proto__ || Object.getPrototypeOf(OutputScreen)).apply(this, arguments));}_createClass(OutputScreen, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: 'display' }, this.props.currentValue));

    } }]);return OutputScreen;}(React.Component);var


FormulaScreen = function (_React$Component4) {_inherits(FormulaScreen, _React$Component4);function FormulaScreen() {_classCallCheck(this, FormulaScreen);return _possibleConstructorReturn(this, (FormulaScreen.__proto__ || Object.getPrototypeOf(FormulaScreen)).apply(this, arguments));}_createClass(FormulaScreen, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'formulaDisplay' }, this.props.formula));

    } }]);return FormulaScreen;}(React.Component);


ReactDOM.render(React.createElement(Calculator, null), document.getElementById('app'));
