// * Данные об игроке на сервере
class PlayerData {

    constructor(socket) {
        this.socket = socket;
        // * Присваеваем случайное имя
        this.name = "Player " + Math.randomInt(1000);
        this.mapId = 0;
        this.actorId = 0;
        this.index = 0;
        this.scene = "";
        this.characterReady = false;
        this.isMapMaster = false;
        // * Участвует в событии (ID)
        this.onEvent = 0;
        this.onCommonEvent = 0;
        this.isReadyInRoom = false;
    }

    id () {
        return this.socket.id;
    }

    isOnMapScene() {
        return this.scene == "map";
    }

    isMySocket(socket) {
        return (this.socket == socket);
    }

    // * Данные для отправки клиентам
    getNetworkData() {
        return {
            "name": this.name,
            "id": this.id(),
            "index": this.index,
            "scene": this.scene,
            "actorId": this.actorId,
            "mapId": this.mapId,
            "characterReady": this.characterReady,
            "isMapMaster": this.isMapMaster,
            "onEvent": this.onEvent,
            "onCommonEvent": this.onCommonEvent,
            "isReadyInRoom": this.isReadyInRoom
        };
    }

}


module.exports.PlayerData = PlayerData;