import {Actor, Color, Engine, FadeInOut, Keys, Transition, Scene, SceneActivationContext, vec} from "excalibur";
import { Resources } from "../resources";
import { PLayer } from "../actors/player";

export class expoScene extends Scene {

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut ({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

onInitialize(engine: Engine<any>): void {
    this.backgroundColor= Color.Blue

    let tiledMap = Resources.Mapa
    
    let offsetX = 138
    let offsetY = 100

        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY),
        })

        this.camera.zoom = 1.3

        let jogador = new PLayer()

        jogador.z = 1

        this.add(jogador)
    }

}

    