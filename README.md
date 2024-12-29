# D3 Choropleth Map

This project visualizes U.S. counties' educational attainment using a choropleth map. The project leverages **D3.js** and **TopoJSON** to create an interactive map.

## Features

- **Interactive Choropleth Map**: Displays U.S. counties, color-coded based on the percentage of the population with a bachelor's degree or higher.
- **Color Scaling**: The map uses a sequential color scale to indicate the level of educational attainment.
- **Tooltips**: Hovering over a county reveals the percentage of residents with higher education.

## Technologies Used

- **D3.js**: For creating the map, handling the data, and providing interactive features.
- **TopoJSON**: For parsing the geographic data in the form of TopoJSON.
- **JavaScript (ES6)**: For data handling, DOM manipulation, and logic implementation.
- **HTML5**: For rendering the map within the browser.

## Getting Started

### Prerequisites

- **Web Browser**: Any modern browser (e.g., Chrome, Firefox, Edge, Safari).
- **Text Editor/IDE**: Optional, for editing the project files.

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/abelgideon/D3-Choropleth-Map.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd D3-Choropleth-Map
   ```
3. Open the `index.html` file in your browser to view the choropleth map.
4. Alternatively, you can access the live site [here](https://abelgideon.github.io/D3-Choropleth-Map/).

## Usage

1. Hover over any county to view the percentage of residents with a bachelor's degree or higher.
2. The map is color-coded, with darker shades indicating higher education levels.

## Customizing the Choropleth Map

You can modify the following parameters in `script.js` to customize the map:

- **Width and Height**: Adjust the `width` and `height` variables to resize the map.
- **Color Scale**: Modify the `colorScale` to change the color range based on educational attainment data.
- **Data Sources**: You can replace the current data URLs with your own TopoJSON and education data JSON files to visualize other datasets.

## Project Highlights

### Interactive Tooltips

- Tooltips display the percentage of the population with a bachelor's degree or higher when hovering over a county.

### Dynamic Color Coding

- Counties are color-coded based on educational attainment, making it easy to visualize regional differences in education levels.

### Data Integration

- The project loads TopoJSON data for U.S. counties and combines it with education data using the `fips` code to associate educational attainment with each county.

## File Structure

- `index.html`: The main HTML file that includes the map visualization.
- `script.js`: Contains the JavaScript code for creating the choropleth map and adding interactivity.
- `styles.css`: (Optional) Add custom styles to enhance the map's appearance.

## Contributing

Contributions are welcome! Fork the repository and submit a Pull Request with your improvements.