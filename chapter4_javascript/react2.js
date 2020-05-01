var t0 = 0;
        var t1 = 0;

        generateElement();        

        document.getElementById("dvReact").onclick = function() {
            t1 = performance.now()
            document.getElementById("your_time").innerHTML = "Your time:  " + ((t1-t0)/1000).toFixed(3) + "s";
            generateElement();
        }


        function generateElement() {
            t0 = performance.now()
            var colours = ["red","green","blue","yellow","magenta"];
            var roundings = [0, 50];
            sizes = document.getElementById("playground").getBoundingClientRect();
            var width = Math.random()*150 + 30; //width,height in pixels
            var y_top = sizes.y;
            var y_bottom = y_top + sizes.height;
            var tp = Math.random()*(y_bottom - width - y_top) + y_top; //top positioin

            var x_left = sizes.x;
            var x_right = x_left + sizes.width;
            var lt = Math.random()*(x_right-width); //left position

            var dv = document.getElementById("dvReact");
            dv.style.width = width + "px";
            dv.style.height = width + "px";
            dv.style.backgroundColor = colours[Math.floor(Math.random()*5)];
            dv.style.position = "absolute";
            dv.style.top = tp + "px";
            dv.style.left = lt + "px";
            dv.style.margin = "0";
            dv.style.padding = "0";
            dv.style.borderRadius = roundings[Math.floor(Math.random()*3)] + "%";

        }