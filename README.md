# maringarden 🌲

Petit site de Noël pour la famille — fenêtres-souvenirs animées, jardin en emojis, recette, et morceaux de Michel Petrucciani.

## Voir le site en local

Comme le site utilise des chemins relatifs, tu peux soit **double-cliquer `index.html`**, soit (mieux, pour que tout se charge comme en ligne) lancer un petit serveur :

```bash
cd maringarden
python3 -m http.server 8000
# puis ouvre http://localhost:8000
```

## Mettre en ligne (GitHub Pages, gratuit)

1. Pousse ce dossier sur le repo `maringarden`.
2. Sur GitHub : **Settings → Pages**.
3. *Source* : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
4. Attends ~1 min → le site est sur `https://sambun75.github.io/maringarden/`.

Tous les liens étant relatifs, le site marche directement sous ce sous-dossier (c'était le principal point de casse de la version d'origine, où les chemins absolus `/WINDOWS/...` renvoyaient des 404).

## Structure

```
index.html            page d'accueil (les 8 fenêtres)
garden-landes.html    le jardin en emojis (Luë, Landes)
michel.html           fond animé + audio Petrucciani
oulanbator.html       le transsibérien
recettemama.html      tagliatelles d'automne
css/                  une feuille de style par page
js/landes.js          génère la grille du jardin
assets/               tous les médias, optimisés
```

## Optimisation

Les visuels d'origine (~140 Mo utiles) ont été réduits à ~21 Mo (**-84 %**), sans changer le rendu :
- GIF animés → **WebP animé** (reste dans les `<img>`, donc le fondu au survol est intact) ;
- gros PNG de survol 3024px → WebP redimensionné ;
- MP3 ré-encodés en 128 kbps ;
- `Sans titre.mov` converti en WebP animé pour la fenêtre jaune.

Les fichiers renommés en slugs simples (plus d'espaces, accents ni deux-points) pour éviter les bugs de serveur et de casse Linux.

## À savoir

**Fenêtre orange** : ses deux images d'origine (`MOSHED-...-1-14-22` et `-1-12-44`) manquaient dans le zip. J'ai mis à la place deux autres MOSHED de la même session (`win-orange-a/b.webp`). Si tu retrouves les bons fichiers, remplace juste ces deux-là dans `assets/`.

**Effets de survol optionnels absents** — si tu veux les activer, dépose dans `assets/` un fichier à ces noms exacts :
| effet | nom attendu |
|---|---|
| survol vélo 🚲 | `velo.webp` |
| survol glace 🍦 | `miam.webp` |
| survol lapin 🐇 | `rabbit.webp` |
| survol écureuil 🐿 | `squirrel.webp` |
| curseur lapin | `cursor-rabbit.png` |

Sans eux, le site marche parfaitement — ces survols n'affichent simplement rien.
