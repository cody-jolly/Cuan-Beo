console.log('test');

/* Hamburger */ 
var hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', toggleNav);

function toggleNav() {
  var navigation = document.getElementById('navigation');

  if (navigation.classList.contains('active')) {
    navigation.classList.remove('active');
  } else {
    navigation.classList.add('active');
  }
}

/* Sitemap */ 
var sitemapButton = document.getElementById('sitemap-button');

sitemapButton.addEventListener('click', toggleSitemap);

function toggleSitemap() {
  var sitemap = document.getElementById('sitemap');

  if (sitemap.classList.contains('inactive')) {
    sitemap.classList.remove('inactive');
    sitemap.classList.add('active');
  } else {
    sitemap.classList.remove('active');
    sitemap.classList.add('inactive');
  }

  var footer = document.getElementById('footer');

  if (footer.classList.contains('sitemap-active')) {
    footer.classList.remove('sitemap-active');
  } else {
    footer.classList.add('sitemap-active');
  }
}