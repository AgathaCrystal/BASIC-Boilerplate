const imageImports = import.meta.glob('/src/images/*.{jpg,jpeg,png,webp}', { 
  query: { w: '300;600;1200;2000', format: 'webp', as: 'srcset' },
  import: 'default',
  eager: true
});

const smallImageImports = import.meta.glob('/src/images/*.{jpg,jpeg,png,webp}', {
  query: { w: '300', format: 'webp' },
  import: 'default',
  eager: true
});

export function initImageHandling() {
  const images = document.querySelectorAll('img[data-src]');
  
  images.forEach(img => {
    const src = img.dataset.src;
    if (smallImageImports[src] && imageImports[src]) {
      img.src = smallImageImports[src];
      img.srcset = imageImports[src];
    }
  });
}
