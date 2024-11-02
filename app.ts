const form = document.getElementById("resume-form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const educationInput = document.getElementById(
  "education"
) as HTMLTextAreaElement;
const workExperienceInput = document.getElementById(
  "work-experience"
) as HTMLTextAreaElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const generateBtn = document.getElementById(
  "generate-btn"
) as HTMLButtonElement;

const resumeName = document.getElementById("resume-name") as HTMLHeadingElement;
const resumeContact = document.getElementById(
  "resume-contact"
) as HTMLParagraphElement;
const resumeEducationContent = document.getElementById(
  "resume-education-content"
) as HTMLParagraphElement;
const resumeWorkContent = document.getElementById(
  "resume-work-content"
) as HTMLParagraphElement;
const resumeSkillsList = document.getElementById(
  "resume-skills-list"
) as HTMLUListElement;

function generateResume() {
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const education = educationInput.value;
  const workExperience = workExperienceInput.value;
  const skills = skillsInput.value.split(",").map((skill) => skill.trim());

  resumeName.textContent = name || "Your Name";
  resumeContact.textContent = `Email: ${
    email || "your.email@example.com"
  } | Phone: ${phone || "(123) 456-7890"}`;
  resumeEducationContent.textContent =
    education || "Your education details will appear here.";
  resumeWorkContent.textContent =
    workExperience || "Your work experience will appear here.";

  resumeSkillsList.innerHTML = "";
  if (skills[0]) {
    skills.forEach((skill) => {
      const skillItem = document.createElement("li");
      skillItem.textContent = skill;
      resumeSkillsList.appendChild(skillItem);
    });
  } else {
    const placeholderItem = document.createElement("li");
    placeholderItem.textContent = "Skills will be listed here.";
    resumeSkillsList.appendChild(placeholderItem);
  }
}

generateBtn.addEventListener("click", generateResume);
