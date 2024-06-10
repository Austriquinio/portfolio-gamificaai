import {Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, vec} from "excalibur";
import { Resources } from "../resources";

export class expoScene extends Scene {

   

onInitialize(engine: Engine<any>): void {
    let tiledMap = Resources.Mapa
    this.backgroundColor= Color.Blue
    tiledMap.addToScene(this)
}

}
