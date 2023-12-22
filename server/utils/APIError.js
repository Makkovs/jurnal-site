class ApiError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};

class CustomApiError {
    static errorUndefinedArg() {
        throw new ApiError("One of the arguments was undefined!");
    };

    static errorCandidateNotFound(candidateId) {
        throw new ApiError(`Candidate with id ${candidateId} was not found!`);
    };

    static errorAlreadyExist(item) {
        throw new ApiError(`This ${item} already exists!`);
    };
};


module.exports = CustomApiError;