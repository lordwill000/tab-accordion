(function() {
  "use strict"
  fetch('/db.json')
    .then(function(res) {
      return res.json()
    })
    .then(function(data) {
      populateTabs(data.sections)
    }) 
})()

function populateTabs(tabs) {
  var tabsWrapperContent = ''
  var contentWrapperContent = ''
  tabs.forEach(function(el, i) {
    tabsWrapperContent += i === 0 ? '<p class="active">'+el.title+'</p>' : '<p>'+el.title+'</p>'
    contentWrapperContent += i === 0 
      ? '<h4 class="section-title active">' + el.title + '</h4><div>' +el.content+'</div>' 
      : '<h4 class="section-title">' + el.title + '</h4><div>' +el.content+'</div>'
  })
  document.querySelector('.js-tabs-wrapper').innerHTML = tabsWrapperContent
  document.querySelector('.js-section-content').innerHTML = contentWrapperContent
  addClickEvent(tabs)
}

function addClickEvent(sections) {
  ['.js-section-content h4', '.js-tabs-wrapper p'].forEach(function(el) {
    document.querySelectorAll(el).forEach(function(tab, i) {
      tab.addEventListener('click', function() {
        document.querySelector('.js-tabs-wrapper p.active').classList.remove('active')
        document.querySelector('.js-section-content h4.active').classList.remove('active')
        document.querySelectorAll('.js-tabs-wrapper p')[i].classList.add('active')
        document.querySelectorAll('.js-section-content h4')[i].classList.add('active')
      })
    })
  })
  
}