import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WrapHttpService {
  constructor(private http: HttpClient) {}

  private static createHeaderOptions(headers: HttpHeaders | undefined): HttpHeaders {
    let clonedHeaders = headers || new HttpHeaders();

    return clonedHeaders;
  }

  public static objToQuery(obj: object | undefined): string {
    if (!obj || !Object.keys(obj).length) {
      return '';
    }
  
    const params = new HttpParams({ fromObject: obj as { [param: string]: string | number | boolean } });
    return '?' + params.toString();
  }

  get(url: string, headers?: HttpHeaders): Observable<any> {
    const httpOptions = { headers: WrapHttpService.createHeaderOptions(headers) };
    return this.http.get(url, httpOptions);
  }

  post(url: string, data: object, headers?: HttpHeaders): Observable<any> {
    const httpOptions = { headers: WrapHttpService.createHeaderOptions(headers) };
    return this.http.post(url, data, httpOptions);
  }

  put(url: string, data: object, headers?: HttpHeaders): Observable<any> {
    const httpOptions = { headers: WrapHttpService.createHeaderOptions(headers) };
    return this.http.put(url, data, httpOptions);
  }

  patch(url: string, data: object, headers?: HttpHeaders): Observable<any> {
    const httpOptions = { headers: WrapHttpService.createHeaderOptions(headers) };
    return this.http.patch(url, data, httpOptions);
  }

  delete(url: string, headers?: HttpHeaders): Observable<any> {
    const httpOptions = { headers: WrapHttpService.createHeaderOptions(headers) };
    return this.http.delete(url, httpOptions);
  }
}
