import React, {useState} from 'react';
import {Container, Header, Item, Input, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {
  callback: (search: string) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const [text, setText] = useState<string>('');

  return (
    <Header searchBar rounded>
      <Item>
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
