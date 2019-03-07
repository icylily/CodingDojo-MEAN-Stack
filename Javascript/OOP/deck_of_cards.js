function Card(suit,value){
    this.suit = suit;
    this.value = value;
    
    str_name = {
        1: "Ace",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Jack",
        12: "Queen",
        13: "King",
    }
    this.name = str_name[this.value];
    this.showcard = function(){
        console.log("This is a "+ this.suit +" "+ this.name);
    }

}
// card1 = new Card("Hearts",3);
// card1.showcard();

function Deck(){
    this.cards = [];
    var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    suits.forEach(suit => {
            for (let i =1; i<=13;i++){
                this.cards.push(new Card(suit,i));
            }
    });
    this.get_card = function(){
        random_index=Math.floor(Math.random() * (52));
        random_card = this.cards[random_index];
        this.cards.splice(random_index,1);
        return random_card;
    }

    this.shuffle = function () {
        var m = this.cards.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }

        return this.cards;
    }
    this.reset = function(){
        this.cards = [];
        suits.forEach(suit => {
            for (let i = 1; i <= 13; i++) {
                this.cards.push(new Card(suit, i));
            }
        });
    }
}
// deck1 = new Deck();
// console.log(deck1);
// deck1.get_card().showcard();
// deck1.get_card().showcard();
// deck1.get_card().showcard();
// deck1.get_card().showcard();
// deck1.get_card().showcard();
// console.log(deck1.cards.length);
// // deck1.shuffle();
// // console.log(deck1);
// deck1.reset();
// console.log(deck1.cards.length);

function Player(name){
    this.name=name;
    this.hand = [];
    this.take_card = function(deck){
        card = deck.get_card();
        card.showcard();
        console.log(this.name + " got " +card.suit +" "+card.name);
        return card;
    }
    this.save_card = function(card){
        this.hand.push(card);
        return this;
    }
    this.discard_card =function(card){
        for(let i=0;i<this.hand.length;i++){
            if (this.hand[i] == card){
                this.hand.splice(i, 1);  
                console.log("Fond and discarded the card!"); 
            }
        }
        console.log("Can't find this card!");
    }
    return this;
}
deck1 = new Deck();
console.log(deck1.cards.length);
bob = new Player("Bob");
// bob.take_card(deck1);
console.log(bob.hand);
bob.save_card(bob.take_card(deck1));
console.log(bob.hand);