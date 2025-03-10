document.addEventListener('DOMContentLoaded', function() {
    // Handle mobile navigation
    const navTrigger = document.querySelector('.nav-trigger');
    if (navTrigger) {
      navTrigger.addEventListener('change', function() {
        document.body.classList.toggle('nav-open', this.checked);
      });
    }
  
    // Add target="_blank" to external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  
    // Add scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.classList.add('scroll-top-btn');
    document.body.appendChild(scrollBtn);
  
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });
  
    // Scroll to top when button is clicked
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Add style for scroll to top button
    const style = document.createElement('style');
    style.textContent = `
      .scroll-top-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--secondary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
      }
      
      .scroll-top-btn.show {
        opacity: 1;
        visibility: visible;
      }
      
      .scroll-top-btn:hover {
        background-color: var(--primary-color);
      }
    `;
    document.head.appendChild(style);
  
    // Add estimated reading time to posts
    const postContent = document.querySelector('.post-content');
    if (postContent) {
      const text = postContent.textContent;
      const wordCount = text.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute
      
      const readingTimeElement = document.createElement('span');
      readingTimeElement.classList.add('post-reading-time');
      readingTimeElement.innerHTML = `<i class="fas fa-clock"></i> ${readingTime} min read`;
      
      const postMeta = document.querySelector('.post-meta');
      if (postMeta) {
        postMeta.appendChild(readingTimeElement);
      }
    }
  });