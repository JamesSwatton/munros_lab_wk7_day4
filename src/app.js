const Munros = require('./models/munros.js')
const MunrosListView = require('./views/munros_list_view.js')
const url = ('https://munroapi.herokuapp.com/munros')

document.addEventListener('DOMContentLoaded', () =>{
  console.log('Javascript Loaded')

  const selectedContainer = document.querySelector('div#munros')
  const munrosListView = new MunrosListView(selectedContainer)
  munrosListView.bindEvents()

  const munros = new Munros(url)
  munros.getData()
})
