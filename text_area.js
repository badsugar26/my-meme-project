const textareas = document.querySelectorAll('#first-text, #second-text');
textareas.forEach(ta => {
  ta.addEventListener('input', function() { 

    const currentHeight = this.clientHeight;

    const scrollHeight = this.scrollHeight;

    if (scrollHeight > currentHeight) {
      this.style.height = this.scrollHeight + 'px';
    } else {
      this.style.height = this.currentHeight + 'px';
    }    
  });
});