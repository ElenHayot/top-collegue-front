import { MeCollegue } from './me-collegue';

export class Vote {

    constructor(
        public authorEmail:string,
        public participantEmail:string,
        public voteValue:string[],
        public dateVote?:Date,
        public participantCol?:MeCollegue,
        public authorCol?:MeCollegue
    ) {}

}
