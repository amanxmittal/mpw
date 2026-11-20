/**
 * Mittal Plastic Works - Modern Interaction Scripts
 * Zero external dependencies. Vanilla JS (<4KB).
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Dark / Light)
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', targetTheme);
      try {
        localStorage.setItem('mpw-theme', targetTheme);
      } catch (e) {}
    });
  }

  // Listen for system theme changes if not manually set
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      try {
        if (!localStorage.getItem('mpw-theme')) {
          document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
      } catch (err) {}
    });
  }

  // 2. Header scroll effect
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    });

    // Close when clicking nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
      });
    });
  }

  // 4. Product Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.modern-product-card');
  if (filterBtns.length && productCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        productCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length) {
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      if (questionBtn) {
        questionBtn.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');
          // Close other open items
          faqItems.forEach(other => other.classList.remove('open'));
          if (!isOpen) {
            item.classList.add('open');
          }
        });
      }
    });
  }

  // 6. Netlify Forms - Seamless AJAX Submission & Instant Confirmation
  const netlifyForms = document.querySelectorAll('form[data-netlify="true"]');
  netlifyForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalHtml = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg style="animation: spin 1s linear infinite; display: inline-block; vertical-align: middle; margin-right: 6px;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
          Submitting...
        `;
      }

      const formData = new FormData(form);
      const params = new URLSearchParams(formData).toString();

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
      })
      .then(response => {
        if (response.ok) {
          form.reset();
          const alert = document.getElementById('formSuccessAlert');
          if (alert) {
            alert.style.display = 'flex';
            alert.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } else {
          // If fetch not ok, fallback to normal submission
          form.submit();
        }
      })
      .catch(() => {
        // Network fallback
        form.submit();
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
        }
      });
    });
  });

  // Check URL query parameter fallback (e.g. ?success=true)
  if (window.location.search.includes('success=true')) {
    const successAlert = document.getElementById('formSuccessAlert');
    if (successAlert) {
      successAlert.style.display = 'flex';
      successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // 7. Current Year in Footer
  const yearEls = document.querySelectorAll('.current-year');
  const curYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = curYear;
  });
});
