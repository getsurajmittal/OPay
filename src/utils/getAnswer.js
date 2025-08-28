// utils/getAnswer.js
export function getAnswer(question, data) {
  const q = question.toLowerCase();

  // Skills
  if (q.includes("skill") || q.includes("technology")) {
    return data.skills.map((skill) => `• ${skill}`).join("\n");
  }

  // Projects
  if (q.includes("project") || q.includes("github")) {
    return data.projects
      .map(
        (p) =>
          `• ${p.title}\n  Description: ${p.description}\n  Tech Stack: ${p.techStack.join(
            ", "
          )}\n  GitHub: ${p.github}`
      )
      .join("\n\n");
  }

  // Experience
  if (q.includes("experience") || q.includes("company") || q.includes("work")) {
    return data.experience
      .map(
        (e) =>
          `• ${e.role} at ${e.company} (${e.period})\n  Responsibilities:\n  ${e.description
            .map((desc) => `    - ${desc}`)
            .join("\n  ")}`
      )
      .join("\n\n");
  }

  return "Sorry, I don't have information about that. Please ask about my skills, projects, or experience.";
}
