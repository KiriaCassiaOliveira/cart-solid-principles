# Carrinho de Compras com Princípios SOLID

Este projeto é uma implementação de um carrinho de compras seguindo os princípios SOLID em TypeScript. O objetivo é demonstrar a aplicação dos princípios de Design de Software para criar um sistema modular e fácil de manter.

## Funcionalidades

- Adicionar produtos ao carrinho
- Remover produtos do carrinho
- Calcular o total do carrinho
- Finalizar o pedido
- Enviar mensagem de confirmação
- Salvar o pedido

## Estrutura do Projeto

O projeto é dividido nas seguintes entidades e serviços:

- **Entities**:
  - `Product`: Representa um produto com nome e preço.
  - `ShoppingCart`: Gerencia os itens do carrinho e calcula o total.
  - `Order`: Gerencia o estado do pedido.

- **Services**:
  - `Message`: Serviço responsável por enviar mensagens de confirmação.
  - `Persistency`: Serviço responsável por salvar o estado do pedido.

## Princípios SOLID Aplicados

1. **Single Responsibility Principle (SRP)**: Cada classe tem uma única responsabilidade. Por exemplo, a classe `ShoppingCart` é responsável apenas por gerenciar os itens do carrinho.
2. **Open/Closed Principle (OCP)**: As classes estão abertas para extensão, mas fechadas para modificação. Novas funcionalidades podem ser adicionadas sem alterar o código existente.
3. **Liskov Substitution Principle (LSP)**: As subclasses devem ser substituíveis por suas classes base sem alterar a corretude do programa.
4. **Interface Segregation Principle (ISP)**: Interfaces específicas do cliente são usadas em vez de uma interface geral única.
5. **Dependency Inversion Principle (DIP)**: As classes de alto nível não devem depender de classes de baixo nível, mas de abstrações.
