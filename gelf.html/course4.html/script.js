let isTracking = false;
let trackableObject = document.getElementById("trackable-object");
let demoArea = document.getElementById("tracking-demo");

function startTracking() {
    isTracking = true;
    alert("You can now drag the red box to track the object.");
}

trackableObject.addEventListener('mousedown', function(event) {
    if (!isTracking) return;
    
    let offsetX = event.clientX - trackableObject.offsetLeft;
    let offsetY = event.clientY - trackableObject.offsetTop;
    
    function onMouseMove(moveEvent) {
        let newX = moveEvent.clientX - offsetX;
        let newY = moveEvent.clientY - offsetY;

        // Prevent the object from being dragged outside the demo area
        newX = Math.max(0, Math.min(demoArea.clientWidth - trackableObject.offsetWidth, newX));
        newY = Math.max(0, Math.min(demoArea.clientHeight - trackableObject.offsetHeight, newY));

        trackableObject.style.left = newX + "px";
        trackableObject.style.top = newY + "px";
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
