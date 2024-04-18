import 'package:flutter/foundation.dart';

class AuthProvider with ChangeNotifier {
  String? _currentUser;

  String? get currentUser => _currentUser;

  void login(String username) {
    _currentUser = username;
    notifyListeners(); 
  }

  void logout() {
    _currentUser = null;
    notifyListeners(); 
  }

  bool isLoggedIn() {
    return _currentUser != null;
  }
}
