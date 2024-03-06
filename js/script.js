/*--------------------BURGER--------------------*/
const menu = document.querySelector('.menu-body')
const menuBtn = document.querySelector('.menu-icon')
const body = document.querySelector('body')

if (menu && menuBtn) {
	menuBtn.addEventListener('click', function () {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.querySelectorAll('.menu-link').forEach(link => {
		link.addEventListener('click', function () {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	});
}

/*--------------------/BURGER--------------------*/

/*--------------------LOGIN--------------------*/

const loginBtn = document.querySelector('#login')
const signBtn = document.querySelectorAll('#signup')
const loginExit = document.querySelector('.login-exit')
const signExit = document.querySelector('.signup-exit')
const login = document.querySelector('.login')
const signup = document.querySelector('.signup')
const logTransf = document.querySelector('.login-transfer-link')
const signTransf = document.querySelector('.signup-transfer-link')


if (signBtn || loginBtn) {
	signBtn.forEach(btn => {
		btn.addEventListener('click', function () {
			signup.classList.toggle('active')
			body.classList.add('lock')
		})

	})
	signExit.addEventListener('click', function () {
		signup.classList.remove('active')
		body.classList.remove('lock')
	})
	loginExit.addEventListener('click', function () {
		login.classList.remove('active')
		body.classList.remove('lock')
	})
}
if (logTransf || signTransf) {
	logTransf.addEventListener('click', function () {
		login.classList.remove('active')
		signup.classList.add('active')
	})
	signTransf.addEventListener('click', function () {
		login.classList.add('active')
		signup.classList.remove('active')
	})
}

/*--------------------/LOOGIN--------------------*/

/*--------------------LANG--------------------*/

const lang = document.querySelector('.menu-lang')

if (lang) {
	lang.addEventListener('click', event => {
		lang.querySelector('.lang-dropdown').classList.toggle('active');
		lang.querySelector('.lang-icon').classList.toggle('active');

		if (event.target.classList.contains('lang-item')) {

			lang.querySelector('.lang-value').textContent = event.target.textContent;
		}
	})
}

/*--------------------/LANG--------------------*/

/*--------------------SWIPER--------------------*/

let slider = new Swiper('.swiper', {
	spaceBetween: 200,
	slidesPerView: 1,
	initialSlide: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

/*--------------------/SWIPER--------------------*/


/*--------------------TABS--------------------*/

const tabsTitle = document.querySelectorAll('.tabs-title');
const tabsContent = document.querySelectorAll('.tab');


tabsTitle.forEach(item => item.addEventListener('click', event => {

	const tabsTitleTarget = event.target.getAttribute('data-tab');

	tabsTitle.forEach(element => element.classList.remove('active'));

	tabsContent.forEach(element => element.classList.add('hidden'));

	item.classList.add('active');

	document.getElementById(tabsTitleTarget).classList.remove('hidden');

}));


document.querySelector('[data-tab="tab-1"]').classList.add('active');
document.querySelector('#tab-1').classList.remove('hidden');

/*--------------------/TABS--------------------*/