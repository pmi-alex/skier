class skier {
    constructor(pos) {
        this.pos = pos;
        this.h = 32;
        this.img = new Image();
        this.img.src = "skier.png";
        this.angle = 0;
        this.sq = 640;
    }

    Draw(c) {
        context.drawImage(this.img, this.pos.x, this.pos.y);
        this.Rotate(this.angle);
    }

    Move(x, y) {
        this.pos.x += x * this.h;
        this.pos.y += y * this.h;
        
        /*for(var i = 0; i < this.h; i++) {
            this.pos.x += x;
            this.pos.y += y;
        }*/
    }

    Rotate(angle) {
        context.save();
        context.fillStyle = 'white';
        context.fillRect(this.pos.x, this.pos.y, this.pos.x + this.img.width, this.pos.y + this.img.height);
        context.translate(this.pos.x + this.img.width/2, this.pos.y + this.img.height/2);
        context.rotate(angle * Math.PI/180);
        context.drawImage(this.img, -this.img.width/2, -this.img.height/2);
        context.restore();
    }

    DoCommand(cmd) {
        switch(cmd) {
            case "up":
                if (this.pos.y - this.img.height >= 0) { 
                    this.angle = 270;
                    this.Move(0, -1);
                }
                break;
            case "down":
                if (this.pos.y + this.img.height < this.sq) {
                    this.angle = 90;
                    this.Move(0, 1);
                }
                break;
            case "left":
                if (this.pos.x - this.img.width >= 0) {
                    this.angle = 180;
                    this.Move(-1, 0);
                }
                break;
            case "right":
                if (this.pos.x + this.img.width < this.sq) {
                    this.angle = 360;
                    this.Move(1, 0);
                }
                break;
            default:
                //
                break;
        }
    }
}