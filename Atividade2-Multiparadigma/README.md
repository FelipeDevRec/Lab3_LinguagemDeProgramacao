# Atividade 2 - Oficina de Linguagem Multiparadigma

## Descricao

Explorar como uma mesma linguagem multiparadigma resolve um problema simples usando OOP e Programacao Funcional.

## Problema: Gestao de Lista de Numeros

Implementar um sistema que:
1. Gerencia uma lista de numeros inteiros
2. Obtem os numeros pares
3. Calcula a media
4. Usa dois paradigmas diferentes

## Implementacoes

### OOP: lista_numeros_oop.py / lista_numeros_oop.js
- Define classe ListaNumeros
- Metodos: obterPares(), calcularMedia()
- Encapsulamento de dados
- Estado mantido em instancia

### Funcional: lista_numeros_funcional.py / lista_numeros_funcional.js
- Funcoes puras
- Operacoes: filter(), reduce()
- Sem estado interno
- Composicao de funcoes

## Como Executar

### OOP
cd OOP
python lista_numeros_oop.py
node lista_numeros_oop.js

### Funcional
cd Funcional
python lista_numeros_funcional.py
node lista_numeros_funcional.js

## Comparacao: OOP vs Funcional

OOP:
✓ Organizacao clara
✓ Reutilizacao
✓ Escalabilidade

Funcional:
✓ Sintaxe concisa
✓ Facil de testar
✓ Sem efeitos colaterais

## Aprendizados

- Linguagens multiparadigma oferecem flexibilidade
- Mesmo problema, multiplas solucoes
- Escolha depende do contexto
- Python e JavaScript suportam ambos
