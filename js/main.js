var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var modelBox = document.getElementById("modelBox");
var closeEl=document.getElementById('closeEl');
var siteList = [];
var index = 0
var myModalEl = document.getElementById("myModal");
if (localStorage.getItem("siteList") != null) {
  siteList = JSON.parse(localStorage.getItem("siteList"));
  displaySite(siteList);
}
document.getElementById("addSite").addEventListener("click", addSite);
function addSite() {
  if (validNmae() == true && validUrl() == true) {
    var site = {
      nameSite: siteNameInput.value,
      urlSite: siteUrlInput.value,
    };
    siteList.push(site);
    localStorage.setItem("siteList", JSON.stringify(siteList));
    console.log(siteList);
    displaySite(siteList);
  }
   else {
    modelBox.style.display = "flex";
  }
}

function displaySite(arr) {
  temp = "";
  for (let i = 0; i < arr.length; i++) {
    temp += `<tr>
        <td class="p-center">${i}</td>
        <td class="p-center text-capitalize">${arr[i].nameSite}</td>
        <td><a href="https://${arr[i].urlSite}" target="_blank" class="btn btn-success text-white"><i class="fa-solid fa-eye"></i> Visit</a></td>
        <td><button onclick="delSite(${i})" class="btn btn-danger text-white"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>`;
  }
  document.getElementById("tableBody").innerHTML = temp;
}

function delSite(index) {
  siteList.splice(index, 1);
  localStorage.setItem("siteList", JSON.stringify(siteList));
  displaySite(siteList);
}

siteNameInput.addEventListener("keyup", validNmae);
siteUrlInput.addEventListener("keyup", validUrl);

function validNmae() {
  var regexName = /^\w{3,30}$/;
  if (regexName.test(siteNameInput.value) == true) {
    document.querySelector("#siteName").classList.add("is-valid");
    document
      .querySelector("#siteName")
      .classList.replace("is-invalid", "is-valid");
    return true;
  } else {
    document.querySelector("#siteName").classList.add("is-invalid");
    document
      .querySelector("#siteName")
      .classList.replace("is-valid", "is-invalid");
    return false;
  }
}
function validUrl() {
  var regexUrl = /^(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{2,5}$/;
  if (regexUrl.test(siteUrlInput.value) == true) {
    document.querySelector("#siteUrl").classList.add("is-valid");
    document
      .querySelector("#siteUrl")
      .classList.replace("is-invalid", "is-valid");
    return true;
  } else {
    document.querySelector("#siteUrl").classList.add("is-invalid");
    document
      .querySelector("#siteUrl")
      .classList.replace("is-valid", "is-invalid");
    return false;
  }
}
closeEl.addEventListener('click',closeModal)
function closeModal() {
  modelBox.style.display = "none";
}
modelBox.addEventListener('click',function (e) {
    console.log();
    if (e.target.getAttribute('id')=='modelBox') {
      closeModal()
    }
})