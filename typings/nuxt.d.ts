declare module 'nuxt' {
    import { Context, Request, Response } from 'egg';
    export class Builder {
        constructor (nuxt: Nuxt)
        build(): Promise<any>
    }

    export class Nuxt {
        constructor (config: any)
        render(req :Request, res: Response, cb: (p: Promise<any>) => void): void;
    }
}