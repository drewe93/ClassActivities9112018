const state = {
  name: '',
  registrantList: [
    'Veronica',
    'Dishanta',
    'Tisha',
    'Matt'
  ]
}

const setName = function(e){
  e.preventDefault();
  let htmlStr = '';
  state.name = $('#name').val();
  state.registrantList.push(state.name);
  for(let i=0; i<state.registrantList.length; i++){
    htmlStr += `<p>${state.registrantList[i]}</p>`;
  }
  state.name = $('#name').val('');
  render(htmlStr);
}

const render = function(strInput){
  $('#content').html('');
  $('#content').html(strInput);
}

$('#submit').on('click', setName)