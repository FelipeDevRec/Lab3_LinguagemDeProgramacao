// lista_numeros_oop.js
// Abordagem Orientada a Objetos (OOP)
// Objetivo: Gerenciar lista de números, obter pares e calcular média

class ListaNumeros {
  /**
   * Inicializa a classe com uma lista de números
   * @param {number[]} numeros - Lista de números inteiros
   */
  constructor(numeros) {
    this.numeros = numeros;
  }

  /**
   * Retorna uma lista dos números pares
   * @returns {number[]} Números pares da lista
   */
  obterPares() {
    return this.numeros.filter(numero => numero % 2 === 0);
  }

  /**
   * Calcula a média dos números na lista
   * @returns {number} Média dos números
   */
  calcularMedia() {
    if (this.numeros.length === 0) return 0;
    const soma = this.numeros.reduce((acc, num) => acc + num, 0);
    return soma / this.numeros.length;
  }

  /**
   * Exibe os resultados de forma formatada
   */
  exibirResultados() {
    console.log('='.repeat(50));
    console.log('ABORDAGEM OOP - LISTA DE NÚMEROS');
    console.log('='.repeat(50));
    console.log(`\nLista original: [${this.numeros.join(', ')}]`);
    console.log(`Números pares: [${this.obterPares().join(', ')}]`);
    console.log(`Média: ${this.calcularMedia().toFixed(2)}`);
    console.log('='.repeat(50));
  }
}

// Programa principal
function main() {
  // Lista predefinida de números
  const numeros = [2, 5, 8, 11, 14, 3, 6, 9, 12, 1];
  
  // Criar instância da classe
  const lista = new ListaNumeros(numeros);
  
  // Exibir resultados
  lista.exibirResultados();
}

// Executar programa principal
main();