import React, {isValidElement, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Content,
} from 'native-base';
import {useQuery, gql} from '@apollo/client';
import {stackList, job} from '../declarations';
import SearchBar from '../components/SearchBar';
import JobContainer from '../components/jobContainer';
import {RouteProp} from '@react-navigation/native';

type HomeScreenRouteProp = RouteProp<stackList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
};

const homeScreen = (props: Props) => {
  const GET_JOBS = gql`
    query {
      jobs(input: {type: "", slug: ""}) {
        id
        title
        description
        tags {
          name
        }
        cities {
          name
          country {
            isoCode
          }
        }
        company {
          name
          logoUrl
        }
        remotes {
          name
        }
      }
    }
  `;

  const [searchTitle, setSearchTitle] = useState<String>('Default');
  const [jobs, setJobs] = useState<job[]>([]);

  const {error, loading, data} = useQuery(GET_JOBS);

  useEffect(() => {
    if (loading === false && data) {
      setJobs(data.jobs);
    }
  }, [loading, data]);

  if (loading && !data) {
    return <ActivityIndicator size="large" style={{flex: 1}} />;
  }

  const setSearch = (title: string) => {
    setSearchTitle(title);
    search(title);
  };

  const search = (filter: string) => {
    if (filter) {
      let newJobs = data.jobs.filter((j: job) => {
        return j.title.toLowerCase().includes(filter.toLowerCase());
      });

      setJobs(newJobs);
    }
  };

  const renderItem = (item: job) => {
    return <JobContainer job={item} />;
  };

  return (
    <Container>
      <SearchBar callback={setSearch} />

      <FlatList
        data={jobs}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default homeScreen;
