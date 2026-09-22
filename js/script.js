/*
    Name: Cameron Wilkerson
    Date: 09.22.2026
    CSC 372-01

    This script adds interactive Save Event functionality
    to the Campus Event Guide.
*/

// Get all event cards from the page
const eventCards = document.querySelectorAll(".event-card");

// Create the saved events summary section
const savedSection = document.createElement("section");
savedSection.classList.add("saved-events");

const savedHeading = document.createElement("h2");
savedHeading.textContent = "Saved Events";

const savedList = document.createElement("ul");

const emptyMessage = document.createElement("p");
emptyMessage.textContent = "No events have been saved yet.";

savedSection.appendChild(savedHeading);
savedSection.appendChild(emptyMessage);
savedSection.appendChild(savedList);

document.querySelector("main").appendChild(savedSection);

// Add a Save Event button to each event card
eventCards.forEach(function(card) {
    const saveButton = document.createElement("button");

    saveButton.textContent = "Save Event";
    saveButton.classList.add("save-button");

    // Handle saving and removing an event
   saveButton.addEventListener("click", function() {
    if (card.classList.contains("saved-event")) {
        card.classList.remove("saved-event");
        saveButton.textContent = "Save Event";

        const savedItem = savedList.querySelector(
            '[data-event="' + card.querySelector("h3").textContent + '"]'
        );

        if (savedItem) {
            savedItem.remove();
        }

        if (savedList.children.length === 0) {
            emptyMessage.style.display = "block";
        }
    } else {
        card.classList.add("saved-event");
        saveButton.textContent = "Remove Event";

        const eventName = card.querySelector("h3").textContent;
        const eventTime = card.querySelector("time").textContent;

        const paragraphs = card.querySelectorAll("p");
        const eventLocation = paragraphs[1].textContent;

        const savedItem = document.createElement("li");
        savedItem.setAttribute("data-event", eventName);

        const name = document.createElement("strong");
        name.textContent = eventName;

        const details = document.createElement("p");
        details.textContent = eventTime + " | " + eventLocation;

        savedItem.appendChild(name);
        savedItem.appendChild(details);
        savedList.appendChild(savedItem);

        emptyMessage.style.display = "none";
    }
});

    card.appendChild(saveButton);
});