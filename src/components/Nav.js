import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
          <nav>
            {this.props.isLogged && <h5>{this.props.name}</h5>}
            {!this.props.isLogged && <button>Login</button>}
          </nav>
        );
      }
}

export default Nav;