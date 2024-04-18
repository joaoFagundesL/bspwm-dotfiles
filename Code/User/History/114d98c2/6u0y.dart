import 'package:ecom_mobile/Model/usuario.dart';
import 'package:objectbox/objectbox.dart';

@Entity()
class Carrinho {
  @Id()
  int? id;

  @Backlink(to: "carrinho") // Relacionamento 1-n com Usuario
  final Usuario? usuario;

  @ToMany() // Relacionamento n-n com Produto
  List<Produto>? produtos;

  Carrinho({
    this.id,
    this.usuario,
    this.produtos,
  });
}
