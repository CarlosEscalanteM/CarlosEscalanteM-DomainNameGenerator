/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronounOrArticle = ["the", "our", "his", "her", "my", "a"];
let adjective = ["great", "stupid", "fantastic", "rational", "clumsy", "fancy"];
let noun = ["monkey", "racoon", "chipmunk", "walrus", "rat", "teacher"];
let domain = [".com", ".edu", ".ve", ".gov", ".mx", "co"];

for (let i = 0; i < pronounOrArticle.length; i++) {
  for (let j = 0; j < adjective.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < domain.length; l++) {
        console.log(
          `${pronounOrArticle[i]}${adjective[j]}${noun[k]}${domain[l]}`
        );
      }
    }
  }
}
