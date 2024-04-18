import 'package:ecom_mobile/Model/open_database.dart';
import 'package:ecom_mobile/Model/usuario.dart';
import 'package:ecom_mobile/objectbox.g.dart';

List<Usuario> pegaProdutos() {
  Box<Usuario> usuarioBox = ObjectBox.usuarioBox;

  final query = produtoBox.query().build();
  final produtos = query.find();

  return produtos;
}
