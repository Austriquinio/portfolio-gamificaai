import {Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, vec} from "excalibur";
import { Resources } from "../resources";

export class expoScene extends Scene {
    onInitialize(engine: Engine<any>): void {
    this.backgroundColor= Color.Blue
    duration: 1000
}