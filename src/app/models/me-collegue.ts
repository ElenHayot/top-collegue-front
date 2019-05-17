export class MeCollegue {

    constructor (
        public matricule:string,
        public name:string,
        public firstname:string,
        public role:string[],
        public email:string,
        public photoUrl:string,
        public score?:number
    ) {}

}
