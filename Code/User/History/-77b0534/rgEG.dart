import 'package:flutter/material.dart';
import 'package:ecom_mobile/View/login/login.dart';
import 'package:ecom_mobile/View/home/user_side_menu.dart';
import 'package:ecom_mobile/View/carrinho/carrinho_view.dart';

class SideMenuDeslogado extends StatelessWidget {
  const SideMenuDeslogado({super.key});
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          DrawerHeader(
            decoration: BoxDecoration(
              color: const Color.fromARGB(255, 255, 255, 255),
            ),
            child: ListView(
              children: [
                UserSideMenu(),
                Center(child: Text('User')),
              ],
            ),
          ),
          ListTile(
            title: const Text('Home'),
            onTap: () {
              Navigator.pushNamedAndRemoveUntil(context, "/home", (r) => false);
            },
          ),
          ListTile(
            title: const Text('Carrinho'),
            onTap: () {
              
              Navigator.pop(context);
              Navigator.push(context,
                  MaterialPageRoute<void>(builder: (BuildContext context) {
                return CartScreen();
              }));
            },
          ),
          ListTile(
            title: const Text('Login'),
            onTap: () {
              
              Navigator.pushNamedAndRemoveUntil(context, "/login", (r) => false);
            },
          ),
        ],
      ),
    );
  }
}
