

    const caixas = document.querySelectorAll('.caixa');


    caixas.forEach(caixa => {
        caixa.addEventListener('click', function() {
            this.classList.remove('todos');
            this.classList.add('selecionada');
        });
    });

    // Seleciona todas as caixas
    function selecionarTodos() {
        caixas.forEach(caixa => {
            caixa.classList.add('todos');
        });
    }

    // Remove a seleção de todas as caixas
    function removerTodos() {
        caixas.forEach(caixa => {
            caixa.classList.remove('todos',"selecionada");
        });
    }
