/*Example of React Native Video*/
import React, { Component } from 'react';
//Import React
import { View, Button } from 'react-native';

import VideoModal from '../components/VideoModalComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  showModal = () => {
    this.setState({ showModal: true })
  }

  render() {
    return (
      // 
      <View>
        <Button title="Show Modal" onPress={this.showModal}></Button>
        <VideoModal showModal={this.state.showModal} closeModal={this.closeModal} />
      </View>
    );
  }

}
export default App;