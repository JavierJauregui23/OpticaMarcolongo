import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LenteSol } from './lentesdesol/LenteSol';


const URL= 'https://668f0ae9bf9912d4c9306f70.mockapi.io/lentes';

@Injectable({
  providedIn: 'root'
})
export class LentesDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<LenteSol[]>{
    return this.http.get<LenteSol[]>(URL)
          .pipe(
            tap((lentessol : LenteSol []) => lentessol.forEach(lentessol => lentessol.cantidad =0))
          );
    }
    
  }

