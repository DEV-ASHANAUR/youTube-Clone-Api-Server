export const createError = (status,message)=>{
    const err = new error();
    err.status = status;
    err.message = message;
    return err;
}