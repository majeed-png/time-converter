// تغيير الوضع المظلم
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    document.body.style.backgroundImage = "url('dark.jpg')";
  } else {
    document.body.style.backgroundImage = "url('light.jpg')";
  }
});

// تغيير اللغة
const languageToggle = document.getElementById('languageToggle');
languageToggle.addEventListener('click', () => {
  const currentLang = document.documentElement.lang;
  if (currentLang === 'ar') {
    document.documentElement.lang = 'en';
    document.querySelector('h1').textContent = 'Time Converter';
    document.querySelector('p').textContent = 'Convert time from 24-hour to 12-hour systems';
    document.querySelector('input').placeholder = 'Enter time (e.g., 14:30)';
    document.querySelector('button').textContent = 'Convert';
    document.querySelector('#languageToggle').textContent = 'العربية';
    document.querySelector('#darkModeToggle').textContent = 'Dark Mode';
    document.querySelector('span').textContent = 'My Social Media accounts:';
    document.querySelector('footer').textContent = 'From: Abdulmajeed Althuwaini';
  } else {
    document.documentElement.lang = 'ar';
    document.querySelector('h1').textContent = 'محول الوقت';
    document.querySelector('p').textContent = 'تحويل الوقت من نظام 24 ساعة إلى 12 ساعة ';
    document.querySelector('input').placeholder = 'ادخل الوقت (مثال: 14:30)';
    document.querySelector('button').textContent = 'تحويل';
    document.querySelector('#languageToggle').textContent = 'English';
    document.querySelector('#darkModeToggle').textContent = 'الوضع المظلم';
    document.querySelector('span').textContent = 'حساباتي في السوشال ميديا:';
    document.querySelector('footer').textContent = 'من: عبدالمجيد الثويني';
  }
});

// تحويل الوقت من 24 ساعة إلى 12 ساعة
const convertButton = document.getElementById('convertButton');
convertButton.addEventListener('click', () => {
  const timeInput = document.querySelector('.converter input').value;

  // التحقق من صحة الإدخال
  if (!timeInput.match(/^([01]\d|2[0-3]):([0-5]\d)$/)) {
    alert('الرجاء إدخال الوقت بصيغة صحيحة مثل 14:30');
    return;
  }

  // تقسيم الوقت إلى ساعات ودقائق
  let [hours, minutes] = timeInput.split(':');
  hours = parseInt(hours);

  // تحويل الوقت من 24 إلى 12
  let period = 'AM';
  if (hours >= 12) {
    period = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  } else if (hours === 0) {
    hours = 12;
  }

  // عرض النتيجة
  const resultDiv = document.getElementById('result');
  const arabicResult = `الوقت بالصيغة 12 ساعة: ${hours}:${minutes} ${period}`;
  const englishResult = `The time in 12-hour format: ${hours}:${minutes} ${period}`;
  
  // إظهار النتيجة بناءً على اللغة
  if (document.documentElement.lang === 'ar') {
    resultDiv.textContent = arabicResult;
  } else {
    resultDiv.textContent = englishResult;
  }
});
