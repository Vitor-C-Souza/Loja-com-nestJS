import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module.js';
import { UsuarioModule } from './usuario/usuario.module.js';

@Module({
  imports: [UsuarioModule, ProdutoModule],
})
export class AppModule {}
