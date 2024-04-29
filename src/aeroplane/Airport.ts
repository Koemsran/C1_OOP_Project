import { route } from "./Route";

export class airport{
    private routes: route[] = [];
    constructor(private name: string, private code: string){
        this.name = name;
        this.code = code;
    }
}
