import {Actor, Color, Engine, FadeInOut, Transition, Scene, vec, CollisionType} from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";
import { Npc } from "../actors/npc";

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

        let spawnPoint = tiledMap.getObjectsByName("Player_Spawn")[0]

        let jogador = new Player(vec(spawnPoint.x + offsetX, spawnPoint.y + offsetY))

        jogador.z = 1

        this.add(jogador)

        let npcSpawnPointA = tiledMap.getObjectsByName("Npc_a")[0]
        let npcSpawnPointB = tiledMap.getObjectsByName("Npc_b")[0]
        let npcSpawnPointC = tiledMap.getObjectsByName("Npc_c")[0]

        let npcA = new Npc (
            vec(npcSpawnPointA.x + offsetX, npcSpawnPointA.y + offsetY),
            Color.Chartreuse,
            "npcA"
        )

        let npcB = new Npc (
            vec(npcSpawnPointB.x + offsetX, npcSpawnPointB.y + offsetY),
            Color.Chartreuse,
            "npcB"
        )

        let npcC = new Npc (
            vec(npcSpawnPointC.x + offsetX, npcSpawnPointC.y + offsetY),
            Color.Chartreuse,
            "npcC"
        )

        this.add(npcA)
        this.add(npcB)
        this.add(npcC)

        this.camera.strategy.lockToActor(jogador)
        

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

    