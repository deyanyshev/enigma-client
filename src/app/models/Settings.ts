export class Settings {
    rotors: string[];
    reflector: string;
    plugs: string[];
    positions: string[];
    alphabet: string;

    constructor() {
        this.reflector = "";
        this.plugs = [];
        this.rotors = [];
        this.positions = [];
        this.alphabet = "";
    }
}