const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', urlApi, true);
    xhr.onreadystatechange = function (event) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(null, JSON.parse(xhr.responseText))
            }
            else {
                const error = new Error('Error: ' + urlApi);
                return callback(error, null);
            }
        }
    }

    xhr.send();
}

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.log(error1);

    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.log(error2);

        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.log(error3);

            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});
