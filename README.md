# 🎮 shezzor's JavaScript Game Development Template

A small template to jump start your web/browser based game development using the
HTML canvas element.

## ✔️ What this is

A code template designed to be used as a starting point your javascript game
development which handles the initial boilerplate code. It also includes a number
of useful utility functions to help you along the way.

It includes...

- A standard folder scaffolding and code structure.
- A canvas element and its context. This is already configured and set up for you.
- The main game loop with a general usage time object.
- Basic keyboard and gamepad control handlers.
- A small set of handy utility functions to help with some of the game basics.
- A set of TypeScript types for a number of the objects i've preconfigured.
- A quick example on how to use the code.

## ❌ What this isn't

A framework. You'll still need to understand how the canvas element and web works.
Which honestly can only be a good thing. You'll be learning the browser and its
features rather than someone elses interpretation of it.

## 🎫 Whats required

- A recent browser (preferably within the last 6 months).
  - _NOTE: This repo uses native ES modules and import maps._
- Some understanding of the latest JavaScript and/or TypeScript development
  practices.

## ⭐ Getting started

Simply clone the repo and open the resulting code in your favourite editor.

By default, this repo uses native ES modules so you'll need to host the files on a
development server. Or preferably, you can use one of the very handy "Live Server"
extensions available for various editors which handles this for you.

Alternatively, if you prefer to have full control, you can bake in your own build
pipeline. As there's many toolchain/build tools available, this is out of scope for
this repo.

This repo also includes npm dependencies and a set of types to help with TypeScript
development but this is not required or configured by default. Although, I'll be
looking how I can automatically configure either JS/TS style environments in the
future.

## 👨‍💻 Example code

Included is a small example of how to move an image around the screen using the code
supplied.

`index.js` = Is the main entry point for the example. This calls the `start` function
on our main loop class...

`TemplateDemo.js` = Is the main loop class. This sets up the canvas and initial scene
using the base `Game` class. Speaking of which...

`TestScene.js` = Is the main scene for the included example. This houses all the logic
and drawing routines for each "frame" of the game.

`Logo.js` = An example of an "entity" using the `Entity` class.

Note: The code uses importmaps and has the `engine` and `game` folders already aliased
for easier imports paths.

## 📃 Included example credits

- Code - Anthony Sherratt
- Graphics - Originally Robin Levy but remastered by Anthony Sherratt
- Music - Space_Cat [https://pixabay.com/users/space_cat-7706897/]

## 🔖 Next steps

To keep improving what is included here (including this documention!).

If you wish to see what can be done with this template, why not join me on my YouTube
channel? As I'll be using this as a starting point for all of my projects moving
forward.

https://www.youtube.com/@shezzor
