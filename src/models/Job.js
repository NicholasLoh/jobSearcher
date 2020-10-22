import {types} from 'mobx-state-tree';

const Tags = types.model({
  name: types.string,
});

const Country = types.model({
  isoCode: types.string,
});

const Cities = types.model({
  name: types.string,
  country: Country,
});

const Company = types.model({
  name: types.string,
  logoUrl: types.maybeNull(types.string),
});

const Remotes = types.model({
  name: types.string,
});

export const Job = types
  .model({
    id: types.string,
    title: types.string,
    description: types.string,
    tags: types.array(Tags),
    cities: types.array(Cities),
    company: Company,
    remotes: types.array(Remotes),
    favourite: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    changeFavourite() {
      self.favourite = !self.favourite;
    },
  }));
