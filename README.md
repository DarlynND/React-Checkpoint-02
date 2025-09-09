# FIFA Player Cards

Une application React moderne présentant des cartes de joueurs FIFA interactives avec des animations et effets visuels impressionnants.

## Fonctionnalités

- ✅ **6 joueurs legendaires** avec données complètes
- ✅ **Composant Player modulaire** avec destructuring des props
- ✅ **Props par défaut** définies pour tous les attributs
- ✅ **Mapping avec spread operator** pour optimiser le passage de props
- ✅ **Cartes React Bootstrap** responsives et interactives
- ✅ **Styling inline créatif** avec animations CSS
- ✅ **Design FIFA authentique** avec couleurs et effets
- ✅ **Statistiques en temps réel** des joueurs affichés

## Joueurs Inclus

1. **Lionel Messi** - Inter Miami CF (Argentine) 🇦🇷
2. **Cristiano Ronaldo** - Al Nassr (Portugal) 🇵🇹
3. **Kylian Mbappé** - PSG (France) 🇫🇷
4. **Erling Haaland** - Manchester City (Norvège) 🇳🇴
5. **Kevin De Bruyne** - Manchester City (Belgique) 🇧🇪
6. **Virgil van Dijk** - Liverpool (Pays-Bas) 🇳🇱

## Technologies Utilisées

- **React 18** - Framework JavaScript moderne
- **React Bootstrap** - Composants UI responsives
- **CSS3 Animations** - Effets visuels avancés
- **Font Awesome** - Icônes professionnelles
- **Google Fonts** - Polices Orbitron & Roboto

## Installation

1. **Cloner le repository :**
\```bash
git clone https://github.com/votre-username/fifa-player-cards.git
cd fifa-player-cards
\```

2. **Installer les dépendances :**
\```bash
npm install
\```

3. **Lancer l'application :**
\```bash
npm start
\```

4. **Ouvrir dans le navigateur :**
   [http://localhost:3000](http://localhost:3000)

## Caractéristiques Techniques

### Structure des Composants
- **Player.js** : Composant de carte individuel avec destructuring
- **PlayersList.js** : Composant liste utilisant .map() et spread operator
- **players.js** : Données centralisées des joueurs

### Props et Styling
- **Props par défaut** définies pour tous les attributs
- **Styling inline créatif** avec JavaScript
- **Animations CSS** pour les interactions
- **Design responsive** pour tous les écrans

### Fonctionnalités Avancées
- **Cartes colorées par rating** (Or, Argent, Bronze)
- **Effets de survol 3D**
- **Animations d'entrée échelonnées**
- **Statistiques automatiques**

## Structure du Code

\```
src/
├── components/
│   ├── Player.js          # Composant carte joueur
│   └── PlayersList.js     # Liste des joueurs
├── data/
│   └── players.js         # Données des joueurs
├── styles/
│   └── App.css           # Styles et animations
├── App.js                # Composant racine
└── index.js              # Point d'entrée
\```

## Scripts Disponibles

\```bash
npm start      # Démarrer en mode développement
npm run build  # Construire pour la production
npm test       # Lancer les tests
npm run eject  # Éjecter la configuration (irréversible)
\```

## Personnalisation

### Ajouter un Nouveau Joueur
Modifiez le fichier `src/data/players.js` :

\```javascript
{
  name: "Votre Joueur",
  team: "Votre Équipe",
  nationality: "Votre Pays",
  jerseyNumber: 10,
  age: 25,
  imageUrl: "URL_de_l_image",
  position: "Position",
  rating: 85,
  skills: ["Compétence1", "Compétence2"]
}
\```

### Modifier les Couleurs
Ajustez les gradients dans `src/styles/App.css` :

\```css
.fifa-title {
  background: linear-gradient(45deg, #
