document.addEventListener('DOMContentLoaded', () => {

  const overlay = document.querySelector('.overlay');
  const mainVideo = document.querySelector('#mainVideo');
  const watchBtn = document.querySelector('.watch-video');
  const sliderVideos = document.querySelectorAll('.hero-slider video');
  const prevBtn = document.querySelector('.owl-prev');
  const nextBtn = document.querySelector('.owl-next');

  if (overlay && mainVideo) {

    if (watchBtn) {
      watchBtn.onclick = () => {
        overlay.classList.add('hide');
        mainVideo.play();
      };
    }

    mainVideo.onclick = () => {
      if (overlay.classList.contains('hide')) {
        overlay.classList.remove('hide');
        mainVideo.pause();
      } else {
        overlay.classList.add('hide');
        mainVideo.play();
      }
    };

    sliderVideos.forEach(video => {
      video.onclick = () => {
        const selectedSrc = video.getAttribute('src');
        mainVideo.setAttribute('src', selectedSrc);
        mainVideo.load();
        mainVideo.play();
        overlay.classList.add('hide');
      };
    });

    // أزرار السلايدر
    if (prevBtn && nextBtn) {

      prevBtn.onclick = () => {
        $('.hero-slider').trigger('prev.owl.carousel');
      };

      nextBtn.onclick = () => {
        $('.hero-slider').trigger('next.owl.carousel');
      };

    }

  }

});


document.addEventListener('DOMContentLoaded', () => {

  const sliderVideos = document.querySelectorAll('.hero-slider video');

  sliderVideos.forEach(video => {

    video.addEventListener('loadedmetadata', () => {

      const duration = video.duration;

      // Convert to mm:ss
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);

      const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      // Create element
      const durationEl = document.createElement('span');
      durationEl.className = 'video-duration';
      durationEl.innerText = formattedTime;

      // Append to parent (div)
      video.parentElement.appendChild(durationEl);

    });

  });

});

// carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 15,
    loop:false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    stagePadding: 35,
    nav: false,
    dots: true,
    dotsContainer: '.custom-dots',
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      991.8: {
        items: 4
      }
    }
  })
});

// sidebar
document.addEventListener('DOMContentLoaded', () => {

  const sidebar = document.querySelector('.gs-mo-sidebar');
  const openBtn = document.querySelector('.list-button');
  const closeBtn = document.querySelector('.close');
  const overlay = document.querySelector('.gs-overlay');

  if (sidebar && openBtn && closeBtn && overlay) {

    openBtn.onclick = () => {
      sidebar.classList.add('open');
      overlay.classList.add('active');
    };

    closeBtn.onclick = () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    };

    overlay.onclick = () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    };

  }

});

// list cards
document.addEventListener('DOMContentLoaded', () => {

  const cardsContainer = document.querySelector('.gs-Hcards');
  const desktopBtn = document.querySelector('.cards-button');
  const mobileBtn = document.querySelector('.cards-button-mo');

  if (cardsContainer) {

    const toggleCards = () => {
      cardsContainer.classList.toggle('expanded');

      if (desktopBtn) {
        desktopBtn.classList.toggle('rotate');
      }
    };

    if (desktopBtn) {
      desktopBtn.onclick = toggleCards;
    }

    if (mobileBtn) {
      mobileBtn.onclick = toggleCards;
    }

  }

});
document.addEventListener('DOMContentLoaded', () => {

  const typeBtns = document.querySelectorAll('.intro-filter .nav-link');
  const categoryBtns = document.querySelectorAll('.intro-categories li');
  const items = document.querySelectorAll('.intro-item');

  let activeType = 'all';
  let activeCategory = 'all';

  const filterItems = () => {

    items.forEach(item => {

      const type = item.getAttribute('data-type');
      const category = item.getAttribute('data-category');

      const typeMatch = activeType === 'all' || type === activeType;
      const categoryMatch = activeCategory === 'all' || category === activeCategory;

      if (typeMatch && categoryMatch) {
        item.classList.remove('d-none');
      } else {
        item.classList.add('d-none');
      }

    });

  };

  // filter by type (images / videos)
  typeBtns.forEach(btn => {

    btn.onclick = (e) => {

      e.preventDefault();

      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeType = btn.getAttribute('data-filter');

      filterItems();
    };

  });

  // filter by category
  categoryBtns.forEach(btn => {

    btn.onclick = () => {

      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeCategory = btn.getAttribute('data-category');

      filterItems();
    };

  });

  filterItems();

});

// modal
document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.player-card');
  const modal = document.querySelector('.gs-modal');
  const overlay = document.querySelector('.gs-overlay');
  const closeBtn = document.querySelector('.close');

  if (cards.length && modal && overlay) {

    cards.forEach(card => {
      card.addEventListener('click', () => {

        modal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = "hidden";

      });
    });

    function closeModal() {
      modal.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = "auto";
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {
      if (e.key === "Escape") {
        closeModal();
      }
    });

  }

});


// Back to top
document.addEventListener("DOMContentLoaded", function () {

  const top_btn = document.querySelector(".top-btn");

  if (top_btn) {
    top_btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

});