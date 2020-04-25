/*Example of React Native Video*/
import React, {Component} from 'react';
//Import React
import {View, Button} from 'react-native';

import VideoModal from '../../components/VideoModalComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  closeModal = () => {
    this.setState({showModal: false});
  };

  showModal = () => {
    this.setState({showModal: true});
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Show Modal" onPress={this.showModal} />
        <VideoModal
          showModal={this.state.showModal}
          closeModal={this.closeModal}
        />
        <Text style={{textAlign: 'center'}}>
          Open drawer from right side by sliding toward left side from right.
        </Text>
      </View>
    );
  }
}
export default App;
