const blogList = document.getElementById('blog-list');
BLOG_POSTS.forEach(p => {
  const arrow = p.coming ? '' : '→';
  const href = p.coming ? '' : `href="${p.url}" target="_blank"`;
  blogList.innerHTML += `
    <a class="blog-post${p.coming ? ' coming' : ''}" ${href}>
      <div class="blog-date">${p.date}</div>
      <div>
        <div class="blog-title">${p.title}</div>
        <div class="blog-excerpt">${p.excerpt}</div>
      </div>
      <div class="blog-arrow">${arrow}</div>
    </a>`;
});
