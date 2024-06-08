import React, { useState } from "react";
import styled from "styled-components";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Karachi", "Lahore"],
  },
  {
    name: "Nepal",
    value: "NP",
    cities: ["Kathmandu", "Pokhara"],
  },
];

const DropDown = () => {


    const cities = countries.map((item)=>{
        return item.cities.filter((item)=> item.charAt(0) === "K");
    })

    console.log(cities)
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity(""); // Reset city when country changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const getCities = () => {
    const country = countries.find((country) => country.value === selectedCountry);
    return country ? country.cities : [];
  };

  return (
    <>
      <Select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option value={country.value} key={country.value}>
            {country.name}
          </option>
        ))}
      </Select>
      {selectedCountry && (
        <Select value={selectedCity} onChange={handleCityChange}>
          <option value="">Select City</option>
          {getCities().map((city) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
        </Select>
      )}
    </>
  );
};

const Select = styled.select`
  width: 120px;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 10px;

  option {
    width: 100px;
    height: 20px;
  }
`;

export default DropDown;
