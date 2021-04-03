document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.step-link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.works-info').forEach(function (tabContent) {
        tabContent.classList.remove('works-info__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('works-info__active')
      document.querySelectorAll('.step-link').forEach(function (tabBtn) {
        tabBtn.classList.remove('active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('active')
    })
  })
})