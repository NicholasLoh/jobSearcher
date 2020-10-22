import React, {useState} from 'react';
import {Header, Item, Input, Left, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {drawerList} from '../../declarations';

interface Props {
  callback: (search: string) => void;
  navigation: DrawerNavigationProp<drawerList>;
}

const SearchBar: React.FC<Props> = (props) => {
  const [text, setText] = useState<string>('');
  return (
    <Header searchBar rounded>
      <Left
        style={{
          flex: 0.1,
          marginLeft: 2,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Button transparent onPress={() => props.navigation.toggleDrawer()}>
          <Icon
            style={{
              color: 'white',
            }}
            name="bars"
            size={27}
          />
        </Button>
      </Left>

      <Item style={{flex: 0.9}}>
        <Icon style={{padding: 10}} name="search" size={25} />
        <Input
          value={text}
          placeholder="Search"
          onChangeText={(text) => {
            setText(text);
          }}
          returnKeyType="search"
          onEndEditing={() => {
            props.callback(text);
          }}
        />
      </Item>
    </Header>
  );
};

export default SearchBar;
