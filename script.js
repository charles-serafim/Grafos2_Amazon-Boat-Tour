// guarda os dados da localização das cidades
const cities = [
    { name: 'Almeirim', coordinates: [-1.52053, -52.5815] },
    { name: 'Amaturá', coordinates: [-3.36435, -68.1985] },
    { name: 'Belém', coordinates: [-1.45502, -48.5024] },
    { name: 'Benjamin Constant', coordinates: [-4.38335, -70.0315] },
    { name: 'Breves', coordinates: [-1.68256, -50.4808] },
    { name: 'Fonte Boa', coordinates: [-2.51434, -66.0925] },
    { name: 'Itacoatiara', coordinates: [-3.14198, -58.4426] },
    { name: 'Juruti', coordinates: [-2.1533, -56.0872] },
    { name: 'Jutaí', coordinates: [-5.18113, -68.9052] },
    { name: 'Manaus', coordinates: [-3.10719, -60.0261] },
    { name: 'Monte Alegre', coordinates: [-1.99895, -54.0829] },
    { name: 'Óbidos', coordinates: [-1.90204, -55.5196] },
    { name: 'Parintins', coordinates: [-2.62835, -56.7365] },
    { name: 'Prainha', coordinates: [-1.79426, -53.4756] },
    { name: 'Santarém', coordinates: [-2.43944, -54.6987] },
    { name: 'Santo Antônio do Içá', coordinates: [-3.10234, -67.9405] },
    { name: 'São Paulo de Olivença', coordinates: [-3.37834, -68.8735] },
    { name: 'Tabatinga', coordinates: [-4.25335, -69.9385] },
    { name: 'Tonantins', coordinates: [-2.87334, -67.8025] }
];

// guarda os dados dos custos das viagens em um grafo
const graph = {
    'Almeirim': {
        'Belém': [29, 140],
        'Manaus': [83, 300]
    },
    'Amaturá': {
        'Manaus': [55, 220]
    },
    'Belém': {
        'Almeirim': [35, 140],
        'Breves': [15, 80],
        'Juruti': [79, 300],
        'Manaus': [119, 390],
        'Monte Alegre': [48, 200],
        'Óbidos': [73, 270],
        'Parintins': [86, 330],
        'Prainha': [43, 170],
        'Santarém': [57, 230]
    },
    'Benjamin Constant': {
        'Manaus': [66, 230]
    },
    'Breves': {
        'Belém': [14, 140],
        'Manaus': [78, 320]
    },
    'Fonte Boa': {
        'Manaus': [32, 170],
        'Tabatinga': [72, 225]
    },
    'Itacoatiara': {
        'Manaus': [11, 110],
        'Parintins': [9, 150]
    },
    'Juruti': {
        'Belém': [66, 320],
        'Manaus': [30, 150],
        'Parintins': [5, 60]
    },
    'Jutaí': {
        'Manaus': [38, 180],
        'Tabatinga': [58, 245]
    },
    'Manaus': {
        'Belém': [91, 370],
        'Almeirim': [61, 250],
        'Amaturá': [103, 330],
        'Benjamin Constant': [132, 425],
        'Breves': [78, 320],
        'Fonte Boa': [66, 245],
        'Itacoatiara': [8, 100],
        'Juruti': [21, 130],
        'Jutaí': [72, 280],
        'Monte Alegre': [38, 200],
        'Óbidos': [24, 180],
        'Parintins': [17, 130],
        'Prainha': [56, 240],
        'Santarém': [28, 230],
        'Santo Antônio do Içá': [96, 320],
        'São Paulo de Olivença': [113, 365],
        'Tabatinga': [144, 425],
        'Tonantins': [91, 305],
        'Parintins': [17, 130],
        'Tabatinga': [152, 425]
    },
    'Monte Alegre': {
        'Belém': [39, 210],
        'Manaus': [55, 200]
    },
    'Óbidos': {
        'Belém': [48, 390],
        'Manaus': [35, 160],
        'Parintins': [10, 90]
    },
    'Parintins': {
        'Belém': [72, 370],
        'Itacoatiara': [12, 100],
        'Juruti': [4, 50],
        'Manaus': [24, 140],
        'Óbidos': [6, 80],
        'Santarém': [12, 120]
    },
    'Prainha': {
        'Belém': [34, 160],
        'Manaus': [75, 240]
    },
    'Santarém': {
        'Belém': [44, 240],
        'Manaus': [42, 220],
        'Parintins': [17, 100]
    },
    'Santo Antônio do Içá': {
        'Manaus': [46, 210],
        'Tabatinga': [54, 195]
    },
    'São Paulo de Olivença': {
        'Manaus': [38, 220],
        'Tabatinga': [27, 125]
    },
    'Tabatinga': {
        'Fonte Boa': [37, 160],
        'Jutaí': [29, 150],
        'Manaus': [68, 240],
        'Santo Antônio do Içá': [20, 120],
        'São Paulo de Olivença': [11, 100],
        'Tonantins': [24, 130]
    },
    'Tonantins': {
        'Manaus': [49, 200],
        'Tabatinga': [51, 220]
    }
};



const touristAttractions = [
    { city: 'Almeirim', attractions: 'https://almeirim.pa.gov.br/o-municipio/turismo-e-lazer/' },
    { city: 'Amaturá', attractions: 'https://brasilturismo.com/cidades-do-brasil/amatura' },
    { city: 'Belém', attractions: 'https://www.viagensecaminhos.com/2014/09/belem.html' },
    { city: 'Benjamin Constant', attractions: 'https://benjaminconstant.am.gov.br/turismo/?turismo.html' },
    { city: 'Breves', attractions: 'https://www.buser.com.br/destinos/pontos-turisticos/pa/breves' },
    { city: 'Fonte Boa', attractions: 'https://www.minube.com.br/o-que-ver/brasil/amazonas/fonte_boa' },
    { city: 'Itacoatiara', attractions: 'http://semctur-ita.blogspot.com/p/espacos-naturais.html' },
    { city: 'Juruti', attractions: 'https://melhores-destinos.com/glossario/pontos-turisticos-em-juruti/' },
    { city: 'Jutaí', attractions: 'https://melhores-destinos.com/glossario/o-que-fazer-em-jutai/' },
    { city: 'Manaus', attractions: 'https://www.segueviagem.com.br/destino-nacional/o-que-fazer-em-manaus-amazonas/' },
    { city: 'Monte Alegre', attractions: 'http://pportalparamazonia.blogspot.com/2016/05/monte-alegre-para-o-que-ver-e-fazer.html' },
    { city: 'Óbidos', attractions: 'https://obidos.pa.gov.br/o-municipio/turismo-e-lazer/' },
    { city: 'Parintins', attractions: 'http://www.amazonastur.am.gov.br/atrativos-turisticos/' },
    { city: 'Prainha', attractions: 'https://prainha.pa.gov.br/o-municipio/turismo-e-lazer/' },
    { city: 'Santarém', attractions: 'https://todepassagem.clickbus.com.br/top-destinos/santarem-pa/' },
    { city: 'Santo Antônio do Içá', attractions: 'https://melhores-destinos.com/glossario/o-que-fazer-em-santo-antonio-do-ica/' },
    { city: 'São Paulo de Olivença', attractions: 'https://brasilturismo.com/am/sao-paulo-de-olivenca' },
    { city: 'Tabatinga', attractions: 'https://www.buser.com.br/destinos/pontos-turisticos/am/tabatinga' },
    { city: 'Tonantins', attractions: 'https://melhores-destinos.com/glossario/o-que-fazer-em-tonantins/' }
]


// let h2 = document.querySelector('h2');
var map;



var polyline;

var originSelect = document.getElementById('origin');
var destinationSelect = document.getElementById('destination');

var routeOptionSelect = document.getElementById('routeOption');
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

function calculateRoute()
{

    var originCity = originSelect.value;
    var destinationCity = destinationSelect.value;
    var routeOption = routeOptionSelect.value;


    const shortestPath = dijkstra(graph, originCity, destinationCity, routeOption);
    console.log('Caminho mais curto:', shortestPath);

    // Selecione a lista de atrações no DOM
    const atracoesList = document.getElementById('atracoesList');

    // Limpar a lista atual de atrações
    atracoesList.innerHTML = '';

    // Itere sobre o array de cidades e crie elementos de lista
    shortestPath.forEach(city => {
        const li = document.createElement('li');
        const textNode = document.createTextNode(city + ": ");
        li.appendChild(textNode);
        
        const link = document.createElement('a');
        link.href = getAttractionLink(city); // Função para obter o link da atração com base no nome da cidade
        link.textContent = "Tourist attractions in " + city;
        
        li.appendChild(link);
        atracoesList.appendChild(li);
    });

    // limpa o mapa (marcadores e polyline)
    if (map)
    {
        map.eachLayer(function (layer) {
            if (layer instanceof L.Marker || layer instanceof L.Polyline) {
                map.removeLayer(layer);
            }
        });
    }

    if (shortestPath.length > 0)
    {
        var coordinates = [];

        // adiciona os pins / marcadores das cidades do menor caminho
        for(var i = 0; i < shortestPath.length; i++)
        {
            var city = shortestPath[i];
            var cityCoordinates = cities.find(city => city.name === shortestPath[i])?.coordinates;
            if(cityCoordinates)
            {
                coordinates.push(cityCoordinates);
                L.marker([cityCoordinates[0], cityCoordinates[1]]).addTo(map);
            }
        }

        // adiciona o polyline com o menor caminho
        polyline = L.polyline(coordinates, { color: 'red' }).addTo(map);
        var bounds = polyline.getBounds();
        map.fitBounds(bounds, { padding: [10, 10] });

        const atracoesContainer = document.getElementById('atracoesContainer');
        atracoesContainer.style.display = 'block'; // Tornar o container visível
    }
    else 
    {
        alert('Selecione cidades válidas.');
    }
}

calculateRouteButton.addEventListener('click', calculateRoute); 

function success(position)
{
    // Parar o rastreamento de localização
    navigator.geolocation.clearWatch(watchID);

    console.log(position);
    // h2.textContent = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
  

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
        .bindPopup('Sua localização')
        .openPopup();

    if (polyline)
    {
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

    // utiliza as coordenadas de brasília caso o usuário de recuse a fornecer a sua localização
    map = L.map('map').setView([-15.7801, -47.9292], 5);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); 
    L.marker([-15.7801, -47.9292]).addTo(map).bindPopup('Sua localização').openPopup();
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 50000
});


function dijkstra(graph, start, end, routeOption)
{
    const inf = Number.POSITIVE_INFINITY;

    // cria um objeto para rastrear o custo mais baixo de alcançar cada cidade
    const cost = {};
    for (const city of Object.keys(graph))
    {
        cost[city] = inf;
    }
    cost[start] = 0;

    // cria um objeto para rastrear o caminho mais curto para cada cidade
    const shortestPath = {};

    // inicializa uma fila de prioridade com a cidade de partida
    const queue = [start];

    // enquanto a fila de prioridade não estiver vazia, encontra o custo mais baixo para alcançar a cidade, remove-a da fila e atualiza os custos e caminhos mais baixos para cada vizinhança, se necessário, adicionando-os à fila de prioridade, para que eles possam ser processados ​​mais tarde, e assim por diante até que a fila esteja vazia, o que significa que todos os caminhos possíveis foram explorados, e o custo mais baixo para alcançar o destino foi encontrado
    while (queue.length)
    {
        // encontra a cidade com o custo mais baixo na fila de prioridade
        const currentCity = queue.reduce((minCity, city) =>
            cost[city] < cost[minCity] ? city : minCity
        );

        // remove a cidade atual da fila de prioridade
        queue.splice(queue.indexOf(currentCity), 1);

        // se a cidade atual for o destino, o custo mais baixo para alcançá-lo foi encontrado, então pare
        for (const neighbor in graph[currentCity])
        {
            let weight; // variável para armazenar o peso com base na opção selecionada

            if (routeOption === 'duration') {
                weight = graph[currentCity][neighbor][0]; // usa a duração como peso
            } else if (routeOption === 'price') {
                weight = graph[currentCity][neighbor][1]; // usa o preço como peso
            }

            // calcula o novo custo para chegar à vizinhança passando pela cidade atual
            const alt = cost[currentCity] + weight;

            // se o novo custo for menor que o custo atual para alcançar a vizinhança, atualize o custo e o caminho mais baixos para a vizinhança e adicione-a à fila de prioridade
            if (alt < cost[neighbor]) {
                // atualiza o custo mais baixo para a vizinhança
                cost[neighbor] = alt;

                // atualiza o caminho mais curto para a vizinhança
                shortestPath[neighbor] = currentCity;

                // adiciona a vizinhança à fila de prioridade
                queue.push(neighbor);
            }
        }
    }

    // reconstrói o caminho mais curto a partir do destino até a cidade de partida
    const path = [];
    let currentCity = end;

    // enquanto a cidade atual não for a cidade de partida, adiciona-a ao caminho, e atualiza a cidade atual para a cidade que levou à cidade atual
    while (currentCity)
    {
        path.unshift(currentCity);
        currentCity = shortestPath[currentCity];
    }

    return path;
}

// função para obter o link da atração com base no nome da cidade
function getAttractionLink(city) {
    const attraction = touristAttractions.find(item => item.city === city);
    return attraction ? attraction.attractions : '#';
}