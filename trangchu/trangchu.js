document.addEventListener("DOMContentLoaded", () => {
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
  const addToCartButtons = document.querySelectorAll(".nut-them-vao-gio");

  Object.keys(viewButtons).forEach((key, index) => {
    const modalId = `productModal${index + 1}`;
    viewButtons[key].addEventListener("click", () => {
      document.getElementById(modalId).style.display = "block";
      initImageSlider(modalId);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    Object.values(modals).forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("San pham da duoc them vao gio hang!");
    });
  });
});

function initImageSlider(modalId) {
  const modal = document.getElementById(modalId);
  const images = modal.querySelectorAll(".hinh-anh-trinh-chieu");
  const prevButton = modal.querySelector(".nut-truoc");
  const nextButton = modal.querySelector(".nut-sau");

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

  const showImage = (index) => {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  };

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

function initAllImageSliders() {
  for (let i = 1; i <= 6; i++) {
    initImageSlider(`productModal${i}`);
  }
}
