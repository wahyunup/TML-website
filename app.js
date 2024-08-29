let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {

    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    navLink.classList.add('active');

  });
});

let button = document.querySelectorAll('#btn')
button.forEach(function(btn) {
    btn.addEventListener('click', function() {
  
      button.forEach(function(btns) {
        btns.classList.remove('active')
      });
      
      btn.classList.add('active')
  
    });
  });


 
  
  
//  get API
const dataProduk = async () => {
  try {
    const response = await fetch("data/produk.json");
    const data = await response.json();
    
    const container = document.querySelector('.produk');
    container.innerHTML = data.map(data => `
      

      <div class="d-flex flex-wrap justify-content-center">
      <div class="card" style="width: 15rem;">
      <div class="condition">
      <p class="border px-3 py-1" style="width: fit-content;">${data.condition}</p>
      </div>
      <div style="width:250px; height:250px;">
      <img src="${data.image}" class="card-img-top" style="width: 100%" alt="${data.name}">
      </div>
      <div class="overlay">
      </div>
      <div class="card-body">
      <h5 class="card-merk" style="font-size:16px; background-color:black; color:white; padding:5px 8px; width:fit-content; border-radius:0px 10px 0px 0px;">${data.merk}</h5>
      <h6 class="card-name" style="font-size:16px;">${data.name}</h6>
      <div class="spesification">
      <div style="text-align:justify;">
      ${data.specifications.map(spec => `<p style="list-style:none; font-size:13px;">${spec}</p>`).join('')}
      
      </div>
            </div>
          </div> 
          <div>
          </div>
          
          <p class="loadMore" >lihat selengkapnya</p>
          </div>
          </div>
          `).join('');
        } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

dataProduk();

const loadMore = document.querySelectorAll('.loadMore');
loadMore.forEach(function(btn){
  btn.addEventListener('click', function(){
    console.log(btn)
  })
})
