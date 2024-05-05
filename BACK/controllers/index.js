const {
    sendAllVacancies,
    sendVacancyCreated,
    sendVacancyById,
    sendVacancyUpdated,
    sendVacancyDeleted
} = require("./vacancies");

const { 
    sendAllUsers, 
    sendUserCreated, 
    sendUserUpdated, 
    sendUserDeleted
} = require("./users");

module.exports = {
    sendAllVacancies,
    sendVacancyCreated,
    sendVacancyById,
    sendVacancyUpdated,
    sendVacancyDeleted,
    sendAllUsers, 
    sendUserCreated, 
    sendUserUpdated, 
    sendUserDeleted
};