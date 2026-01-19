const observer = new IntersectionObserver((entries)=> {
   entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('custom-show');
        } else {
            entry.target.classList.remove('custom-show');
        }
   });  
});

const hiddenElements = document.querySelectorAll('.custom-hide');
hiddenElements.forEach((el)=> observer.observe(el));