# Amazon Boat Tour

## Students

| Reg. number | Student                 |
| ----------- | ----------------------- |
| 190113596   | Charles Serafim Morais  |
| 190117508   | Thiago Cerqueira Borges |


## About

The objective of the project is to provide an application that allows the user to calculate possible travel itineraries between accessible Amazonian cities via boat trips, a commonly used mode of transportation in some cities due to the presence of numerous rivers in the region. The application also provides access to materials and articles indicating tourist attractions in the cities to be visited in the generated itinerary.

For the calculations of the shortest duration or the least total price routes, the [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) was employed as a practical application of the content covered in the Graphs 2 module of the Algorithms Design course in the Software Engineering program at the University of Brasília.

The map, as well as the route visualization, was created using the [Leaflet](https://leafletjs.com/) and [Open Street Map](https://www.openstreetmap.org/) tools.

Route, price, and duration information for boat trips were obtained from the [Navegam E-commerce](https://navegam.com.br/) and [iBarco](ibarco.com.br/) websites.

If you would like to contribute information regarding routes, prices, and duration of boat trips between cities in the Amazon, please contact the project contributors.


## Presentation Video (In Portuguese)

The program execution and explanation of the application of algorithms and code can be viewed by downloading the [file](https://github.com/charles-serafim/Grafos2_Amazon-Boat-Tour/raw/master/Apresenta%C3%A7%C3%A3o_Trabalho_Grafos_2_Amazon_Boat_Tour.mp4) or in [YouTube](https://www.youtube.com/watch?v=8hWu22xi3HM).


## Screenshots

Home page
![Alt text](image-3.png)

Consulting routes with least duration
![Alt text](image-5.png)

Consulting routes with least total price
![Alt text](image.png)


## Installation

To run the project locally:

**Language**: JavaScript <br>
**Framework**: Bootstrap <br>

## Using

The application can be used on the project's GitHub Pages, accessible through this [link](https://charles-serafim.github.io/Grafos2_Amazon-Boat-Tour/).

Once inside the application, to generate the itineraries, just follow these steps:

1 - Select the starting location.<br>
2 - Select the destination.<br>
3 - Choose the route option.<br>
4 - Select Calculate Route.<br>