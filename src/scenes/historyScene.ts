import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class historyScene extends Scene {
    elementoTexto?: HTMLElement

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut ({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }
    fadeOutElement(elemento: HTMLElement) {

        let opacidade = parseFloat(elemento.style.opacity)


        if (opacidade > 0) {

            opacidade = opacidade - 0.1

            elemento.style.opacity = opacidade.toString()
        }
    }
    // // Ao entrar ou sair da cena, utiliza o feito de transição lenta
    // onTransition(direction: "in" | "out"): Transition | undefined {
    //     return new FadeInOut({
    //         direction: direction,
    //         color: Color.Black,
    //         duration: 1000
    //     })
    // }

    onInitialize(_engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.elementoTexto = document.createElement("div") as HTMLElement

        this.elementoTexto.style.opacity = "1"

        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        this.elementoTexto.classList.add("sobre-gamifica")

        this.elementoTexto.innerHTML = `
        <h2>Sobre o GamificaAi</h2>
        <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
          usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
          experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
          equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
          desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>
      `

        let actorLogo = new Actor({
            pos: vec(935, 430)
        })

        // Utilizar imagem do logo
        let imagemLogo = Resources.Logo2.toSprite()

        // Aplicar zoom na imagem - 40% de x, e 40% de y
        imagemLogo.scale = vec(0.7, 0.7)

        // Configurar o actor para usar a imagem
        actorLogo.graphics.add(imagemLogo)

        // Adicionando Actor Logo na tela
        this.add(actorLogo)

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                this.engine.goToScene("this.elementoTexto?")

                _engine.goToScene("gamificacao")
            }

        })
    }

    onDeactivate(_context: SceneActivationContext<undefined>): void {
        this.elementoTexto?.remove()
    }
}