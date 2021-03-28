import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  Subheading,
  Button,
  Portal,
  Dialog,
  RadioButton,
  TouchableRipple,
} from 'react-native-paper';

const DialogWithRadioBtns = ({ visible, close, onSubmit }) => {
  const [checked, setChecked] = React.useState('normal');

  const handleSubmit = () => {
    onSubmit && onSubmit(checked);

    close();
  };

  return (
    <Portal>
      <Dialog onDismiss={close} visible={visible}>
        <Dialog.Title>Choose an option</Dialog.Title>
        <Dialog.ScrollArea style={{ maxHeight: 170, paddingHorizontal: 0 }}>
          <ScrollView>
            <View>
              <TouchableRipple onPress={() => setChecked('normal')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="normal"
                      status={checked === 'normal' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <Subheading style={styles.text}>Option 1</Subheading>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('second')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="second"
                      status={checked === 'second' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <Subheading style={styles.text}>Option 2</Subheading>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('third')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="third"
                      status={checked === 'third' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <Subheading style={styles.text}>Option 3</Subheading>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('fourth')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="fourth"
                      status={checked === 'fourth' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <Subheading style={styles.text}>Option 4</Subheading>
                </View>
              </TouchableRipple>
            </View>
          </ScrollView>
        </Dialog.ScrollArea>
        <Dialog.Actions>
          <Button onPress={close}>Cancel</Button>
          <Button onPress={handleSubmit}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogWithRadioBtns;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    paddingLeft: 8,
  },
});