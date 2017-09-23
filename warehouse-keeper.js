$(document).ready(function(){

  function renderpage(data){
    $('#level').text(data.level);
    $('#win').text('Win: ' + data.win);
    var html = "";
    data.map.forEach(function(map_row){
      html += (map_row + '<br>');
    })
    $('#map').html(html);
  }

  $('#reset').on('click', function(){
    var runid = $('#runid').val()
    axios.post('cis2017-warehouse-keeper.herokuapp.com/reset?run_id=' + runid)
    .then(function(){
      alert('game is reset')
    })
  });

  $(document).keypress(function(e) {
    var runid = $('#runid').val()
    console.log('e.which', e.which)
    if(runid.trim()===""){
      alert('Please paste runid into the input first');
      return;
    }

    if (e.which == 119) { // up arrow
      console.log('pressed up');
      axios.post(`https://cis2017-warehouse-keeper.herokuapp.com/move/up?run_id=${runid}`)
      .then(function(resp){
        console.log('resp', resp.data);
        renderpage(resp.data)
      })
    } else if (e.which == 115) { // down arrow
      console.log('pressed down');
      axios.post(`https://cis2017-warehouse-keeper.herokuapp.com/move/down?run_id=${runid}`)
      .then(function(resp){
        console.log('resp', resp.data);
        renderpage(resp.data)
      })
    } else if (e.which == 97) { // left arrow
      console.log('pressed left');
      axios.post(`https://cis2017-warehouse-keeper.herokuapp.com/move/left?run_id=${runid}`)
      .then(function(resp){
        console.log('resp', resp.data);
        renderpage(resp.data)
      })
    } else if (e.which == 100) { // right arrow
      console.log('pressed right');
      axios.post(`https://cis2017-warehouse-keeper.herokuapp.com/move/right?run_id=${runid}`)
      .then(function(resp){
        console.log('resp', resp.data);
        renderpage(resp.data)
      })
    }
  });
})
