import 'package:ecom_mobile/Model/open_database.dart';
import 'package:ecom_mobile/Model/usuario.dart';
import 'package:ecom_mobile/objectbox.g.dart';

init() async {
  Box<Usuario> usuarioBox = ObjectBox.usuarioBox;
 
  final query = usuarioBox.query().build();
  final produtos = query.find();
  //query.remove();
  // usuarioBox.put(produto);
  // usuarioBox.put(produto2);

  for (Usuario usuario in usuarios) {
    print(usuario.nome);
  }
}
