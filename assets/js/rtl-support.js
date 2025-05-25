// Fix internal links for RTL content
document.addEventListener('DOMContentLoaded', function() {
    // Fix heading anchors
    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach(function(heading) {
        heading.setAttribute('dir', 'auto');
    });

    // Fix anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.setAttribute('dir', 'auto');
    });

    // Fix navigation items
    document.querySelectorAll('.nav-list-item').forEach(function(item) {
        item.setAttribute('dir', 'auto');
    });

    // Fix search results
    document.querySelectorAll('.search-result-doc').forEach(function(result) {
        result.setAttribute('dir', 'auto');
    });
});
