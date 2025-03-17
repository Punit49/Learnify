const courseTags = Object.keys(courseData);
const coursesTab = document.querySelector(".courses-Tab");
const imagePath = "Premium.png";

// For Creating course category tab
const createTag = (title) => {
    const newTag = document.createElement("div");
    newTag.classList.add("course-tag", "course-tag-hover");

    newTag.innerHTML = `
        <h4>${title}</h4>
    `
    coursesTab.appendChild(newTag);
}

// Creating course tag Acc. to data in courseData.js
courseTags.forEach(category => {
    createTag(category);
});

// ? Creating Course card acc. to category
const courseCategory = document.querySelectorAll(".course-tag"); 
const courseWrapper = document.querySelector(".course-Wrapper");
const courseCardPopup = document.querySelector(".course-Card-Popup") || 0;

courseCategory.forEach(category => {
    category.addEventListener("click", (event) => {
        
        // Adding tabActive class -
        if(category.classList.contains("tabActive")){
            return;
        }
        else {
            courseCategory.forEach(cat => {
                if(cat.classList.contains("tabActive")){
                    cat.classList.remove("tabActive");
                }
            });
            category.classList.add("tabActive");
            category.classList.remove("course-tag-hover");
        }

        courseWrapper.innerHTML = "";

        courseData[category.innerText].forEach(ele => {
            generateCourseCard(ele, courseWrapper);
        })
    })
});

// Generating course card and popup-
const generateCourseCard = (course, parent) => {
    const newCourse = document.createElement("div");
    newCourse.classList.add("courses");
    newCourse.id = course.id;

    newCourse.innerHTML = `
            <img src=${course.img} class="courseImages" alt=${course.title}>
            <div class="course-Content">
                <h4 class="course-title">${course.title}</h4>
                <p class="course-Instructor">${course.instructor}</p>
                <p>${course.Rating}</p>
                <p>${course.price}</p>
                <p>${course.tag}</p>
            </div>   

            <div class="course-Card-Popup">
                           
            </div>
        `;

    newCourse.addEventListener("mouseenter", (event) => {
        // Adding Hover eventListener to show preview -
        const courseCardPopup = newCourse.querySelector(".course-Card-Popup") || 0;

        if(courseCardPopup){
            // Adding Details in popup -
            courseCardPopup.innerHTML = `
                <div class="insideCoursePopup">
                    <h5 class="course-Pop-Heading">
                        ${course.title}
                    </h5>
                    <div class="course-Pop-Subhead">
                        <div class="preBadge"> 
                            <img src="Premium.png" alt="Premium">
                            <span>Premium</span>
                        </div>
                    </div>
                    <div class="course-Pop-body">
                        <div class="popDescription">
                            ${course.description}
                        </div>
                        <div class="WYLHead">
                            What You'll Learn
                        </div>
                        <div class="popWYL">
                            <ul>
                                <li>${course.what_you_will_learn[0]}</li>
                                <li>${course.what_you_will_learn[1]}</li>
                                <li>${course.what_you_will_learn[2]}</li>   
                            </ul>
                        </div>
                    </div>
                    <button class="addPopupCart">
                        Add to cart
                    </button>
                </div>
            `;

            // Showing and deciding place for popup -
            const rect = newCourse.getBoundingClientRect(); 
            const viewportWidth = window.innerWidth;
            const popupWidth = courseCardPopup.offsetWidth || 200;

            let leftPosition;
            let coursePadding;

            if(rect.right + popupWidth + 10 > viewportWidth){
                coursePadding = "paddingRight";
                leftPosition = rect.left + window.scrollX - popupWidth - 95;
            }
            else {
                coursePadding = "paddingLeft";
                leftPosition = rect.left + window.scrollX + rect.width - 100;
            }
            
            courseCardPopup.style[coursePadding] = "1rem";
            courseCardPopup.style.left = `${leftPosition}px`;
            courseCardPopup.style.opacity = "1";
            courseCardPopup.style.visibility = "visible";
            courseCardPopup.style.transform = "translateY(0)";
        }      
    });

    newCourse.addEventListener("mouseleave", (event) => {
        const courseCardPopup = newCourse.querySelector(".course-Card-Popup") || 0;
        if(courseCardPopup){
            setTimeout(() => {
                courseCardPopup.style.opacity = "0";
                courseCardPopup.style.visibility = "hidden";
                courseCardPopup.style.transform = "translateY(10px)";
            }, 100)
        }
    }); 
    
    const courseCardPopup = newCourse.querySelector(".course-Card-Popup") || 0;
    courseCardPopup.addEventListener("mouseleave", (event) => {
        if(courseCardPopup){
            setTimeout(() => {
                courseCardPopup.style.opacity = "0";
                courseCardPopup.style.visibility = "hidden";
                courseCardPopup.style.transform = "translateY(10px)";
            }, 100)
        }
    });

    // Adding to Parent -
    parent.appendChild(newCourse);
}

// Restricting mouse scroll -
courseWrapper.addEventListener("wheel", (event) => event.preventDefault(), { passive: false });
courseWrapper.addEventListener("touchmove", (event) => event.preventDefault(), { passive: false });

// Scroll Button functionality -
const courseCardLeftBtn = document.querySelector("#course-tab-right");
const courseCardRightBtn = document.querySelector("#course-tab-left");
const courseTagLeftBtn = document.querySelector("#courseCatLeft");
const courseTagRightBtn = document.querySelector("#courseCatRight");


// For course cards -
courseCardRightBtn.addEventListener("click", () => {
    courseWrapper.scrollLeft += 330;
});

courseCardLeftBtn.addEventListener("click", () => {
    courseWrapper.scrollLeft -= 330;
});

// For course tags -
courseTagRightBtn.addEventListener("click", () => {
    coursesTab.scrollLeft -= 270;
});

courseTagLeftBtn.addEventListener("click", () => {
    coursesTab.scrollLeft += 270;
});

// Window Load Event -
window.addEventListener("load", () => {
    const Firstcourse = courseData["Web-Development"];
    Firstcourse.forEach(course => {
        generateCourseCard(course, courseWrapper);
    })

    // Adding Tabactive class to first tab on window loads -
    courseCategory[0].classList.add("tabActive");
    courseCategory[0].classList.remove("course-tag-hover");
});

