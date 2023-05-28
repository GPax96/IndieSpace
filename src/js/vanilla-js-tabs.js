/**
 * Vanilla JavaScript Tabs v1.0.0
 * https://zoltantothcom.github.io/vanilla-js-tabs
 */
let Tabs = function (e) {
   let n = document.getElementById(e.elem),
      a = e.open || 0,
      r = 'js-tabs__title',
      c = 'js-tabs__title-active',
      l = 'js-tabs__content',
      o = n.querySelectorAll('.' + r).length;
   function t(e) {
      n.addEventListener('click', i);
      for (let t = u(null == e ? a : e), l = 0; l < o; l++)
         n.querySelectorAll('.' + r)[l].setAttribute('data-index', l),
            l === t && f(l);
   }
   function i(e) {
      -1 !== e.target.className.indexOf(r) &&
         (e.preventDefault(), f(e.target.getAttribute('data-index')));
   }
   function s() {
      [].forEach.call(n.querySelectorAll('.' + l), function (e) {
         e.style.display = 'none';
      }),
         [].forEach.call(n.querySelectorAll('.' + r), function (e) {
            let t, l;
            e.className =
               ((t = e.className),
               (l = new RegExp('( )' + c + '()', 'g')),
               t.replace(l, ''));
         });
   }
   function u(e) {
      return e < 0 || isNaN(e) || o < e ? 0 : e;
   }
   function f(e) {
      s();
      let t = u(e);
      (n.querySelectorAll('.' + r)[t].className += ' ' + c),
         (n.querySelectorAll('.' + l)[t].style.display = '');
   }
   function d() {
      n.removeEventListener('click', i);
   }
   return (
      t(),
      {
         open: f,
         update: function (e) {
            d(), s(), t(e);
         },
         destroy: d,
      }
   );
};
