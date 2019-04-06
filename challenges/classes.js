// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constructor(cuboid) {
        this.cuboidLength = cuboid.cuboidLength;
        this.cuboidWidth = cuboid.cuboidWidth;
        this.cuboidHeight = cuboid.cuboidHeight;
    }
    volume() {
        return (this.cuboidLength * this.cuboidWidth * this.cuboidHeight)
    }
    surfaceArea() {
        return (2 * (this.cuboidLength * this.cuboidWidth + this.cuboidLength * this.cuboidHeight + this.cuboidWidth * this.cuboidHeight))
    }
};
 
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log('Below should also say 100 and 130')
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.