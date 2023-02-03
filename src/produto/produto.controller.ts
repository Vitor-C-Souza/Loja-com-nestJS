import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository.js';

@Controller('/produtos')
export class ProdutoController {
  constructor(private ProdutoRepository: ProdutoRepository) {}
  @Post()
  async CriarProduto(@Body() ProdutoRecebido) {
    this.ProdutoRepository.salvar(ProdutoRecebido);
    return ProdutoRecebido;
  }

  @Get()
  async ListarProdutos() {
    return this.ProdutoRepository.listar();
  }
}
