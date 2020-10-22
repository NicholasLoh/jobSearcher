import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  jumbotron: {
    minHeight: height * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: '#f5f5f5',
  },
  skills: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3,
  },
  badge: {
    margin: 2,
    backgroundColor: '#505050',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  company: {
    margin: 3,
    fontSize: 18,
    opacity: 0.8,
  },
  headContainer: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markdown: {
    margin: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
