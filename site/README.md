# Site vitrine JUBRIKA

## Voir le site
Ouvrir `index.html` (double-clic). Aucun serveur n'est nécessaire.

## Modifier le code
Le code source est dans `js/` (`app.js`, `glasses3d.js`, `products.js`, `delivery.js`).
Le navigateur charge `js/bundle.js`, généré à partir de ces fichiers. Après une modification :

    npx esbuild@0.21.5 js/app.js --bundle --format=iife --minify --alias:three=./vendor/three.module.min.js --outfile=js/bundle.js

- Produits, prix, photos : `js/products.js`
- Frais de livraison : `js/delivery.js`
- Photos : `img/products/`
- Lunettes 3D : modèle créé en code dans `js/glasses3d.js` (three.js, licence MIT : `vendor/three.LICENSE`)
