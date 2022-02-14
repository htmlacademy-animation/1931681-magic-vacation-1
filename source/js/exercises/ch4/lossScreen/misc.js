function getSize() {
    return Math.min(window.innerWidth, window.innerHeight);
}

function getCoord(coord) {
    return coord / getSize();
}

function getPosition(ratio) {
    return ratio * getSize();
}

function linearBezier(t, v1, v2) {
    return (1 - t) * v1 + t * v2;
}

function linearBezierPoint(t, p1, p2) {
    return {
        x: linearBezier(t, p1.x, p2.x),
        y: linearBezier(t, p1.y, p2.y)
    }
}

function quadraticBezier(t, v1, v2, v3) {
    return (
        Math.pow((1 - t), 2) * v1 +
        2 * (1 - t) * t * v2 +
        Math.pow(t, 2) * v3
    );
}

function quadraticBezierPoint(t, p1, p2, p3) {
    return {
        x: quadraticBezier(t, p1.x, p2.x, p3.x),
        y: quadraticBezier(t, p1.y, p2.y, p3.y)
    }
}

export {
    getSize,
    getPosition,
    linearBezier,
    linearBezierPoint,
    quadraticBezier,
    quadraticBezierPoint
}