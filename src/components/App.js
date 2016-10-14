import React from 'react';
import _ from 'lodash';
import Header from './Header';
import AddDriver from './AddDriver';
import Driver from './Driver';

class App extends React.Component {
  constructor() {
    super();

    this.addDriver = this.addDriver.bind(this);

    this.state = {
      drivers: []
    }
  }

  componentWillMount() {
    const drivers = JSON.parse(localStorage.getItem('driveInfoSys'));
    if(drivers != null) {
      this.setState({ drivers });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const driver = nextState.drivers;
    localStorage.setItem('driveInfoSys', JSON.stringify(driver));
  }

  addDriver(driver) {
    // Add in new driver
    const drivers = _.concat(this.state.drivers, driver);
    // Set State
    this.setState({ drivers });
  }

  render() {
    return (
      <div>
        <Header title="DriveInfoSys" tagline="Information of all the Drivers" />
        <hr/>
        {/* Add Driver Info Portion */}
        <div className="col-sm-4 panel panel-default">
          <AddDriver addDriver={this.addDriver} />
        </div>

        {/* Driver List portion */}
        <div className="col-sm-7 col-sm-offset-1 well">
          <ul className="list-group">
            {
              _.map(this.state.drivers, (driver, i) => <Driver key={i}
              name={driver.name} address={driver.address} contact={driver.contact} />)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
