document.getElementById('ageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const dobInput = document.getElementById('dob').value;
  const result = document.getElementById('result');
  result.style.opacity = 0;

  if (!dobInput) {
    result.textContent = "Please select a valid date.";
    result.style.color = "#f8d7da";
    result.style.opacity = 1;
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    result.textContent = "Date of birth cannot be in the future.";
    result.style.color = "#f8d7da";
    result.style.opacity = 1;
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `🗓️ You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
  result.style.color = "#dff0d8";
  result.style.opacity = 1;
});
