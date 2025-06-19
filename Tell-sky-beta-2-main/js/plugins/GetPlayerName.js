/*:
 * @plugindesc Busca o nome do jogador do servidor e atualiza no jogo.
 * @author SeuNome
 * 
 * @param ServerURL
 * @text URL do Servidor
 * @desc URL do seu backend (ex: http://localhost:5000)
 * @default http://localhost:5000
 * 
 * @param UserID
 * @text ID do Usuário
 * @desc O ID do jogador salvo no banco de dados.
 * @default 65af0c2b12e78a0012345678
 * 
 * @help
 * Plugin que busca o nome do jogador no banco de dados e atualiza no jogo.
 * 
 * Comando para usar no RPG Maker:
 *    Plugin Command: GetPlayerName
 */

(() => {
    const parameters = PluginManager.parameters('GetPlayerName');
    const SERVER_URL = parameters['ServerURL'];
    const USER_ID = parameters['UserID'];

    // Função para buscar o nome do jogador no servidor
    function fetchPlayerName() {
        const url = `${SERVER_URL}/api/auth/get-name/${USER_ID}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.name) {
                    console.log(`Nome do jogador recebido: ${data.name}`);
                    $gameActors.actor(1).setName(data.name); // Atualiza o nome do ator 1
                } else {
                    console.error('Erro ao obter o nome:', data.error);
                }
            })
            .catch(error => console.error('Erro ao conectar ao servidor:', error));
    }

    // Comando do plugin para buscar o nome
    PluginManager.registerCommand('GetPlayerName', fetchPlayerName);
})();
