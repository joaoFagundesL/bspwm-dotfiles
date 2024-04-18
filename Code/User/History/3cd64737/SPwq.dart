import 'package:ecom_mobile/Model/open_database.dart';
import 'package:ecom_mobile/Model/usuario.dart';
import 'package:ecom_mobile/objectbox.g.dart';

init(Usuario u) async {
  Box<Usuario> usuarioBox = ObjectBox.usuarioBox;
 
  final query = usuarioBox.query(Usuario_.email.equals(u.email)).build();
  final usuariosComMesmoEmail = query.find();
  
  if (usuariosComMesmoEmail.isNotEmpty) {
    throw Exception('Este email já está em uso');
  }

  usuarioBox.put(u);

  final usuarios = usuarioBox.getAll();
  for (Usuario usuario in usuarios) {
    print(usuario.nome);
    print(usuario.email);
    print(usuario.senha);
  }
}
