import 'package:ecom_mobile/Model/carrinho.dart';
import 'package:ecom_mobile/Model/usuario.dart';

class CarrinhoService {
  Map<int, Carrinho> _carrinhos = {};

  // Método para obter o carrinho do usuário pelo ID do usuário
  Carrinho getCarrinhoDoUsuario(int userId) {
    if (_carrinhos.containsKey(userId)) {
      return _carrinhos[userId]!;
    } else {
      // Se o carrinho ainda não existe, cria um novo
      Carrinho novoCarrinho = Carrinho(usuarioId: userId);
      _carrinhos[userId] = novoCarrinho;
      return novoCarrinho;
    }
  }
}
