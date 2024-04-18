import 'package:flutter/material.dart';
import 'package:ecom_mobile/Model/carrinho.dart';
import 'package:ecom_mobile/Model/produto.dart';
import 'package:ecom_mobile/View/login/auth_provider.dart';
import 'package:provider/provider.dart';

class CarrinhoPage extends StatelessWidget {
  final Carrinho carrinho;

  const CarrinhoPage({Key? key, required this.carrinho}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Meu Carrinho'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Produtos no Carrinho:',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 20,
              ),
            ),
            SizedBox(height: 10),
            Expanded(
              child: ListView.builder(
                itemCount: carrinho.produtos.length,
                itemBuilder: (context, index) {
                  final produto = carrinho.produtos[index];
                  return ListTile(
                    title: Text(produto.nome),
                    subtitle: Text('R\$ ${produto.precoBase.toStringAsFixed(2)}'),
                  );
                },
              ),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                AuthProvider authProvider = Provider.of<AuthProvider>(context, listen: false);
                Usuario? usuarioLogado = authProvider.currentUser;

                if (usuarioLogado != null) {
                  // Criar um novo carrinho associado ao usuário logado
                  Carrinho novoCarrinho = Carrinho(0, usuarioLogado); // Use o ID apropriado para o carrinho

                  // Calcular subtotal
                  double subtotal = calcularSubtotal(carrinho.produtos);

                  // Mostrar diálogo com o subtotal
                  showDialog(
                    context: context,
                    builder: (context) => AlertDialog(
                      title: Text('Subtotal'),
                      content: Text('O subtotal é: R\$ ${subtotal.toStringAsFixed(2)}'),
                      actions: [
                        TextButton(
                          onPressed: () => Navigator.pop(context),
                          child: Text('OK'),
                        ),
                      ],
                    ),
                  );
                } else {
                  // Se o usuário não estiver logado, redirecionar para a tela de login
                  Navigator.pushNamed(context, '/login');
                }
              },
              child: Text(
                'Calcular Subtotal',
                style: TextStyle(fontSize: 16, color: Colors.white),
              ),
              style: ElevatedButton.styleFrom(
                shape: StadiumBorder(),
                padding: EdgeInsets.symmetric(vertical: 12),
                backgroundColor: Colors.blue,
              ),
            ),
          ],
        ),
      ),
    );
  }

  // Função para calcular o subtotal com base nos produtos no carrinho
  double calcularSubtotal(List<Produto> produtos) {
    double subtotal = 0;
    for (var produto in produtos) {
      subtotal += produto.precoBase; // Adiciona o preço de cada produto ao subtotal
    }
    return subtotal;
  }
}
