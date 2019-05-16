const Munros = require('./models/munros.js')
const MunrosView = require('./views/munros_view.js')
const url = ()

document.addEventListener('DOMContentLoaded', () =>{
  console.log('Javascript Loaded')
  const munrosView = new MunrosView()
  munrosView.bindEvents()

  const munros = new Munros(url)
  munros.bindEvents()
})
