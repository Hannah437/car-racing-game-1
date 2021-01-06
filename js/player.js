class Player{
 constructor(){

 }
 getCount(){
     database.ref('playerCount').on("value", function(data){
         playerCount = data.val();
     })
 }
    updateCount(x){
        database.ref('/').update({
            playerCount : x
        })
    }
    update(x){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name : x
        })
    }
 
}