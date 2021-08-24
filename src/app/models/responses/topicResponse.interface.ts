export interface reqRespTopic{
    code:    number;
    request: Request;
    success: boolean;
    errors:  string;
}

export interface Request {
    Items: Item[];
}

export interface Item {
    schedulingDate:  ID;
    id:              ID;
    name:            ID;
    responsibleName: ID;
    topicStatus:          ID;
}

export interface ID {
    S: string;
}