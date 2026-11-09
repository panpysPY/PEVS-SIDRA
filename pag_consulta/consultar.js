const tabelas = document.querySelectorAll(".tabela-opcao");
const filtros = document.querySelectorAll(".tabela-filtros");

tabelas.forEach(tabela => {

    tabela.addEventListener("click", () => {

        const numeroTabela = tabela.dataset.tabela;

        // Remove a seleção de todas as tabelas
        tabelas.forEach(item => {
            item.classList.remove("ativa");
        });

        // Remove os filtros de todas
        filtros.forEach(filtro => {
            filtro.classList.remove("ativa");
        });


        // Ativa a tabela clicada
        tabela.classList.add("ativa");

        // Ativa os filtros correspondentes
        document
            .querySelector(`#filtros-tabela-${numeroTabela}`)
            .classList.add("ativa");

    });

});