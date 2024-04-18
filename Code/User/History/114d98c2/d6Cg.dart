import 'package:objectbox/objectbox.dart';
import 'produto.dart'; // Importe a classe Produto aqui
import 'usuario.dart'; // Importe a classe Usuario aqui

@Entity()
class Carrinho {
  @Id()
  int? id;

  public ToOne<Usuario> usuario;

  Carrinho({
    this.id,
    this.usuario,
    this.produtos,
  });
}
