const vacancies = require('../models/vacancy');

const findAllVacancies = async (req, res, next) => {
  console.log('GET /vacancies')
  req.vacanciesArray = await vacancies.find({});
  next();
};

const createVacancy = async (req, res, next) => {
  console.log("POST /vacancies");
  try {
    console.log(req.body);
    req.vacancy = await vacancies.create(req.body);
    next();
  } catch (error) {
    res.status(400).send("Error creating vacancy");
  }
};

const findVacancyById = async (req, res, next) => {
  console.log("GET /vacancies/:id");
  try {
    req.vacancy = await vacancies.findById(req.params.id);
    if (!req.vacancy) {
      return res.status(404).send('Vacancy not found');
    }
    next();
  } catch (error) {
    res.status(404).send({ message: "Vacancy not found" });
  }
};

const updateVacancy = async (req, res, next) => {
  try {
    req.vacancy = await vacancies.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error updating vacancy" });
  }
};

const deleteVacancy = async (req, res, next) => {
  try {
    req.vacancy = await vacancies.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error deleting vacancy" });
  }
};

const checkEmptyFields = async (req, res, next) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.location ||
    !req.body.salary ||
    !req.body.datePosted ||
    !req.body.requirements ||
    !req.body.img
  ) {
    res.status(400).send({ message: "Заполните все поля" });
  } else {
    next();
  }
};

module.exports = {
  findAllVacancies,
  createVacancy,
  findVacancyById,
  updateVacancy,
  deleteVacancy,
  checkEmptyFields
};