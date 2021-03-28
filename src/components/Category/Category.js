import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  Subheading,
  Button,
  Portal,
  Dialog,
  RadioButton,
  TouchableRipple,
} from 'react-native-paper';
import { CATEGORIES } from './constants';

export default Category = ({ title, onSubmit }) => {
  const [checked, setChecked] = useState(CATEGORIES.FOOD_AND_DRINK.value);
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    onSubmit && onSubmit(checked);

    setShow(false);
  };

  const Option = ({ category }) => {
    return (
      <TouchableRipple onPress={() => setChecked(category)}>
        <View style={styles.row}>
          <View pointerEvents="none">
            <RadioButton
              value="category"
              status={checked === category ? 'checked' : 'unchecked'}
            />
          </View>
          <Subheading style={styles.text}>{category}</Subheading>
        </View>
      </TouchableRipple>
    );
  };

  return (
    <View>
      <Button color="#0000FF" mode="contained" onPress={() => setShow(true)}>
        Choose category
      </Button>

      <Portal>
        <Dialog visible={show}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.ScrollArea style={{ maxHeight: 170, paddingHorizontal: 0 }}>
            <ScrollView>
              <View>
                {
                  Object.keys(CATEGORIES).map(key => <Option key={key} category={CATEGORIES[key].value} />)
                }
              </View>
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button onPress={() => { setShow(false) }}>Cancel</Button>
            <Button onPress={handleSubmit}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
    
  );
};

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