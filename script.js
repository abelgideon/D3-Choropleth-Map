import * as d3 from "https://esm.sh/d3";
import * as topojson from "https://esm.sh/topojson-client";

document.addEventListener("DOMContentLoaded", () => {
  const width = 960;
  const height = 600;
  d3.json(
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"
  ).then(function (topology) {
    d3.json(
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json"
    ).then(function (educationData) {
      const educationMap = new Map();
      educationData.forEach(function (data) {
        educationMap.set(data.fips, data.bachelorsOrHigher);
      });

      const colorScale = d3
        .scaleSequential(d3.interpolateBlues)
        .domain([
          d3.min(educationData, (d) => d.bachelorsOrHigher),
          d3.max(educationData, (d) => d.bachelorsOrHigher),
        ]);

      const counties = topojson.feature(topology, topology.objects.counties);
      const svg = d3.select("svg");
      svg.attr("width", width).attr("height", height);
      const path = d3.geoPath();

      svg
        .selectAll("path")
        .data(counties.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", (d) => {
          const educationLevel = educationMap.get(d.id);
          return colorScale(educationLevel);
        })
        .attr("stroke", "#fff")
        .append("title")
        .text((d) => {
          return `${educationMap.get(d.id)}%`;
        });
    });
  });
});
