import p5 from "p5";
import React, { useEffect } from "react";

interface FallingLetter {
  x: number;
  y: number;
  letter: string;
  speed: number;
  fall(): void;
  display(): void;
}

const FallingObjectsSketch: React.FC = () => {
  const letters: FallingLetter[] = [];

  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight);
      p.noStroke();
    };

    p.draw = () => {
      p.background(255);

      for (let i = 0; i < letters.length; i++) {
        letters[i].fall();
        letters[i].display();
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    class FallingLetter {
      x: number;
      y: number;
      letter: string;
      speed: number;

      constructor(x: number, y: number, letter: string) {
        this.x = x;
        this.y = y;
        this.letter = letter;
        this.speed = p.random(1, 5);
      }

      fall() {
        this.y += this.speed;

        if (this.y > window.innerHeight) {
          this.y = 0;
        }
      }

      display() {
        p.fill(0);
        p.textSize(24);
        p.text(this.letter, this.x, this.y);
      }
    }

    const addRandomLetter = () => {
      const randomLetter = String.fromCharCode(p.floor(p.random(65, 91))); // A-Z
      const x = p.random(window.innerWidth);
      const y = p.random(window.innerHeight);

      const newLetter = new FallingLetter(x, y, randomLetter);
      letters.push(newLetter);
    };

    p.mousePressed = () => {
      addRandomLetter();
    };

    p.keyPressed = () => {
      if (p.key === " ") {
        addRandomLetter();
      }
    };

    for (let i = 0; i < 5; i++) {
      addRandomLetter();
    }
  };

  useEffect(() => {
    const sketchInstance = new p5(sketch);

    return () => {
      sketchInstance.remove();
    };
  }, []);

  return null;
};

export default FallingObjectsSketch;
