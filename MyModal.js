import {bool, func, node, object, string} from 'prop-types';
import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import MyButton from './MyButton';

const noOp = () => {};

const MyModal = ({
  borderBottomColor,
  children,
  onClose,
  style,
  title,
  visible
}) => (
  <Modal
    animationType="slide"
    onRequestClose={onClose || noOp}
    transparent
    visible={visible}
  >
    <View style={styles.modalOuter}>
      <View style={[styles.modalInner, style]}>
        <View style={[{borderBottomColor}, styles.titleRow]}>
          <Text style={styles.title}>{title}</Text>
          {onClose && (
            <Text onPress={onClose} style={styles.title}>
              &#x2716;
            </Text>
          )}
        </View>
        <View style={styles.body}>{children}</View>
        {onClose && (
          <View style={styles.buttonRow}>
            <MyButton
              buttonStyle={styles.button}
              onPress={onClose}
              text="Close"
              textStyle={styles.button}
            />
          </View>
        )}
      </View>
    </View>
  </Modal>
);

MyModal.propTypes = {
  borderBottomColor: string,
  children: node.isRequired,
  onClose: func,
  style: object,
  title: string.isRequired,
  visible: bool.isRequired
};

MyModal.defaultProps = {
  borderBottomColor: 'black',
  style: {}
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

export default MyModal;
