Homework 3 README ~ mjloyola

Part A: (Extra Credit)
I couldn't get the bundle.js to compile correctly so I couldn't recreate the git example from class in my own environment, thus I decided to skip this part.

Part B:
I made a 3D scene drawn entirely by the fragment shader and using a plane for a fullscreen quad. I went for a kind of "atom" theme to this design althrough it could also be mimicking the gravity of a planet. 

There is a central shape which will always rest to a square but will stransform to a sphere and then a cross-section of cylinders. I think the most interesting part is I was able to tweak the timing and radius values to a point where the shapes intersect to create intricute designs between the box/sphere phase of the morph. The entire cycle is decently long but you can always tell when the transform cycle is complete because the shape will rest and become a cube for a couple of seconds. The shape is surrounded by a torus circle which follows its own movement pattern but is centered around the "gravity" of the center. The final layer is a bunch of mini spheres, each with their own pattern of movement around the center. This kind of looks like the moons of a planet but can also be electrons, etc in reference to an atom. 

For extra credit, I applied a fiery texture on top of the objects that complements the color scheme I went for with the phong illumination technique. 

Part C:
My group and I will be coordinating a more diverse and complex project idea in the next week, however for this write-up I chose to look into Crepuscular rays, also sometimes referred to as "God Rays" in video games. This is perhaps my favorite effect in any video game and is often quite taxing to performance. I wanted to look into how it might be implemented as a shader and perhaps it can be used in our group project.

One initial idea our group had was to utilize data provided online on the specifications of buildings and landmarks of the university campus in order to generate heighmaps and create a 3D scene of the school similar to Google Street View. We'd incorporate things like the water from the nearby beach and lighting of trees. On the surface this seems very ambitious given the time constraints so if we choose to work on this idea it would definitely need to be scaled down to only sample a bit of everything.