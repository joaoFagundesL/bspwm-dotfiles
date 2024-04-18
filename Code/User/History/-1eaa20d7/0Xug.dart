import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';

class SignUpScreen extends StatefulWidget {
  @override
  _SignUpScreenState createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  final GlobalKey<FormBuilderState> _formKey = GlobalKey<FormBuilderState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cadastro de Conta'),
      ),
      body: Padding(
        padding: EdgeInsets.all(20.0),
        child: FormBuilder(
          key: _formKey,
          autovalidateMode: AutovalidateMode.onUserInteraction,
          child: Column(
            children: [
              FormBuilderTextField(
                name: 'nome',
                decoration: InputDecoration(labelText: 'Nome'),
                validator: FormBuilderValidators.compose([
                  FormBuilderValidators.required(context),
                ]),
              ),
              FormBuilderTextField(
                name: 'email',
                decoration: InputDecoration(labelText: 'Email'),
                validator: FormBuilderValidators.compose([
                  FormBuilderValidators.required(context),
                  FormBuilderValidators.email(context),
                ]),
              ),
              FormBuilderTextField(
                name: 'senha',
                decoration: InputDecoration(labelText: 'Senha'),
                obscureText: true,
                validator: FormBuilderValidators.compose([
                  FormBuilderValidators.required(context),
                  FormBuilderValidators.minLength(context, 6),
                ]),
              ),
              FormBuilderTextField(
                name: 'confirmacao_senha',
                decoration: InputDecoration(labelText: 'Confirmação de Senha'),
                obscureText: true,
                validator: FormBuilderValidators.compose([
                  FormBuilderValidators.required(context),
                  (val) {
                    if (val !=
                        _formKey.currentState!.fields['senha']!.currentState!.value) {
                      return 'As senhas não coincidem';
                    }
                    return null;
                  },
                ]),
              ),
              FormBuilderDateTimePicker(
                name: 'data_nascimento',
                decoration: InputDecoration(labelText: 'Data de Nascimento'),
                validator: FormBuilderValidators.compose([
                  FormBuilderValidators.required(context),
                ]),
                initialDate: DateTime.now(),
                firstDate: DateTime(1900),
                lastDate: DateTime.now(),
                inputType: InputType.date,
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  _formKey.currentState!.save();
                  if (_formKey.currentState!.validate()) {
                    // Processar os dados
                    print(_formKey.currentState!.value);
                  }
                },
                child: Text('Cadastrar'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

