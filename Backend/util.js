function creatResult(error, dbResult) {
    return error ? creatError(error) : creatSuccess(dbResult)
}

function creatError(error) {
    const result = {}
    result['status'] = 'error'
    result['error'] = error
    return result;
}

function createEmptyResult(message) {
    const result = {}
    result['status'] = 'error'
    result['message'] = message
    return result;
}

function creatSuccess(dbResult) {
    const result = {}
    result['status'] = 'success'
    result['data'] = dbResult
    return result;
}

module.exports = {
    creatResult: creatResult,
    creatError: creatError,
    creatSuccess: creatSuccess,
    createEmptyResult: createEmptyResult
}