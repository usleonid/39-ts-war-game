import { Card, Suit } from "./types";

 
export const createDeck = ():Card[]=>{
    const deck = [];
    const suits:Suit[] = ['spades','clubs','diamonds','hearts'];
    for(let i=0 ; i<suits.length;i++){
        for(let j=1; j<=13;j++){
            deck.push({rank:j, suit:suits[i]});
        }
    }
    return deck;
}