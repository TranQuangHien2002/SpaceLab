var isMoved = false;

function moveTitleUp() {
    var title = document.getElementById("title");
    var button = document.querySelector(".btn-explore");

    if (!isMoved) {
        title.classList.add("move-up");
        button.classList.add("btn-move-up");
        isMoved = true;
    } else {
        title.classList.remove("move-up");
        button.classList.remove("btn-move-up");

        // Wait for the transition to complete before resetting the isMoved flag and applying move-down animation
        setTimeout(function() {
            title.classList.add("move-down");
            button.classList.add("btn-move-down");

            setTimeout(function() {
                title.classList.remove("move-down");
                button.classList.remove("btn-move-down");
                isMoved = false;
            }, 500);
        }, 500);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var btnExplore = document.getElementById("btn-explore");
    var space = document.querySelector(".space");

    space.style.display = "none"; // Ẩn class "space" khi trang được tải lên

    btnExplore.addEventListener("click", function() {
        if (space.style.display === "none") {
            space.style.display = "block"; // Hiển thị class "space" khi nhấn nút "btn-explore"
        } else {
            space.style.display = "none"; // Ẩn class "space" khi nhấn lại nút "btn-explore"
        }
    });
});
// var bld = document.querySelector(".bld");
// var b = document.querySelector(".b");
// var outline = document.querySelector(".outline-7");

// bld.style.animation = "rotateAroundOutline 5s infinite linear";
// b.style.animation = "rotateAroundOutline 5s infinite linear";
// bld.style.transformOrigin = "center";
// b.style.transformOrigin = "center";

var titleElement = document.getElementById('title');

function toggleTitleAnimation() {
    if (titleElement.style.transform === 'translateY(-50px)') {
        titleElement.style.transform = 'translateY(0)';
    } else {
        titleElement.style.transform = 'translateY(-50px)';
    }
}