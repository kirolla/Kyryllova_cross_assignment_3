CycleTrack - React Native Components

Аналіз дизайну

У процесі аналізу дизайну мобільного застосунку CycleTrack (жіночий календар) було визначено 6 ключових UI-компонентів, які повторюються на різних екранах: InputField (поле вводу), PrimaryButton (основна рожева кнопка #E91E63), OutlineButton (рамкова кнопка), Card (картка-контейнер з варіантами фону), Toggle (перемикач нагадувань), Checkbox (чекбокс для симптомів).

Структура проєкту

CycleTrack/
├── App.tsx
├── index.js
├── components/
│ ├── InputField.tsx
│ ├── PrimaryButton.tsx
│ ├── OutlineButton.tsx
│ ├── Card.tsx
│ ├── Toggle.tsx
│ └── Checkbox.tsx
├── constants/
│ ├── colors.ts
│ ├── sizes.ts
│ └── typography.ts
└── screenshots/

Завдання 2: Створення компонентів

Список компонентів: InputField (пропси: placeholder, value, onChangeText, secureTextEntry); PrimaryButton (пропси: title, onPress, disabled); OutlineButton (пропси: title, onPress, disabled); Card (пропси: children, variant); Toggle (пропси: value, onValueChange); Checkbox (пропси: label, checked, onPress).

Використані технології: View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet.create(), Flexbox, Platform.select() / Platform.OS.

Завдання 3: Адаптивність

Використані підходи: useWindowDimensions для динамічних розмірів, ширина компонентів 85-90% від ширини екрану (макс. 400px), підтримка горизонтальної орієнтації, платформозалежні тіні. Адаптовані компоненти: InputField (85%, макс 400px), PrimaryButton (85%, макс 400px), OutlineButton (85%, макс 400px), Card (90%, макс 400px).

Завдання 4: Додаткові вимоги

Модульність: кожен компонент в окремому файлі. Пропси: всі компоненти приймають динамічні дані через пропси. Константи: створено файли colors.ts (кольори: #E91E63, #FCE4EC, #E0E0E0, #212121, #666666), sizes.ts (розміри та відступи), typography.ts (розміри шрифтів: 32px, 22px, 18px, 16px, 14px, 12px). Чистота коду: відсутні магічні числа, додані коментарі, зрозумілі назви.

Скріншоти

Всі компоненти: ./screenshots/Simulator Screenshot - iPhone 17 Pro1.png
./screenshots/Simulator Screenshot - iPhone 17 Pro2.png

Підтримувані пристрої

iPhone (всі моделі), Android (різні роздільності), планшети (iPad, Android Tablets), горизонтальна орієнтація, вертикальна орієнтація.