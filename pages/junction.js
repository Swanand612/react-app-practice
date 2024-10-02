import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Junction() {
  const [populationData, setPopulationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const svgRef = useRef();

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => response.json())
      .then((data) => {
        setPopulationData(data.data.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (populationData.length > 0) {
      const createGraph = () => {
        const margin = { top: 20, right: 30, bottom: 30, left: 60 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3
          .select(svgRef.current)
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3
          .scaleLinear()
          .domain(d3.extent(populationData, (d) => d.Year))
          .range([0, width]);

        const y = d3
          .scaleLinear()
          .domain([0, d3.max(populationData, (d) => d.Population)])
          .range([height, 0]);

        const line = d3
          .line()
          .x((d) => x(d.Year))
          .y((d) => y(d.Population));

        svg
          .append("g")
          .attr("transform", `translate(0,${height})`)
          .call(d3.axisBottom(x).tickFormat(d3.format("d")));

        svg.append("g").call(d3.axisLeft(y));

        svg
          .append("path")
          .datum(populationData)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("d", line);
      };

      createGraph();
    }
  }, [populationData]);

  return (
    <div>
      <h1>US Population Data</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <svg ref={svgRef}></svg>
        </>
      )}
    </div>
  );
}
