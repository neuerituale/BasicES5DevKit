/**
 * COPYRIGHT NOTICE
 *
 * Copyright (c) 2017 Neue Rituale GbR
 * @author Julian Winkel <code@neuerituale.com>
 * @version 1.0.0
 * @license MIT
 *
 * This file is part of the BasicES6DevKit project.
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

// modules
import HelloWorld from "./modules/helloworld";

// libs
import jQuery from "jquery";
const $ = jQuery;

// main Class
class App {
	constructor(){

		// init HelloWorld Module for each element
		$('.container').each(function() {
			$(this).data( 'helloworld', new HelloWorld(this) );
		});

	}
}

// need some function global, use window.
// e.g.
window.$ = $;

// run
new App();