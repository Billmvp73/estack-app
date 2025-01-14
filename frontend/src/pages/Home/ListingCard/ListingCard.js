import React from 'react';
import { Link } from 'react-router-dom';

import './ListingCard.css';
import ListingDivider from '../pictures/listingDivider.png';
import { IoIosBed } from 'react-icons/io';
import { FaBath } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';

export const ListingCard = ({
	src,
	to,
	address,
	price,
	status,
	bedCount,
	bathCount,
	floorCount,
}) => {
	return (
		<>
			<Link to={to} className="listingBoxContainer">
				<div className="listingBox">
					<img src={src} className="cardImg" alt="Listing" />
					<div className="listingBottom">
						<p className="listingTitle">{address}</p>
						<div className="listingStats">
							<p className="listingPrice">{price}$</p>
							<p className="listingDivider">
								<img src={ListingDivider} alt="divider"></img>
							</p>
							<p className="listingStatus">{status}</p>
						</div>
						<div className="listingInfo">
							<ul className="listingInfoText">
								<p className="listingIcon">
									<IoIosBed />
								</p>
								{bedCount}
							</ul>
							<ul className="listingInfoText">
								<p className="listingIcon">
									<FaBath />
								</p>
								{bathCount}
							</ul>
							<ul className="listingInfoText">
								<p className="listingIcon">
									<FiGrid />
								</p>
								{floorCount}
							</ul>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};
