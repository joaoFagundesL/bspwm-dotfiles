import 'package:ecom_mobile/Model/produto.dart';
import 'package:flutter/material.dart';

class DetalhesProdutoPage extends StatelessWidget {
  final Produto produto;

  const DetalhesProdutoPage({Key? key, required this.produto}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(produto.nome),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image(image: AssetImage(produto.imagem)),
            SizedBox(height: 20),
            Text(
              produto.nome,
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 24,
              ),
            ),
            Text(
              'R\$ ${produto.precoBase}',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 20,
              ),
            ),
            // Adicione mais detalhes sobre o produto aqui
          ],
        ),
      ),
    );
  }
}
