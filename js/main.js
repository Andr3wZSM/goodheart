// header definition start
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
// header definition end



// ie form difenition start
class ieForm extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<div class="ie-form" id="ie-form">
			<span class="ie-form__title">Заповніть форму</span>

			<div class="ie-form__switch">
				<div class="ie-form__switch-left switch-element">
					<a class="switch-left__btn">
						<span class="switch-left__text">Фіз. особа</span>
					</a>	
				</div>
				<div class="ie-form__switch-right switch-element">
					<a class="switch-right__btn" onclick="switchToLegalEntity()">
						<span class="switch-right__text">Юр. особа</span>
					</a>	
				</div>
			</div>

			<div class="ie-form__enter-data">
				<div class="enter-data__personal-part">
					<div class="personal-part__name enter-data__row">
						<div class="name__first-name row-item">
							<span class="first-name__label">Ім’я</span>
							<input type="text" class="first-name__input name__input enter-data-input">
						</div>
						<div class="name__last-name row-item">
							<span class="last-name__label">Фамілія</span>
							<input type="text" class="last-name__input name__input enter-data-input">
						</div>
					</div>
					<div class="personal-part__company enter-data__row">
						<div class="company__text-part row-item">
							<span class="company__label">Назва компаніі, організації</span>
							<input type="text" class="company__input enter-data-input">
						</div>
						<div class="company__logo-part">
							<a href="" class="logo-part__link">
								<span class="logo-part__link-text">+  Логотип</span>
							</a>
						</div>
					</div>
					<div class="personal-part__email enter-data__row row-item">
						<span class="email__label">Email-адрес</span>
						<input type="text" class="email__input enter-data-input">
					</div>
					<div class="personal-part__phone enter-data__row row-item">
						<span class="phone__label">Номер телефону</span>
						<input type="text" class="phone__input enter-data-input">
					</div>
				</div>

				<div class="enter-data__general-part">
					<div class="general-part__country enter-data__row row-item">
						<span class="country__label">Країна</span>
						<input type="text" class="country__input enter-data-input">
					</div>
					<div class="general-part__location enter-data__row">
						<div class="location__town row-item">
							<span class="town__label">Місто</span>
							<input type="text" class="town__input location__input enter-data-input">
						</div>
						<div class="location__state row-item">
							<span class="state__label">Штат, район</span>
							<input type="text" class="state__input location__input enter-data-input">
						</div>
					</div>
					<div class="general-part__address enter-data__row row-item">
						<span class="address__label">Адреса</span>
						<input type="text" class="address__input enter-data-input">
					</div>
					<div class="general-part__zip-code enter-data__row row-item">
						<span class="zip-code__label">Поштовий індекс</span>
						<input type="text" class="zip-code__input enter-data-input">
					</div>
				</div>
			</div>

			<span class="choose-element__title ie-form__title">Види допомоги</span>

			<div class="ie-form__choose-help">
				<span class="choose-help__subtitle">Ви можете змінити вид допомоги</span>
				<div class="choose-help__elements">
					<div class="elements__el-make elements__element">
						<img src="template/img/svg/types-of-help_item-1.svg" alt="Зробити" class="el-make__img help-element-img">
						<span class="elements__element-title">Зробити</span>
					</div>
					<div class="elements__el-finance elements__element">
						<img src="template/img/svg/types-of-help_item-5.svg" alt="Фінансова допомога" class="el-make__img help-element-img">
						<span class="elements__element-title el-finance__title">Фінансова допомога</span>
					</div>
					<div class="elements__el-material elements__element">
						<img src="template/img/svg/types-of-help_item-3.svg" alt="Матеріальна допомога" class="el-make__img help-element-img">
						<span class="elements__element-title">Матеріальна допомога</span>
					</div>
					<div class="elements__el-charity elements__element">
						<img src="template/img/svg/types-of-help_item-4.svg" alt="Волонтерство" class="el-make__img help-element-img">
						<span class="elements__element-title">Волонтерство</span>
					</div>
				</div>
			</div>

			<div class="ie-form__finance-help">
				<div class="finance-help__triangle"></div>
				<div class="finance-help__payment-methods">
					<span class="payment-methods__label">
						Спосіб оплати
					</span>
					<div class="payment-methods__card-items">
						<div class="card-items__item">
							<img src="template/img/svg/visa.svg" alt="Visa" class="item__img">
						</div>
						<div class="card-items__item">
							<img src="template/img/svg/privat24.svg" alt="Приват24" class="item__img" onclick="showPrivat()">
						</div>
						<div class="card-items__item">
							<img src="template/img/svg/terminals.svg" alt="Термінали України" class="item__img">
						</div>
						<div class="card-items__item">
							<img src="template/img/svg/webmoney.svg" alt="WebMoney" class="item__img">
						</div>
						<div class="card-items__item">
							<img src="template/img/svg/paypal.svg" alt="PayPal" class="item__img" onclick="showPayPal()">
						</div>
					</div>
				</div>
				<div class="finance-help__enter-data" >
					<span class="enter-data__label">
						Введіть наступні данні
					</span>
					<div class="privat-view" id="privatForm">
						<div class="enter-data__card-data">
							<div class="card-data__card-number">
								<span class="card-number__label">Номер карти</span>
								<div class="card-number__inputs">
									<input type="text" class="card-number__input">
									<input type="text" class="card-number__input">
									<input type="text" class="card-number__input">
									<input type="text" class="card-number__input">
								</div>
							</div>
							<div class="card-data__other-data">
								<div class="other-data__validity other-data__item">
									<span class="validity__label">
										Термін дії
									</span>
									<input type="text" class="validity__input other-data__input">
								</div>
								<div class="other-data__cvv other-data__item">
									<span class="cvv__label">
										CVC/CVV
									</span>
									<input type="text" class="cvv__input other-data__input">
								</div>
							</div>
						</div>	
					</div>
					<div class="paypal-view" id="paypalForm">
						<div class="enter-data__paypal-data">
							<input type="text" class="paypal-data__card-number paypal-input paypal-row" placeholder="Номер картки">
							<div class="paypal-data__other-data paypal-group paypal-row">
								<input type="text" class="other-data__expires-input paypal-input" placeholder="Закінчується">
								<input type="text" class="other-data__csc-input paypal-input" placeholder="CSC">
							</div>
							<div class="paypal-data__name paypal-group paypal-row">
								<input type="text" class="name__first-name-input paypal-min-input paypal-input" placeholder="Ім’я">
								<input type="text" class="name__last-name-input paypal-min-input paypal-input" placeholder="Прізвище">
							</div>
							<input type="text" class="paypal-data__phone-number paypal-input" placeholder="Телефон">
						</div>
					</div>
				</div>	
			</div>
			
			<div class="ie-form__submit-block">
				<a href="" class="submit-block__btn">Допомогти</a>	
			</div>
		</div>
		`
	}
}

customElements.define('ie-form', ieForm)
// ie form difinition end



// le form difenition start
class leForm extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<div class="le-form" id="le-form">
			<span class="le-form__title">Заповніть форму</span>

			<div class="le-form__switch">
				<div class="le-form__switch-left switch-element">
					<a class="switch-left__btn" onclick="switchToIndividualEntity()">
						<span class="switch-left__text">Фіз. особа</span>
					</a>	
				</div>
				<div class="le-form__switch-right switch-element">
					<a class="switch-right__btn">
						<span class="switch-right__text">Юр. особа</span>
					</a>	
				</div>
			</div>

			<div class="le-form__enter-data">
				<div class="enter-data__personal-part">
					<div class="personal-part__name enter-data__row">
						<div class="name__first-name row-item">
							<span class="first-name__label">Ім’я</span>
							<input type="text" class="first-name__input name__input enter-data-input">
						</div>
						<div class="name__last-name row-item">
							<span class="last-name__label">Фамілія</span>
							<input type="text" class="last-name__input name__input enter-data-input">
						</div>
					</div>
					<div class="personal-part__company enter-data__row">
						<div class="company__text-part row-item">
							<span class="company__label">Назва компаніі, організації</span>
							<input type="text" class="company__input enter-data-input">
						</div>
						<div class="company__logo-part">
							<a href="" class="logo-part__link">
								<span class="logo-part__link-text">+  Логотип</span>
							</a>
						</div>
					</div>
					<div class="personal-part__email enter-data__row row-item">
						<span class="email__label">Email-адрес</span>
						<input type="text" class="email__input enter-data-input">
					</div>
					<div class="personal-part__phone enter-data__row row-item">
						<span class="phone__label">Номер телефону</span>
						<input type="text" class="phone__input enter-data-input">
					</div>
				</div>

				<div class="enter-data__general-part">
					<div class="general-part__country enter-data__row row-item">
						<span class="country__label">Країна</span>
						<input type="text" class="country__input enter-data-input">
					</div>
					<div class="general-part__location enter-data__row">
						<div class="location__town row-item">
							<span class="town__label">Місто</span>
							<input type="text" class="town__input location__input enter-data-input">
						</div>
						<div class="location__state row-item">
							<span class="state__label">Штат, район</span>
							<input type="text" class="state__input location__input enter-data-input">
						</div>
					</div>
					<div class="general-part__address enter-data__row row-item">
						<span class="address__label">Адреса</span>
						<input type="text" class="address__input enter-data-input">
					</div>
					<div class="general-part__zip-code enter-data__row row-item">
						<span class="zip-code__label">Поштовий індекс</span>
						<input type="text" class="zip-code__input enter-data-input">
					</div>
				</div>
			</div>

			<div class="le-form__enter-data">
				<div class="enter-data__legal-part-1">
					<div class="legal-part-1__legal-address enter-data__row row-item">
						<span class="legal-address__label">Юридична адреса</span>
						<input type="text" class="legal-address__input enter-data-input">
					</div>
					<div class="legal-part-1__bank-data enter-data__row">
						<div class="bank-data__bank-name row-item">
							<span class="bank-name__label">Найменування банку</span>
							<input type="text" class="bank-name__input bank-data__input enter-data-input">
						</div>
						<div class="bank-data__code row-item">
							<span class="code__label">МФО банку</span>
							<input type="text" class="code__input bank-data__input enter-data-input">
						</div>
					</div>
					<div class="legal-part-1__current-acc enter-data__row row-item">
						<span class="current-acc__label">Розрахунковий рахунок</span>
						<input type="text" class="current-acc__input enter-data-input">
					</div>
				</div>

				<div class="enter-data__legal-part-2">
					<div class="legal-part-2__other-bank-data enter-data__row">
						<div class="other-bank-data__zkpo row-item bank-item">
							<span class="zkpo__label">ЗКПО</span>
							<input type="text" class="zkpo__input bank-data__input enter-data-input">
						</div>
						<div class="other-bank-data__taxation-type row-item">
							<span class="taxation-type__label">Тип оподаткування</span>
							<input type="text" class="taxation-type__input bank-data__input enter-data-input">
						</div>
					</div>

					<div class="legal-part-2__other-bank-data enter-data__row">
						<div class="other-bank-data__TIN row-item bank-item">
							<span class="TIN__label">ІНН</span>
							<input type="text" class="TIN__input bank-data__input enter-data-input">
						</div>
						<div class="other-bank-data__taxation-system row-item">
							<span class="taxation-system__label">Система оподаткування</span>
							<input type="text" class="taxation-system__input bank-data__input enter-data-input">
						</div>
					</div>

					<div class="legal-part-2__other-bank-data enter-data__row">
						<div class="other-bank-data__accounting-phone row-item bank-item">
							<span class="accounting-phone__label">Телефон бугалтерії</span>
							<input type="text" class="accounting-phone__input bank-data__input enter-data-input">
						</div>
						<div class="other-bank-data__fax row-item">
							<span class="fax__label">Факс</span>
							<input type="text" class="fax__input bank-data__input enter-data-input">
						</div>
					</div>
				</div>
			</div>

			<span class="choose-element__title le-form__title">Види допомоги</span>

			<div class="le-form__choose-help">
				<span class="choose-help__subtitle">Ви можете змінити вид допомоги</span>
				<div class="choose-help__elements">
					<div class="elements__el-make elements__element">
						<img src="template/img/svg/types-of-help_item-1.svg" alt="Зробити" class="el-make__img help-element-img">
						<span class="elements__element-title">Зробити</span>
					</div>
					<div class="elements__el-finance elements__element">
						<img src="template/img/svg/types-of-help_item-5.svg" alt="Фінансова допомога" class="el-make__img help-element-img">
						<span class="elements__element-title el-finance__title">Фінансова допомога</span>
					</div>
					<div class="elements__el-material elements__element">
						<img src="template/img/svg/types-of-help_item-3.svg" alt="Матеріальна допомога" class="el-make__img help-element-img">
						<span class="elements__element-title">Матеріальна допомога</span>
					</div>
					<div class="elements__el-charity elements__element">
						<img src="template/img/svg/types-of-help_item-4.svg" alt="Волонтерство" class="el-make__img help-element-img">
						<span class="elements__element-title">Волонтерство</span>
					</div>
				</div>
			</div>

			<div class="le-form__finance-help">
				<div class="finance-help__triangle"></div>
				<div class="finance-help__payment-methods">
					<span class="payment-methods__label">
						Спосіб оплати
					</span>
					<div class="payment-methods__card-items">
						<div class="card-items__item">
							<img src="template/img/svg/visa.svg" alt="Visa" class="item__img">
						</div>
						<div class="card-items__item">
							<img src="template/img/svg/privat24.svg" alt="Приват24" class="item__img">
						</div>
						<div class="card-items__item">
							<img src="template/img/svg/terminals.svg" alt="Термінали України" class="item__img">
						</div>
						<div class="card-items__item">
							<img src="template/img/svg/webmoney.svg" alt="WebMoney" class="item__img">
						</div>
						<div class="card-items__item">
							<img src="template/img/svg/paypal.svg" alt="PayPal" class="item__img">
						</div>
					</div>
				</div>
				<div class="finance-help__enter-data">
					<span class="enter-data__label">
						Введіть наступні данні
					</span>
					<div class="enter-data__card-data">
						<div class="card-data__card-number">
							<span class="card-number__label">Номер карти</span>
							<div class="card-number__inputs">
								<input type="text" class="card-number__input">
								<input type="text" class="card-number__input">
								<input type="text" class="card-number__input">
								<input type="text" class="card-number__input">
							</div>
						</div>
						<div class="card-data__other-data">
							<div class="other-data__validity other-data__item">
								<span class="validity__label">
									Термін дії
								</span>
								<input type="text" class="validity__input other-data__input">
							</div>
							<div class="other-data__cvv other-data__item">
								<span class="cvv__label">
									CVC/CVV
								</span>
								<input type="text" class="cvv__input other-data__input">
							</div>
						</div>
					</div>
				</div>
			</div>
			

			<div class="le-form__submit-block">
				<a href="" class="submit-block__btn">Допомогти</a>	
			</div>
		</div>
			`
	}
}

customElements.define('le-form', leForm)
// le form difinition end



// search difenition start
class searchBlock extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div class="search" id="search">
				<div class="search__inner">
					<input type="text" class="search__input" id="search__input" placeholder="Пошук" >
					<img src="template/img/cross.png" alt="exit" class="search__input-cross" onclick="hideSearch()">
				</div>
				<div class="search__result" id="search__result">
					<div class="search__result-row">
						<div class="result-row__column column-category">
							<span class="column-category__text">Проекти</span>
						</div>
						<div class="result-row__column category-item">
							<span class="category-item__title">Діти</span>
							<span class="category-item__desc" id="desc1">Для операції на сердце маленькому хлопчику, необхідно зібрати гроші на ліки</span>
							<span class="category-item__desc" id="desc2">Збираємо гроші на лікування п’ятирічного Василя, який став жертвою ДТП </span>
						</div>
						<div class="result-row__column category-item">
							<span class="category-item__title">Війна</span>
							<span class="category-item__desc">Необхідно зібрати ліки для поранених бійців із зони АТО</span>
						</div>
					</div>
					<div class="search__result-row">
						<div class="result-row__column column-category">
							<span class="column-category__text">Архів</span>
						</div>
						<div class="result-row__column category-item" id="category-item">
							<span class="category-item__title">Діти</span>
							<span class="category-item__desc">Необхідно купити ліки для дитячого будинку в місті Київ</span>
						</div>
					</div>
				</div>
			</div>
		`
	}
}

customElements.define('search-block', searchBlock)
// search form definition end



// current task: change background color for .enter-data__card-data


