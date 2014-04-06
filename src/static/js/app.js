var app = app || {};
app.lang_info_mode = false;

var readingLevels2 = [
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

var readingLevelsJ = {
  "c": {
    "lang" : "C",
    "count": 3225, 
    "view_count": 8221, 
    "scores_to_views": 0.002534662314520269, 
    "answer_count": 5, 
    "composite_community": 118, 
    "composite_intellegence": 119.54814041670357, 
    "score": 12, 
    "linguistics_data": {
      "word_count": 99, 
      "reading_level": 7.797892103505052, 
      "min_age": 12
    }, 
    "favorite_count": 6
  }, 
  "javascript": {
    "lang" : "Javascript",
    "count": 7650, 
    "view_count": 15073, 
    "scores_to_views": 0.00172323187812757, 
    "answer_count": 4, 
    "composite_community": 145, 
    "composite_intellegence": 119.38393205260176, 
    "score": 18, 
    "linguistics_data": {
      "word_count": 96, 
      "reading_level": 7.7814712670948705, 
      "min_age": 12
    }, 
    "favorite_count": 7
  }, 
  "java": {
    "lang" : "Java",
    "count": 11216, 
    "view_count": 10444, 
    "scores_to_views": 0.0019592529674519747, 
    "answer_count": 4, 
    "composite_community": 105, 
    "composite_intellegence": 124.2714543030111, 
    "score": 11, 
    "linguistics_data": {
      "word_count": 102, 
      "reading_level": 8.270223492135804, 
      "min_age": 12
    }, 
    "favorite_count": 4
  }, 
  "scala": {
    "lang" : "Scala",
    "count": 94, 
    "view_count": 5836, 
    "scores_to_views": 0.004561952105656086, 
    "answer_count": 4, 
    "composite_community": 135, 
    "composite_intellegence": 131.04334366651534, 
    "score": 18, 
    "linguistics_data": {
      "word_count": 93, 
      "reading_level": 8.417117708548346, 
      "min_age": 13
    }, 
    "favorite_count": 7
  }, 
  "c#": {
    "lang" : "C#",
    "count": 23394, 
    "view_count": 6958, 
    "scores_to_views": 0.0021406659787143807, 
    "answer_count": 4, 
    "composite_community": 91, 
    "composite_intellegence": 123.31297313285756, 
    "score": 9, 
    "linguistics_data": {
      "word_count": 102, 
      "reading_level": 8.174375375120452, 
      "min_age": 12
    }, 
    "favorite_count": 3
  }, 
  "delphi": {
    "lang" : "Delphi",
    "count": 1432, 
    "view_count": 2959, 
    "scores_to_views": 0.00249317314887982, 
    "answer_count": 4, 
    "composite_community": 62, 
    "composite_intellegence": 122.7889219659405, 
    "score": 4, 
    "linguistics_data": {
      "word_count": 106, 
      "reading_level": 8.121970258428744, 
      "min_age": 12
    }, 
    "favorite_count": 2
  }, 
  ".net": {
    "lang" : ".NET",
    "count": 8536, 
    "view_count": 4098, 
    "scores_to_views": 0.002875171635921586, 
    "answer_count": 3, 
    "composite_community": 64, 
    "composite_intellegence": 132.91993380295503, 
    "score": 6, 
    "linguistics_data": {
      "word_count": 107, 
      "reading_level": 8.604776722192318, 
      "min_age": 13
    }, 
    "favorite_count": 2
  }, 
  "c++": {
    "lang" : "C++",
    "count": 6915, 
    "view_count": 6768, 
    "scores_to_views": 0.0023467843311853255, 
    "answer_count": 4, 
    "composite_community": 91, 
    "composite_intellegence": 121.67075549070994, 
    "score": 9, 
    "linguistics_data": {
      "word_count": 103, 
      "reading_level": 8.010153610905688, 
      "min_age": 12
    }, 
    "favorite_count": 4
  }, 
  "perl": {
    "lang" : "Perl",
    "count": 1214, 
    "view_count": 5423, 
    "scores_to_views": 0.0038150455497005173, 
    "answer_count": 4, 
    "composite_community": 80, 
    "composite_intellegence": 117.6810831243357, 
    "score": 7, 
    "linguistics_data": {
      "word_count": 101, 
      "reading_level": 7.611186374268264, 
      "min_age": 12
    }, 
    "favorite_count": 2
  }, 
  "lisp": {
    "lang" : "Lisp",
    "count": 209, 
    "view_count": 4321, 
    "scores_to_views": 0.005804286255235193, 
    "answer_count": 6, 
    "composite_community": 149, 
    "composite_intellegence": 123.77599530876341, 
    "score": 17, 
    "linguistics_data": {
      "word_count": 101, 
      "reading_level": 8.220677592711036, 
      "min_age": 12
    }, 
    "favorite_count": 7
  }, 
  "objective-c": {
    "lang" : "Objective-C",
    "count": 1871, 
    "view_count": 10738, 
    "scores_to_views": 0.001689857485742474, 
    "answer_count": 3, 
    "composite_community": 110, 
    "composite_intellegence": 123.66286258467484, 
    "score": 14, 
    "linguistics_data": {
      "word_count": 91, 
      "reading_level": 8.209364320302178, 
      "min_age": 12
    }, 
    "favorite_count": 9
  }, 
  "haskell": {
    "lang" : "Haskell",
    "count": 207, 
    "view_count": 3302, 
    "scores_to_views": 0.005900362724483764, 
    "answer_count": 4, 
    "composite_community": 118, 
    "composite_intellegence": 131.1099120463369, 
    "score": 15, 
    "linguistics_data": {
      "word_count": 103, 
      "reading_level": 8.423774546530504, 
      "min_age": 13
    }, 
    "favorite_count": 6
  }, 
  "html/css": {
    "lang" : "HTML/CSS",
    "count": 3795, 
    "view_count": 13661, 
    "scores_to_views": 0.001953329133703881, 
    "answer_count": 4, 
    "composite_community": 118, 
    "composite_intellegence": 108.90689424604223, 
    "score": 13, 
    "linguistics_data": {
      "word_count": 97, 
      "reading_level": 7.242402155213283, 
      "min_age": 11
    }, 
    "favorite_count": 5
  }, 
  "python": {
    "lang" : "Python",
    "count": 6104, 
    "view_count": 10317, 
    "scores_to_views": 0.002760325801227443, 
    "answer_count": 4, 
    "composite_community": 135, 
    "composite_intellegence": 120.74531100439498, 
    "score": 17, 
    "linguistics_data": {
      "word_count": 98, 
      "reading_level": 7.917609162274192, 
      "min_age": 12
    }, 
    "favorite_count": 8
  }, 
  "php": {
    "lang" : "PHP",
    "count": 6937, 
    "view_count": 7113, 
    "scores_to_views": 0.0017600490272249637, 
    "answer_count": 4, 
    "composite_community": 82, 
    "composite_intellegence": 118.53558747160423, 
    "score": 7, 
    "linguistics_data": {
      "word_count": 100, 
      "reading_level": 7.696636808995118, 
      "min_age": 12
    }, 
    "favorite_count": 3
  }, 
  "ruby": {
    "lang" : "Ruby",
    "count": 2427, 
    "view_count": 5577, 
    "scores_to_views": 0.0030439568212386053, 
    "answer_count": 3, 
    "composite_community": 85, 
    "composite_intellegence": 119.14919580662851, 
    "score": 10, 
    "linguistics_data": {
      "word_count": 90, 
      "reading_level": 7.757997642497545, 
      "min_age": 12
    }, 
    "favorite_count": 4
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

        $(".slider").val([25,90]);

        scaleR = d3.scale.linear().domain([minPop,maxPop]).range([25,90]);
        svg.selectAll("circle").attr("r", function(d) { return scaleR(d.count); })

        scaleX = d3.scale.linear().domain([minRl,maxRl]).range([50,width-50]);

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

      var scaleX = d3.scale.linear().domain([minRl,maxRl]).range([50,width-50]);
      var scaleY = d3.scale.linear().domain([minAct,maxAct]).range([height-50,50]);
      var scaleC = d3.scale.linear().domain([minPop,maxPop]).range(["#E86B24","#E85400"])
      var scaleR = d3.scale.linear().domain([minPop,maxPop]).range([25,90]);

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
          .style("fill", function(d){ return scaleC(d.count); })
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
  $('#lang-name').text(lang_name);
  $("#dropdown-btn .title_place").text(lang_name);


}

$(document).ready(function() {
    $('#lang-menu a').click(function() {
        if (app.lang_info_mode && $(this).attr("id") == 'Hybrid View') {
          $('svg').slideToggle();
          $('#lang-info').slideToggle();
          $("#reset-btn").fadeIn();
          $(".slider").fadeIn();
          toggleLangInfoMode();
        }
        else if (app.lang_info_mode) {
          lang_name = $(this).attr("id");
          $("#lang-data-cont").fadeOut("fast",function() { loadPage(lang_name) });
          $("#lang-data-cont").fadeIn();
        }
        else {
          lang_name = $(this).attr('id');
          $('svg').slideToggle();
          loadPage(lang_name);
          $("#lang-info").slideToggle();
          $("#reset-btn").fadeOut();
          $(".slider").fadeOut();
          toggleLangInfoMode();
        }
    });
});
