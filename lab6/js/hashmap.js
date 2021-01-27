class Hashmap {

    constructor(array) {
        this.initialize(array);
    }

    initialize(array) {
        array.forEach(user => {
            this[user.id] = {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                registrationDate: user.registrationDate,
                address: {
                    street: user.address.street,
                    suite: user.address.suite,
                    city: user.address.city,
                    zipcode: user.address.zipcode,
                    geo: {
                        lat: user.address.geo.lat,
                        lng: user.address.geo.lng
                    }
                },
                phone: user.phone,
                website: user.website,
                company: {
                    name: user.company.name,
                    catchPhrase: user.company.catchPhrase,
                    bs: user.company.bs
                }
            };
        });
    }

    displayAllUsers() {
        console.log("---------------------------------------- HashMap ----------------------------------------")
        for (let x in this) {
            console.log('Key: ' + x + '\n');
            console.log('Values: ');
            let value = this[x];
            for (let y in value) {
                console.log('-- ' + y + ':' + value[y]);
            }
            console.log('\n');
        }
    }

    printUser(obj, spaces = 1) {
        let string = '';
        let space = `\xa0`.repeat(4 * spaces);

        for (let prop in obj) {
            string += space;

            if (typeof obj[prop] === 'object') {
                string += `<span class="property">${prop}</span>: { </br> ${this.printUser(obj[prop], spaces + 1)}`;
                string += `${space}} </br>`;
            } else {
                string += `<span class="property">${prop}</span> : ${obj[prop]}; </br>`;
            }
        }

        return string;
    }

    filterByCompanyName(companyName) {
        let result = {}
        for (let i in this) {
            let user = this[i];
            if (user.company.name === companyName) {
                result[user.id] = user;
            }
        }
        return result;
    }

    getUserById(userId) {
        for (let i in this) {
            let user = this[i];
            if (user.id === userId) {
                return user;
            }
        }

        return -1;
    }

    setPhone(userId, newPhone) {
        let user = this.getUserById(userId);
        if (user !== -1) {
            user.phone = newPhone;
        }
    }
}
