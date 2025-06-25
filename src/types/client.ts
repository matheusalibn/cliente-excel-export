
export interface Client {
  id: string;
  nome: string;
  dataNascimento: string;
  cpf: string;
  estadoCivil: 'Solteiro(a)' | 'Casado(a)' | 'Divorciado(a)' | 'Viúvo(a)' | 'União Estável';
  genero: 'Masculino' | 'Feminino' | 'Outro' | 'Prefiro não informar';
}
