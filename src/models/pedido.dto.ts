import { RefDTO } from "./ref.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";
import { DescontoDTO } from "./desconto.dto";

export interface PedidoDTO {
    cliente : RefDTO;
    enderecoDeEntrega: RefDTO;
    pagamento : PagamentoDTO;
    itens : ItemPedidoDTO[];
    status: string;
    desconto: DescontoDTO;
}