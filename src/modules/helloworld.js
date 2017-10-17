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

// jQuery
import jQuery from "jQuery";
const $ = jQuery;

export default class HelloWorld {

	constructor(el){
		this.$context = $(el);
		this.sayHello();
	}

	sayHello(){
		this.$context.html('Hello World ...');
	}

}