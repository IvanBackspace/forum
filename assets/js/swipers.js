let introSwiper=new Swiper(".introSwiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".intro__swiper-button-next",prevEl:".intro__swiper-button-prev"},pagination:{el:".intro__swiper-pagination"}}),intro4Swiper=new Swiper(".intro4Swiper",{navigation:{nextEl:".intro__swiper-button-next",prevEl:".intro__swiper-button-prev"},pagination:{el:".intro__swiper-pagination",type:"fraction"},scrollbar:{el:".intro__swiper-scrollbar"}}),substockSwiper=new Swiper(".substockSwiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".substock__swiper-button-next",prevEl:".substock__swiper-button-prev"},scrollbar:{el:".substock__swiper-scrollbar"},breakpoints:{920:{slidesPerView:3,spaceBetween:20},550:{slidesPerView:2,spaceBetween:10}}}),servicesCardTitle=document.querySelectorAll(".services__card_title"),services4Swiper=new Swiper(".services4Swiper",{slidesPerView:1.1,spaceBetween:0,pagination:{el:".services__swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class="'+i+'">'+(servicesCardTitle[e]?servicesCardTitle[e].textContent:"")+"</span>"}},navigation:{nextEl:".services__swiper-button-next",prevEl:".services__swiper-button-prev"},breakpoints:{1240:{spaceBetween:25}}}),reviews2Swiper=(1240<window.innerWidth?services4Swiper.enable():services4Swiper.disable(),new Swiper(".reviews2Swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".reviews__swiper-button-next",prevEl:".reviews__swiper-button-prev"},scrollbar:{el:".reviews__swiper-scrollbar"},breakpoints:{1e3:{slidesPerView:1.2,spaceBetween:20}}})),reviews4Swiper=new Swiper(".reviews4Swiper",{slidesPerView:2,spaceBetween:10,navigation:{nextEl:".reviews__swiper-button-next",prevEl:".reviews__swiper-button-prev"},scrollbar:{el:".reviews__swiper-scrollbar"},breakpoints:{920:{slidesPerView:2,spaceBetween:20}}}),gallery1Swiper=new Swiper(".gallery1Swiper",{slidesPerView:1,grid:{rows:1},spaceBetween:10,navigation:{nextEl:".gallery__swiper-button-next",prevEl:".gallery__swiper-button-prev"},breakpoints:{1e3:{slidesPerView:4,spaceBetween:20,grid:{rows:2}},800:{slidesPerView:3,grid:{rows:2}},660:{slidesPerView:2,spaceBetween:10,grid:{rows:1}}}}),gallery4Swiper=new Swiper(".gallery4Swiper",{slidesPerView:1,spaceBetween:10,loop:!0,navigation:{nextEl:".gallery__swiper-button-next",prevEl:".gallery__swiper-button-prev"},scrollbar:{el:".gallery__swiper-scrollbar"},speed:600,effect:"creative",creativeEffect:{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}}),gallery5Swiper=new Swiper(".gallery5Swiper",{slidesPerView:1,spaceBetween:10,loop:!0,navigation:{nextEl:".gallery__swiper-button-next",prevEl:".gallery__swiper-button-prev"},pagination:{el:".gallery__swiper-pagination",clickable:!0},breakpoints:{1100:{slidesPerView:3,spaceBetween:20},700:{slidesPerView:2,spaceBetween:20}}}),doctors1Swiper=new Swiper(".doctorsSwiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".doctors__swiper-button-next",prevEl:".doctors__swiper-button-prev"},scrollbar:{el:".doctors__swiper-scrollbar"},breakpoints:{1180:{slidesPerView:4,spaceBetween:30},910:{slidesPerView:3,spaceBetween:20},688:{slidesPerView:2}}}),doctors3Swiper=new Swiper(".doctors3Swiper",{slidesPerView:1.02,spaceBetween:10,navigation:{nextEl:".doctors__swiper-button-next",prevEl:".doctors__swiper-button-prev"},scrollbar:{el:".doctors__swiper-scrollbar"},breakpoints:{1020:{slidesPerView:1.6,spaceBetween:20}}}),articles2Swiper=new Swiper(".articles2Swiper",{slidesPerView:1,spaceBetween:10,grid:{rows:1},navigation:{nextEl:".articles__swiper-button-next",prevEl:".articles__swiper-button-prev"},scrollbar:{el:".articles__swiper-scrollbar"},breakpoints:{1020:{slidesPerView:3,spaceBetween:20,grid:{rows:2}},700:{slidesPerView:2,spaceBetween:20,grid:{rows:2}}}}),articles3Swiper=new Swiper(".articles3Swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".articles__swiper-button-next",prevEl:".articles__swiper-button-prev"},pagination:{el:".articles__swiper-pagination",clickable:!0},breakpoints:{1100:{slidesPerView:3,spaceBetween:20},760:{slidesPerView:2,spaceBetween:20}}}),stocks2Swiper=new Swiper(".stocks2Swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".stocks__swiper-button-next",prevEl:".stocks__swiper-button-prev"},speed:600,effect:"creative",creativeEffect:{prev:{shadow:!0,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}}),stocks4Swiper=new Swiper(".stocks4Swiper",{slidesPerView:1,spaceBetween:10,grid:{rows:1},navigation:{nextEl:".stocks__swiper-button-next",prevEl:".stocks__swiper-button-prev"},scrollbar:{el:".stocks__swiper-scrollbar"},breakpoints:{1130:{slidesPerView:2,spaceBetween:20,grid:{rows:2}},688:{slidesPerView:1.3,spaceBetween:20,grid:{rows:1}}}}),stocks5Swiper=new Swiper(".stocks5Swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".stocks__swiper-button-next",prevEl:".stocks__swiper-button-prev"},scrollbar:{el:".stocks__swiper-scrollbar"}}),stocks7Swiper=(window.innerWidth<800?stocks5Swiper.enable():stocks5Swiper.disable(),new Swiper(".stocks7Swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".stocks__swiper-button-next",prevEl:".stocks__swiper-button-prev"},pagination:{el:".stocks__swiper-pagination",type:"fraction"},scrollbar:{el:".stocks__swiper-scrollbar"},effect:"creative",creativeEffect:{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}})),licenses1Swiper=new Swiper(".licenses1Swiper",{slidesPerView:1.1,spaceBetween:10,navigation:{nextEl:".licenses__swiper-button-next",prevEl:".licenses__swiper-button-prev"},scrollbar:{el:".licenses__swiper-scrollbar"},breakpoints:{1100:{slidesPerView:2,spaceBetween:20},750:{slidesPerView:3},600:{slidesPerView:2},500:{slidesPerView:1.6}}}),licenses3Swiper=new Swiper(".licenses3Swiper",{direction:"horizontal",spaceBetween:10,effect:"coverflow",slidesPerView:1.5,loop:!0,speed:800,centeredSlides:!0,navigation:{nextEl:".licenses__swiper-button-next",prevEl:".licenses__swiper-button-prev"},scrollbar:{el:".licenses__swiper-scrollbar"},coverflowEffect:{rotate:0,scale:.55,stretch:0,depth:250,modifier:1,slideShadows:!1},breakpoints:{600:{spaceBetween:0,slidesPerView:2.1,initialSlide:1}}}),licenses4Swiper=new Swiper(".licenses4Swiper",{direction:"vertical",spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0}),licenses4Swiper2=new Swiper(".licenses4Swiper2",{slidesPerView:1,spaceBetween:10,thumbs:{swiper:licenses4Swiper}}),licenses5Swiper=new Swiper(".licenses5Swiper",{direction:"horizontal",slidesPerView:1.4,spaceBetween:-80,loop:!0,speed:600,navigation:{nextEl:".licenses__swiper-button-next",prevEl:".licenses__swiper-button-prev"},pagination:{el:".licenses__swiper-pagination",clickable:!0},breakpoints:{450:{slidesPerView:2.5}}}),tariffCardSwiper=new Swiper(".tariffCardSwiper",{navigation:{nextEl:".tariff-card__swiper-button-next",prevEl:".tariff-card__swiper-button-prev"},pagination:{el:".tariff-card__swiper-pagination"}}),tariffEconomSwiper=new Swiper(".tariffEconomSwiper",{navigation:{nextEl:".tariff-econom__swiper-button-next",prevEl:".tariff-econom__swiper-button-prev"},pagination:{el:".tariff-econom__swiper-pagination"}}),tariffComfortSwiper=new Swiper(".tariffComfortSwiper",{navigation:{nextEl:".tariff-comfort__swiper-button-next",prevEl:".tariff-comfort__swiper-button-prev"},pagination:{el:".tariff-comfort__swiper-pagination"}}),tariffPremiumSwiper=new Swiper(".tariffPremiumSwiper",{navigation:{nextEl:".tariff-premium__swiper-button-next",prevEl:".tariff-premium__swiper-button-prev"},pagination:{el:".tariff-premium__swiper-pagination"}}),tariff1Swiper=new Swiper(".tariff1Swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".tariff__swiper-button-next",prevEl:".tariff__swiper-button-prev"},pagination:{el:".tariff__swiper-pagination",type:"fraction"}}),tariff2Swiper=new Swiper(".tariff2Swiper",{slidesPerView:1.02,spaceBetween:20,navigation:{nextEl:".tariff__swiper-button-next",prevEl:".tariff__swiper-button-prev"},pagination:{el:".tariff__swiper-pagination"},breakpoints:{1160:{slidesPerView:3,spaceBetween:20},700:{slidesPerView:2,spaceBetween:20}}}),tariff3Swiper=(window.innerWidth<1160?tariff2Swiper.enable():tariff2Swiper.disable(),new Swiper(".tariff3Swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".tariff__swiper-button-next",prevEl:".tariff__swiper-button-prev"},scrollbar:{el:".tariff__swiper-scrollbar"},breakpoints:{1160:{slidesPerView:3,spaceBetween:20},700:{slidesPerView:2,spaceBetween:10}}})),licensesPage1Swiper=(window.innerWidth<1160?tariff3Swiper.enable():tariff3Swiper.disable(),new Swiper(".licenses-page1Swiper",{slidesPerView:1.2,spaceBetween:13,loop:!0,breakpoints:{1100:{slidesPerView:4,spaceBetween:20},800:{slidesPerView:3,spaceBetween:15},600:{slidesPerView:2,spaceBetween:13}},navigation:{nextEl:".licenses-page__swiper-button-next-1",prevEl:".licenses-page__swiper-button-prev-1"},scrollbar:{el:".licenses-page__swiper-scrollbar-1"}})),licensesPage2Swiper=new Swiper(".licenses-page2Swiper",{slidesPerView:1.2,spaceBetween:13,loop:!0,breakpoints:{1100:{slidesPerView:4,spaceBetween:20},800:{slidesPerView:3,spaceBetween:15},600:{slidesPerView:2,spaceBetween:13}},navigation:{nextEl:".licenses-page__swiper-button-next-2",prevEl:".licenses-page__swiper-button-prev-2"},scrollbar:{el:".licenses-page__swiper-scrollbar-2"}}),doctorDiplomasSwiper1=new Swiper(".doctorDiplomasSwiper1",{slidesPerView:1,spaceBetween:10,loop:!0,breakpoints:{688:{slidesPerView:2,spaceBetween:20}},navigation:{nextEl:".diplomas__swiper-button-next-1",prevEl:".diplomas__swiper-button-prev-1"},pagination:{el:".diplomas__swiper-pagination-1",clickable:!0}}),doctorDiplomasSwiper2=new Swiper(".doctorDiplomasSwiper2",{slidesPerView:1,spaceBetween:10,loop:!0,breakpoints:{688:{slidesPerView:2,spaceBetween:20}},navigation:{nextEl:".diplomas__swiper-button-next-2",prevEl:".diplomas__swiper-button-prev-2"},pagination:{el:".diplomas__swiper-pagination-2",clickable:!0}}),doctorDiplomasSwiper3=new Swiper(".doctorDiplomasSwiper3",{slidesPerView:1,spaceBetween:10,loop:!0,breakpoints:{688:{slidesPerView:2,spaceBetween:20}},navigation:{nextEl:".diplomas__swiper-button-next-3",prevEl:".diplomas__swiper-button-prev-3"},pagination:{el:".diplomas__swiper-pagination-3",clickable:!0}});
//# sourceMappingURL=swipers.js.map
