import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LocalResourceService {
  constructor(private http: HttpClient) {
  }

  public getJsonDocument(fileName: string): Promise<any> {
    return this.http.get(fileName).toPromise();
  }
}
