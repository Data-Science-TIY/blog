var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "%");

var svg = d3.select(".os-chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data = {"devos_68":0.2113889473,"devos_157":0.1963297612,"devos_119":0.0918890523,"devos_7":0.0676892905,"devos_138":0.0667086923,"devos_72":0.0462001821,"devos_36":0.0441059046,"devos_133":0.0337675982,"devos_114":0.0321636198,"devos_159":0.0231000911,"devos_97":0.0184702669,"devos_67":0.0171744764,"devos_129":0.0121874343,"devos_12":0.0111017721,"devos_143":0.0108636268,"devos_57":0.010765567,"devos_77":0.010226238,"devos_148":0.0090635288,"devos_49":0.007991875,"devos_34":0.0070673111,"devos_99":0.0069202213,"devos_11":0.0060446873,"devos_128":0.0059396232,"devos_88":0.0058975975,"devos_112":0.0056874694,"devos_3":0.005113119,"devos_103":0.0040764867,"devos_40":0.0036422218,"devos_105":0.003341038,"devos_95":0.0032359739,"devos_8":0.0026826364,"devos_137":0.0022833929,"devos_15":0.0016810254,"devos_139":0.0016319955,"devos_150":0.0015759613,"devos_44":0.0013378161,"devos_166":0.0013027947,"devos_16":0.001232752,"devos_152":0.0011697135,"devos_62":0.0011206836,"devos_109":0.0009385725,"devos_125":0.0006093717,"devos_2":0.0006023674,"devos_126":0.0003922393,"-1":0.0003922393,"devos_87":0.0002801709,"devos_30":0.0002521538,"devos_43":0.0002521538,"devos_127":0.0002451495,"devos_136":0.0002101282,"devos_92":0.0001681025,"devos_59":0.0001120684,"devos_101":0.0001050641,"devos_146":0.0000980598,"devos_10":0.0000910555,"devos_38":0.0000840513,"devos_153":0.000077047,"devos_20":0.000077047,"devos_82":0.000077047,"devos_65":0.0000700427,"devos_130":0.0000630385,"devos_102":0.0000490299,"devos_53":0.0000490299,"devos_162":0.0000420256,"devos_147":0.0000420256,"devos_35":0.0000420256,"devos_37":0.0000350214,"devos_167":0.0000350214,"devos_124":0.0000350214,"devos_106":0.0000280171,"devos_64":0.0000280171,"devos_131":0.0000280171,"devos_73":0.0000280171,"devos_111":0.0000280171,"devos_27":0.0000210128,"devos_21":0.0000210128,"devos_113":0.0000140085,"devos_60":0.0000140085,"devos_22":0.0000140085,"devos_84":0.0000140085,"devos_71":0.0000070043,"devos_13":0.0000070043,"devos_14":0.0000070043,"devos_134":0.0000070043,"devos_144":0.0000070043,"devos_63":0.0000070043,"devos_61":0.0000070043,"devos_154":0.0000070043,"devos_47":0.0000070043};

  var dataset = _.values(data);
  var i = 0;
  var newArray = dataset.map(function (d) {
    i++;
    return {
      'id': i,
      'frequency': d
    };
  });

  x.domain(newArray.map(function(d) { return d.id; }));
  y.domain([0, d3.max(newArray, function(d) { return d.frequency; })]);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");

  svg.selectAll(".bar")
      .data(newArray)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.id); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); });
      

function type(d) {
  d.frequency = +d.frequency;
  return d;
}
