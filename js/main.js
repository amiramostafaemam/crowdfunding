const displayDetail = function (e, btnName) {
  let i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tabcontent");
  tabLinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (i = 0; i < tabContent.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }

  document.getElementById(btnName).style.display = "block";
  e.currentTarget.className += "active";
};

window.addEventListener("load", function () {
    const descripton = document.getElementById('description');
    const video = document.getElementById("video");

    document.getElementById("btn1").addEventListener('click', displayDetail(e, descripton));
    document.getElementById("btn2").addEventListener("click", displayDetail(e, video));

    


}); //end of load
