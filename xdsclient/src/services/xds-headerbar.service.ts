import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderService {
  public title = new BehaviorSubject('Title');
  public isLogged = new BehaviorSubject(false);

  constructor() { }

  setLoggingState(isLogged:boolean) {
    this.isLogged.next(isLogged);
  }
}