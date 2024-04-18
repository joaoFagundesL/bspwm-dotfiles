import 'package:ecom_mobile/View/login/auth_provider.dart';
import 'package:ecom_mobile/View/search/results.dart';
import 'package:flutter/material.dart';
import 'package:ecom_mobile/Model/usuario.dart';
import 'package:ecom_mobile/View/login/login.dart';
import 'package:ecom_mobile/View/home/home.dart';
import 'package:ecom_mobile/Model/init_database.dart';
import 'package:ecom_mobile/Model/open_database.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await ObjectBox.create();
  await init();

  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => AuthProvider()), // Provider de autenticação
      ],
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(colorScheme: const ColorScheme.dark()),
        initialRoute: '/home', // Rota inicial
        onGenerateRoute: (settings) {
          if (settings.name == '/home') {
            // Obter o usuário logado do AuthProvider usando Provider.of
            AuthProvider authProvider = Provider.of<AuthProvider>(settings.context, listen: false);
            Usuario? usuario = authProvider.currentUser;

            // Retornar a rota com a HomePage e passar o usuário como argumento
            return MaterialPageRoute(
              builder: (context) => HomePage(usuario: usuario),
            );
          }
          return null;
        },
        routes: {
          '/login': (context) => LoginPage(), // Rota para a tela de login
          '/results': (context) => SearchResults(), // Rota para os resultados de busca
        },
      ),
    );
  }
}
