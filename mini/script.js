function myFirstApp(name, age) {
    alert("Привет, меня зовут " + name + " и это моя первая прога!");

    function showSkills() {
        let skills = ["html", "css", "sass", "scss", "js"];
        for (let i = 0; i < skills.length; i++) {
            console.log("Я владею " + skills[i]);
        }
    }

    showSkills();

    function checkAge() {
        if (age > 18) {
            console.log("Какой ты молодец, все получится!");
        } else {
            console.log("Ого, рановато ты!");
        }
    }

    checkAge();

    function calcPow(num) {
        return num*num;
    }
    console.log(calcPow(5));
}

myFirstApp("Dima", 17);