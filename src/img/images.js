/**
 * Import images, which name is stated in the projects database.
 *
 * The webpage uses "Create React App" (react-scripts) to create the React webpage.
 *
 * To show images, the images must be imported (by using import or the require function)
 * in a JavaScript module. This tells Webpack to include the image in the bundle.
 * This importing givs a string of value and is the final path to be used as a
 * reference in the src attribute of an image.
 *
 * https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-images-fonts-and-files
 */

// Animal project in Africa
import greenbay_logo from './logo/greenbay_logo.png';
import africa from './projects/africa.png';
import animal_project_africa from './projects/animal_project_africa.jpg';
import animal_africa from './projects/animal_africa.jpg';

// Baltic sea project
import water from './projects/water.jpg';
import baltic_sea_project from './projects/baltic_sea_project.jpg';
import blue_sea from './projects/blue_sea.jpg';

// Caribbean coral reef
import caribbean from './projects/caribbean.jpg';
import caribbean_coral_reef from './projects/caribbean_coral_reef.jpg';

// Textile production Asia
import textile_asia from './projects/textile_asia.jpg';
import textile_production_asia from './projects/textile_production_asia.jpg';

// icons
import icon_animal from './icons/animals.png';
import icon_environmental from './icons/environment.png';
import icon_humaniterian from './icons/charity.png';
import icon_facebook from './icons/facebook.png';
import icon_tweet from './icons/tweet.png';

export {
    greenbay_logo,
    africa,
    animal_project_africa,
    animal_africa,
    water,
    baltic_sea_project,
    blue_sea,
    caribbean,
    caribbean_coral_reef,
    textile_asia,
    textile_production_asia,
    icon_animal,
    icon_environmental,
    icon_humaniterian,
    icon_facebook,
    icon_tweet
}
