'use client'

import Styles from './CreateForm.module.css'
import { useState } from 'react';
import { endpoints } from '@/app/api-utils/config';

export const CreateForm = () => {
   // Состояние для каждого поля формы
   const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
    datePosted: '',
    requirements: '',
    img: null
  });

  // Обработчик изменений в полях ввода
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Формируем объект FormData для отправки файла и текстовых данных
    const data = new FormData();
    for (const key in formData) {
      console.log(key)
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch(endpoints.vacancy, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Вакансия успешно добавлена!');
        setFormData({
          title: '',
          description: '',
          location: '',
          salary: '',
          datePosted: '',
          requirements: '',
          img: null
        });
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (err) {
      alert(`Ошибка при добавлении вакансии: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.form}>
      <h2 className={Styles.header}>Создайте вакансию</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Название вакансии"
        required
        className={Styles.input}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Описание"
        required
        className={`${Styles.input} ${Styles.textarea}`}
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Местоположение"
        required
        className={Styles.input}
      />
      <input
        type="number"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        placeholder="Зарплата"
        className={Styles.input}
      />
      <input
        type="date"
        name="datePosted"
        value={formData.datePosted}
        onChange={handleChange}
        required
        className={Styles.input}
      />
      <textarea
        name="requirements"
        value={formData.requirements}
        onChange={handleChange}
        placeholder="Требования"
        required
        className={`${Styles.input} ${Styles.textarea}`}
      />
      <input
        type="file"
        name="img"
        onChange={handleChange}
        className={`${Styles.input} ${Styles.fileInput}`}
      />
      <button type="submit" className={Styles.button}>Создать вакансию</button>
    </form>
  );
}