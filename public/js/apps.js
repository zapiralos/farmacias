import React, { useState } from "react";
import ReactDOM from "react-dom";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

console.log("hola mundo!");

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Selecciona una fecha"
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <input {...params} />}
      />
    </LocalizationProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("date-picker-container"));
