    
        const SUPABASE_URL = "https://wofpvlmkclgdpjeugiid.supabase.co";
        const SUPABASE_ANON_KEY = ;
        
        
        const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
        // Função para adicionar um livro
        async function adicionarLivro() {
            let livro = {
                titulo: document.getElementById("titulo").value,
                autor: document.getElementById("autor").value,
                ano_publicacao: parseInt(document.getElementById("ano_publicacao").value),
                isbn: document.getElementById("isbn").value,
                genero: document.getElementById("genero").value,
                editora: document.getElementById("editora").value,
                descricao: document.getElementById("descricao").value,
                created_at: new Date().toISOString(),
                user_id: user_id,
            };
    
            let { data, error } = await supabaseClient.from("BOOKS").insert([livro]);
    
            if (error) {
                alert("Erro ao adicionar livro: " + error.message);
            } else {
                alert("Livro adicionado com sucesso! Leve ao Ponto de troca.");
                document.querySelector("form").reset();
                listarLivros();
            }
        }
    
        // Função para listar c/ID livros
        async function listarLivrosDoUsuario () {
            let { data, error } = await supabaseClient.auth.hetUser;
            if (userError || !user) {
                alert("error ao obter usuario logado");
                return;
            }
    
            const userId = user.id;
            
            let { data, error} = await supabaseClient
            .from("BOOKS")
            .select("*")
            .eq("user+id", userId);

            if (error) {
                alert("Erro ao listar livros : " + error.message);
            } else {
                let lista = document.getElementById("listaLivros");
                lista.innerHTML = "";
                data.forEach(livro => {
                    let item = document.createElement("li");
                    item.innerText = `${livro.id}: "${livro.titulo}" - ${livro.autor} (${livro.ano_publicacao})`;
                    lista.appendChild(item);
                });
            }
        }
    
        
        document.addEventListener("DOMContentLoaded", listarLivros);