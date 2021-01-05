import React from 'react';
import './App.css';

function Header(props) {
  return (
    <nav className="Header">
      <h2>{props.text}</h2>
    </nav>
  );
}

function Footer(props) {
  return (
    <footer className="Footer">
      <h2>{props.trademark}</h2>
    </footer>
  );
}
class Odometer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      readout: "0000"

    }
    this.oneClick = this.oneClick.bind(this);
    this.tenClick = this.tenClick.bind(this);
    this.hundClick = this.hundClick.bind(this);
    this.thouClick = this.thouClick.bind(this);
  }
  oneClick() {
    if (parseInt(this.state.readout) >= 9998) {
      this.setState({
        readout: (parseInt(this.state.readout) - 9998).toString().padStart(4,0)
      })
    }
    else{
      this.setState({
        readout: (parseInt(this.state.readout) + 1).toString().padStart(4,0)
    })

    }
    
  }
  tenClick() {
    if (parseInt(this.state.readout) >= 9989) {
      this.setState({
        readout: (parseInt(this.state.readout) - 9989).toString().padStart(4,0)
      })
    }
    else{
      this.setState({
        readout: (parseInt(this.state.readout) + 10).toString().padStart(4,0)
    })

    }
    
  }
  hundClick() {
    if (parseInt(this.state.readout) >= 9899) {
      this.setState({
        readout: (parseInt(this.state.readout) - 9899).toString().padStart(4,0)
      })
    }
    else{
      this.setState({
        readout: (parseInt(this.state.readout) + 100).toString().padStart(4,0)
    })

    }
    
  }

  thouClick() {
    if (parseInt(this.state.readout) >= 8999) {
      this.setState({
        readout: (parseInt(this.state.readout) - 8999).toString().padStart(4,0)
      })
    }
    else{
      this.setState({
        readout: (parseInt(this.state.readout) + 1000).toString().padStart(4,0)
    })

    }
    
  }
  render(){
    return (
      <div className = "Odometer">
        <Header text = "Welcome to the Odometer! This is a text value being delivered via props"/>
        <h1>{this.state.readout}</h1>
        <button onClick={this.oneClick}>Add 1</button>
        <button onClick={this.tenClick}>Add 10</button>
        <button onClick={this.hundClick}>Add 100</button>
        <button onClick={this.thouClick}>Add 1000</button>
        <Footer trademark="this is the trademark being delivered via props!"/>
      </div>
    );
  }
}

export default Odometer;
