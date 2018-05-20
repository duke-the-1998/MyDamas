window.onload = init;



var areaDeJogo = 10 // tamanho do tabuleiro



function init() {

    var button = document.getElementById("button")

    button.addEventListener("click", receberInput, false)

}



function receberInput() {

    valor = document.getElementById("tamanhoTabuleiro").value;

    if (valor % 2 == 0 && (valor >= 8 && valor <= 12)) {

        areaDeJogo = valor;

        montarTabuleiro()

    } else {

        alert("Numero inválido, o valor introduzido tem que ser par e estar entre 8 e 12")

    }

}



// cria o tabuleiro de jogo a ser usado pelos utilizadores

function montarTabuleiro() {



    // ---- remover tabuleiros existentes e redimensionar o tabuleiro para o tamanho recebido

    var tabuleiro = document.getElementById("tabuleiro");

    var suporte = document.getElementById("suporte")

    tabuleiro.classList.add("tabuleiro");

    suporte.classList.add("suporte")

    tabuleiro.style.height = areaDeJogo * 50;

    tabuleiro.style.width = areaDeJogo * 50;

    suporte.style.height = areaDeJogo * 50 + 100;

    suporte.style.width = areaDeJogo * 50 + 100;

    while (tabuleiro.firstChild) {

        tabuleiro.removeChild(tabuleiro.firstChild);

    }

    // ----



    for (var i = 0; i < areaDeJogo; i++) {

        var linha = document.createElement("div");

        linha.classList.add("linha");

        tabuleiro.appendChild(linha);

        for (var j = 0; j < areaDeJogo; j++) {

            var quadricula = document.createElement("div");

            quadricula.classList.add("quadricula");

            if (i % 2 == 0) {

                if (j % 2 == 0) {

                    quadricula.classList.add("quadricula_tipo_2");

                } else {

                    quadricula.classList.add("quadricula_tipo_1");

                    criarPeca(quadricula, i, j);

                }

            } else {

                if (j % 2 == 0) {

                    quadricula.classList.add("quadricula_tipo_1");

                    criarPeca(quadricula, i);

                } else {

                    quadricula.classList.add("quadricula_tipo_2");

                }

            }

            linha.appendChild(quadricula)

        }

    }



    var areaSuporte = Number(areaDeJogo) + 2;

    alert(areaSuporte)

    for (var i = 0; i < areaSuporte; i++) {

        var linhaSuporte = document.createElement("div");

        linhaSuporte.classList.add("linha");

        suporte.appendChild(linhaSuporte)

        for (var j = 0; j < areaSuporte; j++) {

            var quadriculaSuporte = document.createElement("div");

            quadriculaSuporte.classList.add("quadricula");

            linhaSuporte.appendChild(quadriculaSuporte)

            atribuirCoordenadas(quadriculaSuporte, i, j)

            if(i == 0 && (j != 0 && j != areaSuporte - 1)){

                quadriculaSuporte.innerHTML = quadriculaSuporte.id[1];

            }else if(i == areaSuporte - 1 && (j != 0 && j != areaSuporte - 1)){

                quadriculaSuporte.innerHTML = quadriculaSuporte.id[1];

            }else if(j == 0 && (i != 0 && i != areaSuporte - 1)){

                quadriculaSuporte.innerHTML = quadriculaSuporte.id[0];

            }else if(j == areaSuporte - 1 && (i != 0 && i != areaSuporte - 1)){

                quadriculaSuporte.innerHTML = quadriculaSuporte.id[0];

            }



        }

    }

    /*for (var i = 0; i < areaDeJogo; i++) {

        var linha = document.createElement("div");

        linha.classList.add("linha");

        tabuleiro.appendChild(linha);

        for (var j = 0; j < areaDeJogo; j++) {

            var quadricula = document.createElement("div");

            quadricula.classList.add("quadricula")

                if (i % 2 == 0) {

                    if (j % 2 == 0) {

                        quadricula.classList.add("quadricula_tipo_2");

                    } else {

                        quadricula.classList.add("quadricula_tipo_1");

                        criarPeca(quadricula, i, j);

                    }

                } else {

                    if (j % 2 == 0) {

                        quadricula.classList.add("quadricula_tipo_1");

                        criarPeca(quadricula, i);

                    } else {

                        quadricula.classList.add("quadricula_tipo_2");

                    }

                }

                linha.appendChild(quadricula)

            }

    }*/

    /*for (var i = 0; i < areaDeJogo; i++) {

        var linha = document.createElement("div");

        linha.classList.add("linha");

        tabuleiro.appendChild(linha);

        for (var j = 0; j < areaDeJogo; j++) {

            var quadricula = document.createElement("div");

            quadricula.classList.add("quadricula")

            atribuirCoordenadas(quadricula, i, j)

            if (i == (areaDeJogo - 1) && j != (areaDeJogo - 1) && j != 0) {

                quadricula.classList.add("quadricula_texto");

                quadricula.innerText += j;

            } else if ((j == (areaDeJogo - 1) || j == 0)&& (i != (areaDeJogo - 1) && i != 0)) {

                quadricula.classList.add("quadricula_texto");

                quadricula.innerHTML += quadricula.id[0];

            } else if (i == 0 || j == 0) {

                quadricula.classList.add("quadricula_texto");

            }else {

                if (i != (areaDeJogo - 1) && j != (areaDeJogo - 1)) {

                    if (i % 2 == 0) {

                        if (j % 2 == 0) {

                            quadricula.classList.add("quadricula_tipo_2");

                        } else {

                            quadricula.classList.add("quadricula_tipo_1");

                            criarPeca(quadricula, i, j);

                        }

                    } else {

                        if (j % 2 == 0) {

                            quadricula.classList.add("quadricula_tipo_1");

                            criarPeca(quadricula, i);

                        } else {

                            quadricula.classList.add("quadricula_tipo_2");

                        }

                    }

                } else {

                    quadricula.classList.add("quadricula_texto");

                }

            }

            linha.appendChild(quadricula)

        }

    }*/

}





function criarPeca(quadricula, i, j) {

    var peca = document.createElement("div");

    peca.classList.add("peca");

    if (i < (areaDeJogo / 2) - 1) {

        peca.classList.add("vermelha");

    }

    if (i > (areaDeJogo / 2)) {

        peca.classList.add("preta");

    }

    quadricula.appendChild(peca);

}



function atribuirCoordenadas(quadricula, i, j) {

    var quadriculaID;

    switch (i) {

        case 0:

            quadriculaID = "0";

            break;

        case 1:

            quadriculaID = "A";

            break;

        case 2:

            quadriculaID = "B";

            break;

        case 3:

            quadriculaID = "C";

            break;

        case 4:

            quadriculaID = "D";

            break;

        case 5:

            quadriculaID = "E";

            break;

        case 6:

            quadriculaID = "F";

            break;

        case 7:

            quadriculaID = "G";

            break;

        case 8:

            quadriculaID = "H";

            break;

        case 9:

            quadriculaID = "I";

            break;

        case 10:

            quadriculaID = "J";

            break;

        case 11:

            quadriculaID = "K";

            break;

        case 12:

            quadriculaID = "L";

            break;

        case 13:

            quadriculaID = "M";

            break;

        case 14:

            quadriculaID = "N";

            break;

    }

    quadriculaID += j;

    quadricula.id = quadriculaID;

}
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
//função para mover as peças
/*var quadricula_selecionada = null;
var peca_selecionada = null;
//Novas variáveis para armazenar a pontuação
var pontos_pretas = 0;
var pontos_vermelhas= 0;

$(".quadricula").click(function() {
    var aI, aJ, nI, nJ, dI, dJ;
    var quadricula_anterior, peca_anterior;
    if (peca_selecionada != null) {
        aI = parseInt(quadricula_selecionada.substr(5, 1));
        aJ = parseInt(quadricula_selecionada.substr(7, 1));

        nI = parseInt($(this).attr("id").substr(5, 1));
        nJ = parseInt($(this).attr("id").substr(7, 1));

        dI = parseInt(((aI - nI) < 0 ? (aI - nI) * (-1) : (aI - nI)));
        dJ = parseInt(((aJ - nJ) < 0 ? (aJ - nJ) * (-1) : (aJ - nJ)));
    }

    $("#" + quadricula_selecionada).removeClass("quadricula_selecionada");
    quadricula_anterior = quadricula_selecionada;
    peca_anterior = peca_selecionada;
    quadricula_selecionada = $(this).attr("id");
    $("#" + quadricula_selecionada).addClass("quadricula_selecionada");
    peca_selecionada = $("#" + quadricula_selecionada).children("img").attr("id");

    if (peca_selecionada == null) {
        $("#info_peca_selecionada").text("NENHUMA PECA SELECIONADA");
        if (peca_anterior != null) {
            if (((peca_anterior.indexOf("preta") >= 0) && (nI > aI)) || ((peca_anterior.indexOf("vermelha") >= 0) && (nI < aI))) {
                var obj = $("#" + peca_anterior);
                if ((dI == 1) && (dJ == 1)) {
                    $("#" + casa_anterior).remove("#" + peca_anterior);
                    $("#" + casa_selecionada).append(obj);
                } else if ((dI == 2) && (dJ == 2)) {
                    if ((peca_anterior.indexOf("vermelha") >= 0)) {
                        var casa_meio = null, peca_meio = null;
                        if (nJ < aJ) {
                            casa_meio = "#casa_" + (nI + 1).toString() + "_" + (nJ + 1).toString();
                        } else {
                            casa_meio = "#casa_" + (nI + 1).toString() + "_" + (nJ - 1).toString();
                        }
                        if ($(quadricula_meio).children().size() > 0)
                            peca_meio = $(casa_meio).children("img");

                        if (peca_meio != null) {
                            $("#compila").append(peca_meio);
                            peca_meio.remove();
                            pontos_brancas++;
                            $("#info_pontos_vermelhas").text(pontos_vermelhas.toString());
                            $("#" + casa_anterior).remove("#" + peca_anterior);
                            $("#" + casa_selecionada).append(obj);
                        }
                    } else if ((peca_anterior.indexOf("preta") >= 0)) {
                        var casa_meio = null, peca_meio = null;
                        if (nJ < aJ) {
                            quadricula_meio = "#quadricula_" + (nI - 1).toString() + "_" + (nJ + 1).toString();
                        } else {
                            quadricula_meio = "#quadricula_" + (nI - 1).toString() + "_" + (nJ - 1).toString();
                        }
                        if ($(quadricula_meio).children().size() > 0)
                            peca_meio = $(quadricula_meio).children("img");
                        if (peca_meio != null) {
                            peca_meio.remove();
                            pontos_pretas++;
                            $("#info_pontos_pretas").text(pontos_pretas.toString());
                            $("#" + quadricula_anterior).remove("#" + peca_anterior);
                            $("#" + quadricula_selecionada).append(obj);
                        }
                    }
                }
            }
        }
    }
    else {
        $("#info_peca_selecionada").text(peca_selecionada.toString());
    }


    if (pontos_pretas == 12 || pontos_brancas == 12) {
        $("#info").html("fim do jogo");
    }
});
*/

