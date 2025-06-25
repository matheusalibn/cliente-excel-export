
import React from 'react';
import ClientTable from '@/components/ClientTable';
import { Client } from '@/types/client';

// Dados de exemplo para demonstração
const sampleClients: Client[] = [
  {
    id: '1',
    nome: 'Ana Clara Silva',
    dataNascimento: '15/03/1990',
    cpf: '123.456.789-01',
    estadoCivil: 'Casado(a)',
    genero: 'Feminino'
  },
  {
    id: '2',
    nome: 'João Pedro Santos',
    dataNascimento: '22/07/1985',
    cpf: '987.654.321-02',
    estadoCivil: 'Solteiro(a)',
    genero: 'Masculino'
  },
  {
    id: '3',
    nome: 'Maria Fernanda Oliveira',
    dataNascimento: '08/12/1992',
    cpf: '456.789.123-03',
    estadoCivil: 'Divorciado(a)',
    genero: 'Feminino'
  },
  {
    id: '4',
    nome: 'Carlos Eduardo Lima',
    dataNascimento: '30/01/1988',
    cpf: '789.123.456-04',
    estadoCivil: 'União Estável',
    genero: 'Masculino'
  },
  {
    id: '5',
    nome: 'Beatriz Costa',
    dataNascimento: '17/09/1995',
    cpf: '321.654.987-05',
    estadoCivil: 'Solteiro(a)',
    genero: 'Feminino'
  },
  {
    id: '6',
    nome: 'Rafael Mendes',
    dataNascimento: '04/06/1982',
    cpf: '654.987.321-06',
    estadoCivil: 'Casado(a)',
    genero: 'Masculino'
  },
  {
    id: '7',
    nome: 'Isabella Rodrigues',
    dataNascimento: '25/11/1987',
    cpf: '147.258.369-07',
    estadoCivil: 'Viúvo(a)',
    genero: 'Feminino'
  },
  {
    id: '8',
    nome: 'Lucas Ferreira',
    dataNascimento: '12/04/1993',
    cpf: '258.369.147-08',
    estadoCivil: 'Solteiro(a)',
    genero: 'Masculino'
  },
  {
    id: '9',
    nome: 'Camila Alves',
    dataNascimento: '29/08/1991',
    cpf: '369.147.258-09',
    estadoCivil: 'Casado(a)',
    genero: 'Feminino'
  },
  {
    id: '10',
    nome: 'Gabriel Souza',
    dataNascimento: '14/02/1989',
    cpf: '741.852.963-10',
    estadoCivil: 'União Estável',
    genero: 'Masculino'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Sistema de Consulta de Clientes
          </h1>
          <p className="text-lg text-gray-600">
            Visualize, pesquise e exporte dados dos clientes de forma fácil e organizada
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <ClientTable clients={sampleClients} />
        </div>
      </div>
    </div>
  );
};

export default Index;
