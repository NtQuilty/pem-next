import { useRef, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { services } from '../../config';
import { useOrderForm } from '../../contexts/OrderFormContext';

export const LandingHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const { openOrderForm } = useOrderForm();

  const activeService = services[activeIndex];

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      if (activeIndex === 0) {
        // Если мы на первом слайде, переходим к последнему
        swiperRef.current.slideTo(services.length - 1);
      } else {
        swiperRef.current.slidePrev();
      }
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      if (activeIndex === services.length - 1) {
        // Если мы на последнем слайде, переходим к первому
        swiperRef.current.slideTo(0);
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  return (
    <div className="mb-12 h-[800px] w-full md:mb-20 lg:mb-28">
      <div className="grid h-full w-full grid-cols-1 grid-rows-1">
        <div className="col-start-1 row-start-1 h-full w-full overflow-hidden">
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            direction="horizontal"
            autoplay={{
              delay: 10000,
            }}
            loop={false}
            speed={1000}
            className="h-full w-full"
            onSwiper={swiper => {
              swiperRef.current = swiper;
            }}
            onSlideChange={swiper => {
              setActiveIndex(swiper.activeIndex);
            }}
          >
            {services.map(service => (
              <SwiperSlide key={service.id} className="h-full w-full">
                <div className="h-full w-full ">
                  <img
                    src={service.image}
                    alt={service.id}
                    className="h-full w-full bg-black object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="z-[5] col-start-1 row-start-1 flex h-full w-full flex-col justify-between gap-[150px] lg:gap-[0px]">
          <div className="relative flex flex-1 items-end justify-start lg:items-center">
            {/* Desktop Navigation Arrows */}
            <button
              onClick={goToPrevSlide}
              className="absolute left-4 top-1/2 z-[8] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 md:flex"
              aria-label="Предыдущий слайд"
            >
              <MdKeyboardArrowLeft className="h-6 w-6" />
            </button>

            <button
              onClick={goToNextSlide}
              className="absolute right-4 top-1/2 z-[8] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 md:flex"
              aria-label="Следующий слайд"
            >
              <MdKeyboardArrowRight className="h-6 w-6" />
            </button>

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-20 lg:px-20">
              <div className="flex max-w-full flex-col justify-center gap-3 md:mb-[-100px] md:max-w-[950px] md:gap-6">
                <h1 className="heading-h1">{activeService.title}</h1>
                <p className="text-body-lg mb-4 max-w-full md:mb-[40px] md:max-w-[722px]">
                  {activeService.description}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:gap-[35px]">
                  <button
                    onClick={() => openOrderForm('order')}
                    className="
                    btn-text-lg w-full rounded-[20px] bg-[#3198FF]
                    py-3 text-white transition-all duration-200
                    hover:bg-[#2980e6] sm:w-[260px] md:w-[300px] md:py-4 lg:w-[340px] lg:py-[25px]"
                  >
                    Рассчитать стоимость
                  </button>

                  <Link
                    to="/laser-cutting"
                    className="
                      btn-text-lg flex w-full
                      items-center justify-center rounded-[20px]
                      border-[1px] border-solid
                      border-[#3198ff] py-3 text-gray-400 transition-all
                      duration-200 hover:bg-[#3198ff] hover:text-white
                      sm:w-[200px] md:w-[230px] md:py-4
                      lg:w-[260px] lg:py-[25px]
                    "
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 pb-6 md:pb-8">
            {/* Mobile Navigation Arrows */}
            <div className="flex items-center gap-6 md:hidden">
              <button
                onClick={goToPrevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                aria-label="Предыдущий слайд"
              >
                <MdKeyboardArrowLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-3">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideTo(index);
                      }
                    }}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-[#3198FF]' : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Перейти к слайду ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                aria-label="Следующий слайд"
              >
                <MdKeyboardArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Desktop dots only */}
            <div className="hidden gap-3 md:flex">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(index);
                    }
                  }}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-[#3198FF]' : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
