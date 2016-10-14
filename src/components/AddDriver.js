import React from 'react';

class AddDriver extends React.Component {
  addDriver(e) {
    e.preventDefault();
    console.log('Driver Info Adding ...');
    const driver = {
      name: this.name.value,
      contact: this.contact.value,
      address: this.address.value
    };

    this.props.addDriver(driver);
    this.driverForm.reset();
  }

  render() {
    return(
      <form ref={(input) => this.driverForm = input} onSubmit={(e) => this.addDriver(e)}>
        <h3 className="panel-heading">Add Driver</h3>
        <hr />
        <div className="panel-body">
          <div className="form-group">
            <label>Name</label>
            <input ref={(input) => this.name = input} type="text" className="form-control" placeholder="Enter Name" required/>
          </div>

          <div className="form-group">
            <label>Contact</label>
            <input ref={(input) => this.contact = input} type="number" className="form-control" placeholder="Enter Contact" required/>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input ref={(input) => this.address = input} type="text" className="form-control" placeholder="Enter Address" required/>
          </div>

          <button type="submit" className="btn btn-primary">Add Driver</button>
        </div>
      </form>
    );
  }
}

export default AddDriver;
