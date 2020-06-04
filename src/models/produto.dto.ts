import { DescontoDTO } from "./desconto.dto";

export interface ProdutoDTO {
    id : string;
    nome : string;
    preco : number;
    imageUrl?: string;
    desconto: DescontoDTO;
}