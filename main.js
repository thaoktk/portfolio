const headerItem = document.querySelectorAll('.header-item')
const line = document.querySelector('.line')
const headerItemActive = document.querySelector('.header-item.active')
const headerMenu = document.querySelector('.header-menu')
const headerClose = document.querySelector('.header-close')
const headerList = document.querySelector('.header-list-wrap')
const headerModal = document.querySelector('.header-modal')
const homeViewAll = document.querySelector('.home-work__view-all')
const homeWorkModal = document.querySelector('.modal-wrap')
const homeWorkModalContainer = document.querySelector('.home-work__modal')
const homeWorkClose = document.querySelector('.home-work__close')
const imageText = document.querySelector('.image-wrap__text')
const tabPanes = document.querySelectorAll('.tab-pane')
const progress = document.querySelectorAll('.progress-bar__sub-progress')
const projectFilterItem = document.querySelectorAll('.project-filter__item')
const projectCategoryItem = document.querySelectorAll('.project-category__item-wrap')
const hireMe = document.querySelector('.sub-section-item--hire')

line.style.left = headerItemActive.offsetLeft + 'px'
line.style.width = headerItemActive.offsetWidth + 'px'

// navbar click show on 
headerItem.forEach((item, index) => {
    const tabPane = tabPanes[index]
    item.onclick = function() {
        document.querySelector('.header-item.active').classList.remove('active')
        this.classList.add('active')

        document.querySelector('.tab-pane.active').classList.remove('active')
        tabPane.classList.add('active')

        headerList.classList.remove('active')
        headerModal.classList.remove('active')

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        if (item.classList.contains('header-item--skill')) { // ktra xem true hay false
            progress.forEach(item => {
                item.classList.add('active')
            })
        } else {
            progress.forEach(item => {
                item.classList.remove('active')
            })
        }
    }

})

// menu mobile
headerMenu.onclick = function() {
    headerList.classList.add('active')
    headerModal.classList.add('active')
}

headerClose.onclick = function() {
    headerList.classList.remove('active')
    headerModal.classList.remove('active')
}

// modal view all
homeViewAll.onclick = function() {
    homeWorkModal.classList.add('active')
}

homeWorkClose.onclick = function(e) {
    homeWorkModal.classList.remove('active')
    e.stopPropagation()
}

homeWorkModal.onclick = function() {
    homeWorkModal.classList.remove('active')
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
        projectCategoryItem.forEach(itemCategory => {
            itemCategory.classList.add('active')
        })
    }
    
    itemFilter.onclick = function() {
        document.querySelector('.project-filter__item.active').classList.remove("active");
        this.classList.add("active");

        projectCategoryItem.forEach(itemCategory => {
            if (itemFilterValue === 'all' || itemCategory.getAttribute('data-category') === itemFilterValue) {
                itemCategory.classList.add('active')
            } else {
                itemCategory.classList.remove('active')
            }
        })
    }
})