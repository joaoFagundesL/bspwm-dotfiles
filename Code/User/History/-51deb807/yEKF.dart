import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16.0, 90.0, 16.0, 16.0), 
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const Text(
                'Sign In',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 20),
              const TextField(
                decoration: InputDecoration(
                  labelText: 'Username',
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 20),
              const TextField(
                obscureText: true,
                decoration: InputDecoration(
                  labelText: 'Password',
                  border: OutlineInputBorder(),
                ),
              ),

              const SizedBox(height: 16),
              const SizedBox(height: 16),
              const Text(
                'Não tem uma conta? ',
                style: TextStyle(
                  fontSize: 12,
                  color: Colors.white,
                ),
              ),

               TextButton(
                  onPressed: () {
                    //todo
                  },
                  child: const Text(
                    'Registrar',
                    style: TextStyle(
                      fontSize: 12,
                      color: Colors.blue
                    ),
                  ),
                
                ),
              const SizedBox(height: 20),
              Container(
                width: 200,
                child: ElevatedButton(
                  onPressed: () {
                    
                  },
                  child: const Text('Login'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.black,
                    foregroundColor: Colors.white,
                    shape: const RoundedRectangleBorder(
                      borderRadius: BorderRadius.zero,
                      // Definindo a borda quadrada
                    ),
                  ),
                ),
              ),
              
            ],
          ),
        ),
      ),
    );
  }
}