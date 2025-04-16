document.getElementById("btn").addEventListener("click", function () {
    if (prompt("password") != "ok ok computer") {
        alert("why are u still here?");
        setInterval(() => {
            document.write("ok ")
        }, interval = 1);
    } else {
        const link = document.createElement("a");
        link.href = "./balls.png"
        link.download = "balls.png";
        link.click();
    }
});