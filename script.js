const responses = {
	profile: {
		status: 200,
		body: {
			name: "Sujan Acharya",
			role: "Java Backend Developer",
			focus: ["Spring Boot", "Microservices", "REST APIs", "Database integration"],
			interests: ["Cloud platforms", "Deep learning", "Neural networks"]
		}
	},
	stack: {
		status: 200,
		body: {
			languages: ["Java", "Python", "JavaScript"],
			backend: ["Spring Boot", "Spring Cloud", "JWT", "REST"],
			databases: ["MySQL", "PostgreSQL", "MongoDB"],
			tools: ["Git", "Bitbucket", "Jira"]
		}
	},
	current: {
		status: 200,
		body: {
			role: "Java Developer Trainee",
			since: "August 2024",
			building: "Microservices-based Stripe payment integration system",
			responsibilities: ["API design", "Database integration", "Fault tolerance", "Agile delivery"]
		}
	},
	contact: {
		status: 202,
		body: {
			email: "sujanjacharya123@gmail.com",
			github: "github.com/SujanAcharya06",
			x: "x.com/Acharyasujan06"
		}
	}
};

const endpoint = document.getElementById("endpoint");
const executeButton = document.getElementById("execute-request");
const output = document.getElementById("console-output");

function renderResponse(key) {
	const response = responses[key];
	output.textContent = [
		`$ curl sujan.dev/api/${key}`,
		`HTTP/1.1 ${response.status}`,
		"content-type: application/json",
		"",
		JSON.stringify(response.body, null, 2)
	].join("\n");
}

if (endpoint && executeButton && output) {
	output.textContent = "$ Select an endpoint and hit Execute...";
	executeButton.addEventListener("click", () => renderResponse(endpoint.value));
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (lightbox && lightboxImg && closeBtn) {
	document.querySelectorAll(".preview-img").forEach((img) => {
		img.addEventListener("click", () => {
			lightbox.classList.add("is-open");
			lightbox.setAttribute("aria-hidden", "false");
			lightboxImg.src = img.src;
			lightboxImg.alt = img.alt;
		});
	});

	function closeLightbox() {
		lightbox.classList.remove("is-open");
		lightbox.setAttribute("aria-hidden", "true");
		lightboxImg.removeAttribute("src");
	}

	closeBtn.addEventListener("click", closeLightbox);
	lightbox.addEventListener("click", (event) => {
		if (event.target === lightbox) {
			closeLightbox();
		}
	});
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
			closeLightbox();
		}
	});
}
