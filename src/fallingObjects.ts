// import p5 from "p5";
// import React, { useEffect, useState } from "react";

// interface FallingLetterInterface {
//   x: number;
//   y: number;
//   letter: string;
//   inScreen: boolean;
//   speed: number;
//   fall(): void;
//   display(): void;
//   use(): void;
// }

// class FallingLetter implements FallingLetterInterface {
//   x: number;
//   y: number;
//   letter: string;
//   inScreen: boolean;
//   speed: number;
//   p: p5;

//   constructor(p: p5, x: number, y: number, letter: string) {
//     this.x = x;
//     this.y = y;
//     this.letter = letter;
//     this.inScreen = true;
//     this.speed = Math.random() * (5 - 1) + 1;
//     this.p = p;
//   }

//   fall() {
//     this.y += this.speed;

//     if (this.y > this.p.windowHeight) {
//       this.y = 0;
//       this.inScreen = true;
//     }
//   }

//   display() {
//     if (this.inScreen) {
//       this.p.fill(0);
//       this.p.textSize(24);
//       this.p.text(this.letter, this.x, this.y);
//     }
//   }

//   use() {
//     this.inScreen = false;
//   }
// }

// const FallingObjectsSketch: React.FC = () => {
//   const [letters, setLetters] = useState<FallingLetter[]>([]);
//   const level1Letters: string[] = ["S", "O", "T"];
//   const [usedLetters, setUsedLetters] = useState<string[]>([]);

//   useEffect(() => {
//     const sketch = (p: p5) => {
//       p.setup = () => {
//         p.createCanvas(window.innerWidth, window.innerHeight);
//         p.noStroke();
//         p.frameRate(1); // Set frame rate to 1 frame per second
//       };

//       p.draw = () => {
//         p.background(255);

//         for (let i = letters.length - 1; i >= 0; i--) {
//           letters[i].fall();
//           letters[i].display();

//           if (!letters[i].inScreen) {
//             setUsedLetters((prevUsedLetters) => [
//               ...prevUsedLetters,
//               letters[i].letter,
//             ]);
//             letters.splice(i, 1);
//           }
//         }
//       };

//       p.windowResized = () => {
//         p.resizeCanvas(window.innerWidth, window.innerHeight);
//       };

//       const addRandomLetter = () => {
//         if (level1Letters.length > 0) {
//           const randomIndex = Math.floor(Math.random() * level1Letters.length);
//           const randomLetter = level1Letters.splice(randomIndex, 1)[0];

//           const x = p.random(window.innerWidth);
//           const y = p.random(window.innerHeight);

//           const newLetter = new FallingLetter(p, x, y, randomLetter);
//           setLetters((prevLetters) => [...prevLetters, newLetter]);
//         }
//       };

//       p.mousePressed = () => {
//         addRandomLetter();
//       };

//       p.keyPressed = () => {
//         if (p.key === " ") {
//           addRandomLetter();
//         }
//       };
//     };

//     const sketchInstance = new p5(sketch);

//     return () => {
//       sketchInstance.remove();
//     };
//   }, []);

//   return null;
// };

// export default FallingObjectsSketch;
