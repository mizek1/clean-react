export class UnexpectedError extends Error {
    constructor() {
        super('Algo errado aconteceu. Tente novamente mais tarde.')
        this.name = 'UnexpectedError'
    }
}