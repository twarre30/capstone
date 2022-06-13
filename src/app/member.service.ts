import { Injectable } from '@angular/core';
import { Member } from './models/Member';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';

type MembersResponse = {
  members: Member[];
}
type MemberResponse = {
  member: Member;
}

const membersEndPoint = `${environment.baseApiUrl}/api/members`;
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  members: Member[] = []

  constructor(private http: HttpClient) { }


  fetchMembers() {
    return this.http.get<MembersResponse>(membersEndPoint)
  }

  addMember(member: Member) {
    return this.http.post<MemberResponse>(membersEndPoint, member)
  }
  }

