const closeBtn = document.getElementById('close-btn');
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () =>{
  sideMenu.style.display = 'block'
})
closeBtn.addEventListener('click', () =>{
  sideMenu.style.display = 'none'
})
Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.CusName}</td>
        <td>${order.PhoneNum}</td>
        <td>${order.Address}</td>
        <td>${order.Day}</td>
        <td>${order.Time}</td>
        <td>${order.PayStatus}</td>
        <td>${order.ProdName}</td>
        <td>${order.Quantity}</td>
        <td>${order.Status}</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
//dropdown  
var dropdown = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//upload img
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}