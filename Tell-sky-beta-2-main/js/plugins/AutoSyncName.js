/*:
 * @plugindesc Sincroniza automaticamente o nome do jogador após o login no HTML.
 * @author SeuNome
 * 
 * @help
 * Este plugin obtém o nome do jogador salvo no LocalStorage e atualiza automaticamente no jogo.
 */

(() => {
    function atualizarNomeJogador() {
        const nomeSalvo = localStorage.getItem('playerName');
        
        if (nomeSalvo) {
            console.log("Nome sincronizado:", nomeSalvo);
            $gameActors.actor(1).setName(nomeSalvo); // Altera o nome do personagem 1
        } else {
            console.log("Nenhum nome salvo encontrado.");
        }
    }

    // Atualiza o nome automaticamente na inicialização da cena do mapa
    const _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function() {
        _Scene_Map_start.call(this);
        atualizarNomeJogador();
    };

    // Verificação contínua do nome no LocalStorage (opcional)
    setInterval(atualizarNomeJogador, 5000); // Atualiza a cada 5 segundos, caso haja mudança no LocalStorage

    // Permite sincronizar via comando externo
    window.RPGMakerMV = {
        updatePlayerName: atualizarNomeJogador
    };
})();
