const categoryItems = [
    {id: 1, img: 'items/item1.png', title:'mobile', category:'mobile'},
    {id: 2,img: 'items/item2.png', title:'laptop',category:'laptop'},
    {id: 3,img: 'items/item3.png', title:'watch',category:'smartwatch'},
    {id: 4,img: 'items/item4.png', title:'tablet',category:'tablet'},
    {id: 5,img: 'items/item5.png', title:'monitor',category:'monitor'},

    {id: 6,img: 'items/item6.png',title:'tshirt', category:'tshirt'},
    {id: 7,img: 'items/item7.png', title:'ssd',category:'ssd'},
    {id: 8,img: 'items/item8.png', title:'sunglass',category:'sunglass'},
    {id: 9,img: 'items/item9.png', title:'cap',category:'cap'},
    {id: 10,img: 'items/item10.png', title:'jewelry',category:'jewelry'},

    {id: 11,img: 'items/item11.png', title:'power supply',category:'powersupply'},
    {id: 12,img: 'items/item12.png', title:'tools',category:'powertools'},
    {id: 13,img: 'items/item13.png', title:'welding',category:'weldingmachine'},
    {id: 14,img: 'items/item14.png', title:'speaker',category:'speaker'},
    {id: 15,img: 'items/item15.png', title:'shoes',category:'shoes'},

    
];



// Get the container and arrow buttons
  const categoryItemsContainer = document.getElementById('category-items');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  

  // Make it horizontally scrollable (CSS overflow-x: auto) via JS
  categoryItemsContainer.style.display = 'flex';
  categoryItemsContainer.style.scrollBehavior = 'smooth';
  categoryItemsContainer.style.gap = '10px';
  categoryItemsContainer.style.alignItems = 'center';

  // Example: Fix size of images for consistent look
  categoryItemsContainer.querySelectorAll('.items-container img').forEach(img => {
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '6px';
  });

  //======Scroll left======//
  leftArrow.addEventListener('click', () => {
    categoryItemsContainer.scrollBy({
      left: -500,
      behavior: 'smooth'
    });
  });

  // Scroll right
  rightArrow.addEventListener('click', () => {
    categoryItemsContainer.scrollBy({
      left: 500,
      behavior: 'smooth'
    });
  });

const productItems = document.getElementById('category-items');
productItems.innerHTML = categoryItems.map(item => `
  <div class="items-container" onclick="filterProducts('${item.category}')">
    <img src="${item.img}" alt="${item.category}">
     <p class="items-title">${item.title}</p>
    
  </div>
`).join('');

productItems.addEventListener('click',()=>{
  // Scroll smoothly to the products section
 window.scrollTo({
    top: 600, // Adjust this value as needed
    behavior: "smooth"
  });
});


const productData = [
     {
        id: 1,
        img: 'images/smartwatch.png', category:'smartwatch',
          image1: 'images/smartwatch.png',
          image2:'small-images/smart1.png',
          image3:'small-images/smart2.png',
          image4:'small-images/smart3.png',
          image5:'small-images/smart4.png',
        
        title: 'Smart Watch',
        rating: '4.5⭐⭐⭐⭐',
        price: 2200,
        stocks:'stocks 50pcs ',
        discount: 3000,
        description1:'BW602 Smart Watch 2"',
        description2:'HD Display w/ GPT AI Health Tracking GPS',
        description3:'Water resistant',
    },
     {
        id: 2,
        img: 'images/monitor.png', category:'monitor',
          image1:'images/monitor.png',
          image2:'small-images/aoc1.png',
          image3:'small-images/aoc2.png',
          image4:'small-images/aoc3.png',
          image5:'small-images/aoc4.png',

        title: 'AOC',
        price: 10945,
        stocks:'stocks 150pcs ',
        discount: 12500,
        description1:' 144Hz refresh rate, 1920x1080px',
        description2:'AOC Low Input Lag mode',
        description3:'27" WLED ',
    },

    {
        id: 3,
        img: 'images/smartwatch3.png', category:'smartwatch',
          image1:'images/smartwatch3.png',
          image2:'small-images/smart1.png',
          image3:'small-images/smart6.png',
          image4:'small-images/smart3.png',
          image5:'small-images/smart4.png',
       
        
        title: 'Smart Watch',
        price: 8000,
        stocks:'stocks 30pcs ',
        discount: 10000,
        description1:'BW605 Smart Watch 2"',
        description2:'HD Display w/ GPT AI Health Tracking GPS',
        description3:'Water resistant',
    },
     {
        id: 2.1,
        img: 'small-images/monitor2.png', category:'monitor',
          image1:'images/monitor.png',
          image2:'small-images/monitor2.png',
          image3:'small-images/monitor3.png',
          image4:'small-images/monitor4.png',
          image5:'small-images/monitor5.png',

        title: 'Dell',
        price: 18000,
        stocks:'stocks 80pcs ',
        discount: 19000,
        description1:'27" WQHP 3440x1440',
        description2:'Display Port HDMI, DVI',
        description3:'100Hrz Refresh Rate ',
    },

     {
        id: 4,
        img: 'images/tablet1.png', category:'tablet',
          image1:'images/tablet1.png',
          image2:'small-images/tab5.png',
          image3:'small-images/tab6.png',
          image4:'small-images/tab7.png',
          image5:'small-images/tab8.png',

        title: 'Tablet',
        price: 20500,
        stocks:'stocks 120pcs ',
        discount: 38000,
        description1:'Display: 1200x1920 pixels',
        description2:'Camera:8MP Selfie: 5MP',
        description3:'SSD/Ram: 64GB 3GB RAM',
    },
    {
        id: 2.3,
        img: 'small-images/monitor3.png', category:'monitor',
          image1:'images/monitor.png',
          image2:'small-images/monitor2.png',
          image3:'small-images/monitor3.png',
          image4:'small-images/monitor4.png',
          image5:'small-images/monitor5.png',

        title: 'Samsung',
        price: 18000,
        stocks:'stocks 20pcs ',
        discount: 19000,
        description1:'22" WQHP 3440x1440',
        description2:'Display Port HDMI, DVI,RGB',
        description3:'100Hrz Refresh Rate ',
    },

    {
        id: 5,
        img: 'images/smartwatch4.png', category:'smartwatch',
          image1:'images/smartwatch4.png',
          image2:'small-images/smart1.png',
          image3:'small-images/smart2.png',
          image4:'small-images/smart3.png',
          image5:'small-images/smart4.png',
        
        title: 'Smart Watch',
        price: 12000,
        stocks:'stocks 10pcs ',
        discount: 15000,
       description1:'BW600 Smart Watch 2"',
        description2:'HD Display w/ GPT AI Health Tracking GPS',
        description3:'Water resistant',
    },
    {
        id: 2.4,
        img: 'small-images/monitor4.png', category:'monitor',
          image1:'images/monitor.png',
          image2:'small-images/monitor2.png',
          image3:'small-images/monitor3.png',
          image4:'small-images/monitor4.png',
          image5:'small-images/monitor5.png',

        title: 'Acer',
        price: 18000,
        stocks:'stocks 25pcs ',
        discount: 19000,
       description1:'27" WQHP 3440x1440',
        description2:'Display Port HDMI',
        description3:'120Hrz Refresh Rate ',
    },

    {
        id: 6,
        img: 'images/tablet.png', category:'tablet',
          image1:'images/tablet.png',
          image2:'small-images/tab5.png',
          image3:'small-images/tab6.png',
          image4:'small-images/tab7.png',
          image5:'small-images/tab8.png',

        title: 'Tablet',
        price: 10500,
        stocks:'stocks 10pcs ',
        discount: 15000,
        description1:'Display: 1200x1920 pixels',
        description2:'Camera:8MP Selfie: 5MP',
        description3:'SSD/Ram: 64GB 3GB RAM',
    },
    {
        id: 2.5,
        img: 'images/hp.png', category:'monitor',
          image1:'images/hp.png',
          image2:'small-images/hp1.png',
          image3:'small-images/hp2.png',
          image4:'small-images/hp3.png',
          image5:'small-images/hp4.png',

        title: 'HP Monitor',
        price: 18000,
        stocks:'stocks 40pcs ',
        discount: 21000,
        description1:'34" WQHP 3440x1440',
        description2:'Display Port HDMI',
        description3:'100Hrz Refresh Rate ',
    },

     {
        id: 7,
        img: 'images/smartwatch1.png', category:'smartwatch',
          image1:'images/smartwatch1.png',
          image2:'small-images/smart1.png',
          image3:'small-images/smart2.png',
          image4:'small-images/smart3.png',
          image5:'small-images/smart4.png',
        
        title: 'Smart Watch',
        price: 10000,
        stocks:'stocks 60pcs',
        discount: 12000,
        description1:'BW606 Smart Watch "',
        description2:'HD Display w/ GPT AI Health Tracking GPS',
        description3:'Water resistant',
    },
    
     {
        id: 8,
        img: 'images/tablet2.png',  category:'tablet',
          image1:'images/tablet2.png',
          image2:'small-images/tab5.png',
          image3:'small-images/tab6.png',
          image4:'small-images/tab7.png',
          image5:'small-images/tab8.png',

        title: 'Tablet',
        price: 9500,
        stocks:'stocks 30pcs ',
        discount: 12000,
        description1:'Display: 1200x1920 pixels',
        description2:'Camera:8MP Selfie: 5MP',
        description3:'SSD/Ram: 64GB 3GB RAM',
    },
     {
        id: 9,
        img: 'images/tablet.png',  category:'tablet',
          image1:'images/tablet.png',
          image2:'small-images/tab5.png',
          image3:'small-images/tab6.png',
          image4:'small-images/tab7.png',
          image5:'small-images/tab8.png',

        title: 'Tablet',
        price: 30500,
        stocks:'stocks 45pcs ',
        discount: 40000,
        description1:'Display: 1200x1920 pixels',
        description2:'Camera:8MP Selfie: 5MP',
        description3:'SSD/Ram: 64GB 3GB RAM',
    },
     {
        id: 10,
        img: 'images/tablet.png', category:'tablet',
          image1:'images/tablet.png',
          image2:'small-images/tab5.png',
          image3:'small-images/tab6.png',
          image4:'small-images/tab7.png',
          image5:'small-images/tab8.png',

        title: 'Tablet',
        price: 30500,
        stocks:'stocks 16pcs ',
        discount: 40000,
        description1:'Display: 1200x1920 pixels',
        description2:'Camera:8MP Selfie: 5MP',
        description3:'SSD/Ram: 64GB 3GB RAM',
    },

    {
        id: 11,
        img: 'images/phone.png', category:'mobile',
          image1:'images/phone.png',
          image2:'small-images/phone1.png',
          image3:'small-images/phone2.png',
          image4:'small-images/phone3.png',
          image5:'small-images/phone4.png',

        title: 'IPhone',
        price: 50000,
        stocks:'stocks 10pcs ',
        discount: 60000,
        description1:'CPU: Octa-core CPU, up to 3.1GHz',
        description2:'6000mAh',
        description3:'Refresh rate 120',
    },

     {
        id: 12,
        img: 'images/smartwatch2.png', category:'smartwatch',
          image1:'images/smartwatch2.png',
          image2:'small-images/smart1.png',
          image3:'small-images/smart2.png',
          image4:'small-images/smart3.png',
          image5:'small-images/smart5.png',
        
        title: 'Smart Watch',
        price: 15000,
        stocks:'stocks 18pcs ',
        discount: 18000,
        description1:'A smartwatch is a wearable',
        description2:'Typically worn on the wrist',
        description3:'water resistant,GPS',
    },
    {
        id: 23,
        img: 'categoryitems/mobile5.png', category:'mobile',
          image1:'categoryitems/mobile5.png',
          image2:'small-images/phone1.png',
          image3:'small-images/phone2.png',
          image4:'small-images/phone3.png',
          image5:'small-images/phone4.png',

        title: 'Vivo',
        price: 15000,
        stocks:'stocks 30pcs ',
        discount: 16000,
        description1:'CPU: Octa-core CPU, up to 3.25GHz',
        description2:'6000mAh',
        description3:'Refresh rate 120',
    },
    {
        id: 13,
        img: 'images/laptop.png', category:'laptop',
          image1:'images/laptop.png',
          image2:'small-images/laptop1.png',
          image3:'small-images/laptop2.png',
          image4:'small-images/laptop3.png',
          image5:'small-images/laptop4.png',

        title: 'Laptop',
        price: 90000,
        stocks:'stocks 5pcs ',
        discount: 110000,
        description1:'A smartwatch is a wearable',
        description2:'Typically worn on the wrist',
        description3:'A smartwatch is a wearable ',
    },
   
    {
        id: 14,
        img: 'small-images/tshirt4.png', category:'tshirt',
        image1:'images/tshirt.png',
        image2:'small-images/tshirt1.png',
        image3:'small-images/tshirt2.png',
        image4:'small-images/tshirt3.png',
        image5:'small-images/tshirt4.png',

        title: 'T-shirt',
        price: 350,
        stocks:'stocks 150pcs ',
        discount: 600,
        description1:'cotton 100%',
        description2:'Mark Spencer Brand',
        description3:'Heavy weight tshirt ',
    },

    {
        id: 14.1,
        img: 'images/tshirt.png', category:'tshirt',
        image1:'images/tshirt.png',
        image2:'small-images/tshirt1.png',
        image3:'small-images/tshirt2.png',
        image4:'small-images/tshirt3.png',
        image5:'small-images/tshirt4.png',

        title: 'T-shirt',
        price: 600,
        stocks:'stocks 300pcs ',
        discount: 800,
        description1:'cotton',
        description2:'Blue Corner',
        description3:'Premium quality crafted of heavy',
    },
    {
        id: 14.2,
        img: 'small-images/tshirt1.png', category:'tshirt',
        image1:'images/tshirt.png',
        image2:'small-images/tshirt1.png',
        image3:'small-images/tshirt2.png',
        image4:'small-images/tshirt3.png',
        image5:'small-images/tshirt4.png',

        title: 'T-shirt',
        price: 450,
        stocks:'stocks 120pcs ',
        discount: 700,
        description1:'100% cotton',
        description2:'Yalex',
        description3:'Premium quality crafted of heavy',
    },
    {
        id: 14.3,
        img: 'small-images/tshirt2.png', category:'tshirt',
        image1:'images/tshirt.png',
        image2:'small-images/tshirt1.png',
        image3:'small-images/tshirt2.png',
        image4:'small-images/tshirt3.png',
        image5:'small-images/tshirt4.png',

        title: 'T-shirt',
        price: 550,
        stocks:'stocks 250pcs ',
        discount: 700,
        description1:'100% cotton',
        description2:'Yalex',
        description3:'Premium quality crafted of heavy',
    },

     {
        id: 14.4,
        img: 'small-images/tshirt3.png', category:'tshirt',
        image1:'images/tshirt.png',
        image2:'small-images/tshirt1.png',
        image3:'small-images/tshirt2.png',
        image4:'small-images/tshirt3.png',
        image5:'small-images/tshirt4.png',

        title: 'T-shirt',
        price: 380,
        stocks:'stocks 180pcs ',
        discount: 700,
       description1:'100% Polyester',
        description2:'Dri-fit',
        description3:'Premium quality crafted of heavy',
    },
    
    {
        id: 22,
        img: 'small-images/iphone16.png', category:'mobile',
        image1:'small-images/iphone16.png',
        image2:'small-images/iphone14.png',
        image3:'small-images/iphone16+.png',
        image4:'small-images/phone3.png',
        image5:'small-images/phone4.png',

        title: 'Iphone',
        price: 50000,
        stocks:'stocks 12pcs ',
        discount: 55000,
        description1:'CPU: Octa-core CPU, up to 3.25GHz',
        description2:'6000mAh',
        description3:'Resolution: 2712 x 1220 (1.5K resolution)',
    },
    {
        id: 15,
        img: 'images/cap.png', category:'cap',
        image1:'images/cap.png',
        image2:'small-images/cap1.png',
        image3:'small-images/cap2.png',
        image4:'small-images/cap3.png',
        image5:'small-images/cap4.png',

        title: 'Cap',
        price: 800,
        stocks:'stocks 40pcs ',
        discount: 1000,
        description1:'A smartwatch is a wearable',
        description2:'Typically worn on the wrist',
        description3:'A smartwatch is a wearable ',
    },
    {
        id: 16,
        img: 'images/sunglasses.png', category:'sunglass',
        
        image1:'small-images/small29.png',
        image2:'small-images/small30.png',
        image3:'small-images/small31.png',
        image4:'small-images/small32.png',

        title: 'Sun Glass',
        price: 3000,
        stocks:'stocks 100pcs ',
        discount: 4500,
        description1:'A smartwatch is a wearable',
        description2:'Typically worn on the wrist',
        description3:'A smartwatch is a wearable ',
    },
    {
        id: 17,
        img: 'images/ssd.png', category:'ssd',
        
        image1:'small-images/small33.png',
        image2:'small-images/small34.png',
        image3:'small-images/small35.png',
        image4:'small-images/small36.png',

        title: 'Samsung Evo SSD',
        price: 2500,
        stocks:'stocks 30pcs',
        discount: 4000,
        description1:'250GB',
        description2:'High speed SSD',
        description3:'2.5 inches SATA',
    },

     {
        id: 17.1,
        img: 'images/ssd1.png', category:'ssd',
        
        image1:'small-images/small33.png',
        image2:'small-images/small34.png',
        image3:'small-images/small35.png',
        image4:'small-images/small36.png',

        title: 'Western Digital SSD',
        price: 4500,
        stocks:'stocks 30pcs',
        discount: 6000,
        description1:'1TB',
        description2:'Form Factor M.2 2280',
        description3:'NVme PCIe Gen4 x4',
    },

    {
        id: 21,
        img: 'categoryitems/mobile3.png', category:'mobile',
        image1:'categoryitems/mobile3.png',
        image2:'small-images/phone1.png',
        image3:'small-images/phone2.png',
        image4:'small-images/phone3.png',
        image5:'small-images/phone4.png',

        title: 'SporX Mobile',
        price: 4500,
        stocks:'stocks 60pcs ',
        discount: 5000,
        description1:'A smartwatch is a wearable',
        description2:'Typically worn on the wrist',
        description3:'A smartwatch is a wearable ',
    },
    {
        id: 18,
        img: 'images/jewelry.png', category:'jewelry',
       
        image1:'small-images/small37.png',
        image2:'small-images/small38.png',
        image3:'small-images/small39.png',
        image4:'small-images/small40.png',

        title: 'Jewelry',
        price: 350,
        stocks:'stocks 50pcs ',
        discount: 500,
        description1:'A smartwatch is a wearable',
        description2:'Typically worn on the wrist',
        description3:'A smartwatch is a wearable ',
    },

    {
        id: 19,
        img: 'small-images/galaxyS25.png', category:'mobile',
        image1:'small-images/galaxyS25.png',
        image2:'small-images/galaxyA26.png',
        image3:'small-images/galaxyA54.png',
        image4:'small-images/galaxyA56.png',
        image5:'small-images/galaxyS24.png',

        title: 'Samsung Galaxy',
        price: 8000,
        stocks:'stocks 48pcs ',
        discount: 10000,
        description1:'A smartwatch is a wearable',
        description2:'Typically worn on the wrist',
        description3:'A smartwatch is a wearable ',
    },

    {
        id: 20,
        img: 'categoryitems/mobile2.png', category:'mobile',
        image1:'categoryitems/mobile2.png',
        image2:'small-images/phone1.png',
        image3:'small-images/phone2.png',
        image4:'small-images/phone3.png',
        image5:'small-images/phone4.png',

        title: 'ReadMe Note',
        price: 7000,
        stocks:'stocks 70pcs ',
        discount: 9000,
        description1:'A smartwatch is a wearable',
        description2:'Typically worn on the wrist',
        description3:'A smartwatch is a wearable ',
    },
    {
        id: 24,
        img: 'small-images/laptop1.png', category:'laptop',
          image1:'images/laptop.png',
          image2:'small-images/laptop1.png',
          image3:'small-images/laptop2.png',
          image4:'small-images/laptop3.png',
          image5:'small-images/laptop4.png',

        title: 'Laptop',
        price: 100000,
        stocks:'stocks 20pcs ',
        discount: 120000,
        description1:'A smartwatch is a wearable',
        description2:'Typically worn on the wrist',
        description3:'A smartwatch is a wearable ',
    },

    {
        id: 25,
        img: 'small-images/laptop2.png', category:'laptop',
          image1:'images/laptop.png',
          image2:'small-images/laptop1.png',
          image3:'small-images/laptop2.png',
          image4:'small-images/laptop3.png',
          image5:'small-images/laptop4.png',

        title: 'HP',
        price: 60000,
        stocks:'stocks 30pcs ',
        discount: 80000,
        description1:'Core i7 3.6Ghz',
        description2:'10th Gen, SSD 1TB',
        description3:'Ram 16GB, 19", GTX 1650',
    },

    {
        id: 26,
        img: 'images/Alienware.png', category:'laptop',
          image1:'images/Alienware.png',
          image2:'small-images/Alienware1.png',
          image3:'small-images/Alienware2.png',
          image4:'small-images/Alienware3.png',
          image5:'small-images/Alienware4.png',

        title: 'AlienWare',
        price: 100000,
        stocks:'stocks 10pcs ',
        discount: 120000,
        description1:'Core i9 5.2Ghz|3.9Ghz, 16cores',
        description2:'12th Gen, SSD 1TB',
        description3:'Ram 32GB, 19", RTX 4090',
    },
    {
        id: 27,
        img: 'small-images/laptop4.png', category:'laptop',
          image1:'images/laptop.png',
          image2:'small-images/laptop1.png',
          image3:'small-images/laptop2.png',
          image4:'small-images/laptop3.png',
          image5:'small-images/laptop4.png',

        title: 'Acer',
        price: 90000,
        stocks:'stocks 15pcs ',
        discount: 100000,
        description1:'Core i9 3.6Ghz Processor ',
        description2:'12th Gen, SSD 1TB,',
        description3:'Ram 16GB, 19", RTX 4060 ',
    },

  ];

const productsContainer = document.getElementById("products"); 
function filterProducts(category) {
  console.log("Filtering for category:", category); 
  const filtered = productData.filter(product => product.category === category);
  console.log("Filtered result:", filtered);

  productsContainer.innerHTML = filtered.map(data => `
    <div class="product-container" data-aos="zoom-in" onclick="addToCart(${data.id})">
      <div>
        <img src="${data.img}" alt="">
        <h2>${data.title}</h2>
        <p class="price">₱${data.price.toLocaleString()}</p>
        <ul class="description">
            <li>${data.description1}</li>
            <li>${data.description2}</li>
            <li>${data.description3}</li>
        </ul>
      </div>
    </div>
  `).join('');
}


function showAllProducts() {
  productsContainer.innerHTML = productData.map(data => `
    <div class="product-container" data-aos="zoom-in" onclick="addToCart(${data.id})">
      <div>
        <img src="${data.img}" alt="">
        <h2>${data.title}</h2>
        <p class="price">₱${data.price.toLocaleString()}</p>
        <ul class="description">
            <li>${data.description1}</li>
            <li>${data.description2}</li>
            <li>${data.description3}</li>
        </ul>
      </div>
    </div>
  `).join('');
}
showAllProducts(); // Call this directly

const showItemProduct = document.querySelector('.showAllProducts');
showItemProduct.addEventListener('click',()=>{
     window.scrollTo({
      top:600,
      behaviour:"smooth",
    });
})


// =====Search Items Section=====//
const searchInput = document.getElementById("search");
const searchIcon = document.getElementById("search-icon");

// Toggle input visibility
searchIcon.addEventListener("click", () => {
  searchInput.style.display = searchInput.style.display === "none" ? "inline-block" : "none";
  searchInput.focus();
});

//=== Filter products on searching===//
searchInput.addEventListener("keyup", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = productData.filter(product =>
    product.title.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
  displayProducts(filtered);

   // Scroll smoothly to the products section
  window.scrollTo({
    top: 600, // Adjust this value as needed
    behavior: "smooth"
  });
});


//===Function to show products in array===//
function displayProducts(products) {
  productsContainer.innerHTML = products.map(data => `
    <div class="product-container" data-aos="zoom-in" onclick="addToCart(${data.id})">
      <div>
        <img src="${data.img}" alt="">
        <h2>${data.title}</h2>
        <p class="price">₱${data.price.toLocaleString()}</p>
        <ul class="description">
          <li>${data.description1}</li>
          <li>${data.description2}</li>
          <li>${data.description3}</li>
        </ul>
      </div>
    </div>
  `).join('');
}


  function addToCart(productId) {
  const product = productData.find(p => p.id === productId);
  if (product) {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    
    loginContainer.classList.add('show');
    loginContainer.classList.remove('hide');
  
    signupContainer.classList.remove('show');
    signupContainer.classList.add('hide');
    registerSection.classList.add('blur');
  };
};


// Saving the cart number in product.html and index.html//
document.addEventListener('DOMContentLoaded', () => {
  const cartNumber = document.getElementById('cart-number');
  const cartDropdown = document.getElementById('cart-dropdown');

  const savedCount = parseInt(localStorage.getItem('cartCount')) || 0;

  // Update cart number
  cartNumber.textContent = savedCount;

  // Clear existing dropdown content
  cartDropdown.innerHTML = '';
});


document.addEventListener("DOMContentLoaded", function () {
  const cartDropdown = document.getElementById("cart-dropdown");

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (cartItems.length === 0) {
    cartDropdown.innerHTML =  `<div id="empty-cart-msg"><p>Your cart is empty</p></div>`;
    return;
  }

 cartItems.forEach((item) => {
  const total = item.price * item.quantity;
  const itemDiv = document.createElement('div');
    
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <img src="${item.image}" class="cart-item-image">
      <div>
        <p>${item.title}</p>
        <p>${item.quantity}
            <span class="item-price">₱${item.price.toLocaleString()}</span>
            = <span class="total-price-quantity">₱${total.toLocaleString()}</span>
          </p>
      </div>
    `;
    cartDropdown.appendChild(itemDiv);
  });
});


//============Show Signup & Login Form==================== //
const signupContainer = document.getElementById('signup-container');
const loginContainer = document.getElementById('login-container');
const signUpBtn = document.getElementById('signup');
const loginBtn = document.getElementById('login');
const registerSection = document.getElementById('background-login');
const signUpLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');

signUpBtn.addEventListener('click', () => {
  signupContainer.classList.add('show');
  signupContainer.classList.remove('hide');
  
  loginContainer.classList.remove('show');
  loginContainer.classList.add('hide');
   registerSection.classList.add('blur');
});


loginBtn.addEventListener('click', () => {
  loginContainer.classList.add('show');
  loginContainer.classList.remove('hide');
  
  signupContainer.classList.remove('show');
  signupContainer.classList.add('hide');
  registerSection.classList.add('blur');
});

signUpLink.addEventListener('click',()=>{
    signupContainer.classList.add('show');
    loginContainer.classList.remove('show');
});

loginLink.addEventListener('click',()=>{
    loginContainer.classList.add('show');
    signupContainer.classList.remove('show');
    
});

const closeIconBtn = document.getElementById('close-icon')
closeIconBtn.addEventListener('click',()=>{
    signupContainer.classList.remove('show');
    window.location.href='index.html';
});

const closeIconSignupBtn = document.getElementById('close-login')
closeIconSignupBtn.addEventListener('click',()=>{
    loginContainer.classList.remove('show');
    window.location.href='index.html';
    console.log('closeIconSignupBtn');
    
});


 //====SignUp Section====//
const submitRegBtn = document.getElementById('submit-regBtn');
showToast =(message)=>{
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    // Hide after 3seconds
    setTimeout(()=>{
        toast.classList.remove('show');
    },3000);
}
 
  submitRegBtn.addEventListener('click', (e) => {
      e.preventDefault();

    const usernameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('signup-PW');

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || email === '' || password === '') {
      showToast('Please fill in all fields ');
    } else if (!email.includes('@') || !email.includes('.')) {
      showToast('Please enter a valid email');
    } else if (password.length < 6) {
      showToast('Password must be at least 6 characters');
    } else {
      showToast('Account has been registered');
      loginContainer.classList.add('show');
      signupContainer.classList.remove('show');

      usernameInput.value='';
      emailInput.value='';
      passwordInput.value='';
    }
    
});

//====Email login validation 1st option if login manualy==== //
document.getElementById('submit-loginBtn').addEventListener('click', () => {
  const email = document.getElementById('email-login').value.trim();
  const password = document.getElementById('login-PW').value.trim();

  if (email === '' || password === '') {
    alert('Please enter both email and password.');
    return;
  }

 const username = email.split('@')[0];
      const userObj = {
        email: email,
        username: username
      };

      localStorage.setItem('loggedInUser', JSON.stringify(userObj));
      window.location.href = 'product.html';
    });

    // Google Sign-In Handler 2nd option if google login want to use
    function handleCredentialResponse(response) {
      const token = response.credential;
      const payload = JSON.parse(atob(token.split('.')[1]));
      const email = payload.email;
      const username = email.split('@')[0];

      const userObj = {
        email: email,
        username: username
      };

      localStorage.setItem('loggedInUser', JSON.stringify(userObj));
      window.location.href = "product.html";
  }


//Hero Section Image Slide //
  const slides = document.getElementById('carousel-slides');
  const dots = document.querySelectorAll('.manual-btn');
  const totalSlides = dots.length;
  let counter = 0;
  const intervalTime = 4000;
  let interval;

  function goToSlide(index) {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots(index % totalSlides);
    counter = index;
  }

  function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function autoSlide() {
    interval = setInterval(() => {
      counter++;
      goToSlide(counter);

      if (counter === totalSlides) {
        setTimeout(() => {
          // Disable animation to jump to real slide 0
          slides.style.transition = 'none';
          slides.style.transform = `translateX(0%)`;
          counter = 0;
          updateDots(counter);
        }, 500); // match transition duration
      }
    }, intervalTime);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-slide'));
      clearInterval(interval);
      goToSlide(index);
      autoSlide();
    });
  });

  goToSlide(0); // Start on first real slide
  autoSlide();


  



