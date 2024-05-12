function skillsMember() {
    const member = document.querySelector('.member');
    if (member) {
        const skills = member.querySelectorAll('.skill');
        skills.forEach(skill => {
            const skillPercent = skill.querySelector('.skill-percent');
            const percent = skillPercent.getAttribute('data-percent');
            skillPercent.style.width = percent;
        });
    }
}