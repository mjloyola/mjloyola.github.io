function ai() {

	this.seek_and_attack_player = function(enemy) {
		if(are_adjacent(enemy, player)) {
			enemy.attack_enemy(player);
			return [0, 0];
		} else {
			var x_or_y = random_range(0, 1);
			       if(enemy.x < player.x && enemy.y === player.y) {
				return [1, 0];
			} else if(enemy.x > player.x && enemy.y === player.y) {
				return [-1, 0];
			} else if(enemy.y > player.y && enemy.x === player.x) {
				return [0, -1];
			} else if(enemy.y < player.y && enemy.x === player.x) {
				return [0, 1];
			} else if(enemy.x !== player.x) {
				if(x_or_y === 0) {
					if(enemy.x < player.x) {
						return [1, 0];
					} else if(enemy.x > player.x) {
						return [-1, 0];
					}
				} else if(x_or_y === 1) {
					if(enemy.y > player.y) {
						return [0, -1];
					} else if(enemy.y < player.y) {
						return [0, 1];
					}
				}
			} else if(enemy.y > player.y) {
				return [0, -1];
			} else if(enemy.y < player.y) {
				return [0, 1];
			}
		}
		return [0, 0];
	};
	
	this.proximity_and_attack_player = function(enemy) {
		if(are_adjacent(enemy, player)) {
			enemy.attack_enemy(player);
			return [0, 0];
		} else {
			var x_or_y = random_range(0, 1);
			if (Math.abs(enemy.x-player.x) <= 1 && Math.abs(enemy.y-player.y) <= 1) {
				return(ai_obj.seek_and_attack_player(enemy));
			} else {
				return ai_obj.circles(enemy);
			}
		}
		return [0, 0];
	};
	
	this.circles = function(enemy) {
		enemy.direction = (enemy.direction % 4) + 1;
		if (enemy.direction === 1) {
			return [-1,0]; //left
		} else if (enemy.direction == 2) {
			return [0,1]; //down
		} else if (enemy.direction == 3) {
			return [1,0]; //right
		} else if (enemy.direction == 4) {
			return [0,-1]; //up
		} else {
			return [0,0];
		}
	};
	
	this.random_and_attack_player = function(enemy) {
		if(are_adjacent(enemy, player)) {
			enemy.attack_enemy(player);
			return [0, 0];
		} else {
			var rand = random_range(0, 3);
			if(rand === 0) {
				return[1, 0];
			} else if(rand === 1) {
				return[-1, 0];
			} else if(rand === 2) {
				return[0, 1];
			} else if(rand === 3) {
				return[0, -1];
			}
		}
		return [0, 0];
	};
}
function button(x, y, width, height, text, click, color) {
	this.x = x;
	this.y = y;
	this.color = color;
	if(typeof this.color === 'undefined') {
		this.color = MAIN_COLOR;
	}
	this.width  = width;
	this.height = height;
	this.text = text;
	this.click = click;
	
	this.clicked = function(x, y) {
		if(this.x < x && this.y < y && this.x + this.width > x && this.y + this.height > y) {
			this.click();
			draw();
		}
	};
	
	this.draw = function() {
		context.fillStyle = this.color;
		context.rect(this.x, this.y, this.width, this.height);
		context.stroke();
		context.fillText(this.text, this.x + 2, this.y + this.height * .65);
	};
}
function chest(x, y, event) {
	this.x = x;
	this.y = y;
	this.event = event;
	
	this.open = function() {
		this.event();
	};
}
var enemies = new Object();

var enemy_name = "";

var ai_obj = new ai();

//Names: htop, node.js, rvm, java, gcc

enemy_name = "cron";

enemies[enemy_name] = new Object();
enemies[enemy_name]["name"] = enemy_name;
enemies[enemy_name]["attack"] = 3;
enemies[enemy_name]["defense"] = 1;
enemies[enemy_name]["health"] = 8;
enemies[enemy_name]["skill"] = 15;
enemies[enemy_name]["xp_bounty"] = 9;
enemies[enemy_name]["color"] = "#FFFF11";
enemies[enemy_name]["ai"] = ai_obj.seek_and_attack_player;

enemy_name = "firewall";

enemies[enemy_name] = new Object();
enemies[enemy_name]["name"] = enemy_name;
enemies[enemy_name]["attack"] = 2;
enemies[enemy_name]["defense"] = 2;
enemies[enemy_name]["health"] = 16;
enemies[enemy_name]["skill"] = 7;
enemies[enemy_name]["xp_bounty"] = 16;
enemies[enemy_name]["color"] = "#FF1111";
enemies[enemy_name]["ai"] = ai_obj.seek_and_attack_player;

enemy_name = "anti_virus";

enemies[enemy_name] = new Object();
enemies[enemy_name]["name"] = enemy_name;
enemies[enemy_name]["attack"] = 4;
enemies[enemy_name]["defense"] = 1;
enemies[enemy_name]["health"] = 8;
enemies[enemy_name]["skill"] = 10;
enemies[enemy_name]["xp_bounty"] = 18;
enemies[enemy_name]["color"] = "#EE00FF";
enemies[enemy_name]["ai"] = ai_obj.seek_and_attack_player;

enemy_name = "deep_scan";

enemies[enemy_name] = new Object();
enemies[enemy_name]["name"] = enemy_name;
enemies[enemy_name]["attack"] = 6;
enemies[enemy_name]["defense"] = 2;
enemies[enemy_name]["health"] = 14;
enemies[enemy_name]["skill"] = 14;
enemies[enemy_name]["xp_bounty"] = 19;
enemies[enemy_name]["color"] = "#CCFF33";
enemies[enemy_name]["ai"] = ai_obj.seek_and_attack_player;

enemy_name = "counter_hack";

enemies[enemy_name] = new Object();
enemies[enemy_name]["name"] = enemy_name;
enemies[enemy_name]["attack"] = 8;
enemies[enemy_name]["defense"] = 4;
enemies[enemy_name]["health"] = 17;
enemies[enemy_name]["skill"] = 16;
enemies[enemy_name]["xp_bounty"] = 25;
enemies[enemy_name]["color"] = "#FF9933";
enemies[enemy_name]["ai"] = ai_obj.seek_and_attack_player;

enemy_name = "clean_up";

enemies[enemy_name] = new Object();
enemies[enemy_name]["name"] = enemy_name;
enemies[enemy_name]["attack"] = 4;
enemies[enemy_name]["defense"] = 2;
enemies[enemy_name]["health"] = 5;
enemies[enemy_name]["skill"] = 35;
enemies[enemy_name]["xp_bounty"] = 22;
enemies[enemy_name]["color"] = "#AA9955";
enemies[enemy_name]["ai"] = ai_obj.random_and_attack_player;

function enemy(x, y, room, type) {
	this.x = x;
	this.y = y;
	this.type = type;
	this.name         = type["name"];
	this.attack       = type["attack"];
	this.defense      = type["defense"];
	this.health       = type["health"];
	this.max_health   = type["health"];
	this.skill        = type["skill"];
	this.xp_bounty    = type["xp_bounty"];
	this.color        = type["color"];
	this.ai           = type["ai"];
	this.room = room;
	this.direction = 1;
	var space_border = 2;

	this.recive_attack = function(damage, attacker) {
		hud.set_message("damage dealt");
		this.take_damage(damage);
	};

	this.attack_enemy = function(target) {
		if(Math.random() <= this.skill / target.skill) {
			if(random_range(0, 100) <= this.skill - target.skill) {
				target.recive_attack(this.attack * this.attack);
			} else {
				target.recive_attack(this.attack);
			}
		} else {
			hud.set_message("hostile script attack failed");
		}
	};

	this.take_damage = function(damage) {
		this.health -= damage - (this.defense * (1 - player.penetration));
		if(this.health <= 7 && player.abilities.includes("decompile")) {
			this.health = 0;
		}
		if(this.health <= 0) {
			hud.set_message("hostile script terminated");
		}
	};
	
	this.move = function() {
		return this.ai(this);
	};
	
	this.draw = function() {
		context.fillStyle = this.color;
		context.fillRect(this.room.x * ((BLOCK_WIDTH * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.x) + space_border, this.room.y * ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.y) + space_border, SPACE_SIZE - (space_border * 2), SPACE_SIZE - (space_border * 2));
	};
}

function hud(x, y, width, height) {
	
	this.x = x;
	this.y = y;
	this.font_size = 20;
	this.width = width;
	this.height = height;
	this.messages = [];
	this.pop_up_text = [];
	this.buttons = [];
	
	this.death_button_function = function() {
		transition_state("menu");
	};
	
	this.death_button = new button(canvas.width / 2 - 90, canvas.height / 2 + 40, 232, 40, " return to console", this.death_button_function, "#FF0000");
	this.start_button = new button(canvas.width / 2 - 120, canvas.height / 2 + 40, 90, 40, " login", this.death_button_function, "#FF0000");
	
	this.next_level_button = function() {
		hud.buttons = [];
		var current_level_data = level_data[level];
		new_level(current_level_data[0], current_level_data[1], current_level_data[2], current_level_data[3], current_level_data[4], current_level_data[5], current_level_data[6], current_level_data[7], current_level_data[8]);
		transition_state("game");
	};
	
	this.decryption_button = function() {
		if(player.level_points > 0) {
			player.level_points -= 1;
			player.level_skill("penetration", .1);
		}
	};
	
	this.threading_button = function() {
		if(player.level_points > 0) {
			player.level_points -= 1;
			player.level_skill("attack", 2);
		}
	};
	
	this.runtime_button = function() {
		if(player.level_points > 0) {
			player.level_points -= 1;
			player.level_skill("penetration", .05);
			player.level_skill("attack", 1);
		}
	};
	
	this.decompile_button = function() {
		find_func = function(button) {
			return button.text === " Decompile";
		};
		if(player.level_points > 2) {
			player.level_points -= 3;
			player.add_ability("decompile");
			hud.buttons.splice(hud.buttons.findIndex(find_func), 1);
		}
	};
	
	this.asyncronous_cpu_button = function() {
		find_func = function(button) {
			return button.text === " Asyncronous CPU";
		};
		if(player.level_points > 2) {
			player.level_points -= 3;
			player.add_ability("asyncronous_cpu");
			player.level_skill("penetration", .2);
			player.level_skill("attack", 4);
			hud.buttons.splice(hud.buttons.findIndex(find_func), 1);
		}
	};
	
	this.encoding_button = function() {
		if(player.level_points > 0) {
			player.level_points -= 1;
			player.level_skill("defense", 1);
		}
	};
	
	this.redundent_systems_button = function() {
		if(player.level_points > 0) {
			player.level_points -= 1;
			player.level_skill("health", 2);
		}
	};
	
	this.security_button = function() {
		if(player.level_points > 0) {
			player.level_points -= 1;
			player.level_skill("skill", 2);
		}
	};
	
	this.passcodes_button = function() {
		find_func = function(button) {
			return button.text === " Passcodes";
		};
		if(player.level_points > 2) {
			player.level_points -= 3;
			player.add_ability("passcodes");
			player.level_skill("skill", 7);
			hud.buttons.splice(hud.buttons.findIndex(find_func), 1);
		}
	};
	
	this.process_respawning_button = function() {
		find_func = function(button) {
			return button.text === " Process Respawning";
		};
		if(player.level_points > 2) {
			player.level_points -= 3;
			player.add_ability("process_respawning");
			hud.buttons.splice(hud.buttons.findIndex(find_func), 1);
		}
	};
	
	this.story_texts = [
							["Hacking Proceedure Review",
							 "Employee X047,",
							 "We are sending you into a",
							 "test server.",
							 "I want to make sure you",
							 "know the basics, remember:",
							 "",
							 "Navigate the directories",
							 "with WASD.",
							 "",
							 "Moving onto black spaces",
							 "will move you to the next",
							 "directory. The exit is white.",
							 "",
							 "Watch out for hostile programs",
							 "indicated by bright colored",
							 "squares. You can attack them",
							 "by moving into them.",
							 "But be careful, they will",
							 "damage your connection,",
							 "if it drops to zero, you",
							 "will have to try again.",
							 "",
							 "You will also find",
							 "code fragments which you",
							 "can use to improve your",
							 "hacking process.",
							 "",
							 "    -Your employer"],
							
							["Your first asignment",
							 "Employee X047,",
							 "We require the sensitive data",
							 "contained within the private",
							 "steams of various individuals.",
							 "Why is not important so do",
							 "not ask questions. Your",
							 "first mark is Jane Doe.",
							 "Learn all that you can.",
							 "Oh, and don't get caught",
							 "will you.",
							 "",
							 "    -Your employer"],
							 
							 ["A New Direction",
							 "Employee X047,",
							 "Good work on your last venture.",
							 "Now, this next task may seem",
							 "odd to you. We require data",
							 "from the Facebook wall of one",
							 "Jake Baker. He is an childish",
							 "individual, however, we believe",
							 "there's information of interest",
							 "to be located. Tred carefully.",
							 "",
							 "    -Your employer"],
							 
							 ["Moving Forward",
							 "Employee X047,",
							 "We are pleased by the data",
							 "you managed to recover, however",
							 "there is yet more to be done.",
							 "Your next target is John Doe.",
							 "Specifically, we need access to",
							 "his bank records so expect more",
							 "resistance this time around.",
							 "We trust you will not", 
							 "disappoint.",
							 "",
							 "    -Your employer"],
							 
							 ["High Stakes",
							 "Employee X047,",
							 "This next matter is of an",
							 "extremely sensitive nature",
							 "I trust I need not remind you",
							 "what will happen should you",
							 "fancy yourself bold enough",
							 "to leak this information.",
							 "Now, this next individual, a",
							 "one Tory Iceheart, is personal",
							 "secretary to some...important",
							 "people. We need what she knows.",
							 "Get it, and leave no traces",
							 "of your presence.",
							 "",
							 "    -Your employer"]
						];
						
	this.pop_up_text_data = [
							[["You will encounter various bits", "of information as you reach new", "directories"]],
							
							//These are tied to level 1
							[
							["Today I met this wonderful new guy.", "I did not know what to say to him -", "the anxiety is killing me!", "If only he knew how warm I could be…", "how warm I could be…"],
							["Brother insists that I be more careful", "putting revealing photos of myself on", "Facebook - I told him to shove off!", "It’s not like anyone can see it when", "it’s set to private...sheesh!"],
							["Mother and I had a falling out again…", "she insists I’m irresponsible with my time", "- as if! We’ll see how she feels when I forget", "to call her on Mother’s Day."],
							["I wish you were more available to go to the Mall.", "I need new clothes and my paycheck just came", "today. Let’s just say I can afford it!!"],
							["What did you think of that speech from", "Donald Duck? I tell you I’m one word away from", "going to one of his rallies and blowing", "everyone up!"]
							],
							
							//These are tied to level 2
							[
							["$80,000 - Radiation Treatment", "           - Approved by Doctor"],
							["$40,000 - Default on Housing Payment"],
							["$10,200 - Gambling, Chesto’s Casino and Spa"],
							["$8,000 - Payment Transfer to Joanna Price,", "           Specification: Child Care"],
							["NOTICE: You’ve exceeded credit on this account", "           - please contact your local banker"]
							],
							
							//These are tied to level 3
							[
							["Yo! Come to the junction today", "- we’re doing something fun and slightly illegal…", "you’d all better come or I’m coming after you!"],
							["Smoke-out going on in the forest.", "Bring your friends, or don’t, whatever!"],
							["Send your prayers for my Mom,", "she’s not been doing well lately", "- I’m… I’m really serious about this", "guys so don’t laugh, alright"],
							["I want you all to come to my charity event", "- yeah yeah it’s for class alright don’t", "think I’ve gone soft alright…", "just shut up!"]
							],
							
							//These are tied to level 4
							[
							["The board has advised I move the offshore", "account to somewhere other than Switzerland,", "they say it’s too cliche. I wish they’d just", "pay the taxes and be done with it -", "their money is more important to them than their", "wives!"],
							["This reporter for the Daily Planet has been", "hounding my office for a comment on the recent", "scandal. I keep telling her that no comment", "means no comment! I, however, don’t doubt the", "chairman is capable of committing murder but", "it’s not my place", "to say anything beyond this log", "- after all this salary is keeping me afloat."],
							["The FBI came in today with a warrant.", "The board has already had the files destroyed.", "Heh clever buggars.", "I suppose the powerful really don’t get", "what’s coming to them - then again I don’t much", "care."],
							["IT sent me a message about security breaches.", "They say my password isn’t sufficiently difficult.", "I added a number."]
							]
						];
	
	var OSName = "Unknown OS";
	if(navigator.appVersion.indexOf("Win")!=-1) OSName = "Windows";
	if(navigator.appVersion.indexOf("Mac")!=-1) OSName = "MacOS";
	if(navigator.appVersion.indexOf("X11")!=-1) OSName = "UNIX";
	if(navigator.appVersion.indexOf("Linux")!=-1) OSName = "Linux";

	this.set_message = function(message) {
		this.messages.push(message);
		if(this.messages.length >= 14) {
			this.messages.shift();
		}
	};

	this.init_menu = function() {
		this.buttons.push(new button(1560, 640, 170, 40, " begin attack", this.next_level_button, "#FF0000"));
		
		//Names: Credentials
		
		this.buttons.push(new button(500, 160, 250, 40, " decryption", this.decryption_button));
		this.buttons.push(new button(500, 260, 250, 40, " threading", this.threading_button));
		this.buttons.push(new button(500, 360, 250, 40, " runtime", this.runtime_button));
		
		//Instakill enemies that drop below 8 health
		if(!player.abilities.includes("decompile")) {
			this.buttons.push(new button(500, 560, 250, 40, " decompile", this.decompile_button));
		}
		
		//Large attack and penetration increase
		if(!player.abilities.includes("asyncronous_cpu")) {
			this.buttons.push(new button(500, 660, 250, 40, " asyncronous CPU", this.asyncronous_cpu_button));
		}
		
		this.buttons.push(new button(810, 160, 250, 40, " encoding", this.encoding_button));
		this.buttons.push(new button(810, 260, 250, 40, " redundent systems", this.redundent_systems_button));
		this.buttons.push(new button(810, 360, 250, 40, " security", this.security_button));
		
		//Large skill increase
		if(!player.abilities.includes("passcodes")) {
			this.buttons.push(new button(810, 560, 250, 40, " passcodes", this.passcodes_button));
		}
		
		//Sets player to 5 health after a fatal hit once per level
		if(!player.abilities.includes("process_respawning")) {
			this.buttons.push(new button(810, 660, 250, 40, " process respawning", this.process_respawning_button));
		}
		
		// this.buttons.push(new button(1150, 160, 250, 40, " SSH Monitoring", this.increase_health_button));
		// this.buttons.push(new button(1150, 260, 250, 40, " Backdoor Connection", this.increase_health_button));
		// this.buttons.push(new button(1150, 360, 250, 40, " System Memory", this.increase_health_button));
		// this.buttons.push(new button(1150, 460, 250, 40, " User Logs", this.increase_health_button));
		
		this.messages = [];
	};
	
	this.pop_up = function() {
		context.lineWidth = "2";
		context.strokeStyle = MAIN_COLOR;
		context.rect(840, 20, 600, (this.pop_up_text.length + 5) * 20);
		context.fillStyle = "#009900";
		context.fillRect(840, 20, 600, (this.pop_up_text.length + 5) * 20);
		context.fillStyle = "#000015";
		context.fillText("data entry found:", 850, 40);
		context.fillText("press space to dismiss", 850, (this.pop_up_text.length + 5) * 20);
		context.stroke();
		for(var i = 0; i < this.pop_up_text.length; i++) {
			context.fillText(this.pop_up_text[i], 850, 82 + (i * 20));
		}
	};

	this.draw = function() {
		if(state === "game") {
			this.draw_game();
		} else if(state === "menu") {
			this.draw_menu();
		} else if(state === "death") {
			this.draw_death();
		} else if(state === "start") {
			this.draw_start();
		} else if(state === "win") {
			this.draw_win();
		}
		context.fillStyle = MAIN_COLOR;
		if(state !== "death" && state !== "start" && state !== "win") {
			context.fillText("connection strength: " + (Math.floor((player.health / player.max_health) * 100)) + "%", this.x + 20, 100);
			context.fillText("code fragments: " + (Math.floor((player.xp / player.xpn) * 100)) + "%", this.x + 20, this.y + 120);
		}
	};
	
	this.draw_game = function() {
		if(OSName === "MacOS") {
			context.font = this.font_size + "px Andale Mono";
		} else if(OSName === "Windows") {
			context.font = this.font_size + "px Courier";
		}
		context.fillStyle = MAIN_COLOR;
		context.strokeStyle = MAIN_COLOR;
		context.lineWidth = "2";
		context.rect(this.x, this.y, this.width, this.height);
		context.stroke();
		context.fillText("------hack status------", 1510, 70);
		context.fillText("------log------", 1570, 170);
		for(var i = 0; i < this.messages.length; i++) {
			context.fillText(this.messages[i], this.x + 20, this.y + 190 + (20 * i));
		}
		if(this.pop_up_text.length > 0) {
			this.pop_up();
		}
		context.fillStyle = MAIN_COLOR;
		context.fillText("hostile programs:", this.x + 20, this.y + 480);
		for(var i = 0; i < player.current_room.enemies.length; i ++) {
			context.fillStyle = MAIN_COLOR;
			context.fillText(player.current_room.enemies[i].name + ' ' + (Math.floor((player.current_room.enemies[i].health / player.current_room.enemies[i].max_health) * 100)) + "%", this.x + 20, this.y + 500 + (i * 20));
			context.fillStyle = player.current_room.enemies[i].color;
			context.fillRect(this.x + 2, this.y + 490 + (i * 20), SPACE_SIZE, SPACE_SIZE);
		}
		context.fillStyle = MAIN_COLOR;
		context.fillText("data node", this.x + 20, this.y + 780);
		context.fillText("exit", this.x + 280, this.y + 780);
		context.fillStyle = CHEST_COLOR;
		context.fillRect(this.x + 140, this.y + 765, SPACE_SIZE, SPACE_SIZE);
		context.fillStyle = EXIT_COLOR;
		context.fillRect(this.x + 340, this.y + 765, SPACE_SIZE, SPACE_SIZE);
	};

	this.draw_death = function() {
		context.font = this.font_size + "px Courier";
		context.strokeStyle = MAIN_COLOR;
		context.fillStyle = MAIN_COLOR;
		context.fillText(">systems failing", canvas.width / 2 - 100, 280);
		context.fillText(">fatal error", canvas.width / 2 - 100, 300);
		context.fillText(">illegal access detected", canvas.width / 2 - 100, 320);
		//context.fillText(">connection terminated", canvas.width / 2 - 100, 340);
		
		context.fillText("____ ____ _  _ _  _ ____ ____ ___ _ ____ _  _    _    ____ ____ ___", canvas.width / 2 - 350, 360);
		context.fillText("|    |  | |\\ | |\\ | |___ |     |  | |  | |\\ |    |    |  | [__   |  ", canvas.width / 2 - 350, 380);
		context.fillText("|___ |__| | \\| | \\| |___ |___  |  | |__| | \\|    |___ |__| ___]  |  ", canvas.width / 2 - 350, 400);
		
		context.stroke();
		this.death_button.draw();
	};
	
	this.draw_start = function() {
		context.font = this.font_size + "px Courier";
		context.strokeStyle = MAIN_COLOR;
		context.fillStyle = MAIN_COLOR;
		context.fillText("____ _   _ ___  ____ ____ ", canvas.width / 2 - 350, 280);
		context.fillText("|     \\_/  |__] |___ |  |", canvas.width / 2 - 350, 300);
		context.fillText("|___   |   |__] |___ |  |", canvas.width / 2 - 350, 320);
		
		context.fillText(" __  ____ ____ _  _ ____", canvas.width / 2 - 98, 320);
		context.fillText("| \\  |  | | __ |  | |___", canvas.width / 2 - 98, 340);
		context.fillText("|  \\ |__| |__] |__| |___", canvas.width / 2 - 98, 360);
		context.stroke();
		this.start_button.draw();
	};
	
	this.draw_win = function() {
		context.font = this.font_size + "px Courier";
		context.strokeStyle = MAIN_COLOR;
		context.fillStyle = MAIN_COLOR;
		context.fillText("_  _ ____ ____ _  _    ____ ____ _  _ ___  _    ____ ___ ____  ", canvas.width / 2 - 350, 280);
		context.fillText("|__| |__| |    |_/     |    |  | |\\/| |__] |    |___  |  |___ ", canvas.width / 2 - 350, 300);
		context.fillText("|  | |  | |___ | \\_    |___ |__| |  | |    |___ |___  |  |___ ", canvas.width / 2 - 350, 320);
		context.fillText("Cyber Rogue", canvas.width / 2 - 350, 480);
		context.fillText("a game by", canvas.width / 2 - 325, 520);
		context.fillText("Joseph Rogers", canvas.width / 2 - 300, 560);
		context.fillText("Matthew Loyola", canvas.width / 2 - 300, 580);
		context.fillText("John Chau", canvas.width / 2 - 300, 600);
		context.fillText("Kevin Vue", canvas.width / 2 - 300, 620);
		context.stroke();
	};
	
	
	// context.fillText("____ _   _ ___  ____ ____ ", canvas.width / 2 - 350, 280);
	// context.fillText("|     \\_/  |__] |___ |__/", canvas.width / 2 - 350, 300);
	// context.fillText("|___   |   |__] |___ |  \\", canvas.width / 2 - 350, 320);
// 		
	// context.fillText("____ ____ ____ _  _ ____", canvas.width / 2 - 100, 320);
	// context.fillText("|__/ |  | | __ |  | |___", canvas.width / 2 - 100, 340);
	// context.fillText("|  \\ |__| |__] |__| |___", canvas.width / 2 - 100, 360);
	
	// context.fillText("____ _   _ ___  ____ ____ ____ ____ ____ _  _ ____", canvas.width / 2 - 350, 280);
	// context.fillText("|     \\_/  |__] |___ |__/ |__/ |  | | __ |  | |___", canvas.width / 2 - 350, 300);
	// context.fillText("|___   |   |__] |___ |  \\ |  \\ |__| |__] |__| |___", canvas.width / 2 - 350, 320);

	this.draw_menu = function() {
		context.font = this.font_size + "px Courier";
		context.fillStyle = MAIN_COLOR;
		context.strokeStyle = MAIN_COLOR;
		context.lineWidth = "2";
		context.rect(20, 20, canvas.width - 40, canvas.height - 40);
		context.rect(40, 40, 400, canvas.height - 80);
		context.rect(460, 40, 1000, canvas.height - 80);
		context.rect(1480, 40, 330, canvas.height - 80);
		context.stroke();
		
		context.fillText("-----email-----", 140, 65);
		context.fillText("[----------new message----------]", 41, 100);
		context.fillText(this.story_texts[level][0], 80, 130);
		for(var i = 1; i < this.story_texts[level].length; i++) {
			context.fillText(this.story_texts[level][i], 76, 160 + (i * 20));
		}
		context.fillText("[----------end message----------]", 41, 170 + (this.story_texts[level].length * 20));
		
		context.fillText("------script console------", 798, 70);
		
		context.fillText("------hack status------", 1510, 70);
		
		if(level !== 0) {
		
			context.fillText("code snippets -->", 720, 100);
			context.fillText("<-- spend on upgrades", 970, 100);
			
			var money_color = "#CC9922";
			
			context.fillStyle = money_color;
			context.fillText(player.level_points, 942, 100);
			
			context.fillStyle = MAIN_COLOR;
			context.fillText("[---targeted scripts---]", 480, 130);
			context.fillText("[----protective scripts----]", 780, 130);
			//context.fillText("[------misc scripts------]", 1130, 130);
			
			if(!player.abilities.includes("decompile")) {
				context.font = this.font_size + "px Lucida Console";
				context.fillStyle = money_color;
				context.fillText("3", 475, 582);
				context.font = 15 + "px Courier";
				context.fillStyle = MAIN_COLOR;
				context.fillText("Deconstruct failing programs", 500, 620);
				context.fillText("to delete them as they fail", 500, 640);
			}
			
			if(!player.abilities.includes("asyncronous_cpu")) {
				context.font = this.font_size + "px Courier";
				context.fillStyle = money_color;
				context.fillText("3", 475, 682);
				context.font = 15 + "px Lucida Console";
				context.fillStyle = MAIN_COLOR;
				context.fillText("Run attack scripts in async", 500, 720);
				context.fillText("to greatly increase offense", 500, 740);
			}
			
			if(!player.abilities.includes("passcodes")) {
				context.font = this.font_size + "px Courier";
				context.fillStyle = money_color;
				context.fillText("3", 785, 582);
				context.font = 15 + "px Lucida Console";
				context.fillStyle = MAIN_COLOR;
				context.fillText("Passcode security allows for", 812, 620);
				context.fillText("greater avoidence of attacks", 812, 640);
			}
			
			if(!player.abilities.includes("process_respawning")) {
				context.font = this.font_size + "px Courier";
				context.fillStyle = money_color;
				context.fillText("3", 785, 682);
				context.font = 15 + "px Lucida Console";
				context.fillStyle = MAIN_COLOR;
				context.fillText("Respawn hacking scripts", 812, 720);
				context.fillText("on first failure", 812, 740);
			}
			
			context.font = this.font_size + "px Courier";
			context.fillStyle = money_color;
			
			context.fillText("1", 785, 182);
			context.fillText("1", 785, 282);
			context.fillText("1", 785, 382);
			
			context.fillText("1", 475, 182);
			context.fillText("1", 475, 282);
			context.fillText("1", 475, 382);
			
			//context.fillText("2", 1125, 182);
			//context.fillText("2", 1125, 282);
			//context.fillText("2", 1125, 382);
			//context.fillText("2", 1125, 482);
			
			//context.font = 10 + "px Lucida Console";
			
			//context.fillText("-cost-", 462, 150);
			
			context.font = 15 + "px Courier";
			context.fillStyle = MAIN_COLOR;
			
			context.fillText("Increase ability to take", 500, 220);
			context.fillText("down defensive programs", 500, 240);
			context.fillText("Run script more effeciently", 500, 320);
			context.fillText("to inflict more damage", 500, 340);
			context.fillText("Faster execution speed for", 500, 420);
			context.fillText("more accurate attacks ", 500, 440);
			
			context.fillText("Better security to improve", 812, 220);
			context.fillText("resistance to attacks", 812, 240);
			context.fillText("Increased redudency to", 812, 320);
			context.fillText("increase connection strength", 812, 340);
			context.fillText("Improve security routines", 812, 420);
			context.fillText("to be harder to attack", 812, 440);
			
			context.font = this.font_size + "px Courier";
			
			// context.fillText("Controls:", 800, 450);
			// context.fillText("W: Move up", 840, 470);
			// context.fillText("A: Move left", 840, 490);
			// context.fillText("S: Move down", 840, 510);
			// context.fillText("D: Move right", 840, 530);
			// context.fillText("Move into enemies to attack", 840, 550);
			// context.fillText("Player", 1200, 400);
			// context.fillText("Enemy", 1200, 440);
			// context.fillText("Chest", 1200, 480);
			// context.fillText("Exit", 1200, 520);
			// context.fillStyle = PLAYER_COLOR;
			// context.fillRect(1200, 405, SPACE_SIZE, SPACE_SIZE);
			// context.fillStyle = "#FF0000";
			// context.fillRect(1200, 445, SPACE_SIZE, SPACE_SIZE);
			// context.fillStyle = CHEST_COLOR;
			// context.fillRect(1200, 485, SPACE_SIZE, SPACE_SIZE);
			// context.fillStyle = EXIT_COLOR;
			// context.fillRect(1200, 525, SPACE_SIZE, SPACE_SIZE);
			for(var i = 0; i < this.buttons.length; i++) {
				this.buttons[i].draw();
			}
		} else {
			//draw next level button
			this.buttons[0].draw();
		}
	};
}
//http://people.ucsc.edu/~jqrogers/

canvas = document.getElementById('rogue');
context = canvas.getContext('2d');

//TODO: Create ESC menu
//TODO: Add AI
//TODO: Add sound
//TODO: Tweak story
//TODO: Balance

var HUD_BUFFER = 10;
var HUD_WIDTH = canvas.width * .2;
var HUD_HEIGHT = canvas.height * .98;
var HUD_X = canvas.width - HUD_WIDTH - HUD_BUFFER;
var HUD_Y = canvas.height - HUD_HEIGHT - HUD_BUFFER;

var BLOCK_WIDTH = 10;
var BLOCK_HEIGHT = 15;
var BLOCK_DISTANCE = 10;
var SPACE_SIZE = 15;
var BLOCKS_WIDTH  = Math.floor((canvas.width  - HUD_WIDTH  - HUD_BUFFER) / ((BLOCK_WIDTH  * SPACE_SIZE) + BLOCK_DISTANCE));
var BLOCKS_HEIGHT = Math.floor((canvas.height)                           / ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE));

var MAIN_COLOR = "#00FF00";
var BACKGROUND_COLOR = "#000000";
var PLAYER_COLOR = "#0000FF";
var CHEST_COLOR = "#003300";
var EXIT_COLOR = "#FFFFFF";

var TICK_KEY_VALUES = [83, 68, 87, 65, 37, 38, 39, 40];

//new_level(mirw, marw, mirh, marh, tnr, me, nc, spawn weight, relink weight)
var level_data = [
[3, 3, 4, 4,  6, 1, 1, 50, 70],
[4, 5, 6, 8, 10, 2, 2, 20, 80],
[5, 3, 7, 5, 12, 3, 2, 80, 30],
[4, 4, 9, 9, 14, 4, 3, 75, 75],
[3, 4, 7, 6, 16, 5, 4, 45, 50]
];

var enemy_level_data = [
["cron"],
["cron", "firewall"],
["firewall", "anti_virus", "clean_up"],
["cron", "firewall", "deep_scan", "clean_up"],
["cron", "firewall", "anti_virus", "deep_scan", "counter_hack"]
];

document.addEventListener("keydown", handle_keypress);
document.addEventListener("mouseup", handle_mouse_up);

var rooms = [];
var player = new player();
var state = "start";
var hud = new hud(HUD_X, HUD_Y, HUD_WIDTH, HUD_HEIGHT);

var level = 0;
var num_rooms = 1;
var target_num_rooms = 1;

var last_room_spawned = null;

var debug = false;

//Prevent enemies from moving, used when player enters new room;
var enemy_move_lock = false;

var current_level_data = level_data[level];
new_level(current_level_data[0], current_level_data[1], current_level_data[2], current_level_data[3], current_level_data[4], current_level_data[5], current_level_data[6], current_level_data[7], current_level_data[8]);

hud.init_menu();
draw();

function next_level() {
	level++;
	if(level > 4) {
		transition_state("win");
	} else {
		transition_state("menu");
	}
}

function new_level(mirw, marw, mirh, marh, tnr, me, nc, spawn_weight, relink_weight) {
	rooms = [];
	for(var i = 0; i < BLOCKS_WIDTH; i++) {
	    rooms.push([]);
	}
	
	var min_room_width  = mirw;
	var max_room_width  = marw;
	var min_room_height = mirh;
	var max_room_height = marh;
	
	var r1 = new room(random_range(0, 1), random_range(0, 1), min_room_width, min_room_height);
	num_rooms = 1;
	target_num_rooms = tnr;
	
	var max_enemies = me;
	var num_chests = nc;
	
	r1.spawn_links(min_room_width, max_room_width, min_room_height, max_room_height, spawn_weight, relink_weight);
	
	while(num_rooms < target_num_rooms) { 
	   spawn_rooms(min_room_width, max_room_width, min_room_height, max_room_height, spawn_weight, relink_weight);
	}
	
	spawn_enemies(Math.floor(max_enemies));
	spawn_chests(nc);
	player.current_room = r1;
	player.x = 1;
	player.y = 1;
	r1.seen = true;
	r1.enemies = [];
	
	var rx;
	var ry;
	for(var i = 0; i < hud.pop_up_text_data[level].length; i++) {
		while(true) {
			rx = random_range(0, BLOCKS_WIDTH  - 1);
			ry = random_range(0, BLOCKS_HEIGHT - 1);
			if(typeof rooms[rx] !== "undefined" && typeof rooms[rx][ry] !== "undefined" && rooms[rx][ry] !== r1 && rooms[rx][ry].pop_up_text === null) {
				break;
			}
		}
		rooms[rx][ry].pop_up_text = hud.pop_up_text_data[level][i];
	}
	
	var exit_room = last_room_spawned;
	exit_room.floor[random_range(1, exit_room.width - 2)][random_range(1, exit_room.height - 2)] = "x";

	player.health = player.max_health;
}

function spawn_rooms(min_width, max_width, min_height, max_height, spawn_weight, relink_weight) {
    for(var i = BLOCKS_WIDTH - 1; i >= 0; i--) {
        for(var j = BLOCKS_HEIGHT - 1; j >= 0; j--) {
            if(typeof rooms[i][j] !== "undefined") {
                rooms[i][j].spawn_links(min_width, max_width, min_height, max_height, spawn_weight, relink_weight);
                return;
            }
        }
    } 
}

function spawn_enemies(quantity) {
	for(var i = BLOCKS_WIDTH - 1; i >= 0; i--){
        for(var j = BLOCKS_HEIGHT - 1; j >= 0; j--) {
            if(typeof rooms[i][j] !== 'undefined') {
                rooms[i][j].spawn_enemies(random_range(0, quantity));
            }
        }
    }
}

function spawn_chests(quantity) {
	while(quantity > 0) {
		var block_x = random_range(0, BLOCKS_WIDTH - 1);
		var block_y = random_range(0, BLOCKS_WIDTH - 1);
	    if(typeof rooms[block_x] !== 'undefined' && typeof rooms[block_x][block_y] !== 'undefined' && rooms[block_x][block_y].chest === null) {
	    	rooms[block_x][block_y].spawn_chest();
	    	quantity--;
	    }
    }
}

function draw() {
    canvas.width = canvas.width;
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.width, canvas.height);
    if(state === "game") {
	    for (var i = 0; i < rooms.length; i++) {
	        for (var j = 0; j < 10; j++) {
	            if(typeof rooms[i][j] !== 'undefined') {
	                rooms[i][j].draw();
	            }
	        }
	    }
	 	player.draw();
    }
    hud.draw();
}

function transition_state(new_state) {
	state = new_state;
	if(state === "menu") {
		hud.init_menu();
		player.health = player.max_health;
	} else {
		if(player.abilities.includes("process_respawning")) {
			player.respawn = true;
		}
	}
	draw();
}

function handle_keypress(e) {
    if(state === "game") {
	    var code = e.keyCode;
	    var movement = [0, 0];
	    if(code === 83 || code === 40) {
	        movement = [0, 1];
	    } else if(code === 68 || code === 39) {
	        movement = [1, 0];
	    } else if(code === 87 || code === 38) {
	        movement = [0, -1];
	    } else if(code === 65 || code === 37) {
	        movement = [-1, 0];
	    } else if(code === 32) {
	    	hud.pop_up_text = [];
	    	draw();
	    }
	    if(TICK_KEY_VALUES.includes(code)) {
	    	player.current_room.move_player(movement);
	        player.current_room.move_enemies();
	    	draw();
	    }
	}
}

function handle_mouse_up(e) {
	for(var i = 0; i < hud.buttons.length; i++) {
		hud.buttons[i].clicked(e.clientX, e.clientY);
	}
	hud.death_button.clicked(e.clientX, e.clientY);
}

function player() {
	this.x;
	this.y;
	this.color = PLAYER_COLOR;
	this.attack = 4;
	this.max_health = 10;
	this.health = this.max_health;
	this.skill = 23;
	//Pen = % of Defense ignored
	this.penetration = 0;
	this.defense = 1;
	this.xp = 0;
	this.xpn = 100;
	this.abilities = [];
	this.level = 1;
	this.level_points = 2;
	this.respawn = false;
	this.current_room = null;
	
	var space_border = 1;
	
	this.attack_enemy = function(enemy) {
		if(Math.random() <= this.skill / enemy.skill) {
			if(random_range(0, 100) <= this.skill - enemy.skill) {
				enemy.recive_attack(this.attack * 2, this);
			} else {
				enemy.recive_attack(this.attack, this);
			}
		} else {
			hud.set_message("attack failed");
		}
	};

	this.recive_attack = function(damage) {
		this.take_damage(damage);
		hud.set_message("damage taken");
	};

	this.take_damage = function(damage) {
		if(damage - this.defense > 0) {
			this.health -= damage - this.defense;
			if(this.health <= 0) {
				if(this.respawn) {
					this.health = 5;
					hud.set_message("critical failure recoverd");
				} else {
					transition_state("death");
				}
			}
		} else {
			hud.set_message("enemy attack ineffective");
		}
	};

	this.gain_xp = function(amount) {
		this.xp += amount;
		if(this.xp >= this.xpn) {
			this.level_up();
		}
	};
	
	this.gain_money = function(amount) {
		this.money += amount;
	};
	
	this.level_up = function() {
		this.level_points += 1;
		this.level += 1;
		this.xp -= this.xpn;
		hud.set_message("Level up");
	};
	
	this.add_ability = function(ability) {
			this.abilities.push(ability);
	};
	
	this.level_skill = function(skill, amount) {
		if(this.level_points > 0) {
			if(skill === "health") {
				this.max_health += amount;
				this.health = this.max_health;
			} else if (skill === "attack") {
				this.attack += amount;
			} else if (skill === "skill") {
				this.skill += amount;
			} else if (skill === "penetration") {
				this.penetration += amount;			
			}  else if (skill === "defense") {
				this.defense += amount;			
			}
		}
	};

	this.draw = function() {
		context.fillStyle = this.color;
		context.fillRect(this.current_room.x * ((BLOCK_WIDTH * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.x) + space_border, this.current_room.y * ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.y) + space_border, SPACE_SIZE - (space_border * 2), SPACE_SIZE - (space_border * 2));
	};
}
//-: open space, d: door, x: exit, c: chest
var OPEN_SPACES = ["-", "d", "x", "c"];

function room(x, y, width, height) {
    this.north = null;
    this.south = null;
    this.east  = null;
    this.west  = null;

    this.north_door = null;
    this.south_door = null;
    this.east_door  = null;
    this.west_door  = null;

    this.x = x;
    this.y = y;
    this.width  = width;
    this.height = height;

	this.xcor = this.x * ((BLOCK_WIDTH  * SPACE_SIZE) + BLOCK_DISTANCE);
	this.ycor = this.y * ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE);

    this.seen = false;
    
    this.pop_up_text = null;

    this.floor = [];
    for(var i = 0; i < this.width; i++) {
        var row = [];
        for(var j = 0; j < this.height; j++) {
            row.push("-");
        }
        this.floor.push(row);
    }

    rooms[x][y] = this;
    
    this.enemies = [];
    this.enemy_x;
    this.enemy_y;
    
    this.chest = null;
    
    this.spawn_enemies = function(quantity) {
        if(quantity > (this.width - 2) * (this.height - 2)) {
        	quantity = (this.width - 2) * (this.height - 2);
        }
        for(var i = 0; i < quantity; i++) {
        	while(this.floor[this.enemy_x = random_range(1, this.width - 2)][this.enemy_y = random_range(1, this.height - 2)] !== "-");
        	this.enemy = new enemy(this.enemy_x, this.enemy_y, this, enemies[enemy_level_data[level][random_range(0, enemy_level_data[level].length - 1)]]);
            this.floor[this.enemy_x][this.enemy_y] = "e";
        	this.enemies.push(this.enemy);
        }
        for(var i = 0; i < this.floor.length; i++) {
            for(var j = 0; j < this.floor[i].length; j ++) {
                if(this.floor[i][j] === "e") {
                    this.floor[i][j] = "-";
                }
            }
        }
    };
    
    //Chest functions
    
    this.chest_gain_xp = function() {
		player.gain_xp(25);
		hud.set_message("code fragments found");
	};
	
	this.chest_gain_health = function() {
		player.level_skill("health", 1);
		hud.set_message("script durability increased");
	};
	
	this.chest_gain_attack = function() {
		player.level_skill("attack", 1);
		hud.set_message("script offense increased");
	};
	
	this.chest_gain_skill = function() {
		player.level_skill("skill", 1);
		hud.set_message("script speed increased");
	};
	
	this.chest_gain_penetration = function() {
		player.level_skill("penetration", 1);
		hud.set_message("script detection increased");
	};
	
	this.chest_gain_defense = function() {
		player.level_skill("defense", 1);
		hud.set_message("script encryption increased");
	};
	
	//End chest functions
    
    var chest_functions = [this.chest_gain_xp, this.chest_gain_health, this.chest_gain_attack, this.chest_gain_skill, this.chest_gain_penetration, this.chest_gain_defense];
    
    this.spawn_chest = function() {
    	var chest_x;
    	var chest_y;
    	console.log("chest");
    	while(this.floor[chest_x = random_range(1, this.width - 2)][chest_y = random_range(1, this.height - 2)] !== "-");
        this.chest = new chest(chest_x, chest_y, chest_functions[random_range(0, chest_functions.length - 1)]);
        this.floor[chest_x][chest_y] = "c";
    };

    this.move_enemies = function() {
        if(enemy_move_lock === false) {
	        for(var i = 0; i < this.enemies.length; i++) {
	            var movement = this.enemies[i].move();
	            if(this.validate_move(movement, this.enemies[i])) {
	                this.enemies[i].x += movement[0];
	                this.enemies[i].y += movement[1];
	            }
	        }
	    }   
    };

    this.move_player = function(movement) {
        enemy_move_lock = false;
        if(this.validate_move(movement, player)) {
            if(this.floor[player.x + movement[0]][player.y + movement[1]] === "d") {
            	player.x += movement[0];
            	player.y += movement[1];
                if(this.north_door !== null && this.north_door[0] === player.x && this.north_door[1] === player.y) {
                    player.current_room = this.north;
                    player.x = this.north.south_door[0];
                    player.y = this.north.south_door[1];
                } else if(this.south_door !== null && this.south_door[0] === player.x && this.south_door[1] === player.y) {
                    player.current_room = this.south;
                    player.x = this.south.north_door[0];
                    player.y = this.south.north_door[1];
                } else if(this.east_door !== null && this.east_door[0] === player.x && this.east_door[1] === player.y) {
                    player.current_room = this.east;
                    player.x = this.east.west_door[0];
                    player.y = this.east.west_door[1];
                } else if(this.west_door !== null && this.west_door[0] === player.x && this.west_door[1] === player.y) {
                    player.current_room = this.west;
                    player.x = this.west.east_door[0];
                    player.y = this.west.east_door[1];
                }
                player.current_room.seen = true;
                if(player.current_room.pop_up_text !== null) {
                	hud.pop_up_text = player.current_room.pop_up_text;
                }
                player.current_room.pop_up_text = null;
                enemy_move_lock = true;
            } else if(this.floor[player.x + movement[0]][player.y + movement[1]] === "c") {
            	this.chest.open();
            	this.floor[this.chest.x][this.chest.y] = "-";
            } else if(this.floor[player.x + movement[0]][player.y + movement[1]] === "x") {
            	next_level();
            } else {
            	player.x += movement[0];
            	player.y += movement[1];
            }
        } else if(this.validate_attack(movement, player)) {
        	for(var i = 0; i < this.enemies.length; i++) {
            	if(this.enemies[i].x === player.x + movement[0] && this.enemies[i].y === player.y + movement[1]) {
            		player.attack_enemy(this.enemies[i]);
            		if(this.enemies[i].health <= 0) {
            			this.kill(this.enemies[i]);
            		}
                    return;
            	}
        	}
        }
    };
    
    this.kill = function(enemy) {
    	this.enemies.splice(this.enemies.indexOf(enemy), 1);
        player.gain_xp(enemy.xp_bounty);
    };

    this.set_door = function(direction, room) {
        if(direction === "north" && this.north === null) {
            this.north = room;
            this.north_door = [random_range(1, this.width - 2), 0];
            this.floor[this.north_door[0]][this.north_door[1]] = 'd';
        } else if(direction === "south" && this.south === null) {
            this.south = room;
            this.south_door = [random_range(1, this.width - 2), this.height - 1];
            this.floor[this.south_door[0]][this.south_door[1]] = 'd';
        } else if(direction === "east" && this.east === null) {
            this.east = room;
            this.east_door = [this.width - 1, random_range(1, this.height - 2)];
            this.floor[this.east_door[0]][this.east_door[1]] = 'd';
        } else if(direction === "west" && this.west === null) {
            this.west = room;
            this.west_door = [0, random_range(1, this.height - 2)];
            this.floor[this.west_door[0]][this.west_door[1]] = 'd';
        }
    };

    this.validate_move = function(movement, unit) {
        if(typeof this.floor[unit.x + movement[0]] !== 'undefined' && typeof this.floor[unit.x + movement[0]][unit.y + movement[1]] !== 'undefined' && OPEN_SPACES.includes(this.floor[unit.x + movement[0]][unit.y + movement[1]])) {
            for(var i = 0; i < this.enemies.length; i++) {
            	if(unit.x + movement[0] === this.enemies[i].x && unit.y + movement[1] === this.enemies[i].y) {
            		return false;
            	}
            }
            return true;
        }
        return false;
    };

    this.validate_attack = function(movement, unit) {
        if(typeof this.floor[unit.x + movement[0]] !== 'undefined' && typeof this.floor[unit.x + movement[0]][unit.y + movement[1]] !== 'undefined') {
            return true;
        }
        return false;
    };

    this.draw = function() {
        context.fillStyle = MAIN_COLOR;
        context.strokeStyle = MAIN_COLOR;
        context.lineWidth="2";
        var space_border = 2;
        if(this.seen || debug) {
            if(player.current_room === this || debug) {
            	if(debug && last_room_spawned === this) {
            		context.strokeStyle = "#FF0000";
            	}
                context.rect(this.xcor, this.ycor, this.width * SPACE_SIZE, this.height * SPACE_SIZE);
                context.stroke();
                for(var i = 0; i < this.floor.length; i++) {
                    for(var j = 0; j < this.floor[i].length; j ++) {
                        if(this.floor[i][j] === "-") {
                        	context.fillStyle = MAIN_COLOR;
                        } else if(this.floor[i][j] === "x") {
                        	context.fillStyle = EXIT_COLOR;
                        } else if(this.floor[i][j] === "c") {
                        	context.fillStyle = CHEST_COLOR;
                        } else {
                        	context.fillStyle = "#000000";
                        }
                        context.fillRect(this.xcor + (SPACE_SIZE * i) + space_border, this.ycor + (SPACE_SIZE * j) + space_border, SPACE_SIZE - (space_border * 2), SPACE_SIZE - (space_border * 2));
                    }
                }
                for(var i = 0; i < this.enemies.length; i++) {
                    this.enemies[i].draw();
                }
            } else {
                context.fillRect(this.xcor, this.ycor, this.width * SPACE_SIZE, this.height * SPACE_SIZE);
            }
            this.draw_doors();
        }
    };

    this.draw_doors = function() {
        if(this.north !== null) {
            context.beginPath();
            context.moveTo(this.x * ((BLOCK_WIDTH * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.north_door[0]) + SPACE_SIZE / 2, this.y * ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.north_door[1]));
            context.lineTo(this.north.x * ((BLOCK_WIDTH * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.north.south_door[0]) + SPACE_SIZE / 2, this.north.y * ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * (this.north.south_door[1] + 1)));
            context.stroke();
        }
        if(this.south !== null) {
            context.beginPath();
            context.moveTo(this.x * ((BLOCK_WIDTH * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.south_door[0]) + SPACE_SIZE / 2, this.y * ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * (this.south_door[1] + 1)));
            context.lineTo(this.south.x * ((BLOCK_WIDTH * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.south.north_door[0]) + SPACE_SIZE / 2, this.south.y * ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.south.north_door[1]));
            context.stroke();
        }
        if(this.east !== null) {
            context.beginPath();
            context.moveTo(this.x * ((BLOCK_WIDTH * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * (this.east_door[0] + 1)), this.y * ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.east_door[1]) + SPACE_SIZE / 2);
            context.lineTo(this.east.x * ((BLOCK_WIDTH * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.east.west_door[0]), this.east.y * ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * (this.east.west_door[1] + 1)) - SPACE_SIZE / 2);
            context.stroke();
        }
        if(this.west !== null) {
            context.beginPath();
            context.moveTo(this.x * ((BLOCK_WIDTH * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.west_door[0]), this.y * ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * this.west_door[1]) + SPACE_SIZE / 2);
            context.lineTo(this.west.x * ((BLOCK_WIDTH * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * (this.west.east_door[0] + 1)), this.west.y * ((BLOCK_HEIGHT * SPACE_SIZE) + BLOCK_DISTANCE) + (SPACE_SIZE * (this.west.east_door[1] + 1)) - SPACE_SIZE / 2);
            context.stroke();
        }
    };

    this.spawn_links = function(min_width, max_width, min_height, max_height, spawn_chance, relink_chance) {
        var spawn_weight = spawn_chance;
        var relink_weight = relink_chance;
        var min_room_width = min_width;
        var max_room_width = max_width;
        var min_room_height = min_height;
        var max_room_height = max_height;
        last_room_spawned = this;
        if(num_rooms >= target_num_rooms) {
            return;
        }
        if(random_range(0, 100) <= spawn_weight) {
            if(this.y > 0) {
                if(typeof rooms[x][y - 1] === 'undefined'){
                    this.set_door("north", new room(x, y - 1, random_range(min_room_width, max_room_width), random_range(min_room_height, max_room_height)));
                    this.north.set_door("south", this);
                    num_rooms += 1;
                    if(num_rooms >= target_num_rooms) {
            			return;
        			}
                    this.north.spawn_links(min_width, max_width, min_height, max_height, spawn_weight, relink_weight);
                } else if(random_range(0, 100) <= relink_weight){
                    this.set_door("north", rooms[x][y - 1]);
                    this.north.set_door("south", this);
                }
            }
        }
        if(num_rooms >= target_num_rooms) {
            return;
        }
        if(random_range(0, 100) <= spawn_weight) {
            if(this.y < BLOCKS_HEIGHT - 1) {
                if(typeof rooms[x][y + 1] === 'undefined'){
                    this.set_door("south", new room(x, y + 1, random_range(min_room_width, max_room_width), random_range(min_room_height, max_room_height)));
                    this.south.set_door("north", this);
                    num_rooms += 1;
                    if(num_rooms >= target_num_rooms) {
            			return;
        			}
                    this.south.spawn_links(min_width, max_width, min_height, max_height, spawn_weight, relink_weight);
                } else if(random_range(0, 100) <= relink_weight){
                    this.set_door("south", rooms[x][y + 1]);
                    this.south.set_door("north", this);
                }
            }
        }
        if(num_rooms >= target_num_rooms) {
            return;
        }
        if(random_range(0, 100) <= spawn_weight) {
            if(this.x < BLOCKS_WIDTH - 1) {
                if(typeof rooms[x + 1][y] === 'undefined'){
                    this.set_door("east", new room(x + 1, y, random_range(min_room_width, max_room_width), random_range(min_room_height, max_room_height)));
                    this.east.set_door("west", this);
                    num_rooms += 1;
                    if(num_rooms >= target_num_rooms) {
            			return;
        			}
                    this.east.spawn_links(min_width, max_width, min_height, max_height, spawn_weight, relink_weight);
                } else if(random_range(0, 100) <= relink_weight){
                    this.set_door("east", rooms[x + 1][y]);
                    this.east.set_door("west", this);
                }
            }
        }
        if(num_rooms >= target_num_rooms) {
            return;
        }
        if(random_range(0, 100) <= spawn_weight) {
            if(this.x > 0) {
                if(typeof rooms[x - 1][y] === 'undefined'){
                    this.set_door("west", new room(x - 1, y, random_range(min_room_width, max_room_width), random_range(min_room_height, max_room_height)));
                    this.west.set_door("east", this);
                    num_rooms += 1;
                    if(num_rooms >= target_num_rooms) {
            			return;
        			}
                    this.west.spawn_links(min_width, max_width, min_height, max_height, spawn_weight, relink_weight);
                } else if(random_range(0, 100) <= relink_weight){
                    this.set_door("west", rooms[x - 1][y]);
                    this.west.set_door("east", this);
                }
            }
        }
    };

}
function random_range(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function are_adjacent(unit1, unit2) {
	if(unit1.x + 1 === unit2.x && unit1.y === unit2.y){
		return true;
	} else if(unit1.x - 1 === unit2.x && unit1.y === unit2.y){
		return true;
	} else if(unit1.x === unit2.x && unit1.y + 1 === unit2.y){
		return true;
	} else if(unit1.x === unit2.x && unit1.y - 1 === unit2.y){
		return true;
	}
	return false;
}