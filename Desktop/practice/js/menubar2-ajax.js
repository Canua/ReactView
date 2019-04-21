var toggle = document.getElementById('toggle-content');
var requestURL = 'content.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


// <ul>
//   <li><a class="link" href="#">Main</a></li>
//   <li><a class="link" href="#">Link</a></li>
//   <li><a class="link" href="#">Dropdown</a><i id='showmenu' class="fas fa-caret-down"></i></li>
// </ul>

request.onload = function() {
  console.log('onload');
  var content = request.response;
  populateHeader(content);
};

function populateHeader(jsonObj) {
  // 요소 추가
  var ul = document.createElement('ul');
  // 선택한 요소에 택스트 추가
  // myH1..createTextNode( 'My Text' );
  toggle.appendChild(ul);
  var li1 = document.createElement('li');
  li1.textContent = jsonObj['main'];
  var li2 = document.createElement('li');
  li2.textContent = jsonObj['link'];
  var li3 = document.createElement('li');
  li3.textContent = jsonObj['dropdown'];

  toggle.appendChild(li1);
  toggle.appendChild(li2);
  toggle.appendChild(li3);
}

function showcontent() {
  document.getElementById("toggle-content").classList.toggle("show");
}
