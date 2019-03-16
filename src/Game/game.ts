import Phaser from 'phaser';
import Player from '../Art/Player.png'

export class Game extends Phaser.Game {

    constructor(parent: string) {
        const docElement = document.documentElement
        const width = docElement.clientWidth
        const height = docElement.clientHeight

        const config: GameConfig = {
            width: 1024,
            height: 768,
            parent: parent,
            render: {pixelArt: true},
            scene: Scene,
            type: Phaser.CANVAS,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: {y: 300},
                    debug: false
                }
            }
        }


        super(config)
    }


}

class Scene extends Phaser.Scene
{
    private preload(): void {
        this.cameras.main.setBackgroundColor('#FF00FF')

        const player = new Image()
        player.src = Player

        this.textures.addImage('player2', player)
    }

    private create(): void {

        this.add.image(300, 300, 'player2')
        this.physics.add.image(100, 100, 'player2')

        this.add.renderTexture(100, 100)
        this.add.text(100, 100, 'Hello')

        // new Phaser.GameObjects.Star(this, 100, 100)
        // new Phaser.GameObjects.Sprite(this, 100, 100, 'player')
    }

    update(time: number, delta: number): void {
    }
}