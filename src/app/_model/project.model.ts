export class Project {

    constructor(name: string);

    constructor(
        public name: string,
        public imageEncoded?: string,
        public imageDecoded?: string,
        public id?: number
    ) { }

}
