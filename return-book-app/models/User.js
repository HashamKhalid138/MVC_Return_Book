class User {
    constructor(id, fineAmount = 0) {
        this.id = id;
        this.fineAmount = fineAmount;
    }
}

const users = [
    new User("U001", 0),
    new User("U002", 50),
];

module.exports = {
    users,
    findUserById: (id) => users.find((user) => user.id === id),
    updateUserFine: (id, fine) => {
        const user = users.find((user) => user.id === id);
        if (user) {
            user.fineAmount = fine;
        } else {
            users.push(new User(id, fine));
        }
    },
};
