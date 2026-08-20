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
