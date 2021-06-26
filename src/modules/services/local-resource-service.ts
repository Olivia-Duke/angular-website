import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LocalResourceService {
  constructor(private http: HttpClient) {
  }

  public getJsonDocument(fileName: string): Promise<any> {
    this.log('getJsonDocument');
    return this.http.get(fileName).toPromise();
  }
  private log = (message: string): void => {
    console.log(`[LocalResourceService] ${message}`);
  }
}
