const SUPABASE_URL = "https://wofpvlmkclgdpjeugiid.supabase.co";
const SUPABASE_ANON_KEY = ""; 

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função para login
async function LoginUsuario() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: senha
  });

  if (error) {
    alert("Erro ao fazer login: " + error.message);
  } else {
    alert("Login realizado com sucesso!");
    
    window.location.href = "index.html";
  }
}