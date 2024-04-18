import 'package:flutter/material.dart';
import 'package:ecom_mobile/Model/produto.dart';
import 'package:flutter/widgets.dart';

class ProdutoCard extends StatelessWidget {
  final Produto produto;
  const ProdutoCard({Key? key, required this.produto}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(5.0)),
        color: Colors.white,
      ),
      width: 200,
      child: Column(
        mainAxisSize: MainAxisSize.max,
        children: [
          SizedBox(
            height: 70,
            child: Image(
              image: AssetImage(produto.imagem),
              fit: BoxFit.cover, // Ajusta a imagem para cobrir o espaço disponível
            ),
          ),
          Center(
            child: Text(
              produto.nome,
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
          ),
          Center(
            child: Text(
              'R\$ ${produto.precoBase}',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
