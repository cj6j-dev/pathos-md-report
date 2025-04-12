// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('medical-record-form');
  const recordsList = document.getElementById('records-list');

  // Load saved records from localStorage
  const loadRecords = () => {
    const savedRecords = JSON.parse(localStorage.getItem('medicalRecords')) || [];
    recordsList.innerHTML = savedRecords.map(record => {
      return `<li><strong>Name:</strong> ${record.name} | <strong>Age:</strong> ${record.age}</li>`;
    }).join('');
  };

  // Save a new record
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newRecord = {
      name: form.name.value,
      age: form.age.value,
      diagnosis: form.diagnosis.value,
      treatment: form.treatment.value
    };

    // Get existing records, add the new one, and save back to localStorage
    const savedRecords = JSON.parse(localStorage.getItem('medicalRecords')) || [];
    savedRecords.push(newRecord);
    localStorage.setItem('medicalRecords', JSON.stringify(savedRecords));

    form.reset();
    loadRecords();
  });

  // Initial load
  loadRecords();
});
