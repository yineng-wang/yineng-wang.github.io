document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".pub-showcase__authors").forEach(el => {
    const raw = el.dataset.authors;
    if (!raw) return;

    // Prefer year from data-year
    let year = (el.dataset.year || "").trim();

    // Fallback: extract a 4-digit year if it exists in text
    if (!year) {
      const m = (el.textContent || "").match(/\b(19|20)\d{2}\b/);
      if (m) year = m[0];
    }

    const formattedAuthors = raw
      .split(",")
      .map(name => {
        const parts = name.trim().split(/\s+/);
        if (parts.length === 1) return parts[0];

        const lastName = parts[parts.length - 1];
        const givenNames = parts.slice(0, -1);

        const initials = givenNames
          .flatMap(g => g.split("-"))
          .filter(s => s.length > 0)
          .map(s => s[0].toUpperCase() + ".")
          .join("");

        return `${initials} ${lastName}`;
      })
      .join(", ");

    el.textContent = year ? `${formattedAuthors} (${year})` : formattedAuthors;
  });
});
