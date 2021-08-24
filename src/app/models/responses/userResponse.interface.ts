export interface reqRespUser {
    code:    number;
    request: Request;
    success: boolean;
    errors:  string;
}

export interface Request {
    typeParam: string;
    params:    string[];
}
