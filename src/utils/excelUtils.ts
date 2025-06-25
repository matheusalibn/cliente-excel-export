
import * as XLSX from 'xlsx';
import { Client } from '@/types/client';

export const exportToExcel = (clients: Client[], filename: string = 'clientes') => {
  // Preparar os dados para exportação
  const exportData = clients.map(client => ({
    'Nome': client.nome,
    'Data de Nascimento': client.dataNascimento,
    'CPF': client.cpf,
    'Estado Civil': client.estadoCivil,
    'Gênero': client.genero
  }));

  // Criar workbook e worksheet
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(exportData);

  // Configurar largura das colunas
  const colWidths = [
    { wch: 25 }, // Nome
    { wch: 18 }, // Data de Nascimento
    { wch: 15 }, // CPF
    { wch: 15 }, // Estado Civil
    { wch: 20 }  // Gênero
  ];
  ws['!cols'] = colWidths;

  // Adicionar worksheet ao workbook
  XLSX.utils.book_append_sheet(wb, ws, 'Clientes');

  // Salvar arquivo
  const timestamp = new Date().toISOString().split('T')[0];
  XLSX.writeFile(wb, `${filename}_${timestamp}.xlsx`);
};
