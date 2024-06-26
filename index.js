const TelegramBot = require('node-telegram-bot-api');

const token = ''; //ТОКЕН СЮДА

const bot = new TelegramBot(token, { polling: true });

const directions = {
  'бизнес-информатика': {
    text: `1. Бизнес-информатика\n\n Уровень образования:\n • Бакалавриат\n • Магистратура\n Сроки обучения бакалавриата:\n • Очно: 4 года\n • Заочно: 5 лет\n • Очно-заочно: 4 года 4 месяца\n Сроки обучения магистратуры:\n • Очно: 2 года\n • Заочно: 2 года 6 месяцев\n Перечень документов для поступления:\n • Аттестат\n • Ксерокопия паспорта\n • Фотографии 4 шт размера 3х4\n • Ксерокопия снилса Минимальные баллы ЕГЭ:\n • Проф. математика – 39\n • Русский язык – 40\n • Обществознание – 45\n Стоимость обучения: Изучаемые дисциплины:\n • Основы бизнеса\n • Разработка WEB-сайтов\n • Экономическая теория\n • Инновационный менеджмент\n • Электронный маркетинг\n • Анализ данных\n • Компьютерная графика (3ds Max, Inventor, Photoshop)\n • Электронный бизнес\n • Рынки ИКТ и организация продаж и др.\n Производственная практика: Министерстве Финансов ЧР, Академия наук ЧР, Департаменте Финансов г. Грозного, Фонде имени Шейха Зайеда, в компаниях ВайнахТелеком, ЧеченЭнерго, МТС, РТРС, Альфа-СТК и др.\n\n Адрес: 364049, г. Грозный, бульвар Дудаева, 17а`,
    video: './videos/IMFIT.mp4',
  },
  'государственное и муниципальное управление': {
    text: '2.	Государственное и муниципальное управление\n\n Уровень образования: \n•	Бакалавриат\n•	Магистратура\nСроки обучения:\n•	Очно: 4 года\n•	Заочно: 5 лет\n•	Очно-заочно: 5 лет\nСроки обучения магистратуры:\n•	Очно: 2 года\n•	Заочно: 2 года 4 месяцев\nПеречень документов для поступления:\n•	Аттестат\n•	Ксерокопия паспорта\n•	Фотографии 4 шт размера 3х4\n•	Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n•	Математика – 39\n•	Русский язык – 40\n•	Обществознание – 45\nИзучаемые дисциплины:\n•	Теория организации\n•	Информационные технологии в управлении\n•	Государственное регулирование экономики\n•	Управление общественными отношениями\n•	Конкурентоспособность региона и её оценка\n•	Бренд-менеджмент в системе регионального управления\n•	Государственная и муниципальная служба\n•	Прогнозирование и планирование\n•	Региональный маркетинг и др.\n\nПроизводственная практика: Адрес: 364049, г. Грозный, улица Субры Кишиевой, 33',
    video: './videos/GOSUD.mp4',
  },
  'журналистика': {
    text: 'Журналистика\nУровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Заочно: 2 года 4 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Литература – 40\n• Русский язык – 40\nВИ, проводимое организацией самостоятельно:\n• Творческое испытание - 61\nСтоимость обучения на платной основе:\n• Очно: 96976\n• Заочно: 47475\nИзучаемые дисциплины:\n• Техника и технология СМИ\n• Экономика и менеджмент СМИ\n• История журналистики Чеченской Республики\n• История зарубежной литературы\n• Журналистское расследование\n• Профессионально-творческий практикум\n• Основы аналитической журналистики\n• Детская журналистика\n• Основы рекламы и PR в СМИ\n• Новостная журналистика и др.\nПроизводственная практика:\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/ALL.mp4',
  },
  'cоциальная работа': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nСроки обучения магистратуры:\n• Заочно: 2 года 3 месяца\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• История – 35\n• Русский язык – 40\n• Обществознание - 45\nИзучаемые дисциплины:\n• Технология социальной работы\n• Методика исследований в социальной работе\n• Конфликтология в социальной работе\n• Физическая культура\n• Социология социальной работы\n• Социология миграционных процессов\n• Социология молодежи\n• Правовые основы социальной работыи др.\nПроизводственная практика:\nАдрес: 364049, г. Грозный, бульвар Дудаева, 17а',
    video: './videos/YURID.mp4',
  },
  'история': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Заочно: 2 года 4 месяца\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• История – 35\n• Русский язык – 40\n• Обществознание - 45\nИзучаемые дисциплины:\n• История стран Азии и Африки\n• Физическая культура\n• Теория и методология истории\n• Источниковедение\n• Новая и новейшая история\n• История народов Чечни\n• История России (февраль 1917 -1991гг.)\n• Методика преподавания истории и обществознания и др.\nПроизводственная практика:\nСтоимость обучения бакалавриата на платной основе:\n• Очно: 96 976\n• Заочно: 36 398\nСтоимость обучения магистратуры на платной основе:\n• Очно: 104 023\n• Заочно: 43 255\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/HISTORY.mp4',
  },
  'торговое дело': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\n• Очно-заочно: 4 года 6 месяцев\nСроки обучения магистратуры:\n• Очно: 2 года\n• Заочно: 2 года 4 месяца\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика – 39\n• Русский язык – 40\n• Обществознание – 45\nИзучаемые дисциплины:\n• Экономика предприятия (организаций)\n• Физическая культура и спорт\n• Деловой иностранный язык\n• Ценовая политика в торговле\n• Управление логистическими процессами в торговле\n• Коммерческое товароведение товаров однородных групп\n• Организация защиты прав потребителей\n• Маркетинговые исследования рынка товаров и услуг и др.\nПроизводственная практика:\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/ECONOM.mp4',
  },

  'лечебное дело': {
    text: 'Уровень образования:\n • Специалитет\nСроки обучения:\n• Очно: 6 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Химия – 39\n• Биология– 39\n• Русский язык – 40\nИзучаемые дисциплины:\n• Педиатрия\n• Гинекология\n• Инфекционные болезни\n• Судебная медицина\n• Оториноларингология\n• Факультетская терапия, профессиональные болезни\n• Неврология, медицинская генетика, нейрохирургия\n• Факультетская хирургия, урология и др.\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/ALL.mp4',
  },
  'агрономия': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Заочно: 2 года 4 месяца\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика – 39\n• Русский язык – 40\n• Биология – 39\nИзучаемые дисциплины:\n• Плодоводство\n• Растениеводство\n• Агрохимия\n• Чеченский язык\n• Прогноз развитие вредителей и болезней\n• Химические средства защита растений\n• Фитопатология\n• Производство кормовых культур\n• Селекция и семеноводство с-х культур с основами генетики и др.\nПроизводственная практика:\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/AGROTECH.mp4',
  },
  'биология': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Очно-заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Очно-заочно: 2 года 4 месяца\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика – 39\n• Русский язык – 40\n• Биология – 39\nИзучаемые дисциплины:\n• Физиология человека и животных\n• Ихтиология\n• Иностранный язык\n• Физика\n• Физиология растений\n• Систематика растений\n• Биоорганическая химия\n• Биология размножения и развития\n• Физическая культура и спорт\n• Анатомия человека и др.\nПроизводственная практика:\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/',
    video: './videos/BIOCHEM.mp4',
  },
  'туризм': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nСроки обучения магистратуры:\n• Очно-заочно: 2 года 4 месяца\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• История – 35\n• Русский язык – 40\n• Биология – 39\nИзучаемые дисциплины:\n• Элективные курсы по физической культуре и спорту\n• Транспортное обеспечение в туризме\n• Технологии разработки и формирования туристского продукта\n• Технологии и организация экскурсионного обслуживания\n• Гостиничные услуги в туристской индустрии\n• Технология организации детско-юношеского и молодежного туризма\n• Технология и организация социального туризма и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/ALL.mp4',
  },
  'лингвистика': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Очно-заочно: 4 года 6 месяцев\nСроки обучения магистратуры:\n• Очно: 2 года\n• Заочно: 2 года 4 месяца\n• Очно-заочно: 2 года 5 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Иностранный язык – 30\n• Русский язык – 40\n• Обществознание – 45\nИзучаемые дисциплины:\n• Стилистика\n• Практический курс второго иностранного языка (английского)\n• Практикум по культуре речевого общения первого иностранного языка (английского)\n• Практический курс второго иностранного языка (французского)\n• Введение в теорию межкультурной коммуникации\n• Правоведение\n• Физическая культура и спорт\n• Практическая грамматика первого иностранного языка и др.\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/ALL.mp4',
  },
  'юриспуденция': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Заочно: 2 года 4 месяца\n• Очно-заочно: 2 года 6 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• История – 35\n• Русский язык – 40   \n• Обществознание - 45\nИзучаемые дисциплины:\n• Философия  \n• Гражданское право\n• Семейное право\n• Земельное право\n• Уголовное право\n• Профессиональная этика\n• Физическая культура\n• Конституционное право\n• Иностранный язык в сфере юриспруденции и др.\nАдрес: 364049, г. Грозный, бульвар Дудаева, 17а',
    video: './videos/YURID.mp4',
  },
  'экономика': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\n• Очно-заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Заочно: 2 года 4 месяца\n• Очно-заочно: 2 года 5 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика – 39\n• Русский язык – 40\n• Обществознание – 45\nИзучаемые дисциплины:\n• Русский язык и культура речи\n• Иностранный язык\n• Философия\n• Экономическая теория\n• Экономика предприятия (организаций)\n• Экономика предприятий агропромышленного коплекса\n• Экономическая информатика\n• Физическая культура и спорт\n• Основы инклюзивного образования\n• Высшая математика\n• Математические методы в экономике\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/ECONOM.mp4',
  },
  'инфокоммуникационные технологии и системы связи': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Очно-заочно: 4 года 6 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика– 39\n• Русский язык – 40\n• Физика- 39\nИзучаемые дисциплины:\n• Основы построения инфокоммуникационных систем и сетей\n• Физическая культура и спорт\n• Управление it-проектами\n• Сети и системы радиосвязи\n• Нормативно-правовая база деятельности в деятельности ИКТ\n• Метрология, стандартизация и сертификация и др.\nПроизводственная практика: В компаниях Вайнахтелеком, Чеченэнерго, МТС, РТРС, Альфа-СТК и др.\nАдрес: 364049, г. Грозный, бульвар Дудаева, 17а',
    video: './videos/IMFIT.mp4',
  },
  'информационная безопасность': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Очно-заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика– 39\n• Русский язык – 40\n• Информатика- 44\nИзучаемые дисциплины:\n• Программирование\n• Деловые коммуникации\n• Программно-аппаратные средства защиты информации\n• Проектирование систем информационной безопасности\n• Сети и системы передачи информациии др.\nПроизводственная практика: В компаниях Вайнахтелеком, Чеченэнерго, МТС, РТРС, Альфа-СТК и др.\nАдрес: 364049, г. Грозный, бульвар Дудаева, 17а',
    video: './videos/IMFIT.mp4',
  },
  'математика': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nСроки обучения магистратуры:\n• Очно-заочно: 2 года 4 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика– 39\n• Русский язык – 40\n• Физика- 39\nИзучаемые дисциплины:\n• Теория вероятностей и математическая статистика\n• Дифференциальная геометрия и топология\n• Правоведение\n• Функциональный анализ\n• Действительный анализ\n• Комплексный анализ(ТФКП)\n• Основы финансовой математики\n• Уравнения с частными производными\n• Физическая культура и спорт\n• Теория операторов и др.\nАдрес: 364049, г. Грозный, бульвар Дудаева, 17а',
    video: './videos/IMFIT.mp4',
  },
  'прикладная математика и информатика': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\n• Очно-заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика– 39\n• Русский язык – 40\n• Физика- 39\nИзучаемые дисциплины:\n• Правоведение\n• Компьютерные сети\n• Вычислительные машины системы и среды\n• Физическая культура и спорт\n• Прикладное программирование\n• Теория кодирования и криптография\n• Исследование операций теория игр\n• Методы оптимизации\n• Практикум по решению задач на ЭВМ\n• Web-программирование и др.\nАдрес: 364049, г. Грозный, бульвар Дудаева, 17а',
    video: './videos/IMFIT.mp4',
  },
  'программная инженерия': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика– 39\n• Русский язык – 40\n• Информатика- 44\nИзучаемые дисциплины:\n• Инженерная и компьютерная графика\n• Базы данных\n• Управление проектами\n• Физическая культура и спорт\n• Объективно-ориентированное программирование\n• Программирование на Python\n• Системы искусственного интеллекта и др.\nАдрес: 364049, г. Грозный, бульвар Дудаева, 17а',
    video: './videos/IMFIT.mp4',
  },
  'радиофизика': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\n• Очно-заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Очно-заочно: 2 года 4 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика– 39\n• Русский язык – 40\n• Физика- 39\nИзучаемые дисциплины:\n• Физические датчики\n• Квантовая радиофизика\n• Теория электрических цепей\n• Каналы передачи данных\n• Основы схемотехники\n• Физическая электроника и микроэлектроника\n• Физическая культура и спорт\n• Радиоэкологические измерения\n• Атомная и ядерная физика\n• Радиофизика и радиоэлектроника\n• Квантовая теория. Термодинамика и статистическая физика и др.\nАдрес: 364049, г. Грозный, бульвар Дудаева, 17а',
    video: './videos/IMFIT.mp4',
  },
  'физика': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Очно-заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Очно-заочно: 2 года 6 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика– 39\n• Русский язык – 40\n• Физика- 39\nИзучаемые дисциплины:\n• Электродинамика\n• Квантовая теория\n• Спецпрактикум\n• Лабораторный практикум\n• Общий физический практикум\n• Физическая культура и спорт\n• Физика и технология полупроводников\n• Атомная и ядерная физика\n• Современные нанотехнологии и наноматериалы и др.\nАдрес: 364049, г. Грозный, бульвар Дудаева, 17а',
    video: './videos/IMFIT.mp4',
  },
  'менеджмент': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения:\n• Очно: 4 года\n• Заочно: 5 лет\n• Очно-заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Заочно: 2 года 4 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика – 39\n• Русский язык – 40\n• Обществознание – 45\nИзучаемые дисциплины:\n• Управление персоналом\n• Консалтинг предпринимательства и бизнеса\n• Физическая культура\n• Система управления региональным развитием\n• Исследование систем управления\n• Финансовый менеджмент\n• Теория менеджмента: Организационное поведение\n• Экономика и управление производством и др.\nАдрес: 364049, г. Грозный, улица Субры Кишиевой, 33',
    video: './videos/GOSUD.mp4',
  },
  'управление персоналом': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения:\n• Очно: 4 года\n• Очно-заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Математика – 39\n• Русский язык – 40\n• Обществознание – 45\nИзучаемые дисциплины:\n• Исследование систем управления\n• Управление электронным документооборотом\n• Финансовый менеджмент\n• Теория менеджмента: Организационное поведение\n• Экономика и управление производством\n• Системы обучения персонала\n• Технологическая (проектно-технологическая) практика и др.\nАдрес: 364049, г. Грозный, улица Субры Кишиевой, 33',
    video: './videos/GOSUD.mp4',
  },
  'стоматология': {
    text: 'Уровень образования:\n • Специалитет\nСроки обучения:\n• Очно: 6 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Химия – 39\n• Биология– 39\n• Русский язык – 40\nИзучаемые дисциплины:\n• Функциональная диагностика\n• Судебная медицина\n• Госпитальная педиатрия\n• Неврология, медицинская генетика, нейрохирургия\n• Внутренние болезни\n• Имплантология и реконструктивная хирургия полости рта\n• Челюстно-лицевая хирургия\n• Пародонтология, геронтостоматология и заболевания\n• Гиатология и др.\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/ALL.mp4',
  },
  'педиатрия': {
    text: 'Уровень образования:\n • Специалитет\nСроки обучения:\n• Очно: 6 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Химия – 39\n• Биология– 39\n• Русский язык – 40\nИзучаемые дисциплины:\n• Дерматовенерология\n• Оториноларингология\n• Факультетская терапия, профессиональные болезни\n• Пропедевтика детских болезней\n• Топографическая анатомия и оперативная хирургия\n• Неврология, медицинская генетика, нейрохирургия\n• Факультетская хирургия, урология\n• Стоматология и др.\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/ALL.mp4',
  },
  'зарубежное регионоведение': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• История – 35\n• Русский язык – 40\n• Обществознание - 45\nИзучаемые дисциплины:\n• Всеобщая история\n• История и теория международных отношений\n• Физическая культура\n• История арабских стран\n• Ислам во внутренней и внешней политике арабских стран: последняя треть XX - начала XXI века)\n• Политология\n• Ислам в истории и политике стран Ближнего востока\n• Первый иностранный язык (арабский/турецкий)\n• Ближний Восток в международных отношениях в XX-XXI веков\n• Саудовская Аравия в истории и политике стран Ближнего Востока и др.\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/HISTORY.mp4',
  },
  'культурология': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• История – 35\n• Русский язык – 40\n• Обществознание - 45\nИзучаемые дисциплины:\n• История культуры\n• История музыкальной культуры\n• История искусств\n• Физическая культура\n• История костюма\n• Массовая культура\n• История театра\n• Средневековая архитектура Чечни\n• Культура массовых коммуникаций\n• Новая и новейшая история\n• Социология культуры\n• Цивилизация древнего Востока\n• Практикум ЮНЕСКО по нематериальному культурному наследию\n• Мультикультурная модель Западной Европы и др.\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/HISTORY.mp4',
  },
  'музеология и охрана объектов культурного и природного наследия': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• История – 35\n• Русский язык – 40\n• Обществознание - 45\nИзучаемые дисциплины:\n• История музейного дела России\n• Художественные музеи\n• История искусств\n• Физическая культура\n• Комплектование, учет и хранение музейных фондов\n• Новая и новейшая история\n• Охрана культурного и природного наследия в России и за рубежом\n• История ЧР и др.\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/HISTORY.mp4',
  },
  'психология': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Очно-заочно: 4 года 6 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Литература – 40\n• Русский язык – 40\nИзучаемые дисциплины:\n• Социальная психология\n• Психодиагностика\n• Психология развития и возрастная психология\n• Психология труда, инженерная психология и эргономика\n• Психология личности: с практикумом\n• Психология семьи\n• Общая психология (с практикумом)\n• Методологические основы психологии и др.\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/FILOLOG.mp4',
  },
  'психолого-педагогическое образование': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Заочно: 2 года 4 месяца\n• Очно-заочно: 2 года 4 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Биология – 39\n• Русский язык – 40\n• Обществознание – 45\nИзучаемые дисциплины:\n• Психологическая служба в образовании\n• Специальная психология и специальная педагогика\n• Основы психологии семьи и семейных конфликтов\n• Физическая культура\n• Психолого-педагогическая диагностика\n• Клиническая психология детей и подростков\n• Этнопсихология и этнопедагогика\n• Психолого-педагогические технологии работы с детьми дошкольного, младшего школьного и подросткового возраста\n• Психолого-педагогическое взаимодействие участников образовательного процесса\n• Психология развития и возрастная психология и др.\nАдрес: 364024, г. Грозный, ул. А. Шерипова, 32',
    video: './videos/FILOLOG.mp4',
  },
  'география': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nСроки обучения магистратуры:\n• Очно-заочно: 2 года 4 месяцев\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• География – 40\n• Русский язык – 40\n• Математика – 39\nИзучаемые дисциплины:\n• Методика преподавания географии\n• Проблемы опустынивания ландшафтов\n• Карстоведение\n• Геофизика ландшафтов\n• Физическая география Чеченской Республики\n• Основы экономической и социальной географии России и мира\n• Физическая культура\n• Основы физической географии России и мира\n• География населения и геоурбанистика\n• Портфолио и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/ALL.mp4',
  },
  'гидрометеорология': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• География – 40\n• Русский язык – 40\n• Математика – 39\nИзучаемые дисциплины:\n• Гидрология\n• Картография с основами топографии\n• Методы измерения углеродного секвестрационного потенциала территорий\n• Климатическое моделирование\n• Техника и методы метеорологических измерений\n• Мониторинг и прогнозирование климатологических изменений\n• Статистические методы обработки данных метеорологических измерений и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/ALL.mp4',
  },
  'дизайн архитектурной среды': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно-заочно: 6 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• География – 40\n• Русский язык – 40\n• Математика – 39\nИзучаемые дисциплины:\n• Гидрология\n• Картография с основами топографии\n• Методы измерения углеродного секвестрационного потенциала территорий\n• Климатическое моделирование\n• Техника и методы метеорологических измерений\n• Мониторинг и прогнозирование климатологических изменений\n• Статистические методы обработки данных метеорологических измерений и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/ALL.mp4',
  },
  'картография и геоинформатика': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• География – 40\n• Русский язык – 40\n• Математика – 39\nИзучаемые дисциплины:\n• Картография\n• Ландшафтное картографирование\n• Комплексный кадастр\n• Компьютерная графика и обработка изображений\n• Аэрокосмические методы исследования Земли\n• Технологии издания карт и атласов и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/ALL.mp4',
  },
  'нефтегазовое дело': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Заочно: 5 лет\n• Очно-заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Химия – 39\n• Русский язык – 40\n• Математика – 39\nИзучаемые дисциплины:\n• Основы экологии\n• Иностранный язык\n• Химия\n• Экономика\n• Материаловедение и технология конструкционных материалов\n• Технологии наклонно-направленного и горизонтального бурения скважин\n• Геология нефти и газа\n• Геоинформатика и основы ГИС\n• Программные продукты геонавигационного сопровождения бурения скважин и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/ALL.mp4',
  },
  'химия': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Обществознание – 45\n• Русский язык – 40\n• Математика – 39\nИзучаемые дисциплины:\n• Иностранный язык (второй)\n• Элективные курсы по физической культуре и спорту\n• Физическая культура и спорт\n• Здания и инженерные системы гостиниц\n• Организация деятельности структурных подразделений гостиничных предприятий\n• Организация деятельности структурных подразделений предприятий питания\n• Организация предоставления фитнес-услуг\n• Управление персоналом предприятия индустрии гостеприимства\n• Продвижение и реализация гостиничного продукта и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/BIOCHEM.mp4',
  },
  'экология и природопользование': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Очно-заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Заочно: 2 года 4 месяца\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Биология – 39\n• Русский язык – 40\n• Обществознание – 45\nИзучаемые дисциплины:\n• Физическая культура\n• Геохимия окружающей среды\n• Учение о биосфере\n• Региональные проблемы природопользования\n• Устойчивое развитие\n• Геоэкологическое проектирование и экспертиза\n• Использование природных ресурсов и их охрана\n• Биоразнообразие\n• Экология почв с основами почвоведения\n• Охрана окружающей среды и здоровье человека\n• Охрана окружающей среды при добыче, переработке, хранении, и транспортировке нефти\n• Экологический мониторинг и производственный контроль\n• Утилизация, переработка и захоронение отходов потребления и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/ALL.mp4',
  },
  'ветеринарно-санитарная экспертиза': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Биология – 39\n• Русский язык – 40\n• Математика – 39\nИзучаемые дисциплины:\n• Ветеринарная микробиология и микология\n• Учебная практика (общепрофессиональная практика)\n• Физическая культура и спорт\n• Чеченская традиционная культура и этика\n• Анатомия и физиология животных\n• История Чеченской республики\n• Русский язык и культура речи\n• Иностранный язык\n• Основы военной подготовки и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/AGROTECH.mp4',
  },
  'зоотехния': {
    text: 'Уровень образования:\n • Бакалавриат\n• Магистратура\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nСроки обучения магистратуры:\n• Очно: 2 года\n• Заочно: 2 года 4 месяца\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Биология – 39\n• Русский язык – 40\n• Математика – 39\nИзучаемые дисциплины:\n• Разведение сельскохозяйственных животных\n• Овцеводство и козоводство\n• Производственная практика (технологическая практика)\n• Скотоводство и технология производства говядины и молока\n• Молочное дело\n• Основы ветеринарии\n• Биотехника воспроизводства с основами акушерства\n• Технология интенсивного животноводства\n• Кролиководство и звероводство и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/AGROTECH.mp4',
  },
  'технология производства и переработки сельскохозяйственной продукции': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Биология – 39\n• Русский язык – 40\n• Математика – 39\nИзучаемые дисциплины:\n• Агрохимия\n• Сооружение и оборудование хранения продукции растениеводства и животноводства\n• Оборудование перерабатывающих производств\n• Основы научных исследований\n• Механизация и автоматизация технологических процессов в сельском хозяйстве\n• Сельскохозяйственная биотехнология\n• Технология возделывания овощей\n• Процессы и аппараты пищевых производств\n• Методы анализа качества и безопасности сельскохозяйственной продукции\n• Технология хранения зерна и зернопродуктов\n• Технология производства продукции растениеводства и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/AGROTECH.mp4',
  },
  'cадоводство': {
    text: 'Уровень образования:\n • Бакалавриат\nСроки обучения бакалавриата:\n• Очно: 4 года\n• Заочно: 5 лет\nПеречень документов для поступления:\n• Аттестат\n• Ксерокопия паспорта\n• Фотографии 4 шт размера 3х4\n• Ксерокопия снилса\nМинимальные баллы ЕГЭ:\n• Биология – 39\n• Русский язык – 40\n• Математика – 39\nИзучаемые дисциплины:\n• Биотехнология сельскохозяйственных растений\n• Плодоводство\n• Виноградарство\n• Физическая культура и спорт\n• Растениеводство\n• Регуляторы роста и развития растений в садоводстве\n• Технология производства ягодных культур\n• Селекция и семеноводство плодовых и овощных культур\n• Овощеводство открытого и защищенного грунта и др.\nАдрес: Грозный, Кампус, улица Льва Яшина, 31/1',
    video: './videos/AGROTECH.mp4',
  },
};
const processedMessages = new Set();

const cancelKeyboard = {
  reply_markup: JSON.stringify({
    keyboard: [['Отменить']],
    resize_keyboard: true,
    one_time_keyboard: true,
  }),
};

function startConversation(chatId) {
  const options = {
    reply_markup: JSON.stringify({
      keyboard: [['Информация'], ['Направление']],
      resize_keyboard: true,
      one_time_keyboard: true,
    }),
  };
  bot.sendMessage(chatId, 'Здравствуйте! Пожалуйста, выберите одну из кнопок:', options);
}

bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id;
  startConversation(chatId);
});

bot.on('message', msg => {
  const chatId = msg.chat.id;
  const messageId = msg.message_id;
  const chatMessageKey = `${chatId}_${messageId}`;

  if (processedMessages.has(chatMessageKey)) {
    return;
  }

  // Добавляем сообщение в множество обработанных сообщений
  processedMessages.add(chatMessageKey);

  if (msg.text) {
    switch (msg.text) {
      case 'Информация':
        bot.sendMessage(
          chatId,
          'Это бот для предоставления информации о факультетах.',
          cancelKeyboard
        );
        break;
      case 'Направление':
        bot.sendMessage(
          chatId,
          'Введите название направления, чтобы получить о нем информацию.',
          cancelKeyboard
        );
        break;
      case 'Отменить':
        startConversation(chatId);
        break;
      default:
        const directionName = msg.text.toLowerCase();
        const direction = directions[directionName];
        if (direction) {
          bot.sendMessage(chatId, direction.text, cancelKeyboard);
          if (direction.video) {
            bot.sendVideo(chatId, direction.video, { width: 1280, height: 720 }); // соотношение сторон 16:9
          }
        } else {
          bot.sendMessage(
            chatId,
            'Извините, я не нашел информацию по вашему запросу.',
            cancelKeyboard
          );
        }
        break;
    }
  }
});
