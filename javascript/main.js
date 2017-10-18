const svg = d3.select("svg");

const path = d3.geoPath();

d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
  if (error) throw error;

    console.log(us)
    console.log(us.objects.states.geometries)
    
  svg.append("g")
    .attr("class", "states")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
    .attr('class', function(d){ return 'states ' + d.id;} )
    .attr("d", path);

  svg.append("path")
      .attr("class", "state-borders")
      .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

    // svg.path.attr("class", "great");
});

console.log("hi")