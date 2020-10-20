export type stackList = {
    Home: undefined;
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
    }[]
}