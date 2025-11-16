# Atividade 1 - Workshop de Linguagem de Scripting

## Descrição

Nesta atividade, exploramos linguagens de scripting (Python e JavaScript) para resolver problemas de processamento de texto com menos código e maior eficiência comparado à OOP.

## Problema: Análise de Frequência de Palavras

Implementar um sistema que:
1. Lê um arquivo de texto
2. Conta a frequência de cada palavra
3. Exibe as 5 palavras mais frequentes
4. Salva os resultados em arquivo

## Implementações

### Python: `word_frequency.py`
- Biblioteca: `collections.Counter`
- Processamento: ~45 linhas
- Fluxo: Leitura -> Normalização -> Contagem -> Saída

### JavaScript: `word_frequency.js`
- Métodos: `split()`, `filter()`, `sort()`
- Processamento: ~55 linhas
- Fluxo: Leitura (Node.js) -> Normalização -> Contagem -> Saída

## Como Executar

### Python
```bash
cd python
python word_frequency.py
```

### JavaScript
```bash
cd javascript
node word_frequency.js
```

## Comparação: Scripting vs OOP

| Aspecto | Scripting | OOP |
|---------|-----------|-----|
| **Código** | 40-60 linhas | 100-150 linhas |
| **Setup** | Mínimo | Classes/Métodos |
| **Legibilidade** | Excelente | Boa |
| **Velocidade** | Rápida | Mais lenta |
| **Modularidade** | Média | Excelente |
| **Ideal para** | Automação | Sistemas complexos |

## Aprendizados

- Scripting reduz ~40-50% de código
- Linguagens multiparadigma são flexíveis
- Python e JavaScript resolvem problemas similares com estilos diferentes
- Prototipagem rápida vs arquitetura de longo prazo

## Arquivos

- `python/word_frequency.py` - Implementação em Python
- `javascript/word_frequency.js` - Implementação em JavaScript
- `*/sample_text.txt` - Arquivo de entrada para teste
- `*/output.txt` - Resultados da execução
