// Найти все значения цветов #HEX в HTML.
fetch('./testHTML.txt')
    .then(response => response.text())
    .then(function (text) {
            console.log("=======  Найти все значения цветов #HEX =======")
            let indexes = text.search(/(#[A-z|0-9]{6};|#[A-z|0-9]{3};)/g);
            console.log(indexes);
    })
    .catch(error => console.error(error));


// Найти все вхождения номера телефона в стандартном виде:
// + (380) 066 666 66 66 с операторами 067, 068, 096, 097, 098, 050, 066, 095, 099, 063, 073, 093.

// Есть три стандарта:
// +380 44 123 45 67  ->    E.123, міжнародний формат: код країни, код населеного пункту та телефонний номер розділяється пропусками
// (044) 123 45 67    ->	E.123, національний формат: міжміський префікс та код населеного пункту в дужках (через можливу плутанину потребує постійних додаткових роз'яснень, п. 2.8 [5] ), телефонний номер відділяється від коду та розділяється пропусками
// +380 (44) 1234567  -> 	Microsoft, міжнародний формат: код країни, пропуск, код населеного пункту в дужках, пропуск, телефонний номер.

// (\+?\s?(380)?\s?(067|068|096|097|098|050|066|095|099|063|073|093)\s?\d{3}(\s?\d{2}){2})

// Написать логику которая находила бы все теги <h1> и заменила их на <h2/>
fetch('./testHTML.txt')
    .then(response => response.text())
    .then(function (text) {
            console.log("======= Написать логику которая находила бы все теги <h1> и заменила их на <h2/> =======")
            let changedHTML = text.replace(/<h1>/g, "<h2/>");
            console.log(changedHTML);
    })
    .catch(error => console.error(error));


// Найти все теги <script></script>
fetch('./testHTML.txt')
    .then(response => response.text())
    .then(function (text) {
            console.log("=======  Найти все теги <script></script> =======")
            let indexes = text.search(/<script><\/script>/g);
            console.log(indexes);
    })
    .catch(error => console.error(error));
