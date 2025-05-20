let dashboardTable = document.getElementById("dashboardTable");
let campainsTable = document.getElementById("campainsTable");
let pledgeTable = document.getElementById("pledgeTable");

document.getElementById("dashboardBtn").addEventListener("click", function () {
  dashboardTable.classList.remove("d-none");
  campainsTable.classList.add("d-none");
  pledgeTable.classList.add("d-none");
    //call function to display users data
  getAllData();
});

document.getElementById("campainsBtn").addEventListener("click", function () {
  dashboardTable.classList.add("d-none");
  campainsTable.classList.remove("d-none");
  pledgeTable.classList.add("d-none");
  //call function to display campaign
  getCampaigns();
});

document.getElementById("pledgeBtn").addEventListener("click", function () {
  dashboardTable.classList.add("d-none");
  campainsTable.classList.add("d-none");
  pledgeTable.classList.remove("d-none");
});

//fetch users data
let allUsers = [];
async function getAllData(data) {
  try {
    let response = await fetch(`http://localhost:4000/users`);
    let finalData = await response.json();
    allUsers = finalData;
    console.log(allUsers);
    //display table body
 displayUsers(allUsers);
  } catch (error) {
    console.error("error is : ", error);
  }
}
getAllData();

//function to display user data
function displayUsers(all) {
  let card = ``;
  for (i = 0; i < allUsers.length; i++) {
    card += `
       <tr>
                                        <td>${allUsers[i].id}</td>
                                        <td>${allUsers[i].name}</td>
                                        <td>${allUsers[i].role}</td>
                                        <td class="text-success">${allUsers[i].isActive}</td>
                                        <td>${allUsers[i].email}</td>
                                        <td>${allUsers[i].password}</td>
                                        <td><span>${allUsers[i].totalCampains}</span> campaigns</td>
                                        <td><button onclick="deleteUser(${allUsers[i].id})" class="btn btn-sm btn-outline-danger" >Remove</button></td>
                                    </tr>
                                    
        `;
  }
  document.getElementById("tableBody").innerHTML = card;
}

//remove user from dashboard
function deleteUser(userId) {
  if (confirm("Are you sure you want to delete this user?")) {
    fetch(`http://localhost:4000/users/${userId}`, {
      method: "DELETE"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      //delete user from []
      allUsers = allUsers.filter(user => user.id !== userId);
      //display data again
      displayUsers(allUsers);
    })
    .catch(error => {
      console.error("Error while deleting user:", error);
    });
  }
}
////////////////////////////////////////////////////////////////////////////

//fetch campaigns data
let allCampaigns = [];
async function getCampaigns(data) {
  try {
    let response = await fetch(`http://localhost:4000/campaigns`);
    let finalData = await response.json();
    allCampaigns = finalData;
    console.log(allCampaigns);
    //display table body for campaigns
 displayCmpaign(allCampaigns);
  } catch (error) {
    console.error("error is : ", error);
  }
}


//function to display campaign data
function displayCmpaign(all) {
  let card = ``;
  for (let i = 0; i < allCampaigns.length; i++) {
    let isApproved = allCampaigns[i].isApproved;
    let statusColor = isApproved ? "text-success" : "text-danger";
    let statusText = isApproved ? "true" : "false";

    let actionIcons = isApproved
      ? `<i class="fa-solid fa-trash" style="color: #888; cursor: pointer;"></i>`
      : `<i class="fa-solid fa-check" style="color: #277e15; cursor: pointer; margin-right: 10px;"></i>
         <i class="fa-solid fa-xmark" style="color: #ff0000; cursor: pointer;"></i>`;

    card += `
      <tr>
        <td>${allCampaigns[i].id}</td>
        <td>${allCampaigns[i].title}</td>
        <td>Jane Doe</td>
        <td>${allCampaigns[i].creatorId}</td>
        <td>$ ${allCampaigns[i].goal}</td>
        <td>${allCampaigns[i].deadline}</td>
        <td class="${statusColor} fw-bold">${statusText}</td>
        <td>${actionIcons}</td>
      </tr>
    `;
  }
  document.getElementById("campaign__body__table").innerHTML = card;
}



