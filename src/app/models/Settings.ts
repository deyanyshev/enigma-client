import { Rotor } from "./Rotor";

export class Settings {
    rotorSize: number;
    reflector: string;
    plugs: string;
    rotors: Rotor[];

    constructor() {
        this.reflector = "";
        this.plugs = "";
        this.rotorSize = 0;
        this.rotors = [];
    }
}