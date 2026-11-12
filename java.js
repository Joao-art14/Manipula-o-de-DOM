<script>
    // Seleciona todas as caixas
    const caixas = document.querySelectorAll('.caixa');

    // Clique individual nas caixas
    caixas.forEach(caixa => {
        caixa.addEventListener('click', function() {
            this.classList.toggle('selecionada');
        });
    });

    // Seleciona todas as caixas
    function selecionarTodos() {
        caixas.forEach(caixa => {
            caixa.classList.add('selecionada');
        });
    }

    // Remove a seleção de todas as caixas
    function removerTodos() {
        caixas.forEach(caixa => {
            caixa.classList.remove('selecionada');
        });
    }
</script>