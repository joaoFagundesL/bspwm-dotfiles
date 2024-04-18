import 'package:ecom_mobile/Model/produto.dart';
import 'package:ecom_mobile/Model/usuario.dart';
import 'package:objectbox/objectbox.dart';


@Entity()
class Carrinho {
  @Id()
  int? id;

  @BacklinkToMany(referencedEntity: Produto)
  late final List<Produto> produtos;

  Carrinho({
    this.id,
  });
}