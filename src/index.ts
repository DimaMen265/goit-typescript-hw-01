const button = document.querySelector("button");
const input = document.querySelector("input");

const concatenation = (firstWord: string, secondWord: string) => {
    alert(`${firstWord}, ${secondWord}!`);
};

if (button && input) {
    button.addEventListener("click", () => {
        concatenation("Hello", input.value);
    });
};
