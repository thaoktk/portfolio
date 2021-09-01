// header
const headerItem = document.querySelectorAll('.header-item')
const line = document.querySelector('.line')
const headerItemActive = document.querySelector('.header-item.active')
const headerMenu = document.querySelector('.header-menu')
const headerClose = document.querySelector('.header-close')
const headerList = document.querySelector('.header-list-wrap')
const headerModal = document.querySelector('.header-modal')
const headerItemContact = document.querySelector('.header-item.header-item--contact')

// modal
const homeViewAll = document.querySelector('.home-work__view-all')
const homeWorkModal = document.querySelector('.modal-wrap')
const homeWorkModalContainer = document.querySelector('.home-work__modal')
const homeWorkClose = document.querySelector('.home-work__close')

// image rotate
const imageText = document.querySelector('.image-wrap__text')

// tab pane
const tabPanes = document.querySelectorAll('.tab-pane')
const tabPaneContact = document.querySelector('.tab-pane.tab-pane--contact')

// progress bar 
const progress = document.querySelectorAll('.progress-bar__sub-progress')
const projectFilterItem = document.querySelectorAll('.project-filter__item')
const projectCategoryItem = document.querySelectorAll('.project-category__item-wrap')

// hire me
const hireMe = document.querySelector('.sub-section-item--contact')

function removeActive(classRemoved) {
    classRemoved.classList.remove("active")
}

function addActive(classAdded) {
    classAdded.classList.add('active')
}

function toggleMenuMobile() {
    removeActive(headerList)
    removeActive(headerModal)
}

function moveLine(item) {
    line.style.left = item.offsetLeft + 'px'
    line.style.minWidth = item.offsetWidth + 'px'
}

moveLine(headerItemActive)

// navbar click show on 
headerItem.forEach((item, index) => {
    const tabPane = tabPanes[index]
    item.onclick = function() {
        const headerItemActive = document.querySelector('.header-item.active')
        removeActive(headerItemActive)
        addActive(this)

        const tabPaneActive = document.querySelector('.tab-pane.active')
        removeActive(tabPaneActive)
        addActive(tabPane)

        toggleMenuMobile()

        moveLine(this)

        if (item.classList.contains('header-item--skill')) { // ktra xem true hay false
            progress.forEach(item => addActive(item))
        } else {
            progress.forEach(item => removeActive(item))
        }
    }

})

// menu mobile
headerMenu.onclick = function() {
    addActive(headerList)
    addActive(headerModal)
}

headerClose.addEventListener('click', toggleMenuMobile)

// modal view all
homeViewAll.onclick = function() {
    addActive(homeWorkModal)
}

homeWorkClose.onclick = function(e) {
    removeActive(homeWorkModal)
    e.stopPropagation()
}

homeWorkModal.onclick = function() {
    removeActive(homeWorkModal)
}

homeWorkModalContainer.onclick = function(e) {
    e.stopPropagation()
}

// carousel
$('.home-work__carousel').slick({
    slidesToShow: 3,
    autoplaySpeed : 2000,
    autoplay: true,
    infinite: true,
    arrows:false,
    accessibility: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})


$('.home-work__modal').slick({
    slidesToShow: 1,
    autoplaySpeed : 3000,
    autoplay: true,
    infinite: true,
    arrows:false,
    centerMode: true,
    responsive: [
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        }
    ]
})

// image rotate animate
imageText.innerHTML = imageText.innerText.split("").map(
    (char, i) => `<span style="transform: rotate(${i * 9.5}deg)">${char}</span>`
).join("")


// project filter
projectFilterItem.forEach((itemFilter) => {
    const itemFilterValue = itemFilter.getAttribute('data-filter')

    if (itemFilterValue === 'all') {
        projectCategoryItem.forEach(itemCategory => addActive(itemCategory))
    }
    
    itemFilter.onclick = function() {
        const projectFilterActive = document.querySelector('.project-filter__item.active')
        removeActive(projectFilterActive)
        addActive(this)

        projectCategoryItem.forEach(itemCategory => {
            if (itemFilterValue === 'all' || itemCategory.getAttribute('data-category') === itemFilterValue) {
                addActive(itemCategory)
            } else {
                removeActive(itemCategory)
            }
        })
    }
})

//  hire me
hireMe.onclick = function() {
    const headerItemActive = document.querySelector('.header-item.active')
    removeActive(headerItemActive)
    addActive(headerItemContact)

    moveLine(headerItemContact)

    const tabPaneActive = document.querySelector('.tab-pane.active')
    removeActive(tabPaneActive)

    setTimeout(function() {
        addActive(tabPaneContact)
    }, 100)
}
