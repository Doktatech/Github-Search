export class Repository {
    constructor( public name:string,
        public id: number,
        public fork: boolean,
        public description: string,
        public created_at:Date){}
 
}
