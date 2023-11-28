// Vet.jsx
import React, { useState } from 'react';
import './Vet.css';
import Nav from '../componentes/header/Navbar';

const Vet = () => {
    const [selectedVet, setSelectedVet] = useState(null);
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [scheduledDates, setScheduledDates] = useState([]);
  
    const veterinarians = [
      { id: 1, name: 'Dr. Smith', location: 'Clínica ABC', availableDates: ['2023-12-01', '2023-12-02'], availableTimes: generateTimeSlots() },
      { id: 2, name: 'Dr. Johnson', location: 'Hospital XYZ', availableDates: ['2023-12-05', '2023-12-07'], availableTimes: generateTimeSlots() },
      // Adicione mais veterinários conforme necessário
    ];
  
    function generateTimeSlots() {
      const timeSlots = [];
      for (let hour = 8; hour < 18; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const formattedHour = hour.toString().padStart(2, '0');
          const formattedMinute = minute.toString().padStart(2, '0');
          timeSlots.push(`${formattedHour}:${formattedMinute}`);
        }
      }
      return timeSlots;
    }
  
    const handleVetSelection = (vetId) => {
      setSelectedVet(vetId);
      setAppointmentDate('');
      setAppointmentTime('');
    };
  
    const handleAppointmentDateChange = (e) => {
      setAppointmentDate(e.target.value);
      setAppointmentTime('');
    };
  
    const handleAppointmentTimeChange = (e) => {
      setAppointmentTime(e.target.value);
    };
  
    const isTimeSlotAvailable = (timeSlot) => {
      const existingAppointment = scheduledDates.find(date => date.date === appointmentDate && date.time === timeSlot);
      return !existingAppointment;
    };
  
    const handleAppointmentSubmit = (e) => {
      e.preventDefault();
      const vetName = veterinarians.find((vet) => vet.id === selectedVet).name;
      const newScheduledDate = {
        vetName,
        date: appointmentDate,
        time: appointmentTime,
      };
      setScheduledDates([...scheduledDates, newScheduledDate]);
      setAppointmentDate('');
      setAppointmentTime('');
    };
  
    const handleDeleteDate = (index) => {
      const updatedDates = [...scheduledDates];
      updatedDates.splice(index, 1);
      setScheduledDates(updatedDates);
    };
  
    return (
      <div>
        <Nav />
        <div className="vet-container">
          <h2>Página do Veterinário</h2>
          <h3>Escolha um veterinário:</h3>
          <ul className="vet-list">
            {veterinarians.map((vet) => (
              <li key={vet.id} onClick={() => handleVetSelection(vet.id)} className={`vet-item ${selectedVet === vet.id ? 'selected' : ''}`}>
                <h4>{vet.name}</h4>
                <p>Local: {vet.location}</p>
              </li>
            ))}
          </ul>
  
          {selectedVet && (
          <div className="appointment-section">
            <h3>Agendamento para {veterinarians.find((vet) => vet.id === selectedVet).name}</h3>
            <form onSubmit={handleAppointmentSubmit}>
              <label>Data do Agendamento:</label>
              <input type="date" value={appointmentDate} onChange={handleAppointmentDateChange} required />

              <label>Horário do Agendamento:</label>
              <div className="time-slots-container">
                {veterinarians.find((vet) => vet.id === selectedVet).availableTimes.map((time, index) => (
                  <div key={index} className={`time-slot ${appointmentTime === time ? 'selected' : ''}`} onClick={() => handleAppointmentTimeChange({ target: { value: time } })}>
                    <div className="time-box">{time}</div>
                  </div>
                ))}
              </div>

              <button type="submit">Agendar</button>
            </form>
          </div>
        )}
  
          {scheduledDates.length > 0 && (
            <div className="scheduled-dates">
              <h3>Datas Marcadas</h3>
              <ul>
                {scheduledDates.map((date, index) => (
                  <li key={index}>
                    {date.vetName} - {date.date} às {date.time}
                    <button onClick={() => handleDeleteDate(index)}>Excluir</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

export default Vet;
