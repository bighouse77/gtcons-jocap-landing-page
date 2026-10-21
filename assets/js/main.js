(function () {
  'use strict';

  var WHATSAPP = '5519997553120';
  var IMG = 'assets/img/obras/';

  var GALLERIES = {
    ribeirao: {
      title: 'Centro logístico · Ribeirão Preto/SP',
      photos: [
        ['galpao-piso-base', 'Base pronta para pavimentação no interior do galpão'],
        ['galpao-pavimentacao-rolo', 'Compactação do revestimento asfáltico'],
        ['galpao-rolo-pneus', 'Rolo de pneus na área coberta'],
        ['galpao-pavimento-acabado', 'Pavimento acabado no interior do galpão'],
        ['galpao-motoniveladora', 'Motoniveladora regularizando a base'],
        ['galpao-equipe-base', 'Equipe espalhando a base de brita'],
        ['galpao-base-externa', 'Base granular na área externa'],
        ['galpao-aspersao', 'Umedecimento da base antes da compactação'],
        ['galpao-terraplenagem-rolo', 'Terraplenagem e compactação do solo']
      ]
    },
    piracicaba: {
      title: 'Empreendimento residencial · Piracicaba/SP',
      photos: [
        ['loteamento-pa-carregadeira', 'Movimentação de solo'],
        ['loteamento-terraplenagem', 'Terraplenagem da área do empreendimento'],
        ['loteamento-motoniveladora', 'Regularização do terreno com motoniveladora'],
        ['drenagem-sarjeta', 'Sarjeta de concreto e base de brita'],
        ['via-pavimentacao-asfalto', 'Pavimentação asfáltica de via de acesso']
      ]
    }
  };

  document.documentElement.classList.remove('no-js');

  /* Ano no rodapé */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* Cabeçalho com sombra ao rolar */
  var header = document.querySelector('.header');
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* Link ativo conforme a seção visível */
  var links = Array.prototype.slice.call(nav.querySelectorAll('ul a'));
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) {
      var section = document.querySelector(a.getAttribute('href'));
      if (section) spy.observe(section);
    });

    /* Animação de entrada */
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { reveal.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Galeria */
  var box = document.getElementById('lightbox');
  var boxImg = document.getElementById('lightbox-img');
  var boxCap = document.getElementById('lightbox-cap');
  var current = null;
  var index = 0;

  function show(i) {
    var photos = current.photos;
    index = (i + photos.length) % photos.length;
    boxImg.src = IMG + photos[index][0] + '.webp';
    boxImg.alt = photos[index][1];
    boxCap.textContent = current.title + ' — ' + photos[index][1] + ' (' + (index + 1) + '/' + photos.length + ')';
    // pré-carrega a próxima
    new Image().src = IMG + photos[(index + 1) % photos.length][0] + '.webp';
  }

  document.querySelectorAll('[data-gallery]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      current = GALLERIES[btn.dataset.gallery];
      show(0);
      if (typeof box.showModal === 'function') box.showModal();
      else box.setAttribute('open', '');
    });
  });

  box.querySelector('.lightbox__close').addEventListener('click', function () { box.close(); });
  box.querySelector('.lightbox__nav--prev').addEventListener('click', function () { show(index - 1); });
  box.querySelector('.lightbox__nav--next').addEventListener('click', function () { show(index + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  box.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  var touchX = null;
  box.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  /* Formulário → WhatsApp */
  var form = document.getElementById('form-contato');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;
    form.querySelectorAll('[required]').forEach(function (field) {
      var empty = !field.value.trim();
      field.classList.toggle('is-invalid', empty);
      if (empty && ok) { field.focus(); ok = false; }
    });
    if (!ok) return;

    var d = new FormData(form);
    var msg = 'Olá! Vim pelo site e gostaria de um orçamento.\n\n' +
      '*Nome:* ' + d.get('nome') + '\n' +
      '*Telefone:* ' + d.get('telefone') + '\n' +
      '*Serviço:* ' + d.get('servico') +
      (d.get('cidade') ? '\n*Cidade da obra:* ' + d.get('cidade') : '') +
      (d.get('mensagem') ? '\n\n' + d.get('mensagem') : '');

    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
  });
})();
