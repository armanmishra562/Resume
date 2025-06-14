document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth',
			});
		});
	});

	const skillBars = document.querySelectorAll('.progress-bar');

	const animateSkillBars = () => {
		skillBars.forEach((bar) => {
			const targetWidth = bar.parentElement.getAttribute('aria-valuenow') + '%';
			requestAnimationFrame(() => {
				bar.style.width = targetWidth;
			});
		});
	};

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					animateSkillBars();
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.5,
		},
	);

	document.querySelectorAll('.skill-item').forEach((item) => {
		observer.observe(item);
	});

	const projectCards = document.querySelectorAll('.card');
	projectCards.forEach((card) => {
		card.addEventListener('mouseenter', function () {
			this.style.transform = 'translateY(-5px)';
		});
		card.addEventListener('mouseleave', function () {
			this.style.transform = 'translateY(0)';
		});
	});
});
