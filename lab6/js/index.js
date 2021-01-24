
// FROM
// {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     registrationDate: "Tue, 12 Jan 2021 12: 28: 18 + 0000",
//     address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//         geo:
//         {
//             lat: "-37.3159",
//                 lng: "81.1496"
//         }
//     },
//     phone: "050 866-66-66",
//     website: "hildegard.org",
//     company:{
//         name: "Romaguera-Crona",
//         catchPhrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets"
//     }
// }

// TO

// {
//     1: {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz",
//         registrationDate: "Tue, 12 Jan 2021 12: 28: 18 + 0000",
//         address:{
//             street: "Kulas Light",
//             suite: "Apt. 556",
//             city: "Gwenborough",
//             zipcode: "92998-3874",
//             geo:{
//                 lat: "-37.3159",
//                 lng: "81.1496"
//             }
//         },
//         phone: "050 866-66-66",
//         website: "hildegard.org",
//         company:{
//             name: "Romaguera-Crona",
//             catchPhrase: "Multi-layered client-server neural-net",
//             bs: "harness real-time e-markets"
//         }
//     }
// }
//

let usersHashMap = {};
let currentId = 1;

USERS.forEach(user => {
    usersHashMap[currentId] =  {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        registrationDate: user.registrationDate,
        address:{
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            geo:{
                lat: user.address.geo.lat,
                lng: user.address.geo.lng
            }
        },
        phone: user.phone,
        website: user.website,
        company:{
            name: user.company.name,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs
        }
    };
    currentId++;
})


for (let x in usersHashMap)
{
    console.log('Key:\n—- ' + x + '\n');
    console.log('Values: ');
    let value = usersHashMap[x];
    for (let y in value)
    {
        console.log('—- ' + y + ':' + value[y]);
    }
    console.log('\n');
}
