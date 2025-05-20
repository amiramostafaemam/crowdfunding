// take category from url 
let urlparams = new URLSearchParams(window.location.search);
let targetCategory = urlparams.get('category');
console.log(targetCategory);

// fetch data
let filterData = [];
async function getFilteredData(data){
    try {
        let response = await fetch(`http://localhost:4000/campaigns?category=${targetCategory}`);
        let finalData = await response.json();
        filterData = finalData;
        console.log(filterData);

        //display filterd cards 
        display()
    } catch (error) {
        console.error("error is : " ,error)
    }
}
getFilteredData();
//function to display data
function display(){
    let card = ``;
    for(i=0 ; i< filterData.length ; i++){
        card += `
        <div class="col-lg-4 col-sm-12 mb-5 ">
                <div class="explore__card__style p-2">
                    <div class="explore__card position-relative">
                        <img src="${filterData[i].details.gallery[0]}" alt=""
                            class="w-100 rounded-3 card-img-top explore__card--img">
                        <div class="explore__card__layer position-absolute p-3">
                            <a href="#"><i class="fa-solid fa-video fa-2xl" style="color: #ffffff;"></i></a>

                        </div>
                    </div>
                    <p class="Explore__campainer__name mt-2">campainer name</p>
                    <p class="explore__campain__category my-2 fw-bold h5">${filterData[i].title}</p>

                    <div class="progress rounded-3 w-100 my-3" role="progressbar" aria-label="Basic example"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: ${((filterData[i].current / filterData[i].goal) * 100).toFixed(0)}%"></div>

                    </div>
                    <div class="pb-3 ">
                        <p><span class="fw-bold text-success">${filterData[i].current} $</span> raised of <span class="fw-bold">${filterData[i].goal} $</span></p>
                        <a href="#" class=" learnmore">Learn more</a>
                    </div>

                </div>
            </div>
        `
    }
    document.getElementById('card__container').innerHTML = card;
}



