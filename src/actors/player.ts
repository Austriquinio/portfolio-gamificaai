import { Actor, Engine, Color, vec, Keys, CollisionType } from "excalibur";

export class PLayer extends Actor {

    private velocidade: number = 180

    constructor() {

        super({
            pos: vec(600, 600),
            width: 32,
            height: 32,
            name: "jogador",
            color: Color.Cyan,
            collisionType: CollisionType.Active

        })

    }
    onInitialize(engine: Engine<any>): void {
        engine.input.keyboard.on("hold", (event) => {
            switch (event.key) {
                case Keys.Left:
                case Keys.A:

                    this.vel.x = -this.velocidade
                    break;

                case Keys.Right:
                case Keys.D:

                    this.vel.x = this.velocidade
                    break;

                case Keys.Up:
                case Keys.W:

                    this.vel.y = -this.velocidade
                    break;

                case Keys.Down:
                case Keys.S:

                    this.vel.y = this.velocidade
                    break;


                default:
                    this.vel.x = 0
                    this.vel.y = 0

                    break;
            }
        })


        engine.input.keyboard.on("release", (event) => {
            if (
                event.key == Keys.A ||
                event.key == Keys.Left ||
                event.key == Keys.D ||
                event.key == Keys.Right 
            ) { 
                this.vel.x = 0
            }
            

        })
    }
}

