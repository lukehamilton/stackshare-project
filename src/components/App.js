import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h1 style={{'text-align': 'center', 'margin-top': '40px'}}>StackShare Challenge</h1>
            <h3 style={{'text-align': 'center', 'margin': '20px auto 40px auto'}}>By Luke Hamilton</h3>
          </div>
        </div>
        <div className="routerView">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
