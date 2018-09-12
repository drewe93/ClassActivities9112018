const state = {
  name: '',
  address: '',
  addressList: [
    {
      name: 'Bria',
      address: '111 East Street'
    },
    {
      name: 'Lee',
      address: '411 Canyon Rd'
    },
    {
      name: 'Sam',
      address: '22 Elm Street'
    },
    {
      name: 'Yoshi',
      address: '337 Forrest Walk'
    },
    {
      name: 'Daniel',
      address: '2211 41st Street'
    },
    {
      name: 'Monica',
      address: '911 Hill Street'
    },
    {
      name: 'Brighton',
      address: '764 East Walton Street'
    }
  ]
}

const setUserData = function(e){
  e.preventDefault();
  let htmlStr = '';
  let successCheck = 0;
  state.name = $('#name').val();
  state.address = $('#address').val();
  let userInput = {
    name: state.name,
    address: state.address
  }
  for(let i = 0; i< state.addressList.length; i++){
    if(state.name === state.addressList[i].name){
      successCheck = 1;
      state.addressList[i].address = state.address;
    }
  }
  if(successCheck === 0){
    state.addressList.push(userInput);
  }
  for(let i = 0; i< state.addressList.length; i++){
    htmlStr += `<p>${state.addressList[i].name}</p>`;
    htmlStr +=  `<p>${state.addressList[i].address}</p>`;
    htmlStr += `------------------------------------`;
  }
  render(htmlStr);
  state.name = $('#name').val('');
  state.address = $('#address').val('');
  console.log('name', state.name);
  console.log('address', state.address);
}

const render = function(inputStr){
  $('#content').html('');
  $('#content').html(inputStr);
}

$('#submit').on('click', setUserData)