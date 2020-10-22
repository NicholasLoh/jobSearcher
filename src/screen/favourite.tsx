import React, {useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {Container} from 'native-base';
import {drawerList, job} from '../declarations';
import SearchBar from '../components/SearchBar';
import JobContainer from '../components/jobContainer';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {observer} from 'mobx-react';
import {useMst} from '../store';

type FavouriteScreenNavigationProp = DrawerNavigationProp<
  drawerList,
  'Favourite'
>;

type Props = {
  navigation: FavouriteScreenNavigationProp;
};

const favouriteScreen = observer((props: Props) => {
  const {fetchingData, jobs} = useMst();

  const [searchTitle, setSearchTitle] = useState<String>('');

  if (fetchingData) {
    return <ActivityIndicator style={{flex: 1}} />;
  }

  const setSearch = (title: string) => {
    setSearchTitle(title);
  };

  const renderItem = (item: job) => {
    if (item.title.toLowerCase().includes(searchTitle.toLowerCase())) {
      return <JobContainer job={item} />;
    }
  };

  return (
    <Container>
      <SearchBar callback={setSearch} navigation={props.navigation} />

      <FlatList
        data={jobs.slice().filter((j) => {
          return j.favourite;
        })}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
});

export default favouriteScreen;
