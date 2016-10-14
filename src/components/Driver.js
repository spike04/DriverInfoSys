import React from 'react';

class Driver extends React.Component {
  render() {
    const { name, address, contact } = this.props;
    return (
      <li className="list-group-item panel panel-default">
        <div className="media">
          <div className="media-left media-middle">
            <img className="media-object" src="img/driver.png" width="50" height="50" alt={name}/>
          </div>
          <div className="media-body">
              <h4>{name}</h4>
              <p>{contact} - {address}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Driver;
