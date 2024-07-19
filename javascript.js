function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/*function showMoreProjects(){
    var moreProjects = document.getElementById('more-projects');
    var seeMoreBtn = document.getElementById('see-more-btn');
    if (moreProjects.style.display === 'none' || moreProjects.style.display === ''){
        moreProjects.style.display = 'block';
        seeMoreBtn.textContent='Show Less';
    } else {
        moreProjects.style.display = 'none';
        seeMoreBtn.textContent = 'See More';
    }
}*/