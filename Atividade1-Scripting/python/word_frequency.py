# word_frequency.py
# Objetivo: Ler arquivo de texto, contar frequência de palavras e exibir as 5 mais frequentes
# Linguagem de Scripting: Python

from collections import Counter
import os

def read_text_file(filename):
    """Lê um arquivo de texto e retorna o conteúdo"""
    try:
        with open(filename, 'r', encoding='utf-8') as file:
            return file.read()
    except FileNotFoundError:
        print(f"Erro: Arquivo '{filename}' não encontrado.")
        return None

def process_text(text):
    """Processa o texto, conta frequência de palavras"""
    # Converter para minúsculas e remover pontuação
    words = text.lower().split()
    words = [word.strip('.,!?;:""\'') for word in words]
    
    # Contar frequência de palavras
    word_freq = Counter(words)
    return word_freq

def get_top_words(word_freq, top_n=5):
    """Retorna as N palavras mais frequentes"""
    return word_freq.most_common(top_n)

def main():
    filename = "sample_text.txt"
    
    # Ler arquivo
    text = read_text_file(filename)
    if text is None:
        return
    
    # Processar texto
    word_freq = process_text(text)
    
    # Obter top 5 palavras
    top_words = get_top_words(word_freq, 5)
    
    # Exibir resultados no console
    print("=" * 50)
    print("ANÁLISE DE FREQUÊNCIA DE PALAVRAS")
    print("=" * 50)
    print(f"\nArquivo: {filename}")
    print(f"Total de palavras únicas: {len(word_freq)}")
    print(f"\nTop 5 Palavras Mais Frequentes:")
    print("-" * 50)
    
    for idx, (word, count) in enumerate(top_words, 1):
        percentage = (count / sum(word_freq.values())) * 100
        print(f"{idx}. '{word}': {count} vezes ({percentage:.2f}%)")
    
    # Salvar resultados em arquivo
    with open("output.txt", 'w', encoding='utf-8') as output:
        output.write("ANÁLISE DE FREQUÊNCIA DE PALAVRAS\n")
        output.write("=" * 50 + "\n\n")
        output.write(f"Top 5 Palavras Mais Frequentes:\n")
        output.write("-" * 50 + "\n")
        for idx, (word, count) in enumerate(top_words, 1):
            percentage = (count / sum(word_freq.values())) * 100
            output.write(f"{idx}. '{word}': {count} vezes ({percentage:.2f}%)\n")
    
    print("\n✓ Resultados salvos em 'output.txt'")
    print("=" * 50)

if __name__ == "__main__":
    main()
