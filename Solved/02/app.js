const state = {
  id: '',
  studentList: [
    {
      name: 'blake',
      id: 1004,
      status: 'active'
    },
    {
      name: 'kelsey',
      id: 1005,
      status: 'inactive'
    },
    {
      name: 'jake',
      id: 1006,
      status: 'active'
    },
    {
      name: 'tia',
      id: 1007,
      status: 'active'
    },
    {
      name: 'jamal',
      id: 1008,
      status: 'inactive'
    },
    {
      name: 'jada',
      id: 1009,
      status: 'pending'
    }
  ]
}

const setId = function(e){
  e.preventDefault();
  state.id = $('#user-id').val();
  let successCheck = 0;
  for(let i=0; i<state.studentList.length; i++){
    if(state.studentList[i].id == state.id){
      successCheck = 1;
      render(`<p>Student Name: ${state.studentList[i].name}</p><p>Status: ${state.studentList[i].status}`);
    }
  }
  if (successCheck === 0){
    render('student not found');
  }
  console.log(state.id);
  state.id = $('#user-id').val('');
}

const render = function(inputStr){
  $('#content').html('');
  $('#content').html(inputStr);
}

$('#submit').on('click', setId)