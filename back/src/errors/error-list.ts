import httpStatus from "http-status";

const errorsList = {

    conflict: () => {
        return {
            name: 'conflict',
            message: 'conflict! this item already exists',
            status: httpStatus.CONFLICT
        }
    },
    notFound: (item = 'item') => {
        return {
            name: 'notFound',
            message: `${item} not found`,
            status: httpStatus.NOT_FOUND
        }
    },
    schema: (errors: string[] | string) => {
        return {
            name: 'schema',
            message: errors,
            status: httpStatus.UNPROCESSABLE_ENTITY
        }
    },
    internal: () => {
        return {
            name: 'internal',
            message: 'sorry, something went wrong',
            status: httpStatus.INTERNAL_SERVER_ERROR
        }
    },
    insufficientBalance: () => {
        return {
            name: 'insufficientBalance',
            message: 'sorry, insufficient balance',
            status: httpStatus.PAYMENT_REQUIRED
        }
    },
    gameAlreadCompleted: () => {
        return {
            name: 'gameAlreadCompleted',
            message: 'It is not possible to place the bet as the game has already been completed',
            status: httpStatus.CONFLICT
        }
    },
    toFinishFinishedGame: () => {
        return {
            name: 'toFinishFinishedGame',
            message: ' It is not possible to finish a finished game',
            status: httpStatus.CONFLICT
        }
    }



}
export default errorsList;