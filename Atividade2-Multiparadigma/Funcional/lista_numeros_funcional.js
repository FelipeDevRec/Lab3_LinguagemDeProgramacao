// lista_numeros_funcional.js
// Abordagem Funcional
// Objetivo: Gerenciar lista de números usando map, filter e reduce

const numeros = [2, 5, 8, 11, 14, 3, 6, 9, 12, 1];

/**
 * Usa filter para obter números pares
 * @param {number[]} nums - Lista de números
 * @returns {number[]} Números pares
 */
const obterPares = (nums) => nums.filter(x => x % 2 === 0);

/**
 * Usa reduce para calcular a média
 * @param {number[]} nums - Lista de números
 * @returns {number} Média dos números
 */
const calcularMedia = (nums) => {
  if (nums.length === 0) return 0;
  return nums.reduce((acc, x) => acc + x, 0) / nums.length;
};

/**
 * Exibe os resultados de forma formatada
 * @param {number[]} nums - Lista de números
 */
const exibirResultados = (nums) => {
  const pares = obterPares(nums);
  const media = calcularMedia(nums);
  
  console.log('='.repeat(50));
  console.log('ABORDAGEM FUNCIONAL - LISTA DE NÚMEROS');
  console.log('='.repeat(50));
  console.log(`\nLista original: [${nums.join(', ')}]`);
  console.log(`Números pares: [${pares.join(', ')}]`);
  console.log(`Média: ${media.toFixed(2)}`);
  console.log('='.repeat(50));
};

// Executar função principal
exibirResultados(numeros);
