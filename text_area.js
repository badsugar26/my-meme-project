const textareas = document.querySelectorAll('#first-text, #second-text');

textareas.forEach(ta => {
  ta.addEventListener('input', function() {
    // Сбрасываем на auto, чтобы получить реальную scrollHeight
    this.style.height = 'auto';
    // Устанавливаем точную высоту по содержимому
    this.style.height = this.scrollHeight + 'px';
  });
  
  // Запускаем один раз при загрузке, чтобы установить правильную высоту
  ta.dispatchEvent(new Event('input'));
});