import { Color, Engine, FadeInOut, Scene, SceneActivationContext, Transition } from "excalibur";

export class caseScene extends Scene {
    private objetoInteracao: any
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    private textoDaScene?: string = ""

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray
    }
    onActivate(context: SceneActivationContext<unknown>): void {
        this.objetoInteracao = context.data 
        console.log(this.objetoInteracao.nomeDoActor == "mesa_stand_a"); {
            this.textoDaScene = "Descrição do case Alpha"
        }
    }
}