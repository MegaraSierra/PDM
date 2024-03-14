import People from "./People";

type PeopleResult = { 
    count: number, 
    next: string, 
    previous: null|string, 
    results: People[],

};

export default PeopleResult;