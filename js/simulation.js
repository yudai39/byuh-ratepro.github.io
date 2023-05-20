let cards = document.querySelectorAll('.box')
     
function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
     
    //すべてのコンテンツが表示されている場合は innerText を使用。
    //隠し要素を含む場合はtextContentを使用。is-hiddenで隠す。
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
        } else {
            cards[i].classList.add("is-hidden");
        }
    }
}

//タイムラグ！
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});






//もっと開く
function showList() {
    var ul = document.querySelector(".more ul");
    if (ul.style.display === "none") {
      ul.style.display = "block";
    } else {
      ul.style.display = "none";
    }
  }