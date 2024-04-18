import 'package:objectbox/objectbox.dart';
import 'produto.dart'; // Importe a classe Produto aqui
import 'usuario.dart'; // Importe a classe Usuario aqui

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
