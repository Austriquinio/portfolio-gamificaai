import {Actor, Color, Engine, FadeInOut, Keys, Scene, Transition, SceneActivationContext, vec} from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
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

    onInitialize(_engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.elementoTexto = document.createElement("div") as HTMLElement

        this.elementoTexto.style.opacity = "1"

        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        this.elementoTexto.classList.add("about-game")
    
    this.elementoTexto.innerHTML = 
    `<h2>O que é gamificação?</h2>
    <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de 
    engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes 
    como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados
    e aumentar a participação e o comprometimento dos participantes.</p>`
    
    // (engine: Engine<any>): void {
    //     this.backgroundColor = Color.Chartreuse
    // }
    let actorLogo = new Actor({
        pos: vec(_engine.drawWidth / 4, 430)
    })

    // Utilizar imagem do logo
    let imagemLogo = Resources.Logo2.toSprite()

    // Aplicar zoom na imagem - 40% de x, e 40% de y
    imagemLogo.scale = vec(0.7, 0.7)

    let spriteLogoGamificaAi = Resources.Logo2.toSprite()
    spriteLogoGamificaAi.scale = vec(0.7, 0.7)

    // Configurar o actor para usar a imagem
    let actorLogoGamificaAi = new Actor({
        pos: vec(300, _engine.halfDrawHeight)
    })

    // Adicionando Actor Logo na tela
     this.add(actorLogo)

        this.input.keyboard.on("press", (_event) => {
             if (_event.key == Keys.Enter) {
                this.fadeOutElement(this.elementoTexto!)
             this.engine.goToScene("exposicao",{
                sourceOut:new FadeInOut ({duration:1000})

             })
             }
        })
    }   

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementoTexto?.remove()
    }
}
