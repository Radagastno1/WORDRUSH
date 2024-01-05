import p5 from "p5";
import React, { useEffect, useState } from "react";

interface FallingLetterInterface {
  x: number;
  y: number;
  letter: string;
  inScreen: boolean;
  speed: number;
  fall(): void;
  display(p: p5): void;
  use(): void;
}

class FallingLetter implements FallingLetterInterface {
  x: number;
  y: number;
  letter: string;
  inScreen: boolean;
  speed: number;

  constructor(x: number, y: number, letter: string) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.inScreen = true;
    this.speed = Math.random() * 2;
  }

  fall() {
    this.y += this.speed;

    if (this.y > window.innerHeight) {
      this.inScreen = false;
    }
  }

  display(p: p5) {
    if (this.inScreen) {
      p.fill(0);
      p.textSize(24);
      p.textAlign(p.CENTER, p.TOP);
      p.text(this.letter, this.x, this.y);
    }
  }

  use() {
    this.inScreen = false;
  }
}

const FallingObjectsSketch2: React.FC = () => {
  const [letters, setLetters] = useState<FallingLetter[]>([
    new FallingLetter(50, 50, "S"),
    new FallingLetter(500, 50, "T"),
    new FallingLetter(800, 50, "O"),
  ]);

  useEffect(() => {
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.noStroke();
      };

      const draw = () => {
        p.background("rgb(220, 243, 192)");

        for (let i = letters.length - 1; i >= 0; i--) {
          letters[i].fall();
          letters[i].display(p);

          if (!letters[i].inScreen) {
            letters.splice(i, 1);
          }
        }

        requestAnimationFrame(draw);
      };

      requestAnimationFrame(draw);

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    const sketchInstance = new p5(sketch);

    return () => {
      sketchInstance.remove();
    };
  }, [p5]);

  return null;
};

export default FallingObjectsSketch2;
