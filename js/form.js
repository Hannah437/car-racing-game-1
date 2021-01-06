class Form{
    constructor(){

     this.title = createElement('h1', 'car Racing Game');
     this.title.position(windowWidth/2-100, 100);
     this.input = createInput('name');
     this.input.position(windowWidth/2-100, 200);
     this.button = createButton('play');
     this.button.position(windowWidth/2-50, 250);
    }
    display(){
       this.button.mousePressed(()=>{
           var name = this.input.value();
           this.input.hide();
           this.button.hide();
           this.title.hide();
           this.greeting1 = createElement('h3', "hello "+ name);
           this.greeting1.position(windowWidth/2-50, 100);
           this.greeting2 = createElement('h3');
           this.greeting2.html('wait for the other players to join');
           this.greeting2.position(windowWidth/2-100, 200);

           playerCount = playerCount+1;
           player.updateCount(playerCount);
           player.update(name);
       })
    }
}