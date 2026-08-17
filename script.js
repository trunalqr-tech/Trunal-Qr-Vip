/* =====================================================
   OUR LITTLE STORY
   SCRIPT.JS
===================================================== */


/* ==========================================
   NGÀY BẮT ĐẦU
   ✏️ CHỈ CẦN ĐỔI NGÀY Ở ĐÂY
========================================== */

const startDate = new Date("2024-07-16T00:00:00");


/* ==========================================
   BỘ ĐẾM THỜI GIAN
========================================== */

function updateCounter() {

    const now = new Date();

    const difference = Math.max(
        0,
        now - startDate
    );

    const totalSeconds =
        Math.floor(difference / 1000);


    const days =
        Math.floor(totalSeconds / 86400);


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById("days")
        .textContent = days;


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");
}


updateCounter();

setInterval(
    updateCounter,
    1000
);


/* ==========================================
   CUỘN TRANG
========================================== */

function goToSection(id) {

    const section =
        document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });
}


/* ==========================================
   TRÁI TIM KHI CLICK
========================================== */

document.addEventListener(
    "click",
    function (event) {

        const heart =
            document.createElement("span");


        heart.className =
            "click-heart";


        heart.innerHTML = "♥";


        heart.style.left =
            event.clientX + "px";


        heart.style.top =
            event.clientY + "px";


        heart.style.setProperty(
            "--move-x",
            `${Math.random() * 100 - 50}px`
        );


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => heart.remove(),
            1000
        );

    }
);


/* ==========================================
   DANH SÁCH NHẠC
==========================================

   🎵 MUỐN ĐỔI NHẠC:

   song1.mp3
   song2.mp3
   song3.mp3
   song4.mp3
   song5.mp3

   chỉ cần thay file trong thư mục audio.

========================================== */

const songs = [

    {
        name: "Self Aware",
        artist: "Temple City",
        image: "images/music1.jpg",
        file: "audio/song1.mp3"
    },


    {
        name: "This is what falling in love feels like",
        artist: "JVKE",
        image: "images/music2.jpg",
        file: "audio/song2.mp3"
    },


    {
        name: "Ordinary",
        artist: "Alex Warren",
        image: "images/music3.jpg",
        file: "audio/song3.mp3"
    },


    {
        name: "Thằng điên",
        artist: "JustaTee và Phương Ly",
        image: "images/music4.jpg",
        file: "audio/song4.mp3"
    },


    {
        name: "From the Start",
        artist: "Laufey",
        image: "images/music5.jpg",
        file: "audio/song5.mp3"
    }

];


/* ==========================================
   BIẾN NHẠC
========================================== */

let currentSong = 0;


const audio =
    document.getElementById(
        "audioPlayer"
    );


const songTitle =
    document.getElementById(
        "songTitle"
    );


const artistName =
    document.getElementById(
        "artistName"
    );


const songImage =
    document.getElementById(
        "currentSongImage"
    );


const playButton =
    document.getElementById(
        "playButton"
    );


const vinyl =
    document.querySelector(
        ".vinyl"
    );


/* ==========================================
   LOAD BÀI HÁT
========================================== */

function loadSong(index) {

    currentSong = index;


    audio.src =
        songs[index].file;


    songTitle.textContent =
        songs[index].name;


    artistName.textContent =
        songs[index].artist;


    songImage.src =
        songs[index].image;


    document
        .querySelectorAll(".song-item")
        .forEach(
            item => item.classList.remove("active")
        );


    const items =
        document.querySelectorAll(
            ".song-item"
        );


    if (items[index]) {

        items[index]
            .classList.add("active");

    }

}


/* ==========================================
   PHÁT BÀI
========================================== */

function playSong(index) {

    loadSong(index);

    audio.play();

    playButton.textContent = "❚❚";

    vinyl.classList.add(
        "playing"
    );
}


/* ==========================================
   PLAY / PAUSE
========================================== */

function toggleMusic() {

    if (!audio.src) {

        loadSong(0);

    }


    if (audio.paused) {

        audio.play();

        playButton.textContent =
            "❚❚";

        vinyl.classList.add(
            "playing"
        );

    } else {

        audio.pause();

        playButton.textContent =
            "▶";

        vinyl.classList.remove(
            "playing"
        );

    }

}


/* ==========================================
   BÀI TRƯỚC
========================================== */

function previousSong() {

    currentSong--;

    if (currentSong < 0) {

        currentSong =
            songs.length - 1;

    }

    playSong(currentSong);

}


/* ==========================================
   BÀI TIẾP
========================================== */

function nextSong() {

    currentSong++;

    if (
        currentSong >=
        songs.length
    ) {

        currentSong = 0;

    }

    playSong(currentSong);

}


/* ==========================================
   KHI BÀI HÁT KẾT THÚC
========================================== */

audio.addEventListener(
    "ended",
    function () {

        nextSong();

    }
);

/* ==========================================
   ALBUM TƯƠNG TÁC
========================================== */


/*
    📸 MUỐN THÊM ẢNH:

    Chỉ cần copy thêm một object.

    Ví dụ:

    {
        image: "images/couple11.jpg",
        title: "Một ngày đặc biệt",
        description: "Ngày mà chúng mình..."
    },

    Không cần sửa HTML.
*/


const albumImages = [

    {
        image: "images/couple1.jpg",
        title: "Khoảnh khắc đầu tiên",
        description:
            "Một khoảnh khắc nhỏ mà chúng mình muốn giữ lại."
    },


    {
        image: "images/couple2.jpg",
        title: "Một ngày bình thường",
        description:
            "Những ngày bình thường đôi khi lại là những ngày đáng nhớ nhất."
    },


    {
        image: "images/couple3.jpg",
        title: "Cùng nhau",
        description:
            "Chỉ cần ở cạnh nhau thì nơi nào cũng trở nên đặc biệt."
    },


    {
        image: "images/couple4.jpg",
        title: "Một chút thanh xuân",
        description:
            "Một bức ảnh nhỏ của những ngày tháng tuổi trẻ."
    },


    {
        image: "images/couple5.jpg",
        title: "Ngày hôm ấy",
        description:
            "Có những khoảnh khắc chỉ cần nhìn lại là nhớ."
    },


    {
        image: "images/couple6.jpg",
        title: "Nụ cười",
        description:
            "Một trong những điều anh/em muốn nhớ thật lâu."
    },


    {
        image: "images/couple7.jpg",
        title: "Chúng mình",
        description:
            "Không cần điều gì quá lớn lao."
    },


    {
        image: "images/couple8.jpg",
        title: "Một chút bình yên",
        description:
            "Một góc nhỏ bình yên giữa những ngày bận rộn."
    },


    {
        image: "images/couple9.jpg",
        title: "Thêm một kỷ niệm",
        description:
            "Lại thêm một ngày được cất vào album."
    },


    {
        image: "images/couple10.jpg",
        title: "Hiện tại",
        description:
            "Và câu chuyện của chúng mình vẫn đang tiếp tục."
    }

];


let currentAlbum =
    0;


/* ==========================================
   CÁC ELEMENT
========================================== */

const albumMainImage =
    document.getElementById(
        "albumMainImage"
    );


const albumNumber =
    document.getElementById(
        "albumNumber"
    );


const albumTitle =
    document.getElementById(
        "albumTitle"
    );


const albumDescription =
    document.getElementById(
        "albumDescription"
    );


const albumDots =
    document.getElementById(
        "albumDots"
    );


const albumThumbnails =
    document.getElementById(
        "albumThumbnails"
    );


/* ==========================================
   TẠO DOT + THUMBNAIL
========================================== */

function createAlbumNavigation() {

    albumDots.innerHTML = "";

    albumThumbnails.innerHTML = "";


    albumImages.forEach(
        (item, index) => {


            /* DOT */

            const dot =
                document.createElement(
                    "button"
                );


            dot.className =
                "album-dot";


            dot.onclick = () =>
                showAlbum(index);


            albumDots.appendChild(
                dot
            );


            /* THUMBNAIL */

            const thumb =
                document.createElement(
                    "button"
                );


            thumb.className =
                "album-thumb";


            thumb.onclick = () =>
                showAlbum(index);


            const img =
                document.createElement(
                    "img"
                );


            img.src =
                item.image;


            img.alt =
                item.title;


            thumb.appendChild(img);


            albumThumbnails
                .appendChild(thumb);

        }
    );

}


/* ==========================================
   HIỂN THỊ ẢNH
========================================== */

function showAlbum(index) {

    if (
        index < 0 ||
        index >= albumImages.length
    ) {

        return;

    }


    currentAlbum =
        index;


    const item =
        albumImages[index];


    albumMainImage.src =
        item.image;


    albumTitle.textContent =
        item.title;


    albumDescription.textContent =
        item.description;


    albumNumber.textContent =
        `${String(index + 1).padStart(2, "0")} / ${String(albumImages.length).padStart(2, "0")}`;


    /* ACTIVE DOT */

    document
        .querySelectorAll(
            ".album-dot"
        )
        .forEach(
            (dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === index
                );

            }
        );


    /* ACTIVE THUMB */

    document
        .querySelectorAll(
            ".album-thumb"
        )
        .forEach(
            (thumb, i) => {

                thumb.classList.toggle(
                    "active",
                    i === index
                );

            }
        );

}


/* ==========================================
   ẢNH TIẾP
========================================== */

function nextAlbum() {

    currentAlbum++;

    if (
        currentAlbum >=
        albumImages.length
    ) {

        currentAlbum = 0;

    }


    showAlbum(
        currentAlbum
    );

}


/* ==========================================
   ẢNH TRƯỚC
========================================== */

function previousAlbum() {

    currentAlbum--;

    if (
        currentAlbum < 0
    ) {

        currentAlbum =
            albumImages.length - 1;

    }


    showAlbum(
        currentAlbum
    );

}


/* ==========================================
   MỞ ẢNH LỚN
========================================== */

function openAlbumPhoto() {

    const modal =
        document.getElementById(
            "albumModal"
        );


    const modalImage =
        document.getElementById(
            "albumModalImage"
        );


    modalImage.src =
        albumImages[
            currentAlbum
        ].image;


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


/* ==========================================
   ĐÓNG ẢNH
========================================== */

function closeAlbumPhoto() {

    const modal =
        document.getElementById(
            "albumModal"
        );


    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


/* ==========================================
   PHÍM BÀN PHÍM
========================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            document
                .getElementById(
                    "albumModal"
                )
                .classList.contains(
                    "show"
                )
        ) {

            if (
                event.key === "Escape"
            ) {

                closeAlbumPhoto();

            }

            return;

        }


        if (
            event.key === "ArrowRight"
        ) {

            nextAlbum();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousAlbum();

        }

    }
);


/* ==========================================
   SWIPE TRÊN ĐIỆN THOẠI
========================================== */

let touchStartX = 0;


albumMainImage.addEventListener(
    "touchstart",
    function (event) {

        touchStartX =
            event.touches[0].clientX;

    }
);


albumMainImage.addEventListener(
    "touchend",
    function (event) {

        const touchEndX =
            event.changedTouches[0].clientX;


        const distance =
            touchEndX - touchStartX;


        if (
            Math.abs(distance) < 50
        ) {

            return;

        }


        if (distance < 0) {

            nextAlbum();

        } else {

            previousAlbum();

        }

    }
);


/* ==========================================
   KHỞI TẠO ALBUM
========================================== */

createAlbumNavigation();

showAlbum(0);
/* ==========================================
   HAI LÁ THƯ

   ✏️ MUỐN ĐỔI NỘI DUNG THƯ
   → sửa ngay trong phần này.
========================================== */

const letters = {

    boy: {

        title:
            "Tony",

        image:
            "images/boy.jpg",

        text:
            "mao moaooo meoooo."

    },


    girl: {

        title:
            "Kelly",

        image:
            "images/girl.jpg",

        text:
            "meoo meoooo maooo meooo."

    }

};


/* ==========================================
   MỞ THƯ
========================================== */

function openLetter(type) {

    const modal =
        document.getElementById(
            "letterModal"
        );


    const title =
        document.getElementById(
            "letterTitle"
        );


    const text =
        document.getElementById(
            "letterText"
        );


    const image =
        document.getElementById(
            "letterImage"
        );


    title.textContent =
        letters[type].title;


    text.textContent =
        letters[type].text;


    image.src =
        letters[type].image;


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


/* ==========================================
   ĐÓNG THƯ
========================================== */

function closeLetter() {

    document
        .getElementById(
            "letterModal"
        )
        .classList.remove(
            "show"
        );


    document.body.style.overflow =
        "";

}


/* ==========================================
   CLICK RA NGOÀI ĐỂ ĐÓNG
========================================== */

document
    .getElementById(
        "letterModal"
    )
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {

                closeLetter();

            }

        }
    );


/* ==========================================
   NHẤN ESC ĐỂ ĐÓNG THƯ
========================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeLetter();

        }

    }
);


/* ==========================================
   KHỞI TẠO BÀI ĐẦU TIÊN
========================================== */

loadSong(0);
/* ==========================================
   THANH TIẾN TRÌNH + ÂM LƯỢNG
========================================== */

const progressBar =
    document.getElementById(
        "progressBar"
    );


const currentTime =
    document.getElementById(
        "currentTime"
    );


const duration =
    document.getElementById(
        "duration"
    );


const volumeBar =
    document.getElementById(
        "volumeBar"
    );


/* ĐỊNH DẠNG THỜI GIAN */

function formatTime(seconds) {

    if (
        isNaN(seconds) ||
        !isFinite(seconds)
    ) {

        return "00:00";

    }


    const minutes =
        Math.floor(seconds / 60);


    const secs =
        Math.floor(seconds % 60);


    return (
        String(minutes).padStart(2, "0")
        + ":" +
        String(secs).padStart(2, "0")
    );

}


/* CẬP NHẬT THỜI GIAN */

audio.addEventListener(
    "loadedmetadata",
    function () {

        progressBar.max =
            audio.duration;

        duration.textContent =
            formatTime(
                audio.duration
            );

    }
);


/* THANH CHẠY THEO NHẠC */

audio.addEventListener(
    "timeupdate",
    function () {

        progressBar.value =
            audio.currentTime;

        currentTime.textContent =
            formatTime(
                audio.currentTime
            );

    }
);


/* KÉO THANH ĐỂ TUA */

progressBar.addEventListener(
    "input",
    function () {

        audio.currentTime =
            progressBar.value;

    }
);


/* ÂM LƯỢNG */

volumeBar.addEventListener(
    "input",
    function () {

        audio.volume =
            volumeBar.value;

    }
);
/* =========================================================
   ✨ SCROLL REVEAL
   Hiệu ứng xuất hiện khi cuộn tới
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".album-book, " +
        ".memory-card, " +
        ".music-player, " +
        ".letter-card, " +
        ".hero-image, " +
        ".hero-content"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal-item");
    });


    const imageElements = document.querySelectorAll(
        ".album-main-photo img, " +
        ".memory-image img, " +
        ".letter-photo img"
    );

    imageElements.forEach(function (element) {
        element.classList.add("reveal-image");
    });


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -60px 0px"
        }
    );


    revealElements.forEach(function (element) {
        observer.observe(element);
    });


    imageElements.forEach(function (element) {
        observer.observe(element);
    });

});


/* =========================================================
   ✨ HEADER KHI CUỘN
   ========================================================= */

window.addEventListener(
    "scroll",
    function () {

        const header =
            document.querySelector(".header");

        if (!header) return;


        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    },
    { passive: true }
);
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".section, .memory-card, .album-book, .music-player, .letter-card"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-on-scroll");
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach((element) => {
        element.classList.add("hide-on-scroll");
        observer.observe(element);
    });
});
