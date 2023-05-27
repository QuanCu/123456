const contentLetterSrart_actived = "Phương béo mở thử đi"; // Lời mở đầu cho bức thư
const mainContentLetter = "Mày béo."; // Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); // Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/349217135_1169436307215596_5713449199534506511_n.jpg?stp=dst-jpg_s206x206&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=mCBDCWBXcxYAX-0d0WI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRpYtkjbo38UxKUTwWwLb7cKNpiIRdJsfshEz05Fl5cWw&oe=64992327";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png"; // Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () {
  // Hiệu ứng gõ chữ cho phần mở đầu của bức thư
  document.querySelector(".contentLetter").innerHTML = "";
  document.querySelector(".startLetter").classList.add("active");
  setTimeout(() => {
    splitContentLetterSrart_actived.forEach((val, index) => {
      setTimeout(() => {
        document.querySelector(".contentLetter").innerHTML += val;
        if (index == contentLetterSrart_actived.length - 1) {
          setTimeout(() => {
            document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s");
          }, 1000);
        }
      }, 50 * index);
    });
  }, 1000);
});

document.querySelector("#mess").addEventListener("change", function () {
  // Hiệu ứng gõ chữ cho phần nội dung của bức thư
  if (this.checked == true) {
    document.querySelector(".content").classList.add("actived");
    const splitMainContentLetter = mainContentLetter.split("");

    splitMainContentLetter.forEach((val, index) => {
      setTimeout(() => {
        document.querySelector(".mainContent").innerHTML += val;
        if (index == mainContentLetter.length - 1) {
          document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s");
        }
      }, 50 * index);
    });
  } else {
    document.querySelector(".content").classList.remove("actived");
    document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s");
    document.querySelector(".mainContent").innerHTML = "";
  }
});

document.querySelector(".recieve").addEventListener("click", () => {
  document.querySelector(".startLetter").classList.add("close");
  setTimeout(() => {
    document.querySelector(".startForm").classList.add("close");
    setTimeout(() => {
      document.querySelector(".startForm").setAttribute("style", "bottom: 100%");

      let getTypeDevice = document.documentElement.clientWidth;
      if (getTypeDevice <= 768) {
        createTulip(20);
      } else {
        createTulip(40);
      }
    }, 500);
  }, 500);
});

// Animation Drop tulip _ Tạo hiệu ứng hoa tulip rơi
const getBackground = document.querySelector(".backgroundParty");
const width = getBackground.offsetWidth;
const height = getBackground.offsetHeight;

function createTulip(count) {
  const container = document.querySelector(".backgroundParty");
  const tulipImage = "https://tse1.mm.bing.net/th?id=OIP.8OCVUwL3EViQ8MT_p8Z96wHaLM&pid=Api&P=0&h=180"; // Replace with the actual tulip petal image URL
  const scaleRange = [0.4, 0.8];
  const rotationRange = [-30, 30];
  const durationRange = [5, 10];

  for (let i = 0; i < count; i++) {
    const randomLeft = Math.floor(Math.random() * width);
    const randomTop = Math.floor(Math.random() * height / 2);
    const scale = Math.random() * (scaleRange[1] - scaleRange[0]) + scaleRange[0];
    const rotation = Math.random() * (rotationRange[1] - rotationRange[0]) + rotationRange[0];
    const duration = Math.random() * (durationRange[1] - durationRange[0]) + durationRange[0];

    const tulip = document.createElement("div");
    tulip.classList.add("tulip");
    tulip.style.position = "absolute";
    tulip.style.left = `${randomLeft}px`;
    tulip.style.top = `${randomTop}px`;
    tulip.style.width = "50px";
    tulip.style.height = "50px";
    tulip.style.background = `url(${tulipImage}) no-repeat`;
    tulip.style.backgroundSize = "cover";
    tulip.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    tulip.style.animation = `fallTulip ${duration}s linear infinite`;

    container.appendChild(tulip);
  }
}

createTulip(20); // Call the function with the desired count of tulip petals
