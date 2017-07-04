import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log("kuku, url's changed");
      // grab the text form the box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
      // url changed, transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
      {/* <form className="store-selector" onSubmit={this.goToStore.bind(this)}> */}
      {/* a few option to bind .. either constructor or .. */}
        <h2>Please enter the store</h2>
        <input type="text" required placeholder="Store name"
          defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
