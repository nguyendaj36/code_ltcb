document.addEventListener("DOMContentLoaded", () => {
  // Khoi tao modal windows va cac nut dieu khien
  const modals = {
    product1: document.getElementById("productModal1"),
    product2: document.getElementById("productModal2"),
    product3: document.getElementById("productModal3"),
    product4: document.getElementById("productModal4"),
    product5: document.getElementById("productModal5"),
    product6: document.getElementById("productModal6"),
  };

  const viewButtons = {
    viewProduct1: document.getElementById("viewProduct1"),
    viewProduct2: document.getElementById("viewProduct2"),
    viewProduct3: document.getElementById("viewProduct3"),
    viewProduct4: document.getElementById("viewProduct4"),
    viewProduct5: document.getElementById("viewProduct5"),
    viewProduct6: document.getElementById("viewProduct6"),
  };

  const closeButtons = document.querySelectorAll(".close-button");
  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

  // Thiet lap su kien cho cac nut "Xem them"
  Object.keys(viewButtons).forEach((key, index) => {
    const modalId = `productModal${index + 1}`;
    viewButtons[key].addEventListener("click", () => {
      document.getElementById(modalId).style.display = "block";

      // Khoi tao slider cho modal vua mo
      initImageSlider(modalId);
    });
  });

  // Thiet lap su kien cho cac nut dong modal
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".modal").style.display = "none";
    });
  });

  // Dong modal khi nhap vao ben ngoai
  window.addEventListener("click", (event) => {
    Object.values(modals).forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  // Thiet lap su kien cho cac nut "Them vao gio hang"
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("San pham da duoc them vao gio hang!");
      // Them logic cap nhat gio hang o day neu can
    });
  });

  // Khoi tao tat ca cac slider anh khi trang tai xong
  // (Dieu nay khong can thiet vi chung ta khoi tao slider khi mo modal)
  // initAllImageSliders();
});

// Ham khoi tao slider anh cho mot modal cu the
function initImageSlider(modalId) {
  const modal = document.getElementById(modalId);
  const images = modal.querySelectorAll(".slider-image");
  const prevButton = modal.querySelector(".prev-button");
  const nextButton = modal.querySelector(".next-button");

  // Dat anh dau tien la active neu chua co anh nao active
  let currentIndex = 0;
  let foundActive = false;

  images.forEach((img, index) => {
    if (img.classList.contains("active")) {
      currentIndex = index;
      foundActive = true;
    }
  });

  if (!foundActive && images.length > 0) {
    images[0].classList.add("active");
  }

  // Ham hien thi anh theo index
  const showImage = (index) => {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  };

  // Thiet lap event listeners cho cac nut dieu huong
  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  }
}

// Ham khoi tao tat ca slider anh (khong dung den vi chi khoi tao khi can)
function initAllImageSliders() {
  for (let i = 1; i <= 6; i++) {
    initImageSlider(`productModal${i}`);
  }
}
