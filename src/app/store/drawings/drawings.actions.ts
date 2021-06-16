export class GetPaths {
    static readonly type = '[ DRAWINGS ] Get Drawing';
}



export class UpdatePaths {
    static readonly type = '[ DRAWINGS ] Update Drawing';
    constructor(public payload: any[]) {}
}