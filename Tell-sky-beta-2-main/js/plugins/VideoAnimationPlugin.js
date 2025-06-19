(function() {
    // Sobrescreve o método para iniciar o uso de uma habilidade
    const _Game_Action_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        _Game_Action_apply.call(this, target);
        if ($gameParty.inBattle() && this.item().meta.VideoAnimation) {
            const videoName = this.item().meta.VideoAnimation;
            BattleManager.playVideoAnimation(videoName);
        }
    };

    // Função para reproduzir o vídeo
    BattleManager.playVideoAnimation = function(videoName) {
        const videoPath = 'movies/' + videoName + '.webm';
        console.log("Tentando reproduzir vídeo em: " + videoPath); // Log do caminho do vídeo
        if (videoExists(videoPath)) { // Verifica se o vídeo existe
            console.log("Vídeo encontrado, reproduzindo..."); // Log se o vídeo foi encontrado
            Graphics.playVideo(videoPath);
        } else {
            console.error("Vídeo não encontrado: " + videoPath); // Log de erro
        }
    };

    // Função que verifica a existência do arquivo de vídeo
    function videoExists(videoPath) {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', videoPath, false);
        xhr.send();
        console.log("Verificando existência do vídeo: " + videoPath); // Log de verificação
        return xhr.status !== 404; // Retorna verdadeiro se o vídeo existe
    }

    // Adiciona o método para controlar a reprodução de vídeos
    Graphics.playVideo = function(src) {
        if (!this._video) {
            this._createVideo(); // Cria o elemento de vídeo se não existir
        }
        this._video.src = src;
        this._video.style.display = 'block'; // Garante que o vídeo esteja visível
        this._video.oncanplay = function() {
            console.log("O vídeo está pronto para ser reproduzido."); // Log de prontidão
        };
        this._video.onplay = function() {
            console.log("O vídeo começou a reproduzir."); // Log de início
        };
        this._video.onended = this._onVideoEnd.bind(this);
        this._video.onerror = this._onVideoError.bind(this);
        this._video.load();
        this._video.play();
    };

    // Função chamada quando o vídeo termina
    Graphics._onVideoEnd = function() {
        this._video.style.display = 'none'; // Esconde o vídeo quando termina
        console.log("Vídeo terminado."); // Log de término
    };

    // Função chamada caso haja erro na reprodução do vídeo
    Graphics._onVideoError = function() {
        console.error("Erro ao carregar o vídeo: " + this._video.src);
        this._onVideoEnd();  // Finaliza mesmo em caso de erro
    };

    // Cria o elemento de vídeo, se não existir
    Graphics._createVideo = function() {
        this._video = document.createElement('video');
        console.log("Elemento de vídeo criado."); // Log de criação do vídeo
        this._video.style.position = 'absolute';
        this._video.style.top = '0';
        this._video.style.left = '0';
        this._video.style.width = '100%';
        this._video.style.height = '100%';
        this._video.style.zIndex = 10;
        this._video.setAttribute('playsinline', ''); // Permite reprodução em dispositivos móveis
        document.body.appendChild(this._video); // Adiciona o vídeo ao corpo do documento
    };

    // Verifica se o vídeo está sendo reproduzido
    Graphics.isVideoPlaying = function() {
        return this._video && !this._video.ended && !this._video.paused;
    };
})();
