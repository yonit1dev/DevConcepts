// Object - Oriented Programming in JS

// Factory function
function colorObj(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  };

  color.hex = function () {
    return (
      "#" +
      ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
        .toString(16)
        .slice(1)
    );
  };

  return color;
}

const firstColor = colorObj(255, 84, 90);
console.log(firstColor.rgb());
console.log(firstColor.hex());
