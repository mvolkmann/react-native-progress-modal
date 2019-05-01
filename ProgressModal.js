import {bool, number, string} from 'prop-types';
import React from 'react';
import {Platform, ProgressBarAndroid, ProgressViewIOS} from 'react-native';
import MyModal from './MyModal';

function ProgressModal({inProgress, message, progress}) {
  const progressComponent = Platform.select({
    android: (
      <ProgressBarAndroid
        progress={progress}
        indeterminate={false}
        styleAttr="Horizontal"
      />
    ),
    ios: <ProgressViewIOS progress={progress} />
  });

  return (
    <MyModal
      borderBottomColor="transparent"
      title={message}
      visible={inProgress}
    >
      {progressComponent}
    </MyModal>
  );
}

ProgressModal.propTypes = {
  inProgress: bool.isRequired,
  message: string.isRequired,
  progress: number.isRequired
};

export default ProgressModal;
