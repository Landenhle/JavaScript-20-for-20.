let prawns = prompt('How many prawn orders would you like?');
prawns = Number(prawns);
let salmon = prompt('How many slamon orders would you like?');
salmon = Number(salmon);

class Menu{
    constructor(prawns, salmon){
        this.prawns = prawns;
        this.salmon = salmon;
    }

    price(){
        console.log('The total cost is R',this.prawns * prawns,'for the prawn dish and R',this.salmon * salmon,'for the salmon dish.');
    }
}

let order1 = new Menu(250, 300);
order1.price();

// You can also use get() and set() to comlicate things for yourself :) .