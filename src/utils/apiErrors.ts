import { messages, defaultMessage } from '@consts/errorMessages'


export const getErrorMessage = (statusCode: number) => messages[statusCode] || defaultMessage