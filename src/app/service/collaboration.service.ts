import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {

  private collaboratedDataSubject = new BehaviorSubject<any[]>([]);
  collaboratedData$ = this.collaboratedDataSubject.asObservable();

  constructor() { }

  addCollaboratedData(data: any) {
    const currentData = this.collaboratedDataSubject.getValue();
    this.collaboratedDataSubject.next([...currentData, data]);
  }
}
