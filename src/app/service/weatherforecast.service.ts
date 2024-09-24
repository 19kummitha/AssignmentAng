import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../Models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {
  baseApiUrl:string='http://localhost:5001';

  constructor(private http:HttpClient) { }
  getWeatherForecast():Observable<WeatherForecast[]>{
    return this.http.get<WeatherForecast[]>(`${this.baseApiUrl}/WeatherForecast`);
  }
}
