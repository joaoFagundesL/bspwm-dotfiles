import 'package:ecom_mobile/Model/open_database.dart';
import 'package:ecom_mobile/objectbox.g.dart';

List<Usuario> pegaProdutos() {
  Box<Usuario_> produtoBox = ObjectBox.usuarioBox;

  final query = produtoBox.query().build();
  final produtos = query.find();

  return produtos;
}
