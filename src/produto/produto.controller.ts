import { Body, Controller, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository.js';

@Controller('/produto')
export class ProdutoController {
  constructor(private ProdutoRepository: ProdutoRepository) {}
  @Post()
  async CriarProduto(@Body() ProdutoRecebido) {
    this.ProdutoRepository.salvar(ProdutoRecebido);
    return ProdutoRecebido;
  }

  async ListarProdutos() {
    return this.ProdutoRepository.listar();
  }
}
