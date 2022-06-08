import { events } from "../events.js";
import { _uuid } from "./uuid.js";
import { EventManager } from "../eventManager.js";
import { Point } from "./point.js";

/**
 * @class Triangle
 */

class Triangle {

  constructor( uuid, x1 = 0, y1 = 0, x2 = 5, y2 = 5, x3 = 10, y3 = 10)
  {

    this.uuid = uuid;

    this.x1 = x1;
    this.y1 = y1;

    this.x2 = x2;
    this.y2 = y2;

    this.x3 = x3;
    this.y3 = y3;

    this.events = new EventManager();

    this.c_svg = "";
    this.type = "triangle";

    this.children = [];

    this.offsetX = 0;
    this.offsetY = 0;

    this.scaleX = 0;
    this.scaleY = 0;

    this.angle = 0;
    this.centerX = 0;
    this.centerY = 0;

    this.c_points = [
      new Point(this.uuid,0, 0 ),
      new Point(this.uuid,0, 0 ),
      new Point(this.uuid,0, 0 ),
      new Point(this.uuid,0, 0 ),
    ];

    this.vertex = [
        new Point(this.uuid,0, 0 ),
        new Point(this.uuid,0, 0 ),
        new Point(this.uuid,0, 0 ),
        new Point(this.uuid,0, 0 ),
    ];
  }

  setOffsetX(x){
    this.offsetX = x;
  }

  setOffsetY(y){
    this.offsetY = y;
  }

  setScaleX(x){
    this.scaleX = x;
  }

  setScaleY(y){
    this.scaleY = y;
  }

  getOffsetX(){
    return this.offsetX;
  }

  getOffsetY(){
    return this.offsetY;
  }

  getScaleX(){
    return this.scaleX;
  }

  getScaleY(){
    return this.scaleY;
  }

  setRotateCenter(centerX, centerY){
    this.centerX = centerX;
    this.centerY = centerY;
  }

  setRotateAngle(angle){
    this.angle = angle;
  }

  drawVertex(){
    if(this.vertex.length == 0)
      return;
  }

  drawConnector() {
    if(this.c_points.length == 0)
      return;
  }

  drawBox(){
  }


  draw(svg) {
    this.c_svg = document.createElementNS(ns, "path");

    this.redraw();

    this.c_svg.setAttribute("id", this.uuid);
    this.c_svg.setAttribute("d", this.p);
    this.c_svg.setAttributeNS(null, "stroke", "darkviolet");
    this.c_svg.setAttributeNS(null, "stroke-width", "2px");
    this.c_svg.setAttribute("fill", "lavenderblush");


    svg.appendChild(this.c_svg);

    this.events.add(this.c_svg, "mousedown", events.mouseDownCb);
    this.events.add(this.c_svg, "mouseup", events.mouseUpCb);

    this.events.create();
  }

  shift(dx, dy) {
    this.x1 += dx;
    this.y1 += dy;

    this.x2 += dx;
    this.y2 += dy;

    this.x3 += dx;
    this.y3 += dy;

    this.c_points.map((p) => {
      p.shift(dx, dy);
    });

    this.vertex.map((v) => {
      v.shift(dx, dy);
    });
  }



  redraw() {
    if(this.angle != 0){
      var _x1, _x2, _x3, _y1, _y2, _y3, _x, _y, dx, dy;

      _x1 = this.x1  * Math.cos(this.angle) - this.y1   * Math.sin(this.angle) ;
      _y1 = this.x1  * Math.sin(this.angle) + this.y1   * Math.cos(this.angle) ;

      _x2 = this.x2   * Math.cos(this.angle) - this.y2   * Math.sin(this.angle) ;
      _y2 = this.x2   * Math.sin(this.angle) + this.y2   * Math.cos(this.angle) ;

      _x3 = this.x3    * Math.cos(this.angle) - this.y3  * Math.sin(this.angle);
      _y3 = this.x3    * Math.sin(this.angle) + this.y3  * Math.cos(this.angle);

      _x = this.centerX  * Math.cos(this.angle) - this.centerY   * Math.sin(this.angle);
      _y = this.centerX  * Math.sin(this.angle) + this.centerY   * Math.cos(this.angle);

      dx = _x - this.centerX;
      dy = _y - this.centerY;

      this.p = "M " + (_x1 - dx + this.offsetX) +  "," + (_y1 - dy + this.offsetY) + " " + "L " + (_x2 - dx + this.offsetX) + "," + (_y2 - dy + this.offsetY) + " " + "L " + (_x3 - dx + this.offsetX) + "," + (_y3 - dy + this.offsetY) + " Z";
    }
    else
      this.p = "M " + (this.x1 + this.offsetX) +  "," + (this.y1 + this.offsetY) + " " + "L " + (this.x2 + this.offsetX) + "," + (this.y2 + this.offsetY) + " " + "L " + (this.x3 + this.offsetX) + "," + (this.y3 + this.offsetY) + " Z";

  this.c_svg.setAttribute("d", this.p);
  }

  resize(pos, dx, dy) {
      if (pos == 0) {
        this.x1 = dx;
        this.y1 = dy;
        this.vertex[0].x = dx;
        this.vertex[0].y = dy;
      }
      else if (pos == 1) {
        this.x2 = dx;
        this.y2 = dy;
        this.vertex[1].x = dx;
        this.vertex[1].y = dy;
      }
      else if (pos == 2) {
        this.x3 = dx;
        this.y3 = dy;
        this.vertex[2].x = dx;
        this.vertex[2].y = dy;
      }
  }
}
export { Triangle };
