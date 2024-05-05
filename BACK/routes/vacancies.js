const vacanciesRouter = require('express').Router();

const {
    findAllVacancies,
    createVacancy,
    findVacancyById,
    updateVacancy,
    deleteVacancy,
    checkEmptyFields
} = require("../middlewares");

const {
    sendAllVacancies,
    sendVacancyCreated,
    sendVacancyById,
    sendVacancyUpdated,
    sendVacancyDeleted
} = require("../controllers");

vacanciesRouter.get('/vacancies', findAllVacancies, sendAllVacancies);

vacanciesRouter.post(
    "/vacancies",
    findAllVacancies,
    checkEmptyFields,
    createVacancy,
    sendVacancyCreated
);

vacanciesRouter.get('/vacancies/:id', findVacancyById, sendVacancyById);

vacanciesRouter.put("/vacancies/:id",
    findVacancyById,
    checkEmptyFields,
    updateVacancy,
    sendVacancyUpdated);

vacanciesRouter.delete("/vacancies/:id", deleteVacancy, sendVacancyDeleted);

module.exports = vacanciesRouter;