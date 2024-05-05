const sendAllVacancies = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.vacanciesArray));
  };
  
  const sendVacancyCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.vacancy));
  };
  
  const sendVacancyById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.vacancy));
  };
  
  const sendVacancyUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end("Вакансия обновлена");
  };
  
  const sendVacancyDeleted = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.vacancy));
  };
  
  module.exports = {
    sendAllVacancies,
    sendVacancyCreated,
    sendVacancyById,
    sendVacancyUpdated,
    sendVacancyDeleted
  };
  