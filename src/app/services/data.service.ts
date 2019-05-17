import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MeCollegue } from '../models/me-collegue';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../models/participant';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<MeCollegue>();

  constructor(private _http:HttpClient) { }

  registerParticipant(participant:Participant) :Observable<any> {
    return this._http.post<Participant>(`${environment.backendUrl}/auth`, participant, {withCredentials : true});
  }

  returnAllParticipants() :Observable<MeCollegue[]> {
    return this._http.get<MeCollegue[]>(`${environment.backendUrl}/list`, {withCredentials : true});
  }
}

