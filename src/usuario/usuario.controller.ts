import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository.js';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private UsuarioRepository: UsuarioRepository) {}
  @Post()
  async CriarUsuario(@Body() dadosRecebidos) {
    this.UsuarioRepository.salvar(dadosRecebidos);
    return dadosRecebidos;
  }

  @Get()
  async ListarUsuarios() {
    return this.UsuarioRepository.listar();
  }
}
