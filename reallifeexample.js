//  a Javascript program to check wheather a patient has a scheduled appointment with doctor
//Below is a sample list of appointments
const appointments = [
    { patientId: 1, doctorId: 101, date: '2024-10-08', time: '14:00' },
    { patientId: 2, doctorId: 102, date: '2024-10-09', time: '10:30' },
    { patientId: 3, doctorId: 101, date: '2024-10-10', time: '09:00' },
  ];
  
  // Function to check appointment
  function hasAppointment(patientId, doctorId, date, time) {
    return appointments.some(appointment =>
      appointment.patientId === patientId &&
      appointment.doctorId === doctorId &&
      appointment.date === date &&
      appointment.time === time
    );
  }
  
  // Test the function
  const patientId = 1;
  const doctorId = 101;
  const appointmentDate = '2024-10-08';
  const appointmentTime = '14:00';
  
  if (hasAppointment(patientId, doctorId, appointmentDate, appointmentTime)) {
    console.log('The patient has an appointment with the doctor at the specified time.');
  } else {
    console.log('No appointment found for the specified patient and doctor at the given time.');
  }
  