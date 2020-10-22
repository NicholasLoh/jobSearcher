export type drawerList = {
    Home: undefined;
    Favourite: undefined;
}

export type stackList = {
    Home: undefined;
    Favourite: undefined;
    Details: {job: job}
}

export type homeStackList = {
    Home: undefined;
    Details: {job: job}
}

export type favouriteStackList = {
    Favourite: undefined;
    Details: {job: job}
}

export interface job  {
    id:string;
    title: string;
    description: string;
    tags: {
        name: string
    }[];
    cities: {
        name: string;
        country: {
            isoCode: string
        }
    }[];
    company: {
        name: string;
        logoUrl: string;
    };
    remotes: {
        name: string;
    }[],
    favourite: boolean,
    changeFavourite: () => void
}