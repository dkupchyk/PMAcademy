// Найти все значения цветов #HEX в HTML.
fetch('./testHTML.txt')
    .then(response => response.text())
    .then(function (text) {
        console.log("=======  Найти все значения цветов #HEX =======")
        let indexes = text.match(/(#[A-z|0-9]{6};|#[A-z|0-9]{3};)/g);
        console.log(indexes == null ? "-" : indexes.join(", "));
    })
    .catch(error => console.error(error));


// Найти все вхождения номера телефона в стандартном виде:
// + (380) 066 666 66 66 с операторами 067, 068, 096, 097, 098, 050, 066, 095, 099, 063, 073, 093.
fetch('./testHTML.txt')
    .then(response => response.text())
    .then(function (text) {
        console.log("=======  Найти все вхождения номера телефона в стандартном виде =======")
        let indexes = text.match(/\+?(\s|\.|-)?(\(380\))?(\s|\.|-)?\(?(0(67|68|96|97|98|50|66|95|99|63|73|93))\)?(\s|\.|-)?(\d{3})((\s|\.|-)?(\d{2})){2}/g);
        console.log(indexes == null ? "-" : indexes.join(", "));
    })
    .catch(error => console.error(error));


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
        let indexes = text.match(/<script><\/script>/g);
        console.log(indexes == null ? "-" : indexes.join(", "));
    })
    .catch(error => console.error(error));
