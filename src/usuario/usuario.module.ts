import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller.js';
import { UsuarioRepository } from './usuario.repository.js';
import { emailEhUnicoValidator } from './validacao/email-eh-unico.validator.js';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, emailEhUnicoValidator],
})
export class UsuarioModule {}
