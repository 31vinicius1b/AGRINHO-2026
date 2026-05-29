function calcularImpacto() {
    // Pega o valor selecionado no lise/select do HTML
    const tecnicaSelecionada = document.getElementById('tecnica').value;
    const resultadoDiv = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    // Variáveis para guardar as respostas
    let mensagem = "";

    // Lógica de decisão baseada na escolha do usuário
    if (tecnicaSelecionada === "0") {
        alert("Por favor, selecione uma técnica válida para calcular!");
        resultadoDiv.classList.add('hidden');
        return;
    } else if (tecnicaSelecionada === "gotejamento") {
        mensagem = "A irrigação por gotejamento direciona a água direto para a raiz. Isso gera uma **economia de até 60% de água** em comparação ao manejo tradicional por aspersão, além de reduzir o gasto com energia elétrica das bombas.";
    } else if (tecnicaSelecionada === "cobertura") {
        mensagem = "Manter o solo coberto com palhada (Plantio Direto) reduz a evaporação da água da chuva. O solo retém umidade por mais tempo, exigindo **menos turnos de rega** e protegendo a terra contra a erosão.";
    } else if (tecnicaSelecionada === "reuso") {
        mensagem = "Estruturas de captação de chuva em galpões podem armazenar milhares de litros. Essa água pode ser usada para a limpeza de maquinários e manejo animal, reduzindo o uso de poços artesianos em **até 35%**.";
    }

    // Exibe o resultado na tela tirando a classe 'hidden' (escondido)
    textoResultado.innerHTML = mensagem;
    resultadoDiv.classList.remove('hidden');
}