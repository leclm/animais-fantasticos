function initTavNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  const activeClass = 'ativo';
  tabContent[0].classList.add(activeClass);

  if ( tabContent.length || tabMenu.length ) {
    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
    };

    tabMenu.forEach( (item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling .classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    };

    accordionList.forEach( (item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

function initSoftScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    /* Forma alternativa
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    })*/
  }

  linksInternos.forEach( (item => {
    item.addEventListener('click', scrollToSection);
  }));
}

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}

initTavNav();
initAccordion();
initSoftScroll();
initAnimacaoScroll();
