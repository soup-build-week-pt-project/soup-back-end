`categories` {

`id` integer NOT NULL PRIMARY KEY AUTOINCREMENT,
`category` varchar ( 255 ) NOT NULL

};

`inventory` {

`id` integer NOT NULL PRIMARY KEY AUTOINCREMENT,
`item` varchar ( 255 ) NOT NULL,
`amount` float NOT NULL,
`unit` varchar ( 255 ) NOT NULL,
`category_id` integer NOT NULL,
`location_id` integer NOT NULL,
FOREIGN KEY(`location_id`) REFERENCES `locations`(`id`),
FOREIGN KEY(`category_id`) REFERENCES `categories`(`id`)

};

`locations` {

`id` integer NOT NULL PRIMARY KEY AUTOINCREMENT,
`name` varchar ( 255 ) NOT NULL,
`openings` integer NOT NULL,
`address` varchar ( 255 ) NOT NULL,
`address2` varchar ( 255 ),
`city` varchar ( 255 ) NOT NULL,
`state` varchar ( 2 ) NOT NULL,
`zip` integer NOT NULL

};

`roles` {

`id` integer NOT NULL PRIMARY KEY AUTOINCREMENT,
`role` varchar ( 255 ) NOT NULL

};

`users` {

`id` integer NOT NULL PRIMARY KEY AUTOINCREMENT,
`name` varchar ( 255 ) NOT NULL,
`title` varchar ( 255 ) NOT NULL,
`role_id` integer NOT NULL,
`loc_id` integer,
FOREIGN KEY(`role_id`) REFERENCES `roles`(`id`),
FOREIGN KEY(`loc_id`) REFERENCES `locations`(`id`)

};
