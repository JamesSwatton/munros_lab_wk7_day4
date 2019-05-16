const Munros = require('./models/munros.js')
const MunrosListView = require('./views/munros_list_view.js')
const SelectView = require('./views/select_view.js')
const url = ('https://munroapi.herokuapp.com/munros')

document.addEventListener('DOMContentLoaded', () =>{
  console.log('Javascript Loaded')

  const selectedContainer = document.querySelector('div#munros')
  const munrosListView = new MunrosListView(selectedContainer)
  munrosListView.bindEvents()

  const selectedContainer2 = document.querySelector('select#regions')
  const selectView = new SelectView(selectedContainer2);
  selectView.bindEvents();

  const munros = new Munros(url)
  munros.getData()
})
