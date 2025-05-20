


// take category from url
let urlparams = new URLSearchParams(window.location.search);
let targetCategory = urlparams.get("category");
console.log(targetCategory);

let filterData = [];
let allData = [];


// fetch all data
async function getAllData() {
  try {
    let response = await fetch(`http://localhost:4000/campaigns`);
    let finalData = await response.json();
    allData = finalData;
    display(allData);
  } catch (error) {
    console.error("error is: ", error);
  }
}

//search
let targetInput = document.querySelector('.explore__input input');
targetInput.addEventListener("input", function () {
  let inputValue = targetInput.value.trim().toLowerCase();

  if (inputValue === "") {
    display(allData); 
    return;
  }
  let filteredResults = allData.filter(item =>
    item.title.toLowerCase().includes(inputValue)
  );

  display(filteredResults);
});

// fetch filtered data from home
async function getFilteredData(data) {
  try {
    let response = await fetch(
      `http://localhost:4000/campaigns?category=${targetCategory}`
    );
    let finalData = await response.json();
    filterData = finalData;
    console.log(filterData);
    //display filterd cards
    display(filterData);
  } catch (error) {
    console.error("error is : ", error);
  }
}

if (targetCategory) {
  getFilteredData();
} else {
  getAllData();
}



//function to display data
function display(allData) {
  let card = ``;
  for (i = 0; i < allData.length; i++) {
    card += `
        <div class="col-lg-4 col-sm-12 mb-5 ">
                <div class="explore__card__style p-2">
                    <div class="explore__card position-relative">
                        <img src="${allData[i].details.gallery[0]}" alt=""
                            class="w-100 rounded-3 card-img-top explore__card--img">
                        <div class="explore__card__layer position-absolute p-3">
                            <a href="#"><i class="fa-solid fa-video fa-2xl" style="color: #ffffff;"></i></a>

                        </div>
                    </div>
                    <p class="Explore__campainer__name mt-2">campainer name</p>
                    <p class="explore__campain__category my-2 fw-bold h5">${
                      allData[i].title
                    }</p>

                    <div class="progress rounded-3 w-100 my-3" role="progressbar" aria-label="Basic example"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: ${(
                          (allData[i].current / allData[i].goal) *
                          100
                        ).toFixed(0)}%"></div>

                    </div>
                    <div class="pb-3 ">
                        <p><span class="fw-bold text-success">${
                          allData[i].current
                        } $</span> raised of <span class="fw-bold">${
      allData[i].goal
    } $</span></p>
                        <a href="#" class=" learnmore">Learn more</a>
                    </div>

                </div>
            </div>
        `;
  }
  document.getElementById("card__container").innerHTML = card;
}

// filtered enter page

async function FilteredData(data) {
  try {
    let response = await fetch(
      `http://localhost:4000/campaigns?category=${data}`
    );
    let finalData = await response.json();
    filterData = finalData;
    console.log(filterData);
    //display filterd cards
    display(filterData);
  } catch (error) {
    console.error("error is : ", error);
  }
}

const filterItems = document.querySelectorAll(".explore__filter__ul li");

for (let i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener("click", function () {
    const selectedCategory = this.getAttribute("data-category");
    console.log(selectedCategory);
    if (selectedCategory == "all") {
      getAllData();
    } else {
      FilteredData(selectedCategory);
    }
  });
}

// search data 
// async function getSearchData(data) {
//   try {
//     let response = await fetch(
//       `http://localhost:4000/campaigns?q=Wild`
//     );
//     let finalData = await response.json();
//     filterData = finalData;
//     console.log(filterData);
//     //display filterd cards
//     display(filterData);
//   } catch (error) {
//     console.error("error is : ", error);
//   }
// }
//search input
