import React from 'react';
export default function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<b>Real Estate Management System</b>
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								Home
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								About
							</a>
						</li>

                        <li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								Contact Us
							</a>
						</li>
					</ul>
				</div>
				<ul class="nav navbar-nav navbar-right">
					<button type="button" class="btn btn-success">
						Login
					</button>
					&nbsp;&nbsp;
					<button type="button" class="btn btn-success">
						Register
					</button>
				</ul>
			</div>
		</nav>
	);
}