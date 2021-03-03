import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  allBikes : any = [];

  constructor(private http: HttpClient) { }

  getBikes(){
    return this.allBikes = bikes.slice(0);
  }

  getBike(id : number){
    return this.allBikes = bikes.slice(0).find(bike => bike.id = id);
  }

  deleteBike(id: number){
    return this.http.get('/server/api/v1/bikes/borrar/' + id)
  }

  addBike(bike : any){
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }
}


const bikes =  [
  { "id": 1, "name": "Fabiola Chazarreta", "email": "fabi.chaza@live.com.ar", "phone":"232323", "model":"nimbus200"},
  { "id": 2, "name": "Agustin De Navarrete", "email": "aguch@gmail.com", "phone":"434334", "model":"xtrema"},
  { "id": 3, "name": "Eugenia Baiona", "email": "eugenia@gmail.com", "phone":"2343", "model":"globoO"},
  { "id": 4, "name": "Melany Ivancovich", "email": "mel@gmail.com", "phone":"3434", "model":"globosss"},
  { "id": 5, "name": "Honey Money", "email": "honey@lemon.com", "phone":"2323", "model":"sdfs"} ] 