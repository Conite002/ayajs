var test = require("tape");
const Circle = require("../src/entities/circle");
const uuid = require("../src/maths/uuid");


test("class circle instanciation", (t) => {
    var c = new Circle(uuid.generate());

    t.equal(c.x, 0);
    t.equal(c.y, 0);
    t.equal(c.r, 5);
    t.end();
});

test("class circle instanciation with specific parameters", (t) => {
    var c = new Circle(uuid.generate(), 2, 3, 6);

    t.equal(c.x, 2);
    t.equal(c.y, 3);
    t.equal(c.r, 6);
    t.end();
});

