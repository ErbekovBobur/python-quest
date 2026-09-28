/* ===== helpers for modules 6-30 (output normalizer + required-construct check) ===== */
function _pqN(out){ return String(out==null?"":out).replace(/\r/g,"").split("\n").map(function(s){return s.trim();}).join("\n").trim(); }
function _pqR(v, pats){ var src=(v&&v.__src)||""; return pats.every(function(p){ return new RegExp(p).test(src); }); }

/* ===== MODULE 6: Loop Jungle — while ===== */
MISSIONS[6] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первый виток",
    story:"Ты входишь в Loop Jungle: лианы-циклы обвили деревья, а вирус Null заставил их повторяться без конца. Лиана-бот: «Повторяй команду, пока условие верно!»",
    objective:"Выведи числа 0, 1, 2 циклом while. Вывод: 0 | 1 | 2",
    blocks:["while i < 3:", "i = 0", "i += 1", "print(i)"],
    targetCode:"i = 0\nwhile i < 3:\n    print(i)\n    i += 1",
    check:(out,v)=> _pqN(out)==="0\n1\n2",
    scene:"jungle",
    hints:["Цикл живёт, пока условие истинно. Внутри увеличивай i (кнопка ⇥ — отступ).", "Блок за блоком: i = 0 → while i < 3: → print(i) …", "Готовый код:\ni = 0\nwhile i < 3:\n    print(i)\n    i += 1"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Обратный отсчёт",
    story:"Мартышка Цикл запускает ракету из бананов.",
    objective:"Отсчитай 3, 2, 1 и выведи Go! Вывод: 3 | 2 | 1 | Go!",
    blocks:["print('Go!')", "n -= 1", "print(n)", "n = 3", "while n > 0:"],
    targetCode:"n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nprint('Go!')",
    check:(out,v)=> _pqN(out)==="3\n2\n1\nGo!",
    scene:"jungle",
    hints:["Счётчик уменьшается. print('Go!') стоит после цикла — без отступа.", "Блок за блоком: n = 3 → while n > 0: → print(n) …", "Готовый код:\nn = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nprint('Go!')"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Сбор бананов",
    story:"Нужно сложить все числа от 1 до 5.",
    objective:"Накопи сумму чисел 1..5 в total и выведи её. Вывод: 15",
    blocks:["total += n", "n = 1", "total = 0", "n += 1", "print(total)", "while n <= 5:"],
    targetCode:"total = 0\nn = 1\nwhile n <= 5:\n    total += n\n    n += 1\nprint(total)",
    check:(out,v)=> _pqN(out)==="15",
    scene:"jungle",
    hints:["total накапливает сумму, n — счётчик.", "Блок за блоком: total = 0 → n = 1 → while n <= 5: …", "Готовый код:\ntotal = 0\nn = 1\nwhile n <= 5:\n    total += n\n    n += 1\nprint(total)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Удвоитель",
    story:"Лиана-бот запускает удвоитель. Что он выдаст? Код: x = 1 ⏎ while x < 20: ⏎ ⇥ x *= 2 ⏎ print(x)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(32)", "print(64)", "print(16)", "print(20)"],
    targetCode:"print(32)",
    check:(out,v)=> _pqN(out)==="32",
    scene:"jungle",
    hints:["Записывай x после каждого шага: 1, 2, 4…", "Запиши значения переменных после каждого шага.", "Ответ: print(32)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Чётный мост",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Мост открывается, если назвать все чётные числа до 10.",
    objective:"Выведи чётные числа от 2 до 10. Вывод: 2 | 4 | 6 … (5 строк)",
    blocks:["i = 2", "print(i)", "i += 2", "while i <= 10:"],
    targetCode:"i = 2\nwhile i <= 10:\n    print(i)\n    i += 2",
    check:(out,v)=> _pqN(out)==="2\n4\n6\n8\n10",
    scene:"jungle",
    hints:["Шаг счётчика может быть больше 1.", "Блок за блоком: i = 2 → while i <= 10: → print(i) …", "Готовый код:\ni = 2\nwhile i <= 10:\n    print(i)\n    i += 2"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Энергия лианы",
    story:"Энергия падает на 10 за шаг, пока не дойдёт до 20.",
    objective:"Уменьшай energy, пока она больше 20, и выведи результат. Вывод: 20",
    blocks:["energy -= 10", "while energy > 20:", "print(energy)", "energy = 50"],
    targetCode:"energy = 50\nwhile energy > 20:\n    energy -= 10\nprint(energy)",
    check:(out,v)=> _pqN(out)==="20",
    scene:"jungle",
    hints:["Цикл остановится сам, когда условие станет ложным.", "Блок за блоком: energy = 50 → while energy > 20: → energy -= 10 …", "Готовый код:\nenergy = 50\nwhile energy > 20:\n    energy -= 10\nprint(energy)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Забытый шаг",
    story:"Цикл завис: счётчик никогда не растёт! Сломанный код: i = 0 ⏎ while i < 3: ⏎ ⇥ print(i)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 0 | 1 | 2",
    blocks:["i = 0", "while i < 3:", "i += 1", "i -= 1", "print(i)"],
    targetCode:"i = 0\nwhile i < 3:\n    print(i)\n    i += 1",
    check:(out,v)=> _pqN(out)==="0\n1\n2",
    scene:"jungle",
    hints:["Внутри цикла кто-то должен менять i.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ni = 0\nwhile i < 3:\n    print(i)\n    i += 1"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Нечётные тропы",
    story:"Тропа пропускает только нечётные номера до 7.",
    objective:"Выведи нечётные числа от 1 до 7 (if внутри while). Вывод: 1 | 3 | 5 | 7",
    blocks:["i = 1", "if i % 2 == 1:", "i += 1", "print(i)", "while i <= 7:"],
    targetCode:"i = 1\nwhile i <= 7:\n    if i % 2 == 1:\n        print(i)\n    i += 1",
    check:(out,v)=> _pqN(out)==="1\n3\n5\n7",
    scene:"jungle",
    hints:["Проверь остаток от деления на 2 через if.", "Блок за блоком: i = 1 → while i <= 7: → if i % 2 == 1: …", "Готовый код:\ni = 1\nwhile i <= 7:\n    if i % 2 == 1:\n        print(i)\n    i += 1"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Аварийный выход",
    story:"Копилка растёт по 5 монет. Как только станет 20 — стоп!",
    objective:"Останови цикл командой break при coins >= 20. Вывод: 20",
    blocks:["coins = 0", "if coins >= 20:", "coins += 5", "while True:", "print(coins)", "break"],
    targetCode:"coins = 0\nwhile True:\n    coins += 5\n    if coins >= 20:\n        break\nprint(coins)",
    check:(out,v)=> _pqN(out)==="20",
    scene:"jungle",
    hints:["while True — бесконечный цикл, break его прерывает.", "Блок за блоком: coins = 0 → while True: → coins += 5 …", "Готовый код:\ncoins = 0\nwhile True:\n    coins += 5\n    if coins >= 20:\n        break\nprint(coins)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Волны Змея",
    story:"Змей Бесконечность преграждает путь! Каждая волна отнимает 35 HP. Сколько волн выдержит герой?",
    objective:"Считай волны, пока hp больше нуля. Вывод: Waves: 3",
    blocks:["hp -= 35", "print('Waves:', wave)", "hp = 100", "wave += 1", "wave = 0", "while hp > 0:"],
    targetCode:"hp = 100\nwave = 0\nwhile hp > 0:\n    hp -= 35\n    wave += 1\nprint('Waves:', wave)",
    check:(out,v)=> _pqN(out)==="Waves: 3",
    scene:"jungle-miniboss",
    hints:["Считай волны отдельной переменной.", "Блок за блоком: hp = 100 → wave = 0 → while hp > 0: …", "Готовый код:\nhp = 100\nwave = 0\nwhile hp > 0:\n    hp -= 35\n    wave += 1\nprint('Waves:', wave)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Пропуск шага",
    story:"Обезьяна пропускает число 3. Что получится в s? Код: i = 0 ⏎ s = 0 ⏎ while i < 6: ⏎ ⇥ i += 1 ⏎ ⇥ if i == 3: ⏎ ⇥ ⇥ continue ⏎ ⇥ s += i ⏎ print(s)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(12)", "print(21)", "print(18)", "print(15)"],
    targetCode:"print(18)",
    check:(out,v)=> _pqN(out)==="18",
    scene:"jungle",
    hints:["continue сразу начинает новый круг.", "Запиши значения переменных после каждого шага.", "Ответ: print(18)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Не в ту сторону",
    story:"Отсчёт должен идти вниз, а лиана растёт вверх. Сломанный код: n = 3 ⏎ while n > 0: ⏎ ⇥ print(n) ⏎ ⇥ n += 1  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 3 | 2 | 1",
    blocks:["n -= 1", "n = 3", "print(n)", "while n > 0:", "n += 1"],
    targetCode:"n = 3\nwhile n > 0:\n    print(n)\n    n -= 1",
    check:(out,v)=> _pqN(out)==="3\n2\n1",
    scene:"jungle",
    hints:["Счётчик должен приближаться к условию остановки.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nn = 3\nwhile n > 0:\n    print(n)\n    n -= 1"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Копилка на самокат",
    story:"Проект: копи по 12 монет в день, пока не наберётся 50.",
    objective:"Посчитай, сколько дней нужно копить. Вывод: Days: 5",
    blocks:["coins = 0", "coins += 12", "while coins < 50:", "days = 0", "days += 1", "print('Days:', days)"],
    targetCode:"coins = 0\ndays = 0\nwhile coins < 50:\n    coins += 12\n    days += 1\nprint('Days:', days)",
    check:(out,v)=> _pqN(out)==="Days: 5",
    scene:"jungle",
    hints:["Считай дни в отдельной переменной.", "Блок за блоком: coins = 0 → days = 0 → while coins < 50: …", "Готовый код:\ncoins = 0\ndays = 0\nwhile coins < 50:\n    coins += 12\n    days += 1\nprint('Days:', days)"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Лимит от стража",
    story:"Страж вводит число — считай до него (input из мира 3).",
    objective:"Считай от 1 до введённого числа. Вывод: 1 | 2 | 3 | 4",
    blocks:["print(i)", "i = 1", "while i <= limit:", "limit = int(input())", "i += 1"],
    targetCode:"limit = int(input())\ni = 1\nwhile i <= limit:\n    print(i)\n    i += 1",
    check:(out,v)=> _pqN(out)==="1\n2\n3\n4",
    scene:"jungle",
    simInput:["4"],
    hints:["int(input()) превращает ввод в число.", "Блок за блоком: limit = int(input()) → i = 1 → while i <= limit: …", "Готовый код:\nlimit = int(input())\ni = 1\nwhile i <= limit:\n    print(i)\n    i += 1"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Поиск ключа",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Ключ спрятан под номером 7. Перебирай нечётные числа с 1.",
    objective:"Считай попытки, пока guess не станет равным 7. Вывод: Tries: 3",
    blocks:["guess += 2", "while guess != 7:", "guess = 1", "print('Tries:', tries)", "tries = 0", "tries += 1"],
    targetCode:"guess = 1\ntries = 0\nwhile guess != 7:\n    guess += 2\n    tries += 1\nprint('Tries:', tries)",
    check:(out,v)=> _pqN(out)==="Tries: 3",
    scene:"jungle",
    hints:["Условие цикла: пока guess != 7.", "Блок за блоком: guess = 1 → tries = 0 → while guess != 7: …", "Готовый код:\nguess = 1\ntries = 0\nwhile guess != 7:\n    guess += 2\n    tries += 1\nprint('Tries:', tries)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Таблица на 3",
    story:"Кто напишет таблицу умножения на 3 до 30?",
    objective:"Выведи 3, 6, 9, … 30 (10 чисел) циклом while. Вывод: 3 | 6 | 9 … (10 строк)",
    check:(out,v)=> _pqN(out)==="3\n6\n9\n12\n15\n18\n21\n24\n27\n30" && _pqR(v,["\\bwhile\\b"]),
    scene:"jungle",
    hints:["Умножай счётчик на 3 внутри print.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: n = 1 …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Ловушка вечности",
    story:"Цикл должен вывести 2, 4, 6, но он бесконечен. Сломанный код: i = 2 ⏎ while i != 7: ⏎ ⇥ print(i) ⏎ ⇥ i += 2  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 2 | 4 | 6",
    check:(out,v)=> _pqN(out)==="2\n4\n6" && _pqR(v,["\\bwhile\\b"]),
    scene:"jungle",
    hints:["i перепрыгнет 7 — измени условие.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: i = 2 …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Сумма цифр",
    story:"Змей шифрует ключ суммой цифр числа 472.",
    objective:"Найди сумму цифр числа 472 через while, % и //. Вывод: 13",
    check:(out,v)=> _pqN(out)==="13" && _pqR(v,["\\bwhile\\b", "%"]),
    scene:"jungle",
    hints:["Последняя цифра — n % 10, убрать её — n // 10.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: n = 472 …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Игровой цикл",
    story:"Герой и монстр бьют по очереди, пока оба живы.",
    objective:"hero=60, monster=45. Каждый раунд: монстр −20, герой −15, выведи Round N. В конце Hero wins (если monster <= 0) или Monster wins. Вывод: Round 1 | Round 2 | Round 3 | Hero wins",
    check:(out,v)=> _pqN(out)==="Round 1\nRound 2\nRound 3\nHero wins" && _pqR(v,["\\bwhile\\b", "\\band\\b"]),
    scene:"jungle",
    hints:["Условие цикла можно составить из двух через and.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: hero = 60 …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Гидра Loop",
    story:"Гидра Loop охраняет Ключ ядра №6! Победи Гидру в цикле! Победи — и часть цифровой карты снова заработает.",
    objective:"У Гидры hp=140. Каждый ход удар 30, но каждый 3-й ход — критический 50. После хода выведи Turn N hp H. В конце: Hydra defeated in N turns. Вывод: Turn 1 hp 110 | Turn 2 hp 80 | Turn 3 hp 30 … (5 строк)",
    check:(out,v)=> _pqN(out)==="Turn 1 hp 110\nTurn 2 hp 80\nTurn 3 hp 30\nTurn 4 hp 0\nHydra defeated in 4 turns" && _pqR(v,["\\bwhile\\b", "%"]),
    scene:"jungle-boss",
    hints:["while, if/else, счётчик ходов и %.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: while, if/else, счётчик ходов и %."]
  }
];

/* ===== MODULE 7: Range Rapids — for ===== */
MISSIONS[7] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первый шаг по реке",
    story:"Ты приплываешь к Range Rapids: цифровая река разлилась потоками чисел, а вирус Null сломал все её счётчики. Капитан Диапазон: «Цикл for сам считает за тебя!»",
    objective:"Выведи 0, 1, 2, 3 с помощью for и range(4). Вывод: 0 | 1 | 2 | 3",
    blocks:["print(i)", "for i in range(4):"],
    targetCode:"for i in range(4):\n    print(i)",
    check:(out,v)=> _pqN(out)==="0\n1\n2\n3",
    scene:"rapids",
    hints:["range(4) даёт числа 0, 1, 2, 3.", "Блок за блоком: for i in range(4): → print(i)", "Готовый код:\nfor i in range(4):\n    print(i)"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"От и до",
    story:"Из воды торчат мели с номерами 1–5.",
    objective:"Выведи числа от 1 до 5 через range(1, 6). Вывод: 1 | 2 | 3 … (5 строк)",
    blocks:["print(i)", "for i in range(1, 6):"],
    targetCode:"for i in range(1, 6):\n    print(i)",
    check:(out,v)=> _pqN(out)==="1\n2\n3\n4\n5",
    scene:"rapids",
    hints:["Правая граница range в перебор не входит.", "Блок за блоком: for i in range(1, 6): → print(i)", "Готовый код:\nfor i in range(1, 6):\n    print(i)"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Сквозь тростник",
    story:"Тростник растёт через одного.",
    objective:"Выведи 2, 4, 6, 8, 10 — используй шаг в range. Вывод: 2 | 4 | 6 … (5 строк)",
    blocks:["print(i)", "for i in range(2, 11, 2):"],
    targetCode:"for i in range(2, 11, 2):\n    print(i)",
    check:(out,v)=> _pqN(out)==="2\n4\n6\n8\n10",
    scene:"rapids",
    hints:["Третье число в range — это шаг.", "Блок за блоком: for i in range(2, 11, 2): → print(i)", "Готовый код:\nfor i in range(2, 11, 2):\n    print(i)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Сумма течений",
    story:"Река суммирует числа. Что получится? Код: total = 0 ⏎ for i in range(1, 5): ⏎ ⇥ total += i ⏎ print(total)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(4)", "print(10)", "print(15)", "print(6)"],
    targetCode:"print(10)",
    check:(out,v)=> _pqN(out)==="10",
    scene:"rapids",
    hints:["Сложи 1+2+3+4.", "Запиши значения переменных после каждого шага.", "Ответ: print(10)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Обратный сплав",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Плыви против течения!",
    objective:"Выведи 5, 4, 3, 2, 1 — шаг отрицательный. Вывод: 5 | 4 | 3 … (5 строк)",
    blocks:["for i in range(5, 0, -1):", "print(i)"],
    targetCode:"for i in range(5, 0, -1):\n    print(i)",
    check:(out,v)=> _pqN(out)==="5\n4\n3\n2\n1",
    scene:"rapids",
    hints:["Шаг -1 идёт вниз.", "Блок за блоком: for i in range(5, 0, -1): → print(i)", "Готовый код:\nfor i in range(5, 0, -1):\n    print(i)"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Имена русалок",
    story:"Русалка шепчет имена по очереди.",
    objective:"Пройди for по спискам имён и поздоровайся с каждым. Вывод: Hi Ali | Hi Vera | Hi Omar",
    blocks:["for name in ['Ali', 'Vera', 'Omar']:", "print('Hi', name)"],
    targetCode:"for name in ['Ali', 'Vera', 'Omar']:\n    print('Hi', name)",
    check:(out,v)=> _pqN(out)==="Hi Ali\nHi Vera\nHi Omar",
    scene:"rapids",
    hints:["for берёт элементы по очереди.", "Блок за блоком: for name in ['Ali', 'Vera'… → print('Hi', name)", "Готовый код:\nfor name in ['Ali', 'Vera', 'Omar']:\n    print('Hi', name)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Буквы цепочкой",
    story:"Слово — тоже цепочка символов.",
    objective:"Выведи каждую букву слова CODE на новой строке. Вывод: C | O | D | E",
    blocks:["for ch in 'CODE':", "print(ch)"],
    targetCode:"for ch in 'CODE':\n    print(ch)",
    check:(out,v)=> _pqN(out)==="C\nO\nD\nE",
    scene:"rapids",
    hints:["for умеет ходить по буквам строки.", "Блок за блоком: for ch in 'CODE': → print(ch)", "Готовый код:\nfor ch in 'CODE':\n    print(ch)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Потерянный берег",
    story:"Нужно 1, 2, 3, но последнее число потерялось. Сломанный код: for i in range(1, 3): ⏎ ⇥ print(i)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 1 | 2 | 3",
    blocks:["for i in range(1, 4):", "for i in range(1, 3):", "print(i)"],
    targetCode:"for i in range(1, 4):\n    print(i)",
    check:(out,v)=> _pqN(out)==="1\n2\n3",
    scene:"rapids",
    hints:["Правая граница range не входит в перебор.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nfor i in range(1, 4):\n    print(i)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Чёт и нечёт",
    story:"Подпиши числа 1–4: чётное или нечётное.",
    objective:"Для каждого числа выведи even или odd (if/else внутри for). Вывод: 1 odd | 2 even | 3 odd | 4 even",
    blocks:["for i in range(1, 5):", "if i % 2 == 0:", "print(i, 'odd')", "else:", "print(i, 'even')"],
    targetCode:"for i in range(1, 5):\n    if i % 2 == 0:\n        print(i, 'even')\n    else:\n        print(i, 'odd')",
    check:(out,v)=> _pqN(out)==="1 odd\n2 even\n3 odd\n4 even",
    scene:"rapids",
    hints:["Комбинируй for с if/else из мира 5.", "Блок за блоком: for i in range(1, 5): → if i % 2 == 0: → print(i, 'even') …", "Готовый код:\nfor i in range(1, 5):\n    if i % 2 == 0:\n        print(i, 'even')\n    else:\n        print(i, 'odd')"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Счётчик водоворота",
    story:"Водоворот-Счётчик преграждает путь! Водоворот всасывает нечётные числа до 9.",
    objective:"Найди сумму нечётных чисел от 1 до 9. Вывод: Sum: 25",
    blocks:["print('Sum:', s)", "s += i", "for i in range(1, 10):", "if i % 2 == 1:", "s = 0"],
    targetCode:"s = 0\nfor i in range(1, 10):\n    if i % 2 == 1:\n        s += i\nprint('Sum:', s)",
    check:(out,v)=> _pqN(out)==="Sum: 25",
    scene:"rapids-miniboss",
    hints:["Накопитель s плюс проверка чётности.", "Блок за блоком: s = 0 → for i in range(1, 10): → if i % 2 == 1: …", "Готовый код:\ns = 0\nfor i in range(1, 10):\n    if i % 2 == 1:\n        s += i\nprint('Sum:', s)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Умножение реки",
    story:"Что выведет цикл? Код: p = 1 ⏎ for i in range(1, 5): ⏎ ⇥ p *= i ⏎ print(p)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(10)", "print(24)", "print(120)", "print(16)"],
    targetCode:"print(24)",
    check:(out,v)=> _pqN(out)==="24",
    scene:"rapids",
    hints:["p = 1·2·3·4.", "Запиши значения переменных после каждого шага.", "Ответ: print(24)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Лишний отступ",
    story:"Сумма нужна один раз — после цикла. Сломанный код: total = 0 ⏎ for i in range(3): ⏎ ⇥ total += i ⏎ ⇥ print(total)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 3",
    blocks:["print(i)", "total = 0", "total += i", "for i in range(3):", "print(total)"],
    targetCode:"total = 0\nfor i in range(3):\n    total += i\nprint(total)",
    check:(out,v)=> _pqN(out)==="3",
    scene:"rapids",
    hints:["Отступ определяет, что внутри цикла.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ntotal = 0\nfor i in range(3):\n    total += i\nprint(total)"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Таблица умножения",
    story:"Мини-проект: таблица на 4 до пяти.",
    objective:"Выведи строки вида 4 x 1 = 4 для i от 1 до 5. Вывод: 4 x 1 = 4 | 4 x 2 = 8 | 4 x 3 = 12 … (5 строк)",
    blocks:["print('4 x', i, '=', 4 * i)", "for i in range(1, 6):"],
    targetCode:"for i in range(1, 6):\n    print('4 x', i, '=', 4 * i)",
    check:(out,v)=> _pqN(out)==="4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20",
    scene:"rapids",
    hints:["print принимает несколько значений через запятую.", "Блок за блоком: for i in range(1, 6): → print('4 x', i, '=', 4 * i)", "Готовый код:\nfor i in range(1, 6):\n    print('4 x', i, '=', 4 * i)"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Гости по вводу",
    story:"Читаем число гостей и здороваемся с каждым.",
    objective:"Считай n и выведи Guest 1 … Guest n. Вывод: Guest 1 | Guest 2 | Guest 3",
    blocks:["for i in range(1, n + 1):", "print('Guest', i)", "n = int(input())"],
    targetCode:"n = int(input())\nfor i in range(1, n + 1):\n    print('Guest', i)",
    check:(out,v)=> _pqN(out)==="Guest 1\nGuest 2\nGuest 3",
    scene:"rapids",
    simInput:["3"],
    hints:["n + 1 включает последнее число.", "Блок за блоком: n = int(input()) → for i in range(1, n + 1): → print('Guest', i)", "Готовый код:\nn = int(input())\nfor i in range(1, n + 1):\n    print('Guest', i)"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Два цикла",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Собери всё: for и while в одной программе.",
    objective:"Сумма 1..5 через for, затем числа 1..3 через while. Вывод: For: 15 | While: 1 | While: 2 | While: 3",
    blocks:["k += 1", "total = 0", "print('While:', k)", "total += i", "k = 1", "for i in range(1, 6):", "while k <= 3:", "print('For:', total)"],
    targetCode:"total = 0\nfor i in range(1, 6):\n    total += i\nprint('For:', total)\nk = 1\nwhile k <= 3:\n    print('While:', k)\n    k += 1",
    check:(out,v)=> _pqN(out)==="For: 15\nWhile: 1\nWhile: 2\nWhile: 3",
    scene:"rapids",
    hints:["У каждого цикла свой счётчик.", "Блок за блоком: total = 0 → for i in range(1, 6): → total += i …", "Готовый код:\ntotal = 0\nfor i in range(1, 6):\n    total += i\nprint('For:', total)\nk = 1\nwhile k <= 3:\n    print('While:', k)\n    k += 1"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Квадраты",
    story:"Кракен показывает квадраты чисел.",
    objective:"Выведи квадраты чисел от 1 до 6, каждый на своей строке. Вывод: 1 | 4 | 9 … (6 строк)",
    check:(out,v)=> _pqN(out)==="1\n4\n9\n16\n25\n36" && _pqR(v,["\\bfor\\b"]),
    scene:"rapids",
    hints:["Квадрат — это i * i.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: for i in range(1, 7): …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Цикл-заика",
    story:"Программа выводит 1..5, а нужно 0..4. Сломанный код: for i in range(5): ⏎ ⇥ print(i + 1)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 0 | 1 | 2 … (5 строк)",
    check:(out,v)=> _pqN(out)==="0\n1\n2\n3\n4" && _pqR(v,["\\bfor\\b"]),
    scene:"rapids",
    hints:["range(5) уже даёт 0..4 — зачем +1?", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: for i in range(5): …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Средний урон",
    story:"Определи средний урон щупалец.",
    objective:"Для чисел 10, 20, 30, 40 посчитай сумму и среднее: выведи Sum: … и Avg: …. Вывод: Sum: 100 | Avg: 25.0",
    check:(out,v)=> _pqN(out)==="Sum: 100\nAvg: 25.0" && _pqR(v,["\\bfor\\b"]),
    scene:"rapids",
    hints:["Среднее = сумма / количество.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: total = 0 …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Фильтр волн",
    story:"Кракен ненавидит числа, кратные 3.",
    objective:"Выведи числа от 1 до 10, пропустив кратные 3. Вывод: 1 | 2 | 4 … (7 строк)",
    check:(out,v)=> _pqN(out)==="1\n2\n4\n5\n7\n8\n10" && _pqR(v,["\\bfor\\b"]),
    scene:"rapids",
    hints:["continue пропускает остаток тела цикла.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: for i in range(1, 11): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Кракен Итератор",
    story:"Кракен Итератор охраняет Ключ ядра №7! Щупальца бьют всё сильнее! Победи — и часть цифровой карты снова заработает.",
    objective:"Для i от 1 до 7: damage += i*10, выведи Hit i : damage. Как только damage >= 100 — выведи Kraken defeated и остановись (break). Вывод: Hit 1 : 10 | Hit 2 : 30 | Hit 3 : 60 … (5 строк)",
    check:(out,v)=> _pqN(out)==="Hit 1 : 10\nHit 2 : 30\nHit 3 : 60\nHit 4 : 100\nKraken defeated" && _pqR(v,["\\bfor\\b", "\\bbreak\\b"]),
    scene:"rapids-boss",
    hints:["for + накопитель + if + break.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: for + накопитель + if + break."]
  }
];

/* ===== MODULE 8: Nested Nexus — вложенные циклы ===== */
MISSIONS[8] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первая ячейка",
    story:"Ты попадаешь в Nested Nexus — паутину из циклов внутри циклов, которую свил вирус Null. Паучиха Матрица: «Цикл внутри цикла — так ткётся сеть.»",
    objective:"Для i от 1 до 2 и j от 1 до 2 выведи пары i j. Вывод: 1 1 | 1 2 | 2 1 | 2 2",
    blocks:["for i in range(1, 3):", "for j in range(1, 3):", "print(i, j)"],
    targetCode:"for i in range(1, 3):\n    for j in range(1, 3):\n        print(i, j)",
    check:(out,v)=> _pqN(out)==="1 1\n1 2\n2 1\n2 2",
    scene:"nexus",
    hints:["Внутренний цикл выполняется целиком на каждом шаге внешнего (два отступа ⇥).", "Блок за блоком: for i in range(1, 3): → for j in range(1, 3): → print(i, j)", "Готовый код:\nfor i in range(1, 3):\n    for j in range(1, 3):\n        print(i, j)"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Ряд звёзд",
    story:"Паутина растёт рядами звёзд.",
    objective:"Выведи пять звёзд в одну строку (end=''). Вывод: *****",
    blocks:["print('*', end='')", "for i in range(5):", "print()"],
    targetCode:"for i in range(5):\n    print('*', end='')\nprint()",
    check:(out,v)=> _pqN(out)==="*****",
    scene:"nexus",
    hints:["end='' не переносит строку.", "Блок за блоком: for i in range(5): → print('*', end='') → print()", "Готовый код:\nfor i in range(5):\n    print('*', end='')\nprint()"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Квадрат 3×3",
    story:"Ткачиха плетёт квадрат из звёзд.",
    objective:"Нарисуй квадрат 3×3 из символов *. Вывод: *** | *** | ***",
    blocks:["for i in range(3):", "print('*', end='')", "print()", "for j in range(3):"],
    targetCode:"for i in range(3):\n    for j in range(3):\n        print('*', end='')\n    print()",
    check:(out,v)=> _pqN(out)==="***\n***\n***",
    scene:"nexus",
    hints:["Перенос строки — после внутреннего цикла, но внутри внешнего.", "Блок за блоком: for i in range(3): → for j in range(3): → print('*', end='') …", "Готовый код:\nfor i in range(3):\n    for j in range(3):\n        print('*', end='')\n    print()"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Сколько шагов",
    story:"Сколько раз выполнится тело внутреннего цикла? Код: count = 0 ⏎ for i in range(3): ⏎ ⇥ for j in range(4): ⏎ ⇥ ⇥ count += 1 ⏎ print(count)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(7)", "print(12)", "print(3)", "print(4)"],
    targetCode:"print(12)",
    check:(out,v)=> _pqN(out)==="12",
    scene:"nexus",
    hints:["Внешний × внутренний.", "Запиши значения переменных после каждого шага.", "Ответ: print(12)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Треугольник",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Паутинка растёт с каждым рядом.",
    objective:"Нарисуй треугольник: в ряду i ровно i звёзд (i от 1 до 4). Вывод: * | ** | *** | ****",
    blocks:["for i in range(1, 5):", "print()", "print('*', end='')", "for j in range(i):"],
    targetCode:"for i in range(1, 5):\n    for j in range(i):\n        print('*', end='')\n    print()",
    check:(out,v)=> _pqN(out)==="*\n**\n***\n****",
    scene:"nexus",
    hints:["Длина внутреннего цикла зависит от i.", "Блок за блоком: for i in range(1, 5): → for j in range(i): → print('*', end='') …", "Готовый код:\nfor i in range(1, 5):\n    for j in range(i):\n        print('*', end='')\n    print()"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Таблица умножения",
    story:"Паучиха вышивает таблицу 3×3.",
    objective:"Выведи таблицу умножения 3×3, числа через пробел. Вывод: 1 2 3  | 2 4 6  | 3 6 9 ",
    blocks:["print()", "print(i * j, end=' ')", "for j in range(1, 4):", "for i in range(1, 4):"],
    targetCode:"for i in range(1, 4):\n    for j in range(1, 4):\n        print(i * j, end=' ')\n    print()",
    check:(out,v)=> _pqN(out)==="1 2 3\n2 4 6\n3 6 9",
    scene:"nexus",
    hints:["Выводи i * j и end=' '.", "Блок за блоком: for i in range(1, 4): → for j in range(1, 4): → print(i * j, end=' ') …", "Готовый код:\nfor i in range(1, 4):\n    for j in range(1, 4):\n        print(i * j, end=' ')\n    print()"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Сбитая строка",
    story:"Каждая строка должна заканчиваться переносом ровно один раз. Сломанный код: for i in range(2): ⏎ ⇥ for j in range(3): ⏎ ⇥ ⇥ print('#', end='') ⏎ ⇥ ⇥ print()  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: ### | ###",
    blocks:["print('#', end='')", "for j in range(3):", "print('#')", "for i in range(2):", "print()"],
    targetCode:"for i in range(2):\n    for j in range(3):\n        print('#', end='')\n    print()",
    check:(out,v)=> _pqN(out)==="###\n###",
    scene:"nexus",
    hints:["print() для переноса — на уровне внешнего цикла.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nfor i in range(2):\n    for j in range(3):\n        print('#', end='')\n    print()"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Пары координат",
    story:"Паук ползёт по клеткам сетки 2×3.",
    objective:"Выведи координаты клеток r c: ряды 0–1, колонки 0–2. Вывод: 0 0 | 0 1 | 0 2 … (6 строк)",
    blocks:["for c in range(3):", "for r in range(2):", "print(r, c)"],
    targetCode:"for r in range(2):\n    for c in range(3):\n        print(r, c)",
    check:(out,v)=> _pqN(out)==="0 0\n0 1\n0 2\n1 0\n1 1\n1 2",
    scene:"nexus",
    hints:["Внешний цикл — ряды, внутренний — колонки.", "Блок за блоком: for r in range(2): → for c in range(3): → print(r, c)", "Готовый код:\nfor r in range(2):\n    for c in range(3):\n        print(r, c)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Диагональ",
    story:"В сетке 4×4 диагональ светится.",
    objective:"Посчитай клетки, где i == j. Вывод: Diagonal: 4",
    blocks:["for j in range(4):", "print('Diagonal:', d)", "if i == j:", "d = 0", "for i in range(4):", "d += 1"],
    targetCode:"d = 0\nfor i in range(4):\n    for j in range(4):\n        if i == j:\n            d += 1\nprint('Diagonal:', d)",
    check:(out,v)=> _pqN(out)==="Diagonal: 4",
    scene:"nexus",
    hints:["if внутри двух циклов.", "Блок за блоком: d = 0 → for i in range(4): → for j in range(4): …", "Готовый код:\nd = 0\nfor i in range(4):\n    for j in range(4):\n        if i == j:\n            d += 1\nprint('Diagonal:', d)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Двойной Паук",
    story:"Двойной Паук преграждает путь! Двойной Паук прячется там, где i + j равно 4.",
    objective:"Посчитай пары (i, j) при 0 ≤ i, j ≤ 4 с суммой 4. Вывод: Pairs: 5",
    blocks:["if i + j == 4:", "for j in range(5):", "pairs += 1", "print('Pairs:', pairs)", "pairs = 0", "for i in range(5):"],
    targetCode:"pairs = 0\nfor i in range(5):\n    for j in range(5):\n        if i + j == 4:\n            pairs += 1\nprint('Pairs:', pairs)",
    check:(out,v)=> _pqN(out)==="Pairs: 5",
    scene:"nexus-miniboss",
    hints:["Счётчик pairs плюс if.", "Блок за блоком: pairs = 0 → for i in range(5): → for j in range(5): …", "Готовый код:\npairs = 0\nfor i in range(5):\n    for j in range(5):\n        if i + j == 4:\n            pairs += 1\nprint('Pairs:', pairs)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Внутри и снаружи",
    story:"Что выведет программа? Код: s = 0 ⏎ for i in range(1, 4): ⏎ ⇥ for j in range(1, 3): ⏎ ⇥ ⇥ s += i * j ⏎ print(s)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(9)", "print(12)", "print(18)", "print(6)"],
    targetCode:"print(18)",
    check:(out,v)=> _pqN(out)==="18",
    scene:"nexus",
    hints:["Для каждого i сложи i·1 + i·2.", "Запиши значения переменных после каждого шага.", "Ответ: print(18)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Не тот счётчик",
    story:"Треугольник должен расти, но ряды одинаковые. Сломанный код: for i in range(1, 4): ⏎ ⇥ for j in range(3): ⏎ ⇥ ⇥ print('*', end='') ⏎ ⇥ print()  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: * | ** | ***",
    blocks:["for j in range(3):", "print()", "for i in range(1, 4):", "print('*', end='')", "for j in range(i):"],
    targetCode:"for i in range(1, 4):\n    for j in range(i):\n        print('*', end='')\n    print()",
    check:(out,v)=> _pqN(out)==="*\n**\n***",
    scene:"nexus",
    hints:["Внутренний цикл должен зависеть от i.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nfor i in range(1, 4):\n    for j in range(i):\n        print('*', end='')\n    print()"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Шахматная доска",
    story:"Проект: шахматная доска 3×4 из # и точек.",
    objective:"Клетка # если (i + j) чётна, иначе точка. Вывод: #.#. | .#.# | #.#.",
    blocks:["for j in range(4):", "print()", "else:", "print('#', end='')", "if (i + j) % 2 == 0:", "print('.', end='')", "for i in range(3):"],
    targetCode:"for i in range(3):\n    for j in range(4):\n        if (i + j) % 2 == 0:\n            print('#', end='')\n        else:\n            print('.', end='')\n    print()",
    check:(out,v)=> _pqN(out)==="#.#.\n.#.#\n#.#.",
    scene:"nexus",
    hints:["Проверяй чётность суммы i + j.", "Блок за блоком: for i in range(3): → for j in range(4): → if (i + j) % 2 == 0: …", "Готовый код:\nfor i in range(3):\n    for j in range(4):\n        if (i + j) % 2 == 0:\n            print('#', end='')\n        else:\n            print('.', end='')\n    print()"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Размер по вводу",
    story:"Паучиха просит размер квадрата.",
    objective:"Считай n и нарисуй квадрат n×n из #. Вывод: ### | ### | ###",
    blocks:["for i in range(n):", "for j in range(n):", "n = int(input())", "print()", "print('#', end='')"],
    targetCode:"n = int(input())\nfor i in range(n):\n    for j in range(n):\n        print('#', end='')\n    print()",
    check:(out,v)=> _pqN(out)==="###\n###\n###",
    scene:"nexus",
    simInput:["3"],
    hints:["n берём из ввода.", "Блок за блоком: n = int(input()) → for i in range(n): → for j in range(n): …", "Готовый код:\nn = int(input())\nfor i in range(n):\n    for j in range(n):\n        print('#', end='')\n    print()"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Слои паутины",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Внешний while, внутренний for.",
    objective:"Пока row < 3, выведи ряд из row + 1 символов o. Вывод: o | oo | ooo",
    blocks:["print('o', end='')", "for k in range(row + 1):", "row += 1", "while row < 3:", "print()", "row = 0"],
    targetCode:"row = 0\nwhile row < 3:\n    for k in range(row + 1):\n        print('o', end='')\n    print()\n    row += 1",
    check:(out,v)=> _pqN(out)==="o\noo\nooo",
    scene:"nexus",
    hints:["for можно вложить в while.", "Блок за блоком: row = 0 → while row < 3: → for k in range(row + 1): …", "Готовый код:\nrow = 0\nwhile row < 3:\n    for k in range(row + 1):\n        print('o', end='')\n    print()\n    row += 1"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Числовая лесенка",
    story:"Королевская лестница чисел.",
    objective:"Ряд i содержит числа от 1 до i через пробел (i от 1 до 4). Вывод: 1  | 1 2  | 1 2 3  | 1 2 3 4 ",
    check:(out,v)=> _pqN(out)==="1\n1 2\n1 2 3\n1 2 3 4" && _pqR(v,["(for|while) [^\\n]*:\\n\\s+(for|while) "]),
    scene:"nexus",
    hints:["Внутренний цикл — до i включительно.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: for i in range(1, 5): …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Обрыв сети",
    story:"Нужен прямоугольник 2×3, а печатается одна строка. Сломанный код: for i in range(2): ⏎ ⇥ for j in range(3): ⏎ ⇥ ⇥ print('@', end='')  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: @@@ | @@@",
    check:(out,v)=> _pqN(out)==="@@@\n@@@" && _pqR(v,["(for|while) [^\\n]*:\\n\\s+(for|while) "]),
    scene:"nexus",
    hints:["Не хватает переноса строки после внутреннего цикла.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: for i in range(2): …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Таблица с условием",
    story:"Раскрась таблицу.",
    objective:"Для i, j от 1 до 3: P если i * j > 3, иначе p. Одна строка на каждое i, без пробелов. Вывод: ppp | pPP | pPP",
    check:(out,v)=> _pqN(out)==="ppp\npPP\npPP" && _pqR(v,["(for|while) [^\\n]*:\\n\\s+(for|while) "]),
    scene:"nexus",
    hints:["if/else внутри вложенных циклов.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: for i in range(1, 4): …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Поиск пары",
    story:"Найди пары, которые открывают замок.",
    objective:"Выведи все пары a b от 1 до 5, где a < b и a + b == 6. Вывод: 1 5 | 2 4",
    check:(out,v)=> _pqN(out)==="1 5\n2 4" && _pqR(v,["(for|while) [^\\n]*:\\n\\s+(for|while) "]),
    scene:"nexus",
    hints:["Условие с and.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: for a in range(1, 6): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Королева Матрица",
    story:"Королева Матрица охраняет Ключ ядра №8! Королева плетёт ёлку из звёзд! Победи — и часть цифровой карты снова заработает.",
    objective:"Для i от 1 до 4: (4 − i) точек, затем (2·i − 1) звёзд. В конце выведи Stars: общее число звёзд. Вывод: ...* | ..*** | .***** … (5 строк)",
    check:(out,v)=> _pqN(out)==="...*\n..***\n.*****\n*******\nStars: 16" && _pqR(v,["(for|while) [^\\n]*:\\n\\s+(for|while) "]),
    scene:"nexus-boss",
    hints:["Два внутренних цикла подряд и счётчик звёзд.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Два внутренних цикла подряд и счётчик звёзд."]
  }
];

/* ===== MODULE 9: String Harbor — строки ===== */
MISSIONS[9] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первое слово",
    story:"Ты причаливаешь в String Harbor: корабли-слова разбросало штормом, а вирус Null перепутал буквы. Писарь Кавычка: «Строка — цепочка букв в кавычках.»",
    objective:"Сохрани слово в переменную и выведи его. Вывод: harbor",
    blocks:["print(word)", "word = 'harbor'"],
    targetCode:"word = 'harbor'\nprint(word)",
    check:(out,v)=> _pqN(out)==="harbor",
    scene:"harbor",
    hints:["Строки записывают в кавычках.", "Блок за блоком: word = 'harbor' → print(word)", "Готовый код:\nword = 'harbor'\nprint(word)"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Склейка",
    story:"Две половинки вывески нужно склеить.",
    objective:"Склей 'Sea' и 'Port' через + и выведи. Вывод: SeaPort",
    blocks:["a = 'Sea'", "print(a + b)", "b = 'Port'"],
    targetCode:"a = 'Sea'\nb = 'Port'\nprint(a + b)",
    check:(out,v)=> _pqN(out)==="SeaPort",
    scene:"harbor",
    hints:["+ склеивает строки.", "Блок за блоком: a = 'Sea' → b = 'Port' → print(a + b)", "Готовый код:\na = 'Sea'\nb = 'Port'\nprint(a + b)"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Длина имени",
    story:"Сколько букв в названии корабля?",
    objective:"Выведи длину строки 'Titanic'. Вывод: 7",
    blocks:["print(len(ship))", "ship = 'Titanic'"],
    targetCode:"ship = 'Titanic'\nprint(len(ship))",
    check:(out,v)=> _pqN(out)==="7",
    scene:"harbor",
    hints:["len() считает символы.", "Блок за блоком: ship = 'Titanic' → print(len(ship))", "Готовый код:\nship = 'Titanic'\nprint(len(ship))"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Индекс буквы",
    story:"Какая буква стоит под номером 2? Код: w = 'PYTHON' ⏎ print(w[2])  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('T')", "print('Y')", "print('P')", "print('H')"],
    targetCode:"print('T')",
    check:(out,v)=> _pqN(out)==="T",
    scene:"harbor",
    hints:["Счёт индексов идёт с нуля.", "Запиши значения переменных после каждого шага.", "Ответ: print('T')"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Первая и последняя",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Причал принимает слово по первой и последней букве.",
    objective:"Выведи первую и последнюю буквы слова 'anchor'. Вывод: a | r",
    blocks:["w = 'anchor'", "print(w[-1])", "print(w[0])"],
    targetCode:"w = 'anchor'\nprint(w[0])\nprint(w[-1])",
    check:(out,v)=> _pqN(out)==="a\nr",
    scene:"harbor",
    hints:["Индекс -1 — последний символ.", "Блок за блоком: w = 'anchor' → print(w[0]) → print(w[-1])", "Готовый код:\nw = 'anchor'\nprint(w[0])\nprint(w[-1])"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Срез",
    story:"Из слова 'lighthouse' нужно вырезать 'light'.",
    objective:"Вырежи первые пять букв срезом. Вывод: light",
    blocks:["print(w[0:5])", "w = 'lighthouse'"],
    targetCode:"w = 'lighthouse'\nprint(w[0:5])",
    check:(out,v)=> _pqN(out)==="light",
    scene:"harbor",
    hints:["В срезе [a:b] позиция b не входит.", "Блок за блоком: w = 'lighthouse' → print(w[0:5])", "Готовый код:\nw = 'lighthouse'\nprint(w[0:5])"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Большие буквы",
    story:"Табличку нужно написать капсом.",
    objective:"Выведи 'dock 7' большими буквами, затем 'DOCK 7' маленькими. Вывод: DOCK 7 | dock 7",
    blocks:["print('DOCK 7'.lower())", "t = 'dock 7'", "print(t.upper())"],
    targetCode:"t = 'dock 7'\nprint(t.upper())\nprint('DOCK 7'.lower())",
    check:(out,v)=> _pqN(out)==="DOCK 7\ndock 7",
    scene:"harbor",
    hints:["upper() и lower() дают новую строку.", "Блок за блоком: t = 'dock 7' → print(t.upper()) → print('DOCK 7'.lower())", "Готовый код:\nt = 'dock 7'\nprint(t.upper())\nprint('DOCK 7'.lower())"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Забытый плюс",
    story:"Приветствие не склеилось. Сломанный код: name = 'Ali' ⏎ print('Hello, ' name)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: Hello, Ali",
    blocks:["name = 'Ali'", "print('Hello, ' + name)", "print('Hello, ' name)"],
    targetCode:"name = 'Ali'\nprint('Hello, ' + name)",
    check:(out,v)=> _pqN(out)==="Hello, Ali",
    scene:"harbor",
    hints:["Между строками нужен оператор.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nname = 'Ali'\nprint('Hello, ' + name)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Считаем гласные",
    story:"Сколько гласных в слове 'harbor'?",
    objective:"Пройди for по буквам и посчитай a, e, i, o, u. Вывод: Vowels: 2",
    blocks:["vowels += 1", "word = 'harbor'", "print('Vowels:', vowels)", "if ch in 'aeiou':", "vowels = 0", "for ch in word:"],
    targetCode:"word = 'harbor'\nvowels = 0\nfor ch in word:\n    if ch in 'aeiou':\n        vowels += 1\nprint('Vowels:', vowels)",
    check:(out,v)=> _pqN(out)==="Vowels: 2",
    scene:"harbor",
    hints:["in проверяет вхождение буквы в строку.", "Блок за блоком: word = 'harbor' → vowels = 0 → for ch in word: …", "Готовый код:\nword = 'harbor'\nvowels = 0\nfor ch in word:\n    if ch in 'aeiou':\n        vowels += 1\nprint('Vowels:', vowels)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Призрак Опечатки",
    story:"Призрак Опечатки преграждает путь! Призрак прячется в слове: замени все x на e.",
    objective:"Замени x на e в 'bxxt' и выведи слово и его длину. Вывод: beet | 4",
    blocks:["w = w.replace('x', 'e')", "print(w)", "print(len(w))", "w = 'bxxt'"],
    targetCode:"w = 'bxxt'\nw = w.replace('x', 'e')\nprint(w)\nprint(len(w))",
    check:(out,v)=> _pqN(out)==="beet\n4",
    scene:"harbor-miniboss",
    hints:["replace возвращает новую строку.", "Блок за блоком: w = 'bxxt' → w = w.replace('x', 'e') → print(w) …", "Готовый код:\nw = 'bxxt'\nw = w.replace('x', 'e')\nprint(w)\nprint(len(w))"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Срез с шагом",
    story:"Что выведет срез с шагом 2? Код: s = 'abcdef' ⏎ print(s[::2])  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('ace')", "print('fdb')", "print('bdf')", "print('abc')"],
    targetCode:"print('ace')",
    check:(out,v)=> _pqN(out)==="ace",
    scene:"harbor",
    hints:["Берём буквы через одну, начиная с нулевой.", "Запиши значения переменных после каждого шага.", "Ответ: print('ace')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Опечатка в методе",
    story:"Названию нужно убрать пробелы по краям. Сломанный код: t = ' port ' ⏎ print(t.strip)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: port",
    blocks:["t = ' port '", "print(t.strip)", "print(t.strip())"],
    targetCode:"t = ' port '\nprint(t.strip())",
    check:(out,v)=> _pqN(out)==="port",
    scene:"harbor",
    hints:["Метод вызывают скобками.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nt = ' port '\nprint(t.strip())"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Визитка корабля",
    story:"Проект: собери визитку из переменных.",
    objective:"Выведи f-строкой: Ship: Nova, crew: 12 Вывод: Ship: Nova, crew: 12",
    blocks:["name = 'Nova'", "print(f'Ship: {name}, crew: {crew}')", "crew = 12"],
    targetCode:"name = 'Nova'\ncrew = 12\nprint(f'Ship: {name}, crew: {crew}')",
    check:(out,v)=> _pqN(out)==="Ship: Nova, crew: 12",
    scene:"harbor",
    hints:["В f-строке значения подставляют в фигурных скобках.", "Блок за блоком: name = 'Nova' → crew = 12 → print(f'Ship: {name}, crew…", "Готовый код:\nname = 'Nova'\ncrew = 12\nprint(f'Ship: {name}, crew: {crew}')"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Слова из ввода",
    story:"Штурман вводит фразу.",
    objective:"Считай фразу, раздели split() и выведи число слов. Вывод: 3",
    blocks:["text = input()", "print(len(words))", "words = text.split()"],
    targetCode:"text = input()\nwords = text.split()\nprint(len(words))",
    check:(out,v)=> _pqN(out)==="3",
    scene:"harbor",
    simInput:["sea and sky"],
    hints:["split() без аргументов делит по пробелам.", "Блок за блоком: text = input() → words = text.split() → print(len(words))", "Готовый код:\ntext = input()\nwords = text.split()\nprint(len(words))"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Палиндром",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Читается ли слово одинаково в обе стороны?",
    objective:"Сравни 'level' с его разворотом [::-1]: выведи Yes или No. Вывод: Yes",
    blocks:["else:", "if w == w[::-1]:", "print('No')", "print('Yes')", "w = 'level'"],
    targetCode:"w = 'level'\nif w == w[::-1]:\n    print('Yes')\nelse:\n    print('No')",
    check:(out,v)=> _pqN(out)==="Yes",
    scene:"harbor",
    hints:["Срез [::-1] переворачивает строку.", "Блок за блоком: w = 'level' → if w == w[::-1]: → print('Yes') …", "Готовый код:\nw = 'level'\nif w == w[::-1]:\n    print('Yes')\nelse:\n    print('No')"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Шифр через одну",
    story:"Писарь шифрует слово.",
    objective:"Из слова 'navigation' собери строку из букв на чётных позициях (0, 2, 4…) и выведи её. Вывод: nvgto",
    check:(out,v)=> _pqN(out)==="nvgto" && _pqR(v,["\\bfor\\b"]),
    scene:"harbor",
    hints:["Наращивай строку res += буква.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: w = 'navigation' …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Сломанный подсчёт",
    story:"Считаем букву a в 'banana', а получаем 0. Сломанный код: w = 'banana' ⏎ count = 0 ⏎ for ch in w: ⏎ ⇥ if ch == 'A': ⏎ ⇥ ⇥ count += 1 ⏎ print(count)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 3",
    check:(out,v)=> _pqN(out)==="3" && _pqR(v,["\\bfor\\b"]),
    scene:"harbor",
    hints:["Регистр букв важен.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: w = 'banana' …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Красивая подпись",
    story:"Оформи подпись под причалом.",
    objective:"Считай имя, выведи Hello, ИМЯ! (имя большими буквами) и Length: длина имени. Вывод: Hello, ALI! | Length: 3",
    check:(out,v)=> _pqN(out)==="Hello, ALI!\nLength: 3" && _pqR(v,["upper"]),
    scene:"harbor",
    simInput:["Ali"],
    hints:["upper(), len() и склейка.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: name = input() …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Разбор фразы",
    story:"Дракон ищет слова в шифровке.",
    objective:"Для 'sea and sky and sun' выведи число слов и сколько раз встречается and. Вывод: Words: 5 | And: 2",
    check:(out,v)=> _pqN(out)==="Words: 5\nAnd: 2" && _pqR(v,["split", "count"]),
    scene:"harbor",
    hints:["count() считает вхождения подстроки.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: phrase = 'sea and sky and sun' …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Дракон Слайс",
    story:"Дракон Слайс охраняет Ключ ядра №9! Дракон шифрует ключ срезами и методами! Победи — и часть цифровой карты снова заработает.",
    objective:"code = 'PY-THON-2026'. Раздели по '-', выведи первую часть, вторую маленькими буквами, третью + 1 (числом). Затем проверь 'Anna' на палиндром (Palindrome / Not palindrome) и посчитай гласные в code.lower() (Vowels: N). Вывод: PY | thon | 2027 … (5 строк)",
    check:(out,v)=> _pqN(out)==="PY\nthon\n2027\nPalindrome\nVowels: 1" && _pqR(v,["split", "\\[::-1\\]", "\\bfor\\b"]),
    scene:"harbor-boss",
    hints:["split, lower, int, срез [::-1], for и if.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: split, lower, int, срез [::-1], for и if."]
  }
];

/* ===== MODULE 10: List Fortress — списки ===== */
MISSIONS[10] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первый арсенал",
    story:"Ты добираешься до List Fortress: башни хранят данные в списках, но вирус Null стёр номера ячеек. Оружейник Индекс: «Список — ряд ячеек с номерами с нуля.»",
    objective:"Создай список оружия и выведи его. Вывод: ['sword', 'bow', 'axe']",
    blocks:["weapons = ['sword', 'bow', 'axe']", "print(weapons)"],
    targetCode:"weapons = ['sword', 'bow', 'axe']\nprint(weapons)",
    check:(out,v)=> _pqN(out)==="['sword', 'bow', 'axe']",
    scene:"fortress",
    hints:["Список записывают в квадратных скобках.", "Блок за блоком: weapons = ['sword', 'bow',… → print(weapons)", "Готовый код:\nweapons = ['sword', 'bow', 'axe']\nprint(weapons)"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Ячейка №0",
    story:"Возьми оружие из нулевой и последней ячеек.",
    objective:"Выведи первый и последний элементы. Вывод: sword | axe",
    blocks:["print(weapons[-1])", "weapons = ['sword', 'bow', 'axe']", "print(weapons[0])"],
    targetCode:"weapons = ['sword', 'bow', 'axe']\nprint(weapons[0])\nprint(weapons[-1])",
    check:(out,v)=> _pqN(out)==="sword\naxe",
    scene:"fortress",
    hints:["Индексы с 0; -1 — последний.", "Блок за блоком: weapons = ['sword', 'bow',… → print(weapons[0]) → print(weapons[-1])", "Готовый код:\nweapons = ['sword', 'bow', 'axe']\nprint(weapons[0])\nprint(weapons[-1])"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Запас патронов",
    story:"Сколько предметов в арсенале?",
    objective:"Выведи длину списка. Вывод: 4",
    blocks:["print(len(items))", "items = [4, 8, 15, 16]"],
    targetCode:"items = [4, 8, 15, 16]\nprint(len(items))",
    check:(out,v)=> _pqN(out)==="4",
    scene:"fortress",
    hints:["len() работает и со списками.", "Блок за блоком: items = [4, 8, 15, 16] → print(len(items))", "Готовый код:\nitems = [4, 8, 15, 16]\nprint(len(items))"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Смена ячейки",
    story:"Что окажется в списке? Код: a = [1, 2, 3] ⏎ a[1] = 10 ⏎ print(a)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('[10, 2, 3]')", "print('[1, 10, 3]')", "print('[1, 2, 10]')", "print('[1, 10, 10]')"],
    targetCode:"print('[1, 10, 3]')",
    check:(out,v)=> _pqN(out)==="[1, 10, 3]",
    scene:"fortress",
    hints:["a[1] — вторая ячейка.", "Запиши значения переменных после каждого шага.", "Ответ: print('[1, 10, 3]')"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Обход стены",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Обойди все башни по порядку.",
    objective:"Выведи каждый элемент списка на новой строке. Вывод: N | E | S | W",
    blocks:["towers = ['N', 'E', 'S', 'W']", "for t in towers:", "print(t)"],
    targetCode:"towers = ['N', 'E', 'S', 'W']\nfor t in towers:\n    print(t)",
    check:(out,v)=> _pqN(out)==="N\nE\nS\nW",
    scene:"fortress",
    hints:["for проходит по списку.", "Блок за блоком: towers = ['N', 'E', 'S', '… → for t in towers: → print(t)", "Готовый код:\ntowers = ['N', 'E', 'S', 'W']\nfor t in towers:\n    print(t)"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Сумма запасов",
    story:"Складываем запасы по башням.",
    objective:"Посчитай сумму элементов списка циклом. Вывод: 35",
    blocks:["print(total)", "for x in stock:", "total += x", "stock = [5, 10, 20]", "total = 0"],
    targetCode:"stock = [5, 10, 20]\ntotal = 0\nfor x in stock:\n    total += x\nprint(total)",
    check:(out,v)=> _pqN(out)==="35",
    scene:"fortress",
    hints:["Накопитель в цикле.", "Блок за блоком: stock = [5, 10, 20] → total = 0 → for x in stock: …", "Готовый код:\nstock = [5, 10, 20]\ntotal = 0\nfor x in stock:\n    total += x\nprint(total)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Мимо списка",
    story:"Индекс вышел за границы. Сломанный код: nums = [3, 6, 9] ⏎ print(nums[3])  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 9",
    blocks:["nums = [3, 6, 9]", "print(nums[3])", "print(nums[2])"],
    targetCode:"nums = [3, 6, 9]\nprint(nums[2])",
    check:(out,v)=> _pqN(out)==="9",
    scene:"fortress",
    hints:["Индексы: 0, 1, 2 — на один меньше длины.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nnums = [3, 6, 9]\nprint(nums[2])"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Срез стены",
    story:"Нужны только две средние башни.",
    objective:"Выведи срез [1:3]. Вывод: [20, 30]",
    blocks:["print(w[1:3])", "w = [10, 20, 30, 40]"],
    targetCode:"w = [10, 20, 30, 40]\nprint(w[1:3])",
    check:(out,v)=> _pqN(out)==="[20, 30]",
    scene:"fortress",
    hints:["Срез списка — как срез строки.", "Блок за блоком: w = [10, 20, 30, 40] → print(w[1:3])", "Готовый код:\nw = [10, 20, 30, 40]\nprint(w[1:3])"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Есть ли ключ",
    story:"Проверь связку ключей.",
    objective:"Через in проверь наличие 'gold': Found или Missing. Вывод: Found",
    blocks:["print('Missing')", "keys = ['iron', 'gold', 'silver']", "else:", "if 'gold' in keys:", "print('Found')"],
    targetCode:"keys = ['iron', 'gold', 'silver']\nif 'gold' in keys:\n    print('Found')\nelse:\n    print('Missing')",
    check:(out,v)=> _pqN(out)==="Found",
    scene:"fortress",
    hints:["in работает и для списков.", "Блок за блоком: keys = ['iron', 'gold', 's… → if 'gold' in keys: → print('Found') …", "Готовый код:\nkeys = ['iron', 'gold', 'silver']\nif 'gold' in keys:\n    print('Found')\nelse:\n    print('Missing')"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Страж Индекса",
    story:"Страж Индекса преграждает путь! Страж хранит максимум: найди его без max().",
    objective:"Найди наибольший элемент циклом: Max: …. Вывод: Max: 90",
    blocks:["if x > best:", "print('Max:', best)", "best = hp[0]", "hp = [40, 90, 25, 70]", "for x in hp:", "best = x"],
    targetCode:"hp = [40, 90, 25, 70]\nbest = hp[0]\nfor x in hp:\n    if x > best:\n        best = x\nprint('Max:', best)",
    check:(out,v)=> _pqN(out)==="Max: 90",
    scene:"fortress-miniboss",
    hints:["Сравнивай каждый элемент с лучшим.", "Блок за блоком: hp = [40, 90, 25, 70] → best = hp[0] → for x in hp: …", "Готовый код:\nhp = [40, 90, 25, 70]\nbest = hp[0]\nfor x in hp:\n    if x > best:\n        best = x\nprint('Max:', best)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Чтение кода",
    story:"Что выведет программа? Код: a = [2, 4, 6, 8] ⏎ s = 0 ⏎ for i in range(len(a)): ⏎ ⇥ if i % 2 == 0: ⏎ ⇥ ⇥ s += a[i] ⏎ print(s)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(8)", "print(6)", "print(12)", "print(20)"],
    targetCode:"print(8)",
    check:(out,v)=> _pqN(out)==="8",
    scene:"fortress",
    hints:["Учитывай только чётные индексы.", "Запиши значения переменных после каждого шага.", "Ответ: print(8)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Пропавший элемент",
    story:"Нужно вывести все элементы, но первый пропал. Сломанный код: a = ['x', 'y', 'z'] ⏎ for i in range(1, len(a)): ⏎ ⇥ print(a[i])  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: x | y | z",
    blocks:["print(a[i])", "a = ['x', 'y', 'z']", "for i in range(len(a)):", "for i in range(1, len(a)):"],
    targetCode:"a = ['x', 'y', 'z']\nfor i in range(len(a)):\n    print(a[i])",
    check:(out,v)=> _pqN(out)==="x\ny\nz",
    scene:"fortress",
    hints:["range(len(a)) начинается с нуля.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\na = ['x', 'y', 'z']\nfor i in range(len(a)):\n    print(a[i])"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Инвентарь героя",
    story:"Проект: покажи предметы с номерами.",
    objective:"Выведи предметы с номерами, начиная с 1. Вывод: 1 map | 2 lamp | 3 rope",
    blocks:["items = ['map', 'lamp', 'rope']", "print(i + 1, items[i])", "for i in range(len(items)):"],
    targetCode:"items = ['map', 'lamp', 'rope']\nfor i in range(len(items)):\n    print(i + 1, items[i])",
    check:(out,v)=> _pqN(out)==="1 map\n2 lamp\n3 rope",
    scene:"fortress",
    hints:["Номер = индекс + 1.", "Блок за блоком: items = ['map', 'lamp', 'r… → for i in range(len(items)): → print(i + 1, items[i])", "Готовый код:\nitems = ['map', 'lamp', 'rope']\nfor i in range(len(items)):\n    print(i + 1, items[i])"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Двумерная стена",
    story:"Список в списке — стена из плиток.",
    objective:"Выведи элемент из ряда 1, колонки 2. Вывод: 6",
    blocks:["grid = [[1, 2, 3], [4, 5, 6]]", "print(grid[1][2])"],
    targetCode:"grid = [[1, 2, 3], [4, 5, 6]]\nprint(grid[1][2])",
    check:(out,v)=> _pqN(out)==="6",
    scene:"fortress",
    hints:["Первый индекс — ряд, второй — колонка.", "Блок за блоком: grid = [[1, 2, 3], [4, 5, … → print(grid[1][2])", "Готовый код:\ngrid = [[1, 2, 3], [4, 5, 6]]\nprint(grid[1][2])"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Фильтр брони",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Оставь только броню тяжелее 5.",
    objective:"Собери список heavy из чисел больше 5 (append) и выведи его. Вывод: [8, 12, 6]",
    blocks:["for w in data:", "data = [3, 8, 5, 12, 6]", "heavy.append(w)", "if w > 5:", "print(heavy)", "heavy = []"],
    targetCode:"data = [3, 8, 5, 12, 6]\nheavy = []\nfor w in data:\n    if w > 5:\n        heavy.append(w)\nprint(heavy)",
    check:(out,v)=> _pqN(out)==="[8, 12, 6]",
    scene:"fortress",
    hints:["Пустой список [] и append — добавление в конец.", "Блок за блоком: data = [3, 8, 5, 12, 6] → heavy = [] → for w in data: …", "Готовый код:\ndata = [3, 8, 5, 12, 6]\nheavy = []\nfor w in data:\n    if w > 5:\n        heavy.append(w)\nprint(heavy)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Средний HP",
    story:"Лорд считает средний HP отряда.",
    objective:"Для [70, 85, 90, 55] выведи Sum: … и Avg: … через цикл. Вывод: Sum: 300 | Avg: 75.0",
    check:(out,v)=> _pqN(out)==="Sum: 300\nAvg: 75.0" && _pqR(v,["\\bfor\\b"]),
    scene:"fortress",
    hints:["Среднее = сумма / len(список).", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: hp = [70, 85, 90, 55] …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Обрыв списка",
    story:"Нужно вывести последний элемент. Сломанный код: names = ['Ali', 'Vera', 'Omar'] ⏎ print(names[len(names)])  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: Omar",
    check:(out,v)=> _pqN(out)==="Omar" && _pqR(v,["len\\(names\\)"]),
    scene:"fortress",
    hints:["Последний индекс на 1 меньше длины.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: names = ['Ali', 'Vera', 'Omar'] …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Двойной подсчёт",
    story:"Раздели числа на два лагеря.",
    objective:"Для [4, 7, 10, 3, 8] выведи Even: … и Odd: …. Вывод: Even: 3 | Odd: 2",
    check:(out,v)=> _pqN(out)==="Even: 3\nOdd: 2" && _pqR(v,["\\bfor\\b"]),
    scene:"fortress",
    hints:["Два счётчика и if/else.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: nums = [4, 7, 10, 3, 8] …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Пары соседей",
    story:"Сравнивай соседние башни.",
    objective:"Для [1, 3, 2, 5, 4]: для каждой пары соседей выведи Up, если следующее больше, иначе Down. Вывод: Up | Down | Up | Down",
    check:(out,v)=> _pqN(out)==="Up\nDown\nUp\nDown" && _pqR(v,["\\bfor\\b", "range\\(len"]),
    scene:"fortress",
    hints:["Нужны индекс i и сосед a[i + 1].", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: a = [1, 3, 2, 5, 4] …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Лорд Последовательность",
    story:"Лорд Последовательность охраняет Ключ ядра №10! Лорд строит цепочку чисел! Победи — и часть цифровой карты снова заработает.",
    objective:"s = [3, 1, 4, 1, 5, 9, 2, 6]. Выведи Len, Sum, Max (циклом), Big (сколько чисел > 3) и первые три элемента срезом. Вывод: Len: 8 | Sum: 31 | Max: 9 … (5 строк)",
    check:(out,v)=> _pqN(out)==="Len: 8\nSum: 31\nMax: 9\nBig: 4\n[3, 1, 4]" && _pqR(v,["\\bfor\\b", "\\[:3\\]"]),
    scene:"fortress-boss",
    hints:["Один цикл может делать сразу три дела.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Один цикл может делать сразу три дела."]
  }
];

/* ===== MODULE 11: Method Mines — методы списков ===== */
MISSIONS[11] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первая порция",
    story:"Ты спускаешься в Method Mines: шахтёры-роботы добывают данные, но вирус Null сломал инструменты списков. Шахтёр Аппенд: «append кладёт добычу в конец!»",
    objective:"Создай пустой список, добавь 'coal' и 'iron', выведи его. Вывод: ['coal', 'iron']",
    blocks:["print(ore)", "ore = []", "ore.append('iron')", "ore.append('coal')"],
    targetCode:"ore = []\nore.append('coal')\nore.append('iron')\nprint(ore)",
    check:(out,v)=> _pqN(out)==="['coal', 'iron']",
    scene:"mines",
    hints:["append добавляет один элемент в конец.", "Блок за блоком: ore = [] → ore.append('coal') → ore.append('iron') …", "Готовый код:\nore = []\nore.append('coal')\nore.append('iron')\nprint(ore)"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Вставка в середину",
    story:"В вагонетку нужно втиснуть золото на второе место.",
    objective:"Вставь 'gold' в позицию 1 методом insert. Вывод: ['coal', 'gold', 'iron']",
    blocks:["cart = ['coal', 'iron']", "print(cart)", "cart.insert(1, 'gold')"],
    targetCode:"cart = ['coal', 'iron']\ncart.insert(1, 'gold')\nprint(cart)",
    check:(out,v)=> _pqN(out)==="['coal', 'gold', 'iron']",
    scene:"mines",
    hints:["insert(индекс, значение).", "Блок за блоком: cart = ['coal', 'iron'] → cart.insert(1, 'gold') → print(cart)", "Готовый код:\ncart = ['coal', 'iron']\ncart.insert(1, 'gold')\nprint(cart)"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Расширение состава",
    story:"К вагонетке цепляют ещё одну.",
    objective:"Присоедини второй список методом extend. Вывод: [1, 2, 3, 4]",
    blocks:["a.extend(b)", "print(a)", "b = [3, 4]", "a = [1, 2]"],
    targetCode:"a = [1, 2]\nb = [3, 4]\na.extend(b)\nprint(a)",
    check:(out,v)=> _pqN(out)==="[1, 2, 3, 4]",
    scene:"mines",
    hints:["extend добавляет все элементы другого списка.", "Блок за блоком: a = [1, 2] → b = [3, 4] → a.extend(b) …", "Готовый код:\na = [1, 2]\nb = [3, 4]\na.extend(b)\nprint(a)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Что добавил append",
    story:"Что выведет программа? Код: a = [1, 2] ⏎ a.append([3, 4]) ⏎ print(len(a))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(2)", "print(4)", "print(5)", "print(3)"],
    targetCode:"print(3)",
    check:(out,v)=> _pqN(out)==="3",
    scene:"mines",
    hints:["append добавляет один элемент — даже если это список.", "Запиши значения переменных после каждого шага.", "Ответ: print(3)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Снять последнее",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Последнюю породу забирает Шахтёр.",
    objective:"Достань последний элемент методом pop и выведи его и список. Вывод: 7 | [5, 6]",
    blocks:["stack = [5, 6, 7]", "print(stack)", "print(last)", "last = stack.pop()"],
    targetCode:"stack = [5, 6, 7]\nlast = stack.pop()\nprint(last)\nprint(stack)",
    check:(out,v)=> _pqN(out)==="7\n[5, 6]",
    scene:"mines",
    hints:["pop() возвращает элемент и удаляет его.", "Блок за блоком: stack = [5, 6, 7] → last = stack.pop() → print(last) …", "Готовый код:\nstack = [5, 6, 7]\nlast = stack.pop()\nprint(last)\nprint(stack)"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Убрать по значению",
    story:"Убери из вагонетки камень.",
    objective:"Удали 'rock' методом remove. Вывод: ['gold', 'iron']",
    blocks:["cart = ['gold', 'rock', 'iron']", "print(cart)", "cart.remove('rock')"],
    targetCode:"cart = ['gold', 'rock', 'iron']\ncart.remove('rock')\nprint(cart)",
    check:(out,v)=> _pqN(out)==="['gold', 'iron']",
    scene:"mines",
    hints:["remove ищет значение, а не индекс.", "Блок за блоком: cart = ['gold', 'rock', 'i… → cart.remove('rock') → print(cart)", "Готовый код:\ncart = ['gold', 'rock', 'iron']\ncart.remove('rock')\nprint(cart)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Сортировка руды",
    story:"Голем Сорт любит порядок.",
    objective:"Отсортируй числа по возрастанию методом sort. Вывод: [10, 20, 30]",
    blocks:["print(w)", "w = [30, 10, 20]", "w.sort()"],
    targetCode:"w = [30, 10, 20]\nw.sort()\nprint(w)",
    check:(out,v)=> _pqN(out)==="[10, 20, 30]",
    scene:"mines",
    hints:["sort() меняет сам список.", "Блок за блоком: w = [30, 10, 20] → w.sort() → print(w)", "Готовый код:\nw = [30, 10, 20]\nw.sort()\nprint(w)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Пустая сортировка",
    story:"Список должен стать отсортированным, но остался прежним. Сломанный код: a = [3, 1, 2] ⏎ b = a.sort() ⏎ print(b)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: [1, 2, 3]",
    blocks:["a.sort()", "print(a)", "print(b)", "a = [3, 1, 2]", "b = a.sort()"],
    targetCode:"a = [3, 1, 2]\na.sort()\nprint(a)",
    check:(out,v)=> _pqN(out)==="[1, 2, 3]",
    scene:"mines",
    hints:["sort() ничего не возвращает — он меняет список на месте.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\na = [3, 1, 2]\na.sort()\nprint(a)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"В обратном порядке",
    story:"Вагонетки едут задом наперёд.",
    objective:"Разверни список методом reverse. Вывод: [3, 2, 1]",
    blocks:["a.reverse()", "print(a)", "a = [1, 2, 3]"],
    targetCode:"a = [1, 2, 3]\na.reverse()\nprint(a)",
    check:(out,v)=> _pqN(out)==="[3, 2, 1]",
    scene:"mines",
    hints:["reverse меняет порядок на месте.", "Блок за блоком: a = [1, 2, 3] → a.reverse() → print(a)", "Готовый код:\na = [1, 2, 3]\na.reverse()\nprint(a)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Голем Сорт",
    story:"Голем Сорт преграждает путь! Голем считает повторы породы.",
    objective:"Выведи, сколько раз 'iron' встречается, и индекс первого 'gold' (count и index). Вывод: 2 | 1",
    blocks:["ore = ['iron', 'gold', 'iron', 'coal']", "print(ore.index('gold'))", "print(ore.count('iron'))"],
    targetCode:"ore = ['iron', 'gold', 'iron', 'coal']\nprint(ore.count('iron'))\nprint(ore.index('gold'))",
    check:(out,v)=> _pqN(out)==="2\n1",
    scene:"mines-miniboss",
    hints:["count считает, index ищет позицию.", "Блок за блоком: ore = ['iron', 'gold', 'ir… → print(ore.count('iron')) → print(ore.index('gold'))", "Готовый код:\nore = ['iron', 'gold', 'iron', 'coal']\nprint(ore.count('iron'))\nprint(ore.index('gold'))"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Цепочка методов",
    story:"Что окажется в списке? Код: a = [4, 2] ⏎ a.append(1) ⏎ a.sort() ⏎ a.pop() ⏎ print(a)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('[2, 4]')", "print('[1, 2]')", "print('[1, 2, 4]')", "print('[4, 2]')"],
    targetCode:"print('[1, 2]')",
    check:(out,v)=> _pqN(out)==="[1, 2]",
    scene:"mines",
    hints:["Сначала [4,2,1], после sort — [1,2,4], pop убирает последний.", "Запиши значения переменных после каждого шага.", "Ответ: print('[1, 2]')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"remove вместо pop",
    story:"Нужно убрать элемент по индексу 0. Сломанный код: a = ['x', 'y', 'z'] ⏎ a.remove(0) ⏎ print(a)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: ['y', 'z']",
    blocks:["a.remove(0)", "a = ['x', 'y', 'z']", "print(a)", "a.pop(0)"],
    targetCode:"a = ['x', 'y', 'z']\na.pop(0)\nprint(a)",
    check:(out,v)=> _pqN(out)==="['y', 'z']",
    scene:"mines",
    hints:["remove работает по значению, pop — по индексу.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\na = ['x', 'y', 'z']\na.pop(0)\nprint(a)"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Очередь вагонеток",
    story:"Проект: очередь. Первого выпускаем, новых добавляем в конец.",
    objective:"Из очереди достань pop(0), добавь 'D' и выведи очередь. Вывод: A | ['B', 'C', 'D']",
    blocks:["q.append('D')", "print(q)", "q = ['A', 'B', 'C']", "print(first)", "first = q.pop(0)"],
    targetCode:"q = ['A', 'B', 'C']\nfirst = q.pop(0)\nq.append('D')\nprint(first)\nprint(q)",
    check:(out,v)=> _pqN(out)==="A\n['B', 'C', 'D']",
    scene:"mines",
    hints:["pop(0) берёт с начала.", "Блок за блоком: q = ['A', 'B', 'C'] → first = q.pop(0) → q.append('D') …", "Готовый код:\nq = ['A', 'B', 'C']\nfirst = q.pop(0)\nq.append('D')\nprint(first)\nprint(q)"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Добыча по вводу",
    story:"Шахтёр диктует породу, ты записываешь.",
    objective:"Считай 3 слова: добавь в список и выведи его отсортированным. Вывод: ['coal', 'gold', 'iron']",
    blocks:["print(ore)", "ore = []", "ore.sort()", "ore.append(input())", "for i in range(3):"],
    targetCode:"ore = []\nfor i in range(3):\n    ore.append(input())\nore.sort()\nprint(ore)",
    check:(out,v)=> _pqN(out)==="['coal', 'gold', 'iron']",
    scene:"mines",
    simInput:["iron", "coal", "gold"],
    hints:["Цикл for с append и input.", "Блок за блоком: ore = [] → for i in range(3): → ore.append(input()) …", "Готовый код:\nore = []\nfor i in range(3):\n    ore.append(input())\nore.sort()\nprint(ore)"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Чистка вагонетки",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Убери все числа меньше 5.",
    objective:"Собери новый список чисел ≥ 5 и отсортируй по убыванию (reverse=True). Вывод: [9, 7, 5]",
    blocks:["a = [7, 2, 9, 4, 5]", "b = []", "print(b)", "b.append(x)", "if x >= 5:", "b.sort(reverse=True)", "for x in a:"],
    targetCode:"a = [7, 2, 9, 4, 5]\nb = []\nfor x in a:\n    if x >= 5:\n        b.append(x)\nb.sort(reverse=True)\nprint(b)",
    check:(out,v)=> _pqN(out)==="[9, 7, 5]",
    scene:"mines",
    hints:["sort(reverse=True) сортирует по убыванию.", "Блок за блоком: a = [7, 2, 9, 4, 5] → b = [] → for x in a: …", "Готовый код:\na = [7, 2, 9, 4, 5]\nb = []\nfor x in a:\n    if x >= 5:\n        b.append(x)\nb.sort(reverse=True)\nprint(b)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Топ-3 руды",
    story:"Голем выбирает три самых тяжёлых куска.",
    objective:"Из [12, 5, 30, 8, 21] выведи три наибольших (по убыванию). Вывод: [30, 21, 12]",
    check:(out,v)=> _pqN(out)==="[30, 21, 12]" && _pqR(v,["sort"]),
    scene:"mines",
    hints:["Отсортируй и возьми срез.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: w = [12, 5, 30, 8, 21] …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Потерянные слитки",
    story:"Нужно вывести и убрать последний слиток, а он остаётся. Сломанный код: bars = [1, 2, 3] ⏎ last = bars[-1] ⏎ print(last) ⏎ print(bars)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 3 | [1, 2]",
    check:(out,v)=> _pqN(out)==="3\n[1, 2]" && _pqR(v,["pop"]),
    scene:"mines",
    hints:["Какой метод достаёт и удаляет?", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: bars = [1, 2, 3] …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Учёт без повторов",
    story:"Шахтёры не любят дубликаты.",
    objective:"Из ['a','b','a','c','b'] собери список без повторов (порядок первого появления). Выведи его. Вывод: ['a', 'b', 'c']",
    check:(out,v)=> _pqN(out)==="['a', 'b', 'c']" && _pqR(v,["\\bfor\\b", "append"]),
    scene:"mines",
    hints:["not in проверяет отсутствие.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: src = ['a', 'b', 'a', 'c', 'b'] …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Склад со стеком",
    story:"Стек: последним пришёл — первым ушёл.",
    objective:"Положи в стек 1, 2, 3 (append), затем достань все элементы (pop в while) и выведи их по одному. Вывод: 3 | 2 | 1",
    check:(out,v)=> _pqN(out)==="3\n2\n1" && _pqR(v,["\\bwhile\\b", "pop"]),
    scene:"mines",
    hints:["Пока список не пуст — pop.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: st = [] …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Кристальный Голем",
    story:"Кристальный Голем охраняет Ключ ядра №11! Кристальный Голем охраняет ключ! Победи — и часть цифровой карты снова заработает.",
    objective:"data = [8, 3, 8, 1, 5, 3]. Сделай список без повторов, отсортируй, выведи его; затем вставь 0 в начало и выведи сумму и длину. Вывод: [1, 3, 5, 8] | Sum: 17 | Len: 5",
    check:(out,v)=> _pqN(out)==="[1, 3, 5, 8]\nSum: 17\nLen: 5" && _pqR(v,["\\bfor\\b", "insert", "sort"]),
    scene:"mines-boss",
    hints:["Цикл, not in, append, sort, insert, sum.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Цикл, not in, append, sort, insert, sum."]
  }
];

/* ===== MODULE 12: Tuple Tower — кортежи ===== */
MISSIONS[12] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первый кортеж",
    story:"Ты подходишь к Tuple Tower: этажи защищены неизменяемыми кортежами, а вирус Null пытается их подделать. Хранитель Неизменный: «Кортеж не меняется после создания.»",
    objective:"Создай кортеж координат и выведи его. Вывод: (3, 5)",
    blocks:["print(point)", "point = (3, 5)"],
    targetCode:"point = (3, 5)\nprint(point)",
    check:(out,v)=> _pqN(out)==="(3, 5)",
    scene:"tower",
    hints:["Кортеж записывают в круглых скобках.", "Блок за блоком: point = (3, 5) → print(point)", "Готовый код:\npoint = (3, 5)\nprint(point)"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Доступ по индексу",
    story:"Достань координаты двери.",
    objective:"Выведи x и y отдельно по индексам. Вывод: 4 | 9",
    blocks:["print(door[1])", "door = (4, 9)", "print(door[0])"],
    targetCode:"door = (4, 9)\nprint(door[0])\nprint(door[1])",
    check:(out,v)=> _pqN(out)==="4\n9",
    scene:"tower",
    hints:["Индексация — как у списков.", "Блок за блоком: door = (4, 9) → print(door[0]) → print(door[1])", "Готовый код:\ndoor = (4, 9)\nprint(door[0])\nprint(door[1])"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Распаковка",
    story:"Разложи кортеж по переменным.",
    objective:"Распакуй (10, 20) в x и y и выведи x + y. Вывод: 30",
    blocks:["x, y = (10, 20)", "print(x + y)"],
    targetCode:"x, y = (10, 20)\nprint(x + y)",
    check:(out,v)=> _pqN(out)==="30",
    scene:"tower",
    hints:["Слева столько переменных, сколько элементов.", "Блок за блоком: x, y = (10, 20) → print(x + y)", "Готовый код:\nx, y = (10, 20)\nprint(x + y)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Кортеж из одного",
    story:"Что выведет программа? Код: t = (5,) ⏎ print(len(t))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(0)", "print(5)", "print(1)", "print(2)"],
    targetCode:"print(1)",
    check:(out,v)=> _pqN(out)==="1",
    scene:"tower",
    hints:["Запятая создаёт кортеж, даже с одним элементом.", "Запиши значения переменных после каждого шага.", "Ответ: print(1)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Длина этажа",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Сколько элементов в кортеже стража?",
    objective:"Выведи длину кортежа и его последний элемент. Вывод: 3 | Omar",
    blocks:["print(len(guard))", "print(guard[-1])", "guard = ('Ali', 'Vera', 'Omar')"],
    targetCode:"guard = ('Ali', 'Vera', 'Omar')\nprint(len(guard))\nprint(guard[-1])",
    check:(out,v)=> _pqN(out)==="3\nOmar",
    scene:"tower",
    hints:["len и отрицательный индекс.", "Блок за блоком: guard = ('Ali', 'Vera', 'O… → print(len(guard)) → print(guard[-1])", "Готовый код:\nguard = ('Ali', 'Vera', 'Omar')\nprint(len(guard))\nprint(guard[-1])"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Обход этажей",
    story:"Пройди все этажи по порядку.",
    objective:"Выведи каждый элемент кортежа циклом for. Вывод: A | B | C",
    blocks:["for f in floors:", "floors = ('A', 'B', 'C')", "print(f)"],
    targetCode:"floors = ('A', 'B', 'C')\nfor f in floors:\n    print(f)",
    check:(out,v)=> _pqN(out)==="A\nB\nC",
    scene:"tower",
    hints:["for по кортежу как по списку.", "Блок за блоком: floors = ('A', 'B', 'C') → for f in floors: → print(f)", "Готовый код:\nfloors = ('A', 'B', 'C')\nfor f in floors:\n    print(f)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Изменить нельзя",
    story:"Попытка изменить кортеж вызывает ошибку. Сломанный код: t = (1, 2, 3) ⏎ t[0] = 9 ⏎ print(t)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: (9, 2, 3)",
    blocks:["t = (1, 2, 3)", "t[0] = 9", "t = (9, 2, 3)", "print(t)"],
    targetCode:"t = (1, 2, 3)\nt = (9, 2, 3)\nprint(t)",
    check:(out,v)=> _pqN(out)==="(9, 2, 3)",
    scene:"tower",
    hints:["Кортеж не изменить, но можно создать новый.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nt = (1, 2, 3)\nt = (9, 2, 3)\nprint(t)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Обмен значениями",
    story:"Поменяй местами два этажа.",
    objective:"Поменяй a и b без третьей переменной. Вывод: 2 1",
    blocks:["a, b = b, a", "b = 2", "print(a, b)", "a = 1"],
    targetCode:"a = 1\nb = 2\na, b = b, a\nprint(a, b)",
    check:(out,v)=> _pqN(out)==="2 1",
    scene:"tower",
    hints:["Кортежное присваивание.", "Блок за блоком: a = 1 → b = 2 → a, b = b, a …", "Готовый код:\na = 1\nb = 2\na, b = b, a\nprint(a, b)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Кортеж из списка",
    story:"Замораживаем список в кортеж.",
    objective:"Преврати список в кортеж функцией tuple и выведи. Вывод: (1, 2, 3)",
    blocks:["print(t)", "a = [1, 2, 3]", "t = tuple(a)"],
    targetCode:"a = [1, 2, 3]\nt = tuple(a)\nprint(t)",
    check:(out,v)=> _pqN(out)==="(1, 2, 3)",
    scene:"tower",
    hints:["tuple(список).", "Блок за блоком: a = [1, 2, 3] → t = tuple(a) → print(t)", "Готовый код:\na = [1, 2, 3]\nt = tuple(a)\nprint(t)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Страж Запятой",
    story:"Страж Запятой преграждает путь! Страж хранит данные героя: (имя, HP).",
    objective:"Пройди по списку кортежей и выведи Имя: HP. Вывод: Ali : 80 | Vera : 95",
    blocks:["heroes = [('Ali', 80), ('Vera', 95)]", "print(name, ':', hp)", "for name, hp in heroes:"],
    targetCode:"heroes = [('Ali', 80), ('Vera', 95)]\nfor name, hp in heroes:\n    print(name, ':', hp)",
    check:(out,v)=> _pqN(out)==="Ali : 80\nVera : 95",
    scene:"tower-miniboss",
    hints:["Распаковка прямо в for.", "Блок за блоком: heroes = [('Ali', 80), ('V… → for name, hp in heroes: → print(name, ':', hp)", "Готовый код:\nheroes = [('Ali', 80), ('Vera', 95)]\nfor name, hp in heroes:\n    print(name, ':', hp)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Слияние",
    story:"Что получится? Код: a = (1, 2) ⏎ b = (3,) ⏎ print(a + b)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('(1, 2)')", "print('(4, 2)')", "print('(1, 2, 3)')", "print('(1, 2, (3,))')"],
    targetCode:"print('(1, 2, 3)')",
    check:(out,v)=> _pqN(out)==="(1, 2, 3)",
    scene:"tower",
    hints:["Кортежи склеиваются плюсом.", "Запиши значения переменных после каждого шага.", "Ответ: print('(1, 2, 3)')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Забытая запятая",
    story:"Кортеж из одного элемента не получился. Сломанный код: t = (7) ⏎ print(len(t))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 1",
    blocks:["print(len(t))", "t = (7)", "t = (7,)"],
    targetCode:"t = (7,)\nprint(len(t))",
    check:(out,v)=> _pqN(out)==="1",
    scene:"tower",
    hints:["У одноэлементного кортежа нужна запятая.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nt = (7,)\nprint(len(t))"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Мин и макс",
    story:"Проект: найди самого слабого и сильного.",
    objective:"Из кортежа (40, 15, 90) выведи min и max. Вывод: 15 | 90",
    blocks:["hp = (40, 15, 90)", "print(max(hp))", "print(min(hp))"],
    targetCode:"hp = (40, 15, 90)\nprint(min(hp))\nprint(max(hp))",
    check:(out,v)=> _pqN(out)==="15\n90",
    scene:"tower",
    hints:["min() и max() работают с кортежами.", "Блок за блоком: hp = (40, 15, 90) → print(min(hp)) → print(max(hp))", "Готовый код:\nhp = (40, 15, 90)\nprint(min(hp))\nprint(max(hp))"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Вернуть два числа",
    story:"Считаем сумму и разность кортежем.",
    objective:"Создай кортеж (a + b, a - b), распакуй и выведи. Вывод: 13 5",
    blocks:["a = 9", "b = 4", "print(s, d)", "res = (a + b, a - b)", "s, d = res"],
    targetCode:"a = 9\nb = 4\nres = (a + b, a - b)\ns, d = res\nprint(s, d)",
    check:(out,v)=> _pqN(out)==="13 5",
    scene:"tower",
    hints:["Кортеж удобно распаковывать.", "Блок за блоком: a = 9 → b = 4 → res = (a + b, a - b) …", "Готовый код:\na = 9\nb = 4\nres = (a + b, a - b)\ns, d = res\nprint(s, d)"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Кортеж внутри",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Сколько раз встречается число.",
    objective:"Выведи count(2) и index(3) для кортежа. Вывод: 2 | 1",
    blocks:["print(t.index(3))", "t = (2, 3, 2, 5)", "print(t.count(2))"],
    targetCode:"t = (2, 3, 2, 5)\nprint(t.count(2))\nprint(t.index(3))",
    check:(out,v)=> _pqN(out)==="2\n1",
    scene:"tower",
    hints:["У кортежей два метода: count и index.", "Блок за блоком: t = (2, 3, 2, 5) → print(t.count(2)) → print(t.index(3))", "Готовый код:\nt = (2, 3, 2, 5)\nprint(t.count(2))\nprint(t.index(3))"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Пары значений",
    story:"Архитектор хранит этажи как (номер, высота).",
    objective:"Для [(1, 3), (2, 4), (3, 5)] выведи сумму высот. Вывод: 12",
    check:(out,v)=> _pqN(out)==="12" && _pqR(v,["\\bfor\\b"]),
    scene:"tower",
    hints:["Распаковка в for и накопитель.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: floors = [(1, 3), (2, 4), (3, 5)] …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Кортеж-обманщик",
    story:"Из кортежа нужно получить новый с добавленным числом. Сломанный код: t = (1, 2) ⏎ t.append(3) ⏎ print(t)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: (1, 2, 3)",
    check:(out,v)=> _pqN(out)==="(1, 2, 3)" && _pqR(v,["\\+ \\(3,\\)"]),
    scene:"tower",
    hints:["У кортежа нет append — склей новый.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: t = (1, 2) …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Самый высокий",
    story:"Найди этаж с максимальной высотой.",
    objective:"Из [(1, 3), (2, 7), (3, 5)] выведи номер этажа с наибольшей высотой. Вывод: 2",
    check:(out,v)=> _pqN(out)==="2" && _pqR(v,["\\bfor\\b"]),
    scene:"tower",
    hints:["Сравнивай f[1] с best[1].", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: floors = [(1, 3), (2, 7), (3, 5)] …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Разбор координат",
    story:"Сортируй точки по расстоянию от нуля.",
    objective:"Для точек [(3, 4), (1, 1), (0, 5)] выведи те, у которых x + y == 5, а затем количество таких точек (Count: N). Вывод: (0, 5) | Count: 1",
    check:(out,v)=> _pqN(out)==="(0, 5)\nCount: 1" && _pqR(v,["\\bfor\\b"]),
    scene:"tower",
    hints:["Распакуй, проверь, выведи кортеж (x, y).", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: pts = [(3, 4), (1, 1), (0, 5)] …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Архитектор Кортеж",
    story:"Архитектор Кортеж охраняет Ключ ядра №12! Архитектор сверяет чертежи! Победи — и часть цифровой карты снова заработает.",
    objective:"rooms = [('hall', 30), ('lab', 20), ('vault', 50)]. Выведи название и площадь каждой; затем самую большую комнату (Largest: …); затем сумму площадей; затем обменяй два числа a=1, b=2 через кортеж и выведи их. Вывод: hall 30 | lab 20 | vault 50 … (6 строк)",
    check:(out,v)=> _pqN(out)==="hall 30\nlab 20\nvault 50\nLargest: vault\nTotal: 100\n2 1" && _pqR(v,["\\bfor\\b"]),
    scene:"tower-boss",
    hints:["for с распаковкой, накопитель, поиск максимума и обмен.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: for с распаковкой, накопитель, поиск максимума и обмен."]
  }
];

/* ===== MODULE 13: Dict Kingdom — словари ===== */
MISSIONS[13] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первая запись",
    story:"Ты входишь в Dict Kingdom: королевство хранит всё по ключам, но вирус Null стёр половину ключей. Хранитель: «Словарь — пары ключ: значение.»",
    objective:"Создай словарь героя и выведи его имя. Вывод: Ali",
    blocks:["hero = {'name': 'Ali', 'hp': 100}", "print(hero['name'])"],
    targetCode:"hero = {'name': 'Ali', 'hp': 100}\nprint(hero['name'])",
    check:(out,v)=> _pqN(out)==="Ali",
    scene:"kingdom",
    hints:["Значение берут по ключу в квадратных скобках.", "Блок за блоком: hero = {'name': 'Ali', 'hp… → print(hero['name'])", "Готовый код:\nhero = {'name': 'Ali', 'hp': 100}\nprint(hero['name'])"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Новая запись",
    story:"Добавь герою оружие.",
    objective:"Добавь ключ 'weapon' и выведи словарь. Вывод: {'name': 'Ali', 'weapon': 'sword'}",
    blocks:["print(hero)", "hero = {'name': 'Ali'}", "hero['weapon'] = 'sword'"],
    targetCode:"hero = {'name': 'Ali'}\nhero['weapon'] = 'sword'\nprint(hero)",
    check:(out,v)=> _pqN(out)==="{'name': 'Ali', 'weapon': 'sword'}",
    scene:"kingdom",
    hints:["Присвоение по новому ключу создаёт пару.", "Блок за блоком: hero = {'name': 'Ali'} → hero['weapon'] = 'sword' → print(hero)", "Готовый код:\nhero = {'name': 'Ali'}\nhero['weapon'] = 'sword'\nprint(hero)"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Изменить значение",
    story:"Герой получил урон.",
    objective:"Уменьши hp на 30 и выведи его. Вывод: 70",
    blocks:["print(hero['hp'])", "hero = {'hp': 100}", "hero['hp'] -= 30"],
    targetCode:"hero = {'hp': 100}\nhero['hp'] -= 30\nprint(hero['hp'])",
    check:(out,v)=> _pqN(out)==="70",
    scene:"kingdom",
    hints:["hero['hp'] -= 30.", "Блок за блоком: hero = {'hp': 100} → hero['hp'] -= 30 → print(hero['hp'])", "Готовый код:\nhero = {'hp': 100}\nhero['hp'] -= 30\nprint(hero['hp'])"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Обращение по ключу",
    story:"Что выведет программа? Код: d = {'a': 1, 'b': 2} ⏎ d['a'] = d['b'] + 5 ⏎ print(d['a'])  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(3)", "print(7)", "print(2)", "print(6)"],
    targetCode:"print(7)",
    check:(out,v)=> _pqN(out)==="7",
    scene:"kingdom",
    hints:["Сначала правая часть: 2 + 5.", "Запиши значения переменных после каждого шага.", "Ответ: print(7)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Проверка ключа",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Есть ли в королевстве казна?",
    objective:"Через in проверь ключ 'gold': Yes или No. Вывод: Yes",
    blocks:["print('Yes')", "bank = {'gold': 10}", "else:", "print('No')", "if 'gold' in bank:"],
    targetCode:"bank = {'gold': 10}\nif 'gold' in bank:\n    print('Yes')\nelse:\n    print('No')",
    check:(out,v)=> _pqN(out)==="Yes",
    scene:"kingdom",
    hints:["in проверяет ключи.", "Блок за блоком: bank = {'gold': 10} → if 'gold' in bank: → print('Yes') …", "Готовый код:\nbank = {'gold': 10}\nif 'gold' in bank:\n    print('Yes')\nelse:\n    print('No')"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Безопасное чтение",
    story:"Ключа нет — не ломай программу.",
    objective:"Прочитай 'silver' методом get с запасным значением 0. Вывод: 0",
    blocks:["bank = {'gold': 10}", "print(bank.get('silver', 0))"],
    targetCode:"bank = {'gold': 10}\nprint(bank.get('silver', 0))",
    check:(out,v)=> _pqN(out)==="0",
    scene:"kingdom",
    hints:["get(ключ, запасное).", "Блок за блоком: bank = {'gold': 10} → print(bank.get('silver', 0…", "Готовый код:\nbank = {'gold': 10}\nprint(bank.get('silver', 0))"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Все ключи",
    story:"Перечисли все записи королевства.",
    objective:"Выведи ключи и значения циклом по items(). Вывод: a 1 | b 2",
    blocks:["for k, v in d.items():", "print(k, v)", "d = {'a': 1, 'b': 2}"],
    targetCode:"d = {'a': 1, 'b': 2}\nfor k, v in d.items():\n    print(k, v)",
    check:(out,v)=> _pqN(out)==="a 1\nb 2",
    scene:"kingdom",
    hints:["items() отдаёт пары; распаковка k, v.", "Блок за блоком: d = {'a': 1, 'b': 2} → for k, v in d.items(): → print(k, v)", "Готовый код:\nd = {'a': 1, 'b': 2}\nfor k, v in d.items():\n    print(k, v)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Нет такого ключа",
    story:"Ключ написан неверно. Сломанный код: d = {'name': 'Ali'} ⏎ print(d['Name'])  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: Ali",
    blocks:["d = {'name': 'Ali'}", "print(d['name'])", "print(d['Name'])"],
    targetCode:"d = {'name': 'Ali'}\nprint(d['name'])",
    check:(out,v)=> _pqN(out)==="Ali",
    scene:"kingdom",
    hints:["Регистр ключа важен.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nd = {'name': 'Ali'}\nprint(d['name'])"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Сумма казны",
    story:"Сложи все монеты королевства.",
    objective:"Сложи values() словаря. Вывод: 20",
    blocks:["total += v", "coins = {'a': 5, 'b': 12, 'c': 3}", "print(total)", "for v in coins.values():", "total = 0"],
    targetCode:"coins = {'a': 5, 'b': 12, 'c': 3}\ntotal = 0\nfor v in coins.values():\n    total += v\nprint(total)",
    check:(out,v)=> _pqN(out)==="20",
    scene:"kingdom",
    hints:["values() — только значения.", "Блок за блоком: coins = {'a': 5, 'b': 12, … → total = 0 → for v in coins.values(): …", "Готовый код:\ncoins = {'a': 5, 'b': 12, 'c': 3}\ntotal = 0\nfor v in coins.values():\n    total += v\nprint(total)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Барон Ключ",
    story:"Барон Ключ преграждает путь! Барон считает буквы.",
    objective:"Посчитай частоту букв в 'noon' в словаре и выведи его. Вывод: {'n': 2, 'o': 2}",
    blocks:["counts[ch] += 1", "print(counts)", "if ch in counts:", "counts[ch] = 1", "counts = {}", "for ch in 'noon':", "else:"],
    targetCode:"counts = {}\nfor ch in 'noon':\n    if ch in counts:\n        counts[ch] += 1\n    else:\n        counts[ch] = 1\nprint(counts)",
    check:(out,v)=> _pqN(out)==="{'n': 2, 'o': 2}",
    scene:"kingdom-miniboss",
    hints:["Если ключа нет — создаём, есть — увеличиваем.", "Блок за блоком: counts = {} → for ch in 'noon': → if ch in counts: …", "Готовый код:\ncounts = {}\nfor ch in 'noon':\n    if ch in counts:\n        counts[ch] += 1\n    else:\n        counts[ch] = 1\nprint(counts)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Удаление ключа",
    story:"Сколько записей останется? Код: d = {'a': 1, 'b': 2, 'c': 3} ⏎ d.pop('b') ⏎ print(len(d))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(3)", "print(1)", "print(0)", "print(2)"],
    targetCode:"print(2)",
    check:(out,v)=> _pqN(out)==="2",
    scene:"kingdom",
    hints:["pop удаляет пару по ключу.", "Запиши значения переменных после каждого шага.", "Ответ: print(2)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Список вместо словаря",
    story:"Инвентарь хранится неправильно. Сломанный код: inv = ['sword', 1] ⏎ print(inv['sword'])  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 1",
    blocks:["print(inv['sword'])", "inv = {'sword': 1}", "inv = ['sword', 1]"],
    targetCode:"inv = {'sword': 1}\nprint(inv['sword'])",
    check:(out,v)=> _pqN(out)==="1",
    scene:"kingdom",
    hints:["Доступ по имени — это словарь.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ninv = {'sword': 1}\nprint(inv['sword'])"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Карточки учеников",
    story:"Проект: список словарей.",
    objective:"Пройди по списку и выведи имя и возраст каждого. Вывод: Ali 13 | Vera 14",
    blocks:["print(k['name'], k['age'])", "for k in kids:", "kids = [{'name': 'Ali', 'age': 13}, {'name': 'Vera', 'age': 14}]"],
    targetCode:"kids = [{'name': 'Ali', 'age': 13}, {'name': 'Vera', 'age': 14}]\nfor k in kids:\n    print(k['name'], k['age'])",
    check:(out,v)=> _pqN(out)==="Ali 13\nVera 14",
    scene:"kingdom",
    hints:["Каждый элемент списка — словарь.", "Блок за блоком: kids = [{'name': 'Ali', 'a… → for k in kids: → print(k['name'], k['age'])", "Готовый код:\nkids = [{'name': 'Ali', 'age': 13}, {'name': 'Vera', 'age': 14}]\nfor k in kids:\n    print(k['name'], k['age'])"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Перевод слов",
    story:"Словарь переводов.",
    objective:"Считай слово и выведи перевод из словаря (get, запасное 'unknown'). Вывод: собака",
    blocks:["print(tr.get(w, 'unknown'))", "tr = {'cat': 'кошка', 'dog': 'собака'}", "w = input()"],
    targetCode:"tr = {'cat': 'кошка', 'dog': 'собака'}\nw = input()\nprint(tr.get(w, 'unknown'))",
    check:(out,v)=> _pqN(out)==="собака",
    scene:"kingdom",
    simInput:["dog"],
    hints:["get с запасным значением.", "Блок за блоком: tr = {'cat': 'кошка', 'dog… → w = input() → print(tr.get(w, 'unknown'))", "Готовый код:\ntr = {'cat': 'кошка', 'dog': 'собака'}\nw = input()\nprint(tr.get(w, 'unknown'))"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Обновление казны",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Королевство получило налоги.",
    objective:"Прибавь по 10 к каждой монете (изменение по ключу в цикле). Вывод: {'a': 15, 'b': 18}",
    blocks:["bank[k] += 10", "print(bank)", "bank = {'a': 5, 'b': 8}", "for k in bank:"],
    targetCode:"bank = {'a': 5, 'b': 8}\nfor k in bank:\n    bank[k] += 10\nprint(bank)",
    check:(out,v)=> _pqN(out)==="{'a': 15, 'b': 18}",
    scene:"kingdom",
    hints:["for k in словарь перебирает ключи.", "Блок за блоком: bank = {'a': 5, 'b': 8} → for k in bank: → bank[k] += 10 …", "Готовый код:\nbank = {'a': 5, 'b': 8}\nfor k in bank:\n    bank[k] += 10\nprint(bank)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Подсчёт слов",
    story:"Хранитель считает слова в тексте.",
    objective:"Для 'a b a c a b' выведи количество каждого слова в порядке появления (ключ значение). Вывод: a 3 | b 2 | c 1",
    check:(out,v)=> _pqN(out)==="a 3\nb 2\nc 1" && _pqR(v,["\\bfor\\b", "get"]),
    scene:"kingdom",
    hints:["Метод get с запасным 0.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: counts = {} …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Перезапись вместо накопления",
    story:"Нужно посчитать буквы, а всегда получается 1. Сломанный код: c = {} ⏎ for ch in 'aab': ⏎ ⇥ c[ch] = 1 ⏎ print(c)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: {'a': 2, 'b': 1}",
    check:(out,v)=> _pqN(out)==="{'a': 2, 'b': 1}" && _pqR(v,["get"]),
    scene:"kingdom",
    hints:["Прибавляй к старому значению.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: c = {} …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Самый богатый",
    story:"Найди самого богатого барона.",
    objective:"Для {'A': 30, 'B': 55, 'C': 40} выведи имя с наибольшим значением и его значение. Вывод: B 55",
    check:(out,v)=> _pqN(out)==="B 55" && _pqR(v,["\\bfor\\b"]),
    scene:"kingdom",
    hints:["Хранить лучший ключ.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: d = {'A': 30, 'B': 55, 'C': 40} …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Словарь + список",
    story:"Собери склад из двух списков.",
    objective:"Из names=['a','b','c'] и qty=[3,5,2] собери словарь и выведи его, затем общее число предметов. Вывод: {'a': 3, 'b': 5, 'c': 2} | 10",
    check:(out,v)=> _pqN(out)==="{'a': 3, 'b': 5, 'c': 2}\n10" && _pqR(v,["\\bfor\\b"]),
    scene:"kingdom",
    hints:["Индекс i связывает два списка.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: names = ['a', 'b', 'c'] …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Король Значение",
    story:"Король Значение охраняет Ключ ядра №13! Король проводит перепись! Победи — и часть цифровой карты снова заработает.",
    objective:"people = [{'name':'Ali','age':13},{'name':'Vera','age':15},{'name':'Omar','age':14}]. Выведи имена старше 13, средний возраст (Avg: …), и словарь возрастов {имя: возраст}. Вывод: Vera | Omar | Avg: 14.0 | {'Ali': 13, 'Vera': 15, 'Omar': 14}",
    check:(out,v)=> _pqN(out)==="Vera\nOmar\nAvg: 14.0\n{'Ali': 13, 'Vera': 15, 'Omar': 14}" && _pqR(v,["\\bfor\\b"]),
    scene:"kingdom-boss",
    hints:["Цикл, if, накопитель и построение словаря.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Цикл, if, накопитель и построение словаря."]
  }
];

/* ===== MODULE 14: Set Sanctum — множества ===== */
MISSIONS[14] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первое множество",
    story:"Ты проникаешь в Set Sanctum: магические кристаллы уникальны, но вирус Null размножил их копии. Маг Уникум: «В множестве нет повторов!»",
    objective:"Создай множество из [1, 2, 2, 3] и выведи его длину. Вывод: 3",
    blocks:["s = set([1, 2, 2, 3])", "print(len(s))"],
    targetCode:"s = set([1, 2, 2, 3])\nprint(len(s))",
    check:(out,v)=> _pqN(out)==="3",
    scene:"sanctum",
    hints:["set() убирает дубликаты.", "Блок за блоком: s = set([1, 2, 2, 3]) → print(len(s))", "Готовый код:\ns = set([1, 2, 2, 3])\nprint(len(s))"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Добавить кристалл",
    story:"Добавь новый кристалл.",
    objective:"Добавь 4 методом add; повтор 4 не должен появиться. Вывод: 4",
    blocks:["print(len(s))", "s.add(4)", "s = {1, 2, 3}"],
    targetCode:"s = {1, 2, 3}\ns.add(4)\ns.add(4)\nprint(len(s))",
    check:(out,v)=> _pqN(out)==="4",
    scene:"sanctum",
    hints:["add ничего не делает, если элемент есть.", "Блок за блоком: s = {1, 2, 3} → s.add(4) → s.add(4) …", "Готовый код:\ns = {1, 2, 3}\ns.add(4)\ns.add(4)\nprint(len(s))"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Убрать кристалл",
    story:"Один кристалл треснул.",
    objective:"Удали 2 методом remove и выведи отсортированный результат. Вывод: [1, 3]",
    blocks:["print(sorted(s))", "s = {1, 2, 3}", "s.remove(2)"],
    targetCode:"s = {1, 2, 3}\ns.remove(2)\nprint(sorted(s))",
    check:(out,v)=> _pqN(out)==="[1, 3]",
    scene:"sanctum",
    hints:["sorted(set) даёт список.", "Блок за блоком: s = {1, 2, 3} → s.remove(2) → print(sorted(s))", "Готовый код:\ns = {1, 2, 3}\ns.remove(2)\nprint(sorted(s))"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Дубликаты уходят",
    story:"Сколько элементов? Код: s = {'a', 'b', 'a', 'c', 'b'} ⏎ print(len(s))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(3)", "print(2)", "print(4)", "print(5)"],
    targetCode:"print(3)",
    check:(out,v)=> _pqN(out)==="3",
    scene:"sanctum",
    hints:["Только уникальные значения.", "Запиши значения переменных после каждого шага.", "Ответ: print(3)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Есть ли кристалл",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Проверь принадлежность.",
    objective:"Через in проверь, есть ли 3: Yes или No. Вывод: Yes",
    blocks:["print('No')", "if 3 in s:", "print('Yes')", "s = {1, 2, 3}", "else:"],
    targetCode:"s = {1, 2, 3}\nif 3 in s:\n    print('Yes')\nelse:\n    print('No')",
    check:(out,v)=> _pqN(out)==="Yes",
    scene:"sanctum",
    hints:["in работает быстро для множеств.", "Блок за блоком: s = {1, 2, 3} → if 3 in s: → print('Yes') …", "Готовый код:\ns = {1, 2, 3}\nif 3 in s:\n    print('Yes')\nelse:\n    print('No')"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Уникальные буквы",
    story:"Сколько разных букв в слове?",
    objective:"Выведи количество уникальных букв слова 'letter'. Вывод: 4",
    blocks:["print(len(set('letter')))"],
    targetCode:"print(len(set('letter')))",
    check:(out,v)=> _pqN(out)==="4",
    scene:"sanctum",
    hints:["set(строка) — множество букв.", "Блок за блоком: print(len(set('letter')))", "Готовый код:\nprint(len(set('letter')))"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Объединение",
    story:"Слей два хранилища.",
    objective:"Выведи отсортированное объединение множеств. Вывод: [1, 2, 3]",
    blocks:["a = {1, 2}", "b = {2, 3}", "print(sorted(a | b))"],
    targetCode:"a = {1, 2}\nb = {2, 3}\nprint(sorted(a | b))",
    check:(out,v)=> _pqN(out)==="[1, 2, 3]",
    scene:"sanctum",
    hints:["Знак | — объединение.", "Блок за блоком: a = {1, 2} → b = {2, 3} → print(sorted(a | b))", "Готовый код:\na = {1, 2}\nb = {2, 3}\nprint(sorted(a | b))"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Пустой фигурные скобки",
    story:"Нужно создать пустое множество. Сломанный код: s = {} ⏎ s.add(1) ⏎ print(s)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: {1}",
    blocks:["print(s)", "s = {}", "s = set()", "s.add(1)"],
    targetCode:"s = set()\ns.add(1)\nprint(s)",
    check:(out,v)=> _pqN(out)==="{1}",
    scene:"sanctum",
    hints:["{} — это пустой словарь; для множества используй set().", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ns = set()\ns.add(1)\nprint(s)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Пересечение",
    story:"Что общего у двух магов?",
    objective:"Выведи отсортированное пересечение. Вывод: [2, 3]",
    blocks:["print(sorted(a & b))", "a = {1, 2, 3}", "b = {2, 3, 4}"],
    targetCode:"a = {1, 2, 3}\nb = {2, 3, 4}\nprint(sorted(a & b))",
    check:(out,v)=> _pqN(out)==="[2, 3]",
    scene:"sanctum",
    hints:["Знак & — пересечение.", "Блок за блоком: a = {1, 2, 3} → b = {2, 3, 4} → print(sorted(a & b))", "Готовый код:\na = {1, 2, 3}\nb = {2, 3, 4}\nprint(sorted(a & b))"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Двойник Кристалл",
    story:"Двойник Кристалл преграждает путь! Найди то, что есть только в первом множестве.",
    objective:"Выведи разность a - b отсортированной. Вывод: [1, 2]",
    blocks:["print(sorted(a - b))", "a = {1, 2, 3, 4}", "b = {3, 4, 5}"],
    targetCode:"a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(sorted(a - b))",
    check:(out,v)=> _pqN(out)==="[1, 2]",
    scene:"sanctum-miniboss",
    hints:["Знак - — разность.", "Блок за блоком: a = {1, 2, 3, 4} → b = {3, 4, 5} → print(sorted(a - b))", "Готовый код:\na = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(sorted(a - b))"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Список без повторов",
    story:"Что выведет программа? Код: a = [3, 1, 3, 2, 1] ⏎ print(len(set(a)))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(4)", "print(3)", "print(5)", "print(2)"],
    targetCode:"print(3)",
    check:(out,v)=> _pqN(out)==="3",
    scene:"sanctum",
    hints:["Дубликаты пропадают.", "Запиши значения переменных после каждого шага.", "Ответ: print(3)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Индекс у множества",
    story:"Множество не хранит порядок. Сломанный код: s = {5, 6} ⏎ print(s[0])  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 5",
    blocks:["print(sorted(s)[0])", "s = {5, 6}", "print(s[0])"],
    targetCode:"s = {5, 6}\nprint(sorted(s)[0])",
    check:(out,v)=> _pqN(out)==="5",
    scene:"sanctum",
    hints:["Множество не поддерживает индексы. Отсортируй в список.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ns = {5, 6}\nprint(sorted(s)[0])"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Уникальные гости",
    story:"Проект: список посетителей с повторами.",
    objective:"Считай 4 имени, добавь в множество, выведи число уникальных. Вывод: 3",
    blocks:["for i in range(4):", "print(len(guests))", "guests = set()", "guests.add(input())"],
    targetCode:"guests = set()\nfor i in range(4):\n    guests.add(input())\nprint(len(guests))",
    check:(out,v)=> _pqN(out)==="3",
    scene:"sanctum",
    simInput:["Ali", "Vera", "Ali", "Omar"],
    hints:["add в цикле.", "Блок за блоком: guests = set() → for i in range(4): → guests.add(input()) …", "Готовый код:\nguests = set()\nfor i in range(4):\n    guests.add(input())\nprint(len(guests))"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Общие слова",
    story:"Два текста — какие слова общие?",
    objective:"Раздели строки split() и выведи отсортированное пересечение. Вывод: ['and', 'sky']",
    blocks:["b = set('sky and sun'.split())", "print(sorted(a & b))", "a = set('sea and sky'.split())"],
    targetCode:"a = set('sea and sky'.split())\nb = set('sky and sun'.split())\nprint(sorted(a & b))",
    check:(out,v)=> _pqN(out)==="['and', 'sky']",
    scene:"sanctum",
    hints:["split() → set() → &.", "Блок за блоком: a = set('sea and sky'.spli… → b = set('sky and sun'.spli… → print(sorted(a & b))", "Готовый код:\na = set('sea and sky'.split())\nb = set('sky and sun'.split())\nprint(sorted(a & b))"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Обход множества",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Пройди по всем кристаллам.",
    objective:"Выведи элементы множества через sorted(). Вывод: a | b | c",
    blocks:["print(x)", "s = {'c', 'a', 'b'}", "for x in sorted(s):"],
    targetCode:"s = {'c', 'a', 'b'}\nfor x in sorted(s):\n    print(x)",
    check:(out,v)=> _pqN(out)==="a\nb\nc",
    scene:"sanctum",
    hints:["sorted даёт стабильный порядок.", "Блок за блоком: s = {'c', 'a', 'b'} → for x in sorted(s): → print(x)", "Готовый код:\ns = {'c', 'a', 'b'}\nfor x in sorted(s):\n    print(x)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Убрать повторы",
    story:"Очисти список от повторов.",
    objective:"Из [5, 3, 5, 1, 3] сделай отсортированный список уникальных значений и выведи его. Вывод: [1, 3, 5]",
    check:(out,v)=> _pqN(out)==="[1, 3, 5]" && _pqR(v,["set"]),
    scene:"sanctum",
    hints:["set → sorted.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: a = [5, 3, 5, 1, 3] …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Список против множества",
    story:"Нужно проверить, есть ли повторы в списке. Сломанный код: a = [1, 2, 2] ⏎ if len(a) == len(a): ⏎ ⇥ print('unique') ⏎ else: ⏎ ⇥ print('duplicates')  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: duplicates",
    check:(out,v)=> _pqN(out)==="duplicates" && _pqR(v,["set"]),
    scene:"sanctum",
    hints:["Сравни длину списка и множества.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: a = [1, 2, 2] …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Что потеряно",
    story:"Сравни два инвентаря.",
    objective:"Из a=['sword','bow','axe'] и b=['bow','shield'] выведи, что есть только в a (по алфавиту), и общее число разных предметов. Вывод: ['axe', 'sword'] | 4",
    check:(out,v)=> _pqN(out)==="['axe', 'sword']\n4" && _pqR(v,["set"]),
    scene:"sanctum",
    hints:["Разность и объединение.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: a = ['sword', 'bow', 'axe'] …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Уникальные суммы",
    story:"Сколько разных сумм у пар?",
    objective:"Для чисел [1, 2, 3] найди все суммы i + j (i, j из списка) и выведи, сколько уникальных сумм получилось. Вывод: 5",
    check:(out,v)=> _pqN(out)==="5" && _pqR(v,["\\bfor\\b", "set"]),
    scene:"sanctum",
    hints:["Вложенные циклы + множество.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: a = [1, 2, 3] …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Архимаг Пересечение",
    story:"Архимаг Пересечение охраняет Ключ ядра №14! Архимаг сверяет гильдии! Победи — и часть цифровой карты снова заработает.",
    objective:"mag = {'fire','ice','air'}; art = {'ice','earth','air','fire'}. Выведи общих (sorted), только у art (sorted), число всех уникальных, а затем для слова 'mississippi' выведи число уникальных букв и их отсортированный список. Вывод: ['air', 'fire', 'ice'] | ['earth'] | 4 … (5 строк)",
    check:(out,v)=> _pqN(out)==="['air', 'fire', 'ice']\n['earth']\n4\n4\n['i', 'm', 'p', 's']" && _pqR(v,["set", "sorted"]),
    scene:"sanctum-boss",
    hints:["Операции &, -, |, len и sorted.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Операции &, -, |, len и sorted."]
  }
];

/* ===== MODULE 15: Function Temple — функции ===== */
MISSIONS[15] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первое заклинание",
    story:"Ты входишь в Function Temple: жрецы хранят заклинания-функции, но вирус Null заглушил все их вызовы. Жрец Def: «Функция — заклинание с именем, которое можно вызывать сколько угодно раз.»",
    objective:"Определи функцию hello() и вызови её. Вывод: Hello, Temple!",
    blocks:["def hello():", "print('Hello, Temple!')", "hello()"],
    targetCode:"def hello():\n    print('Hello, Temple!')\nhello()",
    check:(out,v)=> _pqN(out)==="Hello, Temple!",
    scene:"temple",
    hints:["def имя(): — тело с отступом; вызов — имя().", "Блок за блоком: def hello(): → print('Hello, Temple!') → hello()", "Готовый код:\ndef hello():\n    print('Hello, Temple!')\nhello()"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Три вызова",
    story:"Одно заклинание — три раза.",
    objective:"Вызови функцию cheer() три раза. Вывод: Hooray! | Hooray! | Hooray!",
    blocks:["def cheer():", "print('Hooray!')", "cheer()"],
    targetCode:"def cheer():\n    print('Hooray!')\ncheer()\ncheer()\ncheer()",
    check:(out,v)=> _pqN(out)==="Hooray!\nHooray!\nHooray!",
    scene:"temple",
    hints:["Функцию определяют один раз, вызывают многократно.", "Блок за блоком: def cheer(): → print('Hooray!') → cheer() …", "Готовый код:\ndef cheer():\n    print('Hooray!')\ncheer()\ncheer()\ncheer()"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Заклинание с цифрой",
    story:"Функция может содержать цикл.",
    objective:"Функция count3 выводит 1, 2, 3 циклом for; вызови её. Вывод: 1 | 2 | 3",
    blocks:["def count3():", "print(i)", "count3()", "for i in range(1, 4):"],
    targetCode:"def count3():\n    for i in range(1, 4):\n        print(i)\ncount3()",
    check:(out,v)=> _pqN(out)==="1\n2\n3",
    scene:"temple",
    hints:["Тело функции — с отступом; цикл вложен глубже.", "Блок за блоком: def count3(): → for i in range(1, 4): → print(i) …", "Готовый код:\ndef count3():\n    for i in range(1, 4):\n        print(i)\ncount3()"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Порядок вызовов",
    story:"Что выведет программа? Код: def f(): ⏎ ⇥ print('A', end='') ⏎ print('B', end='') ⏎ f() ⏎ print('C', end='')  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('CBA')", "print('ABC')", "print('BCA')", "print('BAC')"],
    targetCode:"print('BAC')",
    check:(out,v)=> _pqN(out)==="BAC",
    scene:"temple",
    hints:["def только объявляет функцию; она запускается при вызове.", "Запиши значения переменных после каждого шага.", "Ответ: print('BAC')"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Приветствие с именем",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Заклинание принимает имя.",
    objective:"Функция greet(name) выводит Hi, name; вызови с 'Ali'. Вывод: Hi, Ali",
    blocks:["def greet(name):", "print('Hi,', name)", "greet('Ali')"],
    targetCode:"def greet(name):\n    print('Hi,', name)\ngreet('Ali')",
    check:(out,v)=> _pqN(out)==="Hi, Ali",
    scene:"temple",
    hints:["name — параметр; 'Ali' — аргумент.", "Блок за блоком: def greet(name): → print('Hi,', name) → greet('Ali')", "Готовый код:\ndef greet(name):\n    print('Hi,', name)\ngreet('Ali')"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Сумма двух",
    story:"Складывай числа заклинанием.",
    objective:"Функция add(a, b) выводит сумму; вызови add(3, 4). Вывод: 7",
    blocks:["def add(a, b):", "print(a + b)", "add(3, 4)"],
    targetCode:"def add(a, b):\n    print(a + b)\nadd(3, 4)",
    check:(out,v)=> _pqN(out)==="7",
    scene:"temple",
    hints:["Два параметра через запятую.", "Блок за блоком: def add(a, b): → print(a + b) → add(3, 4)", "Готовый код:\ndef add(a, b):\n    print(a + b)\nadd(3, 4)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Функция с if",
    story:"Проверь пропуск.",
    objective:"Функция check(age) выводит Enter при age >= 13, иначе Stop; вызови для 12 и 14. Вывод: Stop | Enter",
    blocks:["else:", "check(14)", "def check(age):", "print('Enter')", "check(12)", "print('Stop')", "if age >= 13:"],
    targetCode:"def check(age):\n    if age >= 13:\n        print('Enter')\n    else:\n        print('Stop')\ncheck(12)\ncheck(14)",
    check:(out,v)=> _pqN(out)==="Stop\nEnter",
    scene:"temple",
    hints:["if/else внутри функции.", "Блок за блоком: def check(age): → if age >= 13: → print('Enter') …", "Готовый код:\ndef check(age):\n    if age >= 13:\n        print('Enter')\n    else:\n        print('Stop')\ncheck(12)\ncheck(14)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Забыл скобки",
    story:"Функция не вызвалась. Сломанный код: def hi(): ⏎ ⇥ print('Hi') ⏎ hi  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: Hi",
    blocks:["print('Hi')", "hi()", "def hi():", "hi"],
    targetCode:"def hi():\n    print('Hi')\nhi()",
    check:(out,v)=> _pqN(out)==="Hi",
    scene:"temple",
    hints:["Вызов — имя со скобками.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ndef hi():\n    print('Hi')\nhi()"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Звёздный ряд",
    story:"Функция рисует ряд звёзд.",
    objective:"Функция stars(n) выводит n звёзд в строку; вызови stars(4). Вывод: ****",
    blocks:["stars(4)", "for i in range(n):", "print('*', end='')", "print()", "def stars(n):"],
    targetCode:"def stars(n):\n    for i in range(n):\n        print('*', end='')\n    print()\nstars(4)",
    check:(out,v)=> _pqN(out)==="****",
    scene:"temple",
    hints:["Цикл внутри функции.", "Блок за блоком: def stars(n): → for i in range(n): → print('*', end='') …", "Готовый код:\ndef stars(n):\n    for i in range(n):\n        print('*', end='')\n    print()\nstars(4)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Страж Вызова",
    story:"Страж Вызова преграждает путь! Страж вызывает одну функцию из другой.",
    objective:"line() выводит '---', box() выводит line, слово BOX, line. Вывод: --- | BOX | ---",
    blocks:["print('BOX')", "def line():", "line()", "box()", "print('---')", "def box():"],
    targetCode:"def line():\n    print('---')\ndef box():\n    line()\n    print('BOX')\n    line()\nbox()",
    check:(out,v)=> _pqN(out)==="---\nBOX\n---",
    scene:"temple-miniboss",
    hints:["Функции могут вызывать друг друга.", "Блок за блоком: def line(): → print('---') → def box(): …", "Готовый код:\ndef line():\n    print('---')\ndef box():\n    line()\n    print('BOX')\n    line()\nbox()"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Вызов с аргументом",
    story:"Что выведет программа? Код: def sq(n): ⏎ ⇥ print(n * n, end='-') ⏎ sq(3) ⏎ sq(4)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('9-16-')", "print('9-16')", "print('16-9-')", "print('7-')"],
    targetCode:"print('9-16-')",
    check:(out,v)=> _pqN(out)==="9-16-",
    scene:"temple",
    hints:["Каждый вызов печатает отдельно.", "Запиши значения переменных после каждого шага.", "Ответ: print('9-16-')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Вызов раньше объявления",
    story:"Функцию используют до def. Сломанный код: hello() ⏎ def hello(): ⏎ ⇥ print('Hi')  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: Hi",
    blocks:["hello()", "print('Hi')", "def hello():"],
    targetCode:"def hello():\n    print('Hi')\nhello()",
    check:(out,v)=> _pqN(out)==="Hi",
    scene:"temple",
    hints:["Функцию сначала определи, потом вызывай.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ndef hello():\n    print('Hi')\nhello()"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Таблица умножения",
    story:"Проект: функция печатает таблицу на n.",
    objective:"table(n) выводит n x 1 … n x 3; вызови table(5). Вывод: 5 x 1 = 5 | 5 x 2 = 10 | 5 x 3 = 15",
    blocks:["def table(n):", "for i in range(1, 4):", "table(5)", "print(n, 'x', i, '=', n * i)"],
    targetCode:"def table(n):\n    for i in range(1, 4):\n        print(n, 'x', i, '=', n * i)\ntable(5)",
    check:(out,v)=> _pqN(out)==="5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15",
    scene:"temple",
    hints:["Параметр n внутри цикла.", "Блок за блоком: def table(n): → for i in range(1, 4): → print(n, 'x', i, '=', n * … …", "Готовый код:\ndef table(n):\n    for i in range(1, 4):\n        print(n, 'x', i, '=', n * i)\ntable(5)"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Функция и список",
    story:"Функция проходит по списку.",
    objective:"Функция show(items) выводит элементы; вызови show(['a', 'b']). Вывод: a | b",
    blocks:["def show(items):", "print(x)", "show(['a', 'b'])", "for x in items:"],
    targetCode:"def show(items):\n    for x in items:\n        print(x)\nshow(['a', 'b'])",
    check:(out,v)=> _pqN(out)==="a\nb",
    scene:"temple",
    hints:["В параметр можно передать список.", "Блок за блоком: def show(items): → for x in items: → print(x) …", "Готовый код:\ndef show(items):\n    for x in items:\n        print(x)\nshow(['a', 'b'])"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Приветствие по вводу",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Введи имя — получи привет.",
    objective:"Считай имя и вызови greet(name). Вывод: Hello, Vera",
    blocks:["name = input()", "def greet(name):", "greet(name)", "print('Hello,', name.title())"],
    targetCode:"def greet(name):\n    print('Hello,', name.title())\nname = input()\ngreet(name)",
    check:(out,v)=> _pqN(out)==="Hello, Vera",
    scene:"temple",
    simInput:["vera"],
    hints:["input вне функции, вызов после.", "Блок за блоком: def greet(name): → print('Hello,', name.title… → name = input() …", "Готовый код:\ndef greet(name):\n    print('Hello,', name.title())\nname = input()\ngreet(name)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Сумма списка",
    story:"Верховный Жрец хочет сумму запасов.",
    objective:"Функция total(nums) выводит сумму элементов списка; вызови для [5, 10, 20]. Вывод: 35",
    check:(out,v)=> _pqN(out)==="35" && _pqR(v,["def total", "\\bfor\\b"]),
    scene:"temple",
    hints:["Накопитель внутри функции.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def total(nums): …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Неверный отступ",
    story:"Тело функции не в функции. Сломанный код: def show(n): ⏎ print(n) ⏎ show(3)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 3",
    check:(out,v)=> _pqN(out)==="3" && _pqR(v,["def show"]),
    scene:"temple",
    hints:["После def тело пишется с отступом.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: def show(n): …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Чёт или нечёт",
    story:"Функция-судья.",
    objective:"Функция kind(n) выводит even или odd. Вызови её для чисел 1..4 циклом. Вывод: odd | even | odd | even",
    check:(out,v)=> _pqN(out)==="odd\neven\nodd\neven" && _pqR(v,["def kind", "\\bfor\\b"]),
    scene:"temple",
    hints:["Вызов функции внутри цикла.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def kind(n): …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Функции + словарь",
    story:"Жрец ведёт учёт.",
    objective:"Функция add_item(inv, name) прибавляет 1 к inv[name] (get); вызови трижды для 'a','b','a' и выведи словарь. Вывод: {'a': 2, 'b': 1}",
    check:(out,v)=> _pqN(out)==="{'a': 2, 'b': 1}" && _pqR(v,["def add_item"]),
    scene:"temple",
    hints:["Словарь меняется внутри функции.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def add_item(inv, name): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Верховный Жрец Функция",
    story:"Верховный Жрец Функция охраняет Ключ ядра №15! Жрец проверяет все твои знания! Победи — и часть цифровой карты снова заработает.",
    objective:"Напиши функции: line() — ряд из 5 дефисов; power(name, hp) — выводит name, hp и Alive (hp > 0) или Dead; report(heroes) — для списка кортежей (имя, hp) вызывает power. Вызови line(), затем report([('Ali', 50), ('Vera', 0)]), затем line(). Вывод: ----- | Ali 50 Alive | Vera 0 Dead | -----",
    check:(out,v)=> _pqN(out)==="-----\nAli 50 Alive\nVera 0 Dead\n-----" && _pqR(v,["def line", "def power", "def report"]),
    scene:"temple-boss",
    hints:["Три функции, цикл, распаковка кортежа и if/else.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Три функции, цикл, распаковка кортежа и if/else."]
  }
];

/* ===== MODULE 16: Parameter Peaks — параметры функций ===== */
MISSIONS[16] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Параметр и аргумент",
    story:"Ты поднимаешься на Parameter Peaks: горные телепорты ждут правильных аргументов, а вирус Null подменил значения. Проводник Аргумент: «Параметр — имя в def, аргумент — значение при вызове.»",
    objective:"Функция hello(name) здоровается; вызови с 'Peak'. Вывод: Hello, Peak",
    blocks:["def hello(name):", "print('Hello,', name)", "hello('Peak')"],
    targetCode:"def hello(name):\n    print('Hello,', name)\nhello('Peak')",
    check:(out,v)=> _pqN(out)==="Hello, Peak",
    scene:"peaks",
    hints:["В скобках def — параметр, при вызове — аргумент.", "Блок за блоком: def hello(name): → print('Hello,', name) → hello('Peak')", "Готовый код:\ndef hello(name):\n    print('Hello,', name)\nhello('Peak')"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Два параметра",
    story:"Телепорт принимает высоту и вес.",
    objective:"Функция info(h, w) выводит их; вызови info(120, 30). Вывод: 120 30",
    blocks:["def info(h, w):", "info(120, 30)", "print(h, w)"],
    targetCode:"def info(h, w):\n    print(h, w)\ninfo(120, 30)",
    check:(out,v)=> _pqN(out)==="120 30",
    scene:"peaks",
    hints:["Аргументы идут в том же порядке.", "Блок за блоком: def info(h, w): → print(h, w) → info(120, 30)", "Готовый код:\ndef info(h, w):\n    print(h, w)\ninfo(120, 30)"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Значение по умолчанию",
    story:"Если имя не указано — Guest.",
    objective:"Функция hi(name='Guest'): вызови без аргумента и с 'Ali'. Вывод: Hi, Guest | Hi, Ali",
    blocks:["def hi(name='Guest'):", "hi('Ali')", "print('Hi,', name)", "hi()"],
    targetCode:"def hi(name='Guest'):\n    print('Hi,', name)\nhi()\nhi('Ali')",
    check:(out,v)=> _pqN(out)==="Hi, Guest\nHi, Ali",
    scene:"peaks",
    hints:["name='Guest' — значение по умолчанию.", "Блок за блоком: def hi(name='Guest'): → print('Hi,', name) → hi() …", "Готовый код:\ndef hi(name='Guest'):\n    print('Hi,', name)\nhi()\nhi('Ali')"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Порядок аргументов",
    story:"Что выведет программа? Код: def f(a, b): ⏎ ⇥ print(a - b, end='') ⏎ f(9, 4) ⏎ f(4, 9)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('5-5-')", "print(-55)", "print('5-5')", "print('5--5')"],
    targetCode:"print('5-5')",
    check:(out,v)=> _pqN(out)==="5-5",
    scene:"peaks",
    hints:["Порядок важен: a - b.", "Запиши значения переменных после каждого шага.", "Ответ: print('5-5')"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Именованные аргументы",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Укажи параметры по именам.",
    objective:"Вызови box(w=2, h=5) для функции, печатающей площадь. Вывод: 10",
    blocks:["box(h=5, w=2)", "def box(w, h):", "print(w * h)"],
    targetCode:"def box(w, h):\n    print(w * h)\nbox(h=5, w=2)",
    check:(out,v)=> _pqN(out)==="10",
    scene:"peaks",
    hints:["Именованные аргументы можно менять местами.", "Блок за блоком: def box(w, h): → print(w * h) → box(h=5, w=2)", "Готовый код:\ndef box(w, h):\n    print(w * h)\nbox(h=5, w=2)"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Повтор слова",
    story:"Слово повторяется n раз.",
    objective:"Функция rep(word, n=2) печатает слово n раз через пробел; вызови rep('go') и rep('ha', 3). Вывод: go go  | ha ha ha ",
    blocks:["rep('ha', 3)", "print((word + ' ') * n)", "def rep(word, n=2):", "rep('go')"],
    targetCode:"def rep(word, n=2):\n    print((word + ' ') * n)\nrep('go')\nrep('ha', 3)",
    check:(out,v)=> _pqN(out)==="go go\nha ha ha",
    scene:"peaks",
    hints:["Строку можно умножать на число.", "Блок за блоком: def rep(word, n=2): → print((word + ' ') * n) → rep('go') …", "Готовый код:\ndef rep(word, n=2):\n    print((word + ' ') * n)\nrep('go')\nrep('ha', 3)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Не хватает аргумента",
    story:"Функции нужно два значения. Сломанный код: def add(a, b): ⏎ ⇥ print(a + b) ⏎ add(5)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 8",
    blocks:["add(5, 3)", "add(5)", "def add(a, b):", "print(a + b)"],
    targetCode:"def add(a, b):\n    print(a + b)\nadd(5, 3)",
    check:(out,v)=> _pqN(out)==="8",
    scene:"peaks",
    hints:["Сколько параметров — столько аргументов.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ndef add(a, b):\n    print(a + b)\nadd(5, 3)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Список как параметр",
    story:"Функция принимает список.",
    objective:"Функция total(nums) считает сумму; вызови total([1, 2, 3]). Вывод: 6",
    blocks:["total([1, 2, 3])", "for x in nums:", "def total(nums):", "s += x", "s = 0", "print(s)"],
    targetCode:"def total(nums):\n    s = 0\n    for x in nums:\n        s += x\n    print(s)\ntotal([1, 2, 3])",
    check:(out,v)=> _pqN(out)==="6",
    scene:"peaks",
    hints:["Внутрь можно передать список.", "Блок за блоком: def total(nums): → s = 0 → for x in nums: …", "Готовый код:\ndef total(nums):\n    s = 0\n    for x in nums:\n        s += x\n    print(s)\ntotal([1, 2, 3])"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Цикл вызовов",
    story:"Вызывай функцию в цикле.",
    objective:"Функция square(n) печатает квадрат; вызови для 1..3. Вывод: 1 | 4 | 9",
    blocks:["print(n * n)", "def square(n):", "for i in range(1, 4):", "square(i)"],
    targetCode:"def square(n):\n    print(n * n)\nfor i in range(1, 4):\n    square(i)",
    check:(out,v)=> _pqN(out)==="1\n4\n9",
    scene:"peaks",
    hints:["Значение счётчика — аргумент.", "Блок за блоком: def square(n): → print(n * n) → for i in range(1, 4): …", "Готовый код:\ndef square(n):\n    print(n * n)\nfor i in range(1, 4):\n    square(i)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Ледяной Порог",
    story:"Ледяной Порог преграждает путь! Порог рассчитывает скидку с умолчанием.",
    objective:"Функция price(cost, off=10) выводит cost - off; вызови price(100) и price(100, 25). Вывод: 90 | 75",
    blocks:["def price(cost, off=10):", "print(cost - off)", "price(100)", "price(100, 25)"],
    targetCode:"def price(cost, off=10):\n    print(cost - off)\nprice(100)\nprice(100, 25)",
    check:(out,v)=> _pqN(out)==="90\n75",
    scene:"peaks-miniboss",
    hints:["Параметры с умолчанием — после обычных.", "Блок за блоком: def price(cost, off=10): → print(cost - off) → price(100) …", "Готовый код:\ndef price(cost, off=10):\n    print(cost - off)\nprice(100)\nprice(100, 25)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Умолчание против аргумента",
    story:"Что выведет? Код: def p(x, y=2): ⏎ ⇥ print(x * y, end='|') ⏎ p(3) ⏎ p(3, 4)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('6|6|')", "print('12|6|')", "print('6|12|')", "print('6|8|')"],
    targetCode:"print('6|12|')",
    check:(out,v)=> _pqN(out)==="6|12|",
    scene:"peaks",
    hints:["Второй вызов заменяет умолчание.", "Запиши значения переменных после каждого шага.", "Ответ: print('6|12|')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Умолчание в начале",
    story:"Параметр без умолчания должен идти раньше. Сломанный код: def f(a=1, b): ⏎ ⇥ print(a + b) ⏎ f(2)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 3",
    blocks:["f(2)", "def f(a=1, b):", "print(a + b)", "def f(b, a=1):"],
    targetCode:"def f(b, a=1):\n    print(a + b)\nf(2)",
    check:(out,v)=> _pqN(out)==="3",
    scene:"peaks",
    hints:["Сначала обычные параметры, потом с умолчанием.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ndef f(b, a=1):\n    print(a + b)\nf(2)"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Приветствие с титулом",
    story:"Проект: универсальная функция приветствия.",
    objective:"greet(name, title='Mr') печатает 'title name'; вызови для 'Ali' и для 'Vera' с 'Dr'. Вывод: Mr Ali | Dr Vera",
    blocks:["def greet(name, title='Mr'):", "print(title, name)", "greet('Vera', 'Dr')", "greet('Ali')"],
    targetCode:"def greet(name, title='Mr'):\n    print(title, name)\ngreet('Ali')\ngreet('Vera', 'Dr')",
    check:(out,v)=> _pqN(out)==="Mr Ali\nDr Vera",
    scene:"peaks",
    hints:["Два вызова — два результата.", "Блок за блоком: def greet(name, title='Mr'… → print(title, name) → greet('Ali') …", "Готовый код:\ndef greet(name, title='Mr'):\n    print(title, name)\ngreet('Ali')\ngreet('Vera', 'Dr')"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Произвольное число аргументов",
    story:"Сколько бы гостей ни пришло.",
    objective:"Функция many(*names) выводит число имён; вызови many('a', 'b', 'c'). Вывод: 3",
    blocks:["def many(*names):", "many('a', 'b', 'c')", "print(len(names))"],
    targetCode:"def many(*names):\n    print(len(names))\nmany('a', 'b', 'c')",
    check:(out,v)=> _pqN(out)==="3",
    scene:"peaks",
    hints:["*names собирает аргументы в кортеж.", "Блок за блоком: def many(*names): → print(len(names)) → many('a', 'b', 'c')", "Готовый код:\ndef many(*names):\n    print(len(names))\nmany('a', 'b', 'c')"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Функция и ввод",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Значения приходят от пользователя.",
    objective:"Считай a и b (числа) и вызови function add(a, b). Вывод: 10",
    blocks:["def add(a, b):", "x = int(input())", "print(a + b)", "add(x, y)", "y = int(input())"],
    targetCode:"def add(a, b):\n    print(a + b)\nx = int(input())\ny = int(input())\nadd(x, y)",
    check:(out,v)=> _pqN(out)==="10",
    scene:"peaks",
    simInput:["4", "6"],
    hints:["Ввод — вне функции.", "Блок за блоком: def add(a, b): → print(a + b) → x = int(input()) …", "Готовый код:\ndef add(a, b):\n    print(a + b)\nx = int(input())\ny = int(input())\nadd(x, y)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Прямоугольник",
    story:"Йети измеряет пещеры.",
    objective:"Функция area(w, h=1) печатает площадь; вызови area(3, 4), area(5), area(h=2, w=6). Вывод: 12 | 5 | 12",
    check:(out,v)=> _pqN(out)==="12\n5\n12" && _pqR(v,["def area"]),
    scene:"peaks",
    hints:["Разные способы вызова.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def area(w, h=1): …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Перепутанные аргументы",
    story:"Функция должна вывести 'Ali is 13', но выводит наоборот. Сломанный код: def show(name, age): ⏎ ⇥ print(name, 'is', age) ⏎ show(13, 'Ali')  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: Ali is 13",
    check:(out,v)=> _pqN(out)==="Ali is 13" && _pqR(v,["def show"]),
    scene:"peaks",
    hints:["Порядок аргументов должен совпадать.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: def show(name, age): …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Статистика списка",
    story:"Функция принимает список и порог.",
    objective:"Функция count_big(nums, limit=5) печатает, сколько чисел больше limit. Вызови для [3, 8, 6, 1] с умолчанием и с 2. Вывод: 2 | 3",
    check:(out,v)=> _pqN(out)==="2\n3" && _pqR(v,["def count_big", "\\bfor\\b"]),
    scene:"peaks",
    hints:["Один параметр с умолчанием.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def count_big(nums, limit=5): …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Функция и словарь",
    story:"Передай словарь в функцию.",
    objective:"Функция show(hero) печатает name и hp из словаря; вызови для двух героев из списка. Вывод: Ali 70 | Vera 90",
    check:(out,v)=> _pqN(out)==="Ali 70\nVera 90" && _pqR(v,["def show", "\\bfor\\b"]),
    scene:"peaks",
    hints:["Словарь — тоже аргумент.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def show(hero): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Йети Дефолт",
    story:"Йети Дефолт охраняет Ключ ядра №16! Йети проверяет всё сразу! Победи — и часть цифровой карты снова заработает.",
    objective:"Напиши attack(power, bonus=0, name='Hero') → печатает 'name hits power+bonus'. Вызови attack(10), attack(10, 5), attack(7, name='Vera'), затем в цикле for для [3, 6] вызови attack(i, bonus=i). Вывод: Hero hits 10 | Hero hits 15 | Vera hits 7 … (5 строк)",
    check:(out,v)=> _pqN(out)==="Hero hits 10\nHero hits 15\nVera hits 7\nHero hits 6\nHero hits 12" && _pqR(v,["def attack", "\\bfor\\b"]),
    scene:"peaks-boss",
    hints:["Параметры, умолчания, именованные аргументы, цикл.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Параметры, умолчания, именованные аргументы, цикл."]
  }
];

/* ===== MODULE 17: Return Rocks — return ===== */
MISSIONS[17] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первый return",
    story:"Ты проходишь в Return Rocks: скалы возвращают значения, но вирус Null украл все результаты функций. Скалолаз Результат: «return отдаёт значение туда, откуда вызвали!»",
    objective:"Функция double(n) возвращает n * 2; выведи double(5). Вывод: 10",
    blocks:["print(double(5))", "return n * 2", "def double(n):"],
    targetCode:"def double(n):\n    return n * 2\nprint(double(5))",
    check:(out,v)=> _pqN(out)==="10",
    scene:"rocks",
    hints:["return не печатает — печатаем результат снаружи.", "Блок за блоком: def double(n): → return n * 2 → print(double(5))", "Готовый код:\ndef double(n):\n    return n * 2\nprint(double(5))"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Сумма",
    story:"Функция возвращает сумму.",
    objective:"add(a, b) возвращает a + b; выведи add(3, 4). Вывод: 7",
    blocks:["def add(a, b):", "print(add(3, 4))", "return a + b"],
    targetCode:"def add(a, b):\n    return a + b\nprint(add(3, 4))",
    check:(out,v)=> _pqN(out)==="7",
    scene:"rocks",
    hints:["Результат можно сразу вставить в print.", "Блок за блоком: def add(a, b): → return a + b → print(add(3, 4))", "Готовый код:\ndef add(a, b):\n    return a + b\nprint(add(3, 4))"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Сохранить результат",
    story:"Значение можно положить в переменную.",
    objective:"Сохрани result = square(6) и выведи. Вывод: 36",
    blocks:["print(result)", "result = square(6)", "return n * n", "def square(n):"],
    targetCode:"def square(n):\n    return n * n\nresult = square(6)\nprint(result)",
    check:(out,v)=> _pqN(out)==="36",
    scene:"rocks",
    hints:["Переменная получает значение return.", "Блок за блоком: def square(n): → return n * n → result = square(6) …", "Готовый код:\ndef square(n):\n    return n * n\nresult = square(6)\nprint(result)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Возврат и печать",
    story:"Что выведет программа? Код: def f(x): ⏎ ⇥ return x + 1 ⏎ print(f(f(1)))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(3)", "print(2)", "print(1)", "print(4)"],
    targetCode:"print(3)",
    check:(out,v)=> _pqN(out)==="3",
    scene:"rocks",
    hints:["Сначала внутренний вызов.", "Запиши значения переменных после каждого шага.", "Ответ: print(3)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Возврат текста",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Функция возвращает строку.",
    objective:"label(name) возвращает 'Hero ' + name; выведи label('Ali'). Вывод: Hero Ali",
    blocks:["print(label('Ali'))", "return 'Hero ' + name", "def label(name):"],
    targetCode:"def label(name):\n    return 'Hero ' + name\nprint(label('Ali'))",
    check:(out,v)=> _pqN(out)==="Hero Ali",
    scene:"rocks",
    hints:["Функция может вернуть строку.", "Блок за блоком: def label(name): → return 'Hero ' + name → print(label('Ali'))", "Готовый код:\ndef label(name):\n    return 'Hero ' + name\nprint(label('Ali'))"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Возврат с условием",
    story:"Функция-судья.",
    objective:"is_even(n) возвращает True/False; выведи для 4 и 7. Вывод: True | False",
    blocks:["def is_even(n):", "return n % 2 == 0", "print(is_even(4))", "print(is_even(7))"],
    targetCode:"def is_even(n):\n    return n % 2 == 0\nprint(is_even(4))\nprint(is_even(7))",
    check:(out,v)=> _pqN(out)==="True\nFalse",
    scene:"rocks",
    hints:["Сравнение само даёт True или False.", "Блок за блоком: def is_even(n): → return n % 2 == 0 → print(is_even(4)) …", "Готовый код:\ndef is_even(n):\n    return n % 2 == 0\nprint(is_even(4))\nprint(is_even(7))"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Ранний return",
    story:"Функция завершается на первом return.",
    objective:"sign(n): при n > 0 вернуть 'plus', при n < 0 — 'minus', иначе 'zero'. Выведи sign(-3). Вывод: minus",
    blocks:["print(sign(-3))", "if n > 0:", "if n < 0:", "return 'zero'", "return 'minus'", "def sign(n):", "return 'plus'"],
    targetCode:"def sign(n):\n    if n > 0:\n        return 'plus'\n    if n < 0:\n        return 'minus'\n    return 'zero'\nprint(sign(-3))",
    check:(out,v)=> _pqN(out)==="minus",
    scene:"rocks",
    hints:["После return функция заканчивается.", "Блок за блоком: def sign(n): → if n > 0: → return 'plus' …", "Готовый код:\ndef sign(n):\n    if n > 0:\n        return 'plus'\n    if n < 0:\n        return 'minus'\n    return 'zero'\nprint(sign(-3))"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Забытый return",
    story:"Функция ничего не вернула. Сломанный код: def add(a, b): ⏎ ⇥ a + b ⏎ print(add(2, 3))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 5",
    blocks:["def add(a, b):", "print(add(2, 3))", "return a + b", "a + b"],
    targetCode:"def add(a, b):\n    return a + b\nprint(add(2, 3))",
    check:(out,v)=> _pqN(out)==="5",
    scene:"rocks",
    hints:["Без return функция возвращает None.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ndef add(a, b):\n    return a + b\nprint(add(2, 3))"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Сумма списка",
    story:"Функция суммирует список.",
    objective:"total(nums) возвращает сумму; выведи total([4, 5, 6]). Вывод: 15",
    blocks:["print(total([4, 5, 6]))", "s += x", "s = 0", "def total(nums):", "return s", "for x in nums:"],
    targetCode:"def total(nums):\n    s = 0\n    for x in nums:\n        s += x\n    return s\nprint(total([4, 5, 6]))",
    check:(out,v)=> _pqN(out)==="15",
    scene:"rocks",
    hints:["return — после цикла.", "Блок за блоком: def total(nums): → s = 0 → for x in nums: …", "Готовый код:\ndef total(nums):\n    s = 0\n    for x in nums:\n        s += x\n    return s\nprint(total([4, 5, 6]))"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Каменный Возврат",
    story:"Каменный Возврат преграждает путь! Максимум из списка.",
    objective:"biggest(nums) возвращает наибольший элемент; выведи biggest([3, 9, 4]). Вывод: 9",
    blocks:["print(biggest([3, 9, 4]))", "return best", "best = nums[0]", "def biggest(nums):", "if x > best:", "for x in nums:", "best = x"],
    targetCode:"def biggest(nums):\n    best = nums[0]\n    for x in nums:\n        if x > best:\n            best = x\n    return best\nprint(biggest([3, 9, 4]))",
    check:(out,v)=> _pqN(out)==="9",
    scene:"rocks-miniboss",
    hints:["Не забудь вернуть best.", "Блок за блоком: def biggest(nums): → best = nums[0] → for x in nums: …", "Готовый код:\ndef biggest(nums):\n    best = nums[0]\n    for x in nums:\n        if x > best:\n            best = x\n    return best\nprint(biggest([3, 9, 4]))"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Возвращать до цикла",
    story:"Что вернёт функция? Код: def f(a): ⏎ ⇥ for x in a: ⏎ ⇥ ⇥ if x > 2: ⏎ ⇥ ⇥ ⇥ return x ⏎ ⇥ return 0 ⏎ print(f([1, 5, 3]))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(0)", "print(3)", "print(5)", "print(1)"],
    targetCode:"print(5)",
    check:(out,v)=> _pqN(out)==="5",
    scene:"rocks",
    hints:["return завершает функцию сразу.", "Запиши значения переменных после каждого шага.", "Ответ: print(5)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"return внутри цикла",
    story:"Сумма возвращается слишком рано. Сломанный код: def total(a): ⏎ ⇥ s = 0 ⏎ ⇥ for x in a: ⏎ ⇥ ⇥ s += x ⏎ ⇥ ⇥ return s ⏎ print(total([1, 2, 3]))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 6",
    blocks:["def total(a):", "return s", "for x in a:", "s = 0", "s += x", "print(total([1, 2, 3]))"],
    targetCode:"def total(a):\n    s = 0\n    for x in a:\n        s += x\n    return s\nprint(total([1, 2, 3]))",
    check:(out,v)=> _pqN(out)==="6",
    scene:"rocks",
    hints:["Отступ return определяет, когда он сработает.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ndef total(a):\n    s = 0\n    for x in a:\n        s += x\n    return s\nprint(total([1, 2, 3]))"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Два значения",
    story:"Возврат кортежа.",
    objective:"min_max(nums) возвращает (min, max); распакуй и выведи. Вывод: 2 8",
    blocks:["return min(nums), max(nums)", "lo, hi = min_max([5, 2, 8])", "print(lo, hi)", "def min_max(nums):"],
    targetCode:"def min_max(nums):\n    return min(nums), max(nums)\nlo, hi = min_max([5, 2, 8])\nprint(lo, hi)",
    check:(out,v)=> _pqN(out)==="2 8",
    scene:"rocks",
    hints:["Запятая после return создаёт кортеж.", "Блок за блоком: def min_max(nums): → return min(nums), max(nums) → lo, hi = min_max([5, 2, 8]) …", "Готовый код:\ndef min_max(nums):\n    return min(nums), max(nums)\nlo, hi = min_max([5, 2, 8])\nprint(lo, hi)"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Проверка палиндрома",
    story:"Проект: функция-судья для слов.",
    objective:"is_pal(w) возвращает True/False; проверь 'level' и 'abc'. Вывод: True | False",
    blocks:["def is_pal(w):", "print(is_pal('level'))", "print(is_pal('abc'))", "return w == w[::-1]"],
    targetCode:"def is_pal(w):\n    return w == w[::-1]\nprint(is_pal('level'))\nprint(is_pal('abc'))",
    check:(out,v)=> _pqN(out)==="True\nFalse",
    scene:"rocks",
    hints:["Сравни строку с её разворотом.", "Блок за блоком: def is_pal(w): → return w == w[::-1] → print(is_pal('level')) …", "Готовый код:\ndef is_pal(w):\n    return w == w[::-1]\nprint(is_pal('level'))\nprint(is_pal('abc'))"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Функции в цепочке",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Результат одной функции — вход другой.",
    objective:"double(n) и inc(n); выведи inc(double(4)). Вывод: 9",
    blocks:["def double(n):", "return n + 1", "print(inc(double(4)))", "def inc(n):", "return n * 2"],
    targetCode:"def double(n):\n    return n * 2\ndef inc(n):\n    return n + 1\nprint(inc(double(4)))",
    check:(out,v)=> _pqN(out)==="9",
    scene:"rocks",
    hints:["Вложенные вызовы выполняются изнутри.", "Блок за блоком: def double(n): → return n * 2 → def inc(n): …", "Готовый код:\ndef double(n):\n    return n * 2\ndef inc(n):\n    return n + 1\nprint(inc(double(4)))"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Среднее",
    story:"Скалолаз считает среднее.",
    objective:"avg(nums) возвращает среднее значение; выведи avg([2, 4, 9]). Вывод: 5.0",
    check:(out,v)=> _pqN(out)==="5.0" && _pqR(v,["return"]),
    scene:"rocks",
    hints:["Сумма / количество.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def avg(nums): …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Print вместо return",
    story:"Результат нужен для сложения, а функция только печатает. Сломанный код: def sq(n): ⏎ ⇥ print(n * n) ⏎ print(sq(3) + sq(4))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 25",
    check:(out,v)=> _pqN(out)==="25" && _pqR(v,["return"]),
    scene:"rocks",
    hints:["Чтобы использовать результат, нужен return.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: def sq(n): …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Фильтр чисел",
    story:"Собери чётные числа в функции.",
    objective:"evens(nums) возвращает список чётных; выведи evens([1, 2, 3, 4, 6]). Вывод: [2, 4, 6]",
    check:(out,v)=> _pqN(out)==="[2, 4, 6]" && _pqR(v,["return"]),
    scene:"rocks",
    hints:["Собирай список и возвращай его.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def evens(nums): …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Счёт слов",
    story:"Возвращай словарь.",
    objective:"count_letters(word) возвращает словарь частот букв; выведи для 'aab'. Вывод: {'a': 2, 'b': 1}",
    check:(out,v)=> _pqN(out)==="{'a': 2, 'b': 1}" && _pqR(v,["return"]),
    scene:"rocks",
    hints:["Функция может вернуть словарь.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def count_letters(word): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Титан Ретёрн",
    story:"Титан Ретёрн охраняет Ключ ядра №17! Титан хранит все ответы! Победи — и часть цифровой карты снова заработает.",
    objective:"Напиши: square(n), is_even(n), total(nums), stats(nums) → (min, max, total). Выведи square(7), is_even(10), total([1,2,3]), затем распакуй stats([4,1,9]) и выведи lo hi s. Вывод: 49 | True | 6 | 1 9 14",
    check:(out,v)=> _pqN(out)==="49\nTrue\n6\n1 9 14" && _pqR(v,["def square", "def stats"]),
    scene:"rocks-boss",
    hints:["Четыре функции с return, вызов одной из другой, кортежи.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Четыре функции с return, вызов одной из другой, кортежи."]
  }
];

/* ===== MODULE 18: Scope Swamp — scope ===== */
MISSIONS[18] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Локальная переменная",
    story:"Ты вязнешь в Scope Swamp: болото прячет переменные по слоям, а вирус Null путает локальное с глобальным. Страж Область: «Внутри функции — своя область видимости.»",
    objective:"Создай x внутри функции и выведи там же. Вывод: 5",
    blocks:["f()", "print(x)", "x = 5", "def f():"],
    targetCode:"def f():\n    x = 5\n    print(x)\nf()",
    check:(out,v)=> _pqN(out)==="5",
    scene:"swamp",
    hints:["x живёт только внутри f.", "Блок за блоком: def f(): → x = 5 → print(x) …", "Готовый код:\ndef f():\n    x = 5\n    print(x)\nf()"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Глобальная переменная",
    story:"Глобальные переменные видны в функциях.",
    objective:"Функция показывает глобальное имя. Вывод: Swamp",
    blocks:["def show():", "show()", "print(name)", "name = 'Swamp'"],
    targetCode:"name = 'Swamp'\ndef show():\n    print(name)\nshow()",
    check:(out,v)=> _pqN(out)==="Swamp",
    scene:"swamp",
    hints:["Читать глобальную можно без global.", "Блок за блоком: name = 'Swamp' → def show(): → print(name) …", "Готовый код:\nname = 'Swamp'\ndef show():\n    print(name)\nshow()"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Тёзка",
    story:"Локальная тёзка не трогает глобальную.",
    objective:"Выведи локальное и глобальное x. Вывод: 2 | 1",
    blocks:["x = 1", "print(x)", "f()", "def f():", "x = 2"],
    targetCode:"x = 1\ndef f():\n    x = 2\n    print(x)\nf()\nprint(x)",
    check:(out,v)=> _pqN(out)==="2\n1",
    scene:"swamp",
    hints:["Присваивание в функции создаёт локальную x.", "Блок за блоком: x = 1 → def f(): → x = 2 …", "Готовый код:\nx = 1\ndef f():\n    x = 2\n    print(x)\nf()\nprint(x)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Кто победит",
    story:"Что выведет программа? Код: x = 10 ⏎ def f(): ⏎ ⇥ x = 5 ⏎ ⇥ return x ⏎ f() ⏎ print(x)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(5)", "print(10)", "print(15)", "print(0)"],
    targetCode:"print(10)",
    check:(out,v)=> _pqN(out)==="10",
    scene:"swamp",
    hints:["Глобальная x не менялась.", "Запиши значения переменных после каждого шага.", "Ответ: print(10)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: global",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Нужно изменить глобальную переменную.",
    objective:"Функция add() увеличивает score на 1 с помощью global. Вывод: 2",
    blocks:["print(score)", "def add():", "score = 0", "add()", "global score", "score += 1"],
    targetCode:"score = 0\ndef add():\n    global score\n    score += 1\nadd()\nadd()\nprint(score)",
    check:(out,v)=> _pqN(out)==="2",
    scene:"swamp",
    hints:["global говорит: работаем с глобальной.", "Блок за блоком: score = 0 → def add(): → global score …", "Готовый код:\nscore = 0\ndef add():\n    global score\n    score += 1\nadd()\nadd()\nprint(score)"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Параметр локален",
    story:"Параметры — тоже локальные.",
    objective:"Функция меняет параметр n, снаружи n прежний. Вывод: 6 | 5",
    blocks:["print(n)", "return n", "print(f(n))", "n = n + 1", "n = 5", "def f(n):"],
    targetCode:"n = 5\ndef f(n):\n    n = n + 1\n    return n\nprint(f(n))\nprint(n)",
    check:(out,v)=> _pqN(out)==="6\n5",
    scene:"swamp",
    hints:["Изменение параметра не влияет на внешнюю переменную.", "Блок за блоком: n = 5 → def f(n): → n = n + 1 …", "Готовый код:\nn = 5\ndef f(n):\n    n = n + 1\n    return n\nprint(f(n))\nprint(n)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Изменяемое внутри",
    story:"Списки меняются внутри функций.",
    objective:"Функция добавляет элемент в список. Вывод: [1, 2]",
    blocks:["add(2)", "log = []", "log.append(x)", "add(1)", "def add(x):", "print(log)"],
    targetCode:"log = []\ndef add(x):\n    log.append(x)\nadd(1)\nadd(2)\nprint(log)",
    check:(out,v)=> _pqN(out)==="[1, 2]",
    scene:"swamp",
    hints:["append меняет сам список — global не нужен.", "Блок за блоком: log = [] → def add(x): → log.append(x) …", "Готовый код:\nlog = []\ndef add(x):\n    log.append(x)\nadd(1)\nadd(2)\nprint(log)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"UnboundLocal",
    story:"Функция читает и меняет глобальную без global. Сломанный код: count = 0 ⏎ def inc(): ⏎ ⇥ count += 1 ⏎ inc() ⏎ print(count)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 1",
    blocks:["global count", "count = 0", "inc()", "count += 1", "def inc():", "print(count)"],
    targetCode:"count = 0\ndef inc():\n    global count\n    count += 1\ninc()\nprint(count)",
    check:(out,v)=> _pqN(out)==="1",
    scene:"swamp",
    hints:["Присваивание внутри функции делает переменную локальной.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ncount = 0\ndef inc():\n    global count\n    count += 1\ninc()\nprint(count)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Возврат вместо global",
    story:"Лучший способ: вернуть значение.",
    objective:"Функция inc(n) возвращает n + 1; присвой снаружи. Вывод: 2",
    blocks:["score = inc(score)", "return n + 1", "score = 0", "print(score)", "def inc(n):"],
    targetCode:"score = 0\ndef inc(n):\n    return n + 1\nscore = inc(score)\nscore = inc(score)\nprint(score)",
    check:(out,v)=> _pqN(out)==="2",
    scene:"swamp",
    hints:["return безопаснее global.", "Блок за блоком: score = 0 → def inc(n): → return n + 1 …", "Готовый код:\nscore = 0\ndef inc(n):\n    return n + 1\nscore = inc(score)\nscore = inc(score)\nprint(score)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Крокодил Global",
    story:"Крокодил Global преграждает путь! Крокодил помнит счётчик.",
    objective:"Функция hit() увеличивает global hp вниз на 10; вызови 3 раза. Вывод: 70",
    blocks:["for i in range(3):", "global hp", "print(hp)", "hp -= 10", "hit()", "hp = 100", "def hit():"],
    targetCode:"hp = 100\ndef hit():\n    global hp\n    hp -= 10\nfor i in range(3):\n    hit()\nprint(hp)",
    check:(out,v)=> _pqN(out)==="70",
    scene:"swamp-miniboss",
    hints:["global + цикл вызовов.", "Блок за блоком: hp = 100 → def hit(): → global hp …", "Готовый код:\nhp = 100\ndef hit():\n    global hp\n    hp -= 10\nfor i in range(3):\n    hit()\nprint(hp)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Цепочка областей",
    story:"Что выведет? Код: a = 1 ⏎ def f(): ⏎ ⇥ a = 2 ⏎ ⇥ def g(): ⏎ ⇥ ⇥ return a ⏎ ⇥ return g() ⏎ print(f(), a)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('1 2')", "print('2 1')", "print('1 1')", "print('2 2')"],
    targetCode:"print('2 1')",
    check:(out,v)=> _pqN(out)==="2 1",
    scene:"swamp",
    hints:["g видит a из f.", "Запиши значения переменных после каждого шага.", "Ответ: print('2 1')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Имя не найдено",
    story:"Локальная переменная вне функции. Сломанный код: def f(): ⏎ ⇥ secret = 42 ⏎ f() ⏎ print(secret)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 42",
    blocks:["print(secret)", "return secret", "secret = 42", "f()", "print(f())", "def f():"],
    targetCode:"def f():\n    secret = 42\n    return secret\nprint(f())",
    check:(out,v)=> _pqN(out)==="42",
    scene:"swamp",
    hints:["Переменная из функции снаружи не видна.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ndef f():\n    secret = 42\n    return secret\nprint(f())"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Счётчик вызовов",
    story:"Проект: сколько раз вызывали функцию.",
    objective:"Функция ping() печатает Ping и увеличивает calls. Вывод: Ping | Ping | Calls: 2",
    blocks:["global calls", "def ping():", "print('Ping')", "calls = 0", "ping()", "print('Calls:', calls)", "calls += 1"],
    targetCode:"calls = 0\ndef ping():\n    global calls\n    calls += 1\n    print('Ping')\nping()\nping()\nprint('Calls:', calls)",
    check:(out,v)=> _pqN(out)==="Ping\nPing\nCalls: 2",
    scene:"swamp",
    hints:["global внутри.", "Блок за блоком: calls = 0 → def ping(): → global calls …", "Готовый код:\ncalls = 0\ndef ping():\n    global calls\n    calls += 1\n    print('Ping')\nping()\nping()\nprint('Calls:', calls)"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Локальный список",
    story:"Каждый вызов — свой список.",
    objective:"Функция build() создаёт список и возвращает. Вывод: [0, 1, 2] | [0, 1]",
    blocks:["res = []", "for i in range(n):", "def build(n):", "print(build(3))", "return res", "print(build(2))", "res.append(i)"],
    targetCode:"def build(n):\n    res = []\n    for i in range(n):\n        res.append(i)\n    return res\nprint(build(3))\nprint(build(2))",
    check:(out,v)=> _pqN(out)==="[0, 1, 2]\n[0, 1]",
    scene:"swamp",
    hints:["res создаётся заново при каждом вызове.", "Блок за блоком: def build(n): → res = [] → for i in range(n): …", "Готовый код:\ndef build(n):\n    res = []\n    for i in range(n):\n        res.append(i)\n    return res\nprint(build(3))\nprint(build(2))"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Сброс по вводу",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Игрок вводит бонус.",
    objective:"Считай bonus, добавь к глобальному score в функции. Вывод: 15",
    blocks:["def bonus(b):", "print(score)", "score += b", "bonus(int(input()))", "score = 10", "global score"],
    targetCode:"score = 10\ndef bonus(b):\n    global score\n    score += b\nbonus(int(input()))\nprint(score)",
    check:(out,v)=> _pqN(out)==="15",
    scene:"swamp",
    simInput:["5"],
    hints:["int(input()) в аргументе.", "Блок за блоком: score = 10 → def bonus(b): → global score …", "Готовый код:\nscore = 10\ndef bonus(b):\n    global score\n    score += b\nbonus(int(input()))\nprint(score)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Банкомат",
    story:"Топь-Мать хранит баланс.",
    objective:"Глобальная balance=100. Функции deposit(n) и withdraw(n) (только если хватает). Вызови deposit(50), withdraw(30), withdraw(500), выведи balance. Вывод: 120",
    check:(out,v)=> _pqN(out)==="120" && _pqR(v,["global"]),
    scene:"swamp",
    hints:["global в обеих функциях.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: balance = 100 …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Потерянное обновление",
    story:"Счётчик остался 0. Сломанный код: n = 0 ⏎ def inc(): ⏎ ⇥ n = 1 ⏎ inc() ⏎ print(n)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 1",
    check:(out,v)=> _pqN(out)==="1" && _pqR(v,["global"]),
    scene:"swamp",
    hints:["Без global создаётся локальная n.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: n = 0 …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Тёзки и параметры",
    story:"Проверь, кто чей.",
    objective:"x=3 глобальная; def f(x): x = x * 2; return x. Выведи f(x) и затем x. Вывод: 6 | 3",
    check:(out,v)=> _pqN(out)==="6\n3" && _pqR(v,["def f"]),
    scene:"swamp",
    hints:["Параметр x — локальный.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: x = 3 …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Счёт в цикле",
    story:"Считай вызовы без global.",
    objective:"Функция count_up(n) возвращает n + 1; в цикле for из 4 шагов обнови счётчик; выведи итог. Вывод: 4",
    check:(out,v)=> _pqN(out)==="4" && _pqR(v,["\\bfor\\b", "return"]),
    scene:"swamp",
    hints:["c = count_up(c).", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def count_up(n): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Топь-Мать Область",
    story:"Топь-Мать Область охраняет Ключ ядра №18! Топь-Мать требует порядок! Победи — и часть цифровой карты снова заработает.",
    objective:"Глобальные hp=50, score=0. Функция heal(n): global hp, hp += n, вернуть hp. Функция win(): global score, score += 10. Вызови heal(20), win(), win(), выведи hp, score. Затем локальная функция temp(): x=99 (print) и напечатай, что глобальная hp осталась 70. Вывод: 70 20 | 99 | 70",
    check:(out,v)=> _pqN(out)==="70 20\n99\n70" && _pqR(v,["global"]),
    scene:"swamp-boss",
    hints:["global, локальные переменные и return.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: global, локальные переменные и return."]
  }
];

/* ===== MODULE 19: Module Labs — модули ===== */
MISSIONS[19] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Импорт math",
    story:"Ты входишь в Module Labs: учёные хранят инструменты в модулях, а вирус Null выключил все import. Профессор Импорт: «Модуль — набор готовых инструментов.»",
    objective:"Импортируй math и выведи math.sqrt(16). Вывод: 4.0",
    blocks:["print(math.sqrt(16))", "import math"],
    targetCode:"import math\nprint(math.sqrt(16))",
    check:(out,v)=> _pqN(out)==="4.0",
    scene:"labs",
    hints:["Сначала import, потом имя модуля с точкой.", "Блок за блоком: import math → print(math.sqrt(16))", "Готовый код:\nimport math\nprint(math.sqrt(16))"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Число pi",
    story:"Нужна точная константа.",
    objective:"Выведи math.pi. Вывод: 3.141592653589793",
    blocks:["print(math.pi)", "import math"],
    targetCode:"import math\nprint(math.pi)",
    check:(out,v)=> _pqN(out)==="3.141592653589793",
    scene:"labs",
    hints:["Константы тоже живут в модулях.", "Блок за блоком: import math → print(math.pi)", "Готовый код:\nimport math\nprint(math.pi)"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Округление",
    story:"Округли вверх и вниз.",
    objective:"Выведи math.floor(4.7) и math.ceil(4.2). Вывод: 4 | 5",
    blocks:["print(math.ceil(4.2))", "import math", "print(math.floor(4.7))"],
    targetCode:"import math\nprint(math.floor(4.7))\nprint(math.ceil(4.2))",
    check:(out,v)=> _pqN(out)==="4\n5",
    scene:"labs",
    hints:["floor — вниз, ceil — вверх.", "Блок за блоком: import math → print(math.floor(4.7)) → print(math.ceil(4.2))", "Готовый код:\nimport math\nprint(math.floor(4.7))\nprint(math.ceil(4.2))"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Корень",
    story:"Что выведет программа? Код: import math ⏎ print(math.sqrt(49))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('3.5')", "print('7.0')", "print(7)", "print('49.0')"],
    targetCode:"print('7.0')",
    check:(out,v)=> _pqN(out)==="7.0",
    scene:"labs",
    hints:["sqrt всегда возвращает число с точкой.", "Запиши значения переменных после каждого шага.", "Ответ: print('7.0')"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: from import",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Импортируй только нужное.",
    objective:"from math import sqrt и выведи sqrt(81). Вывод: 9.0",
    blocks:["from math import sqrt", "print(sqrt(81))"],
    targetCode:"from math import sqrt\nprint(sqrt(81))",
    check:(out,v)=> _pqN(out)==="9.0",
    scene:"labs",
    hints:["После from-import имя пишем без math.", "Блок за блоком: from math import sqrt → print(sqrt(81))", "Готовый код:\nfrom math import sqrt\nprint(sqrt(81))"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"gcd",
    story:"Найди общий делитель.",
    objective:"Выведи math.gcd(12, 18). Вывод: 6",
    blocks:["print(math.gcd(12, 18))", "import math"],
    targetCode:"import math\nprint(math.gcd(12, 18))",
    check:(out,v)=> _pqN(out)==="6",
    scene:"labs",
    hints:["gcd — наибольший общий делитель.", "Блок за блоком: import math → print(math.gcd(12, 18))", "Готовый код:\nimport math\nprint(math.gcd(12, 18))"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Псевдоним",
    story:"Сократи название модуля.",
    objective:"import math as m и выведи m.floor(2.9). Вывод: 2",
    blocks:["print(m.floor(2.9))", "import math as m"],
    targetCode:"import math as m\nprint(m.floor(2.9))",
    check:(out,v)=> _pqN(out)==="2",
    scene:"labs",
    hints:["as задаёт короткий псевдоним.", "Блок за блоком: import math as m → print(m.floor(2.9))", "Готовый код:\nimport math as m\nprint(m.floor(2.9))"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Забытый import",
    story:"Модуль не подключён. Сломанный код: print(math.sqrt(4))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 2.0",
    blocks:["import math", "print(math.sqrt(4))"],
    targetCode:"import math\nprint(math.sqrt(4))",
    check:(out,v)=> _pqN(out)==="2.0",
    scene:"labs",
    hints:["Перед использованием нужен import.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nimport math\nprint(math.sqrt(4))"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Длина гипотенузы",
    story:"Считай по теореме Пифагора.",
    objective:"a=3, b=4 → выведи math.sqrt(a*a + b*b). Вывод: 5.0",
    blocks:["b = 4", "import math", "print(math.sqrt(a * a + b * b))", "a = 3"],
    targetCode:"import math\na = 3\nb = 4\nprint(math.sqrt(a * a + b * b))",
    check:(out,v)=> _pqN(out)==="5.0",
    scene:"labs",
    hints:["Сумма квадратов под корнем.", "Блок за блоком: import math → a = 3 → b = 4 …", "Готовый код:\nimport math\na = 3\nb = 4\nprint(math.sqrt(a * a + b * b))"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Робот Random",
    story:"Робот Random преграждает путь! Робот придумывает цену — но у него seed.",
    objective:"Импортируй random, задай seed и выведи тип результата randint (int). Вывод: True",
    blocks:["random.seed(1)", "print(1 <= n <= 6)", "n = random.randint(1, 6)", "import random"],
    targetCode:"import random\nrandom.seed(1)\nn = random.randint(1, 6)\nprint(1 <= n <= 6)",
    check:(out,v)=> _pqN(out)==="True",
    scene:"labs-miniboss",
    hints:["randint(a, b) — целое от a до b включительно.", "Блок за блоком: import random → random.seed(1) → n = random.randint(1, 6) …", "Готовый код:\nimport random\nrandom.seed(1)\nn = random.randint(1, 6)\nprint(1 <= n <= 6)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Округление вверх",
    story:"Что выведет? Код: import math ⏎ print(math.ceil(2.1) + math.floor(2.9))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(6)", "print(4)", "print(5)", "print(3)"],
    targetCode:"print(5)",
    check:(out,v)=> _pqN(out)==="5",
    scene:"labs",
    hints:["ceil(2.1)=3, floor(2.9)=2.", "Запиши значения переменных после каждого шага.", "Ответ: print(5)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Свой модуль",
    story:"Пытаемся импортировать модуль, которого нет. Сломанный код: import mathh ⏎ print(mathh.pi)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 3.141592653589793",
    blocks:["import mathh", "print(math.pi)", "print(mathh.pi)", "import math"],
    targetCode:"import math\nprint(math.pi)",
    check:(out,v)=> _pqN(out)==="3.141592653589793",
    scene:"labs",
    hints:["Проверь написание имени модуля.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nimport math\nprint(math.pi)"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Площадь круга",
    story:"Проект: функция площади с math.pi.",
    objective:"area(r) возвращает pi * r ** 2; выведи area(1) с округлением round(..., 2). Вывод: 3.14",
    blocks:["print(round(area(1), 2))", "def area(r):", "return math.pi * r ** 2", "import math"],
    targetCode:"import math\ndef area(r):\n    return math.pi * r ** 2\nprint(round(area(1), 2))",
    check:(out,v)=> _pqN(out)==="3.14",
    scene:"labs",
    hints:["round(число, знаков).", "Блок за блоком: import math → def area(r): → return math.pi * r ** 2 …", "Готовый код:\nimport math\ndef area(r):\n    return math.pi * r ** 2\nprint(round(area(1), 2))"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Список случайно",
    story:"Random.choice выбирает элемент.",
    objective:"Выбери из списка из одного элемента. Вывод: only",
    blocks:["import random", "print(x)", "x = random.choice(['only'])"],
    targetCode:"import random\nx = random.choice(['only'])\nprint(x)",
    check:(out,v)=> _pqN(out)==="only",
    scene:"labs",
    hints:["choice берёт элемент из списка.", "Блок за блоком: import random → x = random.choice(['only']) → print(x)", "Готовый код:\nimport random\nx = random.choice(['only'])\nprint(x)"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Модуль и цикл",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Считай корни в цикле.",
    objective:"Выведи sqrt для 1, 4, 9 циклом. Вывод: 1.0 | 2.0 | 3.0",
    blocks:["import math", "print(math.sqrt(n))", "for n in [1, 4, 9]:"],
    targetCode:"import math\nfor n in [1, 4, 9]:\n    print(math.sqrt(n))",
    check:(out,v)=> _pqN(out)==="1.0\n2.0\n3.0",
    scene:"labs",
    hints:["Импорт — один раз наверху.", "Блок за блоком: import math → for n in [1, 4, 9]: → print(math.sqrt(n))", "Готовый код:\nimport math\nfor n in [1, 4, 9]:\n    print(math.sqrt(n))"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Расстояние",
    story:"Найди расстояние между точками.",
    objective:"Функция dist(x1, y1, x2, y2) возвращает sqrt((x2-x1)²+(y2-y1)²); выведи dist(0, 0, 6, 8). Вывод: 10.0",
    check:(out,v)=> _pqN(out)==="10.0" && _pqR(v,["import math", "def dist"]),
    scene:"labs",
    hints:["Сочетай функцию и math.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: import math …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Скобки у константы",
    story:"pi вызывают как функцию. Сломанный код: import math ⏎ print(math.pi())  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 3.141592653589793",
    check:(out,v)=> _pqN(out)==="3.141592653589793" && _pqR(v,["import math"]),
    scene:"labs",
    hints:["pi — не функция, а число.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: import math …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Корни без повторов",
    story:"Выведи целые корни.",
    objective:"Для чисел [4, 5, 9, 10, 16] выведи корни только тех, у которых sqrt — целое (n == floor(sqrt)²). Формат: сам корень (например 2.0). Вывод: 2.0 | 3.0 | 4.0",
    check:(out,v)=> _pqN(out)==="2.0\n3.0\n4.0" && _pqR(v,["import math", "\\bfor\\b"]),
    scene:"labs",
    hints:["Сравни корень с floor(корня).", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: import math …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Список из чисел",
    story:"Собери список корней.",
    objective:"Из [1, 4, 9, 16] построй список корней (циклом и append) и выведи его. Вывод: [1.0, 2.0, 3.0, 4.0]",
    check:(out,v)=> _pqN(out)==="[1.0, 2.0, 3.0, 4.0]" && _pqR(v,["import math", "\\bfor\\b", "append"]),
    scene:"labs",
    hints:["Список корней.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: import math …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Доктор Библиотека",
    story:"Доктор Библиотека охраняет Ключ ядра №19! Доктор Библиотека завершает опыт! Победи — и часть цифровой карты снова заработает.",
    objective:"Напиши circle(r) → (длина окружности, площадь) с округлением до 1 знака, hyp(a, b) → гипотенуза. Выведи circle(2), hyp(5, 12) и gcd(48, 36). Вывод: (12.6, 12.6) | 13.0 | 12",
    check:(out,v)=> _pqN(out)==="(12.6, 12.6)\n13.0\n12" && _pqR(v,["import math", "def circle", "def hyp"]),
    scene:"labs-boss",
    hints:["import, функции, return-кортеж, round.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: import, функции, return-кортеж, round."]
  }
];

/* ===== MODULE 20: File Base — файлы ===== */
MISSIONS[20] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Запись в файл",
    story:"Ты попадаешь на File Base: архив хранит журналы миссий, но вирус Null стёр все файлы. Архивариус Open: «Файл открывают, пишут, закрывают.»",
    objective:"Запиши 'Hello' в файл a.txt и прочитай обратно. Вывод: Hello",
    blocks:["with open('a.txt', 'w') as f:", "print(f.read())", "f.write('Hello')", "with open('a.txt') as f:"],
    targetCode:"with open('a.txt', 'w') as f:\n    f.write('Hello')\nwith open('a.txt') as f:\n    print(f.read())",
    check:(out,v)=> _pqN(out)==="Hello",
    scene:"base",
    hints:["with сам закроет файл.", "Блок за блоком: with open('a.txt', 'w') as… → f.write('Hello') → with open('a.txt') as f: …", "Готовый код:\nwith open('a.txt', 'w') as f:\n    f.write('Hello')\nwith open('a.txt') as f:\n    print(f.read())"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Несколько строк",
    story:"Журнал из двух записей.",
    objective:"Запиши 'one\\ntwo' и выведи через read(). Вывод: one | two",
    blocks:["with open('log.txt', 'w') as f:", "f.write('one\\ntwo')", "print(f.read())", "with open('log.txt') as f:"],
    targetCode:"with open('log.txt', 'w') as f:\n    f.write('one\\ntwo')\nwith open('log.txt') as f:\n    print(f.read())",
    check:(out,v)=> _pqN(out)==="one\ntwo",
    scene:"base",
    hints:["\\n — перенос строки.", "Блок за блоком: with open('log.txt', 'w') … → f.write('one\\ntwo') → with open('log.txt') as f: …", "Готовый код:\nwith open('log.txt', 'w') as f:\n    f.write('one\\ntwo')\nwith open('log.txt') as f:\n    print(f.read())"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Цикл по строкам",
    story:"Читай построчно.",
    objective:"Запиши три слова с \\n и выведи каждую строку через for. Вывод: a | b | c",
    blocks:["f.write('a\\nb\\nc\\n')", "with open('w.txt') as f:", "for line in f:", "print(line.strip())", "with open('w.txt', 'w') as f:"],
    targetCode:"with open('w.txt', 'w') as f:\n    f.write('a\\nb\\nc\\n')\nwith open('w.txt') as f:\n    for line in f:\n        print(line.strip())",
    check:(out,v)=> _pqN(out)==="a\nb\nc",
    scene:"base",
    hints:["strip() убирает \\n на конце.", "Блок за блоком: with open('w.txt', 'w') as… → f.write('a\\nb\\nc\\n') → with open('w.txt') as f: …", "Готовый код:\nwith open('w.txt', 'w') as f:\n    f.write('a\\nb\\nc\\n')\nwith open('w.txt') as f:\n    for line in f:\n        print(line.strip())"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Режим w стирает",
    story:"Что выведет? Код: with open('t.txt', 'w') as f: ⏎ ⇥ f.write('1') ⏎ with open('t.txt', 'w') as f: ⏎ ⇥ f.write('2') ⏎ print(open('t.txt').read())  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(1)", "print(12)", "print(21)", "print(2)"],
    targetCode:"print(2)",
    check:(out,v)=> _pqN(out)==="2",
    scene:"base",
    hints:["Режим 'w' перезаписывает файл.", "Запиши значения переменных после каждого шага.", "Ответ: print(2)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Дозапись",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Добавляем в конец.",
    objective:"Дозапиши строку режимом 'a'. Вывод: ['A', 'B']",
    blocks:["with open('n.txt') as f:", "f.write('B\\n')", "f.write('A\\n')", "with open('n.txt', 'a') as f:", "with open('n.txt', 'w') as f:", "print(f.read().strip().split())"],
    targetCode:"with open('n.txt', 'w') as f:\n    f.write('A\\n')\nwith open('n.txt', 'a') as f:\n    f.write('B\\n')\nwith open('n.txt') as f:\n    print(f.read().strip().split())",
    check:(out,v)=> _pqN(out)==="['A', 'B']",
    scene:"base",
    hints:["'a' — append, добавление в конец.", "Блок за блоком: with open('n.txt', 'w') as… → f.write('A\\n') → with open('n.txt', 'a') as… …", "Готовый код:\nwith open('n.txt', 'w') as f:\n    f.write('A\\n')\nwith open('n.txt', 'a') as f:\n    f.write('B\\n')\nwith open('n.txt') as f:\n    print(f.read().strip().split())"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"readlines",
    story:"Список всех строк.",
    objective:"Прочитай все строки в список и выведи число строк. Вывод: 3",
    blocks:["with open('m.txt') as f:", "f.write('x\\ny\\nz\\n')", "lines = f.readlines()", "print(len(lines))", "with open('m.txt', 'w') as f:"],
    targetCode:"with open('m.txt', 'w') as f:\n    f.write('x\\ny\\nz\\n')\nwith open('m.txt') as f:\n    lines = f.readlines()\nprint(len(lines))",
    check:(out,v)=> _pqN(out)==="3",
    scene:"base",
    hints:["readlines() возвращает список строк.", "Блок за блоком: with open('m.txt', 'w') as… → f.write('x\\ny\\nz\\n') → with open('m.txt') as f: …", "Готовый код:\nwith open('m.txt', 'w') as f:\n    f.write('x\\ny\\nz\\n')\nwith open('m.txt') as f:\n    lines = f.readlines()\nprint(len(lines))"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Запись из цикла",
    story:"Пиши числа из цикла.",
    objective:"Запиши числа 1..3 по одному на строку и выведи сумму, прочитав файл. Вывод: 6",
    blocks:["with open('n.txt') as f:", "for i in range(1, 4):", "print(total)", "for line in f:", "total = 0", "with open('n.txt', 'w') as f:", "total += int(line)", "f.write(str(i) + '\\n')"],
    targetCode:"with open('n.txt', 'w') as f:\n    for i in range(1, 4):\n        f.write(str(i) + '\\n')\ntotal = 0\nwith open('n.txt') as f:\n    for line in f:\n        total += int(line)\nprint(total)",
    check:(out,v)=> _pqN(out)==="6",
    scene:"base",
    hints:["write принимает только строки.", "Блок за блоком: with open('n.txt', 'w') as… → for i in range(1, 4): → f.write(str(i) + '\\n') …", "Готовый код:\nwith open('n.txt', 'w') as f:\n    for i in range(1, 4):\n        f.write(str(i) + '\\n')\ntotal = 0\nwith open('n.txt') as f:\n    for line in f:\n        total += int(line)\nprint(total)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Число в write",
    story:"write ждёт строку. Сломанный код: with open('a.txt', 'w') as f: ⏎ ⇥ f.write(5) ⏎ print('ok')  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: ok",
    blocks:["with open('a.txt', 'w') as f:", "f.write(str(5))", "print('ok')", "f.write(5)"],
    targetCode:"with open('a.txt', 'w') as f:\n    f.write(str(5))\nprint('ok')",
    check:(out,v)=> _pqN(out)==="ok",
    scene:"base",
    hints:["Преобразуй число в строку: str().", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nwith open('a.txt', 'w') as f:\n    f.write(str(5))\nprint('ok')"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Шредер-Бот",
    story:"Считай слова в файле.",
    objective:"Запиши 'sea and sky' и посчитай слова через split(). Вывод: 3",
    blocks:["print(len(f.read().split()))", "f.write('sea and sky')", "with open('t.txt', 'w') as f:", "with open('t.txt') as f:"],
    targetCode:"with open('t.txt', 'w') as f:\n    f.write('sea and sky')\nwith open('t.txt') as f:\n    print(len(f.read().split()))",
    check:(out,v)=> _pqN(out)==="3",
    scene:"base",
    hints:["read().split() — слова файла.", "Блок за блоком: with open('t.txt', 'w') as… → f.write('sea and sky') → with open('t.txt') as f: …", "Готовый код:\nwith open('t.txt', 'w') as f:\n    f.write('sea and sky')\nwith open('t.txt') as f:\n    print(len(f.read().split()))"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Файл нужного размера",
    story:"Шредер-Бот преграждает путь! Сколько символов в файле?",
    objective:"Запиши 'abcde' и выведи len(f.read()). Вывод: 5",
    blocks:["f.write('abcde')", "print(len(f.read()))", "with open('s.txt', 'w') as f:", "with open('s.txt') as f:"],
    targetCode:"with open('s.txt', 'w') as f:\n    f.write('abcde')\nwith open('s.txt') as f:\n    print(len(f.read()))",
    check:(out,v)=> _pqN(out)==="5",
    scene:"base-miniboss",
    hints:["len — для строки, прочитанной из файла.", "Блок за блоком: with open('s.txt', 'w') as… → f.write('abcde') → with open('s.txt') as f: …", "Готовый код:\nwith open('s.txt', 'w') as f:\n    f.write('abcde')\nwith open('s.txt') as f:\n    print(len(f.read()))"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Чтение после записи",
    story:"Что выведет программа? Код: with open('x.txt', 'w') as f: ⏎ ⇥ f.write('ab') ⏎ ⇥ f.write('cd') ⏎ print(open('x.txt').read())  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('ab')", "print('cd')", "print('dcba')", "print('abcd')"],
    targetCode:"print('abcd')",
    check:(out,v)=> _pqN(out)==="abcd",
    scene:"base",
    hints:["write дописывает в конец текущей позиции.", "Запиши значения переменных после каждого шага.", "Ответ: print('abcd')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Файл не найден",
    story:"Читаем несуществующий файл. Сломанный код: with open('ghost.txt') as f: ⏎ ⇥ print(f.read())  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: boo",
    blocks:["with open('ghost.txt', 'w') as f:", "with open('ghost.txt') as f:", "print(f.read())", "f.write('boo')"],
    targetCode:"with open('ghost.txt', 'w') as f:\n    f.write('boo')\nwith open('ghost.txt') as f:\n    print(f.read())",
    check:(out,v)=> _pqN(out)==="boo",
    scene:"base",
    hints:["Сначала создай файл записью.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nwith open('ghost.txt', 'w') as f:\n    f.write('boo')\nwith open('ghost.txt') as f:\n    print(f.read())"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Журнал героев",
    story:"Проект: сохрани список героев в файл и прочитай.",
    objective:"Запиши героев по одному на строку и выведи их в верхнем регистре. Вывод: ALI | VERA",
    blocks:["print(line.strip().upper())", "for h in heroes:", "with open('h.txt') as f:", "f.write(h + '\\n')", "heroes = ['ali', 'vera']", "with open('h.txt', 'w') as f:", "for line in f:"],
    targetCode:"heroes = ['ali', 'vera']\nwith open('h.txt', 'w') as f:\n    for h in heroes:\n        f.write(h + '\\n')\nwith open('h.txt') as f:\n    for line in f:\n        print(line.strip().upper())",
    check:(out,v)=> _pqN(out)==="ALI\nVERA",
    scene:"base",
    hints:["Запись в цикле, чтение в цикле.", "Блок за блоком: heroes = ['ali', 'vera'] → with open('h.txt', 'w') as… → for h in heroes: …", "Готовый код:\nheroes = ['ali', 'vera']\nwith open('h.txt', 'w') as f:\n    for h in heroes:\n        f.write(h + '\\n')\nwith open('h.txt') as f:\n    for line in f:\n        print(line.strip().upper())"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Словарь в файл",
    story:"Пары ключ=значение.",
    objective:"Запиши 'a=1' и 'b=2', прочитай и собери словарь. Вывод: {'a': 1, 'b': 2}",
    blocks:["for line in f:", "with open('d.txt', 'w') as f:", "k, v = line.strip().split('=')", "d = {}", "d[k] = int(v)", "print(d)", "with open('d.txt') as f:", "f.write('a=1\\nb=2\\n')"],
    targetCode:"with open('d.txt', 'w') as f:\n    f.write('a=1\\nb=2\\n')\nd = {}\nwith open('d.txt') as f:\n    for line in f:\n        k, v = line.strip().split('=')\n        d[k] = int(v)\nprint(d)",
    check:(out,v)=> _pqN(out)==="{'a': 1, 'b': 2}",
    scene:"base",
    hints:["split('=') и распаковка.", "Блок за блоком: with open('d.txt', 'w') as… → f.write('a=1\\nb=2\\n') → d = {} …", "Готовый код:\nwith open('d.txt', 'w') as f:\n    f.write('a=1\\nb=2\\n')\nd = {}\nwith open('d.txt') as f:\n    for line in f:\n        k, v = line.strip().split('=')\n        d[k] = int(v)\nprint(d)"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Функция сохранения",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Оформи запись как функцию.",
    objective:"Функция save(name, text) пишет файл; вызови и прочитай. Вывод: ok",
    blocks:["with open(name, 'w') as f:", "save('z.txt', 'ok')", "print(open('z.txt').read())", "def save(name, text):", "f.write(text)"],
    targetCode:"def save(name, text):\n    with open(name, 'w') as f:\n        f.write(text)\nsave('z.txt', 'ok')\nprint(open('z.txt').read())",
    check:(out,v)=> _pqN(out)==="ok",
    scene:"base",
    hints:["Функция + файл.", "Блок за блоком: def save(name, text): → with open(name, 'w') as f: → f.write(text) …", "Готовый код:\ndef save(name, text):\n    with open(name, 'w') as f:\n        f.write(text)\nsave('z.txt', 'ok')\nprint(open('z.txt').read())"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Сумма из файла",
    story:"Архив хранит числа.",
    objective:"Запиши в файл nums.txt числа 4, 6, 10 (по строке) и выведи их сумму, прочитав файл. Вывод: 20",
    check:(out,v)=> _pqN(out)==="20" && _pqR(v,["open\\(", "\\bfor\\b"]),
    scene:"base",
    hints:["Запись и чтение чисел.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: with open('nums.txt', 'w') as f: …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Забытый режим",
    story:"Файл нужно перезаписать, но данные добавляются. Сломанный код: with open('c.txt', 'w') as f: ⏎ ⇥ f.write('a') ⏎ with open('c.txt', 'a') as f: ⏎ ⇥ f.write('b') ⏎ print(open('c.txt').read())  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: b",
    check:(out,v)=> _pqN(out)==="b" && _pqR(v,["open\\("]),
    scene:"base",
    hints:["Какой режим стирает файл?", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: with open('c.txt', 'w') as f: …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Подсчёт строк",
    story:"Сколько строк длиннее 3 символов?",
    objective:"Запиши 'sea', 'ocean', 'sky', 'harbor' по строкам, затем выведи число строк длиннее 3 символов. Вывод: 2",
    check:(out,v)=> _pqN(out)==="2" && _pqR(v,["open\\(", "\\bfor\\b"]),
    scene:"base",
    hints:["strip() перед len.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: with open('w.txt', 'w') as f: …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Файл + функции",
    story:"Архивариус проверяет функции.",
    objective:"save_all(name, items) записывает элементы по строкам, load(name) возвращает список строк без \\n. Сохрани ['a','b','c'] и выведи load. Вывод: ['a', 'b', 'c']",
    check:(out,v)=> _pqN(out)==="['a', 'b', 'c']" && _pqR(v,["def save_all", "def load"]),
    scene:"base",
    hints:["Две функции с файлами.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def save_all(name, items): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Хранитель Архива",
    story:"Хранитель Архива охраняет Ключ ядра №20! Хранитель проверяет журнал! Победи — и часть цифровой карты снова заработает.",
    objective:"Запиши в log.txt строки 'Ali:80', 'Vera:95', 'Omar:60'. Прочти их, собери словарь имя→число (функция load_scores), выведи словарь, самого сильного героя и средний балл (Avg: …). Вывод: {'Ali': 80, 'Vera': 95, 'Omar': 60} | Vera | Avg: 78.33333333333333",
    check:(out,v)=> _pqN(out)==="{'Ali': 80, 'Vera': 95, 'Omar': 60}\nVera\nAvg: 78.33333333333333" && _pqR(v,["open\\(", "def load_scores", "\\bfor\\b"]),
    scene:"base-boss",
    hints:["Файл, функция, словарь, цикл и поиск максимума.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Файл, функция, словарь, цикл и поиск максимума."]
  }
];

/* ===== MODULE 21: Error Peak — исключения ===== */
MISSIONS[21] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первый try",
    story:"Ты взбираешься на Error Peak: вершина трясётся от ошибок, а вирус Null подбрасывает их в каждый код. Спасатель Try: «try пробует, except ловит ошибку.»",
    objective:"Поймай деление на ноль и выведи Oops. Вывод: Oops",
    blocks:["print('Oops')", "print(10 / 0)", "try:", "except ZeroDivisionError:"],
    targetCode:"try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print('Oops')",
    check:(out,v)=> _pqN(out)==="Oops",
    scene:"errorpeak",
    hints:["except идёт на том же уровне, что try.", "Блок за блоком: try: → print(10 / 0) → except ZeroDivisionError: …", "Готовый код:\ntry:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print('Oops')"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Успешный путь",
    story:"Если ошибки нет — except не срабатывает.",
    objective:"Выведи 5, а except с ошибкой пропусти. Вывод: 5.0",
    blocks:["print(10 / 2)", "print('Oops')", "try:", "except ZeroDivisionError:"],
    targetCode:"try:\n    print(10 / 2)\nexcept ZeroDivisionError:\n    print('Oops')",
    check:(out,v)=> _pqN(out)==="5.0",
    scene:"errorpeak",
    hints:["Деление даёт 5.0.", "Блок за блоком: try: → print(10 / 2) → except ZeroDivisionError: …", "Готовый код:\ntry:\n    print(10 / 2)\nexcept ZeroDivisionError:\n    print('Oops')"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"ValueError",
    story:"Строка не число.",
    objective:"Поймай int('abc') и выведи Not a number. Вывод: Not a number",
    blocks:["print('Not a number')", "try:", "except ValueError:", "n = int('abc')"],
    targetCode:"try:\n    n = int('abc')\nexcept ValueError:\n    print('Not a number')",
    check:(out,v)=> _pqN(out)==="Not a number",
    scene:"errorpeak",
    hints:["int() от текста вызывает ValueError.", "Блок за блоком: try: → n = int('abc') → except ValueError: …", "Готовый код:\ntry:\n    n = int('abc')\nexcept ValueError:\n    print('Not a number')"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Что сработало",
    story:"Что выведет программа? Код: try: ⏎ ⇥ print('A', end='') ⏎ ⇥ x = 1 / 0 ⏎ ⇥ print('B', end='') ⏎ except ZeroDivisionError: ⏎ ⇥ print('C', end='') ⏎ print('D', end='')  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('ABCD')", "print('AD')", "print('ACD')"],
    targetCode:"print('ACD')",
    check:(out,v)=> _pqN(out)==="ACD",
    scene:"errorpeak",
    hints:["После ошибки try прерывается.", "Запиши значения переменных после каждого шага.", "Ответ: print('ACD')"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: finally",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Код, который выполнится всегда.",
    objective:"Выведи Work, затем Done в finally. Вывод: Work | Done",
    blocks:["print('Done')", "finally:", "print('Work')", "try:"],
    targetCode:"try:\n    print('Work')\nfinally:\n    print('Done')",
    check:(out,v)=> _pqN(out)==="Work\nDone",
    scene:"errorpeak",
    hints:["finally срабатывает в любом случае.", "Блок за блоком: try: → print('Work') → finally: …", "Готовый код:\ntry:\n    print('Work')\nfinally:\n    print('Done')"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Сообщение ошибки",
    story:"Достань текст ошибки.",
    objective:"Поймай ValueError как e и выведи e. Вывод: invalid literal for int() with base 10: 'x1'",
    blocks:["int('x1')", "print(e)", "except ValueError as e:", "try:"],
    targetCode:"try:\n    int('x1')\nexcept ValueError as e:\n    print(e)",
    check:(out,v)=> _pqN(out)==="invalid literal for int() with base 10: 'x1'",
    scene:"errorpeak",
    hints:["except ... as e даёт объект ошибки.", "Блок за блоком: try: → int('x1') → except ValueError as e: …", "Готовый код:\ntry:\n    int('x1')\nexcept ValueError as e:\n    print(e)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"IndexError",
    story:"Список короче, чем надо.",
    objective:"Поймай IndexError и выведи Out of range. Вывод: Out of range",
    blocks:["except IndexError:", "a = [1, 2, 3]", "try:", "print(a[5])", "print('Out of range')"],
    targetCode:"a = [1, 2, 3]\ntry:\n    print(a[5])\nexcept IndexError:\n    print('Out of range')",
    check:(out,v)=> _pqN(out)==="Out of range",
    scene:"errorpeak",
    hints:["Индекс 5 вне списка.", "Блок за блоком: a = [1, 2, 3] → try: → print(a[5]) …", "Готовый код:\na = [1, 2, 3]\ntry:\n    print(a[5])\nexcept IndexError:\n    print('Out of range')"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Пустой except",
    story:"Тип ошибки указан неверно. Сломанный код: try: ⏎ ⇥ print(int('a')) ⏎ except ZeroDivisionError: ⏎ ⇥ print('bad')  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: bad",
    blocks:["except ZeroDivisionError:", "print(int('a'))", "try:", "print('bad')", "except ValueError:"],
    targetCode:"try:\n    print(int('a'))\nexcept ValueError:\n    print('bad')",
    check:(out,v)=> _pqN(out)==="bad",
    scene:"errorpeak",
    hints:["Ловим ту ошибку, которая реально возникает.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ntry:\n    print(int('a'))\nexcept ValueError:\n    print('bad')"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"KeyError",
    story:"Ключа нет в словаре.",
    objective:"Поймай KeyError и выведи Missing. Вывод: Missing",
    blocks:["print('Missing')", "except KeyError:", "try:", "d = {'a': 1}", "print(d['b'])"],
    targetCode:"d = {'a': 1}\ntry:\n    print(d['b'])\nexcept KeyError:\n    print('Missing')",
    check:(out,v)=> _pqN(out)==="Missing",
    scene:"errorpeak",
    hints:["Обращение по несуществующему ключу.", "Блок за блоком: d = {'a': 1} → try: → print(d['b']) …", "Готовый код:\nd = {'a': 1}\ntry:\n    print(d['b'])\nexcept KeyError:\n    print('Missing')"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Феникс Except",
    story:"Дух Traceback преграждает путь! Несколько except.",
    objective:"Для значений '5' и 'x' пробуй int и выведи число или Bad. Вывод: 5 | Bad",
    blocks:["print('Bad')", "print(int(s))", "except ValueError:", "for s in ['5', 'x']:", "try:"],
    targetCode:"for s in ['5', 'x']:\n    try:\n        print(int(s))\n    except ValueError:\n        print('Bad')",
    check:(out,v)=> _pqN(out)==="5\nBad",
    scene:"errorpeak-miniboss",
    hints:["try внутри цикла.", "Блок за блоком: for s in ['5', 'x']: → try: → print(int(s)) …", "Готовый код:\nfor s in ['5', 'x']:\n    try:\n        print(int(s))\n    except ValueError:\n        print('Bad')"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Порядок except",
    story:"Что выведет? Код: try: ⏎ ⇥ a = [1] ⏎ ⇥ print(a[3]) ⏎ except ValueError: ⏎ ⇥ print('V') ⏎ except IndexError: ⏎ ⇥ print('I')  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('I')", "print('VI')", "print('V')"],
    targetCode:"print('I')",
    check:(out,v)=> _pqN(out)==="I",
    scene:"errorpeak",
    hints:["Срабатывает первый подходящий except.", "Запиши значения переменных после каждого шага.", "Ответ: print('I')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Забытое двоеточие",
    story:"Синтаксис except. Сломанный код: try: ⏎ ⇥ print(1 / 0) ⏎ except ZeroDivisionError ⏎ ⇥ print('zero')  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: zero",
    blocks:["except ZeroDivisionError", "except ZeroDivisionError:", "print(1 / 0)", "print('zero')", "try:"],
    targetCode:"try:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print('zero')",
    check:(out,v)=> _pqN(out)==="zero",
    scene:"errorpeak",
    hints:["После except нужно двоеточие.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ntry:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print('zero')"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Безопасный ввод",
    story:"Проект: пользователь вводит число.",
    objective:"Считай ввод; если это число — выведи удвоенное, иначе Try again. Вывод: Try again",
    blocks:["print(int(s) * 2)", "try:", "s = input()", "print('Try again')", "except ValueError:"],
    targetCode:"s = input()\ntry:\n    print(int(s) * 2)\nexcept ValueError:\n    print('Try again')",
    check:(out,v)=> _pqN(out)==="Try again",
    scene:"errorpeak",
    simInput:["abc"],
    hints:["Ввод всегда строка.", "Блок за блоком: s = input() → try: → print(int(s) * 2) …", "Готовый код:\ns = input()\ntry:\n    print(int(s) * 2)\nexcept ValueError:\n    print('Try again')"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"raise",
    story:"Сгенерируй свою ошибку.",
    objective:"Вызови raise ValueError('bad') и поймай её. Вывод: caught bad",
    blocks:["raise ValueError('bad')", "except ValueError as e:", "try:", "print('caught', e)"],
    targetCode:"try:\n    raise ValueError('bad')\nexcept ValueError as e:\n    print('caught', e)",
    check:(out,v)=> _pqN(out)==="caught bad",
    scene:"errorpeak",
    hints:["raise бросает исключение.", "Блок за блоком: try: → raise ValueError('bad') → except ValueError as e: …", "Готовый код:\ntry:\n    raise ValueError('bad')\nexcept ValueError as e:\n    print('caught', e)"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: else в try",
    story:"МИНИ-ЧЕЛЛЕНДЖ. else — когда ошибки не было.",
    objective:"Выведи Ok в else, Done в finally. Вывод: Ok 7 | Done",
    blocks:["except ValueError:", "print('Done')", "print('Bad')", "x = int('7')", "else:", "try:", "print('Ok', x)", "finally:"],
    targetCode:"try:\n    x = int('7')\nexcept ValueError:\n    print('Bad')\nelse:\n    print('Ok', x)\nfinally:\n    print('Done')",
    check:(out,v)=> _pqN(out)==="Ok 7\nDone",
    scene:"errorpeak",
    hints:["else — между except и finally.", "Блок за блоком: try: → x = int('7') → except ValueError: …", "Готовый код:\ntry:\n    x = int('7')\nexcept ValueError:\n    print('Bad')\nelse:\n    print('Ok', x)\nfinally:\n    print('Done')"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Деление с защитой",
    story:"Феникс защищает деление.",
    objective:"Функция safe_div(a, b) возвращает a / b или 0 при b == 0 (try/except). Выведи safe_div(8, 2) и safe_div(5, 0). Вывод: 4.0 | 0",
    check:(out,v)=> _pqN(out)==="4.0\n0" && _pqR(v,["try", "except"]),
    scene:"errorpeak",
    hints:["Возвращай значение в обеих ветках.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def safe_div(a, b): …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Слишком широкий try",
    story:"Ошибка не поймана, программа падает. Сломанный код: def parse(s): ⏎ ⇥ return int(s) ⏎ print(parse('7')) ⏎ print(parse('x'))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 7 | -1",
    check:(out,v)=> _pqN(out)==="7\n-1" && _pqR(v,["try", "except"]),
    scene:"errorpeak",
    hints:["Оберни int() в try и верни -1.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: def parse(s): …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Сумма чисел из списка",
    story:"Часть данных — мусор.",
    objective:"Для ['3', 'a', '4', 'b', '5'] сложи только числа и выведи Sum: 12. Вывод: Sum: 12",
    check:(out,v)=> _pqN(out)==="Sum: 12" && _pqR(v,["\\bfor\\b", "try"]),
    scene:"errorpeak",
    hints:["pass — «ничего не делать».", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: total = 0 …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Ключи словаря",
    story:"Читай цены из словаря безопасно.",
    objective:"Для d={'a':5,'b':7} выведи цену для 'a', 'c', 'b'; если ключа нет — 0. Вывод: 5 | 0 | 7",
    check:(out,v)=> _pqN(out)==="5\n0\n7" && _pqR(v,["\\bfor\\b", "except"]),
    scene:"errorpeak",
    hints:["try/except KeyError в цикле.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: d = {'a': 5, 'b': 7} …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Феникс Except",
    story:"Феникс Except охраняет Ключ ядра №21! Феникс проверяет всё! Победи — и часть цифровой карты снова заработает.",
    objective:"Функция to_num(s) возвращает int(s) или None при ValueError. Функция avg(items) собирает числа из списка строк через to_num (пропуская None) и возвращает среднее (0 если пусто). Выведи avg(['4','x','8','12']) и avg(['a']). Вывод: 8.0 | 0",
    check:(out,v)=> _pqN(out)==="8.0\n0" && _pqR(v,["def to_num", "def avg", "except"]),
    scene:"errorpeak-boss",
    hints:["Функции, try/except, is not None, циклы, списки.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Функции, try/except, is not None, циклы, списки."]
  }
];

/* ===== MODULE 22: Algo Arena — алгоритмы ===== */
MISSIONS[22] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Алгоритм — по шагам",
    story:"Ты выходишь на Algo Arena: гладиаторы сражаются алгоритмами, а вирус Null подсовывает неэффективные решения. Тренер Шаг: «Алгоритм — точная последовательность шагов.»",
    objective:"Сложи три числа по шагам: 4, 6, 10. Вывод: 20",
    blocks:["total += 6", "print(total)", "total += 4", "total += 10", "total = 0"],
    targetCode:"total = 0\ntotal += 4\ntotal += 6\ntotal += 10\nprint(total)",
    check:(out,v)=> _pqN(out)==="20",
    scene:"arena",
    hints:["Пошаговое накопление.", "Блок за блоком: total = 0 → total += 4 → total += 6 …", "Готовый код:\ntotal = 0\ntotal += 4\ntotal += 6\ntotal += 10\nprint(total)"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Максимум",
    story:"Найди самого сильного.",
    objective:"Найди максимум списка через цикл. Вывод: 9",
    blocks:["if x > best:", "best = x", "print(best)", "for x in a:", "best = a[0]", "a = [7, 3, 9, 2]"],
    targetCode:"a = [7, 3, 9, 2]\nbest = a[0]\nfor x in a:\n    if x > best:\n        best = x\nprint(best)",
    check:(out,v)=> _pqN(out)==="9",
    scene:"arena",
    hints:["Сравнивай с лучшим.", "Блок за блоком: a = [7, 3, 9, 2] → best = a[0] → for x in a: …", "Готовый код:\na = [7, 3, 9, 2]\nbest = a[0]\nfor x in a:\n    if x > best:\n        best = x\nprint(best)"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Минимум",
    story:"Найди самого слабого.",
    objective:"Найди минимум циклом. Вывод: 2",
    blocks:["if x < low:", "a = [7, 3, 9, 2]", "for x in a:", "print(low)", "low = x", "low = a[0]"],
    targetCode:"a = [7, 3, 9, 2]\nlow = a[0]\nfor x in a:\n    if x < low:\n        low = x\nprint(low)",
    check:(out,v)=> _pqN(out)==="2",
    scene:"arena",
    hints:["Аналогично максимуму.", "Блок за блоком: a = [7, 3, 9, 2] → low = a[0] → for x in a: …", "Готовый код:\na = [7, 3, 9, 2]\nlow = a[0]\nfor x in a:\n    if x < low:\n        low = x\nprint(low)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Счётчик шагов",
    story:"Сколько раз выполнится тело цикла? Код: c = 0 ⏎ n = 20 ⏎ while n > 1: ⏎ ⇥ n = n // 2 ⏎ ⇥ c += 1 ⏎ print(c)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(5)", "print(10)", "print(4)"],
    targetCode:"print(4)",
    check:(out,v)=> _pqN(out)==="4",
    scene:"arena",
    hints:["20 → 10 → 5 → 2 → 1.", "Запиши значения переменных после каждого шага.", "Ответ: print(4)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Среднее",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Среднее арифметическое.",
    objective:"Найди сумму и среднее списка. Вывод: 20 5.0",
    blocks:["s = 0", "s += x", "a = [2, 4, 6, 8]", "for x in a:", "print(s, s / len(a))"],
    targetCode:"a = [2, 4, 6, 8]\ns = 0\nfor x in a:\n    s += x\nprint(s, s / len(a))",
    check:(out,v)=> _pqN(out)==="20 5.0",
    scene:"arena",
    hints:["Среднее = сумма / количество.", "Блок за блоком: a = [2, 4, 6, 8] → s = 0 → for x in a: …", "Готовый код:\na = [2, 4, 6, 8]\ns = 0\nfor x in a:\n    s += x\nprint(s, s / len(a))"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Счёт по условию",
    story:"Сколько чисел больше 5?",
    objective:"Посчитай числа > 5. Вывод: 3",
    blocks:["print(c)", "c = 0", "for x in a:", "c += 1", "a = [1, 6, 8, 3, 9]", "if x > 5:"],
    targetCode:"a = [1, 6, 8, 3, 9]\nc = 0\nfor x in a:\n    if x > 5:\n        c += 1\nprint(c)",
    check:(out,v)=> _pqN(out)==="3",
    scene:"arena",
    hints:["Счётчик и if.", "Блок за блоком: a = [1, 6, 8, 3, 9] → c = 0 → for x in a: …", "Готовый код:\na = [1, 6, 8, 3, 9]\nc = 0\nfor x in a:\n    if x > 5:\n        c += 1\nprint(c)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Простое число",
    story:"Проверка на простоту перебором.",
    objective:"Проверь, что 17 простое: делителей от 2 до 16 нет. Вывод: True",
    blocks:["if n % d == 0:", "for d in range(2, n):", "prime = False", "print(prime)", "prime = True", "n = 17"],
    targetCode:"n = 17\nprime = True\nfor d in range(2, n):\n    if n % d == 0:\n        prime = False\nprint(prime)",
    check:(out,v)=> _pqN(out)==="True",
    scene:"arena",
    hints:["Флаг prime и цикл.", "Блок за блоком: n = 17 → prime = True → for d in range(2, n): …", "Готовый код:\nn = 17\nprime = True\nfor d in range(2, n):\n    if n % d == 0:\n        prime = False\nprint(prime)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Ошибка в максимуме",
    story:"Начальное значение испортило результат. Сломанный код: a = [-5, -2, -9] ⏎ best = 0 ⏎ for x in a: ⏎ ⇥ if x > best: ⏎ ⇥ ⇥ best = x ⏎ print(best)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: -2",
    blocks:["for x in a:", "best = a[0]", "print(best)", "best = x", "best = 0", "if x > best:", "a = [-5, -2, -9]"],
    targetCode:"a = [-5, -2, -9]\nbest = a[0]\nfor x in a:\n    if x > best:\n        best = x\nprint(best)",
    check:(out,v)=> _pqN(out)==="-2",
    scene:"arena",
    hints:["Начинай с первого элемента, а не с 0.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\na = [-5, -2, -9]\nbest = a[0]\nfor x in a:\n    if x > best:\n        best = x\nprint(best)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Делители",
    story:"Найди делители числа.",
    objective:"Выведи все делители 12. Вывод: 1 | 2 | 3 … (6 строк)",
    blocks:["print(d)", "for d in range(1, n + 1):", "n = 12", "if n % d == 0:"],
    targetCode:"n = 12\nfor d in range(1, n + 1):\n    if n % d == 0:\n        print(d)",
    check:(out,v)=> _pqN(out)==="1\n2\n3\n4\n6\n12",
    scene:"arena",
    hints:["n % d == 0.", "Блок за блоком: n = 12 → for d in range(1, n + 1): → if n % d == 0: …", "Готовый код:\nn = 12\nfor d in range(1, n + 1):\n    if n % d == 0:\n        print(d)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Гладиатор Перебор",
    story:"Гладиатор Перебор преграждает путь! Сумма цифр числа.",
    objective:"Найди сумму цифр 2468. Вывод: 20",
    blocks:["while n > 0:", "print(s)", "s += n % 10", "n = 2468", "s = 0", "n //= 10"],
    targetCode:"n = 2468\ns = 0\nwhile n > 0:\n    s += n % 10\n    n //= 10\nprint(s)",
    check:(out,v)=> _pqN(out)==="20",
    scene:"arena-miniboss",
    hints:["% 10 и // 10.", "Блок за блоком: n = 2468 → s = 0 → while n > 0: …", "Готовый код:\nn = 2468\ns = 0\nwhile n > 0:\n    s += n % 10\n    n //= 10\nprint(s)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Простой ли",
    story:"Что выведет? Код: n = 9 ⏎ ok = True ⏎ for d in range(2, n): ⏎ ⇥ if n % d == 0: ⏎ ⇥ ⇥ ok = False ⏎ print(ok)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('False')", "print(3)", "print('True')"],
    targetCode:"print('False')",
    check:(out,v)=> _pqN(out)==="False",
    scene:"arena",
    hints:["9 делится на 3.", "Запиши значения переменных после каждого шага.", "Ответ: print('False')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Счётчик не обнулён",
    story:"Счётчик считает лишнее. Сломанный код: a = [1, 2, 3] ⏎ for x in a: ⏎ ⇥ c = 0 ⏎ ⇥ c += x ⏎ print(c)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 6",
    blocks:["c += x", "for x in a:", "print(c)", "a = [1, 2, 3]", "c = 0"],
    targetCode:"a = [1, 2, 3]\nc = 0\nfor x in a:\n    c += x\nprint(c)",
    check:(out,v)=> _pqN(out)==="6",
    scene:"arena",
    hints:["Сброс — до цикла, не внутри.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\na = [1, 2, 3]\nc = 0\nfor x in a:\n    c += x\nprint(c)"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"НОД",
    story:"Алгоритм Евклида.",
    objective:"Найди НОД(48, 18) через while. Вывод: 6",
    blocks:["a = 48", "a, b = b, a % b", "print(a)", "while b != 0:", "b = 18"],
    targetCode:"a = 48\nb = 18\nwhile b != 0:\n    a, b = b, a % b\nprint(a)",
    check:(out,v)=> _pqN(out)==="6",
    scene:"arena",
    hints:["a, b = b, a % b.", "Блок за блоком: a = 48 → b = 18 → while b != 0: …", "Готовый код:\na = 48\nb = 18\nwhile b != 0:\n    a, b = b, a % b\nprint(a)"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Числа Фибоначчи",
    story:"Проект: первые 8 чисел Фибоначчи.",
    objective:"Выведи Фибоначчи списком. Вывод: [0, 1, 1, 2, 3, 5, 8, 13]",
    blocks:["res = []", "print(res)", "for i in range(8):", "res.append(a)", "a, b = 0, 1", "a, b = b, a + b"],
    targetCode:"a, b = 0, 1\nres = []\nfor i in range(8):\n    res.append(a)\n    a, b = b, a + b\nprint(res)",
    check:(out,v)=> _pqN(out)==="[0, 1, 1, 2, 3, 5, 8, 13]",
    scene:"arena",
    hints:["Каждое число — сумма двух предыдущих.", "Блок за блоком: a, b = 0, 1 → res = [] → for i in range(8): …", "Готовый код:\na, b = 0, 1\nres = []\nfor i in range(8):\n    res.append(a)\n    a, b = b, a + b\nprint(res)"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Разворот числа",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Переверни число.",
    objective:"Переверни строку '12345' срезом и выведи как число. Вывод: 54321",
    blocks:["print(int(str(n)[::-1]))", "n = 12345"],
    targetCode:"n = 12345\nprint(int(str(n)[::-1]))",
    check:(out,v)=> _pqN(out)==="54321",
    scene:"arena",
    hints:["str → срез → int.", "Блок за блоком: n = 12345 → print(int(str(n)[::-1]))", "Готовый код:\nn = 12345\nprint(int(str(n)[::-1]))"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Наибольший делитель",
    story:"Чемпион ищет наибольший собственный делитель.",
    objective:"Для n=36 выведи наибольший делитель, меньший n. Вывод: 18",
    check:(out,v)=> _pqN(out)==="18" && _pqR(v,["\\bfor\\b"]),
    scene:"arena",
    hints:["Перебор d от 1 до n - 1.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: n = 36 …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Простое, но не так",
    story:"Простое число 7 определяется как непростое. Сломанный код: n = 7 ⏎ prime = True ⏎ for d in range(1, n): ⏎ ⇥ if n % d == 0: ⏎ ⇥ ⇥ prime = False ⏎ print(prime)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: True",
    check:(out,v)=> _pqN(out)==="True" && _pqR(v,["\\bfor\\b"]),
    scene:"arena",
    hints:["Делитель 1 не считается.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: n = 7 …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Простые до 20",
    story:"Найди все простые до 20.",
    objective:"Выведи простые числа от 2 до 20 списком. Вывод: [2, 3, 5, 7, 11, 13, 17, 19]",
    check:(out,v)=> _pqN(out)==="[2, 3, 5, 7, 11, 13, 17, 19]" && _pqR(v,["\\bfor\\b"]),
    scene:"arena",
    hints:["Вложенные циклы.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: res = [] …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Функции-алгоритмы",
    story:"Оформи алгоритмы функциями.",
    objective:"Функции digits_sum(n) и is_prime(n) возвращают результат. Выведи digits_sum(789), is_prime(13), is_prime(15). Вывод: 24 | True | False",
    check:(out,v)=> _pqN(out)==="24\nTrue\nFalse" && _pqR(v,["def digits_sum", "def is_prime"]),
    scene:"arena",
    hints:["return + цикл.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def digits_sum(n): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Чемпион Алгоритм",
    story:"Чемпион Алгоритм охраняет Ключ ядра №22! Чемпион вызывает на дуэль! Победи — и часть цифровой карты снова заработает.",
    objective:"Для списка [12, 7, 30, 5, 18, 2]: выведи max, min, среднее (Avg), сколько простых (Primes: N) и сумму цифр наибольшего. Используй функции. Вывод: Max: 30 | Min: 2 | Avg: 12.333333333333334 … (5 строк)",
    check:(out,v)=> _pqN(out)==="Max: 30\nMin: 2\nAvg: 12.333333333333334\nPrimes: 3\nDigits: 3" && _pqR(v,["def is_prime", "\\bfor\\b", "\\bwhile\\b"]),
    scene:"arena-boss",
    hints:["Функции, цикл, накопители, max/min и while для цифр.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Функции, цикл, накопители, max/min и while для цифр."]
  }
];

/* ===== MODULE 23: Linear Lookout — линейный поиск ===== */
MISSIONS[23] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Есть ли элемент",
    story:"Ты взбираешься на Linear Lookout: маяк ищет пропавшие данные, а вирус Null прячет их в длинных списках. Смотритель Индекс: «Линейный поиск — проверяем элементы по одному.»",
    objective:"Проверь, есть ли 7, циклом. Вывод: True",
    blocks:["print(found)", "for x in a:", "if x == 7:", "a = [3, 7, 9]", "found = False", "found = True"],
    targetCode:"a = [3, 7, 9]\nfound = False\nfor x in a:\n    if x == 7:\n        found = True\nprint(found)",
    check:(out,v)=> _pqN(out)==="True",
    scene:"lookout",
    hints:["Флаг found.", "Блок за блоком: a = [3, 7, 9] → found = False → for x in a: …", "Готовый код:\na = [3, 7, 9]\nfound = False\nfor x in a:\n    if x == 7:\n        found = True\nprint(found)"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Индекс элемента",
    story:"Найди позицию числа.",
    objective:"Найди индекс числа 9 в списке. Вывод: 2",
    blocks:["print(idx)", "idx = i", "for i in range(len(a)):", "a = [3, 7, 9, 2]", "if a[i] == 9:", "idx = -1"],
    targetCode:"a = [3, 7, 9, 2]\nidx = -1\nfor i in range(len(a)):\n    if a[i] == 9:\n        idx = i\nprint(idx)",
    check:(out,v)=> _pqN(out)==="2",
    scene:"lookout",
    hints:["-1 — значит не найдено.", "Блок за блоком: a = [3, 7, 9, 2] → idx = -1 → for i in range(len(a)): …", "Готовый код:\na = [3, 7, 9, 2]\nidx = -1\nfor i in range(len(a)):\n    if a[i] == 9:\n        idx = i\nprint(idx)"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Первое вхождение",
    story:"Остановись на первом найденном.",
    objective:"Найди первый индекс 4 и выйди из цикла (break). Вывод: 1",
    blocks:["for i in range(len(a)):", "a = [1, 4, 2, 4]", "if a[i] == 4:", "idx = i", "break", "idx = -1", "print(idx)"],
    targetCode:"a = [1, 4, 2, 4]\nidx = -1\nfor i in range(len(a)):\n    if a[i] == 4:\n        idx = i\n        break\nprint(idx)",
    check:(out,v)=> _pqN(out)==="1",
    scene:"lookout",
    hints:["break прерывает цикл.", "Блок за блоком: a = [1, 4, 2, 4] → idx = -1 → for i in range(len(a)): …", "Готовый код:\na = [1, 4, 2, 4]\nidx = -1\nfor i in range(len(a)):\n    if a[i] == 4:\n        idx = i\n        break\nprint(idx)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Поиск в списке",
    story:"Что выведет? Код: a = [5, 8, 8, 3] ⏎ idx = -1 ⏎ for i in range(len(a)): ⏎ ⇥ if a[i] == 8: ⏎ ⇥ ⇥ idx = i ⏎ ⇥ ⇥ break ⏎ print(idx)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(1)", "print(-1)", "print(2)"],
    targetCode:"print(1)",
    check:(out,v)=> _pqN(out)==="1",
    scene:"lookout",
    hints:["Первое вхождение — индекс 1.", "Запиши значения переменных после каждого шага.", "Ответ: print(1)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Сколько раз",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Считай вхождения.",
    objective:"Посчитай, сколько раз встречается 2. Вывод: 3",
    blocks:["print(c)", "c += 1", "a = [2, 5, 2, 2, 7]", "for x in a:", "c = 0", "if x == 2:"],
    targetCode:"a = [2, 5, 2, 2, 7]\nc = 0\nfor x in a:\n    if x == 2:\n        c += 1\nprint(c)",
    check:(out,v)=> _pqN(out)==="3",
    scene:"lookout",
    hints:["Счётчик.", "Блок за блоком: a = [2, 5, 2, 2, 7] → c = 0 → for x in a: …", "Готовый код:\na = [2, 5, 2, 2, 7]\nc = 0\nfor x in a:\n    if x == 2:\n        c += 1\nprint(c)"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Поиск в строке",
    story:"Найди букву в слове.",
    objective:"Найди индекс первой буквы 'a' в 'banana'. Вывод: 1",
    blocks:["if w[i] == 'a':", "print(idx)", "idx = -1", "w = 'banana'", "idx = i", "break", "for i in range(len(w)):"],
    targetCode:"w = 'banana'\nidx = -1\nfor i in range(len(w)):\n    if w[i] == 'a':\n        idx = i\n        break\nprint(idx)",
    check:(out,v)=> _pqN(out)==="1",
    scene:"lookout",
    hints:["Строка индексируется как список.", "Блок за блоком: w = 'banana' → idx = -1 → for i in range(len(w)): …", "Готовый код:\nw = 'banana'\nidx = -1\nfor i in range(len(w)):\n    if w[i] == 'a':\n        idx = i\n        break\nprint(idx)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Все позиции",
    story:"Выведи все индексы вхождений.",
    objective:"Выведи индексы всех 3 в списке. Вывод: 0 | 2 | 4",
    blocks:["print(i)", "a = [3, 1, 3, 4, 3]", "if a[i] == 3:", "for i in range(len(a)):"],
    targetCode:"a = [3, 1, 3, 4, 3]\nfor i in range(len(a)):\n    if a[i] == 3:\n        print(i)",
    check:(out,v)=> _pqN(out)==="0\n2\n4",
    scene:"lookout",
    hints:["Печатай индекс, а не элемент.", "Блок за блоком: a = [3, 1, 3, 4, 3] → for i in range(len(a)): → if a[i] == 3: …", "Готовый код:\na = [3, 1, 3, 4, 3]\nfor i in range(len(a)):\n    if a[i] == 3:\n        print(i)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Индекс вместо элемента",
    story:"Сравнение неверное. Сломанный код: a = [4, 8, 6] ⏎ for i in range(len(a)): ⏎ ⇥ if i == 8: ⏎ ⇥ ⇥ print(i)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 1",
    blocks:["if i == 8:", "print(i)", "if a[i] == 8:", "for i in range(len(a)):", "a = [4, 8, 6]"],
    targetCode:"a = [4, 8, 6]\nfor i in range(len(a)):\n    if a[i] == 8:\n        print(i)",
    check:(out,v)=> _pqN(out)==="1",
    scene:"lookout",
    hints:["Сравнивай a[i], а не i.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\na = [4, 8, 6]\nfor i in range(len(a)):\n    if a[i] == 8:\n        print(i)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Поиск с while",
    story:"Ищем, пока не найдём.",
    objective:"Найди индекс 6 через while. Вывод: 2",
    blocks:["a = [2, 4, 6, 8]", "i = 0", "print(i)", "while i < len(a) and a[i] != 6:", "i += 1"],
    targetCode:"a = [2, 4, 6, 8]\ni = 0\nwhile i < len(a) and a[i] != 6:\n    i += 1\nprint(i)",
    check:(out,v)=> _pqN(out)==="2",
    scene:"lookout",
    hints:["Условие с and.", "Блок за блоком: a = [2, 4, 6, 8] → i = 0 → while i < len(a) and a[i] … …", "Готовый код:\na = [2, 4, 6, 8]\ni = 0\nwhile i < len(a) and a[i] != 6:\n    i += 1\nprint(i)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Призрак Пропажи",
    story:"Призрак Пропажи преграждает путь! Поиск по ключу в списке словарей.",
    objective:"Найди героя по имени и выведи его hp. Вывод: 90",
    blocks:["for h in heroes:", "if h['name'] == 'Vera':", "heroes = [{'name': 'Ali', 'hp': 70}, {'name': 'Vera', 'hp': 90}]", "print(h['hp'])"],
    targetCode:"heroes = [{'name': 'Ali', 'hp': 70}, {'name': 'Vera', 'hp': 90}]\nfor h in heroes:\n    if h['name'] == 'Vera':\n        print(h['hp'])",
    check:(out,v)=> _pqN(out)==="90",
    scene:"lookout-miniboss",
    hints:["Сравнивай h['name'].", "Блок за блоком: heroes = [{'name': 'Ali', … → for h in heroes: → if h['name'] == 'Vera': …", "Готовый код:\nheroes = [{'name': 'Ali', 'hp': 70}, {'name': 'Vera', 'hp': 90}]\nfor h in heroes:\n    if h['name'] == 'Vera':\n        print(h['hp'])"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Найдено или нет",
    story:"Что выведет? Код: a = [1, 3, 5] ⏎ found = 'No' ⏎ for x in a: ⏎ ⇥ if x % 2 == 0: ⏎ ⇥ ⇥ found = 'Yes' ⏎ print(found)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('No')", "print('Yes')", "print(0)"],
    targetCode:"print('No')",
    check:(out,v)=> _pqN(out)==="No",
    scene:"lookout",
    hints:["Чётных элементов нет.", "Запиши значения переменных после каждого шага.", "Ответ: print('No')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Поиск не останавливается",
    story:"Хотим выйти после находки. Сломанный код: a = [1, 2, 3, 4] ⏎ for x in a: ⏎ ⇥ print(x) ⏎ ⇥ if x == 2: ⏎ ⇥ ⇥ print('found') ⏎ ⇥ ⇥ continue  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 1 | 2 | found",
    blocks:["print('found')", "a = [1, 2, 3, 4]", "continue", "if x == 2:", "for x in a:", "break", "print(x)"],
    targetCode:"a = [1, 2, 3, 4]\nfor x in a:\n    print(x)\n    if x == 2:\n        print('found')\n        break",
    check:(out,v)=> _pqN(out)==="1\n2\nfound",
    scene:"lookout",
    hints:["Какой оператор прерывает цикл?", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\na = [1, 2, 3, 4]\nfor x in a:\n    print(x)\n    if x == 2:\n        print('found')\n        break"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Функция поиска",
    story:"Проект: функция возвращает индекс.",
    objective:"linear_search(a, target) возвращает индекс или -1; вызови для 5 и 10. Вывод: 1 | -1",
    blocks:["print(linear_search([4, 5, 6], 10))", "return i", "def linear_search(a, target):", "print(linear_search([4, 5, 6], 5))", "if a[i] == target:", "for i in range(len(a)):", "return -1"],
    targetCode:"def linear_search(a, target):\n    for i in range(len(a)):\n        if a[i] == target:\n            return i\n    return -1\nprint(linear_search([4, 5, 6], 5))\nprint(linear_search([4, 5, 6], 10))",
    check:(out,v)=> _pqN(out)==="1\n-1",
    scene:"lookout",
    hints:["return внутри цикла — сразу выйдет.", "Блок за блоком: def linear_search(a, targe… → for i in range(len(a)): → if a[i] == target: …", "Готовый код:\ndef linear_search(a, target):\n    for i in range(len(a)):\n        if a[i] == target:\n            return i\n    return -1\nprint(linear_search([4, 5, 6], 5))\nprint(linear_search([4, 5, 6], 10))"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Поиск по вводу",
    story:"Игрок вводит число для поиска.",
    objective:"Считай число и найди его индекс в списке. Вывод: 1",
    blocks:["idx = i", "for i in range(len(a)):", "print(idx)", "a = [10, 20, 30]", "idx = -1", "if a[i] == t:", "t = int(input())"],
    targetCode:"a = [10, 20, 30]\nt = int(input())\nidx = -1\nfor i in range(len(a)):\n    if a[i] == t:\n        idx = i\nprint(idx)",
    check:(out,v)=> _pqN(out)==="1",
    scene:"lookout",
    simInput:["20"],
    hints:["int(input()).", "Блок за блоком: a = [10, 20, 30] → t = int(input()) → idx = -1 …", "Готовый код:\na = [10, 20, 30]\nt = int(input())\nidx = -1\nfor i in range(len(a)):\n    if a[i] == t:\n        idx = i\nprint(idx)"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Ближайшее большее",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Найди первый элемент больше порога.",
    objective:"Выведи первый элемент, который больше 10. Вывод: 12",
    blocks:["if x > 10:", "a = [3, 8, 12, 15]", "for x in a:", "print(x)", "break"],
    targetCode:"a = [3, 8, 12, 15]\nfor x in a:\n    if x > 10:\n        print(x)\n        break",
    check:(out,v)=> _pqN(out)==="12",
    scene:"lookout",
    hints:["Найти и сразу выйти.", "Блок за блоком: a = [3, 8, 12, 15] → for x in a: → if x > 10: …", "Готовый код:\na = [3, 8, 12, 15]\nfor x in a:\n    if x > 10:\n        print(x)\n        break"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Последнее вхождение",
    story:"Найди последний индекс.",
    objective:"Найди последний индекс числа 2 в [2, 5, 2, 7, 2, 1]. Вывод: 4",
    check:(out,v)=> _pqN(out)==="4" && _pqR(v,["\\bfor\\b"]),
    scene:"lookout",
    hints:["Не используй break.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: a = [2, 5, 2, 7, 2, 1] …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Поиск возвращает не то",
    story:"Функция должна вернуть индекс, а возвращает элемент. Сломанный код: def find(a, t): ⏎ ⇥ for i in range(len(a)): ⏎ ⇥ ⇥ if a[i] == t: ⏎ ⇥ ⇥ ⇥ return a[i] ⏎ ⇥ return -1 ⏎ print(find([5, 6, 7], 7))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 2",
    check:(out,v)=> _pqN(out)==="2" && _pqR(v,["def find"]),
    scene:"lookout",
    hints:["Верни i, а не a[i].", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: def find(a, t): …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Общие элементы",
    story:"Найди общие числа двух списков.",
    objective:"Для a=[1,2,3,4] и b=[3,4,5] выведи общие элементы линейным поиском. Вывод: 3 | 4",
    check:(out,v)=> _pqN(out)==="3\n4" && _pqR(v,["\\bfor\\b"]),
    scene:"lookout",
    hints:["Вложенные циклы.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: a = [1, 2, 3, 4] …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Поиск с сообщением",
    story:"Игрок ищет ключ.",
    objective:"Функция search(a, t) выводит 'Found at i' или 'Not found'. Вызови для [4, 9, 1] с 9 и с 5. Вывод: Found at 1 | Not found",
    check:(out,v)=> _pqN(out)==="Found at 1\nNot found" && _pqR(v,["def search"]),
    scene:"lookout",
    hints:["return без значения тоже выходит из функции.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def search(a, t): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Маячный Дракон",
    story:"Маячный Дракон охраняет Ключ ядра №23! Дракон прячет данные! Победи — и часть цифровой карты снова заработает.",
    objective:"students=[{'name':'Ali','score':70},{'name':'Vera','score':95},{'name':'Omar','score':82}]. Функция find(students, name) возвращает балл или -1. Выведи find для Vera и Zed, затем всех, у кого балл больше 75 (по порядку), и индекс лучшего. Вывод: 95 | -1 | Vera … (5 строк)",
    check:(out,v)=> _pqN(out)==="95\n-1\nVera\nOmar\n1" && _pqR(v,["def find", "\\bfor\\b"]),
    scene:"lookout-boss",
    hints:["Поиск в списке словарей, функция, лучший индекс.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Поиск в списке словарей, функция, лучший индекс."]
  }
];

/* ===== MODULE 24: Sort Citadel — сортировка ===== */
MISSIONS[24] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"sort()",
    story:"Ты входишь в Sort Citadel: башни выстроены по порядку, а вирус Null перемешал всё. Капитан Порядок: «Сортировка — расставить по порядку.»",
    objective:"Отсортируй список методом sort(). Вывод: [1, 2, 5, 9]",
    blocks:["print(a)", "a.sort()", "a = [5, 2, 9, 1]"],
    targetCode:"a = [5, 2, 9, 1]\na.sort()\nprint(a)",
    check:(out,v)=> _pqN(out)==="[1, 2, 5, 9]",
    scene:"sortcitadel",
    hints:["sort меняет список.", "Блок за блоком: a = [5, 2, 9, 1] → a.sort() → print(a)", "Готовый код:\na = [5, 2, 9, 1]\na.sort()\nprint(a)"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"sorted()",
    story:"Новый упорядоченный список.",
    objective:"sorted возвращает копию, исходный остаётся. Вывод: [5, 2, 9] | [2, 5, 9]",
    blocks:["print(b)", "b = sorted(a)", "print(a)", "a = [5, 2, 9]"],
    targetCode:"a = [5, 2, 9]\nb = sorted(a)\nprint(a)\nprint(b)",
    check:(out,v)=> _pqN(out)==="[5, 2, 9]\n[2, 5, 9]",
    scene:"sortcitadel",
    hints:["sorted не меняет исходный список.", "Блок за блоком: a = [5, 2, 9] → b = sorted(a) → print(a) …", "Готовый код:\na = [5, 2, 9]\nb = sorted(a)\nprint(a)\nprint(b)"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"По убыванию",
    story:"От большего к меньшему.",
    objective:"Отсортируй по убыванию. Вывод: [9, 5, 2]",
    blocks:["a.sort(reverse=True)", "print(a)", "a = [5, 2, 9]"],
    targetCode:"a = [5, 2, 9]\na.sort(reverse=True)\nprint(a)",
    check:(out,v)=> _pqN(out)==="[9, 5, 2]",
    scene:"sortcitadel",
    hints:["reverse=True.", "Блок за блоком: a = [5, 2, 9] → a.sort(reverse=True) → print(a)", "Готовый код:\na = [5, 2, 9]\na.sort(reverse=True)\nprint(a)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Что после sort",
    story:"Что выведет? Код: a = [3, 1, 2] ⏎ b = sorted(a) ⏎ print(a[0], b[0])  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('1 1')", "print('3 1')", "print('3 3')"],
    targetCode:"print('3 1')",
    check:(out,v)=> _pqN(out)==="3 1",
    scene:"sortcitadel",
    hints:["a не изменился.", "Запиши значения переменных после каждого шага.", "Ответ: print('3 1')"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Сортировка слов",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Строки сортируются по алфавиту.",
    objective:"Отсортируй слова. Вывод: ['apple', 'fig', 'pear']",
    blocks:["w = ['pear', 'apple', 'fig']", "w.sort()", "print(w)"],
    targetCode:"w = ['pear', 'apple', 'fig']\nw.sort()\nprint(w)",
    check:(out,v)=> _pqN(out)==="['apple', 'fig', 'pear']",
    scene:"sortcitadel",
    hints:["Строки — по алфавиту.", "Блок за блоком: w = ['pear', 'apple', 'fig… → w.sort() → print(w)", "Готовый код:\nw = ['pear', 'apple', 'fig']\nw.sort()\nprint(w)"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Обмен соседей",
    story:"Меняем два элемента.",
    objective:"Поменяй местами a[0] и a[1]. Вывод: [1, 2, 3]",
    blocks:["a[0], a[1] = a[1], a[0]", "a = [2, 1, 3]", "print(a)"],
    targetCode:"a = [2, 1, 3]\na[0], a[1] = a[1], a[0]\nprint(a)",
    check:(out,v)=> _pqN(out)==="[1, 2, 3]",
    scene:"sortcitadel",
    hints:["Кортежный обмен.", "Блок за блоком: a = [2, 1, 3] → a[0], a[1] = a[1], a[0] → print(a)", "Готовый код:\na = [2, 1, 3]\na[0], a[1] = a[1], a[0]\nprint(a)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Один проход пузырька",
    story:"Пузырёк — сравнение соседей.",
    objective:"Выполни один проход пузырьком. Вывод: [3, 2, 1, 4]",
    blocks:["a[i], a[i + 1] = a[i + 1], a[i]", "if a[i] > a[i + 1]:", "for i in range(len(a) - 1):", "print(a)", "a = [4, 3, 2, 1]"],
    targetCode:"a = [4, 3, 2, 1]\nfor i in range(len(a) - 1):\n    if a[i] > a[i + 1]:\n        a[i], a[i + 1] = a[i + 1], a[i]\nprint(a)",
    check:(out,v)=> _pqN(out)==="[3, 2, 1, 4]",
    scene:"sortcitadel",
    hints:["Наибольший всплывает в конец.", "Блок за блоком: a = [4, 3, 2, 1] → for i in range(len(a) - 1): → if a[i] > a[i + 1]: …", "Готовый код:\na = [4, 3, 2, 1]\nfor i in range(len(a) - 1):\n    if a[i] > a[i + 1]:\n        a[i], a[i + 1] = a[i + 1], a[i]\nprint(a)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Забытый обмен",
    story:"Пузырёк не меняет числа. Сломанный код: a = [3, 1] ⏎ if a[0] > a[1]: ⏎ ⇥ a[0] = a[1] ⏎ ⇥ a[1] = a[0] ⏎ print(a)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: [1, 3]",
    blocks:["print(a)", "a[0], a[1] = a[1], a[0]", "a[1] = a[0]", "if a[0] > a[1]:", "a[0] = a[1]", "a = [3, 1]"],
    targetCode:"a = [3, 1]\nif a[0] > a[1]:\n    a[0], a[1] = a[1], a[0]\nprint(a)",
    check:(out,v)=> _pqN(out)==="[1, 3]",
    scene:"sortcitadel",
    hints:["Одновременный обмен.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\na = [3, 1]\nif a[0] > a[1]:\n    a[0], a[1] = a[1], a[0]\nprint(a)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Пузырьковая сортировка",
    story:"Полная сортировка.",
    objective:"Отсортируй [5, 3, 1, 4] пузырьком. Вывод: [1, 3, 4, 5]",
    blocks:["if a[j] > a[j + 1]:", "for i in range(len(a)):", "a[j], a[j + 1] = a[j + 1], a[j]", "print(a)", "a = [5, 3, 1, 4]", "for j in range(len(a) - 1 - i):"],
    targetCode:"a = [5, 3, 1, 4]\nfor i in range(len(a)):\n    for j in range(len(a) - 1 - i):\n        if a[j] > a[j + 1]:\n            a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)",
    check:(out,v)=> _pqN(out)==="[1, 3, 4, 5]",
    scene:"sortcitadel",
    hints:["Два вложенных цикла.", "Блок за блоком: a = [5, 3, 1, 4] → for i in range(len(a)): → for j in range(len(a) - 1 … …", "Готовый код:\na = [5, 3, 1, 4]\nfor i in range(len(a)):\n    for j in range(len(a) - 1 - i):\n        if a[j] > a[j + 1]:\n            a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Пузырёк-Страж",
    story:"Пузырёк-Страж преграждает путь! Сортировка по длине слов.",
    objective:"Отсортируй слова по длине с key=len. Вывод: ['a', 'bb', 'ccc']",
    blocks:["print(w)", "w.sort(key=len)", "w = ['ccc', 'a', 'bb']"],
    targetCode:"w = ['ccc', 'a', 'bb']\nw.sort(key=len)\nprint(w)",
    check:(out,v)=> _pqN(out)==="['a', 'bb', 'ccc']",
    scene:"sortcitadel-miniboss",
    hints:["key=len.", "Блок за блоком: w = ['ccc', 'a', 'bb'] → w.sort(key=len) → print(w)", "Готовый код:\nw = ['ccc', 'a', 'bb']\nw.sort(key=len)\nprint(w)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Пузырёк по шагам",
    story:"Что выведет после одного прохода? Код: a = [3, 2, 1] ⏎ for i in range(len(a) - 1): ⏎ ⇥ if a[i] > a[i + 1]: ⏎ ⇥ ⇥ a[i], a[i + 1] = a[i + 1], a[i] ⏎ print(a)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('[1, 2, 3]')", "print('[3, 2, 1]')", "print('[2, 1, 3]')"],
    targetCode:"print('[2, 1, 3]')",
    check:(out,v)=> _pqN(out)==="[2, 1, 3]",
    scene:"sortcitadel",
    hints:["После прохода 3 в конце.", "Запиши значения переменных после каждого шага.", "Ответ: print('[2, 1, 3]')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Выход за границу",
    story:"Сравнение с несуществующим соседом. Сломанный код: a = [2, 1] ⏎ for i in range(len(a)): ⏎ ⇥ if a[i] > a[i + 1]: ⏎ ⇥ ⇥ a[i], a[i + 1] = a[i + 1], a[i] ⏎ print(a)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: [1, 2]",
    blocks:["a[i], a[i + 1] = a[i + 1], a[i]", "a = [2, 1]", "if a[i] > a[i + 1]:", "for i in range(len(a) - 1):", "for i in range(len(a)):", "print(a)"],
    targetCode:"a = [2, 1]\nfor i in range(len(a) - 1):\n    if a[i] > a[i + 1]:\n        a[i], a[i + 1] = a[i + 1], a[i]\nprint(a)",
    check:(out,v)=> _pqN(out)==="[1, 2]",
    scene:"sortcitadel",
    hints:["range(len(a) - 1).", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\na = [2, 1]\nfor i in range(len(a) - 1):\n    if a[i] > a[i + 1]:\n        a[i], a[i + 1] = a[i + 1], a[i]\nprint(a)"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Сортировка выбором",
    story:"Проект: найди минимум и поставь в начало.",
    objective:"Выбором отсортируй [3, 1, 2]. Вывод: [1, 2, 3]",
    blocks:["for j in range(i + 1, len(a)):", "if a[j] < a[m]:", "print(a)", "for i in range(len(a)):", "a[i], a[m] = a[m], a[i]", "a = [3, 1, 2]", "m = i", "m = j"],
    targetCode:"a = [3, 1, 2]\nfor i in range(len(a)):\n    m = i\n    for j in range(i + 1, len(a)):\n        if a[j] < a[m]:\n            m = j\n    a[i], a[m] = a[m], a[i]\nprint(a)",
    check:(out,v)=> _pqN(out)==="[1, 2, 3]",
    scene:"sortcitadel",
    hints:["Ищи индекс минимума.", "Блок за блоком: a = [3, 1, 2] → for i in range(len(a)): → m = i …", "Готовый код:\na = [3, 1, 2]\nfor i in range(len(a)):\n    m = i\n    for j in range(i + 1, len(a)):\n        if a[j] < a[m]:\n            m = j\n    a[i], a[m] = a[m], a[i]\nprint(a)"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Сортировка словарей",
    story:"Отсортируй героев по hp.",
    objective:"sort с key через lambda. Вывод: B",
    blocks:["print(h[0]['n'])", "h = [{'n': 'A', 'hp': 90}, {'n': 'B', 'hp': 50}]", "h.sort(key=lambda x: x['hp'])"],
    targetCode:"h = [{'n': 'A', 'hp': 90}, {'n': 'B', 'hp': 50}]\nh.sort(key=lambda x: x['hp'])\nprint(h[0]['n'])",
    check:(out,v)=> _pqN(out)==="B",
    scene:"sortcitadel",
    hints:["lambda x: x['hp'].", "Блок за блоком: h = [{'n': 'A', 'hp': 90},… → h.sort(key=lambda x: x['hp… → print(h[0]['n'])", "Готовый код:\nh = [{'n': 'A', 'hp': 90}, {'n': 'B', 'hp': 50}]\nh.sort(key=lambda x: x['hp'])\nprint(h[0]['n'])"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Топ-3",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Три сильнейших.",
    objective:"Выведи три наибольших. Вывод: [90, 70, 40]",
    blocks:["a = [40, 10, 90, 70, 20]", "print(a[:3])", "a.sort(reverse=True)"],
    targetCode:"a = [40, 10, 90, 70, 20]\na.sort(reverse=True)\nprint(a[:3])",
    check:(out,v)=> _pqN(out)==="[90, 70, 40]",
    scene:"sortcitadel",
    hints:["Срез после sort.", "Блок за блоком: a = [40, 10, 90, 70, 20] → a.sort(reverse=True) → print(a[:3])", "Готовый код:\na = [40, 10, 90, 70, 20]\na.sort(reverse=True)\nprint(a[:3])"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Проверка порядка",
    story:"Отсортирован ли список?",
    objective:"Функция is_sorted(a) возвращает True/False. Проверь [1,2,3] и [3,1,2]. Вывод: True | False",
    check:(out,v)=> _pqN(out)==="True\nFalse" && _pqR(v,["def is_sorted"]),
    scene:"sortcitadel",
    hints:["return False при нарушении порядка.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def is_sorted(a): …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Сортировка без пар",
    story:"Пузырёк не завершает сортировку. Сломанный код: a = [3, 2, 1] ⏎ for i in range(len(a) - 1): ⏎ ⇥ if a[i] > a[i + 1]: ⏎ ⇥ ⇥ a[i], a[i + 1] = a[i + 1], a[i] ⏎ print(a)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: [1, 2, 3]",
    check:(out,v)=> _pqN(out)==="[1, 2, 3]" && _pqR(v,["\\bfor\\b"]),
    scene:"sortcitadel",
    hints:["Нужно несколько проходов.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: a = [3, 2, 1] …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Медиана",
    story:"Найди среднее по порядку.",
    objective:"Функция median(a) сортирует копию и возвращает средний элемент (нечётная длина). Выведи median([9, 1, 5, 3, 7]). Вывод: 5",
    check:(out,v)=> _pqN(out)==="5" && _pqR(v,["def median"]),
    scene:"sortcitadel",
    hints:["sorted + индекс середины.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def median(a): …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Слияние",
    story:"Слей два отсортированных списка.",
    objective:"Слей [1,4,7] и [2,3,9] в один отсортированный без sort() (два индекса). Вывод: [1, 2, 3, 4, 7, 9]",
    check:(out,v)=> _pqN(out)==="[1, 2, 3, 4, 7, 9]" && _pqR(v,["\\bwhile\\b"]),
    scene:"sortcitadel",
    hints:["Два указателя i и j.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: a = [1, 4, 7] …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Император Сортировки",
    story:"Император Сортировки охраняет Ключ ядра №24! Император проверяет твой порядок! Победи — и часть цифровой карты снова заработает.",
    objective:"Напиши bubble(a) (пузырьком, возвращает список), is_sorted(a) и top(a, n) (n наибольших по убыванию). Для [8,3,5,1,9,2]: выведи bubble, is_sorted до и после, и top(...,3). Вывод: False | [1, 2, 3, 5, 8, 9] | True | [9, 8, 5]",
    check:(out,v)=> _pqN(out)==="False\n[1, 2, 3, 5, 8, 9]\nTrue\n[9, 8, 5]" && _pqR(v,["def bubble", "def is_sorted", "def top"]),
    scene:"sortcitadel-boss",
    hints:["Функции, вложенные циклы, срезы, копия списка.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Функции, вложенные циклы, срезы, копия списка."]
  }
];

/* ===== MODULE 25: Recursion Ruins — рекурсия ===== */
MISSIONS[25] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Функция вызывает себя",
    story:"Ты спускаешься в Recursion Ruins: руины повторяют себя, а вирус Null зациклил древние заклинания. Археолог Base: «Рекурсия — функция вызывает саму себя, пока не дойдёт до базового случая.»",
    objective:"Отсчёт вниз: countdown(3) выводит 3, 2, 1. Вывод: 3 | 2 | 1",
    blocks:["def countdown(n):", "print(n)", "countdown(3)", "if n == 0:", "return", "countdown(n - 1)"],
    targetCode:"def countdown(n):\n    if n == 0:\n        return\n    print(n)\n    countdown(n - 1)\ncountdown(3)",
    check:(out,v)=> _pqN(out)==="3\n2\n1",
    scene:"ruins",
    hints:["Базовый случай — n == 0.", "Блок за блоком: def countdown(n): → if n == 0: → return …", "Готовый код:\ndef countdown(n):\n    if n == 0:\n        return\n    print(n)\n    countdown(n - 1)\ncountdown(3)"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Факториал",
    story:"Классика рекурсии.",
    objective:"fact(n) = n * fact(n - 1); выведи fact(5). Вывод: 120",
    blocks:["print(fact(5))", "if n <= 1:", "def fact(n):", "return 1", "return n * fact(n - 1)"],
    targetCode:"def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\nprint(fact(5))",
    check:(out,v)=> _pqN(out)==="120",
    scene:"ruins",
    hints:["База: n <= 1.", "Блок за блоком: def fact(n): → if n <= 1: → return 1 …", "Готовый код:\ndef fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\nprint(fact(5))"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Сумма до n",
    story:"Сумма 1..n рекурсивно.",
    objective:"sum_to(n) возвращает n + sum_to(n - 1); выведи sum_to(4). Вывод: 10",
    blocks:["return 0", "print(sum_to(4))", "return n + sum_to(n - 1)", "if n == 0:", "def sum_to(n):"],
    targetCode:"def sum_to(n):\n    if n == 0:\n        return 0\n    return n + sum_to(n - 1)\nprint(sum_to(4))",
    check:(out,v)=> _pqN(out)==="10",
    scene:"ruins",
    hints:["Базовый случай возвращает 0.", "Блок за блоком: def sum_to(n): → if n == 0: → return 0 …", "Готовый код:\ndef sum_to(n):\n    if n == 0:\n        return 0\n    return n + sum_to(n - 1)\nprint(sum_to(4))"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Что вернёт",
    story:"Что выведет? Код: def f(n): ⏎ ⇥ if n == 0: ⏎ ⇥ ⇥ return 0 ⏎ ⇥ return 1 + f(n - 1) ⏎ print(f(4))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(5)", "print(0)", "print(4)"],
    targetCode:"print(4)",
    check:(out,v)=> _pqN(out)==="4",
    scene:"ruins",
    hints:["Каждый вызов добавляет 1.", "Запиши значения переменных после каждого шага.", "Ответ: print(4)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Степень",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Возведи в степень рекурсией.",
    objective:"power(a, n) = a * power(a, n - 1); выведи power(2, 5). Вывод: 32",
    blocks:["def power(a, n):", "if n == 0:", "return 1", "return a * power(a, n - 1)", "print(power(2, 5))"],
    targetCode:"def power(a, n):\n    if n == 0:\n        return 1\n    return a * power(a, n - 1)\nprint(power(2, 5))",
    check:(out,v)=> _pqN(out)==="32",
    scene:"ruins",
    hints:["power(a, 0) = 1.", "Блок за блоком: def power(a, n): → if n == 0: → return 1 …", "Готовый код:\ndef power(a, n):\n    if n == 0:\n        return 1\n    return a * power(a, n - 1)\nprint(power(2, 5))"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Фибоначчи",
    story:"Числа Фибоначчи.",
    objective:"fib(n) = fib(n - 1) + fib(n - 2); выведи fib(7). Вывод: 13",
    blocks:["return n", "return fib(n - 1) + fib(n - 2)", "if n < 2:", "def fib(n):", "print(fib(7))"],
    targetCode:"def fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)\nprint(fib(7))",
    check:(out,v)=> _pqN(out)==="13",
    scene:"ruins",
    hints:["Две базы: 0 и 1.", "Блок за блоком: def fib(n): → if n < 2: → return n …", "Готовый код:\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)\nprint(fib(7))"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Обход вверх",
    story:"Печать 1..n рекурсией.",
    objective:"up(n) выводит числа до n по порядку (сначала рекурсия, потом print). Вывод: 1 | 2 | 3",
    blocks:["if n == 0:", "up(3)", "def up(n):", "print(n)", "return", "up(n - 1)"],
    targetCode:"def up(n):\n    if n == 0:\n        return\n    up(n - 1)\n    print(n)\nup(3)",
    check:(out,v)=> _pqN(out)==="1\n2\n3",
    scene:"ruins",
    hints:["Порядок print и вызова меняет результат.", "Блок за блоком: def up(n): → if n == 0: → return …", "Готовый код:\ndef up(n):\n    if n == 0:\n        return\n    up(n - 1)\n    print(n)\nup(3)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Нет базового случая",
    story:"Рекурсия бесконечна. Сломанный код: def down(n): ⏎ ⇥ print(n) ⏎ ⇥ down(n - 1) ⏎ down(2)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 2 | 1 | 0",
    blocks:["down(2)", "print(n)", "def down(n):", "if n < 0:", "return", "down(n - 1)"],
    targetCode:"def down(n):\n    if n < 0:\n        return\n    print(n)\n    down(n - 1)\ndown(2)",
    check:(out,v)=> _pqN(out)==="2\n1\n0",
    scene:"ruins",
    hints:["Добавь условие остановки.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ndef down(n):\n    if n < 0:\n        return\n    print(n)\n    down(n - 1)\ndown(2)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Длина строки",
    story:"Считай символы рекурсивно.",
    objective:"length(s): 0 для '', иначе 1 + length(s[1:]). Вывод: 4",
    blocks:["return 1 + length(s[1:])", "def length(s):", "if s == '':", "print(length('abcd'))", "return 0"],
    targetCode:"def length(s):\n    if s == '':\n        return 0\n    return 1 + length(s[1:])\nprint(length('abcd'))",
    check:(out,v)=> _pqN(out)==="4",
    scene:"ruins",
    hints:["Срез s[1:] убирает первый символ.", "Блок за блоком: def length(s): → if s == '': → return 0 …", "Готовый код:\ndef length(s):\n    if s == '':\n        return 0\n    return 1 + length(s[1:])\nprint(length('abcd'))"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Эхо Зеркала",
    story:"Эхо Зеркала преграждает путь! Разверни строку рекурсивно.",
    objective:"rev(s) = rev(s[1:]) + s[0]. Вывод: cba",
    blocks:["return rev(s[1:]) + s[0]", "print(rev('abc'))", "def rev(s):", "if s == '':", "return ''"],
    targetCode:"def rev(s):\n    if s == '':\n        return ''\n    return rev(s[1:]) + s[0]\nprint(rev('abc'))",
    check:(out,v)=> _pqN(out)==="cba",
    scene:"ruins-miniboss",
    hints:["База — пустая строка.", "Блок за блоком: def rev(s): → if s == '': → return '' …", "Готовый код:\ndef rev(s):\n    if s == '':\n        return ''\n    return rev(s[1:]) + s[0]\nprint(rev('abc'))"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Порядок печати",
    story:"Что выведет? Код: def f(n): ⏎ ⇥ if n == 0: ⏎ ⇥ ⇥ return ⏎ ⇥ f(n - 1) ⏎ ⇥ print(n, end='') ⏎ f(3)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(3)", "print(321)", "print(123)"],
    targetCode:"print(123)",
    check:(out,v)=> _pqN(out)==="123",
    scene:"ruins",
    hints:["Печать после рекурсивного вызова.", "Запиши значения переменных после каждого шага.", "Ответ: print(123)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Возврат без результата",
    story:"Функция не возвращает значение. Сломанный код: def fact(n): ⏎ ⇥ if n <= 1: ⏎ ⇥ ⇥ return 1 ⏎ ⇥ n * fact(n - 1) ⏎ print(fact(3))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 6",
    blocks:["print(fact(3))", "return 1", "return n * fact(n - 1)", "if n <= 1:", "def fact(n):", "n * fact(n - 1)"],
    targetCode:"def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\nprint(fact(3))",
    check:(out,v)=> _pqN(out)==="6",
    scene:"ruins",
    hints:["Добавь return.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ndef fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\nprint(fact(3))"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Сумма списка",
    story:"Проект: рекурсивная сумма списка.",
    objective:"sum_list(a): 0 для [], иначе a[0] + sum_list(a[1:]). Вывод: 10",
    blocks:["return 0", "def sum_list(a):", "print(sum_list([1, 2, 3, 4]))", "return a[0] + sum_list(a[1:])", "if len(a) == 0:"],
    targetCode:"def sum_list(a):\n    if len(a) == 0:\n        return 0\n    return a[0] + sum_list(a[1:])\nprint(sum_list([1, 2, 3, 4]))",
    check:(out,v)=> _pqN(out)==="10",
    scene:"ruins",
    hints:["Срез a[1:].", "Блок за блоком: def sum_list(a): → if len(a) == 0: → return 0 …", "Готовый код:\ndef sum_list(a):\n    if len(a) == 0:\n        return 0\n    return a[0] + sum_list(a[1:])\nprint(sum_list([1, 2, 3, 4]))"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Палиндром рекурсивно",
    story:"Проверка палиндрома.",
    objective:"is_pal(s): True если len ≤ 1; иначе s[0]==s[-1] и is_pal(s[1:-1]). Вывод: True | False",
    blocks:["return is_pal(s[1:-1])", "if len(s) <= 1:", "return False", "print(is_pal('level'))", "return True", "def is_pal(s):", "if s[0] != s[-1]:", "print(is_pal('abca'))"],
    targetCode:"def is_pal(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_pal(s[1:-1])\nprint(is_pal('level'))\nprint(is_pal('abca'))",
    check:(out,v)=> _pqN(out)==="True\nFalse",
    scene:"ruins",
    hints:["Срез s[1:-1] отбрасывает края.", "Блок за блоком: def is_pal(s): → if len(s) <= 1: → return True …", "Готовый код:\ndef is_pal(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_pal(s[1:-1])\nprint(is_pal('level'))\nprint(is_pal('abca'))"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Двоичная запись",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Число в двоичный вид.",
    objective:"to_bin(n): '' для 0, иначе to_bin(n // 2) + str(n % 2). Вывод: 1010",
    blocks:["print(to_bin(10))", "return to_bin(n // 2) + str(n % 2)", "def to_bin(n):", "return ''", "if n == 0:"],
    targetCode:"def to_bin(n):\n    if n == 0:\n        return ''\n    return to_bin(n // 2) + str(n % 2)\nprint(to_bin(10))",
    check:(out,v)=> _pqN(out)==="1010",
    scene:"ruins",
    hints:["Деление на 2 и остаток.", "Блок за блоком: def to_bin(n): → if n == 0: → return '' …", "Готовый код:\ndef to_bin(n):\n    if n == 0:\n        return ''\n    return to_bin(n // 2) + str(n % 2)\nprint(to_bin(10))"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Максимум",
    story:"Рекурсивный максимум.",
    objective:"maxr(a) — максимум списка (для одного элемента — он сам). Выведи maxr([3, 9, 4, 7]). Вывод: 9",
    check:(out,v)=> _pqN(out)==="9" && _pqR(v,["def maxr"]),
    scene:"ruins",
    hints:["Сравни первый и максимум остальных.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def maxr(a): …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Рекурсия вместо цикла",
    story:"Отсчёт зациклился. Сломанный код: def count(n): ⏎ ⇥ if n == 0: ⏎ ⇥ ⇥ print('go') ⏎ ⇥ print(n) ⏎ ⇥ count(n - 1) ⏎ count(2)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 2 | 1 | go",
    check:(out,v)=> _pqN(out)==="2\n1\ngo" && _pqR(v,["def count"]),
    scene:"ruins",
    hints:["После базы нужен return.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: def count(n): …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Ханойские башни",
    story:"Сколько ходов?",
    objective:"moves(n) = 2 * moves(n-1) + 1, moves(0) = 0. Выведи moves(4). Вывод: 15",
    check:(out,v)=> _pqN(out)==="15" && _pqR(v,["def moves"]),
    scene:"ruins",
    hints:["Формула из условия.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def moves(n): …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Рекурсия и цикл",
    story:"Сравни два способа.",
    objective:"fact_loop(n) циклом и fact_rec(n) рекурсией; выведи оба для 6. Вывод: 720 | 720",
    check:(out,v)=> _pqN(out)==="720\n720" && _pqR(v,["def fact_loop", "def fact_rec"]),
    scene:"ruins",
    hints:["Оба дают одно число.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def fact_loop(n): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Змей Уроборос",
    story:"Змей Уроборос охраняет Ключ ядра №25! Змей кусает свой хвост! Победи — и часть цифровой карты снова заработает.",
    objective:"Напиши рекурсивные: fact(n), fib(n), rev(s), digits(n) — сумма цифр (n < 10 → n, иначе n % 10 + digits(n // 10)). Выведи fact(6), fib(8), rev('code'), digits(9876). Вывод: 720 | 21 | edoc | 30",
    check:(out,v)=> _pqN(out)==="720\n21\nedoc\n30" && _pqR(v,["def fact", "def fib", "def rev", "def digits"]),
    scene:"ruins-boss",
    hints:["Четыре рекурсивные функции с базовым случаем.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Четыре рекурсивные функции с базовым случаем."]
  }
];

/* ===== MODULE 26: Class Citadel — классы ===== */
MISSIONS[26] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первый класс",
    story:"Ты входишь в Class Citadel: цитадель строит объекты по чертежам-классам, а вирус Null подделывает чертежи. Архитектор Self: «Класс — чертёж, объект — вещь по чертежу.»",
    objective:"Создай класс Hero и объект h. Вывод: Hero",
    blocks:["pass", "print(type(h).__name__)", "h = Hero()", "class Hero:"],
    targetCode:"class Hero:\n    pass\nh = Hero()\nprint(type(h).__name__)",
    check:(out,v)=> _pqN(out)==="Hero",
    scene:"citadel",
    hints:["class Имя: — заголовок с двоеточием.", "Блок за блоком: class Hero: → pass → h = Hero() …", "Готовый код:\nclass Hero:\n    pass\nh = Hero()\nprint(type(h).__name__)"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Конструктор",
    story:"__init__ задаёт начальные значения.",
    objective:"Hero(name) хранит имя в self.name; выведи его. Вывод: Ali",
    blocks:["class Hero:", "self.name = name", "h = Hero('Ali')", "def __init__(self, name):", "print(h.name)"],
    targetCode:"class Hero:\n    def __init__(self, name):\n        self.name = name\nh = Hero('Ali')\nprint(h.name)",
    check:(out,v)=> _pqN(out)==="Ali",
    scene:"citadel",
    hints:["self — сам объект.", "Блок за блоком: class Hero: → def __init__(self, name): → self.name = name …", "Готовый код:\nclass Hero:\n    def __init__(self, name):\n        self.name = name\nh = Hero('Ali')\nprint(h.name)"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Два атрибута",
    story:"Имя и здоровье.",
    objective:"Создай героя с name и hp; выведи оба. Вывод: Ali 100",
    blocks:["self.hp = hp", "self.name = name", "def __init__(self, name, hp):", "class Hero:", "print(h.name, h.hp)", "h = Hero('Ali', 100)"],
    targetCode:"class Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\nh = Hero('Ali', 100)\nprint(h.name, h.hp)",
    check:(out,v)=> _pqN(out)==="Ali 100",
    scene:"citadel",
    hints:["Атрибуты записывай через self.", "Блок за блоком: class Hero: → def __init__(self, name, h… → self.name = name …", "Готовый код:\nclass Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\nh = Hero('Ali', 100)\nprint(h.name, h.hp)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Изменение атрибута",
    story:"Что выведет? Код: class A: ⏎ ⇥ def __init__(self): ⏎ ⇥ ⇥ self.n = 1 ⏎ a = A() ⏎ a.n = a.n + 4 ⏎ print(a.n)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(5)", "print(1)", "print(4)"],
    targetCode:"print(5)",
    check:(out,v)=> _pqN(out)==="5",
    scene:"citadel",
    hints:["Атрибут можно менять снаружи.", "Запиши значения переменных после каждого шага.", "Ответ: print(5)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Метод",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Метод — функция внутри класса.",
    objective:"Метод say() выводит имя героя. Вывод: I am Ali",
    blocks:["def say(self):", "def __init__(self, name):", "class Hero:", "self.name = name", "Hero('Ali').say()", "print('I am', self.name)"],
    targetCode:"class Hero:\n    def __init__(self, name):\n        self.name = name\n    def say(self):\n        print('I am', self.name)\nHero('Ali').say()",
    check:(out,v)=> _pqN(out)==="I am Ali",
    scene:"citadel",
    hints:["Первый параметр метода — self.", "Блок за блоком: class Hero: → def __init__(self, name): → self.name = name …", "Готовый код:\nclass Hero:\n    def __init__(self, name):\n        self.name = name\n    def say(self):\n        print('I am', self.name)\nHero('Ali').say()"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Метод с параметром",
    story:"Урон герою.",
    objective:"Метод hit(d) уменьшает hp; выведи hp после hit(30). Вывод: 70",
    blocks:["self.hp = hp", "def __init__(self, hp):", "h = Hero(100)", "class Hero:", "h.hit(30)", "print(h.hp)", "def hit(self, d):", "self.hp -= d"],
    targetCode:"class Hero:\n    def __init__(self, hp):\n        self.hp = hp\n    def hit(self, d):\n        self.hp -= d\nh = Hero(100)\nh.hit(30)\nprint(h.hp)",
    check:(out,v)=> _pqN(out)==="70",
    scene:"citadel",
    hints:["self.hp -= d.", "Блок за блоком: class Hero: → def __init__(self, hp): → self.hp = hp …", "Готовый код:\nclass Hero:\n    def __init__(self, hp):\n        self.hp = hp\n    def hit(self, d):\n        self.hp -= d\nh = Hero(100)\nh.hit(30)\nprint(h.hp)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Метод с return",
    story:"Метод возвращает значение.",
    objective:"is_alive() возвращает hp > 0. Вывод: True | False",
    blocks:["return self.hp > 0", "print(Hero(5).is_alive())", "self.hp = hp", "print(Hero(0).is_alive())", "class Hero:", "def is_alive(self):", "def __init__(self, hp):"],
    targetCode:"class Hero:\n    def __init__(self, hp):\n        self.hp = hp\n    def is_alive(self):\n        return self.hp > 0\nprint(Hero(5).is_alive())\nprint(Hero(0).is_alive())",
    check:(out,v)=> _pqN(out)==="True\nFalse",
    scene:"citadel",
    hints:["return self.hp > 0.", "Блок за блоком: class Hero: → def __init__(self, hp): → self.hp = hp …", "Готовый код:\nclass Hero:\n    def __init__(self, hp):\n        self.hp = hp\n    def is_alive(self):\n        return self.hp > 0\nprint(Hero(5).is_alive())\nprint(Hero(0).is_alive())"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Забытый self",
    story:"Метод не видит объект. Сломанный код: class A: ⏎ ⇥ def __init__(self, n): ⏎ ⇥ ⇥ n = n ⏎ a = A(5) ⏎ print(a.n)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 5",
    blocks:["print(a.n)", "def __init__(self, n):", "n = n", "self.n = n", "class A:", "a = A(5)"],
    targetCode:"class A:\n    def __init__(self, n):\n        self.n = n\na = A(5)\nprint(a.n)",
    check:(out,v)=> _pqN(out)==="5",
    scene:"citadel",
    hints:["Атрибуты записывают в self.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nclass A:\n    def __init__(self, n):\n        self.n = n\na = A(5)\nprint(a.n)"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Два объекта",
    story:"Один класс — много объектов.",
    objective:"Создай двух героев; у каждого своё имя. Вывод: Ali Vera",
    blocks:["class Hero:", "self.name = name", "def __init__(self, name):", "a = Hero('Ali')", "print(a.name, b.name)", "b = Hero('Vera')"],
    targetCode:"class Hero:\n    def __init__(self, name):\n        self.name = name\na = Hero('Ali')\nb = Hero('Vera')\nprint(a.name, b.name)",
    check:(out,v)=> _pqN(out)==="Ali Vera",
    scene:"citadel",
    hints:["Объекты независимы.", "Блок за блоком: class Hero: → def __init__(self, name): → self.name = name …", "Готовый код:\nclass Hero:\n    def __init__(self, name):\n        self.name = name\na = Hero('Ali')\nb = Hero('Vera')\nprint(a.name, b.name)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Страж Конструктор",
    story:"Страж Конструктор преграждает путь! __str__ — как печатать объект.",
    objective:"Добавь __str__ и выведи print(h). Вывод: Hero Ali",
    blocks:["return 'Hero ' + self.name", "def __str__(self):", "print(Hero('Ali'))", "def __init__(self, name):", "class Hero:", "self.name = name"],
    targetCode:"class Hero:\n    def __init__(self, name):\n        self.name = name\n    def __str__(self):\n        return 'Hero ' + self.name\nprint(Hero('Ali'))",
    check:(out,v)=> _pqN(out)==="Hero Ali",
    scene:"citadel-miniboss",
    hints:["__str__ возвращает строку.", "Блок за блоком: class Hero: → def __init__(self, name): → self.name = name …", "Готовый код:\nclass Hero:\n    def __init__(self, name):\n        self.name = name\n    def __str__(self):\n        return 'Hero ' + self.name\nprint(Hero('Ali'))"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Общий список",
    story:"Что выведет? Код: class A: ⏎ ⇥ def __init__(self): ⏎ ⇥ ⇥ self.items = [] ⏎ ⇥ def add(self, x): ⏎ ⇥ ⇥ self.items.append(x) ⏎ a = A() ⏎ a.add(1) ⏎ a.add(2) ⏎ print(len(a.items))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(0)", "print(2)", "print(1)"],
    targetCode:"print(2)",
    check:(out,v)=> _pqN(out)==="2",
    scene:"citadel",
    hints:["Оба вызова меняют один и тот же список.", "Запиши значения переменных после каждого шага.", "Ответ: print(2)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Вызов без объекта",
    story:"Метод вызывают у класса. Сломанный код: class A: ⏎ ⇥ def hi(self): ⏎ ⇥ ⇥ print('hi') ⏎ A.hi()  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: hi",
    blocks:["print('hi')", "A.hi()", "def hi(self):", "class A:", "A().hi()"],
    targetCode:"class A:\n    def hi(self):\n        print('hi')\nA().hi()",
    check:(out,v)=> _pqN(out)==="hi",
    scene:"citadel",
    hints:["Метод вызывается у объекта.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nclass A:\n    def hi(self):\n        print('hi')\nA().hi()"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Счётчик",
    story:"Проект: класс Counter.",
    objective:"Counter с методами inc() и get(). Вывод: 2",
    blocks:["c = Counter()", "self.n += 1", "self.n = 0", "print(c.get())", "return self.n", "c.inc()", "class Counter:", "def inc(self):", "def __init__(self):", "def get(self):"],
    targetCode:"class Counter:\n    def __init__(self):\n        self.n = 0\n    def inc(self):\n        self.n += 1\n    def get(self):\n        return self.n\nc = Counter()\nc.inc()\nc.inc()\nprint(c.get())",
    check:(out,v)=> _pqN(out)==="2",
    scene:"citadel",
    hints:["self.n += 1.", "Блок за блоком: class Counter: → def __init__(self): → self.n = 0 …", "Готовый код:\nclass Counter:\n    def __init__(self):\n        self.n = 0\n    def inc(self):\n        self.n += 1\n    def get(self):\n        return self.n\nc = Counter()\nc.inc()\nc.inc()\nprint(c.get())"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Класс и цикл",
    story:"Создавай объекты в цикле.",
    objective:"Создай список героев из имён и выведи их. Вывод: Ali | Vera",
    blocks:["team.append(Hero(n))", "team = []", "class Hero:", "def __init__(self, name):", "print(h.name)", "self.name = name", "for n in ['Ali', 'Vera']:", "for h in team:"],
    targetCode:"class Hero:\n    def __init__(self, name):\n        self.name = name\nteam = []\nfor n in ['Ali', 'Vera']:\n    team.append(Hero(n))\nfor h in team:\n    print(h.name)",
    check:(out,v)=> _pqN(out)==="Ali\nVera",
    scene:"citadel",
    hints:["Список объектов.", "Блок за блоком: class Hero: → def __init__(self, name): → self.name = name …", "Готовый код:\nclass Hero:\n    def __init__(self, name):\n        self.name = name\nteam = []\nfor n in ['Ali', 'Vera']:\n    team.append(Hero(n))\nfor h in team:\n    print(h.name)"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Класс и ввод",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Имя героя вводит игрок.",
    objective:"Считай имя, создай героя, выведи. Вывод: Hi Ali",
    blocks:["self.name = name", "def __init__(self, name):", "h = Hero(input())", "class Hero:", "print('Hi', h.name)"],
    targetCode:"class Hero:\n    def __init__(self, name):\n        self.name = name\nh = Hero(input())\nprint('Hi', h.name)",
    check:(out,v)=> _pqN(out)==="Hi Ali",
    scene:"citadel",
    simInput:["Ali"],
    hints:["Аргумент — результат input().", "Блок за блоком: class Hero: → def __init__(self, name): → self.name = name …", "Готовый код:\nclass Hero:\n    def __init__(self, name):\n        self.name = name\nh = Hero(input())\nprint('Hi', h.name)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Банковский счёт",
    story:"Король открывает счёт.",
    objective:"Класс Account: balance=0, deposit(n), withdraw(n) (только если хватает). Вызови deposit(100), withdraw(30), withdraw(500), выведи balance. Вывод: 70",
    check:(out,v)=> _pqN(out)==="70" && _pqR(v,["class Account"]),
    scene:"citadel",
    hints:["if внутри метода.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: class Account: …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Общее вместо личного",
    story:"У каждого героя должен быть свой список предметов, но они общие. Сломанный код: class Hero: ⏎ ⇥ items = [] ⏎ ⇥ def add(self, x): ⏎ ⇥ ⇥ self.items.append(x) ⏎ a = Hero() ⏎ b = Hero() ⏎ a.add('sword') ⏎ print(len(b.items))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 0",
    check:(out,v)=> _pqN(out)==="0" && _pqR(v,["class Hero"]),
    scene:"citadel",
    hints:["Создавай список в __init__.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: class Hero: …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Круг",
    story:"Класс Circle.",
    objective:"Circle(r) с методом area() (3.14 * r * r). Выведи area для r=2. Вывод: 12.56",
    check:(out,v)=> _pqN(out)==="12.56" && _pqR(v,["class Circle"]),
    scene:"citadel",
    hints:["Метод возвращает число.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: class Circle: …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Список объектов",
    story:"Найди самого сильного.",
    objective:"Класс Hero(name, hp); из списка героев выведи имя с наибольшим hp. Вывод: B",
    check:(out,v)=> _pqN(out)==="B" && _pqR(v,["\\bfor\\b", "class Hero"]),
    scene:"citadel",
    hints:["Сравнивай атрибуты hp.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: class Hero: …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Король Объект",
    story:"Король Объект охраняет Ключ ядра №26! Король выпускает армию! Победи — и часть цифровой карты снова заработает.",
    objective:"Класс Hero(name, hp) с методами hit(d), is_alive(), __str__ ('name:hp'). Создай двух героев Ali(50), Vera(80). Ali получает удар 60, Vera — 30. Выведи обоих (print(h)) и для каждого Alive или Dead. Вывод: Ali:-10 | Dead | Vera:50 | Alive",
    check:(out,v)=> _pqN(out)==="Ali:-10\nDead\nVera:50\nAlive" && _pqR(v,["class Hero", "\\bfor\\b"]),
    scene:"citadel-boss",
    hints:["Класс, методы, __str__, список объектов, цикл.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Класс, методы, __str__, список объектов, цикл."]
  }
];

/* ===== MODULE 27: Inherit Island — наследование ===== */
MISSIONS[27] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Первый наследник",
    story:"Ты высаживаешься на Inherit Island: острова передают свойства детям, а вирус Null создаёт клонов-подделок. Патриарх: «Класс-ребёнок получает всё от родителя.»",
    objective:"Dog наследует Animal и умеет speak. Вывод: ...",
    blocks:["print('...')", "Dog().speak()", "class Animal:", "def speak(self):", "class Dog(Animal):", "pass"],
    targetCode:"class Animal:\n    def speak(self):\n        print('...')\nclass Dog(Animal):\n    pass\nDog().speak()",
    check:(out,v)=> _pqN(out)==="...",
    scene:"island",
    hints:["class Ребёнок(Родитель):", "Блок за блоком: class Animal: → def speak(self): → print('...') …", "Готовый код:\nclass Animal:\n    def speak(self):\n        print('...')\nclass Dog(Animal):\n    pass\nDog().speak()"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Переопределение",
    story:"Ребёнок меняет поведение.",
    objective:"Dog.speak печатает Woof вместо ... Вывод: Woof",
    blocks:["Dog().speak()", "class Dog(Animal):", "print('Woof')", "def speak(self):", "class Animal:", "print('...')"],
    targetCode:"class Animal:\n    def speak(self):\n        print('...')\nclass Dog(Animal):\n    def speak(self):\n        print('Woof')\nDog().speak()",
    check:(out,v)=> _pqN(out)==="Woof",
    scene:"island",
    hints:["Метод ребёнка перекрывает родительский.", "Блок за блоком: class Animal: → def speak(self): → print('...') …", "Готовый код:\nclass Animal:\n    def speak(self):\n        print('...')\nclass Dog(Animal):\n    def speak(self):\n        print('Woof')\nDog().speak()"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"super().__init__",
    story:"Вызов конструктора родителя.",
    objective:"Student наследует Person; name задаётся родителем. Вывод: Ali IT",
    blocks:["super().__init__(name)", "print(s.name, s.school)", "self.name = name", "def __init__(self, name, school):", "class Person:", "class Student(Person):", "self.school = school", "s = Student('Ali', 'IT')", "def __init__(self, name):"],
    targetCode:"class Person:\n    def __init__(self, name):\n        self.name = name\nclass Student(Person):\n    def __init__(self, name, school):\n        super().__init__(name)\n        self.school = school\ns = Student('Ali', 'IT')\nprint(s.name, s.school)",
    check:(out,v)=> _pqN(out)==="Ali IT",
    scene:"island",
    hints:["super() обращается к родителю.", "Блок за блоком: class Person: → def __init__(self, name): → self.name = name …", "Готовый код:\nclass Person:\n    def __init__(self, name):\n        self.name = name\nclass Student(Person):\n    def __init__(self, name, school):\n        super().__init__(name)\n        self.school = school\ns = Student('Ali', 'IT')\nprint(s.name, s.school)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Какой метод",
    story:"Что выведет? Код: class A: ⏎ ⇥ def f(self): ⏎ ⇥ ⇥ return 'A' ⏎ class B(A): ⏎ ⇥ def f(self): ⏎ ⇥ ⇥ return 'B' ⏎ print(B().f())  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('B')", "print('AB')", "print('A')"],
    targetCode:"print('B')",
    check:(out,v)=> _pqN(out)==="B",
    scene:"island",
    hints:["Ищется сначала в B.", "Запиши значения переменных после каждого шага.", "Ответ: print('B')"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Унаследованный метод",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Ребёнок использует метод родителя.",
    objective:"Cat наследует name и hello() от Pet. Вывод: Hi, Tom",
    blocks:["pass", "class Cat(Pet):", "print('Hi,', self.name)", "self.name = name", "def __init__(self, name):", "class Pet:", "Cat('Tom').hello()", "def hello(self):"],
    targetCode:"class Pet:\n    def __init__(self, name):\n        self.name = name\n    def hello(self):\n        print('Hi,', self.name)\nclass Cat(Pet):\n    pass\nCat('Tom').hello()",
    check:(out,v)=> _pqN(out)==="Hi, Tom",
    scene:"island",
    hints:["Конструктор тоже наследуется.", "Блок за блоком: class Pet: → def __init__(self, name): → self.name = name …", "Готовый код:\nclass Pet:\n    def __init__(self, name):\n        self.name = name\n    def hello(self):\n        print('Hi,', self.name)\nclass Cat(Pet):\n    pass\nCat('Tom').hello()"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"super() в методе",
    story:"Расширь родительский метод.",
    objective:"Child.hi вызывает Parent.hi и добавляет строку. Вывод: Parent | Child",
    blocks:["super().hi()", "print('Parent')", "class Parent:", "class Child(Parent):", "Child().hi()", "print('Child')", "def hi(self):"],
    targetCode:"class Parent:\n    def hi(self):\n        print('Parent')\nclass Child(Parent):\n    def hi(self):\n        super().hi()\n        print('Child')\nChild().hi()",
    check:(out,v)=> _pqN(out)==="Parent\nChild",
    scene:"island",
    hints:["super().hi()", "Блок за блоком: class Parent: → def hi(self): → print('Parent') …", "Готовый код:\nclass Parent:\n    def hi(self):\n        print('Parent')\nclass Child(Parent):\n    def hi(self):\n        super().hi()\n        print('Child')\nChild().hi()"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"isinstance",
    story:"Проверь тип.",
    objective:"Проверь, что Dog — Animal. Вывод: True",
    blocks:["pass", "print(isinstance(Dog(), Animal))", "class Dog(Animal):", "class Animal:"],
    targetCode:"class Animal:\n    pass\nclass Dog(Animal):\n    pass\nprint(isinstance(Dog(), Animal))",
    check:(out,v)=> _pqN(out)==="True",
    scene:"island",
    hints:["isinstance(объект, класс).", "Блок за блоком: class Animal: → pass → class Dog(Animal): …", "Готовый код:\nclass Animal:\n    pass\nclass Dog(Animal):\n    pass\nprint(isinstance(Dog(), Animal))"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Забытый родитель",
    story:"Ребёнок не получил метод. Сломанный код: class A: ⏎ ⇥ def hi(self): ⏎ ⇥ ⇥ print('hi') ⏎ class B: ⏎ ⇥ pass ⏎ B().hi()  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: hi",
    blocks:["class B:", "B().hi()", "pass", "class A:", "class B(A):", "print('hi')", "def hi(self):"],
    targetCode:"class A:\n    def hi(self):\n        print('hi')\nclass B(A):\n    pass\nB().hi()",
    check:(out,v)=> _pqN(out)==="hi",
    scene:"island",
    hints:["Родитель указывают в скобках.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nclass A:\n    def hi(self):\n        print('hi')\nclass B(A):\n    pass\nB().hi()"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Разные звери",
    story:"Один метод — разное поведение.",
    objective:"Пройди по списку животных и вызови speak(). Вывод: Woof | Meow | ...",
    blocks:["for a in [Dog(), Cat(), Animal()]:", "class Animal:", "print('Meow')", "class Dog(Animal):", "a.speak()", "def speak(self):", "class Cat(Animal):", "print('...')", "print('Woof')"],
    targetCode:"class Animal:\n    def speak(self):\n        print('...')\nclass Dog(Animal):\n    def speak(self):\n        print('Woof')\nclass Cat(Animal):\n    def speak(self):\n        print('Meow')\nfor a in [Dog(), Cat(), Animal()]:\n    a.speak()",
    check:(out,v)=> _pqN(out)==="Woof\nMeow\n...",
    scene:"island",
    hints:["Полиморфизм.", "Блок за блоком: class Animal: → def speak(self): → print('...') …", "Готовый код:\nclass Animal:\n    def speak(self):\n        print('...')\nclass Dog(Animal):\n    def speak(self):\n        print('Woof')\nclass Cat(Animal):\n    def speak(self):\n        print('Meow')\nfor a in [Dog(), Cat(), Animal()]:\n    a.speak()"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Клон-Наследник",
    story:"Клон-Наследник преграждает путь! Атрибуты родителя и ребёнка.",
    objective:"Hero(name, hp) и Mage(name, hp, mana). Вывод: Ali 50 30",
    blocks:["m = Mage('Ali', 50, 30)", "def __init__(self, name, hp, mana):", "self.name = name", "print(m.name, m.hp, m.mana)", "super().__init__(name, hp)", "class Hero:", "self.hp = hp", "class Mage(Hero):", "self.mana = mana", "def __init__(self, name, hp):"],
    targetCode:"class Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\nclass Mage(Hero):\n    def __init__(self, name, hp, mana):\n        super().__init__(name, hp)\n        self.mana = mana\nm = Mage('Ali', 50, 30)\nprint(m.name, m.hp, m.mana)",
    check:(out,v)=> _pqN(out)==="Ali 50 30",
    scene:"island-miniboss",
    hints:["super().__init__(name, hp)", "Блок за блоком: class Hero: → def __init__(self, name, h… → self.name = name …", "Готовый код:\nclass Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\nclass Mage(Hero):\n    def __init__(self, name, hp, mana):\n        super().__init__(name, hp)\n        self.mana = mana\nm = Mage('Ali', 50, 30)\nprint(m.name, m.hp, m.mana)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Цепочка наследования",
    story:"Что выведет? Код: class A: ⏎ ⇥ def who(self): ⏎ ⇥ ⇥ return 'a' ⏎ class B(A): ⏎ ⇥ pass ⏎ class C(B): ⏎ ⇥ def who(self): ⏎ ⇥ ⇥ return 'c' + super().who() ⏎ print(C().who())  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('ca')", "print('c')", "print('ac')"],
    targetCode:"print('ca')",
    check:(out,v)=> _pqN(out)==="ca",
    scene:"island",
    hints:["super() у C — это B, а метод найдётся в A.", "Запиши значения переменных после каждого шага.", "Ответ: print('ca')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Без super",
    story:"Атрибут родителя не появился. Сломанный код: class P: ⏎ ⇥ def __init__(self): ⏎ ⇥ ⇥ self.x = 1 ⏎ class C(P): ⏎ ⇥ def __init__(self): ⏎ ⇥ ⇥ self.y = 2 ⏎ c = C() ⏎ print(c.x)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 1",
    blocks:["class P:", "print(c.x)", "self.x = 1", "super().__init__()", "self.y = 2", "def __init__(self):", "class C(P):", "c = C()"],
    targetCode:"class P:\n    def __init__(self):\n        self.x = 1\nclass C(P):\n    def __init__(self):\n        super().__init__()\n        self.y = 2\nc = C()\nprint(c.x)",
    check:(out,v)=> _pqN(out)==="1",
    scene:"island",
    hints:["Вызови конструктор родителя.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nclass P:\n    def __init__(self):\n        self.x = 1\nclass C(P):\n    def __init__(self):\n        super().__init__()\n        self.y = 2\nc = C()\nprint(c.x)"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Фигуры",
    story:"Проект: площади фигур.",
    objective:"Shape.area() → 0; Square переопределяет. Вывод: 0 | 16",
    blocks:["def area(self):", "print(Square(4).area())", "print(Shape().area())", "self.a = a", "def __init__(self, a):", "class Square(Shape):", "return self.a * self.a", "return 0", "class Shape:"],
    targetCode:"class Shape:\n    def area(self):\n        return 0\nclass Square(Shape):\n    def __init__(self, a):\n        self.a = a\n    def area(self):\n        return self.a * self.a\nprint(Shape().area())\nprint(Square(4).area())",
    check:(out,v)=> _pqN(out)==="0\n16",
    scene:"island",
    hints:["Переопредели area.", "Блок за блоком: class Shape: → def area(self): → return 0 …", "Готовый код:\nclass Shape:\n    def area(self):\n        return 0\nclass Square(Shape):\n    def __init__(self, a):\n        self.a = a\n    def area(self):\n        return self.a * self.a\nprint(Shape().area())\nprint(Square(4).area())"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Список разных объектов",
    story:"Собери площади в цикле.",
    objective:"Суммируй площади разных фигур. Вывод: 10",
    blocks:["return self.a * self.b", "for s in [Sq(2), Rect(2, 3)]:", "class Sq:", "total += s.area()", "class Rect(Sq):", "print(total)", "def __init__(self, a, b):", "total = 0", "self.b = b", "def area(self):", "self.a = a", "return self.a * self.a", "def __init__(self, a):"],
    targetCode:"class Sq:\n    def __init__(self, a):\n        self.a = a\n    def area(self):\n        return self.a * self.a\nclass Rect(Sq):\n    def __init__(self, a, b):\n        self.a = a\n        self.b = b\n    def area(self):\n        return self.a * self.b\ntotal = 0\nfor s in [Sq(2), Rect(2, 3)]:\n    total += s.area()\nprint(total)",
    check:(out,v)=> _pqN(out)==="10",
    scene:"island",
    hints:["Одинаковый интерфейс area().", "Блок за блоком: class Sq: → def __init__(self, a): → self.a = a …", "Готовый код:\nclass Sq:\n    def __init__(self, a):\n        self.a = a\n    def area(self):\n        return self.a * self.a\nclass Rect(Sq):\n    def __init__(self, a, b):\n        self.a = a\n        self.b = b\n    def area(self):\n        return self.a * self.b\ntotal = 0\nfor s in [Sq(2), Rect(2, 3)]:\n    total += s.area()\nprint(total)"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: __str__ у детей",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Каждый печатается по-своему.",
    objective:"Наследуй __str__ и переопредели. Вывод: A | B",
    blocks:["class B(A):", "class A:", "return 'A'", "return 'B'", "def __str__(self):", "print(B())", "print(A())"],
    targetCode:"class A:\n    def __str__(self):\n        return 'A'\nclass B(A):\n    def __str__(self):\n        return 'B'\nprint(A())\nprint(B())",
    check:(out,v)=> _pqN(out)==="A\nB",
    scene:"island",
    hints:["__str__ наследуется.", "Блок за блоком: class A: → def __str__(self): → return 'A' …", "Готовый код:\nclass A:\n    def __str__(self):\n        return 'A'\nclass B(A):\n    def __str__(self):\n        return 'B'\nprint(A())\nprint(B())"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Животные и звуки",
    story:"Владыка кормит зверей.",
    objective:"Animal(name), Dog и Cat с разным sound(); для списка выведи 'name: sound'. Вывод: Rex: Woof | Tom: Meow",
    check:(out,v)=> _pqN(out)==="Rex: Woof\nTom: Meow" && _pqR(v,["\\(Animal\\)", "\\bfor\\b"]),
    scene:"island",
    hints:["Общий __init__ у родителя.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: class Animal: …"]
  },
  {
    id:17, type:"code", difficulty:"hard",
    title:"Гонки на острове",
    story:"Транспорт острова.",
    objective:"Vehicle(speed) с distance(t) = speed * t; Car(Vehicle) добавляет бонус: super().distance(t) + 10. Выведи оба результата для speed=20, t=3. Вывод: 60 | 70",
    check:(out,v)=> _pqN(out)==="60\n70" && _pqR(v,["\\(Vehicle\\)", "super\\(\\)"]),
    scene:"island",
    hints:["super().distance(t) + 10.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: class Vehicle: …"]
  },
  {
    id:18, type:"debug", difficulty:"hard",
    title:"Переопределение испортило",
    story:"Ребёнок потерял имя. Сломанный код: class P: ⏎ ⇥ def __init__(self, name): ⏎ ⇥ ⇥ self.name = name ⏎ class C(P): ⏎ ⇥ def __init__(self, name, age): ⏎ ⇥ ⇥ self.age = age ⏎ c = C('Ali', 13) ⏎ print(c.name, c.age)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: Ali 13",
    check:(out,v)=> _pqN(out)==="Ali 13" && _pqR(v,["super\\(\\)"]),
    scene:"island",
    hints:["Не забудь super().__init__.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: class P: …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Боевая система",
    story:"Warrior и Mage наследуют Hero.",
    objective:"Hero.attack() → 5, Warrior → 10, Mage → 8. Выведи сумму атак героя, воина и мага. Вывод: 23",
    check:(out,v)=> _pqN(out)==="23" && _pqR(v,["\\(Hero\\)", "\\bfor\\b"]),
    scene:"island",
    hints:["Разные attack.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: class Hero: …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Владыка Полиморфизм",
    story:"Владыка Полиморфизм охраняет Ключ ядра №27! Владыка проверяет иерархию! Победи — и часть цифровой карты снова заработает.",
    objective:"Character(name, hp) с hit(d) и __str__; Warrior(Character) с armor: hit уменьшает урон на armor (но минимум 0). Mage(Character) с mana. Создай Warrior('W', 100, 5) и Mage('M', 60, 20); оба получают удар 10; выведи обоих и isinstance(w, Character). Вывод: W:95 | M:50 | True",
    check:(out,v)=> _pqN(out)==="W:95\nM:50\nTrue" && _pqR(v,["class Warrior\\(Character\\)", "super\\(\\)"]),
    scene:"island-boss",
    hints:["Наследование, super(), переопределение и isinstance.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Наследование, super(), переопределение и isinstance."]
  }
];

/* ===== MODULE 28: Data Ocean — работа с данными ===== */
MISSIONS[28] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Таблица — список словарей",
    story:"Ты ныряешь в Data Ocean: океан полон таблиц и списков, а вирус Null перемешал записи. Аналитик Таблица: «Данные — это список записей.»",
    objective:"Выведи имена из списка словарей. Вывод: Ali | Vera",
    blocks:["rows = [{'name': 'Ali', 'age': 13}, {'name': 'Vera', 'age': 14}]", "for r in rows:", "print(r['name'])"],
    targetCode:"rows = [{'name': 'Ali', 'age': 13}, {'name': 'Vera', 'age': 14}]\nfor r in rows:\n    print(r['name'])",
    check:(out,v)=> _pqN(out)==="Ali\nVera",
    scene:"ocean",
    hints:["Каждая запись — словарь.", "Блок за блоком: rows = [{'name': 'Ali', 'a… → for r in rows: → print(r['name'])", "Готовый код:\nrows = [{'name': 'Ali', 'age': 13}, {'name': 'Vera', 'age': 14}]\nfor r in rows:\n    print(r['name'])"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Сумма колонки",
    story:"Сложи возраст.",
    objective:"Найди сумму возрастов. Вывод: 42",
    blocks:["for r in rows:", "print(total)", "rows = [{'age': 13}, {'age': 14}, {'age': 15}]", "total = 0", "total += r['age']"],
    targetCode:"rows = [{'age': 13}, {'age': 14}, {'age': 15}]\ntotal = 0\nfor r in rows:\n    total += r['age']\nprint(total)",
    check:(out,v)=> _pqN(out)==="42",
    scene:"ocean",
    hints:["Накопитель.", "Блок за блоком: rows = [{'age': 13}, {'age… → total = 0 → for r in rows: …", "Готовый код:\nrows = [{'age': 13}, {'age': 14}, {'age': 15}]\ntotal = 0\nfor r in rows:\n    total += r['age']\nprint(total)"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Фильтр",
    story:"Оставь взрослых.",
    objective:"Выведи записи, где age >= 14. Вывод: B | C",
    blocks:["for r in rows:", "rows = [{'n': 'A', 'age': 13}, {'n': 'B', 'age': 14}, {'n': 'C', 'age': 15}]", "print(r['n'])", "if r['age'] >= 14:"],
    targetCode:"rows = [{'n': 'A', 'age': 13}, {'n': 'B', 'age': 14}, {'n': 'C', 'age': 15}]\nfor r in rows:\n    if r['age'] >= 14:\n        print(r['n'])",
    check:(out,v)=> _pqN(out)==="B\nC",
    scene:"ocean",
    hints:["if внутри цикла.", "Блок за блоком: rows = [{'n': 'A', 'age': … → for r in rows: → if r['age'] >= 14: …", "Готовый код:\nrows = [{'n': 'A', 'age': 13}, {'n': 'B', 'age': 14}, {'n': 'C', 'age': 15}]\nfor r in rows:\n    if r['age'] >= 14:\n        print(r['n'])"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Что в сумме",
    story:"Что выведет? Код: a = [{'v': 2}, {'v': 5}, {'v': 3}] ⏎ print(sum([r['v'] for r in a]))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(3)", "print(7)", "print(10)"],
    targetCode:"print(10)",
    check:(out,v)=> _pqN(out)==="10",
    scene:"ocean",
    hints:["Списковое включение собирает значения.", "Запиши значения переменных после каждого шага.", "Ответ: print(10)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Списковое включение",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Короткая запись цикла.",
    objective:"Квадраты чисел 1..5 в одну строку. Вывод: [1, 4, 9, 16, 25]",
    blocks:["print([i * i for i in range(1, 6)])"],
    targetCode:"print([i * i for i in range(1, 6)])",
    check:(out,v)=> _pqN(out)==="[1, 4, 9, 16, 25]",
    scene:"ocean",
    hints:["[выражение for x in ...]", "Блок за блоком: print([i * i for i in rang…", "Готовый код:\nprint([i * i for i in range(1, 6)])"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Включение с условием",
    story:"Фильтр в одну строку.",
    objective:"Чётные числа из списка. Вывод: [2, 4, 6]",
    blocks:["a = [1, 2, 3, 4, 5, 6]", "print([x for x in a if x % 2 == 0])"],
    targetCode:"a = [1, 2, 3, 4, 5, 6]\nprint([x for x in a if x % 2 == 0])",
    check:(out,v)=> _pqN(out)==="[2, 4, 6]",
    scene:"ocean",
    hints:["if в конце включения.", "Блок за блоком: a = [1, 2, 3, 4, 5, 6] → print([x for x in a if x %…", "Готовый код:\na = [1, 2, 3, 4, 5, 6]\nprint([x for x in a if x % 2 == 0])"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Группировка",
    story:"Подсчёт по категориям.",
    objective:"Посчитай, сколько раз встречается каждый цвет. Вывод: {'red': 3, 'blue': 1}",
    blocks:["counts[c] = counts.get(c, 0) + 1", "for c in colors:", "colors = ['red', 'blue', 'red', 'red']", "counts = {}", "print(counts)"],
    targetCode:"colors = ['red', 'blue', 'red', 'red']\ncounts = {}\nfor c in colors:\n    counts[c] = counts.get(c, 0) + 1\nprint(counts)",
    check:(out,v)=> _pqN(out)==="{'red': 3, 'blue': 1}",
    scene:"ocean",
    hints:["Словарь частот.", "Блок за блоком: colors = ['red', 'blue', '… → counts = {} → for c in colors: …", "Готовый код:\ncolors = ['red', 'blue', 'red', 'red']\ncounts = {}\nfor c in colors:\n    counts[c] = counts.get(c, 0) + 1\nprint(counts)"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Не тот ключ",
    story:"Колонка называется иначе. Сломанный код: rows = [{'name': 'Ali', 'age': 13}] ⏎ print(rows[0]['Age'])  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 13",
    blocks:["print(rows[0]['Age'])", "rows = [{'name': 'Ali', 'age': 13}]", "print(rows[0]['age'])"],
    targetCode:"rows = [{'name': 'Ali', 'age': 13}]\nprint(rows[0]['age'])",
    check:(out,v)=> _pqN(out)==="13",
    scene:"ocean",
    hints:["Регистр ключей важен.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nrows = [{'name': 'Ali', 'age': 13}]\nprint(rows[0]['age'])"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Кальмар Фильтр",
    story:"Разбор строки CSV.",
    objective:"Раздели строку 'Ali,13,IT' и выведи возраст числом + 1. Вывод: 14",
    blocks:["line = 'Ali,13,IT'", "print(int(parts[1]) + 1)", "parts = line.split(',')"],
    targetCode:"line = 'Ali,13,IT'\nparts = line.split(',')\nprint(int(parts[1]) + 1)",
    check:(out,v)=> _pqN(out)==="14",
    scene:"ocean",
    hints:["split(',').", "Блок за блоком: line = 'Ali,13,IT' → parts = line.split(',') → print(int(parts[1]) + 1)", "Готовый код:\nline = 'Ali,13,IT'\nparts = line.split(',')\nprint(int(parts[1]) + 1)"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Список из CSV",
    story:"Кальмар Фильтр преграждает путь! Несколько строк.",
    objective:"Преврати строки в список словарей. Вывод: [{'name': 'Ali', 'age': 13}, {'name': 'Vera', 'age': 14}]",
    blocks:["name, age = line.split(',')", "lines = ['Ali,13', 'Vera,14']", "for line in lines:", "print(rows)", "rows = []", "rows.append({'name': name, 'age': int(age)})"],
    targetCode:"lines = ['Ali,13', 'Vera,14']\nrows = []\nfor line in lines:\n    name, age = line.split(',')\n    rows.append({'name': name, 'age': int(age)})\nprint(rows)",
    check:(out,v)=> _pqN(out)==="[{'name': 'Ali', 'age': 13}, {'name': 'Vera', 'age': 14}]",
    scene:"ocean-miniboss",
    hints:["Распаковка после split.", "Блок за блоком: lines = ['Ali,13', 'Vera,1… → rows = [] → for line in lines: …", "Готовый код:\nlines = ['Ali,13', 'Vera,14']\nrows = []\nfor line in lines:\n    name, age = line.split(',')\n    rows.append({'name': name, 'age': int(age)})\nprint(rows)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Средний балл",
    story:"Что выведет? Код: a = [80, 90, 100] ⏎ print(sum(a) / len(a))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('3.0')", "print(270)", "print('90.0')"],
    targetCode:"print('90.0')",
    check:(out,v)=> _pqN(out)==="90.0",
    scene:"ocean",
    hints:["Среднее = сумма / количество.", "Запиши значения переменных после каждого шага.", "Ответ: print('90.0')"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Строка вместо числа",
    story:"Сумма получилась склейкой. Сломанный код: a = ['1', '2', '3'] ⏎ total = 0 ⏎ for x in a: ⏎ ⇥ total += x ⏎ print(total)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 6",
    blocks:["for x in a:", "total = 0", "total += int(x)", "print(total)", "total += x", "a = ['1', '2', '3']"],
    targetCode:"a = ['1', '2', '3']\ntotal = 0\nfor x in a:\n    total += int(x)\nprint(total)",
    check:(out,v)=> _pqN(out)==="6",
    scene:"ocean",
    hints:["Преобразуй в число.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\na = ['1', '2', '3']\ntotal = 0\nfor x in a:\n    total += int(x)\nprint(total)"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Сортировка данных",
    story:"Проект: топ по баллам.",
    objective:"Отсортируй записи по score по убыванию и выведи имена. Вывод: B | C | A",
    blocks:["print(r['n'])", "rows.sort(key=lambda r: r['score'], reverse=True)", "for r in rows:", "rows = [{'n': 'A', 'score': 70}, {'n': 'B', 'score': 95}, {'n': 'C', 'score': 82}]"],
    targetCode:"rows = [{'n': 'A', 'score': 70}, {'n': 'B', 'score': 95}, {'n': 'C', 'score': 82}]\nrows.sort(key=lambda r: r['score'], reverse=True)\nfor r in rows:\n    print(r['n'])",
    check:(out,v)=> _pqN(out)==="B\nC\nA",
    scene:"ocean",
    hints:["key=lambda.", "Блок за блоком: rows = [{'n': 'A', 'score'… → rows.sort(key=lambda r: r[… → for r in rows: …", "Готовый код:\nrows = [{'n': 'A', 'score': 70}, {'n': 'B', 'score': 95}, {'n': 'C', 'score': 82}]\nrows.sort(key=lambda r: r['score'], reverse=True)\nfor r in rows:\n    print(r['n'])"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"min и max по ключу",
    story:"Лучший и худший.",
    objective:"Найди лучшего по score с max(key=…). Вывод: B",
    blocks:["best = max(rows, key=lambda r: r['score'])", "print(best['n'])", "rows = [{'n': 'A', 'score': 70}, {'n': 'B', 'score': 95}]"],
    targetCode:"rows = [{'n': 'A', 'score': 70}, {'n': 'B', 'score': 95}]\nbest = max(rows, key=lambda r: r['score'])\nprint(best['n'])",
    check:(out,v)=> _pqN(out)==="B",
    scene:"ocean",
    hints:["max(список, key=lambda ...)", "Блок за блоком: rows = [{'n': 'A', 'score'… → best = max(rows, key=lambd… → print(best['n'])", "Готовый код:\nrows = [{'n': 'A', 'score': 70}, {'n': 'B', 'score': 95}]\nbest = max(rows, key=lambda r: r['score'])\nprint(best['n'])"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Данные из файла",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Записи в файле.",
    objective:"Запиши CSV-строки в файл, прочитай и посчитай сумму второй колонки. Вывод: 12",
    blocks:["for line in f:", "with open('d.csv') as f:", "total += int(line.strip().split(',')[1])", "total = 0", "with open('d.csv', 'w') as f:", "f.write('a,5\\nb,7\\n')", "print(total)"],
    targetCode:"with open('d.csv', 'w') as f:\n    f.write('a,5\\nb,7\\n')\ntotal = 0\nwith open('d.csv') as f:\n    for line in f:\n        total += int(line.strip().split(',')[1])\nprint(total)",
    check:(out,v)=> _pqN(out)==="12",
    scene:"ocean",
    hints:["Файл + split.", "Блок за блоком: with open('d.csv', 'w') as… → f.write('a,5\\nb,7\\n') → total = 0 …", "Готовый код:\nwith open('d.csv', 'w') as f:\n    f.write('a,5\\nb,7\\n')\ntotal = 0\nwith open('d.csv') as f:\n    for line in f:\n        total += int(line.strip().split(',')[1])\nprint(total)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Гистограмма",
    story:"Нарисуй график из звёзд.",
    objective:"Для {'a': 3, 'b': 1, 'c': 2} выведи 'ключ: ***' (звёзд по значению). Вывод: a: *** | b: * | c: **",
    check:(out,v)=> _pqN(out)==="a: ***\nb: *\nc: **" && _pqR(v,["\\bfor\\b"]),
    scene:"ocean",
    hints:["Строку можно умножать.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: d = {'a': 3, 'b': 1, 'c': 2} …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Потерянные записи",
    story:"Нужно отфильтровать возраст ≥ 14, но остались все. Сломанный код: rows = [{'a': 13}, {'a': 14}, {'a': 15}] ⏎ res = [] ⏎ for r in rows: ⏎ ⇥ res.append(r) ⏎ print(len(res))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 2",
    check:(out,v)=> _pqN(out)==="2" && _pqR(v,["\\bfor\\b"]),
    scene:"ocean",
    hints:["Добавь if.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: rows = [{'a': 13}, {'a': 14}, {'a': 15}] …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Группировка по классам",
    story:"Кальмар делит учеников.",
    objective:"Для [('A', 5), ('B', 7), ('A', 3), ('B', 1)] найди сумму по каждой букве (словарь). Вывод: {'A': 8, 'B': 8}",
    check:(out,v)=> _pqN(out)==="{'A': 8, 'B': 8}" && _pqR(v,["\\bfor\\b"]),
    scene:"ocean",
    hints:["Распаковка кортежа в цикле.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: pairs = [('A', 5), ('B', 7), ('A', 3), ('B', 1)] …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Отчёт",
    story:"Функция строит отчёт.",
    objective:"report(rows) возвращает (среднее, максимум) по 'score'. Выведи report для [{'score':70},{'score':90},{'score':80}]. Вывод: (80.0, 90)",
    check:(out,v)=> _pqN(out)==="(80.0, 90)" && _pqR(v,["def report"]),
    scene:"ocean",
    hints:["Списковое включение и кортеж.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def report(rows): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Левиафан Big Data",
    story:"Левиафан Big Data охраняет Ключ ядра №28! Левиафан вызывает на анализ! Победи — и часть цифровой карты снова заработает.",
    objective:"Из lines=['Ali,13,80','Vera,14,95','Omar,13,70','Zed,15,90'] собери список словарей (name, age, score). Выведи: средний балл (Avg), имя лучшего (Best), число учеников старше 13 (Older), словарь {age: количество} (Ages). Вывод: Avg: 83.75 | Best: Vera | Older: 2 | Ages: {13: 2, 14: 1, 15: 1}",
    check:(out,v)=> _pqN(out)==="Avg: 83.75\nBest: Vera\nOlder: 2\nAges: {13: 2, 14: 1, 15: 1}" && _pqR(v,["\\bfor\\b", "split"]),
    scene:"ocean-boss",
    hints:["split, словари, цикл, накопители, группировка.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: split, словари, цикл, накопители, группировка."]
  }
];

/* ===== MODULE 29: Project Peak — большой проект ===== */
MISSIONS[29] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Проект 1: приветствие",
    story:"Ты достигаешь Project Peak: здесь строят большие программы из всех частей Python, а вирус Null ломает целые системы. Прораб Проект: «Большой проект — это много маленьких частей.»",
    objective:"Считай имя и выведи приветствие в функции. Вывод: Hello, Ali!",
    blocks:["print(greet(input()))", "def greet(name):", "return 'Hello, ' + name + '!'"],
    targetCode:"def greet(name):\n    return 'Hello, ' + name + '!'\nprint(greet(input()))",
    check:(out,v)=> _pqN(out)==="Hello, Ali!",
    scene:"peak",
    simInput:["Ali"],
    hints:["Функция + input.", "Блок за блоком: def greet(name): → return 'Hello, ' + name + … → print(greet(input()))", "Готовый код:\ndef greet(name):\n    return 'Hello, ' + name + '!'\nprint(greet(input()))"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Проект 2: калькулятор",
    story:"Функции для арифметики.",
    objective:"add и mul; выведи add(2, 3) и mul(4, 5). Вывод: 5 | 20",
    blocks:["return a + b", "print(mul(4, 5))", "def add(a, b):", "print(add(2, 3))", "return a * b", "def mul(a, b):"],
    targetCode:"def add(a, b):\n    return a + b\ndef mul(a, b):\n    return a * b\nprint(add(2, 3))\nprint(mul(4, 5))",
    check:(out,v)=> _pqN(out)==="5\n20",
    scene:"peak",
    hints:["Две функции.", "Блок за блоком: def add(a, b): → return a + b → def mul(a, b): …", "Готовый код:\ndef add(a, b):\n    return a + b\ndef mul(a, b):\n    return a * b\nprint(add(2, 3))\nprint(mul(4, 5))"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Проект 3: список дел",
    story:"Список задач.",
    objective:"Добавь 3 задачи и выведи с номерами. Вывод: 1 read | 2 code | 3 sleep",
    blocks:["todo.append(t)", "for i in range(len(todo)):", "for t in ['read', 'code', 'sleep']:", "todo = []", "print(i + 1, todo[i])"],
    targetCode:"todo = []\nfor t in ['read', 'code', 'sleep']:\n    todo.append(t)\nfor i in range(len(todo)):\n    print(i + 1, todo[i])",
    check:(out,v)=> _pqN(out)==="1 read\n2 code\n3 sleep",
    scene:"peak",
    hints:["Список + цикл.", "Блок за блоком: todo = [] → for t in ['read', 'code', … → todo.append(t) …", "Готовый код:\ntodo = []\nfor t in ['read', 'code', 'sleep']:\n    todo.append(t)\nfor i in range(len(todo)):\n    print(i + 1, todo[i])"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Мини-программа",
    story:"Что выведет? Код: def f(a): ⏎ ⇥ return [x * 2 for x in a if x > 1] ⏎ print(f([1, 2, 3]))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print('[2, 4, 6]')", "print('[2, 3]')", "print('[4, 6]')"],
    targetCode:"print('[4, 6]')",
    check:(out,v)=> _pqN(out)==="[4, 6]",
    scene:"peak",
    hints:["Сначала фильтр x > 1, потом *2.", "Запиши значения переменных после каждого шага.", "Ответ: print('[4, 6]')"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Проект 4: инвентарь",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Класс Inventory.",
    objective:"add(name, n) и count(name). Вывод: 8 | 0",
    blocks:["inv = Inventory()", "def count(self, name):", "def add(self, name, n):", "def __init__(self):", "self.d[name] = self.d.get(name, 0) + n", "self.d = {}", "return self.d.get(name, 0)", "inv.add('gold', 3)", "print(inv.count('gem'))", "class Inventory:", "print(inv.count('gold'))", "inv.add('gold', 5)"],
    targetCode:"class Inventory:\n    def __init__(self):\n        self.d = {}\n    def add(self, name, n):\n        self.d[name] = self.d.get(name, 0) + n\n    def count(self, name):\n        return self.d.get(name, 0)\ninv = Inventory()\ninv.add('gold', 5)\ninv.add('gold', 3)\nprint(inv.count('gold'))\nprint(inv.count('gem'))",
    check:(out,v)=> _pqN(out)==="8\n0",
    scene:"peak",
    hints:["Словарь в классе.", "Блок за блоком: class Inventory: → def __init__(self): → self.d = {} …", "Готовый код:\nclass Inventory:\n    def __init__(self):\n        self.d = {}\n    def add(self, name, n):\n        self.d[name] = self.d.get(name, 0) + n\n    def count(self, name):\n        return self.d.get(name, 0)\ninv = Inventory()\ninv.add('gold', 5)\ninv.add('gold', 3)\nprint(inv.count('gold'))\nprint(inv.count('gem'))"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Проект 5: угадай число",
    story:"Игра с подсказками.",
    objective:"Проверь догадки 3, 8, 5 для числа 5: Low, High или Win. Вывод: Low | High | Win",
    blocks:["else:", "if g < secret:", "print('Win')", "print('High')", "secret = 5", "for g in [3, 8, 5]:", "print('Low')", "elif g > secret:"],
    targetCode:"secret = 5\nfor g in [3, 8, 5]:\n    if g < secret:\n        print('Low')\n    elif g > secret:\n        print('High')\n    else:\n        print('Win')",
    check:(out,v)=> _pqN(out)==="Low\nHigh\nWin",
    scene:"peak",
    hints:["if / elif / else.", "Блок за блоком: secret = 5 → for g in [3, 8, 5]: → if g < secret: …", "Готовый код:\nsecret = 5\nfor g in [3, 8, 5]:\n    if g < secret:\n        print('Low')\n    elif g > secret:\n        print('High')\n    else:\n        print('Win')"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Проект 6: оценки",
    story:"Классификатор оценок.",
    objective:"grade(score): 90+ → A, 70+ → B, иначе C. Вывод: A | B | C",
    blocks:["print(grade(s))", "if score >= 70:", "return 'C'", "for s in [95, 75, 40]:", "def grade(score):", "return 'B'", "return 'A'", "if score >= 90:"],
    targetCode:"def grade(score):\n    if score >= 90:\n        return 'A'\n    if score >= 70:\n        return 'B'\n    return 'C'\nfor s in [95, 75, 40]:\n    print(grade(s))",
    check:(out,v)=> _pqN(out)==="A\nB\nC",
    scene:"peak",
    hints:["Ранние return.", "Блок за блоком: def grade(score): → if score >= 90: → return 'A' …", "Готовый код:\ndef grade(score):\n    if score >= 90:\n        return 'A'\n    if score >= 70:\n        return 'B'\n    return 'C'\nfor s in [95, 75, 40]:\n    print(grade(s))"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Ошибка в проекте",
    story:"Функция считает не то. Сломанный код: def avg(a): ⏎ ⇥ return sum(a) / len(a) + 1 ⏎ print(avg([2, 4]))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 3.0",
    blocks:["return sum(a) / len(a) + 1", "def avg(a):", "return sum(a) / len(a)", "print(avg([2, 4]))"],
    targetCode:"def avg(a):\n    return sum(a) / len(a)\nprint(avg([2, 4]))",
    check:(out,v)=> _pqN(out)==="3.0",
    scene:"peak",
    hints:["Найди лишнее в формуле.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ndef avg(a):\n    return sum(a) / len(a)\nprint(avg([2, 4]))"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Проект 7: подсчёт слов",
    story:"Частоты слов.",
    objective:"Посчитай слова и выведи самое частое. Вывод: a 3",
    blocks:["for w in text.split():", "best = w", "for w in counts:", "print(best, counts[best])", "counts[w] = counts.get(w, 0) + 1", "if counts[w] > counts[best]:", "counts = {}", "best = 'a'", "text = 'a b a c a b'"],
    targetCode:"text = 'a b a c a b'\ncounts = {}\nfor w in text.split():\n    counts[w] = counts.get(w, 0) + 1\nbest = 'a'\nfor w in counts:\n    if counts[w] > counts[best]:\n        best = w\nprint(best, counts[best])",
    check:(out,v)=> _pqN(out)==="a 3",
    scene:"peak",
    hints:["Словарь + поиск максимума.", "Блок за блоком: text = 'a b a c a b' → counts = {} → for w in text.split(): …", "Готовый код:\ntext = 'a b a c a b'\ncounts = {}\nfor w in text.split():\n    counts[w] = counts.get(w, 0) + 1\nbest = 'a'\nfor w in counts:\n    if counts[w] > counts[best]:\n        best = w\nprint(best, counts[best])"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Баг-Мамонт",
    story:"Баг-Мамонт преграждает путь! Безопасный ввод числа.",
    objective:"Считай два значения и выведи только корректные числа. Вывод: skip x | 12",
    blocks:["print(total)", "try:", "total += int(s)", "except ValueError:", "total = 0", "print('skip', s)", "for s in ['5', 'x', '7']:"],
    targetCode:"total = 0\nfor s in ['5', 'x', '7']:\n    try:\n        total += int(s)\n    except ValueError:\n        print('skip', s)\nprint(total)",
    check:(out,v)=> _pqN(out)==="skip x\n12",
    scene:"peak-miniboss",
    hints:["try/except в цикле.", "Блок за блоком: total = 0 → for s in ['5', 'x', '7']: → try: …", "Готовый код:\ntotal = 0\nfor s in ['5', 'x', '7']:\n    try:\n        total += int(s)\n    except ValueError:\n        print('skip', s)\nprint(total)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Файл и данные",
    story:"Что выведет? Код: with open('t.txt', 'w') as f: ⏎ ⇥ f.write('3\\n4\\n') ⏎ total = 0 ⏎ for line in open('t.txt'): ⏎ ⇥ total += int(line) ⏎ print(total)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(7)", "print(34)", "print(3)"],
    targetCode:"print(7)",
    check:(out,v)=> _pqN(out)==="7",
    scene:"peak",
    hints:["Числа читаются как строки, потом int.", "Запиши значения переменных после каждого шага.", "Ответ: print(7)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Тип не совпал",
    story:"Склеить число и строку нельзя. Сломанный код: score = 90 ⏎ print('Score: ' + score)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: Score: 90",
    blocks:["score = 90", "print('Score: ' + str(score))", "print('Score: ' + score)"],
    targetCode:"score = 90\nprint('Score: ' + str(score))",
    check:(out,v)=> _pqN(out)==="Score: 90",
    scene:"peak",
    hints:["str() для числа.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nscore = 90\nprint('Score: ' + str(score))"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Проект 8: банк",
    story:"Класс с ошибкой.",
    objective:"withdraw выбрасывает ValueError при нехватке; поймай. Вывод: no money | 50",
    blocks:["self.b = b", "try:", "self.b -= n", "print(e)", "bank.withdraw(80)", "print(bank.b)", "raise ValueError('no money')", "def __init__(self, b):", "def withdraw(self, n):", "bank = Bank(50)", "except ValueError as e:", "if n > self.b:", "class Bank:"],
    targetCode:"class Bank:\n    def __init__(self, b):\n        self.b = b\n    def withdraw(self, n):\n        if n > self.b:\n            raise ValueError('no money')\n        self.b -= n\nbank = Bank(50)\ntry:\n    bank.withdraw(80)\nexcept ValueError as e:\n    print(e)\nprint(bank.b)",
    check:(out,v)=> _pqN(out)==="no money\n50",
    scene:"peak",
    hints:["raise + except.", "Блок за блоком: class Bank: → def __init__(self, b): → self.b = b …", "Готовый код:\nclass Bank:\n    def __init__(self, b):\n        self.b = b\n    def withdraw(self, n):\n        if n > self.b:\n            raise ValueError('no money')\n        self.b -= n\nbank = Bank(50)\ntry:\n    bank.withdraw(80)\nexcept ValueError as e:\n    print(e)\nprint(bank.b)"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Проект 9: поиск в базе",
    story:"Поиск по списку записей.",
    objective:"Найди ученика по имени и выведи балл. Вывод: 95 | -1",
    blocks:["for r in db:", "if r['n'] == name:", "def find(name):", "print(find('B'))", "db = [{'n': 'A', 's': 70}, {'n': 'B', 's': 95}]", "return r['s']", "print(find('Z'))", "return -1"],
    targetCode:"db = [{'n': 'A', 's': 70}, {'n': 'B', 's': 95}]\ndef find(name):\n    for r in db:\n        if r['n'] == name:\n            return r['s']\n    return -1\nprint(find('B'))\nprint(find('Z'))",
    check:(out,v)=> _pqN(out)==="95\n-1",
    scene:"peak",
    hints:["Линейный поиск.", "Блок за блоком: db = [{'n': 'A', 's': 70},… → def find(name): → for r in db: …", "Готовый код:\ndb = [{'n': 'A', 's': 70}, {'n': 'B', 's': 95}]\ndef find(name):\n    for r in db:\n        if r['n'] == name:\n            return r['s']\n    return -1\nprint(find('B'))\nprint(find('Z'))"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Проект 10: сортировка",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Топ игроков.",
    objective:"Сортировка списка кортежей по очкам. Вывод: B 50 | C 40 | A 30",
    blocks:["players = [('A', 30), ('B', 50), ('C', 40)]", "players.sort(key=lambda p: p[1], reverse=True)", "for n, s in players:", "print(n, s)"],
    targetCode:"players = [('A', 30), ('B', 50), ('C', 40)]\nplayers.sort(key=lambda p: p[1], reverse=True)\nfor n, s in players:\n    print(n, s)",
    check:(out,v)=> _pqN(out)==="B 50\nC 40\nA 30",
    scene:"peak",
    hints:["key=lambda p: p[1].", "Блок за блоком: players = [('A', 30), ('B'… → players.sort(key=lambda p:… → for n, s in players: …", "Готовый код:\nplayers = [('A', 30), ('B', 50), ('C', 40)]\nplayers.sort(key=lambda p: p[1], reverse=True)\nfor n, s in players:\n    print(n, s)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Рекурсия в проекте",
    story:"Рекурсивный подсчёт.",
    objective:"count_down(n) возвращает список n..1 рекурсивно. Выведи count_down(4). Вывод: [4, 3, 2, 1]",
    check:(out,v)=> _pqN(out)==="[4, 3, 2, 1]" && _pqR(v,["def count_down"]),
    scene:"peak",
    hints:["Список + рекурсия.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def count_down(n): …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Сломанный отчёт",
    story:"Отчёт должен показывать среднее по каждому ученику, но выводит одно число. Сломанный код: grades = {'A': [5, 4], 'B': [3, 3]} ⏎ for name in grades: ⏎ ⇥ print(name, sum(grades) / len(grades))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: A 4.5 | B 3.0",
    check:(out,v)=> _pqN(out)==="A 4.5\nB 3.0" && _pqR(v,["\\bfor\\b"]),
    scene:"peak",
    hints:["Используй grades[name].", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: grades = {'A': [5, 4], 'B': [3, 3]} …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Мини-магазин",
    story:"Собери магазин из функций.",
    objective:"prices={'a':5,'b':3}; cart=['a','b','a','c']. Функция total(cart, prices) считает сумму, пропуская неизвестные товары (KeyError). Выведи total. Вывод: 13",
    check:(out,v)=> _pqN(out)==="13" && _pqR(v,["def total", "except"]),
    scene:"peak",
    hints:["try/except внутри функции.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: prices = {'a': 5, 'b': 3} …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Игровой цикл",
    story:"Мини-игра с классом.",
    objective:"Класс Player(hp) с hit(d). Пока hp > 0 бей на 30 и печатай hp; в конце Game over. Вывод: 70 | 40 | 10 … (5 строк)",
    check:(out,v)=> _pqN(out)==="70\n40\n10\n-20\nGame over" && _pqR(v,["\\bwhile\\b", "class Player"]),
    scene:"peak",
    hints:["while с атрибутом объекта.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: class Player: …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Гигант Монолит",
    story:"Гигант Монолит охраняет Ключ ядра №29! Гигант собирает проект целиком! Победи — и часть цифровой карты снова заработает.",
    objective:"Напиши систему учеников: класс Student(name, scores); метод avg(); функция best(students) возвращает самого сильного; функция parse(line) из 'name:5,4,5' создаёт Student (int в try — плохие оценки пропускай). Для ['Ali:5,4,5','Vera:5,5,x','Omar:3,4,3'] выведи best и средние с одним знаком (round). Вывод: Vera | Ali 4.7 | Vera 5.0 | Omar 3.3",
    check:(out,v)=> _pqN(out)==="Vera\nAli 4.7\nVera 5.0\nOmar 3.3" && _pqR(v,["class Student", "def parse", "def best"]),
    scene:"peak-boss",
    hints:["Класс, функции, split, try/except, поиск лучшего, цикл.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Класс, функции, split, try/except, поиск лучшего, цикл."]
  }
];

/* ===== MODULE 30: Cyber Architect Citadel — финальная цитадель ===== */
MISSIONS[30] = [
  {
    id:1, type:"block", difficulty:"easy",
    title:"Ворота: print и переменные",
    story:"Ты стоишь у ворот Cyber Architect Citadel — последней крепости. Здесь вирус Null прячет главный ключ ядра Python Quest. Архитектор Ядра: «Проверим основы: вывод, переменные, ввод.»",
    objective:"Считай имя и выведи приветствие с длиной имени. Вывод: Hello, Cyber | 5",
    blocks:["name = input()", "print('Hello,', name)", "print(len(name))"],
    targetCode:"name = input()\nprint('Hello,', name)\nprint(len(name))",
    check:(out,v)=> _pqN(out)==="Hello, Cyber\n5",
    scene:"citadel-final",
    simInput:["Cyber"],
    hints:["input, print, len.", "Блок за блоком: name = input() → print('Hello,', name) → print(len(name))", "Готовый код:\nname = input()\nprint('Hello,', name)\nprint(len(name))"]
  },
  {
    id:2, type:"block", difficulty:"easy",
    title:"Ворота: условия",
    story:"Пропуск по возрасту.",
    objective:"Считай возраст: <13 Kid, 13–17 Teen, иначе Adult. Вывод: Teen",
    blocks:["elif age < 18:", "if age < 13:", "print('Adult')", "print('Kid')", "else:", "print('Teen')", "age = int(input())"],
    targetCode:"age = int(input())\nif age < 13:\n    print('Kid')\nelif age < 18:\n    print('Teen')\nelse:\n    print('Adult')",
    check:(out,v)=> _pqN(out)==="Teen",
    scene:"citadel-final",
    simInput:["14"],
    hints:["if / elif / else.", "Блок за блоком: age = int(input()) → if age < 13: → print('Kid') …", "Готовый код:\nage = int(input())\nif age < 13:\n    print('Kid')\nelif age < 18:\n    print('Teen')\nelse:\n    print('Adult')"]
  },
  {
    id:3, type:"block", difficulty:"easy",
    title:"Коридор циклов",
    story:"while и for вместе.",
    objective:"Отсчёт 3..1 через while, затем числа 1..3 через for. Вывод: 3 | 2 | 1 … (6 строк)",
    blocks:["n = 3", "for i in range(1, 4):", "print(n)", "n -= 1", "print(i)", "while n > 0:"],
    targetCode:"n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nfor i in range(1, 4):\n    print(i)",
    check:(out,v)=> _pqN(out)==="3\n2\n1\n1\n2\n3",
    scene:"citadel-final",
    hints:["Оба цикла.", "Блок за блоком: n = 3 → while n > 0: → print(n) …", "Готовый код:\nn = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nfor i in range(1, 4):\n    print(i)"]
  },
  {
    id:4, type:"block", difficulty:"easy",
    title:"Зал вложенных циклов",
    story:"Что выведет? Код: c = 0 ⏎ for i in range(3): ⏎ ⇥ for j in range(i): ⏎ ⇥ ⇥ c += 1 ⏎ print(c)  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(3)", "print(2)", "print(6)"],
    targetCode:"print(3)",
    check:(out,v)=> _pqN(out)==="3",
    scene:"citadel-final",
    hints:["0 + 1 + 2.", "Запиши значения переменных после каждого шага.", "Ответ: print(3)"]
  },
  {
    id:5, type:"block", difficulty:"easy",
    title:"Мини-челлендж: Библиотека строк",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Обработка строки.",
    objective:"Раздели 'sea,sky,sun', выведи число слов и заглавную первую. Вывод: 3 | SEA",
    blocks:["parts = 'sea,sky,sun'.split(',')", "print(len(parts))", "print(parts[0].upper())"],
    targetCode:"parts = 'sea,sky,sun'.split(',')\nprint(len(parts))\nprint(parts[0].upper())",
    check:(out,v)=> _pqN(out)==="3\nSEA",
    scene:"citadel-final",
    hints:["split, len, upper.", "Блок за блоком: parts = 'sea,sky,sun'.spli… → print(len(parts)) → print(parts[0].upper())", "Готовый код:\nparts = 'sea,sky,sun'.split(',')\nprint(len(parts))\nprint(parts[0].upper())"]
  },
  {
    id:6, type:"block", difficulty:"medium",
    title:"Архив данных",
    story:"Списки и словари.",
    objective:"Посчитай частоту слов. Вывод: {'a': 2, 'b': 1}",
    blocks:["d[x] = d.get(x, 0) + 1", "d = {}", "for x in w:", "w = ['a', 'b', 'a']", "print(d)"],
    targetCode:"w = ['a', 'b', 'a']\nd = {}\nfor x in w:\n    d[x] = d.get(x, 0) + 1\nprint(d)",
    check:(out,v)=> _pqN(out)==="{'a': 2, 'b': 1}",
    scene:"citadel-final",
    hints:["get с 0.", "Блок за блоком: w = ['a', 'b', 'a'] → d = {} → for x in w: …", "Готовый код:\nw = ['a', 'b', 'a']\nd = {}\nfor x in w:\n    d[x] = d.get(x, 0) + 1\nprint(d)"]
  },
  {
    id:7, type:"block", difficulty:"medium",
    title:"Функции-стражи",
    story:"Функция с return.",
    objective:"is_even и total; выведи для 4 и [1, 2, 3]. Вывод: True | 6",
    blocks:["print(total([1, 2, 3]))", "return n % 2 == 0", "s += x", "def total(a):", "s = 0", "for x in a:", "print(is_even(4))", "return s", "def is_even(n):"],
    targetCode:"def is_even(n):\n    return n % 2 == 0\ndef total(a):\n    s = 0\n    for x in a:\n        s += x\n    return s\nprint(is_even(4))\nprint(total([1, 2, 3]))",
    check:(out,v)=> _pqN(out)==="True\n6",
    scene:"citadel-final",
    hints:["Две функции.", "Блок за блоком: def is_even(n): → return n % 2 == 0 → def total(a): …", "Готовый код:\ndef is_even(n):\n    return n % 2 == 0\ndef total(a):\n    s = 0\n    for x in a:\n        s += x\n    return s\nprint(is_even(4))\nprint(total([1, 2, 3]))"]
  },
  {
    id:8, type:"block", difficulty:"medium",
    title:"Ловушка Null",
    story:"Вирус подменил условие. Сломанный код: def total(a): ⏎ ⇥ s = 0 ⏎ ⇥ for x in a: ⏎ ⇥ ⇥ s = x ⏎ ⇥ return s ⏎ print(total([1, 2, 3]))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 6",
    blocks:["s += x", "s = x", "print(total([1, 2, 3]))", "for x in a:", "s = 0", "return s", "def total(a):"],
    targetCode:"def total(a):\n    s = 0\n    for x in a:\n        s += x\n    return s\nprint(total([1, 2, 3]))",
    check:(out,v)=> _pqN(out)==="6",
    scene:"citadel-final",
    hints:["= или += ?", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\ndef total(a):\n    s = 0\n    for x in a:\n        s += x\n    return s\nprint(total([1, 2, 3]))"]
  },
  {
    id:9, type:"block", difficulty:"medium",
    title:"Зал исключений",
    story:"Безопасное число.",
    objective:"Обработай ['5', 'x'] через try/except. Вывод: 5 | bad",
    blocks:["print('bad')", "except ValueError:", "print(int(s))", "try:", "for s in ['5', 'x']:"],
    targetCode:"for s in ['5', 'x']:\n    try:\n        print(int(s))\n    except ValueError:\n        print('bad')",
    check:(out,v)=> _pqN(out)==="5\nbad",
    scene:"citadel-final",
    hints:["except ValueError.", "Блок за блоком: for s in ['5', 'x']: → try: → print(int(s)) …", "Готовый код:\nfor s in ['5', 'x']:\n    try:\n        print(int(s))\n    except ValueError:\n        print('bad')"]
  },
  {
    id:10, type:"block", difficulty:"boss",
    title:"MINI-BOSS: Страж Ядра",
    story:"Страж Ядра преграждает путь! Алгоритм: линейный поиск + сортировка.",
    objective:"Найди индекс 7 и отсортируй список. Вывод: 1 | [3, 7, 9]",
    blocks:["idx = -1", "a = [9, 7, 3]", "for i in range(len(a)):", "print(idx)", "if a[i] == 7:", "idx = i", "a.sort()", "print(a)"],
    targetCode:"a = [9, 7, 3]\nidx = -1\nfor i in range(len(a)):\n    if a[i] == 7:\n        idx = i\na.sort()\nprint(idx)\nprint(a)",
    check:(out,v)=> _pqN(out)==="1\n[3, 7, 9]",
    scene:"citadel-final-miniboss",
    hints:["Поиск и sort().", "Блок за блоком: a = [9, 7, 3] → idx = -1 → for i in range(len(a)): …", "Готовый код:\na = [9, 7, 3]\nidx = -1\nfor i in range(len(a)):\n    if a[i] == 7:\n        idx = i\na.sort()\nprint(idx)\nprint(a)"]
  },
  {
    id:11, type:"block", difficulty:"medium",
    title:"Рекурсивный страж",
    story:"Что выведет? Код: def f(n): ⏎ ⇥ if n <= 1: ⏎ ⇥ ⇥ return 1 ⏎ ⇥ return f(n - 1) + f(n - 2) ⏎ print(f(5))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Предскажи, что выведет программа, и собери print с ответом.",
    blocks:["print(8)", "print(13)", "print(5)"],
    targetCode:"print(8)",
    check:(out,v)=> _pqN(out)==="8",
    scene:"citadel-final",
    hints:["f(1)=1, f(2)=2, f(3)=3, f(4)=5.", "Запиши значения переменных после каждого шага.", "Ответ: print(8)"]
  },
  {
    id:12, type:"block", difficulty:"medium",
    title:"Забытый self",
    story:"Метод класса без self. Сломанный код: class A: ⏎ ⇥ def __init__(self, n): ⏎ ⇥ ⇥ self.n = n ⏎ ⇥ def get(): ⏎ ⇥ ⇥ return self.n ⏎ print(A(3).get())  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Исправь ошибку: собери правильную программу. Вывод: 3",
    blocks:["self.n = n", "class A:", "return self.n", "def get(self):", "print(A(3).get())", "def get():", "def __init__(self, n):"],
    targetCode:"class A:\n    def __init__(self, n):\n        self.n = n\n    def get(self):\n        return self.n\nprint(A(3).get())",
    check:(out,v)=> _pqN(out)==="3",
    scene:"citadel-final",
    hints:["Первый параметр метода — self.", "Сравни сломанный код с целью и найди строку, которая ведёт не туда.", "Готовый код:\nclass A:\n    def __init__(self, n):\n        self.n = n\n    def get(self):\n        return self.n\nprint(A(3).get())"]
  },
  {
    id:13, type:"block", difficulty:"medium",
    title:"Файл-хранилище",
    story:"Запиши и прочитай.",
    objective:"Запиши слова в файл, прочитай, выведи число строк. Вывод: 3",
    blocks:["f.write(w + '\\n')", "for w in ['a', 'b', 'c']:", "with open('k.txt', 'w') as f:", "with open('k.txt') as f:", "print(len(f.readlines()))"],
    targetCode:"with open('k.txt', 'w') as f:\n    for w in ['a', 'b', 'c']:\n        f.write(w + '\\n')\nwith open('k.txt') as f:\n    print(len(f.readlines()))",
    check:(out,v)=> _pqN(out)==="3",
    scene:"citadel-final",
    hints:["readlines.", "Блок за блоком: with open('k.txt', 'w') as… → for w in ['a', 'b', 'c']: → f.write(w + '\\n') …", "Готовый код:\nwith open('k.txt', 'w') as f:\n    for w in ['a', 'b', 'c']:\n        f.write(w + '\\n')\nwith open('k.txt') as f:\n    print(len(f.readlines()))"]
  },
  {
    id:14, type:"block", difficulty:"medium",
    title:"Наследники",
    story:"Наследование в действии.",
    objective:"Warrior наследует Hero и усиливает attack. Вывод: 10",
    blocks:["return super().attack() * 2", "class Hero:", "def attack(self):", "return 5", "print(Warrior().attack())", "class Warrior(Hero):"],
    targetCode:"class Hero:\n    def attack(self):\n        return 5\nclass Warrior(Hero):\n    def attack(self):\n        return super().attack() * 2\nprint(Warrior().attack())",
    check:(out,v)=> _pqN(out)==="10",
    scene:"citadel-final",
    hints:["super().attack().", "Блок за блоком: class Hero: → def attack(self): → return 5 …", "Готовый код:\nclass Hero:\n    def attack(self):\n        return 5\nclass Warrior(Hero):\n    def attack(self):\n        return super().attack() * 2\nprint(Warrior().attack())"]
  },
  {
    id:15, type:"block", difficulty:"medium",
    title:"Мини-челлендж: Данные героев",
    story:"МИНИ-ЧЕЛЛЕНДЖ. Работа с данными.",
    objective:"Из записей 'A:5', 'B:9' найди максимум по числам. Вывод: 9",
    blocks:["if n > best:", "print(best)", "best = 0", "best = n", "for line in ['A:5', 'B:9']:", "n = int(line.split(':')[1])"],
    targetCode:"best = 0\nfor line in ['A:5', 'B:9']:\n    n = int(line.split(':')[1])\n    if n > best:\n        best = n\nprint(best)",
    check:(out,v)=> _pqN(out)==="9",
    scene:"citadel-final",
    hints:["split и int.", "Блок за блоком: best = 0 → for line in ['A:5', 'B:9']: → n = int(line.split(':')[1]) …", "Готовый код:\nbest = 0\nfor line in ['A:5', 'B:9']:\n    n = int(line.split(':')[1])\n    if n > best:\n        best = n\nprint(best)"]
  },
  {
    id:16, type:"code", difficulty:"hard",
    title:"Проверка: все темы",
    story:"Финальная разминка.",
    objective:"Напиши функцию stats(words): возвращает (количество, самое длинное, словарь длин). Выведи stats(['sea','ocean','sky']). Вывод: (3, 'ocean', {'sea': 3, 'ocean': 5, 'sky': 3})",
    check:(out,v)=> _pqN(out)==="(3, 'ocean', {'sea': 3, 'ocean': 5, 'sky': 3})" && _pqR(v,["def stats", "\\bfor\\b"]),
    scene:"citadel-final",
    hints:["Функция возвращает кортеж.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def stats(words): …"]
  },
  {
    id:17, type:"debug", difficulty:"hard",
    title:"Сломанное ядро",
    story:"Ядро должно считать чётные, но считает все. Сломанный код: def count_even(a): ⏎ ⇥ c = 0 ⏎ ⇥ for x in a: ⏎ ⇥ ⇥ c += 1 ⏎ ⇥ return c ⏎ print(count_even([1, 2, 3, 4]))  (⏎ — новая строка, ⇥ — отступ)",
    objective:"Перепиши программу без ошибки. Вывод: 2",
    check:(out,v)=> _pqN(out)==="2" && _pqR(v,["def count_even"]),
    scene:"citadel-final",
    hints:["Добавь проверку чётности.", "Запусти сломанный код мысленно: где значение идёт не туда?", "Начало решения: def count_even(a): …"]
  },
  {
    id:18, type:"code", difficulty:"hard",
    title:"Мини-игра Ядро",
    story:"Битва с ядром.",
    objective:"Класс Core(hp) с hit(d), is_dead(). Бей ядро на 25 в цикле while, печатай hp, в конце выведи Core down. Вывод: 55 | 30 | 5 … (5 строк)",
    check:(out,v)=> _pqN(out)==="55\n30\n5\n-20\nCore down" && _pqR(v,["\\bwhile\\b", "class Core"]),
    scene:"citadel-final",
    hints:["while not is_dead().", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: class Core: …"]
  },
  {
    id:19, type:"code", difficulty:"hard",
    title:"Архив Цитадели",
    story:"Собери отчёт по данным.",
    objective:"Функция parse_line('name:score') → (name, int(score)) или None при ошибке. Для ['A:5','B:x','C:9'] выведи корректные пары и лучшую. Вывод: ('A', 5) | ('C', 9) | ('C', 9)",
    check:(out,v)=> _pqN(out)==="('A', 5)\n('C', 9)\n('C', 9)" && _pqR(v,["def parse_line", "\\bfor\\b"]),
    scene:"citadel-final",
    hints:["try, is not None, кортежи.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Начало решения: def parse_line(line): …"]
  },
  {
    id:20, type:"boss", difficulty:"boss",
    title:"BOSS CODE: Вирус Null",
    story:"Вирус Null охраняет Ключ ядра №30! ФИНАЛ! Вирус Null сдаётся только перед полным решением! Победи — и часть цифровой карты снова заработает.",
    objective:"Напиши класс Virus(hp) с hit(d) и is_alive(); наследник Boss(Virus) с shield: hit уменьшает урон на shield (минимум 0). Функция fight(v, hits) бьёт по очереди из списка, печатает hp после каждого удара и возвращает число ударов, пока вирус жив; при hp <= 0 — прекращает. Для Boss(60, 5) и ударов [20, 25, 30, 40] выведи hp после каждого и итоговое число ударов (Hits: N). Затем рекурсивно посчитай сумму [1,2,3,4] и выведи Sum: 10, а в конце Citadel restored. Вывод: 45 | 25 | 0 … (6 строк)",
    check:(out,v)=> _pqN(out)==="45\n25\n0\nHits: 3\nSum: 10\nCitadel restored" && _pqR(v,["class Boss\\(Virus\\)", "super\\(\\)", "def fight", "def rsum"]),
    scene:"citadel-final-boss",
    hints:["Классы, наследование, super(), цикл, break, функции, рекурсия — всё вместе.", "Разбей задачу на шаги: сначала переменные, потом цикл или условие, затем print.", "Вспомни всё, что ты прошёл в этом мире: Классы, наследование, super(), цикл, break, функции, рекурсия — всё вместе."]
  }
];
