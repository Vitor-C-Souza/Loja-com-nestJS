import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriarUsuarioDTO } from './dto/CriaUsuario.dto.js';
import { UsuarioRepository } from './usuario.repository.js';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private UsuarioRepository: UsuarioRepository) {}
  @Post()
  async CriarUsuario(@Body() dadosRecebidos: CriarUsuarioDTO) {
    this.UsuarioRepository.salvar(dadosRecebidos);
    return dadosRecebidos;
  }

  @Get()
  async ListarUsuarios() {
    return this.UsuarioRepository.listar();
  }
}
