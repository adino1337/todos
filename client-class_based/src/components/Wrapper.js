import React from 'react';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
          <div>
            <nav className={this.props.isLogged && "right"}>
              {this.props.isLogged && <div className='logout'>
              <p>{this.props.user.email}</p><a onClick={this.props.logout}>logout</a></div>
              }
              {!this.props.isLogged && <h2>ToDo's</h2>}
            </nav>
            {this.props.children}            
          </div>
        );
      }
}

export default Wrapper;