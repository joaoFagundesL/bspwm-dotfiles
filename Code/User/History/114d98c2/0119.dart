import 'package:ecom_mobile/Model/produto.dart';
import 'package:ecom_mobile/Model/usuario.dart';
import 'package:objectbox/objectbox.dart';

@Entity()
class Carrinho {
  @Id()
  int? id;

  ToOne<Usuario> usuario; 
  ToMany<Produto> produtos;

  Carrinho({
    this.id,
    required this.usuario,
    required this.produtos,
  });
}
