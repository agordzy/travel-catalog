import './Filter.css';

function Filter({ countries, selectedCountry, onCountryChange }) {
  return (
    <div className="filter">
      <label htmlFor="country-filter">Фильтр по стране: </label>
      <select 
        id="country-filter" 
        value={selectedCountry} 
        onChange={(e) => onCountryChange(e.target.value)}
      >
        <option value="">Все страны</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;