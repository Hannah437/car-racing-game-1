class Game{
    constructor(){

    }

    getState(){
        database.ref('gameState').on("value", function(data){
            gameState = data.val();
        })
    }

    updateState(X){
        database.ref('/').update({
            gameState : X
        })
    }
}