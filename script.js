let h2 = document.querySelector('h2');
var map;

// guarda os dados da localização das cidades
var cities = [
    { name: 'Almeirim', coordinates: [-1.52053, -52.5815] },
    { name: 'Alvarães', coordinates: [-3.22135, -64.8045] },
    { name: 'Amaturá', coordinates: [-3.36435, -68.1985] },
    { name: 'Apuí', coordinates: [-7.1149, -59.5327] },
    { name: 'Axinim', coordinates: [-4.0456665, -59.3811835] },
    { name: 'Belém', coordinates: [-1.45502, -48.5024] },
    { name: 'Benjamin Constant', coordinates: [-4.38335, -70.0315] },
    { name: 'Borba', coordinates: [-4.38835, -59.5945] },
    { name: 'Breves', coordinates: [-1.68256, -50.4808] },
    { name: 'Caiambé', coordinates: [-3.5328582, -64.4211634] },
    { name: 'Catuá', coordinates: [-3.6902803, -64.1662562] },
    { name: 'Coari', coordinates: [-4.08488, -63.1417] },
    { name: 'Codajás', coordinates: [-3.83735, -62.0575] },
    { name: 'Comunidade do Juruá', coordinates: [-3.48135, -66.0695] },
    { name: 'Faro', coordinates: [-2.16968, -56.7421] },
    { name: 'Fonte Boa', coordinates: [-2.51434, -66.0925] },
    { name: 'Itacoatiara', coordinates: [-3.14198, -58.4426] },
    { name: 'Juruti', coordinates: [-2.1533, -56.0872] },
    { name: 'Jutaí', coordinates: [-5.18113, -68.9052] },
    { name: 'Manaus', coordinates: [-3.10719, -60.0261] },
    { name: 'Manicoré', coordinates: [-5.80936, -61.3005] },
    { name: 'Maracanã', coordinates: [-0.778539, -47.4512] },
    { name: 'Monte Alegre', coordinates: [-1.99895, -54.0829] },
    { name: 'Mocambo', coordinates: [-2.928778, -58.9441864] },
    { name: 'Nhamundá', coordinates: [-2.18583, -56.7128] },
    { name: 'Nova Olinda do Norte', coordinates: [-3.88835, -59.0945] },
    { name: 'Novo Aripuanã', coordinates: [-5.13508, -60.3757] },
    { name: 'Óbidos', coordinates: [-1.90204, -55.5196] },
    { name: 'Parintins', coordinates: [-2.62835, -56.7365] },
    { name: 'Prainha', coordinates: [-1.79426, -53.4756] },
    { name: 'Santarém', coordinates: [-2.43944, -54.6987] },
    { name: 'Santo Antônio do Içá', coordinates: [-3.10234, -67.9405] },
    { name: 'São Paulo de Olivença', coordinates: [-3.37834, -68.8735] },
    { name: 'Tabatinga', coordinates: [-4.25335, -69.9385] },
    { name: 'Tefé', coordinates: [-3.32073, -64.7236] },
    { name: 'Terra Santa', coordinates: [-2.10435, -56.4875] },
    { name: 'Tonantins', coordinates: [-2.87334, -67.8025] },
    { name: 'Uarini', coordinates: [-2.99391, -65.1085] },
    { name: 'Ubim', coordinates: [-2.2658069, -56.7320709] },
    { name: 'Urucurituba', coordinates: [-2.68443, -57.6691] }
];


var polyline;

var originSelect = document.getElementById('origin');
var destinationSelect = document.getElementById('destination');

var calculateRouteButton = document.getElementById('calculateRoute');

// preenche as opções dos menus suspensos com base na lista de cidades
cities.forEach(city => {
    var option = document.createElement('option');
    option.value = city.name;
    option.text = city.name;
    originSelect.appendChild(option);

    option = document.createElement('option');
    option.value = city.name;
    option.text = city.name;
    destinationSelect.appendChild(option);
});

var startPoint = originSelect;
var endPoint = destinationSelect;

function calculateRoute() {
    var originCity = originSelect.value;
    var destinationCity = destinationSelect.value;

    // encontra as coordenadas das cidades selecionadas na lista
    var originCoordinates = cities.find(city => city.name === originCity)?.coordinates;
    var destinationCoordinates = cities.find(city => city.name === destinationCity)?.coordinates;

    if (originCoordinates && destinationCoordinates) {
        if (polyline) {
            map.removeLayer(polyline); // Remova a polyline anterior, se existir
        }

        // cria o polyline com base nas coordenadas das cidades
        polyline = L.polyline([originCoordinates, destinationCoordinates], { color: 'red' }).addTo(map);

        // usa fitBounds para ajustar o zoom e o posicionamento do mapa
        var bounds = polyline.getBounds();
        map.fitBounds(bounds, { padding: [10, 10] });
    } else {
        alert('Por favor, selecione cidades de origem e destino válidas.');
    }
}

calculateRouteButton.addEventListener('click', calculateRoute); 

function success(position)
{
    console.log(position);
    h2.textContent = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`

    if(map === undefined)
    {
        map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 5);       
    }
    else
    {
        map.remove();
        map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 5);    
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();

    if (polyline) {
        map.removeLayer(polyline); // remove o polyline anterior se existir
    }

    // startPoint = [position.coords.latitude, position.coords.longitude];
    // endPoint = [ -3.10719, -60.0261];

    // polyline = L.polyline([startPoint, endPoint], { color: 'red' }).addTo(map);

    // var bounds = polyline.getBounds();
    // map.fitBounds(bounds, { padding: [3, 3] });
}

function error(err)
{
    console.log(err);

}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});

// navigator.geolocation.clearWatch(watchID);


