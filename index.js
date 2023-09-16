"use strict";

document.body.style.background = 'gray';

class createTabs {
	constructor(parentElement, elementType, className) {
		this.element = document.createElement(elementType);
		this.element.classList.add(className);
		parentElement.append(this.element);
		this.tabs = [];
	}

	renderTabs(objOfTabs) {
		objOfTabs.forEach(tab => {
			const buttonTab = document.createElement(tab.elementType);	
			buttonTab.textContent = tab.name;
			buttonTab.classList.add(tab.class);

			const tabContent = document.createElement("p");
			tabContent.textContent = tab.text;
			tabContent.style.display = 'none';
			tabContent.classList.add('tab-content')
			this.tabs.push({ buttonTab, tabContent });
			
			buttonTab.onclick = () => this.onTabClick(tabContent)
			this.element.append(buttonTab, tabContent)
		});
	}

	onTabClick(clickedTabContent) {
		this.tabs.forEach(info => {
			if (info.tabContent === clickedTabContent) {
				if (info.tabContent.style.display === 'block') {
					info.tabContent.style.display = 'none';
				} else {
					info.tabContent.style.display = 'block';
				}
			} else {
				info.tabContent.style.display = 'none';
			}
		});
	}
}

const tabs = [
	{name: 'Ukraine', elementType: 'button', class: 'button-tab', text: 'Nothing can stop an idea whose time has come'},
	{name: 'Great Britain', elementType: 'button',  class: 'button-tab', text: 'War is peace.Freedom is slavery. Ignorance is strength.'},
	{name: 'French', elementType: 'button',  class: 'button-tab', text: 'I Disapprove of What You Say, But I Will Defend to the Death Your Right to Say It'},
	{name: 'Germany', elementType: 'button',  class: 'button-tab', text: 'To be great is to give direction.'},
	{name: 'USA', elementType: 'button',  class: 'button-tab', text: 'My fellow Americans, ask not what your country can do for you, ask what you can do for your country.'},
]

new createTabs(
	document.body,
	'div',
	'container-tabs'
).renderTabs(tabs)
