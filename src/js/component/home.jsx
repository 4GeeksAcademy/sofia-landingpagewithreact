import React from "react";

//include images into your bundle

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";


//create your first component
const Home = () => {
	return (
		<div>

			<Navbar />
			<br />
			<div className="container">
				<Jumbotron />
				<br />
				<div className="d-flex justify-content-around">
					<br />
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-3 mb-3">
						<Card />
						</div>
						<div class="col-xs-12 col-sm-6 col-md-3 mb-3">
							<Card />
						</div>
						<div class="col-xs-12 col-sm-6 col-md-3 mb-3">
							<Card />
						</div>
						<div class="col-xs-12 col-sm-6 col-md-3 mb-3">
							<Card />
						</div>
					</div>
				</div>
			</div>
			<br />
			<Footer />

		</div>
	);
};

export default Home;
