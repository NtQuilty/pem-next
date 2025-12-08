import React from 'react';

export const CookiePolicy: React.FC = () => {
  return (
    <section className="relative mx-auto bg-[#1a1e2c] pt-[92px] md:pt-[100px]">
      <div className="mx-auto px-4 md:max-w-[1350px]">
        <h1 className="heading-h1 mb-8 md:mb-12">Политика в отношении cookie-файлов</h1>

        <div className="space-y-8 md:space-y-12">
          <div>
            <h2 className="heading-sm mb-4 md:mb-6">Что такое cookie?</h2>
            <div className="space-y-4">
              <p className="text-body">
                Cookie – это небольшой файл данных, который тот или иной сайт просит ваш браузер
                сохранить на компьютере или мобильном устройстве. Когда пользователь повторно
                посещает сайт, браузер обращается к базе cookies. Cookie-файлы позволяют сайту
                «запоминать» ваши действия или предпочтения в течение длительного времени.
              </p>
              <p className="text-body">
                В рамках этого сайта используются два главных вида файлов Cookie:{' '}
                <span className="text-accent font-medium">«сессионные» (session cookies)</span> и{' '}
                <span className="text-accent font-medium">«постоянные» (persistent cookies)</span>.
                «Сессионные» Cookies – это файлы, ограниченные по времени, которые сохраняются на ПК
                пользователя до момента его выхода с сайта или отключения браузера. «Постоянные»
                файлы cookies сохраняются на ПК пользователя определенный период времени, указанный
                в параметрах файлов Cookies или до срока их удаления пользователем.
              </p>
              <br />
              <p className="text-body">
                Файлы cookie могут быть установлены веб-сайтом, который вы посещаете («основные
                файлы cookie»), или они могут быть установлены другими сайтами, которые запускают
                содержимое на странице, которую вы просматриваете («сторонние файлы cookie»).
              </p>
            </div>
          </div>

          <div>
            <h2 className="heading-sm mb-4 md:mb-6">Для чего используются файлы cookie</h2>
            <p className="text-body">
              Мы используем cookie-файлы с целью обеспечения максимального удобства пользования
              сайтом, например, запоминая предыдущие посещения и предпочитаемые пользователями
              настройки и обеспечивая, таким образом, эффективную навигацию между страницами нашего
              сайта.
            </p>
          </div>

          {/* Типы файлов */}
          <div>
            <h2 className="heading-sm mb-6 md:mb-8">Типы файлов cookie и как мы используем их</h2>
            <p className="text-body mb-6">
              На этом сайте используются следующие типы файлов cookie:
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="rounded-2xl border border-gray-700/30 bg-[#1b1e29] p-6 md:p-8">
                <h3 className="text-accent heading-xs mb-4">1. Строго необходимые файлы cookie</h3>
                <p className="text-body">
                  Эти файлы cookie необходимы для навигации на сайте, для предоставления ряда
                  базовых услуг, и для использования некоторых его функций, например, доступа в
                  безопасные зоны или для регистрации аккаунта. Данные файлы cookie могут быть как
                  сессионными, так и постоянными. Без этих файлов cookie мы не можем гарантировать
                  бесперебойное функционирование сайта.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-700/30 bg-[#1b1e29] p-6 md:p-8">
                <h3 className="text-accent heading-xs mb-4">2. Функциональные файлы cookie</h3>
                <div className="space-y-4">
                  <p className="text-body">
                    Функциональные файлы cookie позволяют запоминать информацию, предоставленную
                    пользователем (имя пользователя, кодировка, временная зона и т.д.) и отображать
                    сайт с сохраненными настройками. Более того, эти cookie-файлы используются для
                    предоставления ряда услуг. Например, они позволяют оставлять комментарии.
                  </p>
                  <p className="text-body">
                    Информация, предоставляемая такими файлами cookie, не предназначена для
                    отслеживания вашей работы на сторонних сайтах. Данные файлы cookie могут быть
                    как сессионными, так и постоянными. Кроме того, они могут быть как основными,
                    так и сторонними. Файлы этого типа используются для улучшения функциональности
                    нашего сайта.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-700/30 bg-[#1b1e29] p-6 md:p-8">
                <h3 className="text-accent heading-xs mb-4">3. Аналитические файлы cookie</h3>
                <p className="text-body">
                  Эти файлы cookie позволяют собирать информацию, которая в совокупности помогает
                  нам понять, как используется сайт, и измерять эффективность маркетинговых
                  кампаний. Также эти файлы помогают адаптировать сайт и приложения к потребностям
                  пользователя и улучшать взаимодействие между пользователем и сайтами. Например, мы
                  можем отслеживать ошибки или проверять, что пользователи получают доступ к
                  контенту, который они ищут. Как правило, такие файлы-cookie являются постоянными.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="heading-sm mb-6 md:mb-8">Управление и удаление файлов cookie</h2>
            <div className="space-y-6">
              <p className="text-body">
                При посещении сайта впервые Вы уведомляетесь об использовании cookie-файлов, далее
                такого уведомления не появляется и Вы можете регулировать использование файлов
                cookie: принимать, отключать или удалять их, — через настройки вашего браузера.
              </p>

              <p className="text-body">
                Вы можете найти информацию о том, как отключить файлы cookie или изменить настройки
                файлов cookie для браузера, перейдя по следующим ссылкам:
              </p>

              <div className="rounded-2xl border border-gray-700/30 bg-[#1b1e29] p-6 md:p-8">
                <h3 className="text-accent mb-4 text-lg font-semibold">Настройки браузеров:</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="min-w-fit font-medium text-[#D6D6D6]">Google Chrome:</span>
                    <a
                      href="https://support.google.com/chrome/answer/95647?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent break-all text-sm underline transition-colors hover:text-[#2980e6] md:text-base"
                    >
                      https://support.google.com/chrome/answer/95647?hl=en
                    </a>
                  </li>
                  <li className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="min-w-fit font-medium text-[#D6D6D6]">Firefox:</span>
                    <a
                      href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent break-all text-sm underline transition-colors hover:text-[#2980e6] md:text-base"
                    >
                      https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                    </a>
                  </li>
                  <li className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="min-w-fit font-medium text-[#D6D6D6]">Safari:</span>
                    <a
                      href="https://support.apple.com/kb/PH21411"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent break-all text-sm underline transition-colors hover:text-[#2980e6] md:text-base"
                    >
                      https://support.apple.com/kb/PH21411
                    </a>
                  </li>
                  <li className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="min-w-fit font-medium text-[#D6D6D6]">Safari iOS:</span>
                    <a
                      href="https://support.apple.com/en-us/HT201265"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent break-all text-sm underline transition-colors hover:text-[#2980e6] md:text-base"
                    >
                      https://support.apple.com/en-us/HT201265
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-yellow-600/30 bg-[#1b1e29] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-600">
                    <span className="text-sm font-bold text-white">!</span>
                  </div>
                  <p className="text-body">
                    <span className="font-medium text-yellow-400">Обратите внимание:</span> если вы
                    решите отключить файлы cookie, то все равно сможете использовать наш сайт, но
                    некоторые разделы и функции нашего сайта не будут работать.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
