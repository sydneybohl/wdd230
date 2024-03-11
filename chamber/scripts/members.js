// Create a baseURL variable that references the main chamber page, GitHub pages URL
const baseURL = "https://sydneybohl.github.io/wdd230/chamber";
// Assign a variable named membersURL that references the members.json data file 
const membersURL = "https://sydneybohl.github.io/wdd230/chamber/data/members.json";
const memberCards = document.querySelector(".directory-grid");

async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        card.classList.add("section");


        member.image.forEach((image) => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.alt;
            img.setAttribute("width", "200");
            img.setAttribute("height", "auto");
            img.setAttribute("loading", "lazy");
            card.appendChild(img);
        });

        const businessName = document.createElement("h2");
        businessName.textContent = member.name;
        card.appendChild(businessName);

        const address = document.createElement("p");
        address.textContent = member.address;
        card.appendChild(address);

        const cityState = document.createElement("p");
        cityState.textContent = member.city_state;
        card.appendChild(cityState);

        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = member.phone;
        card.appendChild(phoneNumber);

        const websiteURL = document.createElement("a");
        websiteURL.href = member.website;
        websiteURL.textContent = member.website;
        websiteURL.setAttribute("target", "_blank");
        card.appendChild(websiteURL);

        const membershipLevel = document.createElement("p");
        membershipLevel.textContent = `Membership Level: ${member.membership}`;
        card.appendChild(membershipLevel);

        const description = document.createElement("p");
        description.textContent = member.description;
        card.appendChild(description);

        memberCards.appendChild(card);
    });
}

getMemberData();