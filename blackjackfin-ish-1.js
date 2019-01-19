function cardPool(){
  let J = 10;
  let Q = 10;
  let K = 10;
  let A = 1;
  let rCardPool = [2,3,4,5,6,7,8,9,10,J,Q,K,A];
  return rCardPool;
}


function dealCards(){
  let A = 1;
  
  let pCard1 = cardPool()[Math.floor(Math.random() * cardPool().length)];
  let dCard1 = cardPool()[Math.floor(Math.random() * cardPool().length)];
  let pCard2 = cardPool()[Math.floor(Math.random() * cardPool().length)];
  let dCard2 = cardPool()[Math.floor(Math.random() * cardPool().length)];
  
  var pTotal = pCard1 + pCard2;
  let dTotal = dCard1 + dCard2; //var?
  
  // what happens when you have an Ace and 2-9 card.
  
  for (i = 0; i <= pCard2; i++) {
    if (pCard1 == A && pCard2 != A) {
      pTotal = [[i+1], [i+11]];
    }
  }
  
  for (i = 0; i <= pCard1; i++) {
    if (pCard2 == A && pCard1 != A) {
      pTotal = [[i+1], [i+11]];
    }
  }
  
  for (i = 0; i <= dCard2; i++) {
    if (dCard1 == A && dCard2 != A) {
      dTotal = [[i+1], [i+11]];
    }
  }
  
  for (i = 0; i <= dCard1; i++) {
    if (dCard2 == A && dCard1 != A) {
      dTotal = [[i+1], [i+11]];
    }
  }
  
  // what happens when you have BlackJack.
  
  if (pCard1 == 10 && pCard2 == A) {
      pTotal = 21;
    } else if (pCard1 == A && pCard2 == 10) {
      pTotal = 21;
    } else if (dCard1 == 10 && dCard2 == A) {
      dTotal = 21;
    } else if (dCard1 == A && dCard2 == 10) {
      dTotal = 21;
    }

  // what happens when you have 2 Aces.
  
  if (pCard1 == A && pCard2 == A) {
    pTotal = [2,12];
  } else if (dCard1 == A && dCard2 == A) {
    dTotal = [2,12];
  }
  
  return {pT: pTotal,pC1: pCard1,pC2: pCard2, dT:dTotal, dC1: dCard1, dC2:dCard2};
} 

var cards;
cards = dealCards();
// test dealt cards
console.log(cards);
var allHands;

var allHandsReal;


function playBJ() {
  let state = "Split";
  var pTotal = cards.pT;
  let dTotal = cards.dT;
  let pCard1;
  let pCard2;
  let dCard1 = cards.dC2;
  let pCardNew;
  let pCardNew2;
  let pCardNew3;
  let pCardNew4;
  let pCardNew5;
  let pCardNew6;
  let pTotalS;
  var lossTotal = 0;
  var winTotal = 0;
  var pushTotal = 0; // let a = 1?? in each case fix
  var noHands = 0;
  var A = 1;

   while (state != "Done") {  //start with splits , add in the effect of aces(at end?)
    switch (state) {
      case "Split":
        pTotal = cards.pT;
        pCard1 = cards.pC1;
        pCard2 = cards.pC2;
        dCard1 = cards.dC1;
        pTotalS = Array(6)
        pCardNew = cardPool()[Math.floor(Math.random() * cardPool().length)];
        pCardNew2 = cardPool()[Math.floor(Math.random() * cardPool().length)];
        pCardNew3 = cardPool()[Math.floor(Math.random() * cardPool().length)];
        pCardNew4 = cardPool()[Math.floor(Math.random() * cardPool().length)];
        pCardNew5 = cardPool()[Math.floor(Math.random() * cardPool().length)];
        pCardNew6 = cardPool()[Math.floor(Math.random() * cardPool().length)];
        A = 1;


        console.log("Player Total: " + pTotal + "| Dealer Upcard: " + dCard1);

//use "3,131" to fix

          if (pTotal[0] == 2 && pTotal[1] == 12) {
          pTotal = [[1,11],[1,11]];
          pTotalS[0] = pTotal[0];
          pTotalS[1] = pTotal[1];
          // pTotalS[0] += pCardNew;
          // pTotalS[1] += pCardNew2;
          
          for (i = 0; i <= pCardNew; i++) {
            if (pCardNew != A) {
              pTotalS[0] = [[i+1], [i+11]];
            }
          }
          
          for (i = 0; i <= pCardNew2; i++) {
            if (pCardNew2 != A) {
              pTotalS[1] = [[i+1], [i+11]];
            }
          }
          
          if (pCardNew == A) {
            pTotalS[2] = pTotal[0];
              for (i = 0; i <= pCardNew3; i++) {
                if (pCardNew3 != A) {
                  pTotalS[2] = [[i+1], [i+11]];
               } else {
                 pTotalS[3] = pTotal[0];
                  for (i = 0; i <= pCardNew4; i++) {
                    if (pCardNew4 != A) {
                      pTotalS[3] = [[i+1], [i+11]];
                    }
                  }
               }
             }
          }
            
          if ((pCardNew == A) && (pCardNew2 == A)) {
            pTotalS[4] = pTotal[0];
              for (i = 0; i <= pCardNew5; i++) {
                if (pCardNew5 != A) {
                  pTotalS[4] = [[i+1], [i+11]];
               } else {
                 pTotalS[5] = pTotal[0];
                  for (i = 0; i <= pCardNew6; i++) {
                    if (pCardNew6 != A) {
                      pTotalS[5] = [[i+1], [i+11]];
                    }
                  }
               }
             }
          }
        function totalXHands() {
          return pTotalS;
        }
        allHands = totalXHands();  
        
        state = "Hit"; 
            
     } else if ((pCard1 == 2 && pCard2 == 2) && dCard1 < 8) {
       pTotal = [2,2];
       pTotalS[0] = pTotal[0];
       pTotalS[1] = pTotal[1];
      //  pTotalS[0] += pCardNew;
      //  pTotalS[1] += pCardNew2;
       
        for (i = 0; i <= pCardNew; i++) {
            if (pCardNew != 2 || pCardNew != A) {
              pTotalS[0] = i + 2;
            } else if (pCardNew == A) {
              pTotalS[0] = [3,13];
            }
          }
         for (i = 0; i <= pCardNew2; i++) {
            if (pCardNew2 != 2 || pCardNew2 != A) {
              pTotalS[1] = i + 2;
            } else if (pCardNew2 == A) {
              pTotalS[1] = [3,13];
            }
          }
         if (pCardNew == 2) {
            pTotalS[2] = pTotal[0];
              for (i = 0; i <= pCardNew3; i++) {
                if (pCardNew3 != 2 && pCardNew3 != A) {
                  pTotalS[2] = i + 2;
               } else if (pCardNew3 == A) {
                 pTotalS[2] = [3,13];
               } else {
                  pTotalS[3] = pTotal[0];
                   for (i = 0; i <= pCardNew4; i++) {
                    if (pCardNew4 != 2 && pCardNew4 != A) {
                      pTotalS[3] = i + 2;
                    } else if (pCardNew3 == A) {
                      pTotalS[3] = [3,13];
                    }
                  }
               }
             }
          }
         if ((pCardNew == 2) && (pCardNew2 == 2)) {
            pTotalS[4] = pTotal[0];
              for (i = 0; i <= pCardNew5; i++) {
                if (pCardNew5 != 2 && pCardNew5 != A) {
                  pTotalS[4] = i + 2;
               } else if (pCardNew5 == A) {
                 pTotalS[4] = [3,13];
               } else {
                  pTotalS[5] = pTotal[0];
                   for (i = 0; i <= pCardNew6; i++) {
                    if (pCardNew6 != 2 && pCardNew6 != A) {
                      pTotalS[5] = i + 2;
                    } else if (pCardNew6 == A) {
                      pTotalS[5] = [3,13];
                    }
                  }
               }
             }
          }
       function totalXHands() {
          return pTotalS;
        }
        allHands = totalXHands();  
       
       state = "Hit";
       
     } else if ((pCard1 == 3 && pCard2 == 3) && dCard1 < 8) {
       pTotal = [3,3];
       pTotalS[0] = pTotal[0];
       pTotalS[1] = pTotal[1];
      //  pTotalS[0] += pCardNew;
      //  pTotalS[1] += pCardNew2;
       
        for (i = 0; i <= pCardNew; i++) {
            if (pCardNew != 3 || pCardNew != A) {
              pTotalS[0] = i + 3;
            } else if (pCardNew == A) {
              pTotalS[0] = [4,14];
            }
          }
         for (i = 0; i <= pCardNew2; i++) {
            if (pCardNew2 != 3 || pCardNew2 != A) {
              pTotalS[1] = i + 3;
            } else if (pCardNew2 == A) {
              pTotalS[1] = [4,14];
            }
          }
         if (pCardNew == 3) {
            pTotalS[2] = pTotal[0];
              for (i = 0; i <= pCardNew3; i++) {
                if (pCardNew3 != 3 && pCardNew3 != A) {
                  pTotalS[2] = i + 3;
               } else if (pCardNew3 == A) {
                 pTotalS[2] = [4,14];
               } else {
                  pTotalS[3] = pTotal[0];
                   for (i = 0; i <= pCardNew4; i++) {
                    if (pCardNew4 != 3 && pCardNew3 != A) {
                      pTotalS[3] = i + 3;
                    } else if (pCardNew3 == A) {
                      pTotalS[3] = [4,14];
                    }
                  }
               }
             }
          }
       if ((pCardNew == 3) && (pCardNew2 == 3)) {
            pTotalS[4] = pTotal[0];
              for (i = 0; i <= pCardNew5; i++) {
                if (pCardNew5 != 3 && pCardNew5 != A) {
                  pTotalS[4] = i + 3;
               } else if (pCardNew5 == A) {
                 pTotalS[4] = [4,14];
               } else {
                  pTotalS[5] = pTotal[0];
                   for (i = 0; i <= pCardNew6; i++) {
                    if (pCardNew6 != 3 && pCardNew6 != A) {
                      pTotalS[5] = i + 3;
                    } else if (pCardNew6 == A) {
                      pTotalS[5] = [4,14];
                    }
                  }
               }
             }
          }
       function totalXHands() {
          return pTotalS;
        }
        allHands = totalXHands();  
       
       state = "Hit";
       
     } else if ((pCard1 == 4 && pCard2 == 4) && (dCard1 > 4 && dCard1 < 7)) { //fix for 4
       pTotal = [4,4];
       pTotalS[0] = pTotal[0];
       pTotalS[1] = pTotal[1];
      //  pTotalS[0] += pCardNew;
      //  pTotalS[1] += pCardNew2;
       
        for (i = 0; i <= pCardNew; i++) {
            if (pCardNew != 4 || pCardNew != A) {
              pTotalS[0] = i + 4;
            } else if (pCardNew == A) {
              pTotalS[0] = [5,15];
            }
          }
         for (i = 0; i <= pCardNew2; i++) {
            if (pCardNew2 != 4 || pCardNew2 != A) {
              pTotalS[1] = i + 4;
            } else if (pCardNew2 == A) {
              pTotalS[1] = [5,15];
            }
          }
         if (pCardNew == 4) {
            pTotalS[2] = pTotal[0];
              for (i = 0; i <= pCardNew3; i++) {
                if (pCardNew3 != 4 && pCardNew3 != A) {
                  pTotalS[2] = i + 4;
               } else if (pCardNew3 == A) {
                 pTotalS[2] = [5,15];
               } else {
                  pTotalS[3] = pTotal[0];
                   for (i = 0; i <= pCardNew4; i++) {
                    if (pCardNew4 != 4 && pCardNew3 != A) {
                      pTotalS[3] = i + 4;
                    } else if (pCardNew3 == A) {
                      pTotalS[3] = [5,15];
                    }
                  }
               }
             }
          }
       if ((pCardNew == 4) && (pCardNew2 == 4)) {
            pTotalS[4] = pTotal[0];
              for (i = 0; i <= pCardNew5; i++) {
                if (pCardNew5 != 4 && pCardNew5 != A) {
                  pTotalS[4] = i + 4;
               } else if (pCardNew5 == A) {
                 pTotalS[4] = [5,15];
               } else {
                  pTotalS[5] = pTotal[0];
                   for (i = 0; i <= pCardNew6; i++) {
                    if (pCardNew6 != 4 && pCardNew6 != A) {
                      pTotalS[5] = i + 4;
                    } else if (pCardNew6 == A) {
                      pTotalS[5] = [5,15];
                    }
                  }
               }
             }
          }
       function totalXHands() {
          return pTotalS;
        }
        allHands = totalXHands();  
       
       state = "Hit";
       
     } else if ((pCard1 == 6 && pCard2 == 6) && dCard1 < 7) { //fix for 6   // splitting when not supposed to
       pTotal = [6,6];
       pTotalS[0] = pTotal[0];
       pTotalS[1] = pTotal[1];
      //  pTotalS[0] += pCardNew;
      //  pTotalS[1] += pCardNew2;
       
        for (i = 0; i <= pCardNew; i++) {
            if (pCardNew != 6 || pCardNew != A) {
              pTotalS[0] = i + 6;
            } else if (pCardNew == A) {
              pTotalS[0] = 17;
            }
          }
         for (i = 0; i <= pCardNew2; i++) {
            if (pCardNew2 != 6 || pCardNew2 != A) {
              pTotalS[1] = i + 6;
            } else if (pCardNew2 == A) {
              pTotalS[1] = 17;
            }
          }
         if (pCardNew == 6) {
            pTotalS[2] = pTotal[0];
              for (i = 0; i <= pCardNew3; i++) {
                if (pCardNew3 != 6 && pCardNew3 != A) {
                  pTotalS[2] = i + 6;
               } else if (pCardNew3 == A) {
                 pTotalS[2] = 17;
               } else {
                  pTotalS[3] = pTotal[0];
                   for (i = 0; i <= pCardNew4; i++) {
                    if (pCardNew4 != 6 && pCardNew3 != A) {
                      pTotalS[3] = i + 6;
                    } else if (pCardNew3 == A) {
                      pTotalS[3] = 17;
                    }
                  }
               }
             }
          }
       if ((pCardNew == 6) && (pCardNew2 == 6)) {
            pTotalS[4] = pTotal[0];
              for (i = 0; i <= pCardNew5; i++) {
                if (pCardNew5 != 6 && pCardNew5 != A) {
                  pTotalS[4] = i + 6;
               } else if (pCardNew5 == A) {
                 pTotalS[4] = 17;
               } else {
                  pTotalS[5] = pTotal[0];
                   for (i = 0; i <= pCardNew6; i++) {
                    if (pCardNew6 != 6 && pCardNew6 != A) {
                      pTotalS[5] = i + 6;
                    } else if (pCardNew6 == A) {
                      pTotalS[5] = 17;
                    }
                  }
               }
             }
          }
       function totalXHands() {
          return pTotalS;
        }
        allHands = totalXHands();  
       
       state = "Hit";
       
     } else if ((pCard1 == 7 && pCard2 == 7) && dCard1 < 8) { //fix for 7
       pTotal = [2,2];
       pTotalS[0] = pTotal[0];
       pTotalS[1] = pTotal[1];
      //  pTotalS[0] += pCardNew;
      //  pTotalS[1] += pCardNew2;
       
        for (i = 0; i <= pCardNew; i++) {
            if (pCardNew != 7 || pCardNew != A) {
              pTotalS[0] = i + 7;
            } else if (pCardNew == A) {
              pTotalS[0] = 18;
            }
          }
         for (i = 0; i <= pCardNew2; i++) {
            if (pCardNew2 != 7 || pCardNew2 != A) {
              pTotalS[1] = i + 7;
            } else if (pCardNew2 == A) {
              pTotalS[1] = 18;
            }
          }
         if (pCardNew == 7) {
            pTotalS[2] = pTotal[0];
              for (i = 0; i <= pCardNew3; i++) {
                if (pCardNew3 != 7 && pCardNew3 != A) {
                  pTotalS[2] = i + 7;
               } else if (pCardNew3 == A) {
                 pTotalS[2] = 18;
               } else {
                  pTotalS[3] = pTotal[0];
                   for (i = 0; i <= pCardNew4; i++) {
                    if (pCardNew4 != 7 && pCardNew3 != A) {
                      pTotalS[3] = i + 7;
                    } else if (pCardNew3 == A) {
                      pTotalS[3] = 18;
                    }
                  }
               }
             }
          }
        if ((pCardNew == 7) && (pCardNew2 == 7)) {
            pTotalS[4] = pTotal[0];
              for (i = 0; i <= pCardNew5; i++) {
                if (pCardNew5 != 7 && pCardNew5 != A) {
                  pTotalS[2] = i + 7;
               } else if (pCardNew5 == A) {
                 pTotalS[4] = 18;
               } else {
                  pTotalS[5] = pTotal[0];
                   for (i = 0; i <= pCardNew6; i++) {
                    if (pCardNew6 != 7 && pCardNew6 != A) {
                      pTotalS[5] = i + 7;
                    } else if (pCardNew6 == A) {
                      pTotalS[5] = 18;
                    }
                  }
               }
             }
          }
       function totalXHands() {
          return pTotalS;
        }
        allHands = totalXHands();  
       
       state = "Hit";
       
     } else if (pCard1 == 8 && pCard2 == 8) { //fix for 8
       pTotal = [8,8];
       pTotalS[0] = pTotal[0];
       pTotalS[1] = pTotal[1];
      //  pTotalS[0] += pCardNew;
      //  pTotalS[1] += pCardNew2;
       
        for (i = 0; i <= pCardNew; i++) {
            if (pCardNew != 8 || pCardNew != A) {
              pTotalS[0] = i + 8;
            } else if (pCardNew == A) {
              pTotalS[0] = 19;
            }
          }
         for (i = 0; i <= pCardNew2; i++) {
            if (pCardNew2 != 8 || pCardNew2 != A) {
              pTotalS[1] = i + 8;
            } else if (pCardNew2 == A) {
              pTotalS[1] = 19;
            }
          }
         if (pCardNew == 8) {
            pTotalS[2] = pTotal[0];
              for (i = 0; i <= pCardNew3; i++) {
                if (pCardNew3 != 8 && pCardNew3 != A) {
                  pTotalS[2] = i + 8;
               } else if (pCardNew3 == A) {
                 pTotalS[2] = 19;
               } else {
                  pTotalS[3] = pTotal[0];
                   for (i = 0; i <= pCardNew4; i++) {
                    if (pCardNew4 != 8 && pCardNew3 != A) {
                      pTotalS[3] = i + 8;
                    } else if (pCardNew3 == A) {
                      pTotalS[3] = 19;
                    }
                  }
               }
             }
          }
          if ((pCardNew == 8) && (pCardNew2 == 8)) {
            pTotalS[4] = pTotal[0];
              for (i = 0; i <= pCardNew5; i++) {
                if (pCardNew5 != 8 && pCardNew5 != A) {
                  pTotalS[2] = i + 8;
               } else if (pCardNew5 == A) {
                 pTotalS[4] = 19;
               } else {
                  pTotalS[5] = pTotal[0];
                   for (i = 0; i <= pCardNew6; i++) {
                    if (pCardNew6 != 8 && pCardNew6 != A) {
                      pTotalS[5] = i + 8;
                    } else if (pCardNew6 == A) {
                      pTotalS[5] = 19;
                    }
                  }
               }
             }
          }
        function totalXHands() {
          return pTotalS;
        }
        allHands = totalXHands();  
        
        state = "Hit";
        
     } else if ((pCard1 == 9 && pCard2 == 9) && (dCard1 < 7 || (dCard1 > 7 && dCard1 < 10))) { //fix for 9
       pTotal = [9,9];
       pTotalS[0] = pTotal[0];
       pTotalS[1] = pTotal[1];
      //  pTotalS[0] += pCardNew;
      //  pTotalS[1] += pCardNew2;
       
        for (i = 0; i <= pCardNew; i++) {
            if (pCardNew != 9 || pCardNew != A) {
              pTotalS[0] = i + 9;
            } else if (pCardNew == A) {
              pTotalS[0] = 20;
            }
          }
         for (i = 0; i <= pCardNew2; i++) {
            if (pCardNew2 != 9 || pCardNew2 != A) {
              pTotalS[1] = i + 9;
            } else if (pCardNew2 == A) {
              pTotalS[1] = 20;
            }
          }
         if (pCardNew == 9) {
            pTotalS[2] = pTotal[0];
              for (i = 0; i <= pCardNew3; i++) {
                if (pCardNew3 != 9 && pCardNew3 != A) {
                  pTotalS[2] = i + 9;
               } else if (pCardNew3 == A) {
                 pTotalS[2] = 20;
               } else {
                  pTotalS[3] = pTotal[0];
                   for (i = 0; i <= pCardNew4; i++) {
                    if (pCardNew4 != 9 && pCardNew3 != A) {
                      pTotalS[3] = i + 9;
                    } else if (pCardNew3 == A) {
                      pTotalS[3] = 20;
                    }
                  }
               }
             }
          }
          if ((pCardNew == 9) && (pCardNew2 == 9)) {
            pTotalS[4] = pTotal[0];
              for (i = 0; i <= pCardNew5; i++) {
                if (pCardNew5 != 9 && pCardNew5 != A) {
                  pTotalS[2] = i + 9;
               } else if (pCardNew5 == A) {
                 pTotalS[4] = 20;
               } else {
                  pTotalS[5] = pTotal[0];
                   for (i = 0; i <= pCardNew6; i++) {
                    if (pCardNew6 != 9 && pCardNew6 != A) {
                      pTotalS[5] = i + 9;
                    } else if (pCardNew6 == A) {
                      pTotalS[5] = 20;
                    }
                  }
               }
             }
          }
       function totalXHands() {
          return pTotalS;
        }
        allHands = totalXHands();  
       state = "Hit";
       
     }

     state = "Hit";
    
     break;
        
      case "Hit": //add loop for allhands var 
        pTotal = pTotal;
        dCard1 = cards.dC1;
        A = 1;
        
        
        if (allHands != undefined) { // fix?
        console.log("Player Totals: " + allHands + "| Dealer Upcard: " + dCard1);

        
      for (j = 0; j <= 10; j++) {
      for (i = 0; i <= allHands.length; i++) { 
        if (allHands[i] == 4) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 5) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 6) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 7) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 8) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 9 && dCard1 <= 2) {                                // 9's    less than or equal to 2 for 2 and Ace
          A = 11;
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 9 && dCard1 > 6) {
          A = 11;
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 10 && dCard1 == 10) {                              // 10's
          A = 11;
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 10 && dCard1 == 1) {
          A = 11;
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 11 && dCard1 == 1) {                               // 11
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 12 && dCard1 <= 3) {                               // 12's
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 12 && dCard1 > 6) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 13 && dCard1 > 6) {                                // 13's - 16's
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 13 && dCard1 == 1) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 14 && dCard1 > 6) {                                
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 14 && dCard1 == 1) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 15 && dCard1 > 6) {                              
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 15 && dCard1 == 1) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 16 && dCard1 > 6) {                                
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (allHands[i] == 16 && dCard1 == 1) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 2 && allHands[i][1] == 12)) {                       // Aces
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
            if (allHands[i] == "2,121") {                                                                  
              allHands[i] = [3,13];  
            } else if (allHands[i] == "2,122") {
              allHands[i] = [4,14];
            } else if (allHands[i] == "2,123") {
              allHands[i] = [5,15];
            } else if (allHands[i] == "2,124") {
              allHands[i] = [6,16];
            } else if (allHands[i] == "2,125") {
              allHands[i] = [7,17];
            } else if (allHands[i] == "2,126") {
              allHands[i] = [8,18];
            } else if (allHands[i] == "2,127") {
              allHands[i] = 19;
            } else if (allHands[i] == "2,128") {
              allHands[i] = 20;
            } else if (allHands[i] == "2,129") {
              allHands[i] = 21;
            } else if (allHands[i] == "2,1210") {
              allHands[i] = 12;
            }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 3 && allHands[i][1] == 13) && dCard1 < 5) {                       // Ace 2 and Ace 3
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
            if (allHands[i] == "3,131") {
              allHands[i] = [4,14];  
            } else if (allHands[i] == "3,132") {
              allHands[i] = [5,15];
            } else if (allHands[i] == "3,133") {
              allHands[i] = [6,16];
            } else if (allHands[i] == "3,134") {
              allHands[i] = [7,17];
            } else if (allHands[i] == "3,135") {
              allHands[i] = [8,18];
            } else if (allHands[i] == "3,136") {
              allHands[i] = 19;
            } else if (allHands[i] == "3,137") {
              allHands[i] = 20;
            } else if (allHands[i] == "3,138") {
              allHands[i] = 21;
            } else if (allHands[i] == "3,139") {
              allHands[i] = 12;
            } else if (allHands[i] == "3,1310") {
              allHands[i] = 13;
            }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 3 && allHands[i][1] == 13) && dCard1 > 6) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (allHands[i] == "3,131") {
            allHands[i] = [4,14];  
          } else if (allHands[i] == "3,132") {
            allHands[i] = [5,15];
          } else if (allHands[i] == "3,133") {
            allHands[i] = [6,16];
          } else if (allHands[i] == "3,134") {
            allHands[i] = [7,17];
          } else if (allHands[i] == "3,135") {
            allHands[i] = [8,18];
          } else if (allHands[i] == "3,136") {
            allHands[i] = 19;
          } else if (allHands[i] == "3,137") {
            allHands[i] = 20;
          } else if (allHands[i] == "3,138") {
            allHands[i] = 21;
          } else if (allHands[i] == "3,139") {
            allHands[i] = 12;
          } else if (allHands[i] == "3,1310") {
            allHands[i] = 13;
          }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 4 && allHands[i][1] == 14) && dCard1 < 5) {                     
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
            if (allHands[i] == "4,141") {
              allHands[i] = 19;  
            } else if (allHands[i] == "4,142") {
              allHands[i] = 20;
            } else if (allHands[i] == "4,143") {
              allHands[i] = 21;
            } else if (allHands[i] == "4,144") {
              allHands[i] = 12;
            } else if (allHands[i] == "4,145") {
              allHands[i] = 13;
            } else if (allHands[i] == "4,146") {
              allHands[i] = 14;
            } else if (allHands[i] == "4,147") {
              allHands[i] = 15;
            } else if (allHands[i] == "4,148") {
              allHands[i] = 16;
            } else if (allHands[i] == "4,149") {
              allHands[i] = 17;
            } else if (allHands[i] == "4,1410") {
              allHands[i] = 18;
            }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 4 && allHands[i][1] == 14) && dCard1 > 6) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (allHands[i] == "4,141") {
            allHands[i] = 19;  
          } else if (allHands[i] == "4,142") {
            allHands[i] = 20;
          } else if (allHands[i] == "4,143") {
            allHands[i] = 21;
          } else if (allHands[i] == "4,144") {
            allHands[i] = 12;
          } else if (allHands[i] == "4,145") {
            allHands[i] = 13;
          } else if (allHands[i] == "4,146") {
            allHands[i] = 14;
          } else if (allHands[i] == "4,147") {
            allHands[i] = 15;
          } else if (allHands[i] == "4,148") {
            allHands[i] = 16;
          } else if (allHands[i] == "4,149") {
            allHands[i] = 17;
          } else if (allHands[i] == "4,1410") {
            allHands[i] = 18;
          }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 5 && allHands[i][1] == 15) && dCard1 < 4) {                       // Ace 4 and Ace 5
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
            if (allHands[i] == "5,151") {
              allHands[i] = 19;  
            } else if (allHands[i] == "5,152") {
              allHands[i] = 20;
            } else if (allHands[i] == "5,153") {
              allHands[i] = 21;
            } else if (allHands[i] == "5,154") {
              allHands[i] = 12;
            } else if (allHands[i] == "5,155") {
              allHands[i] = 13;
            } else if (allHands[i] == "5,156") {
              allHands[i] = 14;
            } else if (allHands[i] == "5,157") {
              allHands[i] = 15;
            } else if (allHands[i] == "5,158") {
              allHands[i] = 16;
            } else if (allHands[i] == "5,159") {
              allHands[i] = 17;
            } else if (allHands[i] == "5,1510") {
              allHands[i] = 18;
            }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 5 && allHands[i][1] == 15) && dCard1 > 6) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (allHands[i] == "5,151") {
            allHands[i] = 19;  
          } else if (allHands[i] == "5,152") {
            allHands[i] = 20;
          } else if (allHands[i] == "5,153") {
            allHands[i] = 21;
          } else if (allHands[i] == "5,154") {
            allHands[i] = 12;
          } else if (allHands[i] == "5,155") {
            allHands[i] = 13;
          } else if (allHands[i] == "5,156") {
            allHands[i] = 14;
          } else if (allHands[i] == "5,157") {
            allHands[i] = 15;
          } else if (allHands[i] == "5,158") {
            allHands[i] = 16;
          } else if (allHands[i] == "5,159") {
            allHands[i] = 17;
          } else if (allHands[i] == "5,1510") {
            allHands[i] = 18;
          }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 6 && allHands[i][1] == 16) && dCard1 < 4) {                      
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
            if (allHands[i] == "6,161") {
              allHands[i] = 19;  
            } else if (allHands[i] == "6,162") {
              allHands[i] = 20;
            } else if (allHands[i] == "6,163") {
              allHands[i] = 21;
            } else if (allHands[i] == "6,164") {
              allHands[i] = 12;
            } else if (allHands[i] == "6,165") {
              allHands[i] = 13;
            } else if (allHands[i] == "6,166") {
              allHands[i] = 14;
            } else if (allHands[i] == "6,167") {
              allHands[i] = 15;
            } else if (allHands[i] == "6,168") {
              allHands[i] = 16;
            } else if (allHands[i] == "6,169") {
              allHands[i] = 17;
            } else if (allHands[i] == "6,1610") {
              allHands[i] = 18;
            }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 6 && allHands[i][1] == 16) && dCard1 > 6) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (allHands[i] == "6,161") {
            allHands[i] = 19;  
          } else if (allHands[i] == "6,162") {
            allHands[i] = 20;
          } else if (allHands[i] == "6,163") {
            allHands[i] = 21;
          } else if (allHands[i] == "6,164") {
            allHands[i] = 12;
          } else if (allHands[i] == "6,165") {
            allHands[i] = 13;
          } else if (allHands[i] == "6,166") {
            allHands[i] = 14;
          } else if (allHands[i] == "6,167") {
            allHands[i] = 15;
          } else if (allHands[i] == "6,168") {
            allHands[i] = 16;
          } else if (allHands[i] == "6,169") {
            allHands[i] = 17;
          } else if (allHands[i] == "6,1610") {
            allHands[i] = 18;
          }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 7 && allHands[i][1] == 17) && dCard1 < 3) {                       // Ace 6
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
            if (allHands[i] == "7,171") {
              allHands[i] = 19;  
            } else if (allHands[i] == "7,172") {
              allHands[i] = 20;
            } else if (allHands[i] == "7,173") {
              allHands[i] = 21;
            } else if (allHands[i] == "7,174") {
              allHands[i] = 12;
            } else if (allHands[i] == "7,175") {
              allHands[i] = 13;
            } else if (allHands[i] == "7,176") {
              allHands[i] = 14;
            } else if (allHands[i] == "7,177") {
              allHands[i] = 15;
            } else if (allHands[i] == "7,178") {
              allHands[i] = 16;
            } else if (allHands[i] == "7,179") {
              allHands[i] = 17;
            } else if (allHands[i] == "7,1710") {
              allHands[i] = 18;
            }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 7 && allHands[i][1] == 17) && dCard1 > 6) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (allHands[i] == "7,171") {
            allHands[i] = 19;  
          } else if (allHands[i] == "7,172") {
            allHands[i] = 20;
          } else if (allHands[i] == "7,173") {
            allHands[i] = 21;
          } else if (allHands[i] == "7,174") {
            allHands[i] = 12;
          } else if (allHands[i] == "7,175") {
            allHands[i] = 13;
          } else if (allHands[i] == "7,176") {
            allHands[i] = 14;
          } else if (allHands[i] == "7,177") {
            allHands[i] = 15;
          } else if (allHands[i] == "7,178") {
            allHands[i] = 16;
          } else if (allHands[i] == "7,179") {
            allHands[i] = 17;
          } else if (allHands[i] == "7,1710") {
            allHands[i] = 18;
          }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 8 && allHands[i][1] == 18) && dCard1 == 1) {                       // Ace 7
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (allHands[i] == "8,181") {
            allHands[i] = 19;  
          } else if (allHands[i] == "8,182") {
            allHands[i] = 20;
          } else if (allHands[i] == "8,183") {
            allHands[i] = 21;
          } else if (allHands[i] == "8,184") {
            allHands[i] = 12;
          } else if (allHands[i] == "8,185") {
            allHands[i] = 13;
          } else if (allHands[i] == "8,186") {
            allHands[i] = 14;
          } else if (allHands[i] == "8,187") {
            allHands[i] = 15;
          } else if (allHands[i] == "8,188") {
            allHands[i] = 16;
          } else if (allHands[i] == "8,189") {
            allHands[i] = 17;
          } else if (allHands[i] == "8,1810") {
            allHands[i] = 18;
          }
        } else if (Array.isArray(allHands[i]) && (allHands[i][0] == 8 && allHands[i][1] == 18) && dCard1 > 8) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (allHands[i] == "8,181") {
            allHands[i] = 19;  
          } else if (allHands[i] == "8,182") {
            allHands[i] = 20;
          } else if (allHands[i] == "8,183") {
            allHands[i] = 21;
          } else if (allHands[i] == "8,184") {
            allHands[i] = 12;
          } else if (allHands[i] == "8,185") {
            allHands[i] = 13;
          } else if (allHands[i] == "8,186") {
            allHands[i] = 14;
          } else if (allHands[i] == "8,187") {
            allHands[i] = 15;
          } else if (allHands[i] == "8,188") {
            allHands[i] = 16;
          } else if (allHands[i] == "8,189") {
            allHands[i] = 17;
          } else if (allHands[i] == "8,1810") {
            allHands[i] = 18;
          }
        } else if (allHands[i] == 5) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (allHands[i] == 6) {
            allHands[i] == [6,16];
          }
        }  else if (allHands[i] == 6) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (allHands[i] == 7) {
            allHands[i] == [7,17];
          }
        } else if (allHands[i] == 7) {
          allHands[i] += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (allHands[i] == 8) {
            allHands[i] == [8,18];
          }
        } 
        
        if (allHands[i] >= 17) {
          state = "Stand";    // change to stand
        } else {
          state = "DD";
        }
       }
      } 
    } else {
       for (i = 0; i <= 5; i++) { //stuck because it cant find a value     doesnt hit twice     cant get to DD
        console.log(pTotal);
        if (pTotal == 8) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 9 && dCard1 <= 2) {                                // 9's    less than or equal to 2 for 2 and Ace
          A = 11;
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 9 && dCard1 > 6) {
          A = 11;
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 10 && dCard1 == 10) {                              // 10's
          A = 11;
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 10 && dCard1 == 1) {
          A = 11;
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 11 && dCard1 == 1) {                               // 11
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 12 && dCard1 <= 3) {                               // 12's
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 12 && dCard1 > 6) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 13 && dCard1 > 6) {                                // 13's - 16's
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 13 && dCard1 == 1) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 14 && dCard1 > 6) {                                
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 14 && dCard1 == 1) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 15 && dCard1 > 6) {                              
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 15 && dCard1 == 1) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 16 && dCard1 > 6) {                                
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 16 && dCard1 == 1) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if ((pTotal[0] == 3 && pTotal[1] == 13) && dCard1 < 5) {                       // Ace 2 and Ace 3
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == "3,131") {
            pTotal = [[4],[14]];  
          } else if (pTotal == "3,132") {
            pTotal = [[5],[15]];
          } else if (pTotal == "3,133") {
            pTotal = [[6],[16]];
          } else if (pTotal == "3,134") {
            pTotal = [[7],[17]];
          } else if (pTotal == "3,135") {
            pTotal = [[8],[18]];
          } else if (pTotal == "3,136") {
            pTotal = 19;
          } else if (pTotal == "3,137") {
            pTotal = 20;
          } else if (pTotal == "3,138") {
            pTotal = 21;
          } else if (pTotal == "3,139") {
            pTotal = 12;
          } else if (pTotal == "3,1310") {
            pTotal = 13;
          }
      } else if ((pTotal[0] == 3 && pTotal[1] == 13) && dCard1 > 6) {
        pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        if (pTotal == "3,131") {
            pTotal = [[4],[14]];  
          } else if (pTotal == "3,132") {
            pTotal = [[5],[15]];
          } else if (pTotal == "3,133") {
            pTotal = [[6],[16]];
          } else if (pTotal == "3,134") {
            pTotal = [[7],[17]];
          } else if (pTotal == "3,135") {
            pTotal = [[8],[18]];
          } else if (pTotal == "3,136") {
            pTotal = 19;
          } else if (pTotal == "3,137") {
            pTotal = 20;
          } else if (pTotal == "3,138") {
            pTotal = 21;
          } else if (pTotal == "3,139") {
            pTotal = 12;
          } else if (pTotal == "3,1310") {
            pTotal = 13;
          }
      } else if ((pTotal[0] == 4 && pTotal[1] == 14) && dCard1 < 5) {                     
        pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == "4,141") {
            pTotal = [[5],[15]];  
          } else if (pTotal == "4,142") {
            pTotal = [[6],[16]];
          } else if (pTotal == "4,143") {
            pTotal = [[7],[17]];
          } else if (pTotal == "4,144") {
            pTotal = [[8],[18]];
          } else if (pTotal == "4,145") {
            pTotal = 19;
          } else if (pTotal == "4,146") {
            pTotal = 20;
          } else if (pTotal == "4,147") {
            pTotal = 21;
          } else if (pTotal == "4,148") {
            pTotal = 12;
          } else if (pTotal == "4,149") {
            pTotal = 13;
          } else if (pTotal == "4,1410") {
            pTotal = 14;
          }
      } else if ((pTotal[0] == 4 && pTotal[1] == 14) && dCard1 > 6) {
        pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
            if (pTotal == "4,141") {
            pTotal = [[5],[15]];  
          } else if (pTotal == "4,142") {
            pTotal = [[6],[16]];
          } else if (pTotal == "4,143") {
            pTotal = [[7],[17]];
          } else if (pTotal == "4,144") {
            pTotal = [[8],[18]];
          } else if (pTotal == "4,145") {
            pTotal = 19;
          } else if (pTotal == "4,146") {
            pTotal = 20;
          } else if (pTotal == "4,147") {
            pTotal = 21;
          } else if (pTotal == "4,148") {
            pTotal = 12;
          } else if (pTotal == "4,149") {
            pTotal = 13;
          } else if (pTotal == "4,1410") {
            pTotal = 14;
          }
      } else if ((pTotal[0] == 5 && pTotal[1] == 15) && dCard1 < 4) {                       // Ace 4 and Ace 5
        pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == "5,151") {
            pTotal = [[6],[16]];  
          } else if (pTotal == "5,152") {
            pTotal = [[7],[17]];
          } else if (pTotal == "5,153") {
            pTotal = [[8],[18]];
          } else if (pTotal == "5,154") {
            pTotal = 19;
          } else if (pTotal == "5,155") {
            pTotal = 20;
          } else if (pTotal == "5,156") {
            pTotal = 21;
          } else if (pTotal == "5,157") {
            pTotal = 12;
          } else if (pTotal == "5,158") {
            pTotal = 13;
          } else if (pTotal == "5,159") {
            pTotal = 14;
          } else if (pTotal == "5,1510") {
            pTotal = 15;
          }
      } else if ((pTotal[0] == 5 && pTotal[1] == 15) && dCard1 > 6) {
        pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        if (pTotal == "5,151") {
            pTotal = [[6],[16]];  
          } else if (pTotal == "5,152") {
            pTotal = [[7],[17]];
          } else if (pTotal == "5,153") {
            pTotal = [[8],[18]];
          } else if (pTotal == "5,154") {
            pTotal = 19;
          } else if (pTotal == "5,155") {
            pTotal = 20;
          } else if (pTotal == "5,156") {
            pTotal = 21;
          } else if (pTotal == "5,157") {
            pTotal = 12;
          } else if (pTotal == "5,158") {
            pTotal = 13;
          } else if (pTotal == "5,159") {
            pTotal = 14;
          } else if (pTotal == "5,1510") {
            pTotal = 15;
          }
      } else if ((pTotal[0] == 6 && pTotal[1] == 16) && dCard1 < 4) {                      
        pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == "6,161") {
            pTotal = [[7],[17]];  
          } else if (pTotal == "6,162") {
            pTotal = [[8],[18]];
          } else if (pTotal == "6,163") {
            pTotal = 19;
          } else if (pTotal == "6,164") {
            pTotal = 20;
          } else if (pTotal == "6,165") {
            pTotal = 21;
          } else if (pTotal == "6,166") {
            pTotal = 12;
          } else if (pTotal == "6,167") {
            pTotal = 13;
          } else if (pTotal == "6,168") {
            pTotal = 14;
          } else if (pTotal == "6,169") {
            pTotal = 15;
          } else if (pTotal == "6,1610") {
            pTotal = 16;
          }
      } else if ((pTotal[0] == 6 && pTotal[1] == 16) && dCard1 > 6) {
        pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
            if (pTotal == "6,161") {
            pTotal = [[7],[17]];  
          } else if (pTotal == "6,162") {
            pTotal = [[8],[18]];
          } else if (pTotal == "6,163") {
            pTotal = 19;
          } else if (pTotal == "6,164") {
            pTotal = 20;
          } else if (pTotal == "6,165") {
            pTotal = 21;
          } else if (pTotal == "6,166") {
            pTotal = 12;
          } else if (pTotal == "6,167") {
            pTotal = 13;
          } else if (pTotal == "6,168") {
            pTotal = 14;
          } else if (pTotal == "6,169") {
            pTotal = 15;
          } else if (pTotal == "6,1610") {
            pTotal = 16;
          }
      } else if ((pTotal[0] == 7 && pTotal[1] == 17) && dCard1 < 3) {                       // Ace 6
        pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == "7,171") {
            pTotal = [[8],[18]];  
          } else if (pTotal == "7,172") {
            pTotal = 19;
          } else if (pTotal == "7,173") {
            pTotal = 20;
          } else if (pTotal == "7,174") {
            pTotal = 21;
          } else if (pTotal == "7,175") {
            pTotal = 12;
          } else if (pTotal == "7,176") {
            pTotal = 13;
          } else if (pTotal == "7,177") {
            pTotal = 14;
          } else if (pTotal == "7,178") {
            pTotal = 15;
          } else if (pTotal == "7,179") {
            pTotal = 16;
          } else if (pTotal == "7,1710") {
            pTotal = 17;
          }
      } else if ((pTotal[0] == 7 && pTotal[1] == 17) && dCard1 > 6) {
        pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
            if (pTotal == "7,171") {
            pTotal = [[8],[18]];  
          } else if (pTotal == "7,172") {
            pTotal = 19;
          } else if (pTotal == "7,173") {
            pTotal = 20;
          } else if (pTotal == "7,174") {
            pTotal = 21;
          } else if (pTotal == "7,175") {
            pTotal = 12;
          } else if (pTotal == "7,176") {
            pTotal = 13;
          } else if (pTotal == "7,177") {
            pTotal = 14;
          } else if (pTotal == "7,178") {
            pTotal = 15;
          } else if (pTotal == "7,179") {
            pTotal = 16;
          } else if (pTotal == "7,1710") {
            pTotal = 17;
          }
      } else if ((pTotal[0] == 8 && pTotal[1] == 18) && dCard1 == 1) {                       // Ace 7
        pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == "8,181") {
            pTotal = 19;  
          } else if (pTotal == "8,182") {
            pTotal = 20;
          } else if (pTotal == "8,183") {
            pTotal = 21;
          } else if (pTotal == "8,184") {
            pTotal = 12;
          } else if (pTotal == "8,185") {
            pTotal = 13;
          } else if (pTotal == "8,186") {
            pTotal = 14;
          } else if (pTotal == "8,187") {
            pTotal = 15;
          } else if (pTotal == "8,188") {
            pTotal = 16;
          } else if (pTotal == "8,189") {
            pTotal = 17;
          } else if (pTotal == "8,1810") {
            pTotal = 18;
          }
      } else if ((pTotal[0] == 8 && pTotal[1] == 18) && dCard1 > 8) {
        pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
            if (pTotal == "8,181") {
            pTotal = 19;  
          } else if (pTotal == "8,182") {
            pTotal = 20;
          } else if (pTotal == "8,183") {
            pTotal = 21;
          } else if (pTotal == "8,184") {
            pTotal = 12;
          } else if (pTotal == "8,185") {
            pTotal = 13;
          } else if (pTotal == "8,186") {
            pTotal = 14;
          } else if (pTotal == "8,187") {
            pTotal = 15;
          } else if (pTotal == "8,188") {
            pTotal = 16;
          } else if (pTotal == "8,189") {
            pTotal = 17;
          } else if (pTotal == "8,1810") {
            pTotal = 18;
          }
        } else if ((pTotal == 4) && dCard1 > 7) {                // 2's and 3's
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == 5) {
            pTotal == [5, 15];
          }
        } else if ((pTotal == 4) && dCard1 == 1) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == 5) {
            pTotal == [5, 15];
          }
        } else if ((pTotal == 6) && dCard1 > 7) {              
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == 7) {
            pTotal == [7, 17];
          }
        } else if ((pTotal == 6) && dCard1 == 1) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == 7) {
            pTotal == [7, 17];
          }
        } else if ((pTotal == 8) && dCard1 < 5) {                // 4's
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == 9) {
            pTotal == 19;
          }
        } else if ((pTotal == 8) && dCard1 > 6) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == 9) {
            pTotal == 19;
          }
        } else if ((pTotal == 10) && dCard1 == 10) {              // 5's
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == 11) {
            pTotal == 21;
          }
        } else if ((pTotal == 10) && dCard1 == 1) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == 11) {
            pTotal == 21;
          }
        } else if ((pTotal == 12) && dCard1 == 1) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
        } else if (pTotal == 5) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == 6) {
            pTotal == [6, 16];
          }
        } else if (pTotal == 6) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == 7) {
            pTotal == [7, 17];
          }
        } else if (pTotal == 7) {
          pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
          if (pTotal == 8) {
            pTotal == [8, 18];
          }
        } else {
          break;
        } 
      } // for
      state = "DD";
      break;
       } // else 
       break;
      
      case "DD": //all hands later***********
        pTotal;
        dCard1 = cards.dC1;
        pCard1 = cards.pC1;
        pCard2 = cards.pC2;
        winTotal = 0;
        lossTotal = 0;
        pushTotal = 0;
        noHands = 0;
        A = 1

        if (allHands != undefined) { 
          console.log("Player Totals: " + allHands + "| Dealer Total: " + dTotal);
            
        for (i = 0; i <= 6; i++) {
            for (j = 0; j < 10; j++)
            if (allHands[j] == 9 && (dCard1 > 2 && dCard1 < 7)) { 
                allHands[j] += cardPool()[Math.floor(Math.random() * cardPool().length)];
                } else if (allHands[j] == 10 && (dCard1 > 1 && dCard1 < 10)) {
                    A = 11;
                    allHands[j] += cardPool()[Math.floor(Math.random() * cardPool().length)];
                } else if (allHands[j] == 11 && dCard1 > 1) {
                    allHands[j] += cardPool()[Math.floor(Math.random() * cardPool().length)];
                } else if (Array.isArray(allHands[j]) && (allHands[j][0] == 3 && pTotal[1] == 13) && (dCard1 > 4 && dCard1 < 7)) {
                    allHands[j] += cardPool()[Math.floor(Math.random() * cardPool().length)];
                        if (allHands[j] == "3,131") {
                            allHands[j] = 14;  
                      } else if (allHands[j] == "3,132") {
                        allHands[j] = 15;
                      } else if (allHands[j] == "3,133") {
                        allHands[j] = 16;
                      } else if (allHands[j] == "3,134") {
                        allHands[j] = 17;
                      } else if (allHands[j] == "3,135") {
                        allHands[j] = 18;
                      } else if (allHands[j] == "3,136") {
                        allHands[j] = 19;
                      } else if (allHands[j] == "3,137") {
                        allHands[j] = 20;
                      } else if (allHands[j] == "3,138") {
                        allHands[j] = 21;
                      } else if (allHands[j] == "3,139") {
                        allHands[j] = 12;
                      } else if (allHands[j] == "3,1310") {
                        allHands[j] = 13;
                      }
                } else if (Array.isArray(allHands[j]) && (allHands[j][0] == 4 && allHands[j][1] == 14) && (dCard1 > 4 && dCard1 < 7)) {                     
                    allHands[j] += cardPool()[Math.floor(Math.random() * cardPool().length)];
                        if (allHands[j] == "4,141") {
                            allHands[j] = 15;  
                      } else if (allHands[j] == "4,142") {
                        allHands[j] = 16;
                      } else if (allHands[j] == "4,143") {
                        allHands[j] = 17;
                      } else if (allHands[j] == "4,144") {
                        allHands[j] = 18;
                      } else if (allHands[j] == "4,145") {
                        allHands[j] = 19;
                      } else if (allHands[j] == "4,146") {
                        allHands[j] = 20;
                      } else if (allHands[j] == "4,147") {
                        allHands[j] = 21;
                      } else if (allHands[j] == "4,148") {
                        allHands[j] = 12;
                      } else if (allHands[j] == "4,149") {
                        allHands[j] = 13;
                      } else if (allHands[j] == "4,1410") {
                        allHands[j] = 14;
                      }
                } else if (Array.isArray(allHands[j]) && (allHands[j][0] == 5 && allHands[j][1] == 15) && (dCard1 > 3 && dCard1 < 7)) {
                    allHands[j] += cardPool()[Math.floor(Math.random() * cardPool().length)];
                        if (allHands[j] == "5,151") {
                            allHands[j] = 16;  
                      } else if (allHands[j] == "5,152") {
                        allHands[j] = 17;
                      } else if (allHands[j] == "5,153") {
                        allHands[j] = 18;
                      } else if (allHands[j] == "5,154") {
                        allHands[j] = 19;
                      } else if (allHands[j] == "5,155") {
                        allHands[j] = 20;
                      } else if (allHands[j] == "5,156") {
                        allHands[j] = 21;
                      } else if (allHands[j] == "5,157") {
                        allHands[j] = 12;
                      } else if (allHands[j] == "5,158") {
                        allHands[j] = 13;
                      } else if (allHands[j] == "5,159") {
                        allHands[j] = 14;
                      } else if (allHands[j] == "5,1510") {
                        allHands[j] = 15;
                      }
                } else if (Array.isArray(allHands[j]) && (allHands[j][0] == 6 && allHands[j][1] == 16) && (dCard1 > 3 && dCard1 < 7)) {
                    allHands[j] += cardPool()[Math.floor(Math.random() * cardPool().length)];
                        if (allHands[j] == "6,161") {
                            allHands[j] = 17;  
                      } else if (allHands[j] == "6,162") {
                        allHands[j] = 18;
                      } else if (allHands[j] == "6,163") {
                        allHands[j] = 19;
                      } else if (allHands[j] == "6,164") {
                        allHands[j] = 20;
                      } else if (allHands[j] == "6,165") {
                        allHands[j] = 21;
                      } else if (allHands[j] == "6,166") {
                        allHands[j] = 12;
                      } else if (allHands[j] == "6,167") {
                        allHands[j] = 13;
                      } else if (allHands[j] == "6,168") {
                        allHands[j] = 14;
                      } else if (allHands[j] == "6,169") {
                        allHands[j] = 15;
                      } else if (allHands[j] == "6,1610") {
                        allHands[j] = 16;
                      }
                } else if (Array.isArray(allHands[j]) && (allHands[j][0] == 7 && allHands[j][1] == 17) && (dCard1 > 2 && dCard1 < 7)) {
                    allHands[j] += cardPool()[Math.floor(Math.random() * cardPool().length)];
                        if (allHands[j] == "7,171") {
                            allHands[j] = 18;  
                      } else if (allHands[j] == "7,172") {
                        allHands[j] = 19;
                      } else if (allHands[j] == "7,173") {
                        allHands[j] = 20;
                      } else if (allHands[j] == "7,174") {
                        allHands[j] = 21;
                      } else if (allHands[j] == "7,175") {
                        allHands[j] = 12;
                      } else if (allHands[j] == "7,176") {
                        allHands[j] = 13;
                      } else if (allHands[j] == "7,177") {
                        allHands[j] = 14;
                      } else if (allHands[j] == "7,178") {
                        allHands[j] = 15;
                      } else if (allHands[j] == "7,179") {
                        allHands[j] = 16;
                      } else if (allHands[j] == "7,1710") {
                        allHands[j] = 17;
                      }
            
                } else if (Array.isArray(allHands[j]) && (allHands[j][0] == 8 && allHands[j][1] == 18) && (dCard1 > 2 && dCard1 < 7)) {
                    allHands[j] += cardPool()[Math.floor(Math.random() * cardPool().length)];
                        if (allHands[j] == "8,181") {
                            allHands[j] = 19;  
                      } else if (allHands[j] == "8,182") {
                        allHands[j] = 20;
                      } else if (allHands[j] == "8,183") {
                        allHands[j] = 21;
                      } else if (allHands[j] == "8,184") {
                        allHands[j] = 12;
                      } else if (allHands[j] == "8,185") {
                        allHands[j] = 13;
                      } else if (allHands[j] == "8,186") {
                        allHands[j] = 14;
                      } else if (allHands[j] == "8,187") {
                        allHands[j] = 15;
                      } else if (allHands[j] == "8,188") {
                        allHands[j] = 16;
                      } else if (allHands[j] == "8,189") {
                        allHands[j] = 17;
                      } else if (allHands[j] == "8,1810") {
                        allHands[j] = 18;
                      }
                } else {
                  state = "Stand";
                } 
        }
    }
          if (pTotal == 9 && (dCard1 > 2 && dCard1 < 7)) { 
            pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
            } else if (pTotal == 10 && (dCard1 > 1 && dCard1 < 10)) {
                A = 11;
                pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
            } else if (pTotal == 11 && dCard1 > 1) {
                pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
            } else if ((pTotal[0] == 3 && pTotal[1] == 13) && (dCard1 > 4 && dCard1 < 7)) {
                pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
                    if (pTotal == "3,131") {
                    pTotal = 14;  
                  } else if (pTotal == "3,132") {
                    pTotal = 15;
                  } else if (pTotal == "3,133") {
                    pTotal = 16;
                  } else if (pTotal == "3,134") {
                    pTotal = 17;
                  } else if (pTotal == "3,135") {
                    pTotal = 18;
                  } else if (pTotal == "3,136") {
                    pTotal = 19;
                  } else if (pTotal == "3,137") {
                    pTotal = 20;
                  } else if (pTotal == "3,138") {
                    pTotal = 21;
                  } else if (pTotal == "3,139") {
                    pTotal = 12;
                  } else if (pTotal == "3,1310") {
                    pTotal = 13;
                  }
            } else if ((pTotal[0] == 4 && pTotal[1] == 14) && (dCard1 > 4 && dCard1 < 7)) {                     
                pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
                    if (pTotal == "4,141") {
                    pTotal = 15;  
                  } else if (pTotal == "4,142") {
                    pTotal = 16;
                  } else if (pTotal == "4,143") {
                    pTotal = 17;
                  } else if (pTotal == "4,144") {
                    pTotal = 18;
                  } else if (pTotal == "4,145") {
                    pTotal = 19;
                  } else if (pTotal == "4,146") {
                    pTotal = 20;
                  } else if (pTotal == "4,147") {
                    pTotal = 21;
                  } else if (pTotal == "4,148") {
                    pTotal = 12;
                  } else if (pTotal == "4,149") {
                    pTotal = 13;
                  } else if (pTotal == "4,1410") {
                    pTotal = 14;
                  }
            } else if ((pTotal[0] == 5 && pTotal[1] == 15) && (dCard1 > 3 && dCard1 < 7)) {
                pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
                    if (pTotal == "5,151") {
                    pTotal = 16;  
                  } else if (pTotal == "5,152") {
                    pTotal = 17;
                  } else if (pTotal == "5,153") {
                    pTotal = 18;
                  } else if (pTotal == "5,154") {
                    pTotal = 19;
                  } else if (pTotal == "5,155") {
                    pTotal = 20;
                  } else if (pTotal == "5,156") {
                    pTotal = 21;
                  } else if (pTotal == "5,157") {
                    pTotal = 12;
                  } else if (pTotal == "5,158") {
                    pTotal = 13;
                  } else if (pTotal == "5,159") {
                    pTotal = 14;
                  } else if (pTotal == "5,1510") {
                    pTotal = 15;
                  }
            } else if ((pTotal[0] == 6 && pTotal[1] == 16) && (dCard1 > 3 && dCard1 < 7)) {
                pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
                    if (pTotal == "6,161") {
                    pTotal = 17;  
                  } else if (pTotal == "6,162") {
                    pTotal = 18;
                  } else if (pTotal == "6,163") {
                    pTotal = 19;
                  } else if (pTotal == "6,164") {
                    pTotal = 20;
                  } else if (pTotal == "6,165") {
                    pTotal = 21;
                  } else if (pTotal == "6,166") {
                    pTotal = 12;
                  } else if (pTotal == "6,167") {
                    pTotal = 13;
                  } else if (pTotal == "6,168") {
                    pTotal = 14;
                  } else if (pTotal == "6,169") {
                    pTotal = 15;
                  } else if (pTotal == "6,1610") {
                    pTotal = 16;
                  }
            } else if ((pTotal[0] == 7 && pTotal[1] == 17) && (dCard1 > 2 && dCard1 < 7)) {
                pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
                    if (pTotal == "7,171") {
                    pTotal = 18;  
                  } else if (pTotal == "7,172") {
                    pTotal = 19;
                  } else if (pTotal == "7,173") {
                    pTotal = 20;
                  } else if (pTotal == "7,174") {
                    pTotal = 21;
                  } else if (pTotal == "7,175") {
                    pTotal = 12;
                  } else if (pTotal == "7,176") {
                    pTotal = 13;
                  } else if (pTotal == "7,177") {
                    pTotal = 14;
                  } else if (pTotal == "7,178") {
                    pTotal = 15;
                  } else if (pTotal == "7,179") {
                    pTotal = 16;
                  } else if (pTotal == "7,1710") {
                    pTotal = 17;
                  }
        
            } else if ((pTotal[0] == 8 && pTotal[1] == 18) && (dCard1 > 2 && dCard1 < 7)) {
                pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
                    if (pTotal == "8,181") {
                    pTotal = 19;  
                  } else if (pTotal == "8,182") {
                    pTotal = 20;
                  } else if (pTotal == "8,183") {
                    pTotal = 21;
                  } else if (pTotal == "8,184") {
                    pTotal = 12;
                  } else if (pTotal == "8,185") {
                    pTotal = 13;
                  } else if (pTotal == "8,186") {
                    pTotal = 14;
                  } else if (pTotal == "8,187") {
                    pTotal = 15;
                  } else if (pTotal == "8,188") {
                    pTotal = 16;
                  } else if (pTotal == "8,189") {
                    pTotal = 17;
                  } else if (pTotal == "8,1810") {
                    pTotal = 18;
                  }
            } else if ((pCard1 == 5 && pCard2 == 5) && (dCard1 > 1 && dCard1 < 10)) {
                A = 11;
                pTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
            } else {
              state = "Stand";
            }

            state = "Stand";

            break;

        case "Stand" : //allhands
            pTotal;
            dCard1 = cards.dC1;
            //dCard2 = cards.dC2; negligible until adding total amount of cards
            dTotal = cards.dT;
            winTotal;
            lossTotal;
            pushTotal;
            noHands;

            console.log("Player Totals: " + pTotal + "| Dealer Total: " + dTotal);

            if (pTotal[0] == 9 && pTotal[1] == 19) {
              pTotal = 19;
            } else if (pTotal[0] == 10 && pTotal[1] == 20) {
              pTotal = 20;
            } else if (pTotal[0] == 8 && pTotal[1] == 18) {
              pTotal = 18;
            }


          while (dTotal[0] != undefined) { //fix dTotal NOT an ARRAY
            if ((dTotal[0] == 2 && dTotal[1] == 12)) {                      
              dTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
                if (dTotal == "2,121") {
                  dTotal = [3,13];  
                  } else if (dTotal == "2,122") {
                  dTotal = [4,14];
                  } else if (dTotal == "2,123") {
                  dTotal = [5,15];
                  } else if (dTotal == "2,124") {
                  dTotal = [6,16];
                  } else if (dTotal == "2,125") {
                  dTotal = 17;
                  } else if (dTotal == "2,126") {
                  dTotal = 18;
                  } else if (dTotal == "2,127") {
                  dTotal = 19;
                  } else if (dTotal == "2,128") {
                  dTotal = 20;
                  } else if (dTotal == "2,129") {
                  dTotal = 21;
                  } else if (dTotal == "2,1210") {
                  dTotal = 12;
                  }
           } else if ((dTotal[0] == 3 && dTotal[1] == 13)) {                      
            dTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
              if (dTotal == "3,131") {
                dTotal = [4,14];  
                } else if (dTotal == "3,132") {
                dTotal = [5,15];
                } else if (dTotal == "3,133") {
                dTotal = [6,16];
                } else if (dTotal == "3,134") {
                dTotal = 17;
                } else if (dTotal == "3,135") {
                dTotal = 18;
                } else if (dTotal == "3,136") {
                dTotal = 19;
                } else if (dTotal == "3,137") {
                dTotal = 20;
                } else if (dTotal == "3,138") {
                dTotal = 21;
                } else if (dTotal == "3,139") {
                dTotal = 12;
                } else if (dTotal == "3,1310") {
                dTotal = 13;
                  }
            } else if (dTotal[0] == 4 && dTotal[1] == 14) {                     
               dTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
                 if (dTotal == "4,141") {
                 dTotal = [5,15];  
                } else if (dTotal == "4,142") {
                 dTotal = [6,16];
                } else if (dTotal == "4,143") {
                 dTotal = 17;
                } else if (dTotal == "4,144") {
                 dTotal = 18;
                } else if (dTotal == "4,145") {
                 dTotal = 19;
                } else if (dTotal == "4,146") {
                  dTotal = 20;
                 } else if (dTotal == "4,147") {
                   dTotal = 21;
                 } else if (dTotal == "4,148") {
                   dTotal = 12;
                 } else if (dTotal == "4,149") {
                   dTotal = 13;
                 } else if (dTotal == "4,1410") {
                   dTotal = 14;
                 }
              } else if (dTotal[0] == 5 && dTotal[1] == 15) {                     
                dTotal += cardPool()[Math.floor(Math.random() * cardPool().length)]; //fix
                  if (dTotal[1] == 151) {
                  dTotal = [6,16];  
                 } else if (dTotal == "5,152") {
                  dTotal = 17;
                 } else if (dTotal == "5,153") {
                  dTotal = 18;
                 } else if (dTotal == "5,154") {
                  dTotal = 19;
                 } else if (dTotal == "5,155") {
                  dTotal = 20;
                 } else if (dTotal == "5,156") {
                   dTotal = 21;
                  } else if (dTotal == "5,157") {
                    dTotal = 12;
                  } else if (dTotal == "5,158") {
                    dTotal = 13;
                  } else if (dTotal == "5,159") {
                    dTotal = 14;
                  } else if (dTotal == "5,1510") {
                    dTotal = 15;
                  }
               } else if (dTotal[0] == 6 && dTotal[1] == 16) {
                    dTotal = 16;
               } else if (dTotal[0] == 7 && dTotal[1] == 17) {
                     dTotal = 17;
               } else if (dTotal[0] == 8 && dTotal[1] == 18) {
                    dTotal = 18;
               } else if (dTotal[0] == 9 && dTotal[1] == 19) {
                    dTotal = 19;
               } else if (dTotal[0] == 10 && dTotal[1] == 20) {
                    dTotal = 20;
                  }
                }
                
            if (allHands != undefined) {
                while (dTotal < 17) {
                    dTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
                }
            }



           if (pTotal <= 21) {
            while (dTotal < 17) {
                dTotal += cardPool()[Math.floor(Math.random() * cardPool().length)];
            }
          }
            console.log("Player Total: " + pTotal + "| Dealer Total: " + dTotal);
            
            if (allHands != undefined) {
                console.log("Player Total: " + allHands + "| Dealer Total: " + dTotal);
                for (i = 0; i < allHands.length; i++) {
                    if (allHands[i] > 21){
                        lossTotal += 1;
                    } else if ((allHands[i] != undefined) && dTotal > 21) {
                        winTotal = i + 1;       //fix
                    } else if (allHands[i] > dTotal) {
                        winTotal += 1;
                    } else if (allHands[i] == dTotal) {
                        pushTotal += 1;
                    } else if (allHands[i] < dTotal) {
                        lossTotal += 1;
                    } else if (allHands[i] == undefined) {
                      noHands += 1;
                    }
                }
            } else {
              if (pTotal > 21){
                lossTotal = 1;
             } else if (dTotal > 21) {
                winTotal = 1;
              } else if (pTotal > dTotal) {
                winTotal = 1;
              } else if (pTotal == dTotal) {
                pushTotal = 1;
              } else if (pTotal < dTotal) { // fix for all hands
                lossTotal = 1;
            }
          }
 
            state = "Done";
            break;

            default:
                console.log("Error");
          }

        }
        return ("Win Total: " + winTotal + " | Loss Total: " + lossTotal + " | Push Total: " + pushTotal + " | No Value Split Hands: " + noHands);
      }
    
  

console.log(playBJ());
console.log("________");
console.log(playBJ());
console.log("________");
console.log(playBJ());
console.log("________");
console.log(playBJ());
console.log("________");
console.log(playBJ());


