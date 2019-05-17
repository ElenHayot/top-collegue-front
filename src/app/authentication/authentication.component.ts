import { Component, OnInit } from '@angular/core';
import { Participant } from '../models/participant';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent implements OnInit {

  participant :Participant = new Participant('','','');
  errorMsg:string = "";

  constructor(private _srv: DataService) { }

  ngOnInit() {
  }

  registerNewParticipant() {
    this._srv.registerParticipant(this.participant).subscribe(
      returnvalue => console.log(returnvalue),
      err => this.errorMsg = err.error
    )
  }

}

