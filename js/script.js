'use strict';

document.addEventListener('DOMContentLoaded', () => {

    function slider() {
    //Slider

        let slideIndex = 1; //задаем индекс слайду
        let offset = 0; //расположение текущего слайда

        const slides = document.querySelectorAll('.slider__link'), //Весь блок со слайдами
              slider = document.querySelector('.slider__intro'), // отдельные слайды
              prev = document.querySelector('.arrow__left'), // кнопка влево
              next = document.querySelector('.arrow__right'), // кнопка вправо
              slidesWrapper = document.querySelector('.slider__wrapper'),
              slidesField = document.querySelector('.slider__inner'),
              width = window.getComputedStyle(slidesWrapper).width; // узнаем ширину

        slidesField.style.width = 100 * slides.length + '%'; // узнаем ширину польностью всех слайдов
        slidesField.style.transition = '0.5s all'; // плавный переход
        
        slidesWrapper.style.overflow = 'hidden'; // ограничиваем, чтобы видно было 100%, а не 400%

        slides.forEach(slide => {
            slide.style.width = width; //теперь мы точно уверенны что все слайды одинаковой ширины
        }); 

        slider.style.position = 'relative'; 

        //replace (регулярное выражение), удаляет все НЕ ЧИСЛА  
        function deleteNotDigits(str) {
            return +str.replace(/\D/g, '');
        }
        
        //Для плавного перехода
        function slidesFieldTransform() {
                    slidesField.style.transform = `translateX(-${offset}px)`;
        }

        //кнопка вперед
        next.addEventListener('click', () => {
            if (offset == deleteNotDigits(width) * (slides.length - 1)) { 
                offset = 0;//если наш offset будет равен всей ширине наших слайдов, то возвращаемся в начало
            } else {
                offset += deleteNotDigits(width); //добавляем смещение, если не последний слайд
            }

            slidesFieldTransform();

            if (slideIndex == slides.length) {
                slideIndex = 1; // возвращаемся в начало, если дойдет до конца
            } else {
                slideIndex++;
            }
        });

        //кнопка назад
        // все так же как вперед, только наоборот
        prev.addEventListener('click', () => {
            if (offset == 0) {  
                offset = deleteNotDigits(width) * (slides.length - 1);
            } else {
                offset -= deleteNotDigits(width); //уменьшаем смещение, если не последний слайд
            }

            slidesFieldTransform();

            if (slideIndex == 1) {
                slideIndex = slides.length; // возвращаемся в конец, если дойдет до начала
            } else {
                slideIndex--;
            }
        });
    }   

    slider();

    function sliderTwo() {
    //Slider

        let slideIndex = 1; //задаем индекс слайду
        let offset = 0; //расположение текущего слайда
        let i = "1355px";

        const slides = document.querySelectorAll('.cards__item'), //Весь блок со слайдами
              slider = document.querySelector('.cards__slider'), // отдельные слайды
              prev = document.querySelector('.cards__prev'), // кнопка влево
              next = document.querySelector('.cards__next'), // кнопка вправо
              slidesWrapper = document.querySelector('.cards__slider__wrapper'),
              slidesField = document.querySelector('.cards__inner'),
              width = window.getComputedStyle(slidesWrapper) + '1355px'; // узнаем ширину

        console.log(offset);
        console.log(slides.length);
        console.log(width);

        slidesField.style.width = 100 * slides.length + '%'; // узнаем ширину польностью всех слайдов
        slidesField.style.display = 'flex'; // все в одну строку
        slidesField.style.transition = '0.5s all'; // плавный переход
        
        slidesWrapper.style.overflow = 'hidden'; // ограничиваем, чтобы видно было 100%, а не 400%

        slides.forEach(slide => {
            slide.style.width = width; //теперь мы точно уверенны что все слайды одинаковой ширины
        }); 

        slider.style.position = 'relative'; 

        //replace (регулярное выражение), удаляет все НЕ ЧИСЛА  
        function deleteNotDigits(str) {
            return +str.replace(/\D/g, '');
        }
        
        //Для плавного перехода
        function slidesFieldTransform() {
                    slidesField.style.transform = `translateX(-${offset}px)`;
        }


        //кнопка вперед
        next.addEventListener('click', () => {
            if (offset == deleteNotDigits(width) * (slides.length - 45)) { 
                offset = 0;////если наш offset будет равен всей ширине наших слайдов, то возвращаемся в начало
            } else {
                offset += deleteNotDigits(width); //добавляем смещение, если не последний слайд
            }

            slidesFieldTransform();

            if (slideIndex == slides.length) {
                slideIndex = 1; // возвращаемся в начало, если дойдет до конца
            } else {
                slideIndex++;
            }

        });

        //кнопка назад
        // все так же как вперед, только наоборот
        prev.addEventListener('click', () => {
            if (offset == 0) {  
                offset = deleteNotDigits(width) * (slides.length - 45);
            } else {
                offset -= deleteNotDigits(width); //уменьшаем смещение, если не последний слайд
            }

            slidesFieldTransform();

            if (slideIndex == 1) {
                slideIndex = slides.length; // возвращаемся в конец, если дойдет до начала
            } else {
                slideIndex--;
            }

        });
    }




    //Сards

    function cards() {
        // Используем классы для карточек 

        class MenuCard {
            constructor(src, srcSale, srcNew, srcRecommend, availability, code, text, newPrice, price, parentSelector, ...classes) {
                this.src = src;
                this.srcSale = srcSale;
                this.srcNew = srcNew;
                this.srcRecommend = srcRecommend;
                this.availability= availability;
                this.code = code;
                this.text = text;
                this.newPrice = newPrice;
                this.price = price;
                this.classes = classes; // мы не знаем сколько будет аргументов в будущем
                this.parent = document.querySelector(parentSelector); //обязательно получаем только 1 элемент
            }

            render() {
                const element = document.createElement('div'); //создаем какой-то блок
                if (this.classes.length === 0) {
                    this.element = "cards__item";
                    element.classList.add(this.element);
                        sliderTwo();
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                    //мы перебираем весь массив, и присваем className каждому элементу
                } // если у нас ничего не добавляется, ты мы добавляем сами "cards__item"
                // Если же у нас есть что-то, то мы перебираем через forEach, так как у нас это массив

                element.innerHTML = `
                    <img src=${this.src} alt="" class="cards__logo">
                    <svg data-close class="cards__favorites">
                        <use xlink:href="#favorites"></use>
                    </svg>
                    <div class="cards__imgs">
                        <img src=${this.srcSale} alt="" class="cards__sale">
                        <img src=${this.srcNew} alt="" class="cards__new">
                        <img src=${this.srcRecommend} alt="" class="cards__recommend">
                    </div>
                    <div class="cards__item__info">
                        <p class="cards__availability">${this.availability}</p>
                        <p class="cards__code">${this.code}</p>
                    </div>
                    <p class="cards__item__text">${this.text}</p>
                    <div class="cards__item__info__price">
                        <p class="cards__new__price">${this.newPrice}</p>
                        <p class="cards__price">${this.price}</p>
                        <img src="img/cards/cards-5.png" alt="" class="cards__basket">
                    </div>
                    <div class="cards__form">
                        <div type="text" class="cards__input"></div>
                        <div class="cards__input__minus">
                            <img src="img/cards/minus.png" alt="" class="minus">
                        </div>
                        <p class="cards__input__text">0</p>
                        <div class="cards__input__plus">
                            <img src="img/cards/plus.png" alt="" class="plus">
                        </div>
                    </div>
                    <div class="cards__btns">
                        <button class="btn btn-one">Купить в 1 клик</button>
                        <button class="btn btn-two">В корзину</button>
                    </div>
                `;
                this.parent.append(element); // добавляем в самый конец своего родителя 
            }
        }
        getResource('http://localhost:3000/cards')
            .then(data => { // data Это большой массив из db.json
                data.forEach(({src, srcSale, srcNew, srcRecommend, availability, code, text, newPrice, price}) =>{
                    new MenuCard(src, srcSale, srcNew, srcRecommend, availability, code, text, newPrice, price, '.cards__slider .cards__inner').render();
                });// Этот конструктор будет создаваться столько раз, сколько объектов внутри массива
                // который мне придет из сервера
            });

    
    }


    const getResource = async (url) => { //В функции будет какойто асинхронный код, поэтому мы написали async
        const res = await fetch(url); // тут мы пишем куда // использовали его парный оператор await, перед теми
        // операциями, которые нужно дождаться. Эти операторы всегда используются в паре!
        if(!res.ok) {
            throw new Error(`Coul not fetch ${url}, status: ${res.status}`); // Это на слуяай если будет ошибка
        }

        return await res.json(); //Дожидается работы этого промиса и только потом его возвращает
    };

    cards();

});