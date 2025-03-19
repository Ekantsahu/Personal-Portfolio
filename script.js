var typed = new Typed("#element", {
    strings: [
      "<i>Java Developer</i>",
      " <i>Full Stack Developer</i>",  
    ],
    typeSpeed: 50,
  });

  function downloadCV() {
    // Replace 'path_to_your_cv.pdf' with the actual path to your CV file
    const cvPath = 'ekantResume.pdf';
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = cvPath;
    
    // Set the download attribute with desired filename
    link.download = 'Ekant_Kumar_Sahu_CV.pdf';
    
    // Append to body, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function toggleMenu() {
    const right = document.querySelector('.right');
    right.classList.toggle('active');
  }