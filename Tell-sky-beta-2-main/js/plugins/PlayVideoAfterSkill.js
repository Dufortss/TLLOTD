/*:
 * @plugindesc Reproduz um vídeo após a execução de uma habilidade.
 * @author Seu Nome
 *
 * @param VideoFile
 * @desc Nome do arquivo de vídeo (sem extensão) que será reproduzido.
 * @default nome_do_video
 *
 * @help
 * Este plugin reproduz um vídeo após o uso de uma habilidade. 
 * Para usar, adicione o nome do vídeo na caixa de parâmetros.
 * O vídeo deve estar na pasta "movies" do seu projeto.
 */

(function() {
    var parameters = PluginManager.parameters('PlayVideoAfterSkill');
    var videoFile = parameters['VideoFile'] || 'nome_do_video';

    var _Game_Action_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        _Game_Action_apply.call(this, target);
        
        // Verifica se a ação é de habilidade
        if (this.item() && this.item().itypeId === 1) {
            this.playVideo();
        }
    };

    Game_Action.prototype.playVideo = function() {
        // Reproduz o vídeo após um pequeno atraso
        setTimeout(() => {
            SceneManager.push(Scene_Video);
            SceneManager.prepareNextScene(videoFile);
        }, 1000); // Atraso de 1 segundo
    };

    function Scene_Video() {
        this.initialize.apply(this, arguments);
    }

    Scene_Video.prototype = Object.create(Scene_Base.prototype);
    Scene_Video.prototype.constructor = Scene_Video;

    Scene_Video.prototype.initialize = function() {
        Scene_Base.prototype.initialize.call(this);
    };

    Scene_Video.prototype.create = function() {
        Scene_Base.prototype.create.call(this);
        this.createVideo();
    };

    Scene_Video.prototype.createVideo = function() {
        this._video = document.createElement('video');
        this._video.src = 'movies/' + videoFile + '.mp4'; // Certifique-se de que o vídeo está no formato mp4
        this._video.autoplay = true;
        this._video.onended = () => {
            SceneManager.pop();
        };
        this.addChild(this._video);
    };

    Scene_Video.prototype.update = function() {
        Scene_Base.prototype.update.call(this);
        // Atualiza o vídeo se necessário
    };
})();
