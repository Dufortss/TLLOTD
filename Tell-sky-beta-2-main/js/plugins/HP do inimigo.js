/*:
 * @plugindesc Exibe a barra de HP dos inimigos acima dos inimigos na batalha.
 * @author Seu Nome
 *
 * @param barWidth
 * @text Largura da Barra
 * @desc A largura da barra de HP dos inimigos.
 * @type number
 * @default 200
 *
 * @param barHeight
 * @text Altura da Barra
 * @desc A altura da barra de HP dos inimigos.
 * @type number
 * @default 20
 *
 * @param barColor
 * @text Cor da Barra
 * @desc Cor de fundo da barra de HP.
 * @default #ff0000
 *
 * @param hpColor
 * @text Cor do HP
 * @desc Cor da parte preenchida da barra de HP.
 * @default #00ff00
 *
 * @help
 * Este plugin exibe uma barra de HP acima dos inimigos na tela de batalha.
 * O tamanho e as cores da barra podem ser ajustados nas configurações do plugin.
 */

(function() {
    const parameters = PluginManager.parameters('EnemyHPBar');
    const barWidth = Number(parameters['barWidth'] || 200);
    const barHeight = Number(parameters['barHeight'] || 20);
    const barColor = String(parameters['barColor'] || '#ff0000');
    const hpColor = String(parameters['hpColor'] || '#00ff00');

    class EnemyHPBar {
        constructor() {
            this._sprites = [];
        }

        initialize() {
            this._sprites = [];
        }

        update() {
            this._sprites.forEach(sprite => sprite.update());
        }

        addEnemySprite(enemy) {
            let sprite = new Sprite();
            sprite.bitmap = new Bitmap(barWidth, barHeight);
            sprite.x = enemy.screenX() - (barWidth / 2);
            sprite.y = enemy.screenY() - 60;
            this._sprites.push(sprite);
            BattleManager._spriteset.addChild(sprite);
            this.drawBar(sprite, enemy);
        }

        drawBar(sprite, enemy) {
            const hpRate = enemy.hp / enemy.mhp;
            sprite.bitmap.fillRect(0, 0, barWidth, barHeight, barColor);
            sprite.bitmap.fillRect(0, 0, barWidth * hpRate, barHeight, hpColor);
        }

        removeAll() {
            this._sprites.forEach(sprite => {
                BattleManager._spriteset.removeChild(sprite);
                sprite.bitmap = null;
                sprite = null;
            });
            this._sprites = [];
        }
    }

    let enemyHPBar = new EnemyHPBar();

    const _BattleManager_startBattle = BattleManager.startBattle;
    BattleManager.startBattle = function() {
        _BattleManager_startBattle.call(this);
        enemyHPBar.initialize();
        this._spriteset.battleField().forEach(enemy => enemyHPBar.addEnemySprite(enemy));
    };

    const _BattleManager_updateBattleProcess = BattleManager.updateBattleProcess;
    BattleManager.updateBattleProcess = function() {
        _BattleManager_updateBattleProcess.call(this);
        enemyHPBar.update();
    };

    const _BattleManager_endBattle = BattleManager.endBattle;
    BattleManager.endBattle = function(result) {
        _BattleManager_endBattle.call(this, result);
        enemyHPBar.removeAll();
    };
})();
