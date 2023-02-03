import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module.js';

@Module({
  imports: [UsuarioModule],
})
export class AppModule {}
