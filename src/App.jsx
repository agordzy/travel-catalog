import { useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Filter from './components/Filter/Filter';
import AddForm from './components/AddForm/AddForm';

// Начальные данные
const initialTravels = [
  {
    id: 1,
    country: 'Италия',
    title: 'Римские каникулы',
    description: 'Посетите Вечный город и попробуйте настоящую пиццу'
  },
  {
    id: 2,
    country: 'Франция',
    title: 'Парижская весна',
    description: 'Прогулка по Елисейским полям и Эйфелева башня'
  },
  {
    id: 3,
    country: 'Япония',
    title: 'Сакура в Токио',
    description: 'Цветение сакуры и современная японская культура'
  },
  {
    id: 4,
    country: 'Италия',
    title: 'Венецианский карнавал',
    description: 'Маски, гондолы и итальянская романтика'
  }
];

function App() {
  const [travels, setTravels] = useState(initialTravels);
  const [selectedCountry, setSelectedCountry] = useState('');

  // Получаем уникальные страны для фильтра
  const countries = [...new Set(travels.map(travel => travel.country))];

  // Фильтруем путешествия по выбранной стране
  const filteredTravels = selectedCountry
    ? travels.filter(travel => travel.country === selectedCountry)
    : travels;

  // Добавление нового путешествия
  const handleAddTravel = (newTravel) => {
    setTravels([...travels, newTravel]);
  };

  return (
    <div className="app">
      <h1>Каталог путешествий</h1>
      
      <AddForm onAddTravel={handleAddTravel} />
      
      <Filter 
        countries={countries}
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
      />
      
      <CardList travels={filteredTravels} />
    </div>
  );
}

export default App;