//observer sensitivity
const options1 = {
    root: null, //viewport
    rootMargin: "30px", //tollerance
    threshold: 0 //element is out of viewport completely
  };
  
  const options2 = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6 //minimum 80 percent of the element is in the viewport
  };
  
  //create observer --> observer detects scrolling
  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) { //element is out of viewport
        entry.target.classList.remove('show');
      }
    });
  }, options1);
  
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) { //element is in viewport
        entry.target.classList.add('show');
      }
    });
  }, options2);
  
  //set observer
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer1.observe(el)); //observer to hide element
  hiddenElements.forEach((el) => observer2.observe(el)); //observer to show element