import { env } from "../../../config/env.service.js"

export const ErrorResponse = ({

    status=400,
    message="Something went wrong",
    extra=undefined
} = {}) => { 


throw new Error(message, { cause:{status, extra}})


}


export const BadRequestException =({message="Bad Request",extra=undefined}={}) => {

return ErrorResponse({status:400, message: message, extra: extra})

}
export const NotFoundException =({message="Not found error",extra=undefined}={}) => {
return ErrorResponse({status:404, message, extra})

}
export const ConflictException =({message="Conflict error",extra=undefined}={}) => {
return ErrorResponse({status:409, message, extra})

}
export const UnauthorizedException =({message="Unauthorized error",extra=undefined}={}) => {
return ErrorResponse({status:401, message, extra})

}
export const ForbiddenException =({message="Forbidden error",extra=undefined}={}) => {
return ErrorResponse({status:403,  message, extra})  

}

export const globalHandlingError = (err, req, res, next) => {

    console.log(err.stack,"from error stack");
    const mood= env.mood=="dev"
    console.log(mood)
    const status=err.status ?err.status : err.cause? err.cause.status : 500
    const defaultMessage= "Something went wrong"
    const displayErrorMessage=err.message || defaultMessage
res.status(status).json({
    stack: mood? err.stack : null
    ,message: mood? displayErrorMessage : defaultMessage,
});


}




