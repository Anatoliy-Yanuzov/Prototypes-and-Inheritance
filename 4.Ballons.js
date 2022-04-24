function ballonClasses() {
    class Ballon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBallon extends Ballon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight)
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this._ribbon = { color: this.ribbonColor, length: this.ribbonLength };
        }
        get ribbon (){
            return this._ribbon;
        }

        set ribbon(value) {
            this._ribbon = value;
        }
    }

}