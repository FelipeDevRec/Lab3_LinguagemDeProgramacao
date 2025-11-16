# Lab03 - Linguagens de Programação

## Descrição do Projeto

Este repositório contém as atividades práticas do Laboratório 03 da disciplina **Linguagens de Programação** (CSPR-366) da Jala University. O laboratório explora conceitos fundamentais de diferentes paradigmas de programação através de implementações práticas em Python e JavaScript.

### Contexto Acadêmico
- **Disciplina**: Linguagens de Programação (CSPR-366.GA.T2.25.M3)
- **Professor(a)**: Helder Guimarães
- **Tutor**: Oswaldo Borges
- **Instituição**: Jala University
- **Período**: Semana 3

---

## 📁 Estrutura do Projeto

```
Lab3_LinguagemDeProgramacao/
├── Atividade1-Scripting/              # Workshop de Linguagem de Scripting
│   ├── python/
│   │   ├── word_frequency.py          # Implementação em Python
│   │   ├── sample_text.txt            # Arquivo de teste
│   │   └── output.txt                 # Resultados da execução
│   ├── javascript/
│   │   ├── word_frequency.js          # Implementação em JavaScript
│   │   ├── sample_text.txt            # Arquivo de teste
│   │   └── output.txt                 # Resultados da execução
│   └── README.md                      # Documentação específica
│
├── Atividade2-Multiparadigma/         # Oficina de Linguagem Multiparadigma
│   ├── OOP/
│   │   ├── lista_numeros_oop.py       # Implementação OOP em Python
│   │   └── lista_numeros_oop.js       # Implementação OOP em JavaScript
│   ├── Funcional/
│   │   ├── lista_numeros_funcional.py # Implementação Funcional em Python
│   │   └── lista_numeros_funcional.js # Implementação Funcional em JavaScript
│   └── README.md                      # Documentação específica
│
├── Documentacao/
│   ├── analise_comparativa.md         # Análise comparativa entre paradigmas
│   └── screenshots/                   # Capturas de tela das execuções
│
└── README.md                          # Este arquivo
```

---

## 🎯 Objetivos das Atividades

### Atividade 1: Workshop de Linguagem de Scripting

**Objetivo Geral**: Introduzir o uso de linguagens de scripting (Python e JavaScript) para automatizar tarefas simples, comparando sua facilidade de uso, eficiência e sintaxe com abordagens OOP da Semana 2.

**Objetivos Específicos**:
1. Explorar a sintaxe e características principais das linguagens de scripting
2. Comparar a simplicidade e rapidez de scripting frente a OOP/funcional
3. Implementar scripts curtos que automatizem uma tarefa repetitiva

**Implementação**: Sistema de análise de frequência de palavras que lê um arquivo de texto, processa o conteúdo e exibe as 5 palavras mais frequentes.

### Atividade 2: Oficina de Linguagem Multiparadigma

**Objetivo Geral**: Explorar como uma mesma linguagem multiparadigma pode resolver um problema simples utilizando abordagens diferentes (OOP e funcional), destacando a flexibilidade e comparando vantagens/desvantagens de cada paradigma.

**Objetivos Específicos**:
1. Identificar como uma linguagem pode permitir múltiplos estilos de programação
2. Comparar a flexibilidade de usar distintos paradigmas em um único ambiente
3. Implementar um pequeno problema usando dois paradigmas dentro da mesma linguagem

**Implementação**: Sistema de gestão de listas numéricas que obter números pares e calcula a média, implementado em OOP e Funcional.

---

## 🚀 Como Usar

### Pré-requisitos

- **Python 3.8+** - Para executar scripts Python
- **Node.js 14+** - Para executar scripts JavaScript

### Instalação

```bash
# Clone o repositório
git clone https://github.com/FelipeDevRec/Lab3_LinguagemDeProgramacao.git
cd Lab3_LinguagemDeProgramacao
```

### Executar Atividade 1 - Scripting

**Python**:
```bash
cd Atividade1-Scripting/python
python word_frequency.py
```

**JavaScript**:
```bash
cd Atividade1-Scripting/javascript
node word_frequency.js
```

### Executar Atividade 2 - Multiparadigma

**OOP em Python**:
```bash
cd Atividade2-Multiparadigma/OOP
python lista_numeros_oop.py
```

**OOP em JavaScript**:
```bash
cd Atividade2-Multiparadigma/OOP
node lista_numeros_oop.js
```

**Funcional em Python**:
```bash
cd Atividade2-Multiparadigma/Funcional
python lista_numeros_funcional.py
```

**Funcional em JavaScript**:
```bash
cd Atividade2-Multiparadigma/Funcional
node lista_numeros_funcional.js
```

---

## 📚 Conteúdo das Pastas

### 📂 Atividade1-Scripting/
Implementações de um sistema de análise de frequência de palavras em Python e JavaScript, demonstrando como linguagens de scripting resolvem problemas com menos linhas de código.

**Veja**: [README.md](./Atividade1-Scripting/README.md) para detalhes específicos.

### 📂 Atividade2-Multiparadigma/
Implementações do mesmo problema (gestão de números) usando OOP e programação funcional em Python e JavaScript, mostrando a flexibilidade de linguagens multiparadigma.

**Veja**: [README.md](./Atividade2-Multiparadigma/README.md) para detalhes específicos.

### 📂 Documentacao/
- **analise_comparativa.md**: Análise detalhada comparando OOP vs Funcional, Python vs JavaScript
- **screenshots/**: Capturas de tela das execuções de todos os programas

---

## 🔍 Paradigmas Abordados

### Programação Orientada a Objetos (OOP)
- Encapsulamento de dados e métodos em classes
- Instância de objetos com estado
- Organização clara de responsabilidades

### Programação Funcional
- Funções como "cidadãos de primeira classe"
- Uso de `map()`, `filter()`, `reduce()`
- Imutabilidade de dados
- Composição de funções

### Programação com Scripts
- Código conciso e direto
- Menor quantidade de boilerplate
- Ideal para automação de tarefas

---

## 📖 Linguagens Utilizadas

| Linguagem | Versão | Tipo | Paradigmas |
|-----------|--------|------|------------|
| Python | 3.8+ | Interpretada | OOP, Funcional, Imperativa |
| JavaScript | ES6+ | Interpretada | OOP, Funcional, Imperativa |

---

## 💡 Aprendizados Principais

1. **Diferenças Sintáticas**: Python e JavaScript resolvem o mesmo problema com estilos distintos
2. **Eficiência de Código**: Scripting reduz linhas de código em ~30-40% comparado a OOP clássica
3. **Flexibilidade**: Linguagens multiparadigma permitem escolher o melhor paradigma para cada situação
4. **Legibilidade**: Cada paradigma tem vantagens específicas dependendo do contexto
5. **Reutilização**: Componentes modulares melhoram a manutenibilidade

---

## 📋 Rubrica de Avaliação

O projeto foi desenvolvido seguindo os critérios de rubrica das atividades:

- ✅ **Implementação de Scripts (50%)**: Ambas as linguagens funcionam corretamente
- ✅ **Comparação com Semana 2 (40%)**: Análise detalhada de diferenças OOP vs Scripting
- ✅ **Documentação e Reflexão (10%)**: Documentação completa com explicações

---

## 📝 Autor

- **Nome**: Felipe da Conceição Alves
- **GitHub**: [FelipeDevRec](https://github.com/FelipeDevRec)
- **Disciplina**: CSPR-366 - Linguagens de Programação
- **Instituição**: Jala University

---

## 📄 Licença

Este projeto é parte de atividades acadêmicas e está disponível para fins educacionais.

---

## 🔗 Referências

- [Python Official Documentation](https://docs.python.org/3/)
- [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Functional Programming Concepts](https://en.wikipedia.org/wiki/Functional_programming)
- [Object-Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming)

---

**Último Update**: Novembro 2025
