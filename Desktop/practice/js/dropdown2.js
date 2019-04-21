  // dropbtn 버튼 클릭 시 myFunction 함수 실행
  // classList  클래스들의 목록에 접근하는 방식
  // classList.toggle("[Class]"); -> show라는 클래스가 없다면 true를 시키고 show라는 클래스가 존재한다면 false를 시킨다.
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // 예외 검사
  // 만약 show를 포함 하고 있다면 삭제
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      console.log("dropdowns.length : " +  dropdowns.length);
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
