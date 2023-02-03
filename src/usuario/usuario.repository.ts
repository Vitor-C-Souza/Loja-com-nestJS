import { Injectable } from '@nestjs/common';
import { usuarioEntity } from './usuario.entity.js';

@Injectable()
export class UsuarioRepository {
  private usuarios: usuarioEntity[] = [];

  async salvar(usuario: usuarioEntity) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }

  private BuscaPorID(id: string) {
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );
    if (!possivelUsuario) {
      throw new Error('Usuario não existe');
    }

    return possivelUsuario;
  }

  async atualiza(id: string, dadosDeAtualização: Partial<usuarioEntity>) {
    const usuario = this.BuscaPorID(id);
    Object.entries(dadosDeAtualização).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      usuario[chave] = valor;
    });

    return usuario;
  }
  async remove(id: string) {
    const usuario = this.BuscaPorID(id);
    this.usuarios = this.usuarios.filter(
      (usuarioSalvo) => usuarioSalvo.id !== id,
    );

    return usuario;
  }
}
