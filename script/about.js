document.querySelectorAll(".carousel").forEach(carousel => {
  
    const items=carousel.querySelectorAll(".carousel__item");
    const buttonsHtml= Array.from(items, () => {
     return `<span class="carousel__button"></span>`;
    });
    carousel.insertAdjacentHTML("beforeend" , `
       <div class="carousel__nav">
       ${ buttonsHtml.join("")}
       </div>
    `);
    const buttons= carousel.querySelectorAll(".carousel__button");
    buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        items.forEach(item => item.classList.remove("carousel__item--active"));
        buttons.forEach(button => button.classList.remove("carousel__button--active"));

        items[i].classList.add("carousel__item--active");
        button.classList.add("carousel__button--active");
    });
    });
   

    
});