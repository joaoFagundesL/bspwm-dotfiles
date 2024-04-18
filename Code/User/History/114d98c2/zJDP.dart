import 'package:objectbox/objectbox.dart';

@Entity()
class Carrinho {
  @Id()
  int? id;

  
  Carrinho({
    this.id,
    this.usuario,
    this.produtos,
  });
}
