console.log("hello");
let alldata = [];
let userdata = [];
async function getdata(data) {
  try {
    //fetch campaign
    let response = await fetch(`http://localhost:4000/campaigns`);
    let finaldata = await response.json();
    alldata = finaldata;
    console.log(alldata);

    //fetch user data
    let res = await fetch(`http://localhost:4000/users`);
    let finalUserData = await res.json();
    userdata = finalUserData;
    console.log(userdata);

    //call display data function
    displayCard();
  } catch (error) {
    console.error("error is : ", error);
  }
}
getdata();
//function to display cards
function displayCard() {
  let card1 = ``;
  let cards = ``;
  const user = userdata.find((u) => u.id === getdata.creatorId);
  //display first card
  card1 += `
    <div>
                        <div class="explore__card position-relative rounded-3 overflow-hidden">
                            <img src="/${
                              alldata[0].details.gallery[0]
                            }" alt="" class="explore__card--img" >
                        </div>
                         <p class="Explore__campainer__name mt-2">${user}</p>
                        <p class="explore__campain__category my-2 fw-bold h4">${
                          alldata[0].title
                        }</p>

                        <div class="progress rounded-3 w-75 my-3" role="progressbar" aria-label="Basic example"
                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar" style="width: ${((alldata[0].current / alldata[0].goal) * 100).toFixed(0)}%"></div>

                        </div>
                        <div class="pb-3">
                            <p><span class="fw-bold text-success">${
                              alldata[0].current
                            } $</span> raised of <span class="fw-bold">${
    alldata[0].goal
  } $</span></p>
                            <a href="#" class=" learnmore">Learn more</a>
                        </div>
                    </div>
    
    `;
  document.getElementById("card__firs").innerHTML = card1;

  //loop to display small cards
  for (i = 1; i < 3; i++) {
    cards += `
    <div class="col-lg-6 col-sm-12">
                            <div>
                                <div class="explore__card position-relative rounded-3 overflow-hidden">
                                    <img src="/${alldata[i].details.gallery}" alt=""
                                        class="explore__card--img">
                                </div>
                                <p class="Explore__campainer__name mt-2">campainer name</p>
                                <p class="explore__campain__category my-2 fw-bold h5">${alldata[i].title}</p>

                                <div class="progress rounded-3 w-100 my-3" role="progressbar" aria-label="Basic example"
                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style="width: ${((alldata[i].current / alldata[i].goal) * 100).toFixed(0)}%"></div>
                                </div>
                                <div class="pb-3 ">
                                    <p><span class="fw-bold text-success">${alldata[i].current} $</span> raised of <span class="fw-bold">${alldata[i].goal} $</span></p>
                                    <a href="#" class=" learnmore">Learn more</a>
                                </div>
                            </div>
                        </div>
    `;
  }
  document.getElementById("small__cards").innerHTML = cards;
}

//select all explore filter divs
let targetMedical =document.querySelector("#explore__medical")
let targetDisaster = document.querySelector('#explore__disaster');
let targetFamily =document.querySelector('#explore__family');
let targetChildren =document.querySelector('#explore__children');
let targetEducation =document.querySelector('#explore__education');
let targetWildlife =document.querySelector('#explore__wildlife');

targetMedical.addEventListener('click' ,function(){
    window.location.href = "../pages/explore.html?category=medical";
});

targetDisaster.addEventListener('click' ,function(){
    window.location.href = "../pages/explore.html?category=disaster";
});
targetFamily.addEventListener('click' ,function(){
    window.location.href = "../pages/explore.html?category=family";
});
targetChildren.addEventListener('click' ,function(){
    window.location.href = "../pages/explore.html?category=children";
});
targetEducation.addEventListener('click' ,function(){
    window.location.href = "../pages/explore.html?category=education";
});
targetWildlife.addEventListener('click' ,function(){
    window.location.href = "../pages/explore.html?category=wildlife";
});