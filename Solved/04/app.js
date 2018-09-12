const state = {
  name: '',
  username: '',
  password: '',
  userList: [
    {
      name: 'JD',
      username: 'jd123',
      password: 'myspace'
    },
    {
      name: 'Sarah',
      username: 'ssm100',
      password: 'securepass'
    },
    {
      name: 'Bryson',
      username: 'bmac77',
      password: 'bmacshouse'
    },
    {
      name: 'Haley',
      username: 'hkat',
      password: 'hkj678'
    }
  ]
}

const setUserData = function(e){
  e.preventDefault();
  state.username = $('#username').val();
  state.password = $('#password').val();
  let successCheck = 0;
  for(let i = 0; i<state.userList.length; i++){
    if(state.userList[i].username === state.username && state.userList[i].password === state.password){
      successCheck = 1;
      render(`Welcome ${state.userList[i].name}`);
    }
  }
  if(successCheck===0){
    render('Invalid login info');
  }
  state.name = $('#name').val('');
  state.username = $('#username').val('');
  state.password = $('#password').val('');
  console.log('username', state.username);
  console.log(successCheck);
}

const signUp = function(e){
  e.preventDefault();
  state.name = $('#name').val();
  state.username = $('#username').val();
  state.password = $('#password').val();
  let userSignUp = {
    name: state.name,
    username: state.username,
    password: state.password
  }
  state.userList.push(userSignUp);
  state.name = $('#name').val('');
  state.username = $('#username').val('');
  state.password = $('#password').val('');
  console.log(state.userList);
}

const render = function(inputStr){
  $('#content').html('');
  $('#content').html(inputStr);
}

$('#submit').on('click', setUserData);
$('#signup').on('click', signUp);