import 'package:ecom_mobile/Model/usuario.dart';
import 'package:objectbox/objectbox.dart';

@Entity()
class Carrinho {
  @Id()
  int? id;

  ToOne<Usuario> usuario; 

  Carrinho({
    this.id,
    required this.usuario.setTargetId(usuario.id);
    this.produtos,
  });
}
