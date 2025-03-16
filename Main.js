const courseTags = Object.keys(courseData);
const coursesTab = document.querySelector(".courses-Tab");

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

// Generating course card -
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
        `

    newCourse.addEventListener("mouseenter", (event) => {
        // Adding Hover eventListener to show preview -
        const courseCardPopup = newCourse.querySelector(".course-Card-Popup");

        if(courseCardPopup){
            const rect = newCourse.getBoundingClientRect(); 
            const viewportWidth = window.innerWidth;
            const popupWidth = courseCardPopup.offsetWidth || 200;

            // courseCardPopup.style.display = "block";
            // courseCardPopup.style.visibility = "hidden"; 

            let leftPosition;

            if(rect.right + popupWidth + 10 > viewportWidth){
                leftPosition = rect.left + window.scrollX - popupWidth - 240;
            }
            else {
                leftPosition = rect.left + window.scrollX + rect.width - 80;
            }
            
            courseCardPopup.style.left = `${leftPosition}px`;
            courseCardPopup.style.display = "block";
            courseCardPopup.style.visibility = "visible";
        }      
    });

    newCourse.addEventListener("mouseleave", (event) => {
        const courseCardPopup = newCourse.querySelector(".course-Card-Popup");
        if(courseCardPopup){
            courseCardPopup.style.display = "none";
        }
    });
    
    // const courseCardPopup = newCourse.querySelector(".course-Card-Popup") || 0;
    // courseCardPopup.addEventListener("mouseleave", (event) => {
    //     if(courseCardPopup){
    //         courseCardPopup.style.display = "none";
    //     }
    // });
    
    // Adding to Parent -
    parent.appendChild(newCourse);
}

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
