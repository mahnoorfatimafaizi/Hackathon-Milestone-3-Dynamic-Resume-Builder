var form = document.getElementById("resume-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var educationInput = document.getElementById("education");
var workExperienceInput = document.getElementById("work-experience");
var skillsInput = document.getElementById("skills");
var generateBtn = document.getElementById("generate-btn");
var resumeName = document.getElementById("resume-name");
var resumeContact = document.getElementById("resume-contact");
var resumeEducationContent = document.getElementById(
  "resume-education-content"
);
var resumeWorkContent = document.getElementById("resume-work-content");
var resumeSkillsList = document.getElementById("resume-skills-list");

function generateResume() {
  var name = nameInput.value;
  var email = emailInput.value;
  var phone = phoneInput.value;
  var education = educationInput.value;
  var workExperience = workExperienceInput.value;
  var skills = skillsInput.value.split(",").map(function (skill) {
    return skill.trim();
  });

  resumeName.textContent = name || "Your Name";
  resumeContact.textContent = "Email: "
    .concat(email || "your.email@example.com", " | Phone: ")
    .concat(phone || "(123) 456-7890");
  resumeEducationContent.textContent =
    education || "Your education details will appear here.";
  resumeWorkContent.textContent =
    workExperience || "Your work experience will appear here.";

  resumeSkillsList.innerHTML = "";
  if (skills[0]) {
    skills.forEach(function (skill) {
      var skillItem = document.createElement("li");
      skillItem.textContent = skill;
      resumeSkillsList.appendChild(skillItem);
    });
  } else {
    var placeholderItem = document.createElement("li");
    placeholderItem.textContent = "Skills will be listed here.";
    resumeSkillsList.appendChild(placeholderItem);
  }
}

generateBtn.addEventListener("click", generateResume);
