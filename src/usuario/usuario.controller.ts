import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CriarUsuarioDTO } from './dto/CriaUsuario.dto.js';
import { usuarioEntity } from './usuario.entity.js';
import { UsuarioRepository } from './usuario.repository.js';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto.js';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto.js';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private UsuarioRepository: UsuarioRepository) {}
  @Post()
  async CriarUsuario(@Body() dadosRecebidos: CriarUsuarioDTO) {
    const UsuarioEntity = new usuarioEntity();
    UsuarioEntity.email = dadosRecebidos.email;
    UsuarioEntity.senha = dadosRecebidos.senha;
    UsuarioEntity.nome = dadosRecebidos.nome;
    UsuarioEntity.id = uuid();

    this.UsuarioRepository.salvar(UsuarioEntity);
    return { id: UsuarioEntity.id, message: 'Usuario criado com sucesso!!!' };
  }

  @Get()
  async ListarUsuarios() {
    const usuariosSalvos = await this.UsuarioRepository.listar();
    const usuarioLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
    );
    return usuarioLista;
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    await this.UsuarioRepository.atualiza(id, novosDados);

    return {
      usuario: 'usuario atualizado!!!',
      mensagem: 'usuario atualizado com sucesso!!!',
    };
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.UsuarioRepository.remove(id);

    return {
      usuario: usuarioRemovido,
      mensagem: 'usuario removido com sucesso',
    };
  }
}
