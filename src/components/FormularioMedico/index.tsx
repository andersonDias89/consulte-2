// src/components/FormularioMedico/index.tsx

import React, { useState } from 'react';
import api from '../../services/api';

function FormularioMedico() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [especializacao, setEspecializacao] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await api.post('/medicos', {
        nomeCompleto,
        email,
        cpf,
        especializacao,
      });
      console.log(response.data);
      // Aqui você pode lidar com a resposta positiva, como limpar o formulário ou mostrar uma mensagem de sucesso.
    } catch (error) {
      console.error(error);
      // E aqui você pode lidar com erros na requisição, como mostrar uma mensagem de erro.
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
    type="text"
    value={nomeCompleto}
    onChange={(e) => setNomeCompleto(e.target.value)}
    placeholder="Nome Completo"
    required
  />
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
    required
  />
  <input
    type="text"
    value={cpf}
    onChange={(e) => setCpf(e.target.value)}
    placeholder="CPF"
    required
  />
  <input
    type="text"
    value={especializacao}
    onChange={(e) => setEspecializacao(e.target.value)}
    placeholder="Especialização"
    required
  />
      {/* Repita o padrão acima para email, cpf e especializacao, com seus respectivos estados e handlers */}
      <button type="submit">Cadastrar Médico</button>
    </form>
  );
}

export default FormularioMedico;
