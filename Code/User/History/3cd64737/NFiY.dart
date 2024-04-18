import 'package:ecom_mobile/Model/open_database.dart';
import 'package:ecom_mobile/Model/produto.dart';
import 'package:ecom_mobile/objectbox.g.dart';

init() async {
  Box<Usuario> usuarioBox = ObjectBox.usuarioBox;
 
  final query = usuarioBox.query().build();
  final produtos = query.find();
  //query.remove();
  // usuarioBox.put(produto);
  // usuarioBox.put(produto2);

  for (Produto produto in produtos) {
    print(produto.nome);
  }
}
