function showcontent() {
  document.getElementById("toggle-content").classList.toggle("show");
}
function showslider() {
  document.getElementById("wrapper").classList.toggle("toggled");
}
// item class
// click event 추가
const item = document.querySelectorAll(".items");

for(var i =0; i < item.length; i ++){
	item[i].addEventListener("click", clicked)
}
function clicked(event) {
	for(var i =0; i < item.length; i ++){
		item[i].classList.remove('clicked')
	}
	// event.target으로 어느 query에서 이벤트가 발생했는지 확인
	// console.log(event.target);
	var click_item = document.getElementsByClassName("clicked");

	event.target.classList.add('clicked');

}
