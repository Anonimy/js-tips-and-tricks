window.onload = () => {
  'use strict';

  (function challenge01() {
    const $acceptTerms = document.querySelector('#c01Input');
    const $submitBtn = document.querySelector('#c01Button');
    $acceptTerms.addEventListener('change', () => {
      if ($acceptTerms.checked) {
        $submitBtn.removeAttribute('disabled');
      } else {
        $submitBtn.setAttribute('disabled', true);
      }
    });
  })();
};