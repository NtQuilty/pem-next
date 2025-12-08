export const About = ({ isHomePage = true }: { isHomePage?: boolean }) => {
  return (
    <section
      className={`relative mx-auto bg-[#1a1e2c] pb-[50px] ${isHomePage ? ' pt-[100px]' : 'pt-[92px] md:pt-[100px]'}`}
    >
      <div className="mx-auto px-4 md:max-w-[1350px]">
        {/* Заголовок секции */}
        <h1 className="heading-h1 mb-6 md:mb-12">О компании</h1>

        {/* Верхняя секция с информацией */}
        <div className="flex flex-col md:flex-row md:gap-6">
          <div className=" md:w-[60%]">
            <div className="flex flex-col gap-4 md:gap-6">
              <p className="text-body">
                Петроэнергомаш — компания, специализирующаяся на услугах лазерной резки металлов и
                композитных материалов. Наша команда экспертов реализует нестандартные проекты и
                создает высокоточные решения для машиностроения, энергетики, строительства и
                рекламной индустрии.
                <br />
                Современные лазерные комплексы с ЧПУ Мы используем передовые волоконные и CO₂
                лазерные станки, работаем с материалами толщиной от 0,5 до 40 мм: нержавеющая и
                черная сталь, алюминий, медь, латунь, полимеры. Изготавливаем детали с точностью до
                0,02 мм — от серийного производства до уникальных заказов. Сотрудничаем с
                промышленными предприятиями, архитектурными бюро и стартапами.
              </p>
            </div>
            <div className="mt-6 md:mt-8 md:h-[500px] md:overflow-hidden">
              <img
                src="/images/about/copper-equipment.webp"
                alt="Оборудование для 3D печати"
                loading="lazy"
                className="h-full w-full rounded-lg md:object-cover"
              />
            </div>
          </div>

          <div className="mt-6  md:mt-0 md:w-[40%]">
            <div className="mb-4 flex flex-col gap-5 md:mb-6">
              <div className="order-2 md:order-1 md:h-[250px] md:overflow-hidden">
                <img
                  src="/images/about/gold-equipment.webp"
                  alt="Оборудование с компьютером"
                  loading="lazy"
                  className="h-auto w-full rounded-lg md:h-full md:w-full md:object-cover"
                />
              </div>

              <div className="order-1 md:order-2">
                <p className="text-body">
                  В своей работе мы применяем высокотехнологичное лазерное оборудование и
                  специализированное ПО для проектирования, оптимизации раскроя и контроля качества.
                  Инженеры «Петроэнергомаш» подберут решение, которое удовлетворит вас по:
                </p>
                <ul className="text-body list-disc space-y-2 pl-5">
                  <li>Скорости — срочные заказы от 24 часов;</li>
                  <li>Экономии — минимизация отходов за счет интеллектуального раскроя;</li>
                  <li>Гибкости — резка сложных контуров, микроотверстий и пазов.</li>
                </ul>
                <p className="text-body mt-3">Примеры наших проектов:</p>
                <ul className="text-body list-disc space-y-2 pl-5">
                  <li>Детали для промышленного оборудования (кожухи, кронштейны).</li>
                  <li>
                    Декоративные элементы фасадов и интерьеров. Точные компоненты для медицинских
                    приборов.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {!isHomePage && (
          <div className="md:mt-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className=" flex-1">
                <p className="text-body">
                  Мы предлагаем своим клиентам лучший сервис. Наши сотрудники готовы помочь в выборе
                  способа решения вашей задачи, а также составить техническое задание на основе
                  ваших пожеланий. Мы принимаем заявки на услуги по всей России. Сотрудничество с
                  сервисами доставки позволяет отправлять заказы в любой город страны. Цифровые
                  данные в виде файлов вы можете получить по ссылке в любом удобном формате.
                  Свяжитесь с менеджером Петроэнергомаш, чтобы узнать больше об услугах и сделать
                  заказ.
                </p>
              </div>
              <div className="flex-[2_1_0]  md:overflow-hidden">
                <img
                  src="/images/about/mesh-structure.webp"
                  alt="Сетчатая структура"
                  loading="lazy"
                  className="md:rounded-lg md:object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
