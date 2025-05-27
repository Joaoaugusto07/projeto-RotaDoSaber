   
        const SUPABASE_URL = "https://wofpvlmkclgdpjeugiid.supabase.co";
        const SUPABASE_ANON_KEY = ;

        const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        // Função para listar livros
        async function listarLivros() {
            let { data, error } = await supabaseClient.from("BOOKS").select("*");

            if (error) {
                alert("Erro ao listar livros: " + error.message);
            } else {
                let lista = document.getElementById("listaLivros");
                lista.innerHTML = "";
                data.forEach(livro => {
                    let item = document.createElement("li");
                    item.innerHTML = `
                        ${livro.id}: "${livro.titulo}" - ${livro.autor} (${livro.ano_publicacao})
                        <button class="delete-button" onclick="excluirLivro(${livro.id})">Vender</button>
                    `;
                    lista.appendChild(item);
                });
            }
        }

        // Função para excluir um livro
        async function excluirLivro(id) {
            if (confirm("Tem certeza que deseja excluir este livro?")) {
                let { error } = await supabaseClient.from("BOOKS").delete().eq("id", id);

                if (error) {
                    alert("Erro ao excluir livro: " + error.message);
                } else {
                    alert("Livro excluído com sucesso!");
                    listarLivros(); 
                }
            }
        }

        
        document.addEventListener("DOMContentLoaded", listarLivros);