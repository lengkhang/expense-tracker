import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Subheading,
  Button,
  Portal,
  Dialog,
  RadioButton,
  TouchableRipple
} from 'react-native-paper';
import { CATEGORIES } from './constants';
import Styles from './styles';

const Category = ({ title, onSubmit, disabled }) => {
  const firstCategoryKey = Object.keys(CATEGORIES)[0];

  const [checked, setChecked] = useState(firstCategoryKey);
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    onSubmit && onSubmit(checked);

    setShow(false);
  };

  const Option = ({ category: key }) => {
    const { display } = CATEGORIES[key];

    return (
      <TouchableRipple onPress={() => setChecked(key)}>
        <View style={Styles.row}>
          <View pointerEvents="none">
            <RadioButton
              value="category"
              status={checked === key ? 'checked' : 'unchecked'}
            />
          </View>
          <Subheading style={Styles.text}>{display}</Subheading>
        </View>
      </TouchableRipple>
    );
  };

  return (
    <View>
      <Button color="#0000FF" mode="contained" disabled={disabled} onPress={() => setShow(true)}>
        {title}
      </Button>

      <Portal>
        <Dialog visible={show}>
          <Dialog.Title>Choose category</Dialog.Title>
          <Dialog.ScrollArea style={{ maxHeight: 170, paddingHorizontal: 0 }}>
            <ScrollView>
              <View>
                {
                  Object.keys(CATEGORIES).map(key => <Option key={key} category={key} />)
                }
              </View>
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button onPress={() => {
              setShow(false);
            }}>Cancel</Button>
            <Button onPress={handleSubmit}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Category;