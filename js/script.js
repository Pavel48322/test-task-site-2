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

});