# lista_numeros_oop.py
# Abordagem Orientada a Objetos (OOP)
# Objetivo: Gerenciar lista de números, obter pares e calcular média

class ListaNumeros:
    """
    Classe para gerenciar uma lista de números inteiros.
    Fornece métodos para obter números pares e calcular média.
    """
    
    def __init__(self, numeros):
        """
        Inicializa a classe com uma lista de números
        
        Args:
            numeros (list): Lista de números inteiros
        """
        self.numeros = numeros
    
    def obter_pares(self):
        """
        Retorna uma lista dos números pares
        
        Returns:
            list: Números pares da lista
        """
        pares = []
        for numero in self.numeros:
            if numero % 2 == 0:
                pares.append(numero)
        return pares
    
    def calcular_media(self):
        """
        Calcula a média dos números na lista
        
        Returns:
            float: Média dos números
        """
        if len(self.numeros) == 0:
            return 0
        return sum(self.numeros) / len(self.numeros)
    
    def exibir_resultados(self):
        """Exibe os resultados de forma formatada"""
        print("=" * 50)
        print("ABORDAGEM OOP - LISTA DE NÚMEROS")
        print("=" * 50)
        print(f"\nLista original: {self.numeros}")
        print(f"Números pares: {self.obter_pares()}")
        print(f"Média: {self.calcular_media():.2f}")
        print("=" * 50)

# Programa principal
def main():
    # Lista predefinida de números
    numeros = [2, 5, 8, 11, 14, 3, 6, 9, 12, 1]
    
    # Criar instância da classe
    lista = ListaNumeros(numeros)
    
    # Exibir resultados
    lista.exibir_resultados()

if __name__ == "__main__":
    main()
