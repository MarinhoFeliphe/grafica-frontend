import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { DescontoDTO } from "../../models/desconto.dto";

@Injectable()
export class DescontoService {

    constructor(public http: HttpClient) {}

    findByClient(estadoId: string) : Observable<DescontoDTO[]> {
       return this.http.get<DescontoDTO[]>(`${API_CONFIG.baseUrl}/`); 
    }

    findAll() : Observable<DescontoDTO[]> {
        return this.http.get<DescontoDTO[]>(`${API_CONFIG.baseUrl}/`); 
    }
    
}