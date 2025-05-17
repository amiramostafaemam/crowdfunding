// const openTab = function (evt, tabId) {

//     document.querySelectorAll(".tab-content").forEach((content) => {
//     if (content.id !== tabId) {
//         content.innerHTML = ""; // تفضية المحتوى
//         content.classList.remove("active");
//     }
//     });

//     //hide all tabs
//     let contents = document.querySelectorAll(".tab_content");
//     contents.forEach((el) => (el.style.display = "none"));

//     //hide selection from btns
//     let buttons = document.querySelectorAll(".tab-btn");
//     buttons.forEach((btn) => btn.classList.remove("active"));

//     //display the content of clked btn
//     document.getElementById(tabId).style.display = "block";
//     evt.currentTarget.classList.add("active");
// };

const openTab = function (evt, tabId) {
    // 1. امسحي المحتوى من كل السكاشن الغير نشطة
    document.querySelectorAll(".tab-content").forEach((content) => {
        if (content.id !== tabId) {
            content.innerHTML = ""; // تفضية المحتوى
            content.classList.remove("active");
        }
    });

    // 2. إزالة active من كل الأزرار
    document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.remove("active");
    });

    // 3. تفعيل السكشن الحالي وإضافة محتواه
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active");

    if (tabId === "description") {
        selectedTab.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos magni sapiente quaerat, alias nemo cum sunt, natus voluptas nisi nulla impedit. Maiores recusandae architecto quasi magnam minima consectetur, officiis voluptatibus!
                        Amet repellat ipsa laboriosam accusamus pariatur molestias laudantium obcaecati animi illum, ullam quis? Aliquid alias beatae, natus pariatur dignissimos quis eos unde mollitia excepturi incidunt voluptatibus fugit quibusdam dolore minima?</p>`;
        
    } else if (tabId === "video") {
        selectedTab.innerHTML = `<video id="video" controls>
                        <source src="assests/videos/charity-v1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
    } else if (tabId === "gallery") {
        selectedTab.innerHTML = `<div class="compaign__details--gallery tab-content" id="gallery" style="display: none;">
                    <figure class="gallery"><img src="assests/images/charity2.webp" alt=""></figure>
                    <figure class="gallery"><img src="assests/images/charity3.webp" alt=""></figure>
                    <figure class="gallery"><img src="assests/images/charity4.webp" alt=""></figure>
                    <figure class="gallery"><img src="assests/images/charity5.webp" alt=""></figure>
                    <figure class="gallery"><img src="assests/images/charity6.webp" alt=""></figure>
                    <figure class="gallery"><img src="assests/images/charity1.webp" alt=""></figure>
                </div>`;
    }

    // 4. تفعيل الزر الحالي
    evt.currentTarget.classList.add("active");
}
