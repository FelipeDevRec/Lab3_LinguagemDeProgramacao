// word_frequency.js
// Objetivo: Ler arquivo de texto, contar frequência de palavras e exibir as 5 mais frequentes
// Linguagem de Scripting: JavaScript (Node.js)

import fs from 'fs';
import path from 'path';

/**
 * Lê um arquivo de texto
 * @param {string} filename - Nome do arquivo
 * @returns {string|null} Conteúdo do arquivo ou null se erro
 */
function readTextFile(filename) {
    try {
        return fs.readFileSync(filename, 'utf-8');
    } catch (error) {
        console.error(`Erro: Arquivo '${filename}' não encontrado.`);
        return null;
    }
}

/**
 * Processa o texto e conta frequência de palavras
 * @param {string} text - Texto a processar
 * @returns {Object} Objeto com frequência de palavras
 */
function processText(text) {
    // Converter para minúsculas e remover pontuação
    const words = text.toLowerCase().split(/\s+/);
    const cleanedWords = words.map(word => word.replace(/[.,!?;:"'']/g, ''));
    
    // Contar frequência de palavras
    const wordFreq = {};
    cleanedWords.forEach(word => {
        if (word.length > 0) {
            wordFreq[word] = (wordFreq[word] || 0) + 1;
        }
    });
    
    return wordFreq;
}

/**
 * Obtém as N palavras mais frequentes
 * @param {Object} wordFreq - Objeto com frequência de palavras
 * @param {number} topN - Quantidade de palavras a retornar
 * @returns {Array} Array com as palavras mais frequentes
 */
function getTopWords(wordFreq, topN = 5) {
    return Object.entries(wordFreq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, topN);
}

/**
 * Função principal
 */
function main() {
    const filename = 'sample_text.txt';
    
    // Ler arquivo
    const text = readTextFile(filename);
    if (text === null) return;
    
    // Processar texto
    const wordFreq = processText(text);
    
    // Obter top 5 palavras
    const topWords = getTopWords(wordFreq, 5);
    
    // Exibir resultados no console
    console.log('='.repeat(50));
    console.log('ANÁLISE DE FREQUÊNCIA DE PALAVRAS');
    console.log('='.repeat(50));
    console.log(`\nArquivo: ${filename}`);
    console.log(`Total de palavras únicas: ${Object.keys(wordFreq).length}`);
    console.log(`\nTop 5 Palavras Mais Frequentes:`);
    console.log('-'.repeat(50));
    
    const totalWords = Object.values(wordFreq).reduce((a, b) => a + b, 0);
    topWords.forEach(([word, count], idx) => {
        const percentage = ((count / totalWords) * 100).toFixed(2);
        console.log(`${idx + 1}. '${word}': ${count} vezes (${percentage}%)`);
    });
    
    // Salvar resultados em arquivo
    let output = 'ANÁLISE DE FREQUÊNCIA DE PALAVRAS\n';
    output += '='.repeat(50) + '\n\n';
    output += 'Top 5 Palavras Mais Frequentes:\n';
    output += '-'.repeat(50) + '\n';
    topWords.forEach(([word, count], idx) => {
        const percentage = ((count / totalWords) * 100).toFixed(2);
        output += `${idx + 1}. '${word}': ${count} vezes (${percentage}%)\n`;
    });
    
    fs.writeFileSync('output.txt', output, 'utf-8');
    
    console.log('\n✓ Resultados salvos em \'output.txt\'');
    console.log('='.repeat(50));
}

// Executar função principal
main();
