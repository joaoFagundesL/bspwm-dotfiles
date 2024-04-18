import 'package:ecom_mobile/Model/carrinho.dart';
import 'package:ecom_mobile/Model/usuario.dart';

class CarrinhoService {
  Map<int, Carrinho> _carrinhos = {};

  Carrinho getCarrinhoDoUsuario(int userId) {
    if (_carrinhos.containsKey(userId)) {
      return _carrinhos[userId]!;
    } else {
      Carrinho novoCarrinho = Carrinho(userId);
      _carrinhos[userId] = novoCarrinho;
      return novoCarrinho;
    }
  }
}
