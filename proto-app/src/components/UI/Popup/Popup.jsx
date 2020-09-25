import React from "react";
import classes from "./Popup.module.scss";

const Popup = ({ links, openPopupHover, closePopupHover }) => {
	const buttonList = links.map(({ name, icon, onClickButtonHandler }) => {
		return (
			<button
				key={name}
				onClick={onClickButtonHandler}
				style={{
					backgroundImage: `url(${icon})`,
				}}
			>
				<p>{name}</p>
			</button>
		);
	});
	return (
		<div
			className={classes.popup}
			onMouseEnter={openPopupHover}
			onMouseLeave={closePopupHover}
		>
			{buttonList}
		</div>
	);
};

export default Popup;
