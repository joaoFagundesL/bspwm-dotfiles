import 'package:flutter/material.dart';

class SearchBox extends StatelessWidget {
  SearchBox({Key key, this.onSearch}) : super(key: key);

  final Function(String) onSearch;
  final TextEditingController _controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10.0),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.5),
            spreadRadius: 1,
            blurRadius: 3,
            offset: Offset(0, 2), // changes position of shadow
          ),
        ],
      ),
      padding: EdgeInsets.symmetric(horizontal: 12.0), // Padding lateral
      child: Row(
        children: [
          Expanded(
            child: TextField(
              autofocus: ModalRoute.of(context)?.settings.name == '/results',
              controller: _controller,
              decoration: InputDecoration(
                hintText: "Pesquisar",
                border: InputBorder.none, // Remove the default border
              ),
              onSubmitted: (value) {
                if (onSearch != null) {
                  onSearch(value);
                }
              },
              onTap: () {
                if (ModalRoute.of(context)?.settings.name != '/results') {
                  Navigator.pushNamed(context, '/results');
                }
              },
            ),
          ),
          GestureDetector(
            onTap: () {
              if (onSearch != null) {
                onSearch(_controller.text);
              }
            },
            child: Icon(
              Icons.search,
              size: 30,
              color: Colors.grey[700],
            ),
          ),
        ],
      ),
    );
  }
}
