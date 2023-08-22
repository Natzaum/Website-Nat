class character{
    _life = 1
    maxlife = 1
    attack = 0
    defense = 0
    magicattack = 0
    mana = 0
    maxmana = 1

    constructor(name){
        this.name = name
    }

    get life(){
        return this._life
    }

    set life(newlife){
        this._life = newlife < 0 ? 0 : newlife
    }
}

class mage extends character{
    constructor(name){
        super(name)
        this.life = 70
        this.attack = 5
        this.magicattack = 20
        this.defense = 5
        this.maxlife = this.life
        this.mana = 30
        this.maxmana = this.mana
    }
}

class knight extends character{
    constructor(name){
        super(name)
        this.life = 120
        this.attack = 15
        this.defense = 8
        this.maxlife = this.life
    }
}

class monstrengo extends character{
    constructor(name){
        super(name)
        this.life = 300
        this.attack = 5
        this.defense = 8
        this.maxlife = this.life
    }
}

class gabrieldorock extends character{
    constructor(){
        super("gabrieldorock")
        this.life = 230
        this.attack = 15
        this.defense = 10
        this.maxlife = this.life
    }
}

class Stage{
    constructor(fighter1, fighter2, fighter1EL, fighter2EL, logObject){
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1EL = fighter1EL
        this.fighter2EL = fighter2EL
        this.log = logObject
    }

    start(){
        this.update()

        this.fighter1EL.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter1EL.querySelector(".attackMagic").addEventListener("click", () => this.doMagicAttack(this.fighter1, this.fighter2))

        this.fighter2EL.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1))
    }

    update(){
        //fighter1
        this.fighter1EL.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        let f1pct = (this.fighter1.life / this.fighter1.maxlife) * 100
        this.fighter1EL.querySelector(".lifebar .bar").style.width = `${f1pct}%`
        
        //fighter2
        this.fighter2EL.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let f2pct = (this.fighter2.life / this.fighter2.maxlife) * 100
        this.fighter2EL.querySelector(".lifebar .bar").style.width = `${f2pct}%`
    }

    doAttack(attacking, attacked){
        if(attacking.life <= 0 || attacked.life <= 0){
            this.log.addMessage("ja morreu");
            return
        }
        let attackfactor = (Math.random() * 2).toFixed(2)
        let defensefactor = (Math.random() * 2).toFixed(2)

        let actualattack = attacking.attack * attackfactor
        let actualdefense = attacked.defense * defensefactor

        if(actualattack > actualdefense){
            attacked.life -= actualattack
            this.log.addMessage(`${attacking.name} causou ${actualattack.toFixed(2)} de dano em ${attacked.name}`);
        }
        else{
            this.log.addMessage(`${attacked.name} defendeu`);
        }

        this.update()
    }
    doMagicAttack(attacking, attacked){
        if(attacking.life <= 0 || attacked.life <= 0){
            this.log.addMessage("ja morreu");
            return
        }
        let magicattackfactor = (Math.random() * 2).toFixed(2)
        let defensefactor = (Math.random() * 2).toFixed(2)

        let magicactualattack = attacking.magicattack * magicattackfactor
        let actualdefense = attacked.defense * defensefactor

        if(magicactualattack > actualdefense){
            attacked.life -= magicactualattack
            this.log.addMessage(`${attacking.name} causou ${magicactualattack.toFixed(2)} de dano magico em ${attacked.name}`);
        }
        else{
            this.log.addMessage(`${attacked.name} defendeu`);
        }

        this.update()
    }
}

class Log{
    list = []

    constructor(listEL){
        this.listEL = listEL
    }

    addMessage(msg){
        this.list.unshift(msg);
        this.render();
    }

    render(){
        this.listEL.innerHTML = ""

        for(let i in this.list){
            this.listEL.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}