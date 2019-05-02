import {bool, number, string} from 'prop-types';
import React from 'react';
import {
  Modal,
  Platform,
  ProgressBarAndroid,
  ProgressViewIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyModal from './MyModal';

const getProgressComponent = progress =>
  Platform.select({
    android: (
      <ProgressBarAndroid
        progress={progress}
        indeterminate={false}
        styleAttr="Horizontal"
      />
    ),
    ios: <ProgressViewIOS progress={progress} />
  });

const noOp = () => {};

function ProgressModal2({inProgress, message, messageStyle, progress}) {
  return (
    <Modal
      animationType="slide"
      onRequestClose={noOp}
      transparent
      visible={inProgress}
    >
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <View style={styles.padded}>
            <Text style={[styles.message, messageStyle]}>{message}</Text>
          </View>
          <View style={styles.padded}>{getProgressComponent(progress)}</View>
        </View>
      </View>
    </Modal>
  );
}

ProgressModal2.propTypes = {
  inProgress: bool.isRequired,
  message: string.isRequired,
  progress: number.isRequired
};

const BG_OPACITY = 0.4;

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: `rgba(80, 80, 80, ${BG_OPACITY})`,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 3,
    width: '80%'
  },
  message: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  padded: {
    padding: 10
  }
});
export default ProgressModal2;
