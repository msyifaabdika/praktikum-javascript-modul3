let display = document.getElementById("display");

// Fungsi untuk menambahkan karakter (angka/operator) ke layar
const appendCharacter = (char) => {
    if (display.value === "0" && char !== '.') {
        display.value = char;
    } else {
        display.value += char;
    }
};

// Fungsi untuk mereset layar menjadi 0
const clearDisplay = () => {
    display.value = "0";
};

// Fungsi untuk menghitung hasil ekspresi matematika
const calculate = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
};