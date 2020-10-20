import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  logoContainer: {
    margin: 5,
    marginRight: 15,
    width: 50,
    height: 50,
  },
  middleContainer: {
    flex: 6,
    alignItems: 'flex-start',
  },
  locationContainer: {
    flex: 3,
    marginHorizontal: 3,
  },
  companyName: {
    fontSize: 14,
    opacity: 0.6,
    fontStyle: 'italic',
  },
  jobTitle: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    padding: 2,
  },
});

export default styles;
