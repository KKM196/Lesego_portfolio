Drop real photos in this folder, e.g.:
  look-01.jpg, portrait.jpg, campaign-01.jpg ...

Then in src/data.js and the section components (Hero.jsx, About.jsx),
swap <PlaceholderImage label="..." /> for:

  import lookOne from '../assets/look-01.jpg'
  ...
  <img src={lookOne} alt="Describe the shot" className="..." />

Keep hero/about images around 1600px on the long edge, and gallery
images around 1000-1200px — large enough to look crisp, small enough
to load fast.
