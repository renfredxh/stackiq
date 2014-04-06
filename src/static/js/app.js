var app = app || {};
app.lang_info_mode = false;

/*var readingLevels2 = [
      {
        "lang" : "C#",
        "rl" : "8",
        "pop" : "1000",
        "act" : "750"
      },
      {
        "lang" : "Java",
        "rl" : "4",
        "pop" : "800",
        "act" : "650"
      },
      {
        "lang" : "Javascript",
        "rl" : "12",
        "pop" : "600",
        "act" : "550"
      },
      {
        "lang" : "PHP",
        "rl" : "11",
        "pop" : "400",
        "act" : "450"
      },
      {
        "lang" : "Python",
        "rl" : "3",
        "pop" : "300",
        "act" : "350"
      },
      {
        "lang" : "C++",
        "rl" : "16",
        "pop" : "200",
        "act" : "250"
      },
      {
        "lang" : ".NET",
        "rl" : "4",
        "pop" : "750",
        "act" : "100"
      },
      {
        "lang" : "HTML/CSS",
        "rl" : "5",
        "pop" : "650",
        "act" : "200"
      },
      {
        "lang" : "Objective-C",
        "rl" : "10",
        "pop" : "150",
        "act" : "300"
      },
      {
        "lang" : "C",
        "rl" : "7",
        "pop" : "450",
        "act" : "400"
      },
      {
        "lang" : "Ruby",
        "rl" : "2",
        "pop" : "950",
        "act" : "500"
      },
      {
        "lang" : "Perl",
        "rl" : "10",
        "pop" : "1200",
        "act" : "600"
      },
      {
        "lang" : "Delphi",
        "rl" : "8",
        "pop" : "275",
        "act" : "700"
      },
      {
        "lang" : "Scala",
        "rl" : "13",
        "pop" : "500",
        "act" : "800"
      },
      {
        "lang" : "Haskell",
        "rl" : "8",
        "pop" : "700",
        "act" : "900"
      },
      {
        "lang" : "Lisp",
        "rl" : "4",
        "pop" : "1000",
        "act" : "1000"
      }];
*/

var readingLevelsJ = {
  "Javascript": {
    "lang" : "Javascript",
    "count": 82916, 
    "view_count": 4397, 
    "scores_to_views": 0, 
    "composite_community": 258.7984982926355, 
    "linguistics_data": {
      "word_count": 88, 
      "reading_level": 7.441810932887826, 
      "min_age": 12
    }, 
    "composite_intellegence": 115.98732871053132, 
    "answer_count": 2, 
    "percentage_answered": 0.0012015017073612132, 
    "score": 4, 
    "favorite_count": 1
  }, 
  "C": {
    "lang" : "C",
    "count": 30157, 
    "view_count": 2934, 
    "scores_to_views": 0, 
    "composite_community": 246.69006794058078, 
    "linguistics_data": {
      "word_count": 91, 
      "reading_level": 7.500599906163235, 
      "min_age": 12
    }, 
    "composite_intellegence": 116.57521844328541, 
    "answer_count": 3, 
    "percentage_answered": 0.0033099320594276215, 
    "score": 4, 
    "favorite_count": 1
  }, 
  "Java": {
    "lang" : "Java",
    "count": 109563, 
    "view_count": 4061, 
    "scores_to_views": 0, 
    "composite_community": 259.0904903662704, 
    "linguistics_data": {
      "word_count": 97, 
      "reading_level": 8.152434768559555, 
      "min_age": 12
    }, 
    "composite_intellegence": 123.09356706724861, 
    "answer_count": 2, 
    "percentage_answered": 0.0009095096337223825, 
    "score": 4, 
    "favorite_count": 1
  }, 
  "Scala": {
    "lang" : "Scala",
    "count": 3403, 
    "view_count": 2001, 
    "scores_to_views": 0, 
    "composite_community": 360.6314345201463, 
    "linguistics_data": {
      "word_count": 91, 
      "reading_level": 8.307484165919178, 
      "min_age": 12
    }, 
    "composite_intellegence": 124.64406104084483, 
    "answer_count": 2, 
    "percentage_answered": 0.029368565479854815, 
    "score": 7, 
    "favorite_count": 2
  }, 
  "C#": {
    "lang" : "C#",
    "count": 167623, 
    "view_count": 2882, 
    "scores_to_views": 0, 
    "composite_community": 189.40547672358662, 
    "linguistics_data": {
      "word_count": 99, 
      "reading_level": 8.121859764992005, 
      "min_age": 12
    }, 
    "composite_intellegence": 122.7878170315731, 
    "answer_count": 2, 
    "percentage_answered": 0.0005945232764126626, 
    "score": 3, 
    "favorite_count": 1
  }, 
  "Delphi": {
    "lang" : "Delphi",
    "count": 8642, 
    "view_count": 1757, 
    "scores_to_views": 0, 
    "composite_community": 168.4647567321008, 
    "linguistics_data": {
      "word_count": 109, 
      "reading_level": 8.077034150137806, 
      "min_age": 12
    }, 
    "composite_intellegence": 122.33956088303111, 
    "answer_count": 2, 
    "percentage_answered": 0.011535243267903486, 
    "score": 3, 
    "favorite_count": 1
  }, 
  ".NET": {
    "lang" : ".NET",
    "count": 36991, 
    "view_count": 2081, 
    "scores_to_views": 0, 
    "composite_community": 187.3074557952168, 
    "linguistics_data": {
      "word_count": 109, 
      "reading_level": 8.59104650479119, 
      "min_age": 13
    }, 
    "composite_intellegence": 132.78263162894376, 
    "answer_count": 2, 
    "percentage_answered": 0.002692544204780353, 
    "score": 3, 
    "favorite_count": 1
  }, 
  "C++": {
    "lang" : "C++",
    "count": 56696, 
    "view_count": 2506, 
    "scores_to_views": 0, 
    "composite_community": 248.24003362709846, 
    "linguistics_data": {
      "word_count": 101, 
      "reading_level": 7.993457036836209, 
      "min_age": 12
    }, 
    "composite_intellegence": 121.50378975001514, 
    "answer_count": 3, 
    "percentage_answered": 0.0017599663729046056, 
    "score": 4, 
    "favorite_count": 1
  }, 
  "Perl": {
    "lang" : "Perl",
    "count": 9509, 
    "view_count": 2183, 
    "scores_to_views": 0, 
    "composite_community": 179.50576580698907, 
    "linguistics_data": {
      "word_count": 96, 
      "reading_level": 7.460720317220851, 
      "min_age": 12
    }, 
    "composite_intellegence": 116.17642255386156, 
    "answer_count": 2, 
    "percentage_answered": 0.010494234193019657, 
    "score": 3, 
    "favorite_count": 0
  }, 
  "Lisp": {
    "lang" : "Lisp",
    "count": 1149, 
    "view_count": 1775, 
    "scores_to_views": 0, 
    "composite_community": 353.11929016868817, 
    "linguistics_data": {
      "word_count": 93, 
      "reading_level": 7.866123727222361, 
      "min_age": 12
    }, 
    "composite_intellegence": 120.23045665387667, 
    "answer_count": 3, 
    "percentage_answered": 0.08688070983130598, 
    "score": 8, 
    "favorite_count": 2
  }, 
  "Objective-C": {
    "lang" : "Objective-C",
    "count": 35788, 
    "view_count": 2701, 
    "scores_to_views": 0, 
    "composite_community": 187.21927468028298, 
    "linguistics_data": {
      "word_count": 90, 
      "reading_level": 8.083094822652406, 
      "min_age": 12
    }, 
    "composite_intellegence": 122.40016760817711, 
    "answer_count": 2, 
    "percentage_answered": 0.00278072531972337, 
    "score": 3, 
    "favorite_count": 1
  }, 
  "Haskell": {
    "lang" : "Haskell",
    "count": 2797, 
    "view_count": 1415, 
    "scores_to_views": 0, 
    "composite_community": 394.2857553722388, 
    "linguistics_data": {
      "word_count": 105, 
      "reading_level": 8.22697438009871, 
      "min_age": 12
    }, 
    "composite_intellegence": 123.83896318264016, 
    "answer_count": 2, 
    "percentage_answered": 0.035714244627748026, 
    "score": 8, 
    "favorite_count": 2
  }, 
  "HTML/CSS": {
    "lang" : "HTML/CSS",
    "count": 39579, 
    "view_count": 4749, 
    "scores_to_views": 0, 
    "composite_community": 257.48138720149655, 
    "linguistics_data": {
      "word_count": 87, 
      "reading_level": 6.918629583319638, 
      "min_age": 11
    }, 
    "composite_intellegence": 105.66916852710578, 
    "answer_count": 2, 
    "percentage_answered": 0.002518612798501571, 
    "score": 4, 
    "favorite_count": 1
  }, 
  "Python": {
    "lang" : "Python",
    "count": 56049, 
    "view_count": 3346, 
    "scores_to_views": 0, 
    "composite_community": 298.21992134746324, 
    "linguistics_data": {
      "word_count": 96, 
      "reading_level": 7.779458136628454, 
      "min_age": 12
    }, 
    "composite_intellegence": 119.3638007479376, 
    "answer_count": 2, 
    "percentage_answered": 0.0017800786525465496, 
    "score": 5, 
    "favorite_count": 2
  }, 
  "PHP": {
    "lang" : "PHP",
    "count": 105432, 
    "view_count": 2271, 
    "scores_to_views": 0, 
    "composite_community": 139.05450807069428, 
    "linguistics_data": {
      "word_count": 92, 
      "reading_level": 7.47289978670425, 
      "min_age": 12
    }, 
    "composite_intellegence": 116.29821724869555, 
    "answer_count": 2, 
    "percentage_answered": 0.0009454919293139971, 
    "score": 2, 
    "favorite_count": 0
  }, 
  "Ruby": {
    "lang" : "Ruby",
    "count": 21133, 
    "view_count": 2450, 
    "scores_to_views": 0, 
    "composite_community": 235.27791630041975, 
    "linguistics_data": {
      "word_count": 87, 
      "reading_level": 7.586603529654306, 
      "min_age": 12
    }, 
    "composite_intellegence": 117.43525467819612, 
    "answer_count": 2, 
    "percentage_answered": 0.004722083699581801, 
    "score": 4, 
    "favorite_count": 1
  },
  "cooking": {
    "lang" : "Cooking",
    "count": 34034,
    "composite_intellegence": 119.403284623504,
    "composite_community": 265,
    "view_count": 0, 
    "scores_to_views": 0, 
    "linguistics_data": {
      "word_count": 115, 
      "reading_level": 7.783406524185096, 
      "min_age": 12
    }, 
    "answer_count": 0, 
    "percentage_answered": 0, 
    "score": 0, 
    "favorite_count": 0
  }
}
      
      var readingLevels = d3.values(readingLevelsJ);

      var drag = d3.behavior.drag()
        .origin(function(d) { return d; })
        .on("dragstart", dragstarted)
        .on("drag", dragged)
        .on("dragend", dragended);

      var zoom = d3.behavior.zoom()
        .scaleExtent([1, 6])
        .on("zoom", zoomed);

      function zoomed(d) {

        //console.log(d3.event.scale)

        mx = d3.mouse(this)[0];
        my = d3.mouse(this)[1];

        //ZOOM
        scaleX = d3.scale.linear().domain([minRl, maxRl]).range([50,(width-50)*d3.event.scale]);
        svg.selectAll(".gc").selectAll("circle").attr("cx", function(d) { return scaleX(d.composite_intellegence) + (mx/((maxPop / d.count)*parralaxIntensity)); });
        //svg.selectAll(".gc").selectAll("circle").attr("cy", function(d) { return scaleY(d.composite_community) + (my/((maxPop / d.count)*parralaxIntensity)); });
        svg.selectAll(".gc").selectAll("text").attr("x", function(d) { return scaleX(d.composite_intellegence) + (mx/((maxPop / d.count)*parralaxIntensity)); });
        //svg.selectAll(".gc").selectAll("text").attr("y", function(d) { return scaleY(d.composite_community) + (my/((maxPop / d.count)*parralaxIntensity)) + 5; });
        //console.log(d3.event.translate[0]);
        svg.selectAll(".ax").attr("transform",  "translate(" + d3.event.translate[0] + ", " + height/2 + ")");
        svg.selectAll(".gc").selectAll("circle").attr("transform", "translate(" + d3.event.translate[0] + ")");
        svg.selectAll(".gc").selectAll("text").attr("transform", "translate(" + d3.event.translate[0] + ")");
        xAxis = d3.svg.axis().scale(scaleX).ticks(10);
        svg.select(".ax").call(xAxis)
      }

      function reset() {
        zoom.translate([0,0]).scale(1);

        $(".slider").val([15,90]);

        scaleR = d3.scale.linear().domain([minPop,maxPop]).range([15,90]);
        svg.selectAll("circle").attr("r", function(d) { return scaleR(d.count); })

        scaleX = d3.scale.linear().domain([minRl,maxRl]).range([70,width-70]);

        svg.select(".ax").transition().attr("transform", "translate(0," + height/2 + ")");
        xAxis = d3.svg.axis().scale(scaleX).ticks(10);
        svg.select(".ax").call(xAxis);

        svg.selectAll(".gc").selectAll("circle").transition().attr("transform", "translate(0,0)");
        svg.selectAll(".gc").selectAll("text").transition().attr("transform", "translate(0,0)");

        svg.selectAll(".gc").selectAll("circle").attr("cx", function(d) { return scaleX(d.composite_intellegence) + ((width-125)/((maxPop / d.count)*parralaxIntensity)); });
        svg.selectAll(".gc").selectAll("circle").attr("cy", function(d) { return scaleY(d.composite_community) + ((height-25)/((maxPop / d.count)*parralaxIntensity)); });
        svg.selectAll(".gc").selectAll("text").attr("x", function(d) { return scaleX(d.composite_intellegence) + ((width-125)/((maxPop / d.count)*parralaxIntensity)); });
        svg.selectAll(".gc").selectAll("text").attr("y", function(d) { return scaleY(d.composite_community) + ((height-25)/((maxPop / d.count)*parralaxIntensity)) + 5; });

      }

      function dragstarted(d) {
        d3.event.sourceEvent.stopPropagation();
        d3.select(this).classed("dragging", true);
      }

      function dragged(d) {}

      function dragended(d) {
        d3.select(this).classed("dragging", false);
      }

      //EDIT THIS
      var width = $(window).width(),
      height = $(window).height();

      var parralaxIntensity = 25;

      //XAXIS - RL
      //YAXIS - ACT
      //RADIUS - POP
      //COLOR - POP
      var minRl = readingLevels[0].composite_intellegence, maxRl = readingLevels[0].composite_intellegence, minPop = readingLevels[0].count, maxPop = readingLevels[0].count, minAct = readingLevels[0].composite_community, maxAct = readingLevels[0].composite_community;
      //var minRl = readingLevels[0].composite_intelligence, maxRl = readingLevels[0].composite_intelligence, minPop = readingLevels[0].count, maxPop = readingLevels[0].count, minAct = readingLevels[0].composite_community, maxAct = readingLevels[0].composite_community;

      for (x = 0; x < readingLevels.length; x++) {
        minRl = Math.min(minRl, readingLevels[x].composite_intellegence);
        maxRl = Math.max(maxRl, readingLevels[x].composite_intellegence);
        minPop = Math.min(minPop, readingLevels[x].count);
        maxPop = Math.max(maxPop, readingLevels[x].count);
        minAct = Math.min(minAct, readingLevels[x].composite_community);
        maxAct = Math.max(maxAct, readingLevels[x].composite_community);
      }

      var scaleX = d3.scale.linear().domain([minRl,maxRl]).range([70,width-70]);
      var scaleY = d3.scale.linear().domain([minAct,maxAct]).range([height-70,70]);
      var scaleC = d3.scale.linear().domain([minPop,maxPop]).range(["#E86B24","#E85400"])
      var scaleR = d3.scale.linear().domain([minPop,maxPop]).range([15,90]);

      $(".slider").on('slide', function() {
        scaleR = d3.scale.linear().domain([minPop,maxPop]).range([$(".slider").val()[0],$(".slider").val()[1]]);
        svg.selectAll("circle").attr("r", function(d) { return scaleR(d.count); })
      })

      var rMin, rMax;

      var color = d3.scale.category10();

      zoom.x(scaleX);

      var force = d3.layout.force()
          .gravity(0.25)
          .charge(function(d, i) { return i ? 0 : -2000; })
          .nodes(readingLevels)
          .size([width, height]);

      force.start();

      var svg = d3.select("body").append("svg")
          .attr("id", "svg_main")
          .attr("width", width)
          .attr("height", height)
          .attr("class", "bubble")
          .call(zoom);

      xAxis = d3.svg.axis().scale(scaleX).ticks(10);
      svg.append("g").attr("class","ga gx").append("g").attr("class", "axis ax").attr("width", width).attr("height", 10).attr("transform", "translate(0," + height/2 + ")").call(xAxis);
      svg.call(drag);
      svg.selectAll(".gx").attr("class", "gat gatx").append("text").text("Reading Level").attr("transform", "translate(50," + (height/2) + ")");

      yAxis = d3.svg.axis().scale(scaleY).ticks(10).orient("left");
      svg.append("g").attr("class","ga gy").append("g").attr("class", "axis ay").attr("width", width).attr("height", 10).attr("transform", "translate(" + width/2 + ",0)").call(yAxis);
      svg.selectAll(".gy").attr("class", "gat gaty").append("text").text("Community Activity").attr("transform", "translate(" + (width/2) + ",50) rotate(90)");

      svg.selectAll(".gc")
          .data(readingLevels)
          .enter().append("g")
          .attr("class", "gc")
          .append("circle")
          .attr("r", function(d) { /*console.log(d);*/ d.radius = scaleR(d.count); return scaleR(d.count); })
          .style("fill", function(d){ 
            if (d.lang == "Cooking") {
              return "#3CB5DE";
            }
            else {
              return scaleC(d.count); 
            }
          })
          .style("stroke", "rgba(0,0,128,0.5)")

      svg.selectAll(".gc")
          .append("text")
          .text(function(d) { return d.lang; })
          .attr("text-anchor", "middle")
          .attr("x", function(d) { return scaleX(d.composite_intellegence); })
          .attr("y", function(d) { return scaleY(d.composite_community)+5; })


      svg.selectAll("circle")
          .attr("class","n")
          .attr("cx", function(d) { return scaleX(d.composite_intellegence); })
          .attr("cy", function(d) { return scaleY(d.composite_community); })

      svg.selectAll(".gc")
          .tooltip(function(d, i) {
            var r;
            r = +d3.select(this).attr('r');
            var div = d3.select(document.createElement("div")).append("p").text("Reading Level: " + Math.round(d.composite_intellegence))
            div.append("p").text("Popularity: " + Math.round(d.count))
            div.append("p").text("Community Involvement: " + Math.round(d.composite_community))
            var posX = width - 280;
            if (d.composite_intellegence > (minRl+((maxRl - minRl)/2))) { posX = 50; }
            else if (d.composite_intellegence < (minRl+((maxRl-minRl)/2))) { posX = width - 280; }
            return {
              type: "popover",
              title: d.lang,
              content: div,
              detection: "shape",
              placement: "fixed",
              gravity: "down",
              position: [posX, height - 180],
              displacement: [0,0],
              mousemove: false
            };
          });


      force.on("tick", function(e) {
        var q = d3.geom.quadtree(readingLevels),
            i = 0,
            n = readingLevels.length;

        //while (++i < n) q.visit(collide(readingLevels[i]));

        //svg.selectAll("circle")
        //    .attr("cx", function(d) { return scaleX(d.composite_intelligence); })
        //    .attr("cy", function(d) { return scaleY(d.composite_community); });
      });

      svg.on("mousemove", function(e) {
        mx = d3.mouse(this)[0];
        my = d3.mouse(this)[1];

        svg.selectAll(".gc").selectAll("circle").attr("cx", function(d) { return scaleX(d.composite_intellegence) + (mx/((maxPop / d.count)*parralaxIntensity)); });
        svg.selectAll(".gc").selectAll("circle").attr("cy", function(d) { return scaleY(d.composite_community) + (my/((maxPop / d.count)*parralaxIntensity)); });
        svg.selectAll(".gc").selectAll("text").attr("x", function(d) { return scaleX(d.composite_intellegence) + (mx/((maxPop / d.count)*parralaxIntensity)); });
        svg.selectAll(".gc").selectAll("text").attr("y", function(d) { return scaleY(d.composite_community) + (my/((maxPop / d.count)*parralaxIntensity)) + 5; });

        /*
        var p1 = d3.mouse(this);
        root.px = p1[0];
        root.py = p1[1];
        force.resume();
        */
      });
      

      function collide(node) {
        var r = node.radius + 16,
            nx1 = node.x - r,
            nx2 = node.x + r,
            ny1 = node.y - r,
            ny2 = node.y + r;
        return function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== node)) {
            var x = node.x - quad.point.x,
                y = node.y - quad.point.y,
                l = Math.sqrt(x * x + y * y),
                r = node.radius + quad.point.radius;
            if (l < r) {
              l = (l - r) / l * .5;
              node.x -= x *= l;
              node.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        };
      }

      //DROPDOWN CODE
      var languages = ["C#", "Java", "Javascript", "PHP", "Python", "C++", ".NET", "HTML/CSS", "Objective-C", "C", "Ruby", "Perl", "Delphi", "Scala", "Haskell", "Lisp"];

      d3.select(".dropdown-menu").selectAll("li").data(languages).enter().append("li").append("a").attr("id", function(d) { return d; }).attr("tabindex", "-1").attr("href", "#").text(function(d) { return d; });

  svg.selectAll('circle').on('click', function(d) {
    lang_name = d.lang;
    $('#svg_main').slideToggle();
    loadPage(lang_name);
    $("#lang-info").slideToggle();
    $("#help-btn").fadeOut();
    $("#reset-btn").fadeOut();
    $(".slider").fadeOut();
    //console.log($("#lang-name"))
    toggleLangInfoMode();
  });


  //Set things up
  $(".slider").noUiSlider({
    start: [25,90],
    margin: 1,
    orientation: 'vertical',
    direction: "rtl",
    connect: true,
    range: {
      'min': 1,
      'max': 120
    }
  });
  $(".reset").click(reset);
  $(".dropdown-menu").dropdown();

function toggleLangInfoMode() {
    app.lang_info_mode = !app.lang_info_mode;
}

function loadPage(lang_name) {
  $("#lang-name").text(lang_name);
  lang_data = readingLevelsJ[lang_name];
  $("#dropdown-btn .title_place").text(lang_name);

  $(".drep").each(function()  {
    $(this).text(lang_data[$(this).attr("alt")])
  });

  $(".drup").each(function()  {
    $(this).text(lang_data["linguistics_data"][$(this).attr("alt")])
  });

}

$(document).ready(function() {
    $('#lang-menu a').click(function() {
        //CASE: FROM INFO TO HYBRID
        if (app.lang_info_mode && $(this).attr("id") == 'Hybrid View') {
          $('#svg_main').slideToggle();
          $('#lang-info').slideUp();
          $("#reset-btn").fadeIn();
          $(".slider").fadeIn();
          $("#help-btn").fadeIn();
          $(".title_place").text("Hybrid View");
          toggleLangInfoMode();
        }
        //CASE: FROM INFO TO INFO
        else if (app.lang_info_mode) {
          lang_name = $(this).attr("id");
          $("#lang-data-cont").fadeOut("fast",function() { loadPage(lang_name) });
          $("#lang-data-cont").fadeIn();
        }
        //CASE: FROM HYBRID TO HYBRID
        else if ($(".title_place").text() == "Hybrid View" && $(this).attr("id") == "Hybrid View") {}
        //CASE: FROM HYBRID TO INFO
        else {
          lang_name = $(this).attr('id');
          $('#svg_main').slideToggle();
          loadPage(lang_name);
          $("#lang-info").slideToggle();
          $("#help-btn").fadeOut();
          $("#reset-btn").fadeOut();
          $(".slider").fadeOut();
          toggleLangInfoMode();
        }
    });
});



/////////////////
//SVG #2
/////////////////

var svg2 = d3.select("#svg_place")
            .append('svg')
            .attr("id", "svg2")
            .attr("width", width)
            .attr("height", 220)

var scaleX2 = d3.scale.linear().domain([0,1]).range([0,width]);
var scaleC2 = d3.scale.linear().domain([0,10]).range(["#E8C1AC","#E8712E"]);

function parseKey(k) {
  var big = d3.entries(readingLevels);
  var rec = [];
  var total = 0;

  $.each(readingLevels, function(index, value) {
    //rec.lang = value.lang;
    var lang = value[lang];
    rec.push({"lang": value["lang"], "v": value[k]});
    total += value[k];
  });

  rec.push({ "lang": "total", "v": total });

  return rec;
}

function parseKeyL(k) {
  var big = d3.entries(readingLevels);
  var rec = [];
  var total = 0;

  $.each(readingLevels, function(index, value) {
    //rec.lang = value.lang;
    var lang = value[lang];
    rec.push({"lang": value["lang"], "v": value.linguistics_data[k]});
    total += value.linguistics_data[k];
  });

  rec.push({ "lang": "total", "v": total });

  return rec;
}

var dmin, dmax;

Array.prototype.sortByProp = function(p){
 return this.sort(function(a,b){
  return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
 });
}

$(".dg").click(function() {

  svg2.selectAll(".bgg").remove();
  var arr;
  var key = $(this).attr("alt");

  if ( key == "reading_level" || key == "word_count" || key == "min_age" ) {
    arr = parseKeyL(key);
  }
  else {
    arr = parseKey(key);
  }

  arr.sortByProp("v");
  console.log(arr);

  dmin = arr[0].v;
  dmax = arr[0].v;

  for (x = 0; x < arr.length-1; x++) {
        dmin = Math.min(dmin, arr[x].v);
        dmax = Math.max(dmax, arr[x].v);
  }

  console.log(dmin)
  console.log(dmax)

  var scaleC2 = d3.scale.linear().domain([dmin,dmax]).range(["#E8D9D1","#E86317"]);

  var total = arr.pop();
  var inc = 0;

  svg2.selectAll(".r2")
      .data(arr)
      .enter()
      .append("g")
      .attr("class", "bgg")
      .append("rect")
      .attr("class", "r2")
      .attr("height", "110")
      .attr("y","130")
      .attr("x", function(d) {
        var x = inc;
        inc += (scaleX2(d.v/total.v));

        d.x = x;
        return x;
      })
      .attr("width", function(d) {

        d.width = scaleX2(d.v/total.v)
        return d.width;
      })
      .attr("fill", function(d) {
        return scaleC2(d.v);
      })
      .on("mouseover", function(d) {
        d3.select(this).transition().attr("y","100").attr("height", "120");
        d3.select(this.parentNode).select("text").transition().attr("transform", function(d) { return  "translate(" + Math.round(d.x + (d.width/2)) + ", " + (90) + ") rotate(290)"})
      })
      .on("mouseout", function(d) {
        d3.select(this).transition().attr("y","130").attr("height", "90");
        d3.select(this.parentNode).select("text").transition().attr("transform", function(d) { return  "translate(" + Math.round(d.x + (d.width/2)) + ", " + (120) + ") rotate(290)"})
      })

  svg2.selectAll(".r2")
      .transition()
      .attr("y", "130")
      .attr("height", "110")

  svg2.selectAll(".bgg")
      .append("text")
      .attr("class","bggt")
      .text(function(d) {
        return d.lang;
      })
      .attr("transform", function(d) {
        return "translate(" + Math.round(d.x + (d.width/2)) + ", 120) rotate(290)";
      })
})









