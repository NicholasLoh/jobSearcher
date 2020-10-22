import React from 'react';
import {ScrollView, View} from 'react-native';
import {Container, Badge, Text, Content, Footer, Button} from 'native-base';
import Markdown from 'react-native-markdown-renderer';
import {RouteProp} from '@react-navigation/native';
import {stackList, job} from '../../declarations';
import styles from './style';
import {observer} from 'mobx-react';

type DetailsScreenRouteProp = RouteProp<stackList, 'Details'>;

type Props = {
  route: DetailsScreenRouteProp;
};

const detailsScreen = observer((props: Props) => {
  const {job} = props.route.params;

  return (
    <Container>
      <Content contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.jumbotron}>
          <Text style={styles.header}>{job.title}</Text>
          <Text style={styles.company}>{job.company.name}</Text>
          <View style={styles.skills}>
            {job.tags.map((obj, i) => {
              return (
                <Badge key={i} style={styles.badge}>
                  <Text style={{color: 'white'}}>{obj.name}</Text>
                </Badge>
              );
            })}
          </View>
        </View>

        <View style={styles.markdown}>
          <Markdown>{job.description}</Markdown>
        </View>
      </Content>

      <Footer style={styles.footer}>
        <Button
          style={{alignSelf: 'auto'}}
          onPress={() => {
            job.changeFavourite();
          }}>
          <Text>
            {job.favourite ? 'Remove from Favourite' : 'Add to Favourite'}
          </Text>
        </Button>
      </Footer>
    </Container>
  );
});

export default detailsScreen;
