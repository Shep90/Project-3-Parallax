# Project-3-Parallax
Simulating parallax by having a character run down a never ending hallway

I was inspired by a game by the name of DOOM which, in the very early days of 3d gaming, simulated parallax and used other computing tricks that essentially blended 2D textures and animations in a 3D space. When I started this project, I initially wanted the character to turn left and right, but in doing so I had to essentially set up a full animation, and I was having trouble with setting up the timing of the parallax movement during turns, so I decided to just have the character run down the hallway indefinitely. To do that I had each image grow by a fraction of half of the one before it. The process of this created some stuttering, so I smoothed it as much as I could, and took the edges off of my textures so it was harder to see tell when the sequence would reset. When writing the code for this I also decided to write almost the entirety of the code in a class to gain a better understanding of classes in Javascript, which I am much more confident with now. 

https://editor.p5js.org/Shep90/sketches/rB5M7mwxp
