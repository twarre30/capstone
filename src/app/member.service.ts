import { Injectable } from '@angular/core';
import { Member } from './models/Member';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type MembersResponse = {
  members: Member[];
}

const membersEndpoint = '${environment.baseApiUrl}/api/members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  members: Member[] = [{
    parentName: "Mary",
    daughterName: "Suzy",
    address: "123 Main St",
    email: "mary@gmail.com",
    phoneNumber: "555-253-4512",
  }, {
    parentName: "Jane",
    daughterName: "Brenda",
    address: "567 Main St",
    email: "jane@gmail.com",
    phoneNumber: "555-451-2575",
  }]

  constructor(private http: HttpClient) { }


  fetchMembers() {
    return this.http.get<MembersResponse>(membersEndpoint)
  }
  }

