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

function ProgressModal2({inProgress, message, progress}) {
  return (
    <Modal
      animationType="slide"
      onRequestClose={noOp}
      transparent
      visible={inProgress}
    >
      <View style={styles.modalOuter}>
        <View style={styles.modalInner}>
          <View>
            <Text style={styles.message}>{message}</Text>
          </View>
          <View style={styles.body}>{getProgressComponent(progress)}</View>
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

const BACKGROUND_COLOR = 'white';
const BG_OPACITY = 0.4;
const SPACING = 10;
const TITLE_COLOR = 'black';

const styles = StyleSheet.create({
  body: {
    margin: SPACING
  },
  button: {
    borderColor: 'black',
    color: 'black'
  },
  buttonRow: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: SPACING
  },
  modalInner: {
    backgroundColor: BACKGROUND_COLOR,
    borderColor: 'gray',
    borderWidth: 5,
    width: '70%'
  },
  modalOuter: {
    backgroundColor: `rgba(80, 80, 80, ${BG_OPACITY})`,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: TITLE_COLOR,
    fontSize: 24,
    fontWeight: 'bold'
  },
  titleRow: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING
  }
});
export default ProgressModal2;
