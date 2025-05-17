// Métodos

const dog = {
    raca:'SRD',
    uivar: function() {
        console.log("Auuuuuuuuuuu!");
    },
    rosnar: function() {
        console.log("Grrrrrrrrrmmm");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raca é " + this.raca;
    }

}


console.log(dog.raca);
 
dog.setRaca('Pitbull');

console.log(dog.raca);

console.log(dog.getRaca());
