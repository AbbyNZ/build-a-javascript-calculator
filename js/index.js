const cOperator = /[*/+-]/;

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '0',
      prevValue: '0',
      formula: '' };


    this.initialize = this.initialize.bind(this);
    this.backspace = this.backspace.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.decimal = this.decimal.bind(this);
    this.digitLimit = this.digitLimit.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  initialize() {
    this.setState({
      inputValue: '0',
      prevValue: '0',
      formula: '' });

  }

  backspace() {
    this.setState({
      inputValue: this.state.inputValue.slice(0, -1),
      formula: this.state.inputValue.slice(0, -1) });

  }

  digitLimit() {
    this.setState({
      inputValue: 'Exceed digit limit',
      prevValue: this.state.inputValue });

    setTimeout(() => this.setState({ inputValue: this.state.prevVal }), 1000);
  }

  calculate() {
    if (/[*/+-]$/.test(this.state.formula))
    this.state.formula = this.state.formula.slice(0, -1);

    let result = Math.round(1000000000000 * eval(this.state.formula)) / 1000000000000;
    this.setState({
      inputValue: result,
      formula: this.state.formula + "=" + result,
      prevValue: result });

  }

  handleNumbers(e) {
    if (this.state.inputValue.length > 16) {
      this.digitLimit();
    } else
    if (this.state.formula.includes('=')) {
      this.setState({
        inputValue: e.target.value,
        formula: e.target.value != '0' ? e.target.value : '' });

    } else
    {
      this.setState({
        inputValue: this.state.inputValue == '0' || cOperator.test(this.state.inputValue) ? e.target.value : this.state.inputValue + e.target.value,
        formula: this.state.formula == '0' && e.target.value == '0' ? this.state.formula : /([^.0-9]0)$/.test(this.state.formula) ? this.state.formula.slice(0, -1) + e.target.value : this.state.formula + e.target.value });

    }
  }

  handleOperators(e) {
    if (this.state.inputValue.length > 16) {
      this.digitLimit();
    } else
    if (this.state.formula.includes('=')) {
      this.setState({
        formula: this.state.prevValue + e.target.value });

    } else {
      this.setState({
        inputValue: e.target.value,
        prevValue: !cOperator.test(this.state.inputValue) ?
        this.state.formula : this.state.prevValue,
        formula: !cOperator.test(this.state.inputValue) ?
        this.state.formula += e.target.value :
        this.state.prevValue += e.target.value });

    }
  }

  decimal() {
    if (!/\./.test(this.state.inputValue)) {
      this.setState({
        inputValue: '0.',
        formula: '0.' });

      if (this.state.inputValue.length > 16) {
        this.digitLimit();
      } else
      if (/[*+‑/]$/.test(this.state.formula) || this.state.inputValue == '0' && this.state.formula === '') {
        this.setState({
          inputValue: '0.',
          formula: this.state.formula + '0.' });

      } else {
        this.setState({
          inputValue: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
          formula: this.state.formula + '.' });

      }
    }
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { className: "title" }, React.createElement("h1", null, "JavaScript Calculator")),
      React.createElement("div", { className: "calculator" },
      React.createElement("div", { className: "displayScreen" },
      React.createElement(FormulaScreen, { formula: this.state.formula }),
      React.createElement(OutputScreen, { currentValue: this.state.inputValue })),

      React.createElement(Buttons, { initialize: this.initialize, numbers: this.handleNumbers, operators: this.handleOperators, calculate: this.calculate, backspace: this.backspace, decimal: this.decimal }))));
  }}


class Buttons extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement("button", { id: "clearEntry", value: "CE", className: "clearBtn", onClick: this.props.backspace }, "CE"),
      React.createElement("button", { id: "clear", value: "C", className: "clearBtn", onClick: this.props.initialize }, "C"),
      React.createElement("button", { id: "divide", value: "/", onClick: this.props.operators }, "/"),
      React.createElement("button", { id: "seven", value: "7", onClick: this.props.numbers }, "7"),
      React.createElement("button", { id: "eight", value: "8", onClick: this.props.numbers }, "8"),
      React.createElement("button", { id: "nine", value: "9", onClick: this.props.numbers }, "9"),
      React.createElement("button", { id: "multiply", value: "*", onClick: this.props.operators }, "x"),
      React.createElement("button", { id: "four", value: "4", onClick: this.props.numbers }, "4"),
      React.createElement("button", { id: "five", value: "5", onClick: this.props.numbers }, "5"),
      React.createElement("button", { id: "six", value: "6", onClick: this.props.numbers }, "6"),
      React.createElement("button", { id: "subtract", value: "-", onClick: this.props.operators }, "-"),
      React.createElement("button", { id: "one", value: "1", onClick: this.props.numbers }, "1"),
      React.createElement("button", { id: "two", value: "2", onClick: this.props.numbers }, "2"),
      React.createElement("button", { id: "three", value: "3", onClick: this.props.numbers }, "3"),
      React.createElement("button", { id: "add", value: "+", onClick: this.props.operators }, "+"),
      React.createElement("button", { id: "zero", value: "0", onClick: this.props.numbers }, "0"),
      React.createElement("button", { id: "decimal", value: ".", onClick: this.props.decimal }, "."),
      React.createElement("button", { id: "equals", value: "=", className: "equalBtn", onClick: this.props.calculate }, "=")));


  }}


class OutputScreen extends React.Component {
  render() {
    return (
      React.createElement("div", { id: "display" }, this.props.currentValue));

  }}


class FormulaScreen extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "formulaDisplay" }, this.props.formula));

  }}


ReactDOM.render(React.createElement(Calculator, null), document.getElementById('app'));'));
