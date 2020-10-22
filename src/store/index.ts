import {Job} from '../models/Job';
import {types, flow, Instance, onSnapshot} from 'mobx-state-tree';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { useContext, createContext } from "react";

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache(),
});

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

const RootModel = types
  .model({
    jobs: types.optional(types.array(Job), []),
    fetchingData: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    getJobs: flow(function* () {
      self.fetchingData = true;

      let jobs
      let local = yield AsyncStorage.getItem('rootState');

      if (local) {
        const localState = JSON.parse(local);
          if (RootModel.is(localState)) {
            jobs = localState.jobs
          }    
      } else{
        const data = yield client.query({query: GET_JOBS});

        jobs = data.data.jobs;
      }
      
      self.jobs = jobs;
      self.fetchingData = false;
    })
  }));

let initialState = RootModel.create({
  jobs: [],
  fetchingData: false,
});

const init = () =>{
 
  initialState.getJobs();
}

(async () => { await init()})();

export const RootStore = initialState;

onSnapshot(RootStore, (snapshot) => {
  console.log('Snapshot: ', snapshot);
  AsyncStorage.setItem('rootState', JSON.stringify(snapshot));
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}