import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlayStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: '#00000066'
  },
  headerStyle: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#CDCDCD',
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingRight: 10,
    height: 50
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#CDCDCD',
    marginHorizontal: 10
  },
  textStyle: {
    fontSize: 16,
    marginHorizontal: 10
  }
});

export default styles;