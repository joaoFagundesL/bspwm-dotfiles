import 'package:ecom_mobile/Model/usuario.dart';
import 'package:ecom_mobile/View/search/results.dart';
import 'package:ecom_mobile/View/login/login.dart';
import 'package:ecom_mobile/View/login/register.dart';
import 'package:flutter/material.dart';
import 'package:ecom_mobile/View/home/home.dart';
import 'package:ecom_mobile/Model/init_database.dart';
import 'package:ecom_mobile/Model/open_database.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await ObjectBox.create();
  await init();
  runApp(const MainApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      onGenerateRoute: (settings) {
        if (settings.name == '/home') {
          final Usuario usuario = settings.arguments as Usuario; // Recebe o usuário como parâmetro
          return MaterialPageRoute(
            builder: (context) => HomePage(usuario: usuario),
          );
        }
        // Pode adicionar outras rotas nomeadas aqui, se necessário
        return null;
      },
      initialRoute: '/login', // Defina a rota inicial
      routes: {
        '/login': (context) => LoginPage(),
        // Pode adicionar outras rotas nomeadas aqui, se necessário
      },
    );
  }
}
