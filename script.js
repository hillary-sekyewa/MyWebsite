function sayHello(person) {
    document.getElementById("message").textContent = "Hello " + person + "!";
}
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you! Your message has been received.");
    });
}
let name = "Hillary";
let hobbies = ["Football", "Music", "Coding", "Reading"];
hobbies.push("Dancing");
hobbies.push("Traveling");
document.getElementById("message").textContent = hobbies[2];
if (name === "Hillary") {
    document.getElementById("message").innerHTML =
    "I have " + hobbies.length + " hobbies:<br>";
}
else {
    document.getElementById("message").textContent = "Welcome, visitor!";
}
document.getElementById("learnMoreBtn").addEventListener("click", function() {
    sayHello(name);
  document.querySelector("h1").textContent = "Thanks for clicking!";
    document.getElementById("message").textContent = "Hello " + name + "! You are learning JavaScript successfully!";
});
hobbies.forEach(function(hobby) {
    document.getElementById("hobbyList").innerHTML += "<li>" + hobby + "</li>";
});
document.getElementById("addHobbyBtn").addEventListener("click", function() {
    if (!hobbies.includes("Photography")) {
        hobbies.push("Photography");

        document.getElementById("hobbyList").innerHTML = "";

        hobbies.forEach(function(hobby) {
            document.getElementById("hobbyList").innerHTML += "<li>" + hobby + "</li>";
        });

        document.getElementById("hobbyTitle").textContent =
            "My Hobbies (" + hobbies.length + ")";

        document.getElementById("addHobbyBtn").disabled = true;
      document.getElementById("addHobbyBtn").textContent = "Photography Added";
    }
});