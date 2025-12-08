import { Link } from 'react-router-dom';
import { useOrderForm } from '../../contexts/OrderFormContext';
import { servicesData } from './const';

export const MainContent = ({ isHomePage = true }: { isHomePage?: boolean }) => {
  const { openOrderForm } = useOrderForm();

  return (
    <div className={`relative mx-auto ${isHomePage ? 'pb-[50px]' : 'pt-[92px] md:pt-[100px]'}`}>
      <div className="mx-auto px-4 md:max-w-[1350px]">
        <h2 className="mx-4 my-10 mb-10 max-w-full text-2xl leading-normal text-[#d6d6d6] md:my-[100px] md:ml-[145px] md:max-w-[800px] md:text-[40px] md:leading-[60px]">
          Мы изготавливаем детали технологией 2D и 3D лазерной резки
        </h2>

        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className="mb-10 min-h-[500px] rounded-3xl bg-cover bg-center bg-no-repeat p-5 md:mb-[70px] md:min-h-0 md:rounded-[20px] md:p-7"
            style={{
              backgroundImage: `url(${service.bgImage})`,
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className={`max-h-64 object-contain md:max-h-96 md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
              />
              <div
                className={`md:flex md:w-1/2 md:flex-col ${index % 2 === 0 ? 'md:order-2 md:pr-10' : 'md:order-1 md:pl-10'}`}
              >
                <h3 className="mb-3 text-2xl font-bold text-[#d6d6d6] md:mb-4 md:text-[36px]">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-tight text-[rgba(214,214,214,0.7)] md:mb-6 md:text-[16px] md:leading-[24px]">
                  {service.description}
                </p>

                <div className="flex justify-between md:justify-start md:gap-4">
                  <button
                    onClick={() => openOrderForm('order')}
                    className="rounded-xl bg-[#3198FF] px-4 py-2 text-sm text-white md:rounded-[20px] md:px-6 md:py-3 md:text-[16px]"
                  >
                    Рассчитать стоимость
                  </button>
                  <Link
                    to="/laser-cutting"
                    className="rounded-xl border-[1px] border-solid border-[#3198ff] px-4 py-2 text-sm text-[#a7a8ab] md:rounded-[20px] md:px-6 md:py-3 md:text-[16px]"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
