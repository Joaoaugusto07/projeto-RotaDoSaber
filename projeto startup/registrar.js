const SUPABASE_URL = "https://wofpvlmkclgdpjeugiid.supabase.co";
        const SUPABASE_ANON_KEY = ;
        
        
        const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
        // Função para Registrar usuario
        async function RegistrarUsuario() {
           
               const nome = document.getElementById("nome").value;
               const email =  document.getElementById("email").value;
               const senha = document.getElementById("senha").value;
               const confirmarSenha = document.getElementById("confirmarSenha").value;
                //created_at: new Date().toISOString() usado apenas para objeto 
            
    
            if (senha !== confirmarSenha){
                alert ("As senhas não estão iguais");
                return;
            }
            const { data, error } = await supabaseClient.auth.signUp({
                
                email: email,
                password: senha,
                options: {
                    data: {
                        nome: nome 
                    }
                }
            });
            if (error) {
                alert("Erro ao registrar usuario: " + error.message);
            } else {
                alert("Usuário registrado com sucesso! Verifique seu e-mail para confirmar o cadastro.");
                document.querySelector("form").reset()
                window.location.href = "index.html";
            }

        }
    