import React, { useState } from 'react';
import { Client } from '@/types/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileSpreadsheet, Search, Download } from 'lucide-react';
import { exportToExcel } from '@/utils/excelUtils';
import { useToast } from '@/hooks/use-toast';

interface ClientTableProps {
  clients: Client[];
}

const ClientTable: React.FC<ClientTableProps> = ({ clients }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const filteredClients = clients.filter(client =>
    client.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.cpf.includes(searchTerm) ||
    client.estadoCivil.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.genero.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    try {
      exportToExcel(filteredClients);
      toast({
        title: "Exportação concluída!",
        description: `${filteredClients.length} registros exportados para Excel.`,
      });
    } catch (error) {
      toast({
        title: "Erro na exportação",
        description: "Não foi possível exportar os dados. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const getEstadoCivilColor = (estadoCivil: string) => {
    const colors = {
      'Solteiro(a)': 'bg-blue-100 text-blue-800',
      'Casado(a)': 'bg-green-100 text-green-800',
      'Divorciado(a)': 'bg-orange-100 text-orange-800',
      'Viúvo(a)': 'bg-gray-100 text-gray-800',
      'União Estável': 'bg-purple-100 text-purple-800'
    };
    return colors[estadoCivil as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getGeneroColor = (genero: string) => {
    const colors = {
      'Masculino': 'bg-sky-100 text-sky-800',
      'Feminino': 'bg-pink-100 text-pink-800',
      'Outro': 'bg-indigo-100 text-indigo-800',
      'Prefiro não informar': 'bg-gray-100 text-gray-800'
    };
    return colors[genero as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Consulta de Clientes
          </CardTitle>
          <Button
            onClick={handleExport}
            className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
            disabled={filteredClients.length === 0}
          >
            <FileSpreadsheet className="w-4 h-4" />
            Exportar Excel
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar por nome, CPF, estado civil ou gênero..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600">
          Mostrando {filteredClients.length} de {clients.length} clientes
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-700">Nome</th>
                <th className="text-left p-4 font-semibold text-gray-700">Data de Nascimento</th>
                <th className="text-left p-4 font-semibold text-gray-700">CPF</th>
                <th className="text-left p-4 font-semibold text-gray-700">Estado Civil</th>
                <th className="text-left p-4 font-semibold text-gray-700">Gênero</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client, index) => (
                <tr
                  key={client.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="p-4 font-medium text-gray-900">{client.nome}</td>
                  <td className="p-4 text-gray-700">{client.dataNascimento}</td>
                  <td className="p-4 text-gray-700 font-mono">{client.cpf}</td>
                  <td className="p-4">
                    <Badge className={getEstadoCivilColor(client.estadoCivil)}>
                      {client.estadoCivil}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Badge className={getGeneroColor(client.genero)}>
                      {client.genero}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Download className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Nenhum cliente encontrado com os critérios de busca.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ClientTable;
