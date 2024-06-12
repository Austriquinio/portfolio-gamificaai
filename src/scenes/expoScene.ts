import {Actor, Color, Engine, FadeInOut, Keys, Transition, Scene, SceneActivationContext, vec, CollisionType} from "excalibur";
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

        let camadaObjetosColisores = tiledMap.getObjectLayers("ColisoresO")[0]


        camadaObjetosColisores.objects.forEach(objeto => {

            const objetoAtual = new Actor({
                name: objeto.name,
                x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
                y: objeto.y + offsetX + (objeto.tiledObject.height! / 2),
                width: objeto.tiledObject.width,
                height: objeto.tiledObject.height,
                collisionType: CollisionType.Fixed,
                z: 99
            })
            this.add(objetoAtual)
        })
    }

}

    