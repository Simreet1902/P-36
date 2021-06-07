class Food{
    constructor(foodStock,lastFed){
    this.foodStock = 0;
    this.lastFed = null;
    this.image = loadImage("images/Milk.png");
    }

    getFoodStock(){
      var foodStockRef  = database.ref('food');
      gameStateRef.on("value",function(data){
         food = data.val();
      })
     
    }

    update(foodS){
      database.ref('food').update({
        food : foodStock
      })
    }
  

    
     display(){
      var x =80, y = 100;
      imageMode(CENTER);
      image(this.image,770,220,70,70);
       if(this.foodStock!=0){
         for(var i=0;i<this.foodStock;i++){
           if(i%10 ==0){
             x=80;
             y = y+50;
           }
           image(this.image,x,y,50,50);
           x = x+30;
         }
       }
    }
  }
