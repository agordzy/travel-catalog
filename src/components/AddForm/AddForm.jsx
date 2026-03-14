import { useState } from 'react';
import './AddForm.css';

function AddForm({ onAddTravel }) {
  const [formData, setFormData] = useState({
    country: '',
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Проверка на пустые поля
    if (!formData.country || !formData.title || !formData.description) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    // Создаем новое путешествие
    const newTravel = {
      ...formData,
      id: Date.now() // простой способ генерации уникального id
    };

    onAddTravel(newTravel);

    // Очищаем форму
    setFormData({
      country: '',
      title: '',
      description: ''
    });
  };

  return (
    <div className="add-form-container">
      <h2>Добавить новое путешествие</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          name="country"
          placeholder="Страна"
          value={formData.country}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Название"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Краткое описание"
          value={formData.description}
          onChange={handleChange}
          rows="3"
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddForm;