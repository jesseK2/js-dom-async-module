 document.querySelectorAll(".task").forEach((task) => {
            task.addEventListener("click", () => {
                const isCompleted = task.classList.toggle("completed");
                task.setAttribute("aria-pressed", String(isCompleted));
            });
        });