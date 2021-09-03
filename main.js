
/** ===================================== FUNCTION GLOBAL ====================================================== */
function removeActive(classRemoved) {
    classRemoved.classList.remove("active")
}

function addActive(classAdded) {
    classAdded.classList.add("active")
}

function hideMenuMobile() {
    const headerList = document.querySelector('.header-list-wrap'), 
    headerModal = document.querySelector('.header-modal')

    removeActive(headerList)
    removeActive(headerModal)
}


/** ===================================== NAVBAR CLICK SHOW ON ====================================================== */
;(() => {
    const headerItem = document.querySelectorAll('.header-item'),
    tabPanes = document.querySelectorAll('.tab-pane')
    
    headerItem.forEach((itemHeader, index) => {
        const tabPane = tabPanes[index]
        itemHeader.onclick = () => {
            const headerItemActive = document.querySelector('.header-item.active'),
            tabPaneActive = document.querySelector('.tab-pane.active')
    
            removeActive(headerItemActive)
            addActive(itemHeader)
            removeActive(tabPaneActive)
            addActive(tabPane)
            hideMenuMobile()
    
            // run progress bar
            const progress = document.querySelectorAll('.progress-bar__sub-progress')
            if (itemHeader.classList.contains('header-item--skill')) { // ktra xem true hay false
                progress.forEach(itemProgress => addActive(itemProgress))
            } else {
                progress.forEach(itemProgress => removeActive(itemProgress))
            }
        }
    })
})()


/** ===================================== MENU MOBILE ====================================================== */
;(() => {
    const headerMenu = document.querySelector('.header-menu'),
    headerClose = document.querySelector('.header-close'),
    headerList = document.querySelector('.header-list-wrap'), 
    headerModal = document.querySelector('.header-modal')

    headerMenu.onclick = () => {
        addActive(headerList)
        addActive(headerModal)
    }
    headerClose.addEventListener('click', hideMenuMobile)
})()


/** ===================================== MODAL VIEW ALL ====================================================== */
;(() => {
    const homeViewAll = document.querySelector('.home-work__view-all'),
    homeWorkClose = document.querySelector('.home-work__close'),
    homeWorkModal = document.querySelector('.modal-wrap'),
    homeWorkModalContainer = document.querySelector('.home-work__modal')

    homeViewAll.onclick = () => {
        addActive(homeWorkModal)
    }
    
    homeWorkClose.onclick = (e) => {
        removeActive(homeWorkModal)
        e.stopPropagation()
    }
    
    homeWorkModal.onclick = () => {
        removeActive(homeWorkModal)
    }
    
    homeWorkModalContainer.onclick = (e) => {
        e.stopPropagation()
    }
})()


/** ===================================== CAROUSEL VIEW ALL AND MODAL ====================================================== */
;(() => {
    // carousel view all
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

    // carousel modal
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
})()


/** ===================================== IMAGE ROTATE ANIMATE ====================================================== */
;(() => {
    const imageText = document.querySelector('.image-wrap__text')

    imageText.innerHTML = imageText.innerText.split("").map(
        (char, i) => `<span style="transform: rotate(${i * 9.5}deg)">${char}</span>`
    ).join("")
})()


/** ===================================== PROJECT FILTER ====================================================== */
;(() => {
    const projectFilterItem = document.querySelectorAll('.project-filter__item'),
    projectCategoryItem = document.querySelectorAll('.project-category__item-wrap')

    projectFilterItem.forEach((itemFilter) => {
        const itemFilterValue = itemFilter.getAttribute('data-filter')
    
        if (itemFilterValue === 'all') {
            projectCategoryItem.forEach(itemCategory => addActive(itemCategory))
        }
        
        itemFilter.onclick = () => {
            const projectFilterActive = document.querySelector('.project-filter__item.active')
            
            removeActive(projectFilterActive)
            addActive(itemFilter)
    
            projectCategoryItem.forEach(itemCategory => {
                if (itemFilterValue === 'all' || itemCategory.getAttribute('data-category') === itemFilterValue) {
                    addActive(itemCategory)
                } else {
                    removeActive(itemCategory)
                }
            })
        }
    })
})()


/** ===================================== HIRE ME ====================================================== */
;(() => {
    const hireMe = document.querySelector('.sub-section-item--contact')

    hireMe.onclick = () => {
        const headerItemActive = document.querySelector('.header-item.active'),
        headerItemContact = document.querySelector('.header-item.header-item--contact'),
        tabPaneActive = document.querySelector('.tab-pane.active'),
        tabPaneContact = document.querySelector('.tab-pane.tab-pane--contact')
        
        removeActive(headerItemActive)
        addActive(headerItemContact)
        removeActive(tabPaneActive)
    
        setTimeout(() => {
            addActive(tabPaneContact)
        }, 100)
    }    
})()