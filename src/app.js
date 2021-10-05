class App {
  constructor() {
    this.spaceship = null;
  }
  start(){
      this.enrollSpaceship();
      let choosenOptions
      do {
        choosenOptions = this.showInitialMenu()
        this.redirectFeature(choosenOptions)
      } while(choosenOptions != "3")
      this.printAndExit()
    }
  enrollSpaceship() {
    let spaceshipName = prompt("Qual o nome da nave?");
    let crewQuantity = prompt("Qual a quantidade de tripulantes");
    let spaceshipKind = this.askForSpaceshipKind();
    if (spaceshipKind == "1") {
      let weaponsQuantity = prompt("Quantas armas a nave possui? ");
      this.spaceship = new BatleSpaceship(
        spaceshipName,
        crewQuantity,
        weaponsQuantity
      );
    } else {
      let sitsQuantity = prompt("Quantos lugares possui na nave?");
      this.spaceship = new TransportSpaceship(
        spaceshipName,
        crewQuantity,
        sitsQuantity
      );
    }
  }
  askForSpaceshipKind() {
    let choosenOptions;
    while (!["1", "2"].includes(choosenOptions)) {
      choosenOptions = prompt("Qual tipo de nave? \n1- Batalha \n2-Transporte");
    }
    return choosenOptions;
  }
  showInitialMenu() {
    const promptMessage =
      "O que vpcê deseja fazer?\n" +
      "1- Acelerar a nave \n" +
      "2- Trocar a nave\n" +
      "3- Imprimir a nave";
    let choosenOptions = prompt(promptMessage);
    while (!["1", "2", "3"].includes(choosenOptions)) {
      choosenOptions = prompt(promptMessage);
    }
    return choosenOptions;
  }
  redirectFeature(choosenOptions) {
    switch (choosenOptions) {
      case "1":
        this.accelationSpaceship();
        break;
      case "2":
        this.enrollSpaceship();
        break;
    }
  }
  accelationSpaceship() {
    let acceleration = Number(prompt("Quanto gostaria de acelerar a nave?"));
    this.spaceship.speedUp(acceleration);
  }
  printAndExit() {
    let finalMessage =
      "Nome: " +
      this.spaceship.name +
      "\n" +
      "Quantidade de tripulantes: " +
      this.spaceship.crewQuantity +
      "\n"+
      "Velocidade atual: " +
      this.spaceship.currentVelocity +
      "\n";
    alert(finalMessage);
  }
}
