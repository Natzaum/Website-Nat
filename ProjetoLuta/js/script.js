let log = new Log(document.querySelector(".log"))

let char = new mage("Bolsonaro")
let monster = new monstrengo("Lula")

const stage = new Stage(
    char, 
    monster,
    document.querySelector(".char"),
    document.querySelector(".monster"),
    log
)

stage.start()