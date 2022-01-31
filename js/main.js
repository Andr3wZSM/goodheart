class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header class="header">
			<div class="header__logo">
				<a href="/start" class="header__logo-link">
					<img src="template/img/logo.png" alt="heart" class="header__logo-pic">
				</a>
			</div>
			<div class="header__languages">
				<ul class="languages__list">
					<li class="languages__list-item">
						УКР
					</li>
					<li class="languages__list-item">
						РУС
					</li>
					<li class="languages__list-item">
						EN
					</li>
				</ul>
			</div>
			<nav class="header__menu">
				<ul class="menu__list">
					<li class="menu__list-item">
						<a href="/projects" class="menu__list-link">Проекти</a>
					</li>
					<li class="menu__list-item">
						<a href="/archive" class="menu__list-link">Архів</a>
					</li>
					<li class="menu__list-item">
						<a href="/contacts" class="menu__list-link">Контакти</a>
					</li>
					<li class="menu__list-item">
						<a href="/urgenthelp" class="menu__list-link">Термінова допомога</a>
					</li>
				</ul>
			</nav>
			<div class="header__search">
				<img src="template/img/search-ico.png" alt="search" class="header__search-ico" onclick="showSearch()">
			</div>
			<div class="header__authorization">
				<span class="authorization__sign-in">
					<a href="#" class="authorization__link">Вхід / Зареєструватися</a>
				</span>
			</div>
		</header>
					`
	}
}

customElements.define('my-header', MyHeader)