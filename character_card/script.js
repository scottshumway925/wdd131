const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/img/snortleblat.png',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };


const characterClass = document.querySelector("#class")
const characterLevel = document.querySelector("#level")
const characterHealth = document.querySelector("#health")
const characterImage = document.querySelector(".image")
const characterName = document.querySelector(".name")

characterClass.innerHTML = character.class
characterLevel.innerHTML = character.level
characterHealth.innerHTML = character.health
characterImage.src = character.image
characterName.innerHTML = character.name

function onAttackClick() {
    character.attacked()
    characterHealth.innerHTML = character.health
}

function onLevelUpClick() {
    character.levelUp()
    characterLevel.innerHTML = character.level
}

document.querySelector("#attacked").addEventListener("click", onAttackClick)
document.querySelector("#levelup").addEventListener("click", onLevelUpClick)