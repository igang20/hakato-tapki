const {
    findAllVacancies,
    createVacancy,
    findVacancyById,
    updateVacancy,
    deleteVacancy,
    checkEmptyFields
} = require("./vacancies");

const {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    checkEmptyNameEmailPassword,
    deleteUser
} = require("./users");


module.exports = {
    findAllVacancies,
    createVacancy,
    findVacancyById,
    updateVacancy,
    deleteVacancy,
    checkEmptyFields,
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    checkEmptyNameEmailPassword,
    deleteUser
};