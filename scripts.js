// simula o tratamento dos dados do form presente em contact.html
const postFormContactme = (event) => {
    // Evita o envio do formulário de forma padrão
    event.preventDefault(); 
    
    // Pega os valores dos elementos preenchidos nos inputs, faz a busca por "id" 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // visualizar a coleta de informações pelo console do navegador
    // No navegar apertar F12, visualizar na aba console as informações coletadas serem exibidas após clicar no botão que chama essa função
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Telefone:', phone);
    console.log('Mensagem:', message);

    // Limpar os campos do formulário
    // pegar os inputs pelos "id" e inserir o valor ''
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}