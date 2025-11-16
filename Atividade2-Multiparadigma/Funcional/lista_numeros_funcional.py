# lista_numeros_funcional.py
# Abordagem Funcional
# Objetivo: Gerenciar lista de números usando map, filter e reduce

from functools import reduce

def obter_pares(numeros):
    """
    Usa filter para obter números pares
    
    Args:
        numeros (list): Lista de números
        
    Returns:
        list: Números pares
    """
    return list(filter(lambda x: x % 2 == 0, numeros))

def calcular_media(numeros):
    """
    Usa reduce para calcular a média
    
    Args:
        numeros (list): Lista de números
        
    Returns:
        float: Média dos números
    """
    if len(numeros) == 0:
        return 0
    soma = reduce(lambda acc, x: acc + x, numeros, 0)
    return soma / len(numeros)

def exibir_resultados(numeros):
    """Exibe os resultados de forma formatada"""
    pares = obter_pares(numeros)
    media = calcular_media(numeros)
    
    print("=" * 50)
    print("ABORDAGEM FUNCIONAL - LISTA DE NÚMEROS")
    print("=" * 50)
    print(f"\nLista original: {numeros}")
    print(f"Números pares: {pares}")
    print(f"Média: {media:.2f}")
    print("=" * 50)

# Programa principal
def main():
    # Lista predefinida de números
    numeros = [2, 5, 8, 11, 14, 3, 6, 9, 12, 1]
    
    # Exibir resultados
    exibir_resultados(numeros)

if __name__ == "__main__":
    main()
