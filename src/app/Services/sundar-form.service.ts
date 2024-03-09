import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, of } from 'rxjs';
import { WrapHttpService } from './wrap-http.service';


@Injectable({
  providedIn: 'root'
})
export class RoomService {
    private apiUrl = 'http://192.168.100.18:3000/sundar';
      constructor(private http: WrapHttpService) { }
  
  getAll(conditions?: object) {
    return lastValueFrom(this.http.get(this.apiUrl));
  }
  get(id: string) {
    return lastValueFrom(this.http.get(this.apiUrl + "/" + id));
  }

  add(data: object): Promise<any> {
    return lastValueFrom(this.http.post(`${this.apiUrl}`, data));
  }

  update(id: string, data: object) {
    return lastValueFrom(this.http.patch(`${this.apiUrl}/${id}`, data));
  }

  delete(id: string) {
    return lastValueFrom(this.http.delete(`${this.apiUrl}/${id}`));
  }
}
