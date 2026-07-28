/**
 * Anass Portfolio - Vanilla JS Functionality
 * Handles dynamic footer date, sticky nav styling, mobile drawer toggle, 
 * and scrolling menu highlighters.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Sticky Nav Scroll Indicator (adds border/shadow on scroll)
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }

  // 3. Mobile Navigation Drawer Controls
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu && navOverlay) {
    const toggleMenu = (forceState) => {
      const isCurrentlyExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      const shouldExpand = forceState !== undefined ? forceState : !isCurrentlyExpanded;
      
      navToggle.setAttribute('aria-expanded', shouldExpand);
      navMenu.classList.toggle('open', shouldExpand);
      navOverlay.classList.toggle('open', shouldExpand);
      
      // Prevent body scroll behind open drawer
      document.body.style.overflow = shouldExpand ? 'hidden' : '';
    };

    navToggle.addEventListener('click', () => toggleMenu());
    navOverlay.addEventListener('click', () => toggleMenu(false));
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  // 4. Highlight Nav Links on Scroll using Intersection Observer
  const sections = document.querySelectorAll('section');
  if (sections.length && navLinks.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies target height of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === `#${sectionId}`) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            } else {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  // 5. Email Clipboard Copy Fallback
  const emailBtn = document.querySelector('a[href^="mailto:"]');
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      const email = emailBtn.getAttribute('href').replace('mailto:', '');
      navigator.clipboard.writeText(email).then(() => {
        const originalHTML = emailBtn.innerHTML;
        emailBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Email Copied!
        `;
        emailBtn.style.borderColor = 'var(--color-accent)';
        
        setTimeout(() => {
          emailBtn.innerHTML = originalHTML;
          emailBtn.style.borderColor = '';
        }, 2000);
      }).catch(err => {
        console.error('Could not copy email to clipboard: ', err);
      });
    });
  }
});
