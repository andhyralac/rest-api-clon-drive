
const HttpStatus = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
}

const Ok = (res, data) => {
    return res.status(HttpStatus.OK).json({
        error: false,
        status: HttpStatus.OK,
        statusMsg: 'Ok',
        data: data,
    });
}

const Created = (res, data) => {
    return res.status(HttpStatus.CREATED).json({
        error: false,
        status: HttpStatus.CREATED,
        statusMsg: 'Created',
        data: data,
    });
}

const BadRequest = (res, error) => {
    return res.status(HttpStatus.BAD_REQUEST).json({
        error: true,
        status: HttpStatus.BAD_REQUEST,
        statusMsg: 'Bad Request',
        errors: error,
    });
}

const NotFound = (res, error) => {
    return res.status(HttpStatus.NOT_FOUND).json({
        error: true,
        status: HttpStatus.NOT_FOUND,
        statusMsg: 'Not Found',
        errors: error,
    });
}

const Unauthorized = (res, error) => {
    return res.status(HttpStatus.UNAUTHORIZED).json({
        error: true,
        status: HttpStatus.UNAUTHORIZED,
        statusMsg: 'Unauthorized',
        errors: error,
    });
}

const Forbidden = (res, error) => {
    return res.status(HttpStatus.FORBIDDEN).json({
        error: true,
        status: HttpStatus.FORBIDDEN,
        statusMsg: 'Forbidden',
        errors: error,
    });
}

const Error = (res, error) => {
    console.log('[ERROR]: ', error)
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: true,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        statusMsg: 'Internal server error',
        errors: 'Servidor no responde la peticion'
    });
}


export default {
    Ok,
    Created,
    BadRequest,
    NotFound,
    Unauthorized,
    Forbidden,
    Error
}