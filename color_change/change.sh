
#!/bin/bash

temas=("DoomOne" "GruvboxDark" "Dracula" "TomorrowNight" "MonokaiPro" "Nord" "OceanicText" "Palenight" "SolarizedDark" "TomorrowNight")

exibir_menu() {
    clear
    echo "Temas:"

    for (( i=0; i<${#temas[@]}; i++ )); do
        echo "$(($i + 1)). ${temas[$i]}"
    done

    echo "0. Sair"

    read -p "-> " escolha

    if [[ $escolha -ge 0 && $escolha -le ${#temas[@]} ]]; then
        if [[ $escolha -eq 0 ]]; then
            exit 0
        else
            novo_tema=${temas[$(($escolha - 1))]}
            substituir_palavra "$novo_tema"
        fi
    else
        echo "Opção inválida. Tente novamente."
        exibir_menu
    fi
}

substituir_palavra() {
    novo_tema="$1"

    if [ -f "current_theme.txt" ]; then
        tema_antigo=$(<current_theme.txt)
    else
        echo "Erro: O arquivo 'current_theme.txt' não encontrado."
        exit 1
    fi

    arquivo1="$HOME/.config/bspwm/config/polybar/config.ini"
    arquivo2="$HOME/.config/kitty/kitty.conf"

    if [ ! -f "$arquivo1" ]; then
        echo "Erro: O arquivo '$arquivo1' não existe."
        exit 1
    fi

    if [ ! -f "$arquivo2" ]; then
        echo "Erro: O arquivo '$arquivo2' não existe."
        exit 1
    fi

    sed -i "s/$tema_antigo/$novo_tema/g" "$arquivo1"

    sed -i "s/include .\/$tema_antigo\.conf/include .\/$novo_tema\.conf/g" "$arquivo2"

    echo "Substituições concluídas:"
    echo " - '$tema_antigo' foi substituído por '$novo_tema' em '$arquivo1'."
    echo " - Linha 'include ./$tema_antigo.conf' foi atualizada para 'include ./$novo_tema.conf' em '$arquivo2'."

    xdotool keydown Super_L keydown Alt_L keydown r
    xdotool keyup r keyup Alt_L keyup Super_L

    echo "$novo_tema" > current_theme.txt
}

exibir_menu
