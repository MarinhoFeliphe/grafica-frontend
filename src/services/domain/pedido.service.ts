import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { PedidoDTO } from "../../models/pedido.dto";
import { Observable } from "rxjs/Rx";
import { StatusPedido } from "../../models/enums/status-perfil";

@Injectable()
export class PedidoService {

    constructor(public http: HttpClient) {}
    
    insert(pedido: PedidoDTO) {

        pedido.status = StatusPedido.PENDENTE;

        return this.http.post(
            `${API_CONFIG.baseUrl}/pedidos`,
            pedido,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    findAll() : Observable<PedidoDTO[]> {
        return this.http.get<PedidoDTO[]>(`${API_CONFIG.baseUrl}/pedidos`); 
    }

    changeStatus(status: string, id: string) {
        return this.http.patch(`${API_CONFIG.baseUrl}/pedidos/${id}`, { "status": status })
    }

    findByClient(clientId: string) : Observable<PedidoDTO[]> {
        return this.http.get<PedidoDTO[]>(`${API_CONFIG.baseUrl}/clientes/${clientId}/pedidos`);
    }
}