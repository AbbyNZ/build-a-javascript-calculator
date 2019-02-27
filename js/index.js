class Calculator extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      initialValue: '0'
    };
  }
  
  render () {
    return (
      <div>
        <div className='container'>
        <div className="title">JavaScript Calculator</div>
        <div className="calculator">
          <OutputScreen currentValue={this.state.initialValue} />
          <Buttons>
          </Buttons>
        </div>
        </div>
      </div>
    )
  }
}

class Buttons extends React.Component {
  render () {
    return (
      <div>
        <button id="clear" value="C">C</button>
        <button id="divide" value="/">/</button>
        <button id="seven" value="7">7</button>
        <button id="eight" value="8">8</button>
        <button id="nine" value="9">9</button>
        <button id="multiply" value="x">x</button>
        <button id="four" value="4">4</button>
        <button id="five" value="5">5</button>
        <button id="six" value="6">6</button>
        <button id="subtract" value="-">-</button>
        <button id="one" value="1">1</button>         
        <button id="two" value="2">2</button>
        <button id="three" value="3">3</button>
        <button id="add" value="+">+</button>
        <button id="zero" value="0">0</button>
        <button id="decimal" value=".">.</button>
        <button id="equals" value="=">=</button>   
      </div>
    )
  }
}

class OutputScreen extends React.Component {
  render () {
    return (
      <div id="display">{this.props.currentValue}</div>
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('app'));
