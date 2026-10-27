(function () {
  'use strict';

  var WHATSAPP = '5519997553120';
  var IMG = 'assets/img/obras/';

  var GALLERIES = {
    ribeirao: {
      title: 'Galpão logístico · Ribeirão Preto/SP',
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
    sjrp: {
      title: 'Galpão logístico · São José do Rio Preto/SP',
      photos: [
        ['galpao-sjrp-01', 'Compactação do solo junto aos pilares'],
        ['galpao-sjrp-02', 'Talude e pavimentação junto às docas'],
        ['galpao-sjrp-03', 'Compactação com sapo mecânico'],
        ['galpao-sjrp-04', 'Motoniveladora regularizando a base interna'],
        ['galpao-sjrp-05', 'Pavimentação asfáltica do pátio'],
        ['galpao-sjrp-06', 'Compactação do revestimento asfáltico'],
        ['galpao-sjrp-07', 'Regularização da base no interior do galpão'],
        ['galpao-sjrp-08', 'Pátio de docas pavimentado'],
        ['galpao-sjrp-09', 'Pista de acesso finalizada'],
        ['galpao-sjrp-10', 'Pavimento acabado em frente às docas']
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
    },
    casabranca: {
      title: 'Calçadas e mobiliário urbano · Casa Branca/SP',
      photos: [
        ['casa-branca-01', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-02', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-03', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-04', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-05', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-06', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-07', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-08', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-09', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-10', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-11', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-12', 'Calçadas, bancos de concreto e canteiros'],
        ['casa-branca-13', 'Calçadas, bancos de concreto e canteiros']
      ]
    },
    estradas: {
      title: 'Programa Melhor Caminho · Estradas rurais/SP',
      photos: [
        ['estradas-rurais-01', 'Melhoria de estrada rural'],
        ['estradas-rurais-02', 'Melhoria de estrada rural'],
        ['estradas-rurais-03', 'Melhoria de estrada rural'],
        ['estradas-rurais-04', 'Melhoria de estrada rural'],
        ['estradas-rurais-05', 'Melhoria de estrada rural'],
        ['estradas-rurais-06', 'Melhoria de estrada rural'],
        ['estradas-rurais-07', 'Melhoria de estrada rural'],
        ['estradas-rurais-08', 'Melhoria de estrada rural'],
        ['estradas-rurais-09', 'Melhoria de estrada rural'],
        ['estradas-rurais-10', 'Melhoria de estrada rural'],
        ['estradas-rurais-11', 'Melhoria de estrada rural'],
        ['estradas-rurais-12', 'Melhoria de estrada rural'],
        ['estradas-rurais-13', 'Melhoria de estrada rural']
      ]
    },
    lombadas: {
      title: 'Lombadas e lombofaixas · Sertãozinho/SP',
      photos: [
        ['lombadas-01', 'Lombada em asfalto'],
        ['lombadas-02', 'Lombada em asfalto'],
        ['lombadas-03', 'Lombada em asfalto'],
        ['lombadas-04', 'Lombada em asfalto'],
        ['lombadas-05', 'Lombofaixa em asfalto'],
        ['lombadas-06', 'Lombofaixa em asfalto'],
        ['lombadas-07', 'Lombada em asfalto'],
        ['lombadas-08', 'Lombofaixa em asfalto']
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
  var boxTitle = document.getElementById('lightbox-title');
  var boxCount = document.getElementById('lightbox-count');
  var thumbs = document.getElementById('lightbox-thumbs');
  var single = box.querySelector('.lightbox__single');
  var current = null;
  var index = 0;

  function isSingle() { return box.classList.contains('is-single'); }

  function show(i) {
    var photos = current.photos;
    index = (i + photos.length) % photos.length;
    boxImg.src = IMG + photos[index][0] + '.webp';
    boxImg.alt = photos[index][1];
    boxCap.textContent = current.title + (current.area ? ' · Área: ' + current.area : '') +
      ' — ' + photos[index][1] + ' (' + (index + 1) + '/' + photos.length + ')';
    // pré-carrega a próxima
    new Image().src = IMG + photos[(index + 1) % photos.length][0] + '.webp';
  }

  function openSingle(i) {
    show(i);
    box.classList.add('is-single');
    box.querySelector('.lightbox__back').focus();
  }

  function backToGrid() {
    box.classList.remove('is-single');
    var thumb = thumbs.children[index];
    if (thumb) thumb.focus({ preventScroll: true });
  }

  // monta a grade com todas as fotos da obra
  function renderGrid() {
    boxTitle.textContent = current.title;
    boxCount.textContent = current.photos.length + ' fotos';
    thumbs.innerHTML = '';
    current.photos.forEach(function (photo, i) {
      var b = document.createElement('button');
      b.className = 'lightbox__thumb';
      b.setAttribute('aria-label', 'Ampliar foto ' + (i + 1) + ': ' + photo[1]);
      var img = document.createElement('img');
      img.src = IMG + photo[0] + '-sm.webp';
      img.alt = '';
      img.loading = 'lazy';
      b.appendChild(img);
      b.addEventListener('click', function () { openSingle(i); });
      thumbs.appendChild(b);
    });
  }

  document.querySelectorAll('[data-gallery]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      current = GALLERIES[btn.dataset.gallery];
      index = 0;
      renderGrid();
      box.classList.remove('is-single');
      if (typeof box.showModal === 'function') box.showModal();
      else box.setAttribute('open', '');
      box.scrollTop = 0;
    });
  });

  box.querySelector('.lightbox__close').addEventListener('click', function () { box.close(); });
  box.querySelector('.lightbox__back').addEventListener('click', backToGrid);
  box.querySelector('.lightbox__nav--prev').addEventListener('click', function () { show(index - 1); });
  box.querySelector('.lightbox__nav--next').addEventListener('click', function () { show(index + 1); });
  box.addEventListener('click', function (e) {
    if (e.target === box) box.close();
    else if (e.target === single) backToGrid();
  });
  // Esc na foto ampliada volta para a grade; na grade, fecha
  box.addEventListener('cancel', function (e) {
    if (isSingle()) { e.preventDefault(); backToGrid(); }
  });
  box.addEventListener('keydown', function (e) {
    if (!isSingle()) return;
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  var touchX = null;
  box.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (touchX === null || !isSingle()) return;
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
