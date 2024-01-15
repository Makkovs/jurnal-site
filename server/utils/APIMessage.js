class APIMessage {
    static messageDeleted(item, id) {
        return { message: `${item} with id ${id} was deleted!` };
    };

    static messageUpdated(item, id) {
        return { message: `${item} with id ${id} was updated!` };
    };

    static messageUserRanged(userId, toClassId) {
        return { message: `User with id ${userId} ranged to class with id ${toClassId}!` };
    };
};

module.exports = APIMessage;