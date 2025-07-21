// const card1 = document.querySelector(".card1");
// const card2 = document.querySelector(".card2");
// const card3 = document.querySelector(".card3");
// const card4 = document.querySelector(".card4");
const loginbutton = document.querySelector(".login-btn");
const loginform = document.querySelector(".form-container");
const back = document.querySelector(".back-icon");
const backblur = document.querySelector(".back-blur");
const schoolyoutube = document.querySelector(".Youtube");
const schoolinstagram = document.querySelector(".instagram");
const headtitle1 = document.querySelector(".li-headtitle1");
const headtitle2 = document.querySelector(".li-headtitle2");
const bodytitlecontainer = document.querySelector(".li-bodytitle-container1");
const bodytitlecontainer2 = document.querySelector(".li-bodytitle-container2");
const MenuIcon = document.getElementById("Menu-Icon");
const Menu = document.querySelector(".menu");
const MenuCloseIcon = document.querySelector(".menu-back > img");
const Department = document.getElementById("Department");
const noscroll = document.body;

Department.onclick = () => {
  location.href = "Introduce.html" ;
};

MenuIcon.addEventListener("mouseover", (event) => {
 const mouseover = event.type === "mouseover"
    console.log(mouseover)
  }
);

const toggleSearch = (Search, Icon, Container) => {
  const SearchInput = document.getElementById(Search),
    SearchIcon = document.getElementById(Icon),
    SearchContainer = document.getElementById(Container);

  let hideTimer = null;

  const showSearch = () => {
    clearTimeout(hideTimer); 
    SearchContainer.classList.add("show-search-container");
    SearchInput.disabled = false; 
  };

  const hideSearch = () => {
    hideTimer = setTimeout(() => {
      SearchContainer.classList.remove("show-search-container");
      SearchInput.disabled = true; 
    }, 200); 
  };

  const SearchContainemaintain = () => {

  }

  SearchIcon.addEventListener("mouseenter",showSearch);
  SearchIcon.addEventListener("mouseleave", hideSearch);
  
};
toggleSearch("Search-Input", "Search-Icon", "Search-Container");



MenuIcon.addEventListener("click", () => {
  if (Menu.classList.contains("menu")) {
    Menu.classList.add("show");
    setTimeout(() => {
      Menu.classList.add("show2");
    }, 400);
  } 
});


MenuCloseIcon.addEventListener("click", ()=> {
  if (Menu.classList.contains("show")) {
  Menu.classList.remove("show2");
    setTimeout(() => {
      Menu.classList.remove("show");
    }, 400);
  }
  
});


headtitle1.addEventListener("click", () => {
const bodytitlecontainerstyle = getComputedStyle(bodytitlecontainer).opacity
  if(bodytitlecontainerstyle==="0"){
bodytitlecontainer.classList.add("show");
  } else{
bodytitlecontainer.classList.remove("show");
  } 
});

headtitle2.addEventListener("click", () => {
 const bodytitlecontainerstyle2 = getComputedStyle(bodytitlecontainer2).opacity
  if(bodytitlecontainerstyle2 ==="0"){
bodytitlecontainer2.classList.add("show");
  } else {
bodytitlecontainer2.classList.remove("show");
  }
});



loginbutton.addEventListener("click", function () {
  if (loginform.style.opacity === 0 || loginform.style.opacity === "") {
    loginform.classList.add("show");
    loginform.style.zIndex = "101";
    backblur.style.display = "block";
    noscroll.style.overflowY = "hidden";
  }
});

back.addEventListener("click", function () {
  if (loginform.style.opacity === 1 || loginform.style.opacity === "") {
    loginform.classList.remove("show");
    backblur.style.display = "none";
    noscroll.style.overflowY = "overlay";
    setTimeout(() => {
      loginform.style.zIndex = "-100";
    }, 400);
  }
});

// // 애니메이션 효과 줄 요소들을 감시
// const scrollObserver = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show"); // show 클래스 추가로 애니메이션 시작
//         observer.unobserve(entry.target); // 한 번만 실행하고 감시 해제
//       }
//     });
//   },
//   {
//     threshold: 0.05, // 요소의 10%가 보일 때 실행
//   }
// );

// // .scroll-fade 클래스를 가진 요소들 찾아서 감시 시작
// document.querySelectorAll(".scroll-fade").forEach((el) => {
//   scrollObserver.observe(el);
// });

// schoolyoutube.onclick = function () {
//   window.location.href =
//     "https://www.youtube.com/channel/UCyn9QnG-vGuzM1JahN_LpSA"; // 원하는 링크 주소로 변경
// };

// schoolinstagram.onclick = function () {
//   window.location.href = "https://www.instagram.com/sc_milaego/"; // 원하는 링크 주소로 변경
// };
