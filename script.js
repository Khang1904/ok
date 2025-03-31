const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    // Use setInterval to repeatedly execute the task
    const intervalId = setInterval(() => {
        document.writeln("ok");
    }, 1);
});