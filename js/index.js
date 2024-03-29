async function getAllProduct() {
  try {
    let promise = await axios.get("https://shop.cyberlearn.vn/api/Product");
    renderProduct(promise.data.content);
  } catch (error) {
    console.log(error);
  }
}

function renderProduct(arr) {
  let content = "";
  for (let product of arr) {
    content += `
        <div class="col-md-4 col-lg-3 col-sm-6 col-6 my-3">
          <a href="./detail.html?idGiay=${product.id}"  >
            <div class="product-common  mt-2 border border-white rounded-4  p-1"; style="background-image: linear-gradient(to right bottom, #e3bde7, #c1c5fe, #8bd0ff, #49d9fc, #2ededb, #42e1ce, #59e3c0, #6fe4b1, #68eac1, #63f0d1, #60f6e1, #5ffbf1)";>
              <img src="${product.image}" class="w-100 imgproduct" />
              <div class="  px-2">
                  <p style="font-size: 14px; overflow: hidden; color:#747576">${product.shortDescription}</p>
                  <i class="far fa-star tick"></i>
                  <i class="far fa-star tick"></i>
                  <i class="far fa-star tick"></i>
                  <i class="far fa-star tick"></i>
                  <i class="far fa-star tick"></i>
              </div>
              <hr  />
              <div class="product-name text-center">
                <h4>${product.name}</h4>
              </div>
              <div class="price-box text-center ">
                <span class="new-price">${product.price}$</span>
              </div>
            </div>
          </a>
        </div>`;
  }
  document.querySelector(".render_product").innerHTML = content;
}
getAllProduct();

async function hienThiChiTietGiay() {
  let url = new URLSearchParams(window.location.search);
  let id = url.get("idGiay");
  console.log(id);
  try {
    let response = await axios.get(
      `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
    );
    renderChiTietGiay(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
hienThiChiTietGiay();

function renderChiTietGiay(product) {
  let render = `

    <div class="item_content_left col-md-6 position-relative">
      <img src="${product.content.image}" alt="${product.content.image}" />
      <button class="position-absolute" style="top: 3%; right: 3%;">
        <i class="fa-regular fa-heart"></i>
      </button>
    </div>
  <div class="item_content_right col-md-6">
    <h1>${product.content.name}</h1>
    <span class="item_price">${product.content.price}$</span>
    <div class="item_content_right_size "></div>
    <div class="item_content_right_value">
      <button class="up" onclick="updateSoLuong(-1)">-</button>
      <button class="num">1</button>
      <button class="down" onclick="updateSoLuong(1)">+</button>
    </div>
    <div class="item_content_right_button">
      <div class="hang1">
        <button class="btn1">
          <a href="#">ĐẶT MUA ONLINE</a>
        </button>
        <button class="btn2">
          <a href="#">TƯ VẤN: <b>0966158666</b></a>
        </button>
      </div>
      <button class="hang2">
        <a href="./index.html">TÌM SẢN PHẨM KHÁC TẠI HỆ THỐNG CỬA HÀNG</a>
      </button>
    </div>
      <div class=" descripiton-mg">
        <div class="head-title-desc">Mô tả sản phẩm</div>
        <div class="product-description">
          <p>
            ${product.content.description}
          </p>
          <h2>Sản phẩm bao gồm</h2>
          <ul>
            <li>Hộp giày giấy bìa cứng cáp giúp bảo quản giày tốt hơn.</li>
            <li>
              ${product.content.name}
            </li>
            <li>Túi chống ẩm.</li>
          </ul>
          <p>
          ${product.content.description}
          </p>
        </div>
      </div>
  </div>
`;
  document.querySelector(".item-content-buy").innerHTML = render;
  let content = "";
  for (let i = 0; i < product.content.size.length; i++) {
    content += `<button onclick="chonSize(this)">${product.content.size[i]}</button>`;
    console.log(content);
  }
  document.querySelector(".item_content_right_size").innerHTML = content;
}

let soLuong = 1;
function updateSoLuong(number) {
  soLuong += number;
  if (soLuong < 1) {
    soLuong = 1;
  }
  document.querySelector(".num").textContent = soLuong;
}

function chonSize(click) {
  let button = document.querySelectorAll(".item_content_right_size button");
  button.forEach(function (btn) {
    btn.classList.remove("chonSize");
  });
  click.classList.add("chonSize");
}
