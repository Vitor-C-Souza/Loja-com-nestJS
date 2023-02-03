import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller.js';
import { UsuarioRepository } from './usuario.repository.js';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
})
export class UsuarioModule {}
