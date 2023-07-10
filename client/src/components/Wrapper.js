import React from 'react';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
          <div>
            <nav>
              {this.props.isLogged && <h5>{this.props.user.email}</h5>}
              {!this.props.isLogged && <button onClick={this.props.logScreen}>Login</button>}
            </nav>
            {this.props.children}            
          </div>
        );
      }
}

export default Wrapper;