const lampada = document.querySelector<HTMLImageElement>("#lampada")

let estadoLampada: "apagada" | "acesa" | "quebrada" = "apagada";
let contador: number = 0;
let clickTimeout: number | undefined;

function toggleLamp(): void {
    if (estadoLampada === "quebrada") {
      return;
    }
    
    contador++;
    
    // Limpa o temporizador anterior e começa um novo
    if (clickTimeout !== undefined) {
      clearTimeout(clickTimeout);
    }
    if (contador > 5) {
      estadoLampada = "quebrada";
      atualizarImagem(); 
      setTimeout(() => {
        alert("Dedinho nervoso, a lâmpada quebrou e não pode mais ser acesa!");
    }, 200); 
      return;
    }
    
    if (estadoLampada === "apagada") {
      estadoLampada = "acesa";
    } else if (estadoLampada === "acesa") {
      estadoLampada = "apagada"; 
    }
    
    atualizarImagem();
    
    clickTimeout = setTimeout(() => {
        contador = 0; // Reseta o contador de cliques
    }, 5000);
}

function atualizarImagem() {
  if(lampada) {
    if (estadoLampada === "apagada") {
        lampada.src = "./images/apagada.png";
    } else if (estadoLampada === "acesa") {
        lampada.src = "./images/acesa.png";
    } else if (estadoLampada === "quebrada") {
      lampada.src = "./images/quebrada.png";
    }
  }
}

(window as any).toggleLamp = toggleLamp;
