import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyButton from './MyButton';
import ProgressModal2 from './ProgressModal2';

export default class App extends React.Component {
  state = {inProgress: false, progress: 0};

  startOperation = () => {
    this.setState({inProgress: true});
    const token = setInterval(() => {
      this.setState(({progress}) => {
        progress += 0.1;
        const inProgress = progress < 1;
        if (!inProgress) {
          clearInterval(token);
          progress = 0;
        }
        return {inProgress, progress};
      });
    }, 200);
  };

  render() {
    const {inProgress, progress} = this.state;
    return (
      <View style={styles.container}>
        <Text>Line #1</Text>
        <Text>Line #2</Text>
        <Text>Line #3</Text>
        <MyButton onPress={this.startOperation} text="Start Operation" />
        <Text>Line #5</Text>
        <Text>Line #6</Text>
        <Text>Line #7</Text>

        <ProgressModal2
          inProgress={inProgress}
          message="Wait For It!"
          messageStyle={{color: 'red'}}
          progress={progress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
