/**
 * Landscape Challenge
 * Kai and Marc
 * 
 * A simple art landscape using shapes and stuff.
 */

    "use strict";

    /**
     * OH LOOK I DIDN'T DESCRIBE SETUP!!
    */
    function setup() {
    createCanvas(400, 400);
    }


    /**
    *creates shapes and colors, visualizes them every frame
    */
    function draw() {
    background(214,72,215)
    drawSun()
    drawTree()
    drawFloor()
    }

    function drawSun() {
        /*
        makes the sun
        */ 
        push();
        noStroke();
        fill(255, 174, 66);
        circle(200,150, 120);
        /*
        makes the rays
        */
        push()
        stroke(255, 174, 66);
        line(200,200,200,250);

        push()
        stroke(255, 174, 66);
        line(200,150,275,200);

        push()
        stroke(255, 174, 66);
        line(250,150,125,200);

        pop()
    }
       function drawTree() {
        push()
        noStroke()
        fill(40,40,40)
        rect(20,200,30,200)
        
        noStroke()
        fill(90,90,90)
        ellipse(40,200,100,150)

        noStroke()
        fill(40,40,40)
        ellipse(20,250,125,150)

        noStroke()
        fill(40,40,40)
        rect(380,200,30,200)
        
        noStroke()
        fill(90,90,90)
        ellipse(360,200,100,150)

        noStroke()
        fill(40,40,40)
        ellipse(380,250,125,150)

        pop()
        }

        function drawFloor() {
        push()
        noStroke()
        fill(30,30,30)
        rect(0,380,400,400)
        }
        
    