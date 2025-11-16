# Analise Comparativa: Paradigmas de Programacao

## Introducao

Este documento apresenta uma analise detalhada das diferencas entre os paradigmas de programacao explorados nas atividades: Scripting, OOP e Programacao Funcional.

## Atividade 1: Scripting vs OOP Tradicional

### Problema: Analise de Frequencia de Palavras

#### Abordagem Scripting
**Vantagens:**
- Menos linhas de codigo (40-60 linhas)
- Menos boilerplate
- Ideal para automacao simples
- Rapido para prototipar
- Facil de depurar

**Desvantagens:**
- Menos modular
- Dificil escalar para grandes projetos
- Sem encapsulamento
- Tipagem dinamica pode causar erros

#### Abordagem OOP (Semana 2)
**Vantagens:**
- Melhor organizacao
- Reutilizacao de codigo
- Encapsulamento
- Escalabilidade
- Ideal para sistemas complexos

**Desvantagens:**
- Mais linhas de codigo (100-150 linhas)
- Mais boilerplate
- Curva de aprendizado mais ingreme
- Overhead de classes

### Comparacao Python vs JavaScript

**Python (Collections.Counter):**
- Sintaxe simples e legivel
- Biblioteca padrao completa
- Processamento ~ 45 linhas

**JavaScript (Node.js):**
- Mais verboso
- Necessita manipulacao manual de objetos
- Processamento ~ 55 linhas
- Uso de fs para arquivo I/O

## Atividade 2: OOP vs Funcional

### Problema: Gestao de Lista de Numeros

#### Paradigma OOP
**Estrutura:**
- Classe ListaNumeros
- Encapsulamento de dados (this.numeros)
- Metodos: obterPares(), calcularMedia()
- Estado mantido em instancia

**Linhas: 40-50**

**Uso em Python:**
```python
class ListaNumeros:
    def __init__(self, numeros):
        self.numeros = numeros
    def obterPares(self):
        return [x for x in self.numeros if x % 2 == 0]
    def calcularMedia(self):
        return sum(self.numeros) / len(self.numeros)
```

#### Paradigma Funcional
**Estrutura:**
- Funcoes puras
- Sem estado
- Operacoes: filter(), reduce()
- Composicao de funcoes

**Linhas: 30-40**

**Uso em Python:**
```python
from functools import reduce

obter_pares = lambda nums: list(filter(lambda x: x % 2 == 0, nums))
calcular_media = lambda nums: reduce(lambda a,x: a+x, nums, 0) / len(nums)
```

### Comparacao de Paradigmas

| Criterio | OOP | Funcional | Scripting |
|----------|-----|-----------|----------|
| Linhas de Codigo | Medio | Menos | Menos |
| Encapsulamento | Forte | Fraco | Nenhum |
| Estado | Mantém | Stateless | Global |
| Modularidade | Excelente | Boa | Media |
| Testabilidade | Media | Excelente | Media |
| Curva Aprendizado | Ingreme | Media | Suave |
| Ideal para | Sistemas complexos | Transformacoes | Automacao |

## Python vs JavaScript

### Sintaxe OOP

**Python:**
- Sintaxe limpa
- Indentacao obrigatoria
- self explícito

**JavaScript:**
- Classes ES6
- this implícito
- Mais verboso

### Sintaxe Funcional

**Python:**
- map(), filter(), reduce()
- List comprehension
- Lambda expressions simples

**JavaScript:**
- Array methods: map(), filter(), reduce()
- Arrow functions =>
- Callback-based

## Conclusoes

1. **Multiparadigma:** Python e JavaScript suportam multiplos paradigmas igualmente bem

2. **Escolha depende do contexto:**
   - Automacao simples: Scripting
   - Sistemas complexos: OOP
   - Transformacao de dados: Funcional

3. **Eficiencia:**
   - Scripting: ~40-50% menos codigo que OOP
   - Funcional: ~20-30% menos codigo que OOP

4. **Recomendacoes:**
   - Use OOP para projetos maiores
   - Use Funcional para operacoes em dados
   - Use Scripting para tasks simples e automacao

## Referencas

- Paradigmas de Programacao
- Linguagens Multiparadigma
- Design Patterns
- Programacao Funcional em Python e JavaScript
