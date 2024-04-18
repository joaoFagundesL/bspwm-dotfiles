import 'package:ecom_mobile/Model/produto.dart';
import 'package:ecom_mobile/Model/usuario.dart';
import 'package:objectbox/objectbox.dart';

@Entity()
class Carrinho {
  @Id()
  int? id;

  ToOne<Usuario> usuario;
  final ToMany<Produto> produtos = ToMany<Produto>();

  Carrinho({
    this.id,
    required this.usuario,
  });

  void adicionarProduto(Produto produto) {
    produtos.add(produto);
  }
}
