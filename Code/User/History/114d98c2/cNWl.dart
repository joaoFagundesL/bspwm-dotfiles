import 'package:objectbox/objectbox.dart';

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
