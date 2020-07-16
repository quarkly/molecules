import React from 'react';
import atomize from "@quarkly/atomize";

export default atomize.button(
	{
		name: "Button",
		effects: {
			hover: ":hover",
			focus: ":focus",
			active: ":active",
			disabled: ":disabled"
		},
		description: {
			en: "button element — button that performs an action. For example, can be used in forms to submit data",
			ru: "Элемент button — кнопка, которая выполняет какое-либо действие. Например, отправка данных формы"
		},
		propInfo: {
			type: {
				control: "select",
				variants: ["submit", "button"],
				category: "Main"
			},
			disabled: {
				control: "checkbox",
				category: "Main"
			}
		}
	},
	{
		"type": "submit",
		"appearance": "button",
		
		"padding-top": "8px",
		"padding-bottom": "8px",
		"padding-left": "24px",
		"padding-right": "24px",
		
		"font": "--font-base",
		
		"color": "--color-light",
		"background": "--color-primary",
		"disabled-background": "--color-grey",
		"focus-box-shadow": "0 0 0 2px --color-primary",
		
		"border-width": "0px",
		"border-style": "none",
		"border-radius": "2px",
		"outline": "none",
		
		"user-select": "none",
		"box-sizing": "border-box",
		"overflow": "visible",
		"cursor": "pointer"
	}
);
